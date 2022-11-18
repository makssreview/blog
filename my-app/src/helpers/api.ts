import axios from '../axios'
import { Configuration, PostsApi } from '../swagger'
import { useContext, useMemo } from 'react'
import {LoginContext, LogoutContext} from '../pages/authentication/AuthContext'

export function createConfiguration(authToken?: string) {
  return new Configuration({
    basePath: axios,
    accessToken: authToken
  })
}
export const AddPostPage = () => {
  const { token } = useContext(LoginContext)
  const config = useMemo(() => createConfiguration(token ?? undefined), [token])
  const postsApi = useMemo(() => new PostsApi(config), [config])

   postsApi
    .postGet()
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
