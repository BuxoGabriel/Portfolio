import { SKILLS, LANGUAGES } from "@/data"
import Spinner from "./spinner";

export default function SkillsSpinners() {
    const SCROLL_SPEED = 20

    return <section className="flex flex-col justify-center items-center">
        <h2 className="pb-4">Skills</h2>
        <Spinner speed={SCROLL_SPEED} direction="left">
            {SKILLS.map(skill =>   <li className="bg-slate-200 border-2 border-black text-black rounded-full shadow-md shadow-black py-2 px-4 w-max capitalize list-none" key={skill}>{skill}</li>)}
        </Spinner>
        <h2 className="py-4">Languages and Frameworks</h2>
        <Spinner speed={SCROLL_SPEED} direction="left">
            {LANGUAGES.map(lang => <li className="bg-slate-200 border-black border-2 text-black rounded-full shadow-md shadow-black py-2 px-4 w-max capitalize list-none" key={lang}>{lang}</li>)}
        </Spinner>
    </section>
}