"use client";
import React from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <div className="mt-32">
      <p className="uppercase text-center text-xl font-bold">Projects</p>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center items-center mt-10 md:lg:flex-nowrap gap-10"
      >
        {projects.map((project) => (
          <>
            <motion.div
              variants={item}
              key={project.id}
              className="project_container flex flex-col justify-center items-center gap-3 mt-10"
            >
              <Image
                src={project.image}
                width={400}
                height={100}
                alt={`${project.title}_image`}
                className={`${!project.resize ? "w-[100%]" : "w-[80%]"}`}
              />
              <p className="uppercase italic text-left">{project.title}</p>
              <p className="text-left px-5">{project.description}</p>
              <button
                className="m-5 bg-slate-300 text-black px-8 py-2 rounded-md"
                onClick={() => window.open(project.link, "_blank")}
              >
                Visit
              </button>
            </motion.div>
          </>
        ))}
      </motion.section>
    </div>
  );
};

export default Projects;
