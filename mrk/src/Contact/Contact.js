import React from "react";
import "./Contact.scss";
import Hamburger from "../util/Hamburger";
import EmailForm from "./EmailForm";
import SchoolLogo from "../images/SchoolLogo.png";

function Contact() {
  return (
    <div className="contact-container">
      <Hamburger />
      <h3 className="subject-header">Contact Me</h3>
      <EmailForm />

      <div className="thank-you-message">
        <p>
          Thank you very much for contacting me. I will respond via e-mail
          within 24 hours during a regular school day.
        </p>
        <p>Keep working hard. I'm proud of you!</p>
        <p className="name-signature">Alan Kunz</p>
        <p>Alan Kunz</p>
        <p>7th Grade Social Studies and Mathematics</p>
        <p>San Pasqual Valley Middle School Fighting Wildcats</p>
        <img src={SchoolLogo} className="logo-img" />
      </div>
    </div>
  );
}

export default Contact;
