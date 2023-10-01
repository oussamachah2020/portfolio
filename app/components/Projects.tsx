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
    <div className="mt-32" id="projects">
      <p className="uppercase text-center text-xl font-bold">Projects</p>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap md:flex-nowrap w-full items-center justify-center gap-16 mt-10 px-10"
      >
        {projects.map((project) => (
          <motion.div
            variants={item}
            key={project.id}
            className="card shadow-xl text-white bg-[#302f2fa9] w-[500px] h-[400px] flex flex-col"
          >
            <figure className="flex-grow-0">
              <img
                src={project.image}
                className="w-full h-56 object-cover"
                alt={`${project.title}_image`}
              />
            </figure>
            <div className="card-body flex-grow p-4">
              <p className="uppercase text-left text-lg font-semibold mb-2">
                {project.title}
              </p>
              <p className="text-left text-white">{project.description}</p>
              <div className="card-actions mt-4">
                <button
                  className="btn btn-success px-4 py-2 rounded-md"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Visit
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Projects;
