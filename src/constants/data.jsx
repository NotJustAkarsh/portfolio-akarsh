import React from "react";
import { Layout, Server, Cloud } from "lucide-react";

export const MARQUEE_STACK = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "TypeScript", slug: "ts" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "PostgreSQL", slug: "postgres" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", slug: "aws" },
  { name: "Python", slug: "py" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Redis", slug: "redis" },
  { name: "Figma", slug: "figma" },
];

export const SKILLS_DATA = [
  {
    title: "Frontend Architecture",
    description: "Building immersive, performant user interfaces.",
    icon: <Layout className="text-blue-500" size={20} />,
    techs: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "TypeScript", slug: "ts" },
      { name: "Tailwind", slug: "tailwind" },
      { name: "Redux", slug: "redux" },
    ],
  },
  {
    title: "Backend Systems",
    description: "Scalable server-side logic and database design.",
    icon: <Server className="text-indigo-500" size={20} />,
    techs: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Python", slug: "py" },
      { name: "Postgres", slug: "postgres" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    title: "DevOps & Design",
    description: "Deployment pipelines and aesthetic precision.",
    icon: <Cloud className="text-emerald-500" size={20} />,
    techs: [
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "aws" },
      { name: "Vercel", slug: "vercel" },
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Veudemy LMS App",
    category: "Web",
    description: "LMS Fullstack Application",
    tech: ["React", "Tailwind"],
    livelink: "https://veu-demy.vercel.app",
    repolink: "https://github.com/NotJustAkarsh/VeuDemy",
    thumbnail:
      "https://ik.imagekit.io/gwv0quzrfq/Portfolio%20Assets/veu-demy.png",
  },
  {
    title: "Code Flex App",
    category: "Web",
    description: "Modern Ui Design website",
    tech: ["React", "Tailwind"],
    livelink: "https://code-flex-ui.vercel.app",
    repolink: "https://github.com/NotJustAkarsh/CodeFlexUI",
    thumbnail:
      "https://ik.imagekit.io/gwv0quzrfq/Portfolio%20Assets/code-flex-ai.png",
  },
  {
    title: "Simple Notes",
    category: "Web",
    description: "Add your important notes and categorize them.",
    tech: ["Node.js", "React"],
    livelink: "https://simple-notes-app-ai.vercel.app/",
    repolink: "https://github.com/NotJustAkarsh/SimpleNotesAppAI",
    thumbnail:
      "https://ik.imagekit.io/gwv0quzrfq/Portfolio%20Assets/notes%20thumbnail.png",
  },
  {
    title: "Bank Ledger",
    category: "Web",
    description: "Backend setup for bank transactions",
    tech: ["Node.js", "Express", "MongoDB"],
    livelink: "https://bank-ledger-7myy.onrender.com",
    repolink: "https://github.com/NotJustAkarsh/bank-ledger",
    thumbnail:
      "https://ik.imagekit.io/gwv0quzrfq/Portfolio%20Assets/backend-ledger.jpg?updatedAt=1776265252870",
  },
  // {
  //   title: "Ether Wallet",
  //   category: "Fullstack",
  //   description:
  //     "Secure cryptocurrency wallet with multi-chain support and biometric auth.",
  //   tech: ["React Native", "Web3.js", "Solidity"],
  //   livelink: "",
  //   repolink: "",
  //   thumbnail: "",
  // },
];
