import React from 'react'
import {useEffect, useState} from "react";
import {genericHookContextBuilder} from "../../helpers/genericHookContextBuilder";
import axios from "../../axios";
import {useNavigate} from "react-router-dom";
import {services} from "../../helpers/services";
import {AddPostPage} from "./AddPostPage";


export type BlogPostType = {
    _id: string
    title: string
    text: string
    createdAt: Date
    user: any
    imageUrl: string
}

const useLogicState = () => {
    const [auth, setAuth] = useState<any>()
    const [postsArray, setPostsArray] = useState([] as BlogPostType[])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [error, setError] = useState(null as string | null)
    const navigate = useNavigate();

    const getUserInfo = async () => {
        try{
            const {data} = await services.blog.userInfo()
            setAuth(data)
        } catch (err){
            setError (`Data is unavailable`)
        }
    }

    const addNewPost = async () => {
        const fields = {
            title, text, imageUrl
        }
        try {
            await services.blog.addPost(fields)
            setPostsArray(await services.blog.list())
            navigate('/')
        } catch (err) {
            setError(`Data is unavailable`)
        }
    }

    const uploadFileHandler = async (e: any) => {
        try {
            const formData = new FormData()
            const file = e?.target?.files[0]
            formData.append('imageUrl', file)
            const {data} = await axios.post('/upload/', formData)
            setImageUrl(data.url)
        } catch (err) {
            console.warn(err)
        }
    };
    const removeFileHandler = () => {
        setImageUrl('')
    };

    useEffect(() => {
        getUserInfo()
    }, [])


    return {
        auth,
        setAuth,
        getUserInfo,
        postsArray,
        setPostsArray,
        addNewPost,
        title,
        setTitle,
        text,
        setText,
        imageUrl,
        setImageUrl,
        uploadFileHandler,
        removeFileHandler
    }
}

export const {ContextProvider: NewPostContextProvider, Context: NewPostContext} =
    genericHookContextBuilder(useLogicState)

export const AddPostUseContext = () => {
    return (
        <NewPostContextProvider>
            <AddPostPage/>
        </NewPostContextProvider>
    )
}