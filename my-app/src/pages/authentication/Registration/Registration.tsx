import React, {useContext} from 'react'
import {Button} from '@mui/material'
import {AuthContext} from '../Context'
import {ErrorTextWrapper, PaperWrapper, TextWrapper, TypographyWrapper, TextFieldWrapper, LinkWrapper} from './Registration.style'
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

