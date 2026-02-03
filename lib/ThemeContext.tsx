"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"

interface ThemeContextType {
    dark: boolean
    toggleDark: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * ThemeProvider - Manages light/dark theme with localStorage persistence
 * - Syncs theme preference to localStorage
 * - Applies dark class to document element
 * - Defaults to dark mode on first visit
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [dark, setDark] = useState(true)
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        // Initialize theme from localStorage once on mount
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
        const savedTheme = localStorage.getItem("theme")
        const isDark = savedTheme ? savedTheme === "dark" : true
        setDark(isDark)
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    const toggleDark = () => {
        const nextDark = !dark
        setDark(nextDark)
        localStorage.setItem("theme", nextDark ? "dark" : "light")
        document.documentElement.classList.toggle("dark", nextDark)
    }

    // Don't render until client-side hydration is complete
    if (!mounted) return null

    return (
        <ThemeContext.Provider value={{ dark, toggleDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider")
    }
    return context
}
