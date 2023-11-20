import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import ecommerce from "../../assets/ecommerce.png";
import router from "../../assets/router.jpeg";

const projects = [
  {
    title: "E-Commerce Store Page",
    description:
      "Full stack e-commerce store page with a shopping cart and checkout functionality.",
    imageUrl: ecommerce,
  },
  {
    title: "Router Data Collection",
    description:
      "Software to collect data from routers and store it in a database.",
    imageUrl: router,
  },
  {
    title: "Birthday Reminder",
    description: "Swift App to remind you of your friends birthdays.",
    imageUrl: "url_to_image3.jpg",
  },
];

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true); // State to handle visibility

  const goToProject = (direction) => {
    setVisible(false);
  };

    useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1 + projects.length) % projects.length
        );
        setVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>

      <div className="portfolio-wrapper">
        <button onClick={() => goToProject(-1)}>&larr;</button>

        <div className={`project-showcase ${visible ? "visible" : "hidden"}`}>
          <img
            src={projects[currentIndex].imageUrl}
            alt={projects[currentIndex].title}
          />
          <h2>{projects[currentIndex].title}</h2>
          <p>{projects[currentIndex].description}</p>
        </div>

        <button onClick={() => goToProject(1)}>&rarr;</button>
      </div>
    </div>
  );
}

export default Portfolio;
