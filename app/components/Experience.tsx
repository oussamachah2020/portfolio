"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { useTranslation } from "react-i18next";

type Props = {};

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

const Experience = (props: Props) => {
  const [t] = useTranslation();
  return (
    <div className="mt-32 w-full" id="experience">
      <p className="uppercase text-center text-xl font-bold">Experience</p>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-10 px-10 gap-10"
      >
        {experiences.map((experience) => (
          <motion.div
            variants={item}
            key={experience.id}
            className="card shadow-xl text-white bg-[#302f2fa9] w-[100%] h-[100%] flex flex-col"
          >
            <div className="card-body flex-grow p-4">
              <p className="uppercase text-left text-lg font-semibold mb-2 text-green-400">
                {t(experience.position)} at {t(experience.company)}
              </p>
              <p className="text-left text-white">
                {t(experience.description)}
              </p>
              <p className="text-left text-white">
                <span className="underline">TECH: </span>
                {experience.stack.map((tech, index) => (
                  <span className="italic" key={index}>
                    {tech},{" "}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Experience;
