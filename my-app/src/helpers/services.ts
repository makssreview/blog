import axios from '../axios'
import { BlogPostType } from '../pages/homePage/BlogHomeContext'


type InputType = {
  title: string
  tags: Array<string>
  text: string
  imageUrl: string
}
type EditType = {
  fields:InputType
  id:string |undefined
}
type RegisterInput = {
  email: string
  password: string
  fullName: string
}
type LoginInput = {
  email: string
  password: string
}
type CommentType = {
  id?:string
  comment:string
}
export const services = {
  blog: {
    list: async () => {
      const response = axios.get('/posts').then((res) => res.data)
      return (await response)
    },
    addPost: async (post: InputType) => {
      const response = axios.post('/posts', post)
      return (await response) as unknown as BlogPostType
    },
    editPost: async (post: EditType) => {
      const response = axios.patch(`/posts/${post.id}`, post.fields)
      return (await response) as unknown as BlogPostType
    },
    deletePost: async (id: string) => {
      const response = await axios.delete(`/posts/${id}`)
      return await response
    },
    register: async (form: RegisterInput) => {
      const response = await axios.post('/auth/register', form)
      return await response
    },
    login: async (loginForm: LoginInput) => {
      const response = axios.post('/auth/login', loginForm)
      return await response
    },
    userInfo: async () => {
      const response = await axios.get('/auth/me')
      return await response
    },
    getAllUsers: async () => {
      const response = await axios.get('/auth/all-users')
      return await response.data
    },
    getComments: async (id:string)=>{
      const response = await axios.get(`/posts/comments/${id}`).then((res)=>res.data)
      return (await response)
    },
    postComment: async ({id, comment}:CommentType)=>{
      const response = await axios.post(`/comments/${id}`, {id, comment})
      return (await response)
    }
  }
}
