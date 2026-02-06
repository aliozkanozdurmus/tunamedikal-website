"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Target, Lightbulb, Heart, Shield } from "lucide-react"

export default function Hakkimizda() {
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

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sevgi Odaklı",
      description: "Her hastaya sevgi ve şefkatle yaklaşıyoruz"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenilir",
      description: "En yüksek kalite standartlarında hizmet sunuyoruz"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "İnovatif",
      description: "Son teknoloji çözümlerle healthcare'de öncüyüz"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kaliteli",
      description: "Uluslararası standartlarda ürün ve hizmet"
    }
  ]

  const timeline = [
    {
      year: "1984",
      title: "Kuruluş",
      description: "TUNA ŞİRKETLER GRUBU'nun temelleri Huzeyfe Durmaz tarafından atıldı."
    },
    {
      year: "2010",
      title: "Medikal Sektöre Giriş",
      description: "Tuna Medikal olarak sağlık sektöründe köklü bir adım attık."
    },
    {
      year: "2015",
      title: "Ürün Yelpazesi Genişlemesi",
      description: "Kardiyovasküler ve tanı ekipmanlarında global standartlara ulaştık."
    },
    {
      year: "2024",
      title: "Geleceğin Sağlık Çözümleri",
      description: "İnovatif ve teknolojik yatırımlarla sektör liderliğimizi pekiştiriyoruz."
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-sand-50">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-100/50 via-sand-100/30 to-clay-100/50"></div>

          {/* Decorative Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sand-200/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white text-sage-700 border border-sand-200 shadow-sm"
              >
                Hakkımızda
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
                Tuna Medikal
              </h1>
              <p className="text-lg md:text-xl text-sage-800 leading-relaxed max-w-2xl mx-auto">
                1984'ten günümüze süregelen tecrübemizle,
                <span className="text-sage-700 font-semibold"> "Sevgiyi Sağlıkla Buluşturuyoruz" </span>
                vizyonuyla yarınları inşa ediyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-sand-50/50 rounded-3xl p-8 md:p-10 border border-sand-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-sand-100">
                  <Target className="w-7 h-7 text-sage-600" />
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Misyonumuz</h3>
                <p className="text-sage-800 leading-relaxed text-lg italic">
                  Sağlık sektörüne yenilikçi ve kaliteli medikal ürünler sunarak,
                  hasta ve sağlık çalışanlarının yaşam kalitesini artırmak.
                  Etik değerlere bağlı kalarak güvenilir bir çözüm ortağı olmak.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-sage-50/30 rounded-3xl p-8 md:p-10 border border-sage-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-sage-100">
                  <Lightbulb className="w-7 h-7 text-sage-600" />
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Vizyonumuz</h3>
                <p className="text-sage-800 leading-relaxed text-lg italic">
                  Türkiye'nin lider medikal çözüm sağlayıcısı olarak,
                  uluslararası pazarlarda da tercih edilen bir marka olmak ve
                  sağlık sektörünün geleceğini şekillendiren yenilikleri sunmak.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-sand-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">Kurumsal Değerlerimiz</h2>
              <div className="h-1 w-20 bg-sage-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center border border-sand-100 hover:border-sage-200 hover:shadow-lg transition-all"
                >
                  <div className="text-sage-600 mb-4 flex justify-center bg-sand-50 w-16 h-16 rounded-full items-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sage-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">Tarihsel Yolculuğumuz</h2>
              <p className="text-sage-700 italic">"Gelecek, geçmişin tecrübesiyle şekillenir."</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 p-8 rounded-3xl bg-sand-50/50 border border-sand-100 hover:bg-sand-50 transition-colors"
                >
                  <div className="text-4xl font-black text-sage-300 select-none md:w-24">
                    {item.year}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-sage-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
