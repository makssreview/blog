import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Avatar, Button, Paper, TextField, Typography} from "@mui/material";
import {AuthContext} from "./AuthContext";

export const Registration = () => {
    const logic = useContext(AuthContext)

    return (
        <PaperWrapper>
            <TypographyWrapper  variant="h5">
                Account Registration
            </TypographyWrapper>
            <FormWrapper>
                <Avatar sx={{ width: 90, height: 90 }} />
            </FormWrapper>
            <TextFieldWrapper label="Full Name"
                              onChange={(e)=>logic.setRegisterForm({...logic.registerForm, fullName: e.currentTarget.value})}
                              fullWidth
            />

            <TextFieldWrapper label="Email"
                              onChange={(e)=>logic.setRegisterForm({...logic.registerForm, email: e.currentTarget.value})}
                              fullWidth
                               />
            <TextFieldWrapper label="Password"
                              onChange={(e)=>logic.setRegisterForm({...logic.registerForm, password: e.currentTarget.value})}
                              fullWidth
            />
            <Button size="large"
                    variant="contained"
                    onClick={()=>logic.userRegister()}
                    fullWidth >
                    Register
            </Button>
           <TextWrapper>Have already register? <Link to={'/login'} >Login</Link></TextWrapper>
            {logic.errorRegisterMessage && <TypographyWrapper color={"red"} variant="h6">Check your email and password</TypographyWrapper>}
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
const TextWrapper =styled.div`
 margin-top: 5px;
  padding-left: 38px;
`

const TypographyWrapper = styled(Typography)`
justify-content: center;
align-items: center;
padding-bottom: 10px;


`