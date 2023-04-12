import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="contact mt-10 p-10">
      <h2 className="text-center text-xl">Contacts</h2>
      <div className="flex flex-wrap justify-evenly items-center mt-10 md:flex:flex-nowrap">
        <div>
          <p>
            Phone Number: <span className="italic">+212 653643001</span>
          </p>
          <p>
            E-mail: <span className="italic">oussamachahidi20@gmail.com</span>
          </p>
        </div>
        <div className="mt-5 flex flex-wrap justify-between items-center md:flex-nowrap">
          <form className="flex flex-wrap justify-center items-center gap-3 max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="input input-bordered input-info w-full"
            />
            <textarea
              className="textarea textarea-info  w-full"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-info btn-outline w-full">
              Send
            </button>
          </form>
        </div>
      </div>
      <section className="flex justify-center items-center gap-7 mt-10">
        <Link href={"https://github.com/oussamachah2020"}>
          <Image
            src={"/assets/github.png"}
            width={60}
            height={60}
            alt={"icons"}
            title="github.com"
          />
        </Link>
        <Link href={""}>
          <Image
            src={"/assets/linkedIn.png"}
            width={60}
            height={60}
            alt={"icons"}
            title="LinkedIn.com"
          />{" "}
        </Link>
        <Link href={""}>
          <Image
            src={"/assets/twitter.png"}
            width={60}
            height={60}
            alt={"icons"}
            title="Twitter.com"
          />
        </Link>
      </section>
    </div>
  );
};

export default Contact;
