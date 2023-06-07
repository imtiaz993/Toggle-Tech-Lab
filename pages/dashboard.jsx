import React, { useEffect, useState } from "react";
import LoginForm from "../Components/dashboard/LoginForm";
import DashboardPage from "../Components/dashboard/DashboardPage";

const Dasboard = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      setToken(sessionStorage.getItem("secret-token-7k@zR"));
    }
  }, []);
  
  return token ? (
    <DashboardPage setToken={setToken} />
  ) : (
    <LoginForm setToken={setToken} />
  );
};

export default Dasboard;
