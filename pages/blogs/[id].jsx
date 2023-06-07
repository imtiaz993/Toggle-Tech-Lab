import React from "react";
import BlogDetail from "../../Components/blogs/BlogDetail";

const Detail = ({ Blog }) => {
  console.log(Blog)
  return <BlogDetail Blog={Blog} />;
};

export default Detail;

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:5000/api/blog/64607c517c68aba25921afaf"
  );
  const Blog = await res.json();
  return { props: { Blog } };
}
