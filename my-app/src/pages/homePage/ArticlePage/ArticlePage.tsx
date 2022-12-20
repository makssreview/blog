import React, {useContext} from 'react'
import {ArticleContext} from '../Context'
import {CommentItem} from "../../../components/CommentItem/CommentItem";
import {Button, TextField} from "@mui/material";
import {Container, LinkWrapper, CategoryWrapper, CommentWrapper, OneCommentWrapper, DateWrapper, ImgWrapper, LineWrapper, TextWrapper, TextFieldWrapper, TitleWrapper, CommetTitle, BlogWrapper, Header} from './ArticlePage.style'

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
                        {commentArray.reverse().map((commentData, index) => (
                            <CommentItem key={index} commentData={commentData}/>
                        ))}
                    </OneCommentWrapper>
                </BlogWrapper>
            )}
        </Container>
    )
}
