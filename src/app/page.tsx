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
    <main id="top" className="text-slate-50 text-center text-lg min-h-screen bg-gray-600 bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800 ">
      <Navbar />
      <Hero />
      <div className="flex flex-row justify-center">
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