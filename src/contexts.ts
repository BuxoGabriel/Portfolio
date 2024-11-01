import { Dispatch, SetStateAction, createContext } from "react";

export const ThemeContext = createContext<{ theme: Theme, setTheme: Dispatch<SetStateAction<"light" | "dark">> | null }>({ theme: 'light', setTheme: null});

type Theme = 'light' | 'dark' 
