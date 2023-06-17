"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-col z-0">
      <div className="flex flex-col justify-center items-center mt-20 md:flex-row gap-10">
        <Image
          src="/assets/profile.svg"
          alt="profile"
          width={0}
          height={0}
          className="w-[180px] md:w-[200px]"
        />
        <div className="flex flex-col justify-start items-start">
          <TypeAnimation
            sequence={["Oussama Chahidi", 1000]}
            wrapper="p"
            repeat={Infinity}
            className="text-2xl text-center md:text-5xl"
          />
          <TypeAnimation
            sequence={["Full Stack Web Developer", 1500]}
            wrapper="p"
            repeat={Infinity}
            className="text-xl text-center md:text-4xl mt-3"
          />
        </div>
      </div>
      <p className="w-[90%] md:w-[60%] font-medium mt-10 text-xl">
        Full-Stack Developer. A self-taught and computer-interested student,
        with solid backgrounds. knowledge of the latest technologies, and{" "}
        <span className="font-bold italic">
          i will build the right application for you to help you grow your
          business.
        </span>
      </p>
    </div>
  );
};

export default Hero;
