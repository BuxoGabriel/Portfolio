import Image, { StaticImageData } from "next/image";

export type Project = {
    name: string,
    description: string,
    imageSrc: StaticImageData,
    imageAlt: string,
    url: string
}

export default function ProjectCard(project: Project) {
    return <article className="border-2 border-black rounded-xl bg-slate-200 bg-gradient-to-tl shadow-lg shadow-black from-slate-200 via-gray-400 to-blue-300 w-96 min-h-96 text-black hover:scale-110 transition-transform">
        <a href={project.url} target={(project.url[0] == '/')?"_self": "_blank"} rel="noopener noreferrer">
            <header className="text-2xl py-2 px-4 w-full font-bold bg-black/10 border-b border-black mb-2">{project.name}</header>
            <div className="flex flex-col h-max px-4">
                <p className="flex-grow text-left">{project.description}</p>
                <Image className="mx-auto w-64 h-64 object-cover my-4" src={project.imageSrc} alt={project.imageAlt} />
            </div>
        </a>
    </article>
}