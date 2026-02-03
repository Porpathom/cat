"use client"


interface CopyMenuProps {
  commands: {
    https: string
    cli: string
    npx: string
  }
  onCopy: (text: string) => void
  showMenu: boolean
  copied: boolean
}

export function CopyMenu({ commands, onCopy, showMenu }: CopyMenuProps) {
  if (!showMenu) return null

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
      {[
        { label: "HTTPS", value: commands.https },
        { label: "GitHub CLI", value: commands.cli },
        { label: "npx", value: commands.npx },
      ].map((item) => (
        <button
          key={item.label}
          onClick={() => onCopy(item.value)}
          className="w-full text-left px-4 py-2 text-sm text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg transition"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
