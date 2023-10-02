import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, Hero, Skills, Projects, Contact } from "./components";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </section>
  );
}
