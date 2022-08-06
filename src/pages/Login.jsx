import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios"
import { loginError, loginLoading, loginSuccess } from "../store/auth/action";
import { useState } from "react";

export const Login =()=>{

    const [loginData , setLoginData]=useState({
        email:"",
        password:""
    })

    const token =useSelector(state =>state.auth.token)
    const dispatch =useDispatch()
    const handleChange =(e)=>{
        const{name,value} =e.target;
        setLoginData(prev =>({
            ...prev,
            [name]:value
        }))
    }
    const handleLogin =()=>{
        dispatch(loginLoading())
        axios({
            method:"post",
            url:"https://reqres.in/api/login",
            data:loginData

        }).then(res =>{
            dispatch(loginSuccess(res.data.token))

        }).catch( error=>{
             dispatch(loginError())
        })
    }

    if(token){
        return <Navigate to="/" />
    }
    return(
        <>


{Object.keys(loginData).map(el=> <TextField id="outlin"name={el} value={loginData[el]} onChange={handleChange} label={el.toLocaleUpperCase()} variant="outlined" />)}

<br />
<Button variant="outlined" onClick={handleLogin}>Login</Button>
        </>
    )
}