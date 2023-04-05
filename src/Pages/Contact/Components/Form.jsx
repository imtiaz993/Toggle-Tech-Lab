import React from "react";

const Form = () => {
  return (
    <div className="lg:w-4/6">
      <h1 className="text-white text-xl md:text-2xl mb-8">Send Us a Message</h1>
      <div className="md:flex justify-between md:mb-5">
        <input
          className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="text"
          placeholder="Name *"
          required
        />
        <input
          className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="tel"
          placeholder="Phone"
        />
      </div>
      <div className="md:flex justify-between md:mb-5">
        <input
          className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="email"
          placeholder="Email *"
          required
        />
        <input
          className="text-base md:text-lg w-full mb-5 md:mb-0 md:w-1/2 text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="mb-5">
        <textarea
          rows={6}
          className="text-base md:text-lg w-full resize-none outline-none text-white bg-transparent border border-dark-grey rounded-lg p-3"
          type="email"
          placeholder="Message *"
          required
        />
      </div>
      <button className="text-gold text-base md:text-lg border-2 border-white rounded-3xl py-2 px-5">
        Send Message
      </button>
    </div>
  );
};

export default Form;
