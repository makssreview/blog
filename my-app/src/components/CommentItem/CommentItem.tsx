import React from 'react';
import {UserType} from "../../pages/homePage/Context";
import {Wrapper, CommentWrapper} from  './CommentItem.style'
type CommentType ={
    commentData:{
        id?:string
        comment:string
        user?:UserType
    }
}

export const CommentItem = ({commentData} :CommentType) => {
    return (
        <Wrapper>
            <CommentWrapper>{commentData.comment}</CommentWrapper>
            <CommentWrapper>{commentData.user?.fullName}</CommentWrapper>

        </Wrapper>
    );
};

