import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3-footer section-padding">
      <div className="gpt3-footer-heading">
        <h1 className="gradient-text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3-footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3-footer-links">
        <div className="gpt3-footer-links-logo">
          <img alt="Logo" src={logo} />
          <p>Chirag Jhajjaria, All Rights Reserved</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters </p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Get in touch</h4>
          <p>Chirag Jhajjaria</p>
          <p>+91 12345-67890</p>
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className="gpt3-footer-copyright">
        <p>@ 2023 GPT-3, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
