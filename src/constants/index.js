import {
  backend,
  creator,
  css,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  web,
} from "../assets";
import kotlin from "../assets/tech/kotlin.svg";
import postman from "../assets/tech/postman.png";
import mysql from "../assets/tech/mysql.png";
import englishDictionary from "../assets/English Dictionary.png";
import todoList from "../assets/Todo List.png";
import feedbackUI from "../assets/Feedback UI.png";
import peepingTom from "../assets/Peeping Tom icon.png";
import mathChallenge from "../assets/Maths Challange Multiplication practice.png";
import codeClinics from "../assets/Code Clinics img.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quality Assurance Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const projects = [
  {
    name: "English Dictionary Web Application",
    description: 
      "A modern web-based dictionary app providing word definitions, pronunciations, and examples.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "dictionary-api",
        color: "blue-text-gradient",
      },
    ],
    image: englishDictionary,
    source_code_link: "https://github.com/rd-codes/English-Dictionary",
  },
  {
    name: "Task Management Dashboard",
    description:
      "A real-time task management system that Includes task categorization and priority management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: todoList,
    source_code_link: "https://github.com/rd-codes/TodoList",
  },
  {
    name: "Feedback UI",
    description:
      "An interactive feedback collection app with three rating options: Unhappy, Neutral, and Satisfied.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "local-storage",
        color: "blue-text-gradient",
      },
    ],
    image: feedbackUI,
    source_code_link: "https://github.com/rd-codes/Feedback-UI",
  },
  {
    name: "Peeping-Tom Browser Extension",
    description:
      "A browser extension that helps users understand and answer questions by providing answers and explanations using Google's Gemini AI.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "chrome-extension",
        color: "green-text-gradient",
      },
      {
        name: "web-api",
        color: "pink-text-gradient",
      },
    ],
    image: peepingTom,
    source_code_link: "https://github.com/rd-codes/Peeping-Tom-Browser-Extension",
  },
  {
    name: "Math Challenge Multiplication Practice",
    description:
      "An interactive math practice app focusing on multiplication skills. Features timed sessions, difficulty levels, and progress tracking.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mathChallenge,
    source_code_link: "https://github.com/rd-codes/Math-Challenge-Multiplication-Practice-App",
  },
  {
    name: "Code Clinics Web App",
    description:
      "A web platform for booking one-on-one coding sessions with volunteers. Includes user authentication, Google Calendar integration, and real-time slot management. Built with Python, Flask, and SQLite for efficient session scheduling.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
      {
        name: "google-calendar-api",
        color: "blue-text-gradient",
      },
    ],
    image: codeClinics,
    source_code_link: "https://github.com/rd-codes/Code-Clinics-The-Web-App",
  },
];

export { projects, services, technologies };

