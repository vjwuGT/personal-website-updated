import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../assets/pfp.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="greeting">Hello I'm Victor!</h1>
      <section className="bio-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <p>
          Welcome to my portfolio!
          <br />
          I am a junior at Georgia Tech studying Computer Science.
          <br />
          I am passionate about software development and always looking to grow!
          <br />
          Previously worked as a Software Engineering Intern at Amazon Robotics.
          <br />
          Looking for opportunities Summer 2024!
          <br />
        </p>
      </section>

      <section className="social-section">
        <a
          href="https://github.com/vjwuGT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/victorjwuGT/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://instagram.com/victorjwu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </section>

      <section className="resume-section">
        <a
          href="https://docs.google.com/document/d/1aHBN1bZCxowzwcbZsKLT8CKltKGMSOdpXlRjUIXFIaY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Check out my Resume
        </a>
      </section>
    </div>
  );
};

export default About;
