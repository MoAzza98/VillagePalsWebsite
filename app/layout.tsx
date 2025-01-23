import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Village Pals - From Campfire to Community",
  description: "Build a thriving town on the blockchain with Village Pals",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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

