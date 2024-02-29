import { projects } from "@/data"
import ProjectCard from "./projectCard"

export default function Projects() {
    return <section id="projects" className="p-10">
        <h1 className="text-4xl py-2">My Projects</h1>
        <div className="flex flex-wrap gap-4">
        {projects.map(p => <ProjectCard {...p} key={p.name} />)}
        </div>
    </section>
}