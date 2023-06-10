import React from "react";
import BlogDetail from "../../Components/blogs/BlogDetail";

const Detail = ({ Blog }) => {
  console.log(Blog)
  return <BlogDetail Blog={Blog.singleProperty} />;
};

export default Detail;

export async function getServerSideProps({ req, res, resolvedUrl }) {
  const paths=resolvedUrl.split('/')
  const id=paths[paths.length-1]
  const response = await fetch(
    `http://localhost:5000/api/blog/${id}`
  );
  const Blog = await response.json();
  return { props: { Blog } };
}