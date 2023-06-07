import React from "react";
import BlogDetail from "../../Components/blogs/BlogDetail";

const Detail = ({ Blog }) => {
  return <BlogDetail Blog={Blog} />;
};

export default Detail;

// export async function getServerSideProps() {
//   const res = await fetch("");
//   const Blog = await res.json();
//   return { props: { Blog } };
// }
