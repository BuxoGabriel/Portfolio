
import { LANGUAGES } from "@/data"

export default function LangCard() {
    return <article className="max-w-lg p-8 text-left">
        <h2 className="text-center text-xl underline font-bold">Coding Languages and Frameworks</h2>
        <ul>
            {LANGUAGES.map(lang => <li className="leading-snug" key={lang}>{lang}</li>)}
        </ul>
    </article>
}