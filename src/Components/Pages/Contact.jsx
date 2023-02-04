import React, { useState } from "react";
import "../../styles/Contact.css";
function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <h1 className="title">Contact Me</h1>
      {submitted ? (
        <p className="title">Thank you, {fullName}!</p>
      ) : (
        <div className="box">
          <form onSubmit={handleForm} className="form-container">
            <div className="user-box">
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="user-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="user-box">
              <label htmlFor="message"></label>
              <textarea
                placeholder="Message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ContactForm;
