"use client";

import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function Navbar({ open, setOpen }: Props) {
  return (
    <>
      {open ? (
        <motion.div
          initial={{
            y: -500,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          className="nav z-10 w-full h-[30rem] top-0 right-0 fixed"
        >
          <Image
            src="/assets/close.png"
            alt="close"
            className="absolute top-0 right-0 m-5 cursor-pointer"
            width={30}
            height={30}
            onClick={() => setOpen(!open)}
          />
          <motion.ul
            initial={{
              opacity: 0,
              x: -500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start items-start gap-10 absolute right-[100%] left-[40%] top-20"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </motion.ul>
        </motion.div>
      ) : (
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: -500,
          }}
          transition={{ duration: 0.6 }}
          className="navbar absolute z-10 w-full h-[20em] top-0 right-0"
        >
          <motion.ul
            initial={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 0,
              y: -500,
            }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start items-start gap-10 m-auto fixed"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
