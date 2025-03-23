import React, { useState } from "react";
import axios from "axios";
import { contactusbg, phone } from "../assests";
import { AppText } from "../Constants";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/messages", {
        email,
        message,
      });
      setResponseMessage(response.data.message);
      setEmail("");
      setMessage("");
    } catch (error) {
      setResponseMessage(error.response?.data?.error || "Submission failed");
    }
  };

  return (
    <div className="flex flex-col justify-center mt-[30px]" id="contactus">
      <div className="flex flex-row justify-center">
        <h1 className="text-[40px] font-bold">
          {AppText.Contact}
          <span className="text-blue-800">{AppText.Us}</span>
        </h1>
        <img src={phone} className="w-[80px] ml-[20px]" alt="Phone icon" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-44">
        <img src={contactusbg} className="w-[300px]" alt="Contact us background" />
        <div className="w-full">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="text"
              placeholder="yourname@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1.5px] px-2 border-blue-300 hover:border-blue-600 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              rows={7}
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-blue-300 border-[1.5px] hover:border-blue-600 rounded-md px-2"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="transition-all ease-in-out hover:scale-105 bg-blue-600 flex flex-row items-center justify-center text-[14px] py-1 mt-5 text-white rounded-md w-[440px] md:w-[580px]"
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
          {responseMessage && <p className="mt-3 text-green-600">{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
