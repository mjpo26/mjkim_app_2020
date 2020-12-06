import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Human is not made to be defeated. Human may be destroyed, but he cannot be defeated.”
      </span>
      <span>− 어니스트 해밍웨이, 노인과 바다</span>
    </div>
  );
}

export default About;
