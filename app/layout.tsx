import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Bungee } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-surfer",
})

export const metadata: Metadata = {
  title: "Oceans Unmined | Protecting the Deep Sea",
  description:
    "Blending science, art, and community engagement to protect deep-sea ecosystems and counter deep-seabed mining threats.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${bungee.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
