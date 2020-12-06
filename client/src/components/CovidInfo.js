import React from "react";
import "./CovidInfo.css";

function CovidInfo() {
  return (
    <div className="socialDistancing">
      <section className="socialDistancingBody">
        <img
          src="https://thumbs.dreamstime.com/b/stay-home-coronavirus-covid-quarantine-motivational-phrase-178127311.jpg"
          alt="written message of Social Distancing.SOCIAL DISTANCING(bold black text all caps) with a message under it. WASH YOUR HANDS(medium umber text all caps) below the message. All the text is at the bottom half of image, background is a light golden brown with white dots scattered around, with medium umber circles fading out of the top."
        ></img>
        <span className="caption">
          We strongly advise you to stay home, but if for any reason you must go
          out please take preventive measures to insure your safety and that of
          the community.
        </span>
        <img
          className="symptoms"
          src="https://thumbs.dreamstime.com/b/covid-novel-coronavirus-symptoms-illustration-infographic-n-cov-coronavirus-symptoms-illustration-covid-novel-coronavirus-174022050.jpg"
          alt="Image of with written message of Social Distancing.SOCIAL DISTANCING(bold black text all caps) with a message under it. WASH YOUR HANDS(medium umber text all caps) below the message. All the text is at the bottom half of image, background is a light golden brown with white dots scattered around, with medium umber circles fading out of the top of the image."
        ></img>
        <span className="caption">
          If you are having any syptoms and are not sure you can see a doctor
          from the comfort of your home. Need current information about the
          virus and how to prevent it?, click on the link
          <a href="https://www.teladoc.com/coronavirus/?gclid=CjwKCAiA5IL-BRAzEiwA0lcWYr5g-sGxqJPdO1WWc0sSCEsOPYJv83jaqXGItu4j_SIR1vWrNLnl9BoCFHwQAvD_BwE">
            TELADOC
          </a>
        </span>
        <h1 className="imgTitle">No more lines!</h1>
        <img
          className="lineImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUYvzxjn_zEbCMLkmYxNQlAKvh9R-76w0EA&usqp=CAU"
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUYvzxjn_zEbCMLkmYxNQlAKvh9R-76w0EA&usqp=CAU"
        ></img>
        <span className="caption3">
          The Grocery store can seem like the DMV but you can take control of
          your time. We respect your time and understand that by saving you time
          at the store, you will have more time to spend on the important things
          in your life.
        </span>
      </section>
    </div>
  );
}

export default CovidInfo;
