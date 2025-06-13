"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Ürünlerimiz", href: "#services" },
    { name: "Referanslar", href: "#testimonials" },
    { name: "Galeri", href: "#gallery" },
    { name: "SSS", href: "#faq" },
    { name: "Haberler", href: "#news" },
    { name: "İletişim", href: "#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="gradient-text">Tuna</span> Medikal
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-medical-600 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-medical-600" />
              <span className="text-sm font-medium">+90 555 123 4567</span>
            </div>
            <Button className="bg-gradient-medical hover:bg-medical-700 shadow-lg shadow-medical-500/20">
              İletişime Geçin
            </Button>
          </motion.div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Menüyü aç</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="space-y-1 px-4 pb-5 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-medical-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-medical hover:bg-medical-700 shadow-lg shadow-medical-500/20">
                  İletişime Geçin
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
