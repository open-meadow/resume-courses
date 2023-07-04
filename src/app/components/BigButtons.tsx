import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BigButtons() {
  return (
    <div className="bigButtons">
      <div className="bigButtons--single">
        <img
          width="200"
          height="200"
          src="https://img.icons8.com/nolan/96/resume.png"
          alt="resume"
        />
        <img src="./resume.svg" />
        <h1 className="title-3">Resume and Cover Letter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
          fermentum iaculis eu non diam. Bibendum neque egestas congue quisque
          egestas diam. Nec nam aliquam sem et tortor consequat id porta nibh.
        </p>
        <button>Learn More</button>
      </div>
      <div className="bigButtons--single">
        <h1>Online Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
          fermentum iaculis eu non diam. Bibendum neque egestas congue quisque
          egestas diam. Nec nam aliquam sem et tortor consequat id porta nibh.
        </p>
        <button>Learn More</button>
      </div>
      <div className="bigButtons--single">
        <h1>College Essays</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
          fermentum iaculis eu non diam. Bibendum neque egestas congue quisque
          egestas diam. Nec nam aliquam sem et tortor consequat id porta nibh.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
