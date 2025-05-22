"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Job Portal",
    description: "A full-stack job portal where users can register, post, and apply for jobs. Includes authentication and job filtering features.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/ishikagulati/jobportal1",
    previewUrl: "https://github.com/ishikagulati/jobportal1",
  },
  {
    id: 2,
    title: "Trendy Tech",
    description: "A sleek landing page for showcasing trending technology gadgets, built with React and modern UI design principles.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/ishikagulati/TrendyTech",
    previewUrl: "https://github.com/ishikagulati/TrendyTech",
  },
  {
    id: 3,
    title: "AI Finance Platform - Welth",
    description: "An AI-driven personal finance manager that helps users track expenses, set goals, and get smart financial insights.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/ishikagulati/welth",
    previewUrl: "https://github.com/ishikagulati/welth",
  },
  {
    id: 4,
    title: "World Atlas",
    description: "A modern web app that allows users to explore country data and maps with real-time information using REST APIs.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/ishikagulati/WorldAtlas",
    previewUrl: "https://world-atlas-166t.vercel.app/",
  },
  {
    id: 5,
    title: "Music App",
    description: "A music player with login/signup, playlist creation, and CRUD operations for managing songs and albums.",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/ishikagulati/music-player",
    previewUrl: "https://music-player-fxu6.vercel.app/",
  },
  {
    id: 6,
    title: "RK Restaurant",
    description: "A responsive restaurant website that showcases menu items, customer testimonials, and contact forms.",
    image: "/images/projects/6.png",
    gitUrl: "https://github.com/ishikagulati/Restaurant",
    previewUrl: "https://github.com/ishikagulati/Restaurant",
  },
  {
    id: 7,
    title: "React Portfolio",
    description: "A personal portfolio site created with React and Tailwind to showcase projects, skills, and contact info.",
    image: "/images/projects/7.png",
    gitUrl: "https://github.com/ishikagulati/NewPort",
    previewUrl: "https://new-port-p7wg.vercel.app/",
  },
  {
    id: 8,
    title: "Streamify",
    description: "A unified platform that integrates multiple streaming services, offering personalized playlists and smart recommendations.",
    image: "/images/projects/8.png",
    gitUrl: "https://github.com/ishikagulati/Streamify",
    previewUrl: "https://streamify-a5di.vercel.app/",
  },
  {
    id: 9,
    title: "Lyrics Finder",
    description: "A web app to search for song lyrics by title or artist using third-party APIs with a clean and simple UI.",
    image: "/images/projects/9.png",
    gitUrl: "https://github.com/ishikagulati/LyricsFinder",
    previewUrl: "https://lyrics-finder-seven.vercel.app/",
  },
  {
    id: 10,
    title: "iTask - ToDo App",
    description: "A task management app where users can create, update, and delete tasks. Built with a focus on productivity.",
    image: "/images/projects/10.png",
    gitUrl: "https://github.com/ishikagulati/to-do-list",
    previewUrl: "https://github.com/ishikagulati/to-do-list",
  },
  {
    id: 11,
    title: "Gym Website",
    description: "A fitness website that includes training programs, gym services, and contact sections with modern layout.",
    image: "/images/projects/11.png",
    gitUrl: "https://github.com/ishikagulati/Gym",
    previewUrl: "https://github.com/ishikagulati/Gym",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
