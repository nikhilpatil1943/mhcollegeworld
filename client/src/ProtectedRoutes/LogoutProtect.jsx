import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LogoutProtect = () => {
  const auth = JSON.parse(localStorage.getItem("profile"));
  return auth ? <Outlet /> : <Navigate to="/QandA" />;
};

export default LogoutProtect;
