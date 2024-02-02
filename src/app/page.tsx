import Navbar from "@/components/navbar"
import ProjectCard, { Project } from "@/components/projectCard"
import { } from "next/font/google"
import Image from "next/image"

export default function Home() {
  const skills: string[] = [
    "Algorithmic Problem Solving",
    "Fullstack Development",
    "AI/ML",
    "Testing",
    "DevOps",
    "Docker",
    "Agile Workflow",
    "Communication"
  ]
  const languages: string[] = [
    "Javascript",
    "Typescript",
    "C",
    "Rust",
    "Python",
    "SQL",
    "Next",
    "React",
    "Svelte",
    "Angular",
    "Godot"
  ]
  const projects: Project[] = [

  ]

  return (
    <main className="min-h-screen w-screen bg-gray-600 bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800">
      <Navbar />
      <div className="w-full p-10 text-slate-100">
        <div className="flex flex-col md:flex-row">
          <div /* Left Side */ className="flex-grow">
            <div className="max-w-96">
              <div className="text-5xl md:text-8xl">
                Gabriel Buxo,
                <br />
                Software Engineer
              </div>
              <p className="py-2">Coding for over a decade. AI/ML enthusiast and fullstack developer</p>
            </div>
          </div>

          <div /* Right Side */>
            <div className="max-w-96 rounded-xl border-black border-2 p-8">
              <h1 className="text-center text-xl">Skills</h1>
              <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>

              <h1 className="text-center text-xl">Coding Languages and Frameworks</h1>
              <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div id="bio" className="py-10">
          <h1 className="text-4xl py-2">About Me</h1>
          <div className="flex flex-row">
            <p className="flex-grow">
              Hello! My name is Gabriel Buxo and I have been coding since middle school.
              I have a passion for coding that has consistantly driven me to learn more about algorithms and coding languages.
              I have used this pasion to make countless mini apps and scripts some of which are below. I am excited to make a difference with my code and to never stop learning.
            </p>
            <Image src="/yeet" alt="An image of myself" width={400} height={400} />
          </div>
        </div>

        <div id="projects" className="py-10">
          <h1 className="text-4xl py-2">My Projects</h1>
          <div className="flex flex-wrap gap-4">
            {projects.map(p => <ProjectCard {...p} key={p.name} />)}
          </div>
        </div>
      </div>
    </main>
  )
}