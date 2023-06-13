import React from "react";
import Hero from "../../Components/blogss/Hero";
import BlogList from "../../Components/blogss/BlogList";

const Blogs = ({ AllBlogs }) => {
  console.log(AllBlogs);
  return (
    <>
      <Hero />
      <BlogList AllBlogs={AllBlogs} />
    </>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
  const AllBlogs = await res.json();
  return { props: { AllBlogs } };
}
