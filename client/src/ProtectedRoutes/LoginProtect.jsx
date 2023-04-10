import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtect =()=>{
    const auth = JSON.parse(localStorage.getItem("profile"))
    return auth?<Outlet/> : <Navigate to="/auth" />
}

export default LoginProtect