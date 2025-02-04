// src/components/Contact.js
import React from "react";
import ContactForm from "../components/ContactForm";
import "../src/App.css";

const Contact = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="contact-header">
        <h1>Connect with me!</h1>
        <p>I'd love to hear from you. Feel free to reach out!</p>
      </header>

      {/* Form Container */}
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;