"use client";
import React from "react";
import { qualities } from "../data/Qualities";
import { motion } from "framer-motion";

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

const About = (props: Props) => {
  return (
    <div className="mt-32 w-full">
      <p className="uppercase text-center text-xl font-bold">Why Choose Me:</p>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-10 px-10 gap-10"
      >
        {qualities.map((quality) => (
          <motion.div
            variants={item}
            key={quality.id}
            className="card shadow-xl text-white bg-[#302f2fa9] w-[100%] h-[100%] md:h-[200px] flex flex-col"
          >
            <div className="card-body flex-grow p-4">
              <p className="uppercase text-left text-lg font-semibold mb-2 text-green-400">
                {quality.title}
              </p>
              <p className="text-left text-white">{quality.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default About;
