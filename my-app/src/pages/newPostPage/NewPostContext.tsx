import React from 'react'
import {useEffect, useState} from 'react'
import {genericHookContextBuilder} from '../../helpers/genericHookContextBuilder'
import axios from '../../axios'
import {useNavigate, useParams} from 'react-router-dom'
import {services} from '../../helpers/services'
import {AddPostPage} from './AddPostPage'
import {BlogPostType} from '../homePage/BlogHomeContext'



const useLogicState = () => {
    const [auth, setAuth] = useState<any>()
    const [postsArray, setPostsArray] = useState([] as BlogPostType[])
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState<Array<string>>([])
    const [text, setText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [error, setError] = useState(null as string | null)
    const navigate = useNavigate()
    const {id} = useParams()
    const isEditing = Boolean(id)
    console.log(id)

    const getUserInfo = async () => {
        try {
            const {data} = await services.blog.userInfo()
            setAuth(data)
        } catch (err) {
            setError(`Data is unavailable`)
        }
    }

    const addNewPost = async () => {
        const fields = {
            title,
            tags,
            text,
            imageUrl
        }
        try {
            isEditing ?await services.blog.editPost({fields, id})
                      : await services.blog.addPost(fields)

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
    }
    const removeFileHandler = () => {
        setImageUrl('')
    }

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
        removeFileHandler,
        tags,
        setTags,
        isEditing,
    }
}

export const {
    ContextProvider: NewPostContextProvider,
    Context: NewPostContext
} = genericHookContextBuilder(useLogicState)

export const AddPostUseContext = () => {
    return (
        <NewPostContextProvider>
            <AddPostPage/>
        </NewPostContextProvider>
    )
}
