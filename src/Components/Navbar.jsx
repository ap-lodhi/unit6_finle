import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { logutSuccess } from "../store/auth/action";
export const Navbar =()=>{

    const token =useSelector(state=> state.auth.token)
    const dispatch = useDispatch()

    const handleLogout =()=>{
        dispatch(logutSuccess())
      }
    return (
        <>
        
        <div className="nav">
        <Link to="/">Home</Link>
        
        <Link to="/cart ">Cart</Link>
       
        {token ? <button color="inherit" onClick={handleLogout}>Log out</button>: <Link to="/login">
          <button color="inherit">Login</button>

          </Link>}
           
     
    </div>
        </>
    )
}