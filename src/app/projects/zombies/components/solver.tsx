"use client"

import { PropsWithChildren, ReactNode, useState } from "react";
import SymbolCard from "./symbol-card";

export default function Solver() {
    const [stage, setStage] = useState<number>(1);
    const [x, setX] = useState<AlgebraSymbol | null>(null);
    const [y, setY] = useState<AlgebraSymbol | null>(null);
    const [z, setZ] = useState<AlgebraSymbol | null>(null);
    return (<div>
        <p className="text-2xl p-2">Select symbol representing <span>{"X"}</span></p>
        <div className="flex flex-wrap w-[30rem] gap-2 justify-center">
            {symbols.map((s, index) => {
                return <SymbolCard key={index} onClick={() => {
                    switch(stage) {
                        case 1:
                            setX(symbols[index])
                            setStage(2)
                            break
                        case 2:
                            setY(symbols[index])
                            setStage(3)
                            break
                        case 3:
                            setZ(symbols[index])
                            setStage(4)
                            break
                        default:
                        break
                    }
                }}>
                    {s.symbol}
                </SymbolCard>
            })}
        </div>
        <div className="flex justify-center gap-2 py-4">
            <VarHolder label="x" symbol={x}/>
            <VarHolder label="y" symbol={y}/>
            <VarHolder label="z" symbol={z}/>
        </div>
    </div>)
}

type VarHolderProps = {
    label: string,
    symbol: AlgebraSymbol | null
}

function VarHolder({label, symbol}: VarHolderProps) {
    return <div className="border-black rounded-xl bg-slate-200 bg-gradient-t-tl shadow-lg shadow-black from-slate-200 via-gray-400 to-blue-300 p-2 flex flex-col justify-center items-center text-black font-bold text-2xl">
        <div className="w-36 h-36 border-2 border-black bg-slate-100 rounded-xl flex flex-col justify-center items-center">
            {symbol?.symbol}
        </div>
        <label>{label}</label>
    </div>
}

class AlgebraSymbol {
    public symbol: ReactNode;
    public value: number;
    constructor(symbol: ReactNode, value: number) {
        this.symbol = symbol
        this.value = value
    }
}

const symbols: AlgebraSymbol[] = []

function Svg({children}: PropsWithChildren<{}>) {
    return <svg height="120" width="120" xmlns="https://www.w3.org/2000/svg" className={"animate-fade-in"}>
        {children}
    </svg>
}

function zero() {
    return <Svg>
        <circle r="40" cx="60" cy="60" fill="white" stroke="black" strokeWidth="3" />
    </Svg>
}
function eleven() {
    return <Svg>
        <circle r="30" cx="75" cy="45" fill="white" stroke="black" strokeWidth="3" />
        <circle r="30" cx="45" cy="75" fill="black" stroke="black" strokeWidth="3" />
    </Svg>
}

function ten() {
    return <Svg>
        <circle r="30" cx="60" cy="45" fill="white" stroke="black" strokeWidth="3" />
        <circle r="30" cx="60" cy="75" fill="black" stroke="black" strokeWidth="3" />
    </Svg>
}

function twentyTwo() {
    return <Svg>
        <ellipse rx="35" ry="25" cx="75" cy="45" fill="white" stroke="black" strokeWidth="3" transform="rotate(-45 75 45)" />
        <ellipse rx="35" ry="25" cx="45" cy="75" fill="white" stroke="black" strokeWidth="3" transform="rotate(-45 45 75)" />
        <ellipse rx="35" ry="25" cx="45" cy="45" fill="black" stroke="black" strokeWidth="3" transform="rotate(45 45 45)" />
        <ellipse rx="35" ry="25" cx="75" cy="75" fill="black" stroke="black" strokeWidth="3" transform="rotate(45 75 75)" />
    </Svg>
}

function twentyOne() {
    return <Svg>
        <ellipse rx="35" ry="25" cx="45" cy="45" fill="white" stroke="black" strokeWidth="3" transform="rotate(45 45 45)" />
        <ellipse rx="35" ry="25" cx="75" cy="75" fill="white" stroke="black" strokeWidth="3" transform="rotate(45 75 75)" />
        <ellipse rx="35" ry="25" cx="75" cy="45" fill="black" stroke="black" strokeWidth="3" transform="rotate(-45 75 45)" />
        <ellipse rx="35" ry="25" cx="45" cy="75" fill="black" stroke="black" strokeWidth="3" transform="rotate(-45 45 75)" />
    </Svg>
}

function twenty() {
    return <Svg>
        <ellipse rx="35" ry="25" cx="60" cy="45" fill="white" stroke="black" strokeWidth="3" transform="rotate(90 60 45)" />
        <ellipse rx="35" ry="25" cx="60" cy="75" fill="white" stroke="black" strokeWidth="3" transform="rotate(90 60 75)" />
        <ellipse rx="35" ry="25" cx="45" cy="60" fill="black" stroke="black" strokeWidth="3" />
        <ellipse rx="35" ry="25" cx="75" cy="60" fill="black" stroke="black" strokeWidth="3" />
    </Svg>
}

symbols.push(new AlgebraSymbol(zero(), 0));
symbols.push(new AlgebraSymbol(eleven(), 11));
symbols.push(new AlgebraSymbol(ten(), 10));
symbols.push(new AlgebraSymbol(twentyTwo(), 22));
symbols.push(new AlgebraSymbol(twentyOne(), 21));
symbols.push(new AlgebraSymbol(twenty(), 20));
