"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion" // Need to make sure motion is used or removed if not needed, but nice for hero
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProductCatalog from "@/components/product-catalog"
import { ShieldCheck, Truck, HeadphonesIcon, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UrunlerPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-[100dvh] flex-col bg-sand-50">
      <Navbar isScrolled={false} />

      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative py-20 bg-white overflow-hidden border-b border-sand-200">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-clay-50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-sage-100 text-sage-800 text-xs font-bold tracking-wider uppercase mb-4">
              PREMİUM MEDİKAL ÇÖZÜMLER
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6 tracking-tight">
              Geniş Ürün Yelpazesi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hastaneler, klinikler ve sağlık profesyonelleri için en yüksek kalite standartlarında üretilmiş medikal sarf malzemeleri ve ekipmanlar.
            </p>
          </div>
        </section>

        {/* Catalog Component */}
        <ProductCatalog />

        {/* Value Propositions / Features */}
        <section className="py-24 bg-white border-t border-sand-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Uluslararası Standartlar",
                  desc: "Tüm ürünlerimiz CE ve ISO sertifikalıdır, global kalite standartlarına uygundur."
                },
                {
                  icon: Truck,
                  title: "Hızlı Tedarik Ağı",
                  desc: "Geniş lojistik ağımız ile Türkiye'nin her yerine güvenli ve hızlı teslimat."
                },
                {
                  icon: HeadphonesIcon,
                  title: "7/24 Uzman Desteği",
                  desc: "Teknik sorularınız ve ürün seçiminiz için medikal uzmanlarımız her an yanınızda."
                },
                {
                  icon: Award,
                  title: "%100 Müşteri Memnuniyeti",
                  desc: "40 yıllık tecrübemizle satış sonrası tam destek garantisi veriyoruz."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-sand-50/50 hover:bg-sand-50 transition-colors duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-sage-600 shadow-sm mb-6 border border-sage-100">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-sage-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini CTA */}
        <section className="py-20 bg-sage-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-6">Özel Projeleriniz İçin Teklif Alın</h2>
            <p className="text-sage-200 mb-10 max-w-2xl mx-auto">
              Hastaneler ve toplu alımlar için size özel kurumsal çözümlerimiz ve fiyatlandırmalarımız hakkında bilgi almak ister misiniz?
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-white text-sage-900 hover:bg-sage-50 rounded-full px-8 text-base font-semibold">
                Kurumsal Satış ile Görüşün
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
