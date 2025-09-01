import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Springs of Joy Care Home | Compassionate Senior Care in Beaverton, Oregon",
  description:
    "Springs of Joy provides dignified, compassionate senior care and assisted living in a warm, home-like environment in Beaverton, Oregon. 24/7 support, personalized care, and activities.",
  keywords:
    "Care Home Beaverton Oregon, Assisted Living Beaverton, Senior Care Beaverton, Springs of Joy Beaverton",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
