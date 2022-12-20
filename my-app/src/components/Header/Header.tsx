import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import { LogoutContext } from '../../pages/authentication/Context'
import logo from '../../images/logo.png'
import {Wrapper, WrapperButtons, LogoutButton, WrapperDisplay, LogoWrapper, ButtonStyle} from './Header.style'
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

