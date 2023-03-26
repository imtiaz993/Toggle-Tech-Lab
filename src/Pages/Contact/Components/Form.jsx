import React from "react";

const Form = () => {
  return (
    <div className="w-4/6">
      <h1 className="text-white text-2xl mb-8">Send Us a Message</h1>
      <div className="flex justify-between mb-5">
        <input
          className="text-lg w-1/2 mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="text"
          placeholder="Name *"
          required
        />
        <input
          className="text-lg w-1/2 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="tel"
          placeholder="Phone"
        />
      </div>
      <div className="flex justify-between mb-5">
        <input
          className="text-lg w-1/2 mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="email"
          placeholder="Email *"
          required
        />
        <input
          className="text-lg w-1/2 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="mb-5">
        <textarea
          rows={6}
          className="text-lg w-full resize-none outline-none text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="email"
          placeholder="Message *"
          required
        />
      </div>
      <button className="text-gold text-lg border-2 border-white rounded-3xl py-2 px-5">
        Send Message
      </button>
    </div>
  );
};

export default Form;
