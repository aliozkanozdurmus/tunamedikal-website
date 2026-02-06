"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Eye, Lock, Database, User, FileText } from "lucide-react"

export default function GizlilikPolitikasi() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const sections = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Veri Toplama",
      content: "Web sitemiz üzerinden kişisel verilerinizi yalnızca kanunların izin verdiği ölçüde toplarız. Bu veriler; ad, soyad, e-posta ve taleplerinizi içerebilir."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Veri Koruma",
      content: "Kişisel verilerinizi yetkisiz erişime, kayba veya imhaya karşı korumak için gerekli tüm teknik ve idari güvenlik önlemlerini alıyoruz."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Veri Kullanımı",
      content: "Topladığımız verileri; hizmetlerimizi sunmak, web sitemizi iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanırız."
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Haklarınız",
      content: "Kişisel verilerinizin işlenmesi hakkında bilgi alma, verilerinizi düzelttirme veya silinmesini talep etme haklarına sahipsiniz."
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1 pt-24 pb-16">
        {/* Page Hero */}
        <section className="relative overflow-hidden py-24 bg-sand-50/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-sage-950 mb-8 tracking-tight">
                Gizlilik Politikası
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Kişisel verilerinizin güvenliği bizim için önceliklidir.
                <span className="text-sage-700 font-medium"> Bilgi güvenliği standartlarımız </span>
                hakkında detaylı bilgileri burada bulabilirsiniz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-16">

                {/* Information Sections */}
                <div className="lg:col-span-2 space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-sage !max-w-none space-y-6"
                  >
                    <div className="p-10 bg-sand-50/50 rounded-[2.5rem] border border-sage-50">
                      <h2 className="text-2xl font-bold text-sage-950 mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-sage-600" />
                        Genel Bilgilendirme
                      </h2>
                      <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                        <p>
                          Tuna Group olarak, web sitemizi ziyaret eden tüm kullanıcılarımızın
                          kişisel verilerinin gizliliğine ve korunmasına en yüksek hassasiyeti gösteriyoruz.
                        </p>
                        <p>
                          İşbu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
                          toplanan verilerin işlenme amaçlarını ve güvenlik standartlarımızı paylaşmak amacıyla hazırlanmıştır.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 border border-sand-100 rounded-3xl hover:bg-sand-50/50 transition-colors"
                      >
                        <div className="text-sage-600 mb-6">
                          {section.icon}
                        </div>
                        <h3 className="text-lg font-bold text-sage-950 mb-3">{section.title}</h3>
                        <p className="text-xs text-gray-500 font-light leading-relaxed">{section.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Sidebar Details */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-10 bg-sage-50/50 rounded-[2.5rem] border border-sage-100 sticky top-28"
                  >
                    <h3 className="text-lg font-bold text-sage-950 mb-8">Politika Detayları</h3>

                    <div className="space-y-8">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold tracking-widest text-sage-700 uppercase">Çerezler</p>
                        <p className="text-sm text-gray-500 font-light">Deneyiminizi optimize etmek için teknik çerezler kullanmaktayız.</p>
                      </div>
                      <div className="space-y-2 pt-6 border-t border-sage-100">
                        <p className="text-[10px] font-bold tracking-widest text-sage-700 uppercase">Güvenlik</p>
                        <p className="text-sm text-gray-500 font-light">Tüm veri transferleri SSL sertifikası ile şifrelenmektedir.</p>
                      </div>
                      <div className="space-y-2 pt-6 border-t border-sage-100">
                        <p className="text-[10px] font-bold tracking-widest text-sage-700 uppercase">İletişim</p>
                        <a href="mailto:kvkk@tunamedical.com.tr" className="text-sm text-sage-900 font-bold block hover:underline">kvkk@tunamedical.com.tr</a>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-sage-100 text-center">
                      <p className="text-[10px] font-bold tracking-widest text-sage-300 uppercase">Son Güncelleme</p>
                      <p className="text-sage-900 font-bold text-sm">{new Date().toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}</p>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
