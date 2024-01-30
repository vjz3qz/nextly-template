import React from "react";
import Container from "./container";

import jsonp from "jsonp";

const Cta = () => {
  const [email, setEmail] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      return;
    }

    console.log(email);
    // add email to email list
    const url = process.env.EMAIL_LINK;

    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg } = data;
      // do something with response
      alert(msg);
    });
    setEmail("");
    setSubmitStatus(true);
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
          <input
            type="email"
            className="form-input bg-white px-4 py-3 sm:mr-2 text-gray-500 text-lg placeholder-gray-500 rounded-md"
            placeholder="Your email…"
            aria-label="Your email…"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            type="submit"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-4"
            onClick={handleSubmit} // Add onClick event handler
          >
            {submitStatus ? "Subscribed!" : "Subscribe"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
