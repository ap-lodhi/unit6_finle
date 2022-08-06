import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Home =()=>{

const  [data ,setData] =useState([])


const getDetails=()=>{
    axios({
        method:"get",
        url:"http://localhost:8000/products"
    })
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  
}
useEffect(()=>{
    getDetails()
})

    return(
        <>
        <h1>home </h1>

          
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", padding: "20px" }}>

        {
            data.map((el)=>(
           
               <div>
                <h1>
                    {el.title}
                </h1>
                    <img src={el.image} alt=""/>

                        <Link>
                        <button>More Detals</button>
                        </Link>
                    </div>
            ))
        }

            </div>
          

        </>
    )
}