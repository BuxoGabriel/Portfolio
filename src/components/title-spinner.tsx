"use client"

import { Titles } from "@/data";
import useInterval from "@/hooks/useInterval";
import { useState } from "react";

const TITLECHANGETIME = 3000

export default function TitleSpinner() {
    const [titleIndex, setTitleIndex] = useState(0);
    useInterval(() => {
        setTitleIndex(index => (index + 1) % Titles.length)
    }, TITLECHANGETIME)
    return <span className="overflow-hidden">{Titles[titleIndex]}</span>
}