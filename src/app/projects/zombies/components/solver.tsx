"use client"

import { ReactNode } from "react";

export default function Solver() {
    return <div>
        {symbols.map((s, index) => {
            return <div key={index}>{s.symbol}</div>})
        }
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

function circle() {
    return <svg height="100" width="100" xmlns="https://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="white" stroke="black" strokeWidth="3" />
    </svg>
}

symbols.push(new AlgebraSymbol(circle(), 0));
