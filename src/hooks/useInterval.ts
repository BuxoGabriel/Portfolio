"use client"

import { useEffect } from "react"

export default function useInterval(callback: () => void, timeInMs: number) {
    useEffect(() => {
        let interval = setInterval(callback, timeInMs)
        return () => clearInterval(interval)
    })
}