export default function Navbar() {
    return (<nav className=" invisible z-10 h-0 lg:visible lg:h-16 sticky top-4 flex flex-row rounded-full w-1/2 min-w-fit mx-auto shadow-md border-2 border-black shadow-black bg-slate-200 text-slate-800 text-center overflow-hidden">
        <a href="/#top" className=      "font-bold border border-slate-800 w-24 py-4 pl-2 flex-grow hover:bg-slate-800 hover:text-slate-100">Home</a>
        <a href="/#about" className=    "font-bold border border-slate-800 w-24 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Bio</a>
        <a href="/#projects" className= "font-bold border border-slate-800 w-24 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Projects</a>
        <a href="/#contact" className=  "font-bold border border-slate-800 w-24 py-4 pr-2 flex-grow hover:bg-slate-800 hover:text-slate-100">Contact Me</a>
    </nav>)
}