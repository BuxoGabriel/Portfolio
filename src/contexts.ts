"use client"

import { createContext } from "react";

type Theme = 'light' | 'dark' 
export const ThemeContext = createContext<{ theme: Theme, setTheme: any }>({ theme: 'light', setTheme: null});
