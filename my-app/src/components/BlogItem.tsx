import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Chip, IconButton } from '@mui/material'
import face from '../images/photo.png'
import styled from 'styled-components'
import {
  BlogPostType,
  PostContext,
} from '../pages/homePage/BlogHomeContext'

export type PostType = {
  post: BlogPostType
}

export const BlogItem = ({ post }: PostType) => {
  const { _id, title, tags, text, user, imageUrl } = post

    const {showOnePost, auth,deletePost} = useContext(PostContext)

  return (
    <Container>
      <LinkWrapper to={`/posts/${_id}`} onClick={() => showOnePost()}>
        <ItemWrapper src={`http://localhost:3222${imageUrl}`} alt='cover' />
        {tags.map((el, index) => (
          <ChipWrapper key={index}>#{el}</ChipWrapper>
        ))}
        <TitleWrapper>{title}</TitleWrapper>
        <TextWrapper>{text}</TextWrapper>
      </LinkWrapper>
      <FooterWrapper>
        <DivAuthorWrapper>
          <img src={face} alt='avatar' />
        </DivAuthorWrapper>
        <NameWrapper>{user.fullName}</NameWrapper>
        <div></div>

        {auth?.userData?._id === post.user._id && (
          <div>
            <a href={`/posts/${_id}/edit`}>
              <IconButton color='primary'>
                <div>Edit</div>
              </IconButton>
            </a>
            <IconButton color='primary'>
              <button onClick={() => deletePost(_id)}>Delete</button>
            </IconButton>
          </div>
        )}
      </FooterWrapper>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 19px;
  box-shadow: 0px 0.5px 1px 1px rgba(230, 230, 230, 0.75);
`
const LinkWrapper = styled(Link)`
  cursor: pointer;
  height: 456px;
`

const ItemWrapper = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
  margin-bottom: 0.5rem;
  opacity: 0.8;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`
const NameWrapper = styled.h3`
  margin: 0.5rem 0 1rem 0;
  flex: 1;
  max-width: 100px;
`
const TitleWrapper = styled.h3`
  font-family: 'Calibri Light';
  font-weight: bolder;
  font-size: 20px;
  max-width: 300px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 12px;
  padding-right: 12px;
`
const TextWrapper = styled.h3`
  color: black;
  //margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 7.7em;
  line-height: 1.6em;
  padding-left: 10px;
  padding-right: 10px;
`

const DivAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 0.5rem;

  & img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  & p {
    font-size: 0.6rem;
    color: #a9a9a9;
    font-weight: 600;
  }
`
const ChipWrapper = styled.div`
  background: linear-gradient(to right, #6190e8, #c6a7e8);
  font-size: 18px;
  color: rgb(245, 245, 245);
  padding: 0.2rem 0.7rem;
  border-radius: 10px;
  width: fit-content;
  text-transform: capitalize;
  justify-content: start;
  display: inline-flex;
  margin: 5px 5px 10px 10px;
`
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
