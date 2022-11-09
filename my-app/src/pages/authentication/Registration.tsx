import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Avatar, Button, Paper, TextField, Typography} from "@mui/material";
import {AuthContext} from "./AuthContext";

export const Registration = () => {
    const logic = useContext(AuthContext)
    const onClickHandler =()=>{
        logic.userRegister()
        logic.inputCheck()
    }

    return (
        <PaperWrapper>
            <TypographyWrapper variant="h5">
                Account Registration
            </TypographyWrapper>
            <FormWrapper>
                <Avatar sx={{width: 90, height: 90}}/>
            </FormWrapper>
            <TextFieldWrapper label="Full Name"
                              onChange={(e) => logic.setRegisterForm({
                                  ...logic.registerForm,
                                  fullName: e.currentTarget.value
                              })}
                              fullWidth
            />

            <TextFieldWrapper label="Email"
                              // helperText={logic.errorRegisterMessage && 'Email should be example@email.com'}
                              onChange={(e) => logic.setRegisterForm({
                                  ...logic.registerForm,
                                  email: e.currentTarget.value
                              })}
                              fullWidth
            />
            <TextFieldWrapper label="Password"
                              onChange={(e) => logic.setRegisterForm({
                                  ...logic.registerForm,
                                  password: e.currentTarget.value
                              })}
                              fullWidth
            />
            <Button size="large"
                    variant="contained"
                    onClick={onClickHandler}
                    fullWidth>
                Register
            </Button>
            <TextWrapper>Have already register? <LinkWrapper to={'/login'}>Login</LinkWrapper></TextWrapper>
            {logic.errorRegisterMessage &&
                <ErrorTextWrapper>{logic.errorRegisterMessage}</ErrorTextWrapper>}
            {!logic.errorRegisterMessage && logic.isEmailAlreadyRegistered
                    && <ErrorTextWrapper>Email is already registered</ErrorTextWrapper>}
        </PaperWrapper>
    );
};

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
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  padding-left: 35px;
`
const LinkWrapper = styled(Link)`
  font-style: oblique;
  font-size: 20px;
  &:hover {
    background-color: #039be5;
    color: white;
    cursor: pointer;
`
const ErrorTextWrapper =styled.div`
  font-size: 18px;
  color: red;
  font-weight: bolder;
  opacity: 0.8;
`
