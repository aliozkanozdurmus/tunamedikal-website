import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tuna Medikal Test | Advanced Medical Testing Services",
  description:
    "Providing cutting-edge diagnostic and medical testing services with precision and care. Your health is our priority.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
