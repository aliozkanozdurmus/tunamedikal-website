"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Users, Target, Heart, Lightbulb, Shield } from "lucide-react"
import Image from "next/image"

export default function Hakkimizda() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
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
      year: "2010",
      title: "Kuruluş",
      description: "Tuna Medikal sağlık sektörüne adım attı"
    },
    {
      year: "2015",
      title: "Büyüme",
      description: "Ürün yelpazemizi genişlettik"
    },
    {
      year: "2020",
      title: "İnovasyon",
      description: "Dijital çözümlerle hizmetlerimizi zenginleştirdik"
    },
    {
      year: "2024",
      title: "Liderlik",
      description: "Sektörün lider kuruluşu olduk"
    }
  ]

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark bg-slate-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`}>
      <Navbar isScrolled={isScrolled} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Tuna Medikal olarak 2010 yılından beri sağlık sektöründe
                <span className="text-green-600 font-semibold"> "Sevgiyi Sağlıkla Buluşturuyoruz" </span>
                felsefesiyle hizmet veriyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Misyonumuz</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Sağlık sektörüne yenilikçi ve kaliteli medikal ürünler sunarak, 
                  hasta ve sağlık çalışanlarının yaşam kalitesini artırmak. 
                  Etik değerlere bağlı kalarak güvenilir çözüm ortağı olmak.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Türkiye'nin lider medikal çözüm sağlayıcısı olarak, 
                  uluslararası pazarlarda da tercih edilen marka olmak ve 
                  sağlık sektörünün geleceğini şekillendiren yenilikleri sunmak.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Değerlerimiz</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                İş yapış biçimimizin temelini oluşturan prensipler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="text-green-600 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Tarihimiz</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Kuruluşumuzdan günümüze uzanan başarı hikayemiz
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center mb-8"
                >
                  <div className="flex-shrink-0 w-20 text-2xl font-bold text-green-600">
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
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
