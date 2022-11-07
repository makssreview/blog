import React from 'react'
import { useEffect, useState} from "react";
import {genericHookContextBuilder} from "../../helpers/genericHookContextBuilder";
import axios from "../../axios";
import {ArticlePage} from "./ArticlePage";
import {services} from "../../helpers/services";
import {BlogHome} from "./BlogHome";


export type BlogPostType = {
    _id: string
    title: string
    text: string
    createdAt: Date
    user: UserType
    imageUrl: string
}
export type UserType ={
    _id: string
    email:string
    fullName:string
    passwordHash:string
    createdAt:Date
    updatedAt:Date
}

const useLogicState = () => {
    const [auth, setAuth] = useState<any>()
    const [postsArray, setPostsArray] = useState([] as BlogPostType[])
    const [error, setError] = useState(null as string | null)
    const [showPost, setShowPost] =useState(false)


    const getUserInfo = async () => {
        try{
            const {data} = await services.blog.userInfo()
            setAuth(data)
        } catch (err){
            setError (`Data is unavailable`)
        }
    }

    const getPosts = async () => {
        try {
            setPostsArray(await services.blog.list())
        } catch (err) {
            setError(`Data is unavailable`)
        }
    }


    const deletePost = async (id: string) => {
        try {
            await services.blog.deletePost(id)
            setPostsArray(await services.blog.list())
        } catch (error) {
            alert('ddd')
        }
    }


    const showOnePost =()=>{
        setShowPost(true)
    }

    useEffect(() => {
        getUserInfo()
    },[])

    useEffect(() => {
        getPosts()
    })


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
export const {ContextProvider: ArticleContextProvider, Context: ArticleContext} =
    genericHookContextBuilder(useLogicState)

export const ArticleUseContext = () => {
    return (
        <ArticleContextProvider>
            <ArticlePage/>
        </ArticleContextProvider>
    )
}
