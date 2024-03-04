"use client"

import { TITLES } from "@/data";
import useInterval from "@/hooks/useInterval";
import { useState } from "react";

const TITLECHANGETIME = 3000

export default function TitleSpinner() {
    const [titleIndex, setTitleIndex] = useState(0);
    useInterval(() => {
        setTitleIndex(index => (index + 1) % TITLES.length)
    }, TITLECHANGETIME)
    return <span key={TITLES[titleIndex]} className="overflow-hidden animate-fade-in-out opacity-0">{TITLES[titleIndex]}</span>
}