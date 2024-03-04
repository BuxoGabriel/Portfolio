import { SKILLS, LANGUAGES } from "@/data"
import Spinner from "./spinner";

export default function SkillsSpinners() {
    const SCROLL_SPEED = 50

    return <section className="flex flex-col justify-center items-center">
        <h2 className="font-bold underline">Skills</h2>
        <Spinner speed={SCROLL_SPEED}>
            {SKILLS.map(skill =>   <li className="bg-slate-200 text-black rounded-full shadow-md shadow-black py-2 px-4 w-max" key={skill}>{skill}</li>)}
        </Spinner>
        <h2 className="py-4 font-bold underline">Languages and Frameworks</h2>
        <Spinner speed={SCROLL_SPEED}>
            {LANGUAGES.map(lang => <li className="bg-slate-200 text-black rounded-full shadow-md shadow-black py-2 px-4 w-max" key={lang}>{lang}</li>)}
        </Spinner>
    </section>
}