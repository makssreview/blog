import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import styled from "styled-components";
import {NewPostContext} from "./NewPostContext";
import "easymde/dist/easymde.min.css";
import SimpleMdeReact from "react-simplemde-editor";


export const AddPostPage = () => {
    const logic = useContext(NewPostContext)
    const inputFileRef = useRef<HTMLInputElement | null>(null)

    return (
        <Wrapper style={{padding: 30}}>
            <Button onClick={() => inputFileRef?.current?.click()} variant="outlined" size="large">
                Upload preview
            </Button>
            <input ref={inputFileRef} type="file" onChange={(e) => logic.uploadFileHandler(e)} hidden/>
            {logic.imageUrl && (
                <>
                    <Button variant="contained" color="error" onClick={() => logic.removeFileHandler()}>
                        Delete
                    </Button>
                    <ImageWrapper src={`http://localhost:3222${logic.imageUrl}`} alt="Uploaded"/>
                </>
            )}

            <br/>
            <br/>
            <TitleWrapper
                value={logic.title}
                variant="standard"
                placeholder="Title..."
                onChange={e => {
                    logic.setTitle(e.currentTarget.value)
                }}
                fullWidth
            />
            <SimpleMdeReact
                value={logic.text}
                onChange={logic.setText}
            />
            <div>
                <Button onClick={() => logic.addNewPost()} size="large" variant="contained">
                    Publish
                </Button>
                <a href="/">
                    <Button size="large">Back</Button>
                </a>
            </div>
        </Wrapper>
    );
};

const ImageWrapper = styled.img`
  max-width: 600px;
  max-height: 600px;
`
const TitleWrapper = styled(TextField)`
  input {
    font-size: 32px;
    font-weight: 900;
  }

  div {
    &:before,
    &:after {
      display: none;
    }
  }
`
const Wrapper = styled(Paper)`
  padding: 20px 20px 20px 20px;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;;
`