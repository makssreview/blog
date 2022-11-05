import React, {useEffect, useRef, useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import SimpleMdeReact from "react-simplemde-editor";
import styled from "styled-components";
import axios from "../axios";
import {useNavigate, useParams} from "react-router-dom";



export const AddPostPage = () => {
    const [title, setTitle]= useState('')
    const [text, setText]= useState('')
    const [imageUrl, setImageUrl]= useState('')

    const {id}=useParams()
    const isEditing = Boolean(id)
    const inputFileRef = useRef<any>(null)
    const navigate = useNavigate();

    const uploadFileHandler = async(event:any) => {
        try{
            const formData = new FormData()
            const file = event.target.files[0]
            formData.append('imageUrl', file)
            const {data} = await axios.post('/upload/', formData)
            setImageUrl(data.url)
            console.log(imageUrl)
        } catch (err){
            console.warn(err)
        }
    };

    const removeFileHandler = () => {
        setImageUrl('')
    };

    const onSubmit =async ()=>{
        const fileds = {
            title, text, imageUrl
        }
        try {
            const {data} = isEditing
                ? await axios.patch(`/posts/${id}`, fileds)
                : await axios.post('/posts', fileds)
            navigate('/')
        } catch (err){
            console.warn(err)
        }
    }

    useEffect(()=>{
        if(id){
            axios.get(`/posts/${id}`).then(({data})=>{
                setTitle(data.title)
                setText(data.text)
                setImageUrl(data.imageUrl)
            }).catch((err)=>{
                alert('Error')
            })
        }
    })


    return (
        <Wrapper style={{ padding: 30 }}>
            <Button onClick={()=>inputFileRef.current.click()} variant="outlined" size="large">
                Upload preview
            </Button>
            <input ref={inputFileRef} type="file" onChange={uploadFileHandler} hidden />
            {imageUrl && (
                <>
                <Button variant="contained" color="error" onClick={removeFileHandler}>
                    Delete
                </Button>
                <ImageWrapper src={`http://localhost:3222${imageUrl}`} alt="Uploaded" />
                </>
            )}

            <br />
            <br />
            <TitleWrapper
                value={title}
                variant="standard"
                placeholder="Title..."
                onChange={e => {
                    setTitle(e.currentTarget.value)}}
                fullWidth
            />
            <TitleWrapper
                value={text}
                variant="standard"
                placeholder="Text..."
                onChange={e => {
                    setText(e.currentTarget.value)}}
                fullWidth
            />
            <div>
                <Button onClick={onSubmit} size="large" variant="contained">
                    {isEditing? 'Edit' : 'Publish'}
                </Button>
                <a href="/">
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
  padding: 20px 20px 20px 20px ;
  margin-top: 30px;
  margin-left: 50px ;
  margin-right: 50px;
;  
`