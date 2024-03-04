"use client"

import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react"

type SpinnerProps = {
    children: ReactElement[],
    speed: number,
    direction: "left" | "right"
}

export default function Spinner({children, speed, direction}: SpinnerProps) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)
    useEffect(() => {
        setPrefersReducedMotion(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true)
    }, [])

    const createInner = useCallback((reducedMotion: boolean, children: ReactElement[]) => {
        if(reducedMotion) return children
        else return <>
            <SpinnerInner first={true} speed={speed} direction={direction}>
                {children}
            </SpinnerInner>
            <SpinnerInner first={false} speed={speed} direction={direction}>
                {children.map(x => x)}
            </SpinnerInner>
        </>
    }, [direction, speed])

    return <div 
        className={`w-10/12 md:w-2/3 lg:w-1/2 min-w-64 flex flex-row ${prefersReducedMotion? "flex-wrap gap-2": "overflow-hidden"}`}
        style={prefersReducedMotion? {}: {WebkitMask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)', mask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)'}}
    >
        {createInner(prefersReducedMotion, children)}
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