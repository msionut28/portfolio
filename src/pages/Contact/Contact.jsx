import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimateWhenVisible from "components/AnimateWhenVisible/AnimateWhenVisible";
import SocialLinks from "components/SocialLinks/SocialLinks";
import "./style.css";

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
    e.preventDefault();
    setForm({ ...form, sending: true });
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setForm({
            email: "",
            name: "",
            to: "moloceaionutt@gmail.com",
            message: "",
            sending: false,
            alert:
              "Your Email has successfully been sent! Will get in touch as soon as possible!",
          });
        },
        (error) => {
          console.log(error);
          setForm({
            ...form,
            sending: false,
            alert: `Your Email couldn't be sent, the following error has occured: ${error.text}. Please try again!`,
          });
        }
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  return (
    <div className="custom-text-style">
      <SocialLinks />
      <AnimateWhenVisible delay={0.5}>
        <div className="text-center">
          <h1 className="montserrat title">CONTACT</h1>
        </div>
      </AnimateWhenVisible>
      <div className="container">
        <div className="row mb-5 mt-3 pt-md-3">
          <AnimateWhenVisible delay={0.75}>
            <div className="col-lg-8">
              <h1 className="montserrat title">GET IN TOUCH</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </div>
          </AnimateWhenVisible>
          <AnimateWhenVisible delay={0.75}>
            <div className="row sec_sp">
              <div className="col-lg-12">
                <p className="montserrat">{form.alert}</p>
              </div>
              <div className="col-lg-5 mb-5">
                <address>
                  <span style={{ marginRight: "1vh" }}>
                    <strong className="montserrat">Email:</strong>
                  </span>
                  <a
                    className="montserrat"
                    href="mailto:moloceaionutt@gmail.com"
                    style={{fontWeight: "500"}}
                  >
                    moloceaionutt@gmail.com
                  </a>
                </address>
                <p className="montserrat" style={{ fontWeight: "500" }}>
                  I'm always open to new opportunities, collaborations, and
                  exciting projects. Feel free to explore my portfolio and get
                  in touch if you have a project in mind or just want to
                  connect.
                </p>
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <form
                  className="d-flex align-items-center flex-column"
                  onSubmit={sendMessage}
                >
                  <div className="row mb-5">
                    <div className="col-lg-6 form-group mb-2">
                      <input
                        type="text"
                        className="text-input montserrat"
                        id="name"
                        name="name"
                        value={form.name}
                        placeholder="How should I call you?"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="email"
                        className="text-input montserrat"
                        id="email"
                        name="email"
                        value={form.email}
                        placeholder="Where can I reach back?"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    type="text"
                    className="textarea-input montserrat"
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    placeholder="Share your thoughts with me..."
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <div className="row d-flex">
                    <div className="col-lg-12 form-group">
                      <button
                        type="submit"
                        className="montserrat customBtn"
                        style={{ fontWeight: "500" }}
                      >
                        {form.sending ? "SENDING..." : "SEND"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </AnimateWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Contact;
