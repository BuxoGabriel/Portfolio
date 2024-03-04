"use client"

import { ReactElement, useEffect, useRef } from "react"

type SpinnerProps = {
    children: ReactElement[],
    speed: number
}

export default function Spinner({children, speed}: SpinnerProps) {
    return <div 
        className="w-10/12 md:w-2/3 lg:w-1/2 min-w-64 overflow-hidden flex flex-row" 
        style={{WebkitMask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)', mask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)'}}
    >
        <SpinnerInner first={true} speed={speed}>
            {children}
        </SpinnerInner>
        <SpinnerInner first={false} speed={speed}>
            {children.map(x => x)}
        </SpinnerInner>
    </div>
}

type SpinnerInnerProps = {
    children: ReactElement[],
    first: boolean,
    speed: number
}

function SpinnerInner({ children, first, speed }: SpinnerInnerProps) {
    const list = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const element = list.current
        if(!element) {
            return
        }
        const duration = element.offsetWidth / speed
        element.style.animation = `scroll ${duration}s linear infinite`;
    }, [speed])

    return <ul aria-hidden={!first} ref={list} className={"flex flex-row gap-2 w-fit animate-scroll py-2 pl-2 box-border"}>
        {children}
    </ul>
}