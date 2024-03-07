"use client"

import { ThemeContext } from "@/contexts";
import { useContext } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    let lightTheme = theme == 'light';
    return <button className="fixed right-0 top-0 md:right-10 md:top-10" onClick={() => setTheme && setTheme(t => lightTheme? 'dark': 'light')}>
        { lightTheme? <IoSunny className="w-16 h-16" />: <IoMoon className="w-16 h-16" />}
    </button>
}