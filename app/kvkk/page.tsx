"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Users, FileCheck, AlertCircle, Gavel, Database } from "lucide-react"

export default function Kvkk() {
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

  const rights = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Bilgi Edinme Hakkı",
      content: "Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme hakkı."
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Düzeltme Talebi",
      content: "Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme hakkı."
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Silme ve Yok Etme",
      content: "Kişisel verilerinizin silinmesini veya yok edilmesini talep etme hakkı."
    },
    {
      icon: <Gavel className="w-5 h-5" />,
      title: "Yasal Yollar",
      content: "Haklarınızın ihlali durumunda yasal yollardan haklarınızı arama hakkı."
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
                KVKK Aydınlatma
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Kişisel verilerinizin işlenmesi süreçlerinde
                <span className="text-sage-700 font-medium"> şeffaflık ve yasal uyumluluk </span>
                vizyonumuzun temelini oluşturur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-24">

              {/* Data Controller */}
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-sand-50 rounded-[2.5rem] border border-sage-50"
                >
                  <h2 className="text-2xl font-bold text-sage-950 mb-8">Veri Sorumlusu</h2>
                  <div className="space-y-6 text-sm text-gray-500 font-light">
                    <div>
                      <p className="font-bold text-sage-900 mb-1">Şirket Ünvanı</p>
                      <p>Tuna Group</p>
                    </div>
                    <div>
                      <p className="font-bold text-sage-900 mb-1">Adres</p>
                      <p>3. Organize Sanayi Bölgesi, Kamil Şerbetçi Bulvarı No: 39, Gaziantep</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-sage-50 rounded-[2.5rem] border border-sage-50"
                >
                  <h2 className="text-2xl font-bold text-sage-950 mb-8">İşleme Amaçları</h2>
                  <ul className="space-y-4">
                    {[
                      "Müşteri ve iş ortağı ilişkileri yönetimi",
                      "Yasal yükümlülüklerin yerine getirilmesi",
                      "Üretim ve sevkiyat süreçlerinin planlanması",
                      "Kalite standartlarının sürdürülebilirliği",
                      "Analiz ve raporlama faaliyetleri"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-light">
                        <div className="w-1.5 h-1.5 bg-sage-400 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Rights Grid */}
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-sage-950 mb-4">Kanuni Haklarınız</h2>
                  <p className="text-gray-500 text-sm font-light">6698 Sayılı Kanun'un 11. Maddesi Uyarınca</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {rights.map((right, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 border border-sand-100 rounded-3xl hover:bg-sand-50/50 transition-colors"
                    >
                      <div className="text-sage-600 mb-6">
                        {right.icon}
                      </div>
                      <h4 className="text-lg font-bold text-sage-950 mb-2">{right.title}</h4>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{right.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-sage-900 rounded-[3rem] text-white shadow-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-6">Başvuru Kanalları</h3>
                  <p className="text-white/60 font-light text-sm max-w-2xl mx-auto mb-10">
                    Kişisel veri sahibi olarak haklarınızı kullanmak için kimlik doğrulayıcı
                    belgelerle birlikte e-posta veya posta yoluyla bize ulaşabilirsiniz.
                  </p>
                  <div className="inline-flex flex-col sm:flex-row gap-6">
                    <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 text-center">
                      <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">E-Posta</p>
                      <p className="font-bold text-sm">kvkk@tunamedical.com.tr</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="text-center text-[10px] font-bold tracking-widest text-sage-300 uppercase">
                Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
