import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape"
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Theory from "@/sections/Theories";
import Footer from "@/sections/Footer";

export default function Home() {
  return <>
    <Header />
    <Hero />
    <Intro />
    <Projects />
    <Tape />
    <About />
    <Experience />
    {/* <Contact /> */}
    {/* <Theory /> */}
    <Footer />
  </>;
}
