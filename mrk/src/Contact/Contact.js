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

      <div className="thank-you-message">
        <p>
          Thank you very much for contacting me. I will respond via e-mail
          within 24 hours during a regular school day.
        </p>
        <p>Keep working hard. I'm proud of you!</p>
        <p>- Mr. Kunz</p>
        <p>San Pasqual Valley Middle School</p>
      </div>
    </div>
  );
}

export default Contact;
