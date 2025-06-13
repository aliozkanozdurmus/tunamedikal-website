"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-gradient-radial from-medical-500 to-transparent blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-medical-300">Tuna</span> Medikal
            </div>
            <p className="text-gray-400 mb-6">
              2008'den beri sağlık sektörüne yüksek kaliteli tıbbi malzeme ve ekipman sağlayan lider üretici ve
              tedarikçi.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, name: "Facebook", href: "#" },
                { icon: <Twitter className="h-5 w-5" />, name: "Twitter", href: "#" },
                { icon: <Instagram className="h-5 w-5" />, name: "Instagram", href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", href: "#" },
              ].map((social, index) => (
                <motion.div key={social.name} whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={social.href} className="text-gray-400 hover:text-medical-300 transition-colors">
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {[
                { name: "Ana Sayfa", href: "#home" },
                { name: "Hakkımızda", href: "#about" },
                { name: "Ürünlerimiz", href: "#services" },
                { name: "Referanslar", href: "#testimonials" },
                { name: "Galeri", href: "#gallery" },
                { name: "İletişim", href: "#contact" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-gray-400 hover:text-medical-300 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Ürün Kategorileri</h3>
            <ul className="space-y-2">
              {[
                "Kardiyovasküler Ürünler",
                "Tanı Ekipmanları",
                "Laboratuvar Malzemeleri",
                "Tek Kullanımlık Ürünler",
                "Hasta İzleme Sistemleri",
                "Özel Üretim Çözümleri",
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#services" className="text-gray-400 hover:text-medical-300 transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-medical-300 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Tıp Merkezi Caddesi
                  <br />
                  İstanbul, Türkiye 34000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-medical-300 mr-3" />
                <span className="text-gray-400">+90 555 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-medical-300 mr-3" />
                <span className="text-gray-400">info@tunamedikal.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Tuna Medikal. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-medical-300 transition-colors text-sm">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-gray-400 hover:text-medical-300 transition-colors text-sm">
              Kullanım Şartları
            </Link>
            <Link href="#" className="text-gray-400 hover:text-medical-300 transition-colors text-sm">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
