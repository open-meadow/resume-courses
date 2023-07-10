import React from "react";

export default function Testimonials() {
  return (
    <div className="bg-slate-800 text-white overflow-hidden flex flex-col items-center p-3">
      <h1 className="text-4xl font-bold">Testimonials</h1>
      <div className="flex p-10 w-screen justify-evenly">
        <img src="https://placehold.co/300x300" className="rounded-full" />
        <div className="flex flex-col justify-center md-2">
          <h2 className="text-3xl font-semibold">
            "Taking this course changed my life!"
          </h2>
          <h2 className="text-2xl"> - Person</h2>
        </div>
      </div>
    </div>
  );
}
