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
    category: "Backend",
    description: "Backend setup for bank transactions",
    tech: ["Node.js", "Express", "MongoDB"],
    livelink: "https://bank-ledger-7myy.onrender.com",
    repolink: "https://github.com/NotJustAkarsh/bank-ledger",
    thumbnail:
      "https://ik.imagekit.io/gwv0quzrfq/Portfolio%20Assets/backend-ledger.jpg?updatedAt=1776265252870",
  },
  {
    title: "Advanced Authentication",
    category: "Backend",
    description: "An advanced authentication setup for a web app",
    tech: ["Node.js", "Express", "MongoDB"],
    livelink: "https://complete-authentication-71m0.onrender.com",
    repolink: "https://github.com/NotJustAkarsh/complete-authentication",
    thumbnail:
      "https://ik.imagekit.io/gwv0quzrfq/Portfolio%20Assets/complete-authentication.jpg",
  },

];

export const CERTIFICATIONS = [
  {
    title: "BCG - Strategic & Experience Design",
    issuer: "BCG X",
    date: "2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/WkzSp3gqQriGfpM7H_SKZxezskWgmFjRvj9_z4DHhTkQBrD6TkmhM_1756379622224_completion_certificate.pdf",
  },
  {
    title: "Accenture North America - Data Analytics and Visualization",
    issuer: "Accenture North America",
    date: "2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_z4DHhTkQBrD6TkmhM_1724570374771_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia - Technology",
    issuer: "Deloitte Australia",
    date: "2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_z4DHhTkQBrD6TkmhM_1765377631760_completion_certificate.pdf",
  },
  {
    title: "Skyscanner - Front-End Software Engineering",
    issuer: "Skyscanner",
    date: "2026",
    link: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_z4DHhTkQBrD6TkmhM_1769008733169_completion_certificate.pdf",
  },
  {
    title: "JavaScript",
    issuer: "OneRoadmap",
    date: "2026",
    link: "https://www.oneroadmap.io/skills/js/certificate/CERT-695FD5B5",
  },
  {
    title: "English Certificate",
    issuer: "OneRoadmap",
    date: "2026",
    link: "https://www.oneroadmap.io/skills/english/certificate/CERT-FB8B2E9F",
  },
  {
    title: "Commonwealth Bank - Introduction to Software Engineering",
    issuer: "OneRoadmap",
    date: "2026",
    link: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/wJMjCSKFhuj97x6F3_2sNmYuurxgpFYawco_z4DHhTkQBrD6TkmhM_1776322745582_completion_certificate.pdf",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    link: "https://verify.skilljar.com/c/t7n5n2rpkvfp",
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "2026",
    link: "https://verify.skilljar.com/c/w9cqupmaehtq",
  },
];
