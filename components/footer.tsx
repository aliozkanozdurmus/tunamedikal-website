"use client"

import Link from "next/link"
import Image from "next/image"
import { MobileFooter } from "./mobile-footer"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="hidden md:block bg-gradient-to-br from-sand-50 to-sage-50 py-12 px-4 md:px-6 text-gray-700 border-t border-sand-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false}>
              <Image
                src="/images/tuna-medikal-logo.png"
                alt="Tuna Medikal Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              "Sevgiyi Sağlıkla Buluşturuyoruz" <br />
              Sağlığınız için güvenilir çözümler.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-sage-800">Hızlı Erişim</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/hakkimizda" className="text-sm text-gray-600 hover:text-sage-700 transition-colors">Hakkımızda</Link>
              <Link href="/urunler" className="text-sm text-gray-600 hover:text-sage-700 transition-colors">Ürünler</Link>
              <Link href="/iletisim" className="text-sm text-gray-600 hover:text-sage-700 transition-colors">İletişim</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-sage-800">Yasal Bilgiler</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/gizlilik-politikasi" className="text-sm text-gray-600 hover:text-sage-700 transition-colors">Gizlilik Politikası</Link>
              <Link href="/kvkk" className="text-sm text-gray-600 hover:text-sage-700 transition-colors">KVKK</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-sage-800">İletişim Bilgileri</h4>
            <address className="not-italic text-sm text-gray-600 space-y-3">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Tel:</span>
                <a href="tel:+903423609850" className="hover:text-sage-700 transition-colors">+90 342 360 9850</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">E-posta:</span>
                <a href="mailto:info@tunamedical.com.tr" className="hover:text-sage-700 transition-colors">info@tunamedical.com.tr</a>
              </p>
              <p className="leading-tight">
                3. Organize Sanayi Bölgesi <br />
                Kamil Şerbetçi Bulvarı No: 39 <br />
                Gaziantep / Türkiye
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-sand-200 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Tuna Medikal Tıbbi Cihazlar Sanayi Ve Ticaret Limited Şirketi. Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>

      {/* Mobile Optimized Footer */}
      <MobileFooter />
    </>
  )
}
