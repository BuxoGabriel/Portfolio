"use client"

import { ThemeContext } from "@/contexts";
import { useContext } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    let lightTheme = theme == 'light';
    return <div className="flex justify-end">
        <button aria-label="Change visual theme button" className="" onClick={() => setTheme && setTheme(t => lightTheme? 'dark': 'light')}>
            { lightTheme? <IoSunny className="w-16 h-16" />: <IoMoon className="w-16 h-16" />}
        </button>
    </div>
}