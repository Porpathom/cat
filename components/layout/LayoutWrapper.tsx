"use client"

import { ThemeProvider } from "@/lib/ThemeContext"
import Navbar from "./Navbar"
import Footer from "./Footer"

/**
 * LayoutWrapper - Root client wrapper for app layout
 * Provides ThemeProvider context and wraps Navbar, Footer, and page content
 */
export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
