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
            <Link to={`/posts/${props.post?._id}`} onClick={() => logic.showOnePost()}>
                <ItemWrapper src={`http://localhost:3222${props.post.imageUrl}`} alt='cover'/>
                <TitleWrapper>{props.post.title}</TitleWrapper>
                <TextWrapper>{props.post.text}</TextWrapper>
                <FooterWrapper>
                    <DivAuthorWrapper>
                        <img src={face} alt='avatar' width={'30px'} height={'30px'}/>
                    </DivAuthorWrapper>
                    <NameWrapper>{props.post.user.fullName}</NameWrapper>
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
                </FooterWrapper>
            </Link>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 19px;
  box-shadow: 0px 0.5px 1px 1px rgba(230, 230, 230, 0.75);
  cursor: pointer;
  

`
const ItemWrapper = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
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
  font-size: 20px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding-left: 50px;
`
const TextWrapper = styled.h3`
  color: black;
  margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 7.6em;
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
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;

`
