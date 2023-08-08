import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const [done, setDone] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1h7upjw",
        "template_ggj73bi",
        formRef.current,
        "GUHQzXgo8msLgXKuk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-row justify-center mt-10">
      <div className="contact-layout-container">
        <div className="border m-3 rounded-xl bg-gray-800 p-9 contact-description-container">
          <p className="text-gray-100 italic">Contact Me</p>
          <h2 className="text-gray-100 contact-description italic">
            Let me know how I can contribute to helping your organization
            achieve its highest potential!
          </h2>
          <p className="text-gray-100 mt-5 text-2xl">
            jonjackson.webdesign@gmail.com
          </p>
        </div>

        <div
          className="border m-3 rounded-xl contact-form-container"
          id="contact-me-section"
        >
          <div className="p-9">
            <div className="flex flex-row justify-between">
              <p className="text-gray-800 mb-8">
                <span className="font-bold text-2xl">Jon</span>{" "}
                <span className="italic text-2xl">Jackson</span>
              </p>
              <p>2023</p>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col">
              <label className="text-2xl font-light" htmlFor="from_name">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="border p-3 mt-2 mb-5 rounded-md"
              />

              <label className="text-2xl font-light" htmlFor="from_email">
                Email Address
              </label>
              <input
                type="text"
                name="from_email"
                placeholder="Enter your email"
                className="border p-3 mt-2 mb-5 rounded-md"
              />

              <label className="text-2xl font-light" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="border p-3 mt-2 mb-5 rounded-md"
              />

              <button className="transform transition duration-500 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center border w-36 mb-5 bg-gray-800 text-gray-100 rounded-md py-3">
                Send an email
              </button>

              {done && "Thank you for your message!"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
