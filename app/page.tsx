"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/hooks/useTheme"

// Import components
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { AboutUs } from "@/components/about-us"
import { ProductCatalog } from "@/components/product-catalog"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Faq } from "@/components/faq"
import { NewsHighlights } from "@/components/news-highlights"
import { ContactForm } from "@/components/contact-form"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MaintenancePopup } from "@/components/maintenance-popup"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <MaintenancePopup />
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1">
        <HeroSlider />
        <AboutUs />
        <ProductCatalog />
        <Testimonials />
        <Gallery />
        <Faq />
        <NewsHighlights />
        <ContactForm />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
