import React from 'react';
import styled from "styled-components";
import {UserType} from "../pages/homePage/BlogHomeContext";

type CommentType ={
    _id?:string
    comment:string
    user:UserType
}
type CmtType = {
    cmt:CommentType
}
export const CommentItem = ({cmt} :CmtType) => {
    return (
        <Wrapper>
            <CommentWrapper>{cmt.comment}</CommentWrapper>
            {/*<div>{cmt.user.fullName}</div>*/}
        </Wrapper>
    );
};

const Wrapper = styled.div`
`
const CommentWrapper = styled.div`
    
`
