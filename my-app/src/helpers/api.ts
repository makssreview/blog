import axios from '../axios'
import { Configuration, PostsApi } from '../swagger'
import { useContext, useMemo } from 'react'
import {LoginContext, LogoutContext} from '../pages/authentication/Context'

export function createConfiguration(authToken?: string) {
  return new Configuration({
    basePath: 'http://localhost:3222',
    accessToken: authToken
  })
}
export const api = () => {
  // const { token } = useContext(LoginContext)
  const config = createConfiguration(undefined)
  const postsApi = new PostsApi(config)
  return postsApi}


   // postsApi
   //  .postGet()
   //  .then((res) => {
   //    console.log(res.data)
   //  })
   //  .catch((err) => {
   //    console.log(err)
   //  })

