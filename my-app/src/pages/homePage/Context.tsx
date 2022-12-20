import React, {KeyboardEvent, useCallback} from 'react'
import {useEffect, useState} from 'react'
import {genericHookContextBuilder} from '../../helpers/genericHookContextBuilder'
import {ArticlePage} from './ArticlePage/ArticlePage'
import {services} from '../../helpers/services'
import {BlogHome} from './BlogeHome/BlogHome'
import {useParams} from "react-router-dom";

export type BlogPostType = {
    _id: string
    title: string
    tags: Array<string | null>
    text: string
    createdAt: Date
    user: UserType
    imageUrl: string
}
export type UserType = {
    _id: string
    email: string
    fullName: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
}

const useLogicState = () => {
    const [auth, setAuth] = useState<any>()
    const [postsArray, setPostsArray] = useState([] as BlogPostType[])
    const [showPost, setShowPost] = useState(false)
    const [searchTag, setSearchTag] = useState<string | null>('')
    const [comment, setComment] = useState('')
    const [commentArray, setCommentArray] = useState([])
    const {id} = useParams()
    const getUserInfo = async () => {
        try {
            const {data} = await services.blog.userInfo()
            setAuth(data)
        } catch (err) {
            console.log(err)
        }
    }

    const getPosts = async () => {
        try {
            setPostsArray(await services.blog.list())
        } catch (err) {
            console.log(err)
        }
    }

    const searchPostsFilter = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter') return
        const value = (e.target as HTMLInputElement).value
        if (value === '') {
            return setSearchTag(null)
        }
        setSearchTag(value.toLowerCase())
    }


    const deletePost = async (id: string) => {
        try {
            await services.blog.deletePost(id)
            setPostsArray(await services.blog.list())
        } catch (err) {
            alert(`Can't delete the post`)
        }
    }

    const showOnePost = () => {
        setShowPost(true)
    }

    const createComment = async () => {
        try {
            const {data} = await services.blog.postComment({id, comment})
            setComment('')
        } catch (err) {
            console.log(err)
        }
    }

    const getComment = useCallback(async () => {
        try {
            if (id) {
                setCommentArray(await services.blog.getComments(id))
            }
        } catch (err) {
            console.log(err)
        }
    }, [setComment])


    useEffect(() => {
        getComment()
    }, [createComment])


    useEffect(() => {
        getUserInfo()
        getPosts()
    }, [])


    return {
        auth,
        setAuth,
        getUserInfo,
        postsArray,
        getPosts,
        setPostsArray,
        deletePost,
        showOnePost,
        showPost,
        setShowPost,
        searchTag,
        setSearchTag,
        searchPostsFilter,
        commentArray,
        setCommentArray,
        comment,
        setComment,
        getComment,
        createComment
        , id
    }
}

export const {ContextProvider: BlogContextProvider, Context: PostContext} =
    genericHookContextBuilder(useLogicState)

export const BlogUseContext = () => {
    return (
        <BlogContextProvider>
            <BlogHome/>
        </BlogContextProvider>
    )
}
export const {
    ContextProvider: ArticleContextProvider,
    Context: ArticleContext
} = genericHookContextBuilder(useLogicState)

export const ArticleUseContext = () => {
    return (
        <ArticleContextProvider>
            <ArticlePage/>
        </ArticleContextProvider>
    )
}
