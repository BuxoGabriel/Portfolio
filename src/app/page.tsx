"use client"
import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import LangCard from "@/components/lang-card"
import LightChange from "@/components/toggle-theme"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import SkillCard from "@/components/skill-card"
import SkillsSpinners from "@/components/skills-spinner"
import { ThemeContext } from "@/contexts"
import { useState } from "react"


export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <main 
      id="top" 
      className={`${theme==='light'? "bg-slate-200 text-slate-800": "bg-slate-800 text-slate-50"} text-center text-lg min-h-screen min-w-screen overflow-clip transition-colors`}
    >
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Navbar />
        <LightChange />
        <Hero />
        <SkillsSpinners />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </main>
  )
}