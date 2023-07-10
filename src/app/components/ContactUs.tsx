import React from "react";

export default function ContactUs() {
  return (
    <div className="p-2 py-5 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-center text-[#064788]">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 gap-6 w-3/4">
        <label className="block">
          <span>Name</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-xl"
            placeholder="Enter your name"
          />
        </label>
        <label className="block">
          <span>Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded-xl"
            placeholder="Enter your e-mail"
          />
        </label>
        <div>
          <h1>What services are you looking for?</h1>
          <label className="block">
            <input
              className="form-checkbox"
              type="checkbox"
              checked-name="checkbox-direct"
              value="1"
            />
            <span className="ml-2">Resume/Cover Letter</span>
          </label>
          <label className="block">
            <input
              className="form-checkbox"
              type="checkbox"
              checked-name="checkbox-direct"
              value="2"
            />
            <span className="ml-2">College Essay</span>
          </label>
          <label className="block">
            <input
              className="form-checkbox"
              type="checkbox"
              checked-name="checkbox-direct"
              value="3"
            />
            <span className="ml-2">Online Courses</span>
          </label>
        </div>
        <label className="block">
          <span>Message</span>
          <textarea
            className="mt-1 block w-full h-40 rounded-xl"
            placeholder="What services are you looking for?"
          />
        </label>
      </div>
      <button className="mt-5 bg-[#064788] text-white p-3 font-bold rounded-2xl">Speak with an expert</button>
    </div>
  );
}
