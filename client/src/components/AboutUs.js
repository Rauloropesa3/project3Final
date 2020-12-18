import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="socialTop">
      <div className="AboutUs">
        <h1>About us</h1>
        <section className="theTeam"></section>
      </div>

      <section className="socialDistancing">
        <img
          src="https://avatars3.githubusercontent.com/u/64676807?s=460&u=f81375c37f0a179873499566be67f52bb95522fc&v=4"
          alt="written message of Social Distancing.SOCIAL DISTANCING(bold black text all caps) with a message under it. WASH YOUR HANDS(medium umber text all caps) below the message. All the text is at the bottom half of image, background is a light golden brown with white dots scattered around, with medium umber circles fading out of the top."
        ></img>
        <span className="caption"></span>
        <img
          className="symptoms"
          src="https://avatars3.githubusercontent.com/u/11279036?s=460&v=4"
        ></img>
        <span className="caption">
          <a href="https://avatars1.githubusercontent.com/u/64676807?s=60&v=4">
            TELADOC
          </a>
        </span>
        <img
          className="lineImage"
          src="https://avatars2.githubusercontent.com/u/67036094?s=460&u=9d4ce95582d2b7d5edc0f89d82394b2458e08926&v=4"
          alt="carens gi"
        ></img>
        <span className="caption3"></span>
      </section>
    </div>
  );
}

export default AboutUs;
