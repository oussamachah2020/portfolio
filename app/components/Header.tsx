"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DarkIcon from "@/public/assets/dark.png";
import LightIcon from "@/public/assets/light.png";
import { ThemeContext } from "../context/ThemeContext";
import MailDark from "@/public/assets/dark-mail.png";
import MailLight from "@/public/assets/message.svg";
import { useTranslation } from "react-i18next";

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
  const [t, i18n] = useTranslation();
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navbarStyles = {
    backgroundColor: scrollPosition > 0 ? "#000" : "transparent",
    color: scrollPosition > 0 ? "white" : "",
    boxShadow: scrollPosition > 0 ? "0 2px 4px rgba(0, 0, 0, 0.5)" : "none",
    padding: scrollPosition > 0 ? "15px" : "20px",
  };

  return (
    <div
      className={`flex justify-between items-center p-8 fixed w-full z-50`}
      style={navbarStyles}
    >
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
        <Image
          src={theme === "light" ? MailDark : MailLight}
          alt="message"
          width={25}
          height={25}
        />
        <button>
          <a href={`mailto:oussamachahidi20@gmail.com?subject=development job`}>
            {t("header.contact")}
          </a>
        </button>
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
        <div className="flex justify-center items-center gap-10 md:hidden">
          <button onClick={toggleTheme} className="p-0 ">
            <Image
              src={theme === "dark" ? DarkIcon : LightIcon}
              alt="dark mode icon"
              width={25}
              height={25}
            />
          </button>
          {i18n.language === "en" && (
            <button
              onClick={() => {
                i18n.changeLanguage("fr");
              }}
            >
              EN
            </button>
          )}

          {i18n.language === "fr" && (
            <button
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              FR
            </button>
          )}
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
            <li className="list-item">
              <a href="#home">{t("header.home")}</a>
            </li>
            <li className="list-item">
              <a href="#skills">{t("header.skills")}</a>
            </li>
            <li className="list-item">
              <a href="#projects">{t("header.projects")}</a>
            </li>
            <li className="list-item">
              <a href="#experience">{t("header.experience")}</a>
            </li>
            <li className="ml-10">
              {i18n.language === "en" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("fr");
                  }}
                >
                  EN
                </button>
              )}

              {i18n.language === "fr" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  FR
                </button>
              )}
            </li>
            <li>
              <button onClick={toggleTheme} className="p-0 ">
                <Image
                  src={theme === "dark" ? DarkIcon : LightIcon}
                  alt="dark mode icon"
                  width={25}
                  height={25}
                />
              </button>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
