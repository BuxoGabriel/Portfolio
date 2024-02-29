export default function Navbar() {
    return (<nav className="sticky top-0 flex flex-row bg-slate-200 text-slate-800 text-center">
        <a href="/#top" className="border border-slate-800 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Home</a>
        <a href="/#about" className="border border-slate-800 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Bio</a>
        <a href="/#projects" className="border border-slate-800 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Projects</a>
        <a href="/#contact" className="border border-slate-800 py-4 flex-grow hover:bg-slate-800 hover:text-slate-100">Contact Me</a>
    </nav>)
}