import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import educare from "@/public/educare.png";
import coinbase from "@/public/coinbase.png";
import hilink from "@/public/hilink.png";
import ischolar from "@/public/ischolar.png";
import threads from "@/public/threads.png";
import tiktak from "@/public/tiktak.png";
import travel from "@/public/travel.png";
import growdata from "@/public/growdata.png";
import portfolio from "@/public/portfolio.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Instructor",
    location: "Surulere, Lagos",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 1 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind CSS, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind CSS", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
  {
    title: "Ischolar",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    imageUrl: ischolar,
  },
  {
    title: "Threads",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    imageUrl: threads,
  },
  {
    title: "Coinbase",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: coinbase,
  },
  {
    title: "Hilink",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: hilink,
  },
  {
    title: "Ravel",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: travel,
  },
  {
    title: "Educare",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: educare,
  },
  {
    title: "Portfolio",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Express .s",
  "MongoDB",
  "Redux Toolkit",
  "Firebase",
] as const;