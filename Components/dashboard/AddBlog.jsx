import React, { useState } from "react";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    subtitle: "",
    content: "",
  });
  const handleSubmit = () => {
    setLoading(true);
    fetch("https://toggletechlab-backend.herokuapp.com/api/user", {
      method: "POST",
      body: JSON.stringify(blogDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        if (json.success) {
          setBlogDetails({
            title: "",
            subtitle: "",
            content: "",
          });
          setMessage("Blog created successfully");
        } else {
          setMessage(json.message);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="lg:w-[calc(100%-256px)] mx-auto min-h-[calc(100vh-105px)]">
      <h1 className="text-white text-xl md:text-2xl text-center mb-8">
        Create Blog
      </h1>
      <p className="text-white text-center text-base mb-4">{message}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="">
          <input
            value={blogDetails.title}
            onChange={(e) => {
              setBlogDetails({ ...blogDetails, title: e.target.value });
            }}
            className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="text"
            placeholder="Title"
            required
          />
          <input
            value={blogDetails.subtitle}
            onChange={(e) => {
              setBlogDetails({ ...blogDetails, subtitle: e.target.value });
            }}
            className="w-full text-base mt-4 md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="text"
            placeholder="Sub Title"
            required
          />
          <textarea
            value={blogDetails.content}
            onChange={(e) => {
              setBlogDetails({ ...blogDetails, content: e.target.value });
            }}
            className="w-full text-base mt-4 md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3 resize-none"
            type="text"
            rows={4}
            placeholder="Content"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-gold mt-4 text-base md:text-lg border-2 border-white rounded-3xl py-2 px-16"
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
