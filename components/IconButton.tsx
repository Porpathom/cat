"use client"

interface IconButtonProps {
  children: React.ReactNode
  onClick?: () => void
  label: string
}

/**
 * IconButton - Accessible icon-only button with theme support
 * - Visible text color in both light and dark modes
 * - Focus ring for accessibility
 * - Hover state with background color
 */
export function IconButton({ children, onClick, label }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="p-2 rounded-lg text-slate-900 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300/40 dark:focus:ring-sky-500/40"
    >
      {children}
    </button>
  )
}
