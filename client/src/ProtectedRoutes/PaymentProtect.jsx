import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PaymentProtect =()=>{
    const profile = JSON.parse(localStorage.getItem("profile"))
    // console.log(profile.profile.result)
    return profile?.result.isPaid?<Outlet/> : <Navigate to="/payment" />
}

export default PaymentProtect