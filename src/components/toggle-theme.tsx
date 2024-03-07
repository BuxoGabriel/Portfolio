"use client"

import { ThemeContext } from "@/contexts";
import { useContext } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    let lightTheme = theme == 'light';
    return <div className="flex justify-end">
        <button aria-label="Change visual theme button" className="mt-2 mr-2 w-16 h-16" onClick={() => setTheme && setTheme(t => lightTheme? 'dark': 'light')}>
            { lightTheme? <IoSunny className="w-full h-full" />: <IoMoon className="w-full h-full" />}
        </button>
    </div>
}