"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Middle() {
  const pathname = usePathname();

  console.log("pathname: ", pathname);

  return (
    <div className="middle">
      {pathname === "/" && (
        <>
          <h1>Babayev Consulting</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            ornare arcu dui vivamus. Malesuada pellentesque elit eget gravida
            cum sociis. Eros donec ac odio tempor orci dapibus ultrices in
            iaculis. Massa ultricies mi quis hendrerit dolor magna eget est
            lorem. Sit amet nisl suscipit adipiscing bibendum est ultricies
            integer. Et molestie ac feugiat sed lectus. Velit scelerisque in
            dictum non consectetur a erat. Vel eros donec ac odio tempor orci
            dapibus ultrices in. Commodo viverra maecenas accumsan lacus vel. Ut
            morbi tincidunt augue interdum velit euismod. Nec feugiat nisl
            pretium fusce id velit ut tortor. Nibh mauris cursus mattis molestie
            a.
          </p>
        </>
      )}
      {pathname === "/resume" && (
        <>
          <h1>Resume and Cover Letter Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            ornare arcu dui vivamus. Malesuada pellentesque elit eget gravida
            cum sociis. Eros donec ac odio tempor orci dapibus ultrices in
            iaculis. Massa ultricies mi quis hendrerit dolor magna eget est
            lorem. Sit amet nisl suscipit adipiscing bibendum est ultricies
            integer. Et molestie ac feugiat sed lectus. Velit scelerisque in
            dictum non consectetur a erat. Vel eros donec ac odio tempor orci
            dapibus ultrices in. Commodo viverra maecenas accumsan lacus vel. Ut
            morbi tincidunt augue interdum velit euismod. Nec feugiat nisl
            pretium fusce id velit ut tortor. Nibh mauris cursus mattis molestie
            a.
          </p>
        </>
      )}
    </div>
  );
}
