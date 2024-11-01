"use client"

import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import SkillsSpinners from "@/components/skills-spinner"


export default function Home() {
  return (<>
      <Navbar />
      <Hero />
      <SkillsSpinners />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>)
}
