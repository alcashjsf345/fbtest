import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Website",
  openGraph: {
    title: "My Website",
    description: "Check out my awesome website!",
    images: [
      {
        url: "https://images.templatetrip.com/templatetrip/themes/SHFTM016/02.theme-layouts.webp",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'