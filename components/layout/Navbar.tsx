"use client"
import Link from "next/link"
import { NavbarIcons } from "@/components/NavbarIcons"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link 
                    href="/" 
                    className="flex items-center gap-2 text-xl md:text-4xl font-extrabold">
                    <span className="text-sky-500">C</span>
                    <span className="text-slate-900 dark:text-slate-100">at</span>
                </Link>


                {/* Right side */}
                <div className="flex items-center gap-3">
                    <NavbarIcons />
                </div>
            </nav>

        </header>
    )
}
