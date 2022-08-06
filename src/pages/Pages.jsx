import React, { useEffect } from "react";
import { Private } from "../Components/Private";
import {Routes, Route} from "react-router-dom"
import { Home } from "./Home";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { useDispatch } from "react-redux";

export const Pages = ()=>{

    const dispatch =useDispatch();
 
  
   
    return (
        <div>

            <Routes>
                <Route path="/" element={<Private><Home/></Private>}> </Route>
                
                <Route path="/cart" element={<Private><Cart/></Private>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
            </Routes>
        </div>
    )
}