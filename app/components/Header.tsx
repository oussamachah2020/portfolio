"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

type Props = {};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center py-5 px-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center gap-2"
      >
        <Image src="/assets/message.svg" alt="message" width={25} height={25} />
        <Link href={""}>
          <p>contact me</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        <div className="block md:hidden">
          <Image
            src={"/assets/Menu.svg"}
            width={25}
            height={25}
            alt="menu"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
          />
          {isOpen ? <Navbar open={isOpen} setOpen={setIsOpen} /> : null}
        </div>
        <div className="hidden md:block md:w-full">
          <ul className="flex justify-center items-center gap-7">
            <li className="list-item">Home</li>
            <li className="list-item">Skills</li>
            <li className="list-item">Projects</li>
            <li className="list-item">Experience</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
