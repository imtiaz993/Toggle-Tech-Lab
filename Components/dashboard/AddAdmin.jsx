import React, { useState } from "react";

const AddAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    setLoading(true);
    fetch("https://toggletechlab-backend.herokuapp.com/api/user", {
      method: "POST",
      body: JSON.stringify(adminDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        if (json.success) {
          setAdminDetails({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          });
        } else {
          alert(json.message);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div className="lg:w-4/6 mx-auto min-h-[calc(100vh-105px)]">
      <h1 className="text-white text-xl md:text-2xl text-center mb-8">
        Add Admin
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="">
          <input
            value={adminDetails.firstname}
            onChange={(e) => {
              setAdminDetails({ ...adminDetails, firstname: e.target.value });
            }}
            className="w-full text-base md:text-lg mb-5 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            value={adminDetails.lastname}
            onChange={(e) => {
              setAdminDetails({ ...adminDetails, lastname: e.target.value });
            }}
            className="w-full text-base mt-4 md:text-lg mb-5 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            value={adminDetails.email}
            onChange={(e) => {
              setAdminDetails({ ...adminDetails, email: e.target.value });
            }}
            className="w-full text-base mt-4 md:text-lg mb-5 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={adminDetails.password}
            onChange={(e) => {
              setAdminDetails({ ...adminDetails, password: e.target.value });
            }}
            className="text-base mt-4 md:text-lg w-full mb-5 md:mb-0 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-gold mt-4 text-base md:text-lg border-2 border-white rounded-3xl py-2 px-16"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;
