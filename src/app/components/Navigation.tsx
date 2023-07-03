import React from "react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-8">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-light">
          Babayev Consulting
        </span>
      </div>

      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <a
            href="#Resume"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold text-[#064788] hover:text-cyan-600 mr-4"
          >
            Resume
          </a>
          <a
            href="#Online Courses"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold text-[#064788] hover:text-cyan-600 mr-4"
          >
            Online Courses
          </a>
          <a
            href="#Essay"
            hrefLang="#Essay"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold text-[#064788] hover:text-cyan-600 mr-4"
          >
            Essay
          </a>
        </div>
      </div>
    </nav>
  );
}
