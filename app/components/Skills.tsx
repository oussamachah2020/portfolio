"use client";
import Image from "next/image";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

import React from "react";

type Props = {};

// type SkillsType = {
//   skills: [
//     {
//       id: number;
//       logo: string;
//       name: string;
//     }
//   ];
// };

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

const Skills = (props: Props) => {
  return (
    <div className="mt-32">
      <h2 className="text-center uppercase text-xl">Skills</h2>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center items-center mt-5 mdlg:flex-nowrap gap-3"
      >
        {skills.map((skill) => (
          <>
            <motion.div
              variants={item}
              key={skill.id}
              className="skill_container flex flex-col justify-center items-center gap-3"
            >
              <Image
                src={skill.logo}
                width={80}
                height={80}
                alt={`${skill.name}_icon`}
              />
              <p className="uppercase italic">{skill.name}</p>
            </motion.div>
          </>
        ))}
      </motion.section>
    </div>
  );
};

export default Skills;
