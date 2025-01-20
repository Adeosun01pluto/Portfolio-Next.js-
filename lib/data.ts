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
import jhay from "@/public/jhay.png";
import oj from "@/public/oj.png";
import royal from "@/public/royal.png";
import fleet from "@/public/fleet.png";
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
    location: "Surulere, LG",
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
  {
    link:"https://ischolar-cfed0.web.app ",
    title: "Ischolar",
    description:
      "An Educational web app for jamb students to practice questions with well detailed answers. Also it includes question and answer section ",
    tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    imageUrl: ischolar,
  },
  {
    link:"https://threads-red-beta.vercel.app ",
    title: "Threads",
    description:
      "A public web app for intellectuals to connect and share ideas .",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    imageUrl: threads,
  },
  {
    link:"https://coinbase-ruby.vercel.app",
    title: "Coinbase",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: coinbase,
  },
  {
    link:"https://hilink-seven.vercel.app",
    title: "Hilink",
    description:
      "Welcome to Hilink, where the spirit of adventure meets the comfort of seamless planning. ",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: hilink,
  },
  {
    "link": "https://jhayexchange.netlify.app",
    "title": "Jhay Exchange",
    "description": "Jhay Exchange facilitates fast and secure local peer-to-peer (P2P) transactions, ensuring a seamless and efficient way to exchange goods and services.",
    "tags": ["React.js", "Tailwind CSS", "Firebase"],
    "imageUrl": jhay
  },
  {
    "link": "https://fleetfix.netlify.app",
    "title": "Fleet Tracker",
    "description": "Fleet Tracker is a web application designed to monitor and manage fleets such as cars, trucks, and other vehicles, including repair schedules and operational efficiency.",
    "tags": ["React.js", "Tailwind CSS", "Firebase"],
    "imageUrl": fleet
  },
  {
    "link": "https://ojlaundry.netlify.app/",
    "title": "Oj Laundry",
    "description": "Oj Laundry is a platform for users to book laundry services, schedule pickups, and deliveries, making it convenient to manage clothing care.",
    "tags": ["React.js", "Tailwind CSS", "Firebase"],
    "imageUrl": oj
  },
  {
    "link": "https://shoppsavvy.netlify.app",
    "title": "ShopSavvy",
    "description": "ShopSavvy is a private dashboard for workers and administrators to efficiently manage inventory, track goods, and oversee operations.",
    "tags": ["React.js", "Tailwind CSS", "Firebase"],
    "imageUrl": royal
  },
  {
    link:"https://travellers-rouge.vercel.app ",
    title: "Ravel",
    description:
      "This is a travel website for people who love to travel.",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: travel,
  },
  {
    link:"https://educare-khaki.vercel.app",
    title: "Educare",
    description:
      "EduConnect Hub📚, an innovative educational landing page designed to bridge the gap between students and learning resources. ",
    tags: ["React.js", "Tailwind CSS"],
    imageUrl: educare,
  },
  {
    link:"https://portfolio-7ti7.vercel.app/",
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