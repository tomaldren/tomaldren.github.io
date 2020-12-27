import React from "react";

function Contact(props) {
  return (
    <div className="contact main">
      <div className="contact-container">
        <h1 className="main-title">contact us</h1>
        <h2 className="home-subtitle">
          For pricing and more information, email us
          <a href="mailto:info@tractionmusic.co.uk" className="home-contact-link">
            {" "}
            here{" "}
          </a>
          with your project details
        </h2>
      </div>
    </div>
  );
}


export default Contact;
