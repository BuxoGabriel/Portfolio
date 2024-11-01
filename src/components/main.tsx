"use client"

import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "@/contexts";
import LightChange from "@/components/toggle-theme"

type MainProps = PropsWithChildren<{}>

export default function Main({children}: MainProps) {
    const { theme } = useContext(ThemeContext);
    return <main 
        id="top" 
        className={`${theme==='light'? "bg-slate-200 text-slate-800": "bg-slate-800 text-slate-50"} text-center text-lg min-h-screen min-w-screen overflow-clip transition-colors`}
      >
        <LightChange/>
        {children}
    </main>
}
