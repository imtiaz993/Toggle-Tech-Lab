import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Blogs from "./Blogs";
import AddBlog from "./AddBlog";
import AddAdmin from "./AddAdmin";

const DashboardPage = ({ setToken, AllBlogs, AllAdmins }) => {
  const [tab, setTab] = useState("blogs");
  const getTab = () => {
    let currentTab;
    switch (tab) {
      case "blogs":
        currentTab = <Blogs AllBlogs={AllBlogs} />;
        break;
      case "add blog":
        currentTab = <AddBlog />;
        break;
      case "add admin":
        currentTab = <AddAdmin AllAdmins={AllAdmins}/>;
        break;

      default:
        break;
    }
    return currentTab;
  };
  return (
    <div className="pt-10 lg:pt-20 min-h-screen">
      <Sidebar setToken={setToken} setTab={setTab}/>
      <div className="w-11/12 lg:w-[calc(100%-256px)] mx-auto lg:mx-0 lg:ml-auto">{getTab()}</div>
    </div>
  );
};

export default DashboardPage;
 