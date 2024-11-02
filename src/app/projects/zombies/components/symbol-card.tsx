import { PropsWithChildren } from "react"

export type SymbolCardProps = PropsWithChildren<{onClick: () => void}>

export default function SymbolCard({children, onClick}: SymbolCardProps) {
    return <div className="border-2 border-black rounded-xl bg-slate-200 bg-gradient-t-tl shadow-lg shadow-black from-slate-200 via-gray-400 to-blue-300 p-2 w-fit hover:scale-110 transition-transform" onClick={onClick}>{children}</div>
}
