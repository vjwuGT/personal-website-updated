import React from "react";
import ProjectsGrid from "./ProjectsGrid";

import ecommerce from "../../assets/ecommerce.png";
import roommates from "../../assets/roommates.png";
import talent from "../../assets/talent.png";
import website from "../../assets/website.png";
import dungeon from "../../assets/dungeon.png"

const projects = [
  {
    id: 1,
    title: "[WIP] Roommate Schedule Coordinator",
    description:
      "Full Stack App to coordinate schedules and assign tasks between roommates",
    imageUrl: roommates,
  },
  {
    id: 2,
    title: "[WIP] International Talent Finder",
    description: "Start up business idea to connect international students in India with small companies in the US",
    imageUrl: talent,
  },
  {
    id: 3,
    title: "E-Commerce Store Page",
    description: "Full Stack Web Application of an E-Commerce page",
    imageUrl: ecommerce,
    link: "https://github.com/vjwuGT/ecommercepage",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "This website!",
    imageUrl: website,
    link: "https://github.com/vjwuGT/personal-website-updated",
  },
  {
    id: 5,
    title: "Android Studio Dungeon Crawler Game",
    description: "Video game built with 4 other classmates as part of CS 2340",
    imageUrl: dungeon,
    link: "https://github.com/cff0102/CS2340C_Team44",
  },
];

const displayedProjects = projects.slice(0, 9);

function ProjectCreator() {
  return (
    <div>
      <ProjectsGrid projects={displayedProjects} />
    </div>
  );
}

export default ProjectCreator;
