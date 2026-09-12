import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EarlyWork } from "@/components/EarlyWork";
import { Exploration } from "@/components/Exploration";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Learning } from "@/components/Learning";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Learning />
        <EarlyWork />
        <Projects />
        <Exploration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
