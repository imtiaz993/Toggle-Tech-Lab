import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Blogs from "./Blogs";
import AddBlog from "./AddBlog";
import AddAdmin from "./AddAdmin";
import Appbar from "./Appbar";

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
        currentTab = <AddAdmin AllAdmins={AllAdmins} />;
        break;

      default:
        break;
    }
    return currentTab;
  };
  return (
    <div className="min-h-screen">
      <Appbar tab={tab} setToken={setToken} setTab={setTab} />
      <div className="max-w-screen-xxl mx-auto pt-20 min-h-screen">
        <div className="w-11/12 mx-auto">{getTab()}</div>
      </div>
    </div>
  );
};

export default DashboardPage;
