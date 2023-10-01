import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, Hero, Skills, Projects, Contact } from "./components";
import About from "./components/About";
import Experience from "./components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </section>
  );
}
