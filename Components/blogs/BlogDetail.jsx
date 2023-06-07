import React from "react";
import Hero from "./Components/Hero";
import SidebarDetailWrapper from "./Components/SidebarDetailWrapper";

const BlogDetail = ({ Blog }) => {
  return (
    <>
      <Hero title={"123"} />
      <SidebarDetailWrapper Blog={Blog} />
    </>
  );
};

export default BlogDetail;
