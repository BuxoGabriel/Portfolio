import Image from "next/image";

export type Project = {
    name: string,
    description: string,
    imageSrc: string,
    url: string
}

export default function ProjectCard(props: Project) {
    return <article className="border-2 border-black rounded-xl bg-gray-200 w-96 min-h-96 p-4 text-black">
        <a href={props.url} target={(props.url[0] == '/')?"_self": "_blank"} rel="noopener noreferrer">
            <header className="text-2xl">{props.name}</header>
            <p>{props.description}</p>
            <Image className="mx-auto" src={props.imageSrc} alt="project screenshot" width={200} height={200} />
        </a>
    </article>
}