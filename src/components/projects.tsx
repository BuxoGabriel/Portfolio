import { PROJECTS } from "@/data"
import ProjectCard from "./project-card"

export default function Projects() {
    return <section id="projects" className="p-10 scroll-mt-20">
        <h2 className="text-4xl py-2">My Projects</h2>
        <div className="flex flex-wrap gap-4 justify-center">
        {PROJECTS.map(p => <ProjectCard {...p} key={p.name} />)}
        </div>
    </section>
}
