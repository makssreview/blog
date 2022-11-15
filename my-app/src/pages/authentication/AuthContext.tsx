import React from 'react'
import {useState} from "react";
import {genericHookContextBuilder} from "../../helpers/genericHookContextBuilder";
import {useNavigate} from "react-router-dom";
import {Registration} from "./Registration";
import {services} from "../../helpers/services";
import {Login} from "./Login";
import {Header} from "../../components/Header";
type FormValues = {
    email: string,
    password: string,
    fullName: string,
}
type LoginFormValues = {
    email: string,
    password: string,
}
const useLogicState = () => {
    const initialState = {
        email: '',
        password: '',
        fullName: ''
    }
    const loginInitialState = {
        email: '',
        password: '',
    }

    const [registerForm, setRegisterForm] = useState<FormValues>(initialState)
    const [errorRegisterMessage, setErrorRegisterMessage] = useState<string|null>(null)
    const [isEmailAlreadyRegistered, setIsEmailAlreadyRegistered] = useState(false)

    const [loginForm, setLoginForm] = useState<LoginFormValues>(loginInitialState)
    const [errorLoginMessage, setErrorLoginMessage] = useState(false)
    const [token, setToken] = useState<string | null>(null)

    const navigate = useNavigate();

    const userRegister = async () => {
            try {
                await services.blog.register(registerForm)
                setRegisterForm(initialState)
                setErrorRegisterMessage(null)
                setIsEmailAlreadyRegistered(false)
                alert('Successfully registered' + "\n" + 'You will be redirected to the Login page')
                navigate("/login")

            } catch (err) {
                setIsEmailAlreadyRegistered(true)
            }
    }

    const inputCheck = ()=>{
        function isValidEmail(email:string) {
            return /\S+@\S+\.\S+/.test(email);
        }
        if(!(registerForm.fullName.length >= 3)){
            setErrorRegisterMessage('Minimum name length is 3 characters')
        }
        if(!isValidEmail(registerForm.email)){
            setErrorRegisterMessage('Email format is not valid')
        }
        if(!(registerForm.password.length>=6)){
            setErrorRegisterMessage('Minimum password length is 6 digits')
        }
    }

    const userLogin = async () => {
        try {
            const login = await services.blog.login(loginForm)
            localStorage.setItem('token', login.data.token)
            setToken(localStorage.getItem('token'))
            setLoginForm({email: '', password: '',})
            setErrorLoginMessage(false)
            navigate("/")

        } catch (err) {
            setErrorLoginMessage(true)
        }
    }
    const userLogOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    return {
        registerForm,
        setRegisterForm,
        errorRegisterMessage,
        setErrorRegisterMessage,
        userRegister,
        userLogin,
        loginForm,
        setLoginForm,
        errorLoginMessage,
        setErrorLoginMessage,
        userLogOut,
        setToken,
        token,
        isEmailAlreadyRegistered,
        setIsEmailAlreadyRegistered,
        inputCheck

    }
}

export const {ContextProvider: AuthContextProvider, Context: AuthContext} =
    genericHookContextBuilder(useLogicState)

export const AuthenticationUseContext = () => {
    return (
        <AuthContextProvider>
            <Registration/>
        </AuthContextProvider>
    )
}

export const {ContextProvider: LoginContextProvider, Context: LoginContext} =
    genericHookContextBuilder(useLogicState)

export const LoginUseContext = () => {
    return (
        <LoginContextProvider>
            <Login/>
        </LoginContextProvider>
    )
}

export const {ContextProvider: LogoutContextProvider, Context: LogoutContext} =
    genericHookContextBuilder(useLogicState)

export const LogoutUseContext = () => {
    return (
        <LogoutContextProvider>
            <Header/>
        </LogoutContextProvider>
    )
}