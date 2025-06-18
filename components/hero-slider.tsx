"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={videoUrl} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      {/* Black dotted overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.3) 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px", // Adjust for dot density
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 md:p-8">
        {" "}
        {/* Removed bg-black/10 to make video more visible */}
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Tuna Medikal Test
          </h1>
          <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Sağlık sektöründe yenilikçi çözümler ve güvenilir medikal ürünler sunuyoruz. Kaliteli hizmet anlayışımızla
            tanışın.
          </p>
          {/* Buttons removed as per request */}
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
