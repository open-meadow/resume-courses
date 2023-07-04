import React from "react";

import Image from "next/image"

export default function Middle() {
  return (
    <div className="relative">
      <Image src={"/../public/pexels-essow-k-936722.jpg"} width={1400} height={400} alt="Buildings" />
      <h1 className="absolute text-5xl p-10 top-1">Babayev Consulting</h1>
      <p className="absolute p-10 bottom-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui
        vivamus. Malesuada pellentesque elit eget gravida cum sociis. Eros donec
        ac odio tempor orci dapibus ultrices in iaculis. Massa ultricies mi quis
        hendrerit dolor magna eget est lorem. Sit amet nisl suscipit adipiscing
        bibendum est ultricies integer. Et molestie ac feugiat sed lectus. Velit
        scelerisque in dictum non consectetur a erat. Vel eros donec ac odio
        tempor orci dapibus ultrices in. Commodo viverra maecenas accumsan lacus
        vel. Ut morbi tincidunt augue interdum velit euismod. Nec feugiat nisl
        pretium fusce id velit ut tortor. Nibh mauris cursus mattis molestie a.
      </p>
    </div>
  );
}
