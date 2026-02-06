"use client"

import { useState, useEffect } from "react"

// Import components
import Navbar from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import ProductCatalog from "@/components/product-catalog"
import Brands from "@/components/brands"
import { InnovativeSolutions } from "@/components/innovative-solutions"
import { Faq } from "@/components/faq"
import { NewsHighlights } from "@/components/news-highlights"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-sand-50">
      <Navbar isScrolled={false} />

      <main className="flex-1">
        <Hero />
        <AboutUs />
        <ProductCatalog />
        <Brands />
        <InnovativeSolutions />
        <Faq />
        <NewsHighlights />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
