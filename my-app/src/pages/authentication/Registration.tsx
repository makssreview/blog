import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Avatar, Button, Paper, TextField, Typography} from '@mui/material'
import {AuthContext} from './AuthContext'

export const Registration = () => {
    const {
        userRegister,
        inputCheck,
        setRegisterForm,
        registerForm,
        errorRegisterMessage,
        isEmailAlreadyRegistered
    } = useContext(AuthContext)

    const onClickHandler = () => {
        userRegister()
        inputCheck()
    }

    return (
        <PaperWrapper>
            <TypographyWrapper variant='h5'>Account Registration</TypographyWrapper>
            <TextFieldWrapper
                label='Full Name'
                onChange={(e) =>
                    setRegisterForm({
                        ...registerForm,
                        fullName: e.currentTarget.value
                    })
                }
                fullWidth
            />

            <TextFieldWrapper
                label='Email'
                // helperText={logic.errorRegisterMessage && 'Email should be example@email.com'}
                onChange={(e) =>
                    setRegisterForm({
                        ...registerForm,
                        email: e.currentTarget.value
                    })
                }
                fullWidth
            />
            <TextFieldWrapper
                label='Password'
                onChange={(e) =>
                    setRegisterForm({
                        ...registerForm,
                        password: e.currentTarget.value
                    })
                }
                fullWidth
            />
            <Button
                size='large'
                variant='contained'
                onClick={onClickHandler}
                fullWidth
            >
                Register
            </Button>
            <TextWrapper>
                Have already register? <LinkWrapper to={'/login'}>Login</LinkWrapper>
            </TextWrapper>
            {errorRegisterMessage && (
                <ErrorTextWrapper>{errorRegisterMessage}</ErrorTextWrapper>
            )}
            {!errorRegisterMessage && isEmailAlreadyRegistered && (
                <ErrorTextWrapper>Email is already registered</ErrorTextWrapper>
            )}
        </PaperWrapper>
    )
}

const PaperWrapper = styled(Paper)`
  width: 400px;
  padding: 50px;
  border: 1px solid #dedede;
  margin: 50px auto;
`
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
const TextFieldWrapper = styled(TextField)`
  margin-bottom: 20px !important;
`
const TextWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 20px;
`

const TypographyWrapper = styled(Typography)`
  color: #0f52ba;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  padding-left: 35px;
`
const LinkWrapper = styled(Link)`
  color: #0f52ba;
  font-style: oblique;
  font-size: 20px;

  &:hover {
    background-color: #039be5;
    color: white;
    cursor: pointer;
`
const ErrorTextWrapper = styled.div`
  font-size: 18px;
  color: red;
  font-weight: bolder;
  opacity: 0.8;
`
