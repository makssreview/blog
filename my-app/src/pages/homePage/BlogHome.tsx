import React, {useContext} from 'react'
import styled from 'styled-components'
import {BlogItem} from '../../components/BlogItem'
import {PostContext} from './BlogHomeContext'
import {Search} from '../../components/Search'


export const BlogHome = () => {
    const {searchTag, postsArray} = useContext(PostContext)

    const isFilter = Boolean(searchTag) ?? false
    const filteredArray = isFilter
        ? postsArray.filter((el) => el.tags.includes(searchTag))
        : postsArray

    return (
        <Container>
            <Search/>
            <PostWrapper>
                {filteredArray.reverse().map((post) => (
                    <BlogItem post={post} key={post._id}/>
                ))}
            </PostWrapper>
        </Container>
    )
}

const Container = styled.div``

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
  padding: 10px 30px;
  gap: 30px;
`
