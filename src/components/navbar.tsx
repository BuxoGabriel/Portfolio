import { ThemeContext } from "@/contexts"
import { useContext } from "react"

export default function Navbar() {
    const { theme } = useContext(ThemeContext)
    return (<nav className={` invisible z-10 h-0 lg:visible lg:h-16 sticky top-4 flex flex-row rounded-full w-1/2 min-w-fit mx-auto shadow-md border-2 border-black shadow-black text-center overflow-hidden ${theme=='light'? " bg-slate-800 text-slate-200": "bg-slate-200 text-slate-800"}`}>
        <a href="/#top" className=      " border border-slate-800 w-24 py-4 pl-2 flex-grow hover:bg-slate-800 hover:text-slate-100">Home</a>
        <a href="/#about" className=    " border border-slate-800 w-24 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Bio</a>
        <a href="/#projects" className= " border border-slate-800 w-24 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Projects</a>
        <a href="/#contact" className=  " border border-slate-800 w-24 py-4 pr-2 flex-grow hover:bg-slate-800 hover:text-slate-100">Contact Me</a>
    </nav>)
}