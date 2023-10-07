"use client";
import { useContext } from "react";
import { Header, Hero, Skills, Projects, Contact } from "./components";
import Experience from "./components/Experience";
import { ThemeContext } from "./context/ThemeContext";
import "./i18n";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <section data-theme={theme === "dark" ? "dracula" : "acid"}>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </section>
  );
}
