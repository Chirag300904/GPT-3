import React from "react";
import "./possiblity.css";
import possiblity from "../../assets/possibility.png";

const Possiblity = () => {
  return (
    <div className="gpt3-possiblity section-padding" id="possiblity">
      <div className="gpt3-possiblity-image">
        <img alt="Possiblity" src={possiblity} />
      </div>
      <div className="gpt3-possiblity-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possiblity;
