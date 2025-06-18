"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 py-8 px-4 md:px-6 text-gray-700 dark:text-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#" className="flex items-center gap-2 mb-4" prefetch={false}>
            <Image
              src="/images/tuna-medikal-logo.png"
              alt="Tuna Medikal Logo"
              width={150}
              height={50}
              className="dark:invert-0"
            />
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-left font-sans">
            Sağlığınız için güvenilir çözümler.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-50 font-sans">Hızlı Erişim</h4>
          <nav className="flex flex-col gap-2">
            <Link
              href="#hakkimizda"
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-sans"
              prefetch={false}
            >
              Hakkımızda
            </Link>
            <Link
              href="#urunler"
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-sans"
              prefetch={false}
            >
              Ürünler
            </Link>
            <Link
              href="#iletisim"
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-sans"
              prefetch={false}
            >
              İletişim
            </Link>
            <Link
              href="#sss"
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-sans"
              prefetch={false}
            >
              S.S.S
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-50 font-sans">İletişim Bilgileri</h4>
          <address className="not-italic text-sm text-gray-600 dark:text-gray-300 space-y-1 font-sans">
            <p>
              Telefon:{" "}
              <a href="tel:+903423609850" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +90 342 360 9850
              </a>
            </p>
            <p>
              E-posta:{" "}
              <a
                href="mailto:info@tunamedical.com.tr"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                info@tunamedical.com.tr
              </a>
            </p>
            <p>3. Organize Sanayi Bölgesi</p>
            <p>Kamil Şerbetçi Bulvarı No: 39</p>
            <p>Şehitkamil / Gaziantep</p>
          </address>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 dark:border-gray-600 pt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300 font-sans">
          &copy; {currentYear} Tuna Medikal Test. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
