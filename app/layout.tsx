import "./globals.css"
import { LayoutWrapper } from "@/components/layout/LayoutWrapper"

export const metadata = {
  title: "Cat",
  description: "Modern Next.js Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white antialiased transition-colors">
        <LayoutWrapper>
          <main>{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  )
}
