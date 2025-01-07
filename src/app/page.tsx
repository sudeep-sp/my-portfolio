"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Bot from "@/components/Bot";
import Navbar from "@/components/Navbar";
import StickyContactBtn from "@/components/StickyContackBtn";
export default function Home() {
 

  return (
    <>
      <div className="bg-primary relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Bot />
        <Footer />
        <StickyContactBtn />
      </div>
    </>
  );
}
