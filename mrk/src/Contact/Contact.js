import React from "react";
import "./Contact.scss";
import Hamburger from "../util/Hamburger";
import EmailForm from "./EmailForm";

function Contact() {
  return (
    <div className="contact-container">
      <Hamburger />
      <h3 className="subject-header">Contact Me</h3>
      <EmailForm />

      <div className="thank-you-message">THXXXXXXX FAM</div>
    </div>
  );
}

export default Contact;
