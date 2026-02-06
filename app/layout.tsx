import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tuna Group | Sağlık Teknolojileri ve Endüstriyel Ambalaj Çözümleri",
  description:
    "Tuna Group, 2000 yılından bu yana sağlık teknolojileri ve endüstriyel ambalaj üretiminde ISO 13485 ve EU MDR sertifikalı, yenilikçi ve sürdürülebilir çözümler sunan öncü bir şirkettir. Gaziantep merkezli, 25+ ülkeye ihracat yapan güvenilir iş ortağınız.",
  keywords: [
    "tuna group",
    "tuna medikal",
    "sağlık teknolojileri",
    "medikal cihaz",
    "tıbbi sarf malzeme",
    "endüstriyel ambalaj",
    "pp sentetik çuval",
    "ISO 13485",
    "EU MDR",
    "CE sertifika",
    "nazal kanül",
    "anestezi ekipmanları",
    "solunum sistemleri",
    "tıbbi atık yönetimi",
    "gaziantep medikal",
    "türkiye medikal üretici",
    "medikal distribütör"
  ],
  authors: [{ name: "Tuna Group" }],
  creator: "Tuna Group",
  publisher: "Tuna Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tuna Group | Sağlık Teknolojileri ve Endüstriyel Çözümler",
    description: "ISO 13485 ve EU MDR sertifikalı sağlık teknolojileri ve endüstriyel ambalaj üretimi. 24 yıllık tecrübe, 25+ ülkeye ihracat.",
    url: "https://tunamedical.com.tr",
    siteName: "Tuna Group",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuna Group | Sağlık Teknolojileri ve Endüstriyel Çözümler",
    description: "ISO 13485 ve EU MDR sertifikalı sağlık teknolojileri ve endüstriyel ambalaj üretimi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
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
