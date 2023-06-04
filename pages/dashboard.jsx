import React, { useEffect, useState } from "react";
import LoginForm from "../Components/dashboard/loginForm";
import DashboardPage from "../Components/dashboard/DashboardPage";

const Dasboard = () => {
  const [token, setToken]= useState()
  useEffect(()=>{
    if (typeof sessionStorage !== "undefined") {
      setToken(sessionStorage.getItem("token"));
    }

  },[])
  console.log(token)
  return token ? <DashboardPage /> : <LoginForm setToken={setToken}/>;
};

export default Dasboard;
