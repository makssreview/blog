import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { LogoutContext } from '../pages/authentication/AuthContext'
import { blue, yellow } from '@mui/material/colors'
import logo from '../images/logo.png'

export const Header = () => {
  const {setToken, token, userLogOut} = useContext(LogoutContext)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  })

  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <WrapperDisplay>
          <a href='/'>
            <img src={logo} />
          </a>
          <WrapperButtons>
            {token && (
              <>
                <ButtonStyle color='primary' variant='outlined'>
                  <Link to={'/'}>My Posts </Link>
                </ButtonStyle>
                <ButtonStyle variant='outlined'>
                  <Link to={'/new'}>Make Post </Link>
                </ButtonStyle>
              </>
            )}
            {token ? (
              <LogoutButton
                variant='outlined'
                color='error'
                onClick={() => userLogOut()}
              >
                Logout
              </LogoutButton>
            ) : (
              <ButtonStyle variant='outlined'>
                <Link to={'/login'}>Login </Link>
              </ButtonStyle>
            )}
          </WrapperButtons>
        </WrapperDisplay>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  z-index: 1;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
`
const WrapperDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`
const WrapperButtons = styled.div`
  padding-top: 10px;
`
const ButtonStyle = styled(Button)`
  && {
    margin: 10px;
  }
`
const LogoutButton = styled(Button)`
  background-color: #9b1237;

  && {
    margin: 10px;
  }
`
const LogoWrapper = styled.div`
  background-color: #532293;
  color: #fff;
  font-weight: 700;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15px;
  border-radius: 5px;
  padding: 0 10px;
  text-decoration: none;

  && {
    margin: 10px;
  }

  &:hover {
    background-color: #4361ee;
  }
`
