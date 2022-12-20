import React, { KeyboardEvent, useContext, useState } from 'react'
import { TextField } from '@mui/material'
import { PostContext } from '../../pages/homePage/Context'
import {Wrapper, H1Wrapper, SearchBoxWrapper, SearchIconWrapper} from './Search.style.stx'
export const Search = () => {
  const {searchPostsFilter} = useContext(PostContext)
     const SearchFilterHandler = (e:KeyboardEvent<HTMLDivElement>) => {
      searchPostsFilter(e)}
  return (
    <Wrapper>
      <H1Wrapper>Adventure is waiting </H1Wrapper>
      <SearchBoxWrapper>
        <TextField
          label='What are you looking for?'
          onKeyDown={SearchFilterHandler}
        />
        <SearchIconWrapper fontSize={'large'} />
      </SearchBoxWrapper>
    </Wrapper>
  )
}
