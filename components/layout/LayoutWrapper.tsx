"use client"

import { ThemeProvider } from "@/lib/ThemeContext"
import Navbar from "./Navbar"
import Footer from "./Footer"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
