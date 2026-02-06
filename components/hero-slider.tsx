"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Award, Stethoscope, Package, Shield, Activity } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Tıbbi Ekipman",
    subtitle: "Teknolojisinde Öncü",
    description: "En son teknoloji tıbbi cihazlar ve ekipmanlar ile sağlık sektörüne hizmet veriyoruz.",
    image: "/images/hero/hero-organic-01.jpeg",
    features: ["ISO Sertifikalı", "7/24 Teknik Destek", "Garantili Hizmet"],
  },
  {
    id: 2,
    title: "Laboratuvar",
    subtitle: "Çözümleri",
    description: "Modern laboratuvar ekipmanları ile hassas ve güvenilir test sonuçları sunuyoruz.",
    image: "/images/hero/hero-organic-02.jpeg",
    features: ["Yüksek Hassasiyet", "Hızlı Sonuçlar", "Uzman Ekip"],
  },
  {
    id: 3,
    title: "Hasta Bakım",
    subtitle: "Sistemleri",
    description: "Hasta konforunu ve güvenliğini ön planda tutan bakım sistemleri geliştiriyoruz.",
    image: "/images/hero/hero-organic-03.jpeg",
    features: ["Hasta Odaklı", "Güvenli Teknoloji", "Kolay Kullanım"],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[620px] lg:h-[720px] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sand-50/70 via-sand-50/40 to-sand-100/75" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,135,106,0.18),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(193,135,100,0.15),transparent_55%)]" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 md:p-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-sage-200/60 via-sand-200/50 to-clay-200/60 rounded-[2.5rem] blur-2xl"></div>
            <div className="relative glass-card rounded-3xl p-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-sage-900 leading-tight">
                Sevgiyi Sağlıkla Buluşturuyoruz
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sage-900"
          >
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-clay-500" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sage-700/40"></div>
              <span className="text-4xl font-bold text-sage-700">15</span>
              <span className="text-lg font-medium text-sage-800">Yıllık Deneyim</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sage-700/40"></div>
              <Stethoscope className="w-8 h-8 text-sage-600" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-sage-800 max-w-3xl mx-auto leading-relaxed flex flex-wrap items-center justify-center gap-2"
          >
            <Stethoscope className="w-5 h-5 text-sage-600" />
            <span>Sağlık sektörüne</span>
            <Package className="w-5 h-5 text-sand-600" />
            <span className="text-sage-700 font-semibold">kaliteli medikal ürünler</span>
            <span>ve</span>
            <Shield className="w-5 h-5 text-clay-500" />
            <span className="text-clay-600 font-semibold">güvenilir hizmet</span>
            <span>sunuyoruz</span>
            <Activity className="w-5 h-5 text-sage-600" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center gap-2 text-sage-700 text-sm">
              <div className="w-2 h-2 bg-sage-600 rounded-full animate-pulse"></div>
              <span>Her zaman yanınızdayız</span>
              <div
                className="w-2 h-2 bg-clay-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-sage-900 hover:bg-white/60 transition-all duration-300 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-sage-900 hover:bg-white/60 transition-all duration-300 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-sage-700 scale-125" : "bg-sand-200 hover:bg-sand-300"
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-sand-200/80">
        <motion.div
          className="h-full bg-gradient-to-r from-sage-600 to-clay-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  )
}
