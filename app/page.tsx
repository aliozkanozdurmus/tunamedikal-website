"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/hooks/useTheme"

// Import components
import Navbar from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { AboutUs } from "@/components/about-us"
import ProductCatalog from "@/components/product-catalog" // Changed to default import
import Brands from "@/components/brands"
import { InnovativeSolutions } from "@/components/innovative-solutions"
import { Testimonials } from "@/components/testimonials"
// import { Gallery } from "@/components/gallery" // Galeri bileşeni kaldırıldı
import { Faq } from "@/components/faq"
import { NewsHighlights } from "@/components/news-highlights"
import { ContactForm } from "@/components/contact-form"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
// import { MaintenancePopup } from "@/components/maintenance-popup"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={`flex min-h-[100dvh] flex-col ${theme === "dark" ? "dark bg-slate-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`}
    >
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1">
        <HeroSlider />
        <AboutUs />
        <ProductCatalog />
        <Brands />
        <InnovativeSolutions />
        <Testimonials />
        <Faq />
        <NewsHighlights />
        <ContactForm />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
