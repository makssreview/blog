import axios from "../axios";
import {BlogPostType} from "../pages/homePage/BlogHomeContext";

type InputType = {
    title: string
    text: string
    imageUrl: string
}
type RegisterInput = {
    email: string,
    password: string,
    fullName: string,
}
type LoginInput = {
    email: string,
    password: string,
}
export const services = {
    blog: {
        list: async () => {
            const response = axios.get('/posts').then(res => res.data)
            return (await response) as BlogPostType[]
        },
        addPost: async (post: InputType) => {
            const response = axios.post('/posts', post)
            return (await response) as unknown as BlogPostType
        },
        deletePost: async (id: string) => {
            const response = await axios.delete(`/posts/${id}`)
            return (await response) as unknown as BlogPostType
        },
        register: async (form: RegisterInput) => {
            const response = await axios.post('/auth/register', form)
            return (await response)
        },
        login: async (loginForm: LoginInput) => {
            const response = axios.post('/auth/login', loginForm)
            return (await response)
        },
        userInfo: async ()=>{
            const response = await axios.get('/auth/me')
            return (await response)
        },
        getAllUsers: async ()=>{
            const response = await axios.get('/auth/all-users')
            return (await response.data)
        }
    }
}