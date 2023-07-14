import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#064788] p-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-light">
          Babayev Consulting
        </Link>
      </div>

      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <Link
            href="/resume"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-cyan-600 mr-4"
          >
            Resume
          </Link>
          <Link
            href="/online-course"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-cyan-600 mr-4"
          >
            Online Courses
          </Link>
          <Link
            href="/essay"
            hrefLang="#Essay"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-cyan-600 mr-4"
          >
            Essay
          </Link>
        </div>
      </div>
    </nav>
  );
}
