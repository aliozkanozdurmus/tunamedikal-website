"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Eye, Lock, Database, User, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
      icon: <Eye className="w-8 h-8" />,
      title: "Veri Toplama",
      content: "Web sitemiz üzerinden kişisel verilerinizi yalnızca kanunların izin verdiği ölçüde toplarız. Bu veriler; ad, soyad, e-posta adresi, telefon numarası ve taleplerinizle ilgili bilgileri içerebilir."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Veri Koruma",
      content: "Kişisel verilerinizi yetkisiz erişime, kayba, değiştirilmeye veya imhaya karşı korumak için gerekli tüm teknik ve idari güvenlik önlemlerini alıyoruz."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Veri Kullanımı",
      content: "Topladığımız verileri; hizmetlerimizi sunmak, müşteri desteği sağlamak, web sitemizi iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanırız."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Haklarınız",
      content: "Kişisel verilerinizin işlenmesi hakkında bilgi alma, verilerinizi düzettirme, silme veya yok edilmesini talep etme haklarına sahipsiniz."
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-sand-50">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-100/50 via-sand-100/30 to-clay-100/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-sand-100">
                  <Shield className="w-12 h-12 text-sage-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-sage-900 mb-6">
                Gizlilik Politikası
              </h1>
              <p className="text-lg md:text-xl text-sage-800 leading-relaxed max-w-2xl mx-auto">
                Kişisel verilerinizin güvenliği bizim için önceliklidir.
                <span className="text-sage-700 font-semibold italic"> Bilgi güvenliği standartlarımız </span>
                hakkında detaylı bilgilere buradan ulaşabilirsiniz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left side info */}
                <div className="lg:col-span-2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Card className="rounded-3xl border-sand-100 bg-sand-50/30 overflow-hidden">
                      <CardContent className="p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-sage-900 mb-6 flex items-center gap-3">
                          <FileText className="w-6 h-6 text-sage-600" />
                          Genel Bilgilendirme
                        </h2>
                        <div className="space-y-6 text-sage-800 leading-relaxed text-lg">
                          <p>
                            Tuna Medikal olarak, web sitemizi ziyaret eden tüm kullanıcılarımızın
                            kişisel verilerinin gizliliğine ve korunmasına en yüksek hassasiyeti gösteriyoruz.
                          </p>
                          <p>
                            İşbu politika, <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu</strong>
                            kapsamında toplanan verilerin işlenme amaçlarını ve güvenlik standartlarımızı
                            şeffaf bir şekilde paylaşmak amacıyla hazırlanmıştır.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Sections List */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl border border-sand-100 hover:border-sage-200 hover:shadow-lg transition-all"
                      >
                        <div className="text-sage-600 mb-5 bg-sand-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-bold text-sage-900 mb-3">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right side sidebar info */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="p-8 bg-sage-50/50 rounded-3xl border border-sage-100 sticky top-28"
                  >
                    <h3 className="text-xl font-bold text-sage-900 mb-6">Politika Detayları</h3>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-sm font-bold text-sage-700 uppercase tracking-widest mb-2">Çerez Kullanımı</h4>
                        <p className="text-sm text-sage-800">
                          Deneyiminizi optimize etmek için teknik ve analitik çerezler kullanmaktayız.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-sage-100">
                        <h4 className="text-sm font-bold text-sage-700 uppercase tracking-widest mb-2">Güvenlik Standardı</h4>
                        <p className="text-sm text-sage-800">
                          Tüm veri transferleri 256-bit SSL sertifikası ile şifrelenmektedir.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-sage-100">
                        <h4 className="text-sm font-bold text-sage-700 uppercase tracking-widest mb-2">İletişim Kanalları</h4>
                        <p className="text-sm text-sage-800">
                          KVKK talepleriniz için <a href="mailto:kvkk@tunamedical.com.tr" className="underline font-semibold">kvkk@tunamedical.com.tr</a>
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-sage-100 text-center">
                      <p className="text-xs text-sage-500 font-bold">
                        SON GÜNCELLEME<br />
                        <span className="text-sage-900">{new Date().toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}</span>
                      </p>
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
