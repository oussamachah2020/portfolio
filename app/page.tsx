import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, Hero, Skills, Projects, Contact } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
