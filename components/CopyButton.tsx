"use client"

import { useEffect, useRef, useState } from "react"
import { Copy, Check } from "lucide-react"
import { CopyMenu } from "./CopyMenu"

interface CopyButtonProps {
  value?: string
  commands?: {
    https: string
    cli: string
    npx: string
  }
  label?: string
  iconOnly?: boolean
}

export default function CopyButton({
  value,
  commands,
  label = "Copy",
  iconOnly = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(t)
  }, [copied])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setShowMenu(false)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      ta.remove()
      setCopied(true)
      setShowMenu(false)
    }
  }

  // If commands provided, show dropdown menu
  if (commands && iconOnly) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label={label}
          className={`ml-3 p-2 rounded-lg transition ${
            copied
              ? "text-sky-600 dark:text-sky-400"
              : "text-black dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
          }`}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </button>

        <CopyMenu commands={commands} onCopy={copyToClipboard} showMenu={showMenu} copied={copied} />
      </div>
    )
  }

  // Simple copy button without menu
  if (iconOnly) {
    return (
      <button
        onClick={() => copyToClipboard(value || "")}
        aria-label={label}
        className={`ml-3 p-2 rounded-lg transition ${
          copied
            ? "text-sky-600 dark:text-sky-400"
            : "text-black dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
        }`}
      >
        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
      </button>
    )
  }

  return (
    <button
      onClick={() => copyToClipboard(value || "")}
      aria-label={label}
      className={`ml-3 rounded-lg px-4 py-2 text-sm font-medium transition transform ${
        copied
          ? "scale-95 bg-sky-500 text-white shadow-md"
          : "bg-sky-600 hover:bg-sky-500 text-white dark:bg-sky-500 dark:hover:bg-sky-400"
      }`}
    >
      <span className="inline-flex items-center gap-2">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21H8a2 2 0 0 1-2-2V7" strokeLinecap="round" strokeLinejoin="round"></path>
          <rect x="8" y="3" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round"></rect>
        </svg>
        <span className="pointer-events-none">{copied ? "Copied" : "Copy"}</span>
      </span>
    </button>
  )
}
