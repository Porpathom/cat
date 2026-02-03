"use client"

import { Github, Sun, Moon, Play, LogIn } from "lucide-react"
import { useTheme } from "@/lib/ThemeContext"
import { IconButton } from "@/components/IconButton"

export function NavbarIcons() {
  const { dark, toggleDark } = useTheme()

  return (
    <div className="hidden md:flex items-center gap-2">
      <IconButton
        label="GitHub"
        onClick={() => window.open("https://github.com/Porpathom/cat", "_blank")}
      >
        <Github className="w-5 h-5" />
      </IconButton>

      <IconButton label="Toggle theme" onClick={toggleDark}>
        {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </IconButton>

      <IconButton
        label="Show animation"
        onClick={() => alert("Animation feature coming soon!")}
      >
        <Play className="w-5 h-5" />
      </IconButton>

      <IconButton
        label="Sign In"
        onClick={() => window.location.href = "#Signin"}
      >
        <LogIn className="w-5 h-5" />
      </IconButton>
    </div>
  )
}
