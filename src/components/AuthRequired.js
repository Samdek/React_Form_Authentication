import React from "react"
import { Outlet  } from "react-router-dom"

export default function AuthRequired() {
    //still coming back here to change this hard-coded
    const isLoggedIn = true
    

    return isLoggedIn && (<Outlet />) || (<h1>{/*issue-line*/}</h1>)
    
}