"use client"

import { ReactElement, useEffect, useRef } from "react"

type SpinnerProps = {
    children: ReactElement[],
    speed: number,
    direction: "left" | "right"
}

export default function Spinner({children, speed, direction}: SpinnerProps) {
    return <div 
        className="w-10/12 md:w-2/3 lg:w-1/2 min-w-64 overflow-hidden flex flex-row" 
        style={{WebkitMask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)', mask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)'}}
    >
        <SpinnerInner first={true} speed={speed} direction={direction}>
            {children}
        </SpinnerInner>
        <SpinnerInner first={false} speed={speed} direction={direction}>
            {children.map(x => x)}
        </SpinnerInner>
    </div>
}

type SpinnerInnerProps = {
    children: ReactElement[],
    first: boolean,
    speed: number,
    direction: "left" | "right"
}

function SpinnerInner({ children, first, speed, direction}: SpinnerInnerProps) {
    const list = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const element = list.current
        if(!element) {
            return
        }
        const duration = element.offsetWidth / speed
        element.style.animation = `scroll ${duration}s linear infinite ${direction == 'right'? 'reverse': ''}`;
    }, [speed, direction])

    return <ul aria-hidden={!first} ref={list} className={"flex flex-row gap-2 w-fit animate-scroll py-2 pl-2 box-border"}>
        {children}
    </ul>
}