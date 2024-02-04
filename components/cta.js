import React, { useState } from "react";
import Container from "./container";

const Cta = () => {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    // add email to email list
    const url = process.env.NEXT_PUBLIC_EMAIL_URL;

    // Create a script element to make the JSONP request
    const script = document.createElement("script");
    script.src = `${url}&EMAIL=${email}&callback=handleResponse`;
    document.head.appendChild(script);

    // Define the callback function to handle the JSONP response
    window.handleResponse = (data) => {
      const { msg, result } = data;
      // Do something with the response
      alert(msg);

      // Remove the script element after processing the response
      document.head.removeChild(script);
      delete window.handleResponse;
    };
  };

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Interested in when we launch?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Provide your email to get updates when we release new features.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="form-input bg-white px-4 py-3 sm:mr-2 text-gray-500 text-lg placeholder-gray-500 rounded-md"
              placeholder="Your email…"
              aria-label="Your email…"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <button
              type="submit"
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-4"
              disabled={loading}
            >
              {loading ? "Subscribing..." : submitStatus || "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
