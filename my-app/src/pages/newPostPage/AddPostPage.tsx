import React, {useContext, useRef} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import SimpleMdeReact from "react-simplemde-editor";
import styled from "styled-components";
import {NewPostContext} from "./NewPostContext";


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
            <TitleWrapper
                value={logic.text}
                variant="standard"
                placeholder="Text..."
                onChange={e => {
                    logic.setText(e.currentTarget.value)
                }}
                fullWidth
            />
            <div>
                <Button onClick={() => logic.addNewPost()} size="large" variant="contained">
                    Publish
                </Button>
                <a href="/my-app/src/pages">
                    <Button size="large">Back</Button>
                </a>
            </div>
        </Wrapper>
    );
};

const SimpleMDE = styled(SimpleMdeReact)`
  margin: 30px -30px;

  .cm-s-easymde {
    border: 0;
    font-size: 32px;
  }

  .editor-toolbar {
    border: 0;
    padding-left: 20px;
    background-color: rgb(0 0 0 / 2%);
  }
`
const ImageWrapper = styled.img`
  width: 100%;
`
const TitleWrapper = styled(TextField)`
  input {
    font-size: 42px;
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