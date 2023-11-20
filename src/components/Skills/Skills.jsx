import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const bars = skillsRef.current.querySelectorAll(".progress-bar");
    bars.forEach((bar) => {
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = bar.dataset.width;
      }, 300); // Add a delay for the animation effect
    });
  }, []);

  return (
      <div className="skills-container" ref={skillsRef}>
        <div className="greeting">Skills</div>
        <div className="skills-columns">
          <div className="column frontend">
            <h2>Frontend</h2>
            <Skill name="React" proficiency="intermediate" />
            <Skill name="Javascript" proficiency="intermediate" />
            <Skill name="HTML/CSS" proficiency="intermediate" />
            <Skill name="Next.js" proficiency="beginner" />
            <Skill name="Swift" proficiency="beginner" />
          </div>

          <div className="column backend">
            <h2>Backend</h2>
            <Skill name="Python" proficiency="advanced" />
            <Skill name="Java" proficiency="advanced" />
            <Skill name="Node.js" proficiency="intermediate" />
            <Skill name="MongoDB" proficiency="beginner" />
            <Skill name="Express" proficiency="beginner" />
          </div>
        </div>
        <Tooltip />
      </div>
  );
};

const Skill = ({ name, proficiency }) => {
  let width;
  let description;

  switch (proficiency) {
    case "beginner":
      width = "33%";
      description = "Beginner Level";
      break;
    case "intermediate":
      width = "66%";
      description = "Intermediate Level";
      break;
    case "advanced":
      width = "100%";
      description = "Advanced Level";
      break;
    default:
      width = "0";
      description = "";
  }

  return (
    <div className="skill" data-tip={description}>
      <span>{name}</span>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ transition: "width 1s ease-in-out" }}
          data-width={width}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
