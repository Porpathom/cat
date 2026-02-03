"use client"

import CopyButton from "@/components/CopyButton"

// Clone repository commands for different methods
const CLONE_COMMANDS = {
  https: "git clone https://github.com/Porpathom/cat.git",
  cli: "gh repo clone Porpathom/cat",
  ssh: "git clone git@github.com:Porpathom/cat.git",
}

export function HeroSection() {
  return (
    <section className="relative py-28 flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-left">
        {/* Main heading with highlighted accent */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Build <span className="text-sky-600 dark:text-sky-400">modern</span> websites
          <br /> faster than ever
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 dark:text-gray-400">
          A clean, developer-focused platform built with Next.js, Tailwind, and modern tooling.
        </p>

        {/* Clone command box with copy button */}
        <div className="mt-6">
          <div className="flex items-center gap-3 rounded-xl border bg-white dark:bg-black border-gray-200 dark:border-white/10 px-3 py-2 w-fit">
            <code className="truncate text-left text-sm text-black dark:text-gray-300 font-mono whitespace-nowrap">
              $ {CLONE_COMMANDS.cli}
            </code>

            <CopyButton commands={CLONE_COMMANDS} iconOnly />
          </div>
        </div>
      </div>
    </section>
  )
}
