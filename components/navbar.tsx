"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünler", href: "/urunler" },
    { name: "Referanslar", href: "/referanslar" },
    { name: "İletişim", href: "/iletisim" },
  ]

  const handleCall = () => {
    window.open("tel:+903423609850", "_self")
  }

  const handleEmail = () => {
    window.open("mailto:info@tunamedical.com.tr", "_self")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/20 backdrop-blur-md border-b border-white/20 shadow-lg" : "bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Slogan */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <div className="relative h-12 w-48">
                <Image src="/images/tuna-medikal-logo.png" alt="Tuna Medikal" fill className="object-contain" priority />
              </div>
              <div className="hidden lg:block">
                <p
                  className={`text-sm font-light italic transition-colors duration-300 ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  "Sevgiyi Sağlıkla Buluşturuyoruz"
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`font-medium transition-all duration-300 relative group ${
                    pathname === item.href
                      ? "text-green-600"
                      : isScrolled 
                      ? "text-gray-700 hover:text-green-600" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden glass-card transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:bg-gray-100/50" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-card rounded-2xl p-6 mb-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href}>
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-green-600/20 text-green-600"
                          : isScrolled 
                          ? "text-gray-700 hover:bg-gray-100/50" 
                          : "text-white/90 hover:bg-white/10"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <div className={`flex flex-col space-y-3 text-sm ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>info@tunamedical.com.tr</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button onClick={handleCall} className="btn-green-gradient w-full rounded-full">
                      Hemen Arayın
                    </Button>
                    <Button
                      onClick={handleEmail}
                      variant="outline"
                      className="w-full rounded-full border-green-600 text-green-600"
                    >
                      E-posta Gönderin
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
