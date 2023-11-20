import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

// contact component for the
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1zadcc",
        "template_1",
        form.current,
        "h-08ylQJffHm6MU2y"
      )
      e.target.reset();
  };
  return (
    <section className=" contact section " id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Feel free to email me</span>
      <div action="" className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Contact me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">victorwu689@gmail.com</span>
              <a
                href="mailto:victorwu689@gmail.com.com"
                className="contact__button"
              >
                Email me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="uil uil-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">@victorjwugt</span>
              <a
                href="https://www.linkedin.com/in/victorjwugt/"
                className="contact__button"
              >
                Connect with me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
