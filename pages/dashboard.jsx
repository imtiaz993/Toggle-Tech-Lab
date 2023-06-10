import React, { useEffect, useState } from "react";
import LoginForm from "../Components/dashboard/LoginForm";
import DashboardPage from "../Components/dashboard/DashboardPage";

const Dasboard = ({AllBlogs}) => {
  const [token, setToken] = useState();
  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      setToken(sessionStorage.getItem("secret-token-7k@zR"));
    }
  }, []);
  
  return token ? (
    <DashboardPage setToken={setToken} AllBlogs={AllBlogs}/>
  ) : (
    <LoginForm setToken={setToken} />
  );
};

export default Dasboard;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/api/blog");
  const AllBlogs = await res.json();
  return { props: { AllBlogs } };
}

