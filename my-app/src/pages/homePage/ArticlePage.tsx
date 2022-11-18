import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ArticleContext} from './BlogHomeContext'
import {CommentItem} from "../../components/CommentItem";
import {Button, TextField} from "@mui/material";


export const ArticlePage = () => {
    const {postsArray, setComment, comment, id, commentArray, createComment} = useContext(ArticleContext)
    const blog = postsArray.find((post) => post._id === id)
    const date = blog && new Date(blog.createdAt).toLocaleDateString('en-US')

    return (
        <Container>
            <LinkWrapper to={'/'}>
                <span>&#8592; Go Back</span>
            </LinkWrapper>
            {blog && (
                <BlogWrapper>
                    <Header>
                        <TitleWrapper>{blog.title}</TitleWrapper>
                        <div></div>
                    </Header>
                    <ImgWrapper
                        src={`http://localhost:3222${blog.imageUrl}`}
                        alt='cover'
                    />
                    <TextWrapper>{blog.text}</TextWrapper>
                    <CategoryWrapper>
                        <DateWrapper>
                            Published at {date} by {blog.user.fullName}
                        </DateWrapper>
                    </CategoryWrapper>
                    <LineWrapper/>
                    <CommetTitle>Comments:</CommetTitle>
                    <CommentWrapper>
                    <TextFieldWrapper
                        label='Leave a comment'
                        sx={{
                            width: { sm: 900, md: 900 },
                            "& .MuiInputBase-root": {
                                height: 90
                            }}}
                        InputProps={{ sx: { height: 50 } }}
                        placeholder="Your comment"
                        value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <Button
                        size='large'
                        variant='contained'
                        onClick={()=>createComment()}>Comment</Button>
                    </CommentWrapper>
                    <OneCommentWrapper>
                        {commentArray.reverse().map((cmt, index) => (
                            <CommentItem key={index} cmt={cmt}/>
                        ))}
                    </OneCommentWrapper>
                </BlogWrapper>
            )}
        </Container>
    )
}
const LinkWrapper = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: #a9a9a9;
  font-weight: 500;
  display: block;
  padding: 10px 20px;
  max-width: 100px;
`
const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`
const BlogWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 95%;
  padding: 0.5rem 0;
  gap: 1rem;
`
const DateWrapper = styled.div`
  font-size: 12px;
  color: #a9a9a9;
  font-weight: 500;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
`
const ImgWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  max-height: 400px;
`
const TextWrapper = styled.p`
  padding: 1rem;
  margin-top: 1.5rem;
`
const Container = styled.div`
  max-width: 900px;
  background-color: white;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin: 30px auto;
  width: 90%;
  padding: 1rem 0px;
  gap: 1rem;
`
const LineWrapper = styled.hr`
  width: 100%;
  margin: 20px auto 20px auto;
`
const TitleWrapper = styled.div`
  font-size: 25px;
  line-height: 1.6em;
  text-align: center;
  margin-bottom: 10px;
`
const CommetTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`
const CommentWrapper = styled.div`
  align-items: end;
  display: flex;
  gap:10px
`
const TextFieldWrapper =styled(TextField)`
  max-width: 70%;
`
const OneCommentWrapper = styled.div`

`