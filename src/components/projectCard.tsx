import Image from "next/image";

export type Project = {
    name: string,
    description: string,
    imageSrc: string
}

export default function ProjectCard(props: Project) {
    return <div className="border-2 border-black rounded-xl bg-gray-200 w-96 h-96 p-4 text-black">
        <header className="text-2xl">{props.name}</header>
        <p>{props.description}</p>
        <Image src={props.imageSrc} alt="project screenshot" width={200} height={200} />
    </div>
}