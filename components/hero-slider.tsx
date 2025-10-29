"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Stethoscope, Package, Shield, Activity } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Tıbbi Ekipman",
    subtitle: "Teknolojisinde Öncü",
    description: "En son teknoloji tıbbi cihazlar ve ekipmanlar ile sağlık sektörüne hizmet veriyoruz.",
    image: "/placeholder.svg?height=800&width=1200&text=Medical+Equipment",
    features: ["ISO Sertifikalı", "7/24 Teknik Destek", "Garantili Hizmet"],
  },
  {
    id: 2,
    title: "Laboratuvar",
    subtitle: "Çözümleri",
    description: "Modern laboratuvar ekipmanları ile hassas ve güvenilir test sonuçları sunuyoruz.",
    image: "/placeholder.svg?height=800&width=1200&text=Laboratory+Solutions",
    features: ["Yüksek Hassasiyet", "Hızlı Sonuçlar", "Uzman Ekip"],
  },
  {
    id: 3,
    title: "Hasta Bakım",
    subtitle: "Sistemleri",
    description: "Hasta konforunu ve güvenliğini ön planda tutan bakım sistemleri geliştiriyoruz.",
    image: "/placeholder.svg?height=800&width=1200&text=Patient+Care+Systems",
    features: ["Hasta Odaklı", "Güvenli Teknoloji", "Kolay Kullanım"],
  },
]

const videoUrl =
  "https://stinvenireaz084550184237.blob.core.windows.net/invenirecomtr-website/3195444-hd_1920_1080_25fps.mp4"

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
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[600px] lg:h-[700px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS
        preload="auto" // Added to encourage loading
        className="absolute inset-0 w-full h-full object-cover z-0" // Changed z-index to z-0
      >
        <source src={videoUrl} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10" />
      {/* Black dotted overlay */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.3) 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-4 md:p-8">
        {" "}
        {/* Changed z-index to z-20 */}
        <div className="container mx-auto">

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 via-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 300}}>
                Sevgiyi Sağlıkla Buluşturuyoruz
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90"
          >
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-4xl font-bold text-green-400">15</span>
              <span className="text-lg font-medium">Yıllık Deneyim</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/50"></div>
              <Stethoscope className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed flex flex-wrap items-center justify-center gap-2"
          >
            <Stethoscope className="w-5 h-5 text-green-300" />
            <span>Sağlık sektörüne</span>
            <Package className="w-5 h-5 text-blue-300" />
            <span className="text-green-300 font-semibold">kaliteli medikal ürünler</span>
            <span>ve</span>
            <Shield className="w-5 h-5 text-purple-300" />
            <span className="text-blue-300 font-semibold">güvenilir hizmet</span>
            <span>sunuyoruz</span>
            <Activity className="w-5 h-5 text-red-300" />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Her zaman yanınızdayız</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-green-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  )
}
