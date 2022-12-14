import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import {TextField} from "@mui/material";
export const Search = () => {
    return (
        <Wrapper>
        <H1Wrapper>Adventure is waiting </H1Wrapper>
            <SearchBoxWrapper>
                <TextField label = 'What are you looking for?'/>
                <SearchIcon fontSize={'large'}/>
            </SearchBoxWrapper>
        </Wrapper>

    );
};


const Wrapper = styled.div`
 background-image: url(https://images.pexels.com/photos/670625/pexels-photo-670625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  height: 550px;
  opacity: 0.8;
  background-size: 1400px;
  background-repeat: no-repeat;
  background-position: 25% 75%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`
const H1Wrapper = styled.div`
  text-align: center;
  color: white;
  font-family: Calibri;
  font-size: 3.1rem;
  padding-top: 200px;
`
const  SearchBoxWrapper = styled.div`
  padding-left: 25px;
  width: 300px;
  height: 80px;
  background-color: whitesmoke;
  opacity: 0.9;
  display: flex;
  border-radius: 20px;
  align-items: center;
`