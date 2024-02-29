import { skills } from "@/data"

export default function SkillCard() {
    return <article className="max-w-lg p-8 text-left">
        <h2 className="text-center text-xl underline font-bold">Skills</h2>
        <ul>
            {skills.map(skill => <li className="leading-snug" key={skill}>{skill}</li>)}
        </ul>
    </article>
}