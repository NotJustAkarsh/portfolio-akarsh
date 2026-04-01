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
      { name: "Three.js", slug: "threejs" },
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
      { name: "Redis", slug: "redis" },
      { name: "GraphQL", slug: "graphql" },
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
      { name: "Kubernetes", slug: "kubernetes" },
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
    thumbnail: "",
  },
  {
    title: "Code Flex App",
    category: "Web",
    description: "Modern Ui Design website",
    tech: ["React", "Tailwind"],
    livelink: "https://code-flex-ui.vercel.app",
    repolink: "https://github.com/NotJustAkarsh/CodeFlexUI",
    thumbnail: "",
  },
  {
    title: "Nebula API Gateway",
    category: "Fullstack",
    description:
      "High-throughput microservices orchestrator for cloud-native apps.",
    tech: ["Node.js", "Kubernetes", "gRPC"],
    livelink: "#",
    repolink: "",
    thumbnail: "",
  },
  {
    title: "Ether Wallet",
    category: "Fullstack",
    description:
      "Secure cryptocurrency wallet with multi-chain support and biometric auth.",
    tech: ["React Native", "Web3.js", "Solidity"],
    livelink: "",
    repolink: "",
    thumbnail: "",
  },
];
