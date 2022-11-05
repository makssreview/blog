import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { BlogItem, BlogType } from '../components/BlogItem'
import { useLocalStorage } from '../helpers/functions'
import axios from "../axios";


export const BlogHome = () => {

    const [auth, setAuth] = useState()
    const getme = async()=>{
        const{data} = await axios.get('/auth/me')
        setAuth(data)
        return data
    }

    useEffect(()=>{
        getme()
    },)

  const [postsArray, setPostsArray]=useLocalStorage('posts',[] as BlogType[] )
  axios.get('/posts').then(res=>setPostsArray(res.data))

    // const getme = async()=>{
    //     const{data} = await axios.get('/auth/me')
    //     return data
    // }
    //
    // useEffect(()=>{
    //     getme()
    // },[])


  return (
    <Container>
      <HeaderWrapper>
      </HeaderWrapper>
      <PostWrapper>
        {postsArray.map(post => (
          <BlogItem post={post}
                    isEditable={auth?.['_id']  === post.user['_id']}
          />
        ))}
      </PostWrapper>
    </Container>
  )
}

const Container = styled.div``

const HeaderWrapper = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
`
const H2 = styled.h2`
  color: #0080ff;
  font-size: 2rem;
`
const P = styled.p`
  color: #a9a9a9;
  font-weight: 500;
`
const PostWrapper = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 0 50px;
`
