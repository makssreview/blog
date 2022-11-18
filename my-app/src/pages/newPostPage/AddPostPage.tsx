import React, {useContext, useRef, KeyboardEvent, useState, useEffect} from 'react'
import {Button, Paper} from '@mui/material'
import styled from 'styled-components'
import {NewPostContext} from './NewPostContext'
import 'easymde/dist/easymde.min.css'
import SimpleMdeReact from 'react-simplemde-editor'
import {useParams} from 'react-router-dom'
import axios from "../../axios";


export const AddPostPage = () => {
    const {tags,setTags, isEditing, uploadFileHandler,addNewPost, setImageUrl, imageUrl,text, setText, removeFileHandler, title,setTitle} = useContext(NewPostContext)
    const inputFileRef = useRef<HTMLInputElement | null>(null)
    const [tag, setTag] = useState<string | null>(null)
    const {id} = useParams()

    useEffect(()=>{
        if(id){
            axios.get(`/posts/${id}`)
                .then(({data})=>{
                    setTitle(data.title)
                    setTags(data.tags)
                    setText(data.text)
                    setImageUrl(data.imageUrl)
                }).catch((err)=>{
                console.warn(err)
                alert('Error')
            })
        }
    },[])



    const tagsHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (tags.length < 5 && tag?.trim()) {
                setTags([...tags, tag])
                setTag(null)
            }
        }
    }
    const onCloseHandler = (index: number) => {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <Wrapper>
            <Button
                onClick={() => inputFileRef?.current?.click()}
                variant='outlined'
                size='large'
            >
                Upload preview
            </Button>
            <input
                ref={inputFileRef}
                type='file'
                onChange={(e) => uploadFileHandler(e)}
                hidden
            />
            {imageUrl && (
                <>
                    <Button
                        variant='contained'
                        color='error'
                        onClick={() => removeFileHandler()}
                    >
                        Delete
                    </Button>
                    <ImageWrapper
                        src={`http://localhost:3222${imageUrl}`}
                        alt='Uploaded'
                    />
                </>
            )}

            <br/>
            <br/>
            <TitleWrapper
                value={title}
                placeholder='Title'
                maxLength={35}
                onChange={(e) => {
                    setTitle(e.currentTarget.value)
                }}
            />
            <TitleWrapper
                placeholder='Type tag + Press Enter'
                maxLength={15}
                type='text'
                value={tag || ''}
                onChange={(e) => setTag(e.currentTarget.value.toLowerCase())}
                onKeyDown={(e) => tagsHandler(e)}
            />
              <TagsWrapper>
                {tags.map((tags, index) => (
                    <ItemWrapper key={index}>
                        <span>{tags}</span>
                        <CloseWrapper onClick={() => onCloseHandler(index)}>x</CloseWrapper>
                    </ItemWrapper>
                ))}
            </TagsWrapper>

            <SimpleMdeReact value={text} onChange={setText}/>
            <div>
                <Button
                    onClick={() => addNewPost()}
                    size='large'
                    variant='contained'
                >
                    {isEditing? 'Edit' : 'Publish'}
                </Button>
                <a href='/'>
                    <Button size='large'>Back</Button>
                </a>
            </div>
        </Wrapper>
    )
}

const ImageWrapper = styled.img`
  max-width: 600px;
  max-height: 600px;
`
const TitleWrapper = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
`
const Wrapper = styled(Paper)`
  padding: 30px 30px 20px 30px;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;;
`
const TagsWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`
const ItemWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.09);
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
`
const CloseWrapper = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-color: darkslategray;
  color: whitesmoke;
  border-radius: 50%;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 18px;
`
