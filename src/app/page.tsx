import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import LangCard from "@/components/lang-card"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import SkillCard from "@/components/skill-card"
import SkillsSpinners from "@/components/skills-spinner"

export default function Home() {
  return (
    <main 
      id="top" 
      className="text-slate-50 text-center text-lg min-h-screen min-w-screen bg-slate-800 overflow-clip"
    >
      <Navbar />
      <Hero />
      <SkillsSpinners />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}