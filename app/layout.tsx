import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tuna Group | Sağlık Teknolojileri ve Endüstriyel Çözümler",
  description:
    "Tuna Group, 2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında yenilikçi ve sürdürülebilir çözümler sunan çok sektörlü bir şirkettir.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
