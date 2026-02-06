"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Users, FileCheck, AlertCircle, Gavel, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
      icon: <Users className="w-8 h-8" />,
      title: "Bilgi Edinme Hakkı",
      content: "Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme hakkı."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Düzeltme Talebi",
      content: "Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme hakkı."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Silme ve Yok Etme",
      content: "Kişisel verilerinizin silinmesini veya yok edilmesini talep etme hakkı."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Yasal Yollar",
      content: "Haklarınızın ihlali durumunda yasal yollardan haklarınızı arama hakkı."
    }
  ]

  const dataCategories = [
    "Kimlik Bilgileri (Ad, soyad, T.C. kimlik numarası)",
    "İletişim Bilgileri (Adres, telefon, e-posta)",
    "Müşteri Bilgileri (Siparişler, talepler, geri bildirimler)",
    "Finansal Bilgiler (Fatura bilgileri, ödeme kayıtları)",
    "Teknik Bilgiler (IP adresi, çerez verileri, log kayıtları)"
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
                  <Database className="w-12 h-12 text-sage-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-sage-900 mb-6">
                KVKK Aydınlatma
              </h1>
              <p className="text-lg md:text-xl text-sage-800 leading-relaxed max-w-2xl mx-auto">
                Kişisel verilerinizin işlenmesi süreçlerinde
                <span className="text-sage-700 font-semibold italic"> tam şeffaflık ve yasal uyumluluk </span>
                ilkesiyle hareket ediyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Introduction & Identity */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="rounded-3xl border-sand-100 bg-sand-50/50 h-full">
                    <CardContent className="p-8 md:p-10">
                      <h2 className="text-2xl font-bold text-sage-900 mb-8">Veri Sorumlusu</h2>
                      <div className="space-y-6 text-sage-800">
                        <div className="flex items-start gap-4">
                          <div className="w-1 h-12 bg-sage-400 rounded-full shrink-0"></div>
                          <div>
                            <p className="font-bold text-sage-900 mb-1">Şirket Ünvanı</p>
                            <p className="text-gray-600">Tuna Medikal Tıbbi Cihazlar San. Tic. Ltd. Şti.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-1 h-12 bg-sage-400 rounded-full shrink-0"></div>
                          <div>
                            <p className="font-bold text-sage-900 mb-1">Adres</p>
                            <p className="text-gray-600">3. Organize Sanayi Bölgesi, Kamil Şerbetçi Bulvarı No: 39, Gaziantep</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="rounded-3xl border-sand-100 bg-sand-50/50 h-full">
                    <CardContent className="p-8 md:p-10">
                      <h2 className="text-2xl font-bold text-sage-900 mb-8">İşleme Amaçları</h2>
                      <ul className="space-y-3">
                        {[
                          "Hizmet sunumu ve yönetimi",
                          "Müşteri memnuniyeti ölçümü",
                          "Yasal yükümlülüklerin ifası",
                          "Finansal ve teknik operasyonlar",
                          "İletişim ve destek faaliyetleri"
                        ].map((purpose, i) => (
                          <li key={i} className="flex items-center gap-3 text-sage-800">
                            <div className="w-1.5 h-1.5 bg-sage-500 rounded-full shrink-0"></div>
                            <span className="text-gray-600 text-sm">{purpose}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Data Categories & Rights */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-8 text-center">İşlenen Veri Kategorileri</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {dataCategories.map((category, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl border border-sand-100 flex flex-col items-center text-center shadow-sm">
                        <span className="text-sage-800 font-medium text-sm">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-8 text-center">Kanuni Haklarınız (Madde 11)</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rights.map((right, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-sand-50/30 p-8 rounded-3xl border border-sand-100 text-center"
                      >
                        <div className="text-sage-600 mb-4 flex justify-center bg-white w-14 h-14 rounded-2xl items-center mx-auto shadow-sm">
                          {right.icon}
                        </div>
                        <h4 className="text-lg font-bold text-sage-900 mb-2">{right.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{right.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Closing Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-sage-700 to-clay-600 text-white rounded-3xl overflow-hidden shadow-lg mt-8">
                    <CardContent className="p-10 text-center">
                      <h3 className="text-2xl font-bold mb-4 text-white">Başvuru Kanalları</h3>
                      <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Veri sahibi olarak haklarınızı kullanmak için kimlik doğrulayıcı belgelerle birlikte
                        e-posta veya posta yoluyla bize ulaşabilirsiniz. Talepleriniz 30 gün içinde yanıtlanacaktır.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                          <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-1">E-POSTA</p>
                          <p className="font-bold">kvkk@tunamedical.com.tr</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                          <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-1">VERTSİS NO</p>
                          <p className="font-bold">BAŞVURU REHBERİ</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="text-center pt-8">
                  <p className="text-xs text-sage-400 font-bold tracking-widest">
                    YÜRÜRLÜK TARİHİ: 01.01.2024 | SON GÜNCELLEME: {new Date().toLocaleDateString('tr-TR')}
                  </p>
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
