import React, {useContext} from 'react'
import styled from 'styled-components'
import { BlogItem } from '../../components/BlogItem'
import {PostContext} from "./BlogHomeContext";


export const BlogHome = () => {
    const logic = useContext(PostContext)


  return (
    <Container>
      <HeaderWrapper>
      </HeaderWrapper>
      <PostWrapper>
        {logic.postsArray.map((post) => (
          <BlogItem post={post} key={post._id}
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
