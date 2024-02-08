import "./style.css";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    to: "moloceaionutt@gmail.com",
    message: "",
    sending: false,
    alert: "",
  });

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="contact-wrapper">
      <h1 className="montserrat title">CONTACT</h1>
      <div className="contact-form">
        <form onSubmit={sendMessage}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="What's your name?"
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              placeholder="What's your email?"
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-input"
              id="message"
              name="message"
              placeholder="What's on your mind?"
              onChange={handleChange}
            />
            <br/>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
