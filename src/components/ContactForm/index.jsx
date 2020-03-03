import React, { useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    event.preventDefault();

    const key = event.target.name;
    const value = event.target.value;

    if (key && value) {
      setFormData({
        ...formData,
        [key]: value
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      console.log("sending form...", formData);
    }
  }
  return (
    <form className="form">
      <div className="group mobile-12">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="input-name"
          name="name"
          className="input mobile-12"
          placeholder="Nilesh Patel"
          onChange={handleChange}
        />
      </div>
      <div className="group mobile-12">
        <label htmlFor="email" className="label">
          E-mail
        </label>
        <input
          type="email"
          id="input-email"
          name="email"
          className="input mobile-12"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
      </div>
      <div className="group mobile-12">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="input-message"
          name="message"
          className="input mobile-12"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="group mobile-12">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
