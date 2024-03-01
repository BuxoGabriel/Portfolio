import { FaGithub, FaDownload, FaArrowRight} from "react-icons/fa";

import FancyText from "./fancy-text";
import TitleSpinner from "./title-spinner";

export default function Hero() {
    return <section className="w-full p-10 ">
        <h1 className="text-4xl flex flex-row justify-center gap-4 p-4 items-center">
            <span className="text-8xl block">Hello!</span>
            <span className="block">
                My name is <FancyText>Gabriel Buxo</FancyText>,
                <br/>
                I am a <TitleSpinner />
            </span>
        </h1>
        <p className="py-2 text-slate-100">
            Coding for over a decade. AI/ML enthusiast and fullstack developer
        </p>
        <div className="flex flex-row capitalize justify-center gap-4">
            <a className="w-64 border-2 rounded-full bg-slate-100 text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-slate-50" href="#contact">
                Contact Me
                <FaArrowRight className="w-10 h-10 inline px-2"/>
            </a>
            <a className="w-64 border-2 rounded-full bg-slate-100 text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-slate-50" href="/Resume.pdf" download>
                Download Resume
                <FaDownload className="w-10 h-10 inline px-2"/>
            </a>
            <a 
                className="w-64 border-2 rounded-full bg-slate-100 text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-slate-50"
                href="http://www.github.com/buxogabriel" target="_blank" rel="noopener noreferrer">
                Visit My Github
                <FaGithub className="w-10 h-10 inline px-2"/>
            </a>
        </div>
    </section>
}