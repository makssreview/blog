import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Chip, IconButton} from '@mui/material'
import face from '../images/photo.png'
import styled from 'styled-components'
import {BlogPostType, PostContext} from "../pages/homePage/BlogHomeContext";


export type PostType = {
    post: BlogPostType
}


export const BlogItem = (props: PostType) => {

    const logic = useContext(PostContext)
    return (
        <Container>
            <ItemWrapper src={`http://localhost:3222${props.post.imageUrl}`} alt='cover'/>
            <H3Wrapper>{props.post.title}</H3Wrapper>
            <H3Wrapper>{props.post.text}</H3Wrapper>
            <H3Wrapper>{props.post.user.fullName}</H3Wrapper>
            <FooterWrapper>
                <DivAuthorWrapper>
                    <img src={face} alt='avatar' width={'30px'} height={'30px'}/>
                </DivAuthorWrapper>
                <div>
                </div>
                {logic.auth?.userData?._id === props.post.user._id && (
                    <div>
                        <a href={`/posts/${props.post._id}/edit`}>
                            <IconButton color="primary">
                                <div>Edit</div>
                            </IconButton>
                        </a>
                        <IconButton color="primary">
                            <button onClick={() => logic.deletePost(props.post._id)}>Delete</button>
                        </IconButton>

                    </div>
                )}
                <LinkWrapper to={`/posts/${props.post?._id}`} onClick={() => logic.showOnePost()}>Discover
                    ➝</LinkWrapper>

            </FooterWrapper>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`
const ItemWrapper = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`
const H3Wrapper = styled.h3`
  margin: 0.5rem 0 1rem 0;
  flex: 1;
`
const PWrapper = styled.p`
  position: relative;
  max-height: 50px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 0.6rem;
  font-size: 0.8rem;
  color: #a9a9a9;

  & :before {
    position: absolute;
    content: '...';
    bottom: 0;
    right: 0;
  }
`
const DivAuthorWrapper = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 40px;
    height: 40px;
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
const ChipWrapper = styled(Chip)`
  && {
    color: white;
    background: linear-gradient(to right, #6190e8, #c6a7e8);
    opacity: 0.9;
    height: 30px;
    width: 100px;
    font-size: 12px;
  }
`
const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  opacity: 0.7;
`
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`
