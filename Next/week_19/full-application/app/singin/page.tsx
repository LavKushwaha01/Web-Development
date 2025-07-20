
"use client"
import { useState } from "react";
import axios from "axios"


export default function signin(){



return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
         <input type="text" name="email" placeholder="email" />
         <input type="text" name="password" placeholder="password" />

          <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signin")
            }}>Sign in</button>
 </div>
       
    </div>
)
}