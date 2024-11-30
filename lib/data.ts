import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiBattleAxe } from "react-icons/gi";
import kaTreasure from "@/public/katreasure.png";
import symmetricCipher from "@/public/symmetricCipher.png";
import researchTracker from "@/public/researchTracker.png";

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
    title: "SOLVE: SOLUTION CHALLENGE VISAYAS GRAND FINAL",
    location: "Iloilo",
    description:
      'Our team, "FOUR", was selected as one of 5 teams out of 32 from the Visayas region to compete in the SOLVE: SOLUTION CHALLENGE VISAYAS GRAND FINAL in Iloilo City. We developed IT solutions, such as websites and apps, to address global challenges like zero hunger and other pressing issues, gaining valuable experience despite not securing a place.',
    icon: React.createElement(GiBattleAxe),
    date: "2024",
  },
  {
    title: "Ka Treasure Water Terraces Mountain Resort",
    location: "Catang, Argao ",
    description:
      "I collaborated with my team to develop a comprehensive website for Ka Treasure Water Terraces Mountain Resort as our capstone project, addressing the lack of a proper reservation system by implementing features such as online booking, POS integration, QR scanning for approved bookings, email receipt delivery, and Gmail-based sign-in/up, enhancing the resort's operations and customer experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "KaTreasureEH",
    description:
      "All-in-one platform for seamless reservations, POS, entrance management, and more to enhance guest experiences.",
    tags: ["Django", "Firebase", "HTML", "CSS", "JS"],
    imageUrl: kaTreasure,
    link: "https://katreasure.pythonanywhere.com/",
  },
  {
    title: "symmetricCipher",
    description:
      "A Django app with symmetric encryption tools, supporting Caesar, Vigenère, Playfair, Columnar, and AES.",
    tags: ["Django", "HTML", "CSS", "JS"],
    imageUrl: symmetricCipher,
    link: "https://symmetriccipher.pythonanywhere.com/",
  },
  {
    title: "researchTracker",
    description:
      "The Excel Research Tracker is a VBA-powered tool that helps researchers track tasks, progress, and deadlines efficiently.",
    tags: ["VBA", "Excel", "Macro", "Forms"],
    imageUrl: researchTracker,
    link: "https://github.com/celsopuerto/CTU-AC-Research-Tracker",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Django",
  "Java",
  "PHP",
  "Firebase",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;