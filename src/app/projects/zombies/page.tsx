import Image, { StaticImageData } from "next/image";

export const metadata = {
  title: 'Terminus Solver',
  description: 'A solver for the algebra step of the terminus easter egg for call of duty BO6',
}

export default function ZombiesSolver() {
    return (<div>
        <h1>Terminus Solver</h1>

    </div>)
}

type SymbolCardProps = { 
    imageSrc: StaticImageData,
    onClick: () => void
}

function SymbolCard({imageSrc, onClick}: SymbolCardProps) {
    return <div className="border-2 border-black rounded-xl bg-slate-200 bg-gradient-t-tl shadow-lg shadow-black from-slate-200 via-gray-400 to-blue-300 p-4">
        
    </div>
}
