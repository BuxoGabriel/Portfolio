"use client"

import { PropsWithChildren, useState } from "react"
import { ThemeContext } from "@/contexts"

type ThemeContextProps = PropsWithChildren<{}>

export default function ThemeContextProvider({children}: ThemeContextProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}
