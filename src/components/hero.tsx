import { FaGithub, FaDownload, FaArrowRight} from "react-icons/fa";

import FancyText from "./fancy-text";
import TitleSpinner from "./title-spinner";

export default function Hero() {
    return <section className="w-full p-10 mx-auto">
        <h1 className="text-4xl flex flex-col justify-center gap-4 p-4 items-center">
            <span className="text-6xl md:text-8xl tracking-tight block"><FancyText>Gabriel Buxo</FancyText></span>
            <span className="block h-24"><TitleSpinner /></span>
        </h1>
        <p className="py-2">
            Coding for over a decade. AI/ML enthusiast and fullstack developer
        </p>
        <div className="flex flex-col md:flex-row items-center capitalize justify-center gap-4">
            <a className="w-64 border-2 rounded-full bg-blue-500 text-white border-black shadow-sm shadow-black hover:bg-slate-900 hover:text-slate-50 group" href="#contact">
                Contact Me
                <FaArrowRight className="w-10 h-10 inline px-2 group-hover:translate-x-2 transition-transform"/>
            </a>
            <a className="w-64 border-2 rounded-full bg-slate-100 text-slate-900 border-black shadow-sm shadow-black hover:bg-slate-900 hover:text-slate-50" href="/Resume.pdf" download>
                Download Resume
                <FaDownload className="w-10 h-10 inline px-2"/>
            </a>
            <a 
                className="w-64 border-2 rounded-full bg-slate-100 text-slate-900 border-black shadow-sm shadow-black hover:bg-slate-900 hover:text-slate-50"
                href="http://www.github.com/buxogabriel" target="_blank" rel="noopener noreferrer">
                Visit My Github
                <FaGithub className="w-10 h-10 inline px-2"/>
            </a>
        </div>
    </section>
}