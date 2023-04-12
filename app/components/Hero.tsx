"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center items-center md:flex-nowrap z-0">
      <div className="radial-background"></div>
      <div className="flex flex-wrap justify-center items-center mt-20 lg:gap-20">
        <Image
          src="/assets/profile.svg"
          alt="profile"
          width={0}
          height={0}
          className="w-[160px] md:w-[200px]"
        />
        <div>
          <TypeAnimation
            sequence={[
              "Oussama Chahidi", // Types 'One'
              1000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-2xl text-center md:text-5xl"
          />
          <TypeAnimation
            sequence={[
              "Full JavaScript Developer", // Types 'One'
              1500,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-xl text-center md:text-4xl mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
