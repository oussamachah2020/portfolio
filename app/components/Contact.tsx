"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownloadIcon from "@/public/assets/downloadIcon.png";

const Contact = () => {
  return (
    <div className=" mt-10 p-10">
      <h2 className="text-center text-xl">Contacts</h2>
      <div className="flex flex-wrap justify-evenly items-center mt-10 md:flex:flex-nowrap">
        <div>
          <p>
            Phone Number: <span className="font-bold">+212 653643001</span>
          </p>
          <p>
            E-mail:{" "}
            <span className="font-bold">oussamachahidi20@gmail.com</span>
          </p>
          <a href="/oussama-chahidi_resume.pdf" download>
            <button className="btn btn-neutral w-full mt-5 flex justify-between">
              Download CV
              <Image
                src={DownloadIcon}
                alt="downalodIcon"
                width={25}
                height={25}
              />
            </button>
          </a>
        </div>
        <div className="mt-5 flex flex-wrap justify-between items-center md:flex-nowrap">
          <form className="flex flex-wrap justify-center items-center gap-3 max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-info w-full text-black"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="input input-bordered input-info w-full text-black"
            />
            <textarea
              className="textarea textarea-info w-full text-black"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-info btn-outline w-full">
              Send
            </button>
          </form>
        </div>
      </div>
      <section className="flex justify-center items-center gap-7 mt-10">
        <button
          onClick={() => window.open("https://github.com/oussamachah2020")}
        >
          <Image
            src={"/assets/github.png"}
            width={60}
            height={60}
            alt={"icons"}
            title="github.com"
          />
        </button>
        <button
          onClick={() => window.open("https://github.com/oussamachah2020")}
        >
          <Image
            src={"/assets/linkedIn.png"}
            width={50}
            height={50}
            alt={"icons"}
            title="LinkedIn.com"
          />{" "}
        </button>
        <Link href={""}>
          <Image
            src={"/assets/twitter.png"}
            width={50}
            height={50}
            alt={"icons"}
            title="Twitter.com"
          />
        </Link>
      </section>
      <div>
        <p className="text-center mt-10 font-semibold text-[#7e7e7e]">
          &copy; 2023 Oussama Chahidi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
