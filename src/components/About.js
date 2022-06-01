import React from "react";
import "../component-css/About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="heading">About Us</h1>
        <div className="details">
          Jesus Youth Rajagiri, part of the Ernakulam Campus Ministry, aims to{" "}
          be a platform for all RSET students, with a variety of talent and{" "}
          intercession ministires, which all aims to unite the students under
          one platform.
          <div className="btn-container">
            <button className="contact-btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
