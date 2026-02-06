"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünler", href: "/urunler" },
    { name: "İletişim", href: "/iletisim" },
  ]

  const groupLinks = [
    { name: "Tuna Group", href: "https://www.tunagroup.net.tr/" },
    { name: "Tuna Medikal", href: "https://www.tunamedical.com.tr/" },
    { name: "Efe Tıp", href: "https://www.efetip.com.tr/" },
    { name: "Tuna Sentetik", href: "https://www.tunasentetik.com.tr/" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-sand-50/90 backdrop-blur-md border-b border-sand-200 shadow-sm"
        : "bg-sand-50/60 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <div className="relative h-12 w-48">
                <Image src="/images/tuna-medikal-logo.png" alt="Tuna Group" fill className="object-contain" priority />
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
                  className={`font-medium transition-all duration-300 relative group ${pathname === item.href
                    ? "text-sage-700"
                    : isScrolled
                      ? "text-gray-700 hover:text-sage-700"
                      : "text-sage-900 hover:text-sage-700"
                    }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sage-600 to-clay-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </Link>
            ))}
            <div className="relative group">
              <motion.button
                type="button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                aria-haspopup="menu"
                className={`font-medium transition-all duration-300 relative flex items-center gap-1 ${isScrolled
                  ? "text-gray-700 hover:text-sage-700"
                  : "text-sage-900 hover:text-sage-700"
                  }`}
              >
                Tuna Group
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sage-600 to-clay-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              <div
                role="menu"
                className="absolute right-0 top-full mt-3 w-56 rounded-2xl bg-white/95 backdrop-blur-lg shadow-lg border border-sand-200 py-2 opacity-0 invisible translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0"
              >
                {groupLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-sage-900 hover:text-sage-700 hover:bg-sand-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden glass-card transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:bg-gray-100/50" : "text-sage-900 hover:bg-white/40"
              }`}
            onClick={() => {
              setMobileMenuOpen((open) => {
                const next = !open
                if (!next) setMobileGroupOpen(false)
                return next
              })
            }}
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
                      className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${pathname === item.href
                        ? "bg-sage-200/60 text-sage-700"
                        : isScrolled
                          ? "text-gray-700 hover:bg-gray-100/50"
                          : "text-sage-900 hover:bg-white/50"
                        }`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileGroupOpen(false)
                      }}
                    >
                      {item.name}
                    </motion.a>
                  </Link>
                ))}
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileGroupOpen((open) => !open)}
                    aria-expanded={mobileGroupOpen}
                    aria-controls="tuna-group-links"
                    className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between ${mobileGroupOpen
                      ? "bg-sage-200/60 text-sage-700"
                      : isScrolled
                        ? "text-gray-700 hover:bg-gray-100/50"
                        : "text-sage-900 hover:bg-white/50"
                      }`}
                  >
                    <span>Tuna Group</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileGroupOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileGroupOpen && (
                    <div id="tuna-group-links" className="mt-2 flex flex-col space-y-2">
                      {groupLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm px-4 py-2 rounded-lg transition-colors ${isScrolled
                            ? "text-gray-700 hover:bg-gray-100/50"
                            : "text-sage-900 hover:bg-white/50"
                            }`}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileGroupOpen(false)
                          }}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
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
                      className="w-full rounded-full border-sage-600 text-sage-700"
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
