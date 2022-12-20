import React, {useContext} from 'react'
import {IconButton} from '@mui/material'
import face from '../../images/photo.png'
import {Container, LinkWrapper, TextWrapper, ChipWrapper, ChipsWrapper, DivAuthorWrapper, ItemWrapper, TitleWrapper, NameWrapper, FooterWrapper} from './BlogItem.style'
import {
    BlogPostType,
    PostContext,
} from '../../pages/homePage/Context'

export type PostType = {
    post: BlogPostType
}

export const BlogItem = ({post}: PostType) => {
    const {_id, title, tags, text, user, imageUrl} = post

    const {showOnePost, auth, deletePost} = useContext(PostContext)

    return (
        <Container whileHover={{
            scale: 0.95,
            textShadow: "0px 0px 1px gray"
        }}>
            <LinkWrapper to={`/posts/${_id}`} onClick={() => showOnePost()}>
                <ItemWrapper src={`http://localhost:3222${imageUrl}`} alt='cover'/>
                <ChipsWrapper>
                    {tags.map((el, index) => (
                        <ChipWrapper key={index}>#{el}</ChipWrapper>
                    ))}
                </ChipsWrapper>
                <TitleWrapper>{title}</TitleWrapper>
                <TextWrapper>{text}</TextWrapper>
            </LinkWrapper>
            <FooterWrapper>
                <DivAuthorWrapper>
                    <img src={face} alt='avatar'/>
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
