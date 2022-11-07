import React, {useContext} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Paper, TextField, Typography} from "@mui/material";
import {LoginContext} from "./AuthContext";


export const Login = () => {
    const logic = useContext(LoginContext)

return (

    <PaperWrapper>


        <TextFieldWrapper label="Email"
                          helperText={logic.errorLoginMessage}
                          onChange={(e)=>logic.setLoginForm({...logic.loginForm, email: e.currentTarget.value})}
                          fullWidth
        />
        <TextFieldWrapper label="Password"

                          onChange={(e)=>logic.setLoginForm({...logic.loginForm, password: e.currentTarget.value})}
                          fullWidth
        />
        <Button size="large"
                variant="contained"
                onClick={()=>logic.userLogin()}
                fullWidth >
            Login
        </Button>
        <TextWrapper>Don&apost have an account? <Link to={'/register'} >Register</Link></TextWrapper>
        {logic.errorLoginMessage && <TypographyWrapper color={"red"} variant="h6">Wrong password or email</TypographyWrapper>}
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
  margin-bottom: 5px;
  padding-left: 35px;
`

const TypographyWrapper = styled(Typography)`
  padding-left: 30px;
    
`