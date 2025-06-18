"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 py-8 px-4 md:px-6 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#" className="flex items-center gap-2 mb-4" prefetch={false}>
            <Image
              src="/images/tuna-medikal-logo.png" // Ensure this path is correct
              alt="Tuna Medikal Logo"
              width={150} // Adjust as needed
              height={50} // Adjust as needed
              className="dark:invert-0" // Keep original color in dark mode
            />
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
            Sağlığınız için güvenilir çözümler.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Hızlı Erişim</h4>
          <nav className="flex flex-col gap-2">
            <Link
              href="#hakkimizda"
              className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              Hakkımızda
            </Link>
            <Link
              href="#urunler"
              className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              Ürünler
            </Link>
            <Link
              href="#iletisim"
              className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              İletişim
            </Link>
            <Link
              href="#sss"
              className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              S.S.S
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">İletişim Bilgileri</h4>
          <address className="not-italic text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <p>Tuna Medikal Test ve Kalibrasyon Hizmetleri San. Tic. Ltd. Şti.</p>
            <p>İçerenköy Mah. Değirmenyolu Cad. No:21/1 Ataşehir/İSTANBUL</p>
            <p>
              Telefon:{" "}
              <a href="tel:+902165735354" className="hover:underline">
                +90 216 573 53 54
              </a>
            </p>
            <p>
              E-posta:{" "}
              <a href="mailto:info@tunamedikal.com.tr" className="hover:underline">
                info@tunamedikal.com.tr
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-6 text-center">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          &copy; {currentYear} Tuna Medikal Test. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
