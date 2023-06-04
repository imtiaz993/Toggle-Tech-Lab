import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Blogs from "./Blogs";
import AddBlog from "./AddBlog";
import AddAdmin from "./AddAdmin";

const DashboardPage = () => {
  const [tab, setTab] = useState("blogs");
  const getTab = () => {
    switch (tab) {
      case "blogs":
        <Blogs />;
        break;
      case "add blog":
        <AddBlog />;
        break;
      case "add admin":
        <AddAdmin />;
        break;

      default:
        break;
    }
  };
  return (
    <div className="pt-20 min-h-screen">
      <Sidebar />
      <div className="w-[calc(100%-400px)] ml-auto">
        <AddAdmin />
      </div>
    </div>
  );
};

export default DashboardPage;
