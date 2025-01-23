import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Village Pals - From Campfire to Community",
  description: "Build a thriving town on the blockchain with Village Pals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a4b8a] min-h-screen">{children}</body>
    </html>
  )
}

