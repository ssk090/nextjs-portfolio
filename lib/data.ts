import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shivflixImg from "@/public/shivflix.png";
import textutilsImg from "@/public/textutils.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Systems Engineer Trainee",
    company: "Infosys Ltd.",
    location: "Hyderabad, India",
    description:
      "Led a 10-member team to develop a full-stack Cisco device data project using Angular 9, Spring Boot, MySQL, and Git, ensuring timely delivery and seamless integration of frontend and APIs with an alarm table featuring severity levels.",
    icon: React.createElement(LuGraduationCap), // TODO: change icons
    date: "Nov 2020 - Mar 2021",
  },
  {
    title: "Systems Engineer",
    company: "Infosys Ltd.",
    location: "Hyderabad, India",
    description:
      "Translated wireframes into efficient Angular code, seamlessly integrated with backend APIs, and delivered production-ready code with positive client feedback.",
    icon: React.createElement(CgWorkAlt), // TODO: change icons
    date: "Apr 2021 - Aug 2022",
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys Ltd.",
    location: "Hyderabad, India",
    description:
      "As a frontend developer, enhanced a client's dashboard using Agile methodology, implemented a React JS feature for a 60% usability boost, proficient in debugging, and collaborated cross-functionally for on-time project delivery and client satisfaction.",
    icon: React.createElement(CgWorkAlt), // TODO: change icons
    date: "Sep 2022 - Mar 2023",
  },
  {
    title: "Software Engineer",
    company: "Altir India Pvt. Ltd.",
    location: "Hyderabad, India",
    description: "Working as a Frontend Developer",
    icon: React.createElement(CgWorkAlt), // TODO: change icons
    date: "Apr 2023 - present",
  },
  //   {
  //     title: "Full-Stack Developer",
  //     location: "Houston, TX",
  //     description:
  //       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //     icon: React.createElement(FaReact),
  //     date: "2021 - present",
  //   },
] as const;

export const projectsData = [
  {
    title: "Shivflix",
    description:
      "Built a comprehensive Netflix-like platform that incorporates key features of IMDb, such as movie and TV show information and ratings",
    tags: [
      "React",
      "Hooks",
      "Redux Toolkit",
      "Material UI",
      "Alan AI",
      "TMDB API",
      "Netlify",
    ],
    imageUrl: shivflixImg,
  },
  {
    title: "Text Utils",
    description:
      "Built a simple text utility website using React where we can count words, characters and manipulate text.",
    tags: ["React", "JavaScript", "BootStrap", "Netlify"],
    imageUrl: textutilsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "AngularJs",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Spring Boot",
] as const;
