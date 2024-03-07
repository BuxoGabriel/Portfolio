"use client"

import { Dispatch, SetStateAction, createContext } from "react";

type Theme = 'light' | 'dark' 
export const ThemeContext = createContext<{ theme: Theme, setTheme: Dispatch<SetStateAction<"light" | "dark">> | null }>({ theme: 'light', setTheme: null});
