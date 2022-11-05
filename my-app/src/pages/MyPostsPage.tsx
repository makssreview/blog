import React, {useEffect, useState} from 'react';
import face from "../images/photo.png";
import {BlogType} from "../components/BlogItem";
import styled from "styled-components";
import {Chip} from "@mui/material";
import {Link} from "react-router-dom";
import {useLocalStorage} from "../helpers/functions";

export const MyPostsPage = () => {
    const [postsArray, setPostsArray]=useLocalStorage('posts',[] as BlogType[] )
    const filteredPosts= postsArray.filter(el=>el.user[''])
    return (
        <Container>
            {postsArray.map(el=>{
                return(
                <>
                    <ItemWrapper src={`http://localhost:3222${el?.imageUrl}`} alt='cover'/>
                    <H3Wrapper>{el?.title}</H3Wrapper>
                    <H3Wrapper>{el?.text}</H3Wrapper>
                    <H3Wrapper>{el?.user['fullName']}</H3Wrapper>
                    {/*<H3Wrapper>{`http://localhost:3222${data?.imageUrl}`}</H3Wrapper>*/}


                    <FooterWrapper>
                        <DivAuthorWrapper>
                            <img src={face} alt='avatar' width={'30px'} height={'30px'}/>
                            <div>
                                {/*<p>{dates.toISOString().substring(0, 10)}</p>*/}
                            </div>
                        </DivAuthorWrapper>
                        <LinkWrapper to={`/posts/${el?._id}`}>Discover ➝</LinkWrapper>
                    </FooterWrapper>
                </>)
            })}

        </Container>
    )
};

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
