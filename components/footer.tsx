"use client"

import Link from "next/link"
import Image from "next/image"
import { MobileFooter } from "./mobile-footer"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="hidden md:block bg-gradient-to-br from-sand-50 to-sage-50 py-16 px-4 md:px-6 text-gray-700 border-t border-sand-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false}>
              <Image
                src="/images/tuna-medikal-logo.png"
                alt="Tuna Group Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              "Sağlıkta ve Endüstride Değer Üretiyoruz" <br />
              Sürdürülebilir ve yenilikçi çözümler.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold tracking-[0.2em] mb-6 text-sage-950 uppercase">Hızlı Erişim</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/hakkimizda" className="text-sm text-gray-500 hover:text-sage-700 transition-colors">Hakkımızda</Link>
              <Link href="/urunler" className="text-sm text-gray-500 hover:text-sage-700 transition-colors">Ürünler</Link>
              <Link href="/iletisim" className="text-sm text-gray-500 hover:text-sage-700 transition-colors">İletişim</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold tracking-[0.2em] mb-6 text-sage-950 uppercase">Yasal</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/gizlilik-politikasi" className="text-sm text-gray-500 hover:text-sage-700 transition-colors">Gizlilik Politikası</Link>
              <Link href="/kvkk" className="text-sm text-gray-500 hover:text-sage-700 transition-colors">KVKK</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold tracking-[0.2em] mb-6 text-sage-950 uppercase">İletişim</h4>
            <address className="not-italic text-sm text-gray-500 space-y-4">
              <p className="flex items-center gap-3">
                <span className="font-semibold text-sage-900">Tel:</span>
                <a href="tel:+903423609850" className="hover:text-sage-700 transition-colors font-medium">+90 342 360 9850</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold text-sage-900">E-mail:</span>
                <a href="mailto:info@tunamedical.com.tr" className="hover:text-sage-700 transition-colors font-medium">info@tunamedical.com.tr</a>
              </p>
              <p className="leading-relaxed opacity-80">
                3. Organize Sanayi Bölgesi <br />
                Kamil Şerbetçi Bulvarı No: 39 <br />
                Gaziantep / Türkiye
              </p>
            </address>
          </div>
        </div>
        <div className="mt-16 border-t border-sand-200 pt-8 text-center">
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
            &copy; {currentYear} Tuna Group. Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>

      {/* Mobile Optimized Footer */}
      <MobileFooter />
    </>
  )
}
