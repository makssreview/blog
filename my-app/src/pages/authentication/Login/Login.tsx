import React, {useContext} from 'react'
import {Button, Paper, TextField, Typography} from '@mui/material'
import {LoginContext} from '../Context'
import {LinkWrapper, TextWrapper, TypographyWrapper, PaperWrapper, TextFieldWrapper} from "./Login.style";

export const Login = () => {
    const {setLoginForm, loginForm, userLogin,errorLoginMessage} = useContext(LoginContext)

    return (
        <PaperWrapper>
            <TextFieldWrapper
                label='Email'
                onChange={(e) =>
                    setLoginForm({
                        ...loginForm,
                        email: e.currentTarget.value
                    })
                }
                fullWidth
            />
            <TextFieldWrapper
                label='Password'
                onChange={(e) =>
                    setLoginForm({
                        ...loginForm,
                        password: e.currentTarget.value
                    })
                }
                fullWidth
            />
            <Button
                size='large'
                variant='contained'
                onClick={() => userLogin()}
                fullWidth
            >
                Login
            </Button>
            <TextWrapper>
                Don`t have an account?{' '}
                <LinkWrapper to={'/register'}>Register</LinkWrapper>
            </TextWrapper>
            {errorLoginMessage && (
                <TypographyWrapper color={'red'} variant='h6'>
                    Wrong password or email
                </TypographyWrapper>
            )}
        </PaperWrapper>
    )
}

