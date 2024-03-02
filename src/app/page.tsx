import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import LangCard from "@/components/lang-card"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import SkillCard from "@/components/skill-card"

export default function Home() {
  return (
    <main 
      id="top" 
      className="text-slate-50 text-center text-lg min-h-screen min-w-screen bg-slate-800 overflow-clip"
    >
      <Navbar />
      <Hero />
      <div className="flex flex-row justify-center 2xl:flex-col 2xl:absolute 2xl:top-20 2xl:right-4 2xl:justify-start">
        <SkillCard />
        <LangCard />
      </div>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}