import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    if (name.length < 5) {
      tempErrors.name = "The name must contain at least 5 characters";
    }
    if (!email.includes("@")) {
      tempErrors.email = "The email must be valid";
    }
    if (message.length < 20) {
      tempErrors.message = "The message must contain at least 20 characters";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Form submitted");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="error-container">
          {Object.values(errors).map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contact;
