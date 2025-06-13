"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "Yenilikçi Tıbbi Çözümler",
      subtitle: "En son teknoloji ile üretilmiş yüksek kaliteli tıbbi malzemeler",
      description: "Sağlık sektörünün ihtiyaçlarını karşılamak için tasarlanmış ileri teknoloji ürünlerimizle tanışın.",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: "Ürünleri Keşfedin",
      color: "from-blue-600 to-cyan-400",
    },
    {
      id: 2,
      title: "Güvenilir Tedarik Zinciri",
      subtitle: "Zamanında teslimat ve kesintisiz hizmet garantisi",
      description: "Türkiye'nin her yerine hızlı ve güvenilir teslimat ile sağlık kurumlarının yanındayız.",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: "Tedarik Çözümlerimiz",
      color: "from-purple-600 to-blue-500",
    },
    {
      id: 3,
      title: "Kalite ve Güven",
      subtitle: "Uluslararası standartlarda üretim ve sertifikasyon",
      description: "Tüm ürünlerimiz en yüksek kalite standartlarında üretilir ve uluslararası sertifikalara sahiptir.",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: "Kalite Politikamız",
      color: "from-emerald-600 to-teal-400",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, slides.length])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 h-full w-full"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-50 mix-blend-multiply`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="container relative z-10 mx-auto h-full px-4 sm:px-6 lg:px-8">
                  <div className="flex h-full flex-col justify-center">
                    <div className="max-w-3xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-white/80 md:text-base">
                          {slide.subtitle}
                        </h2>
                        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{slide.title}</h1>
                        <p className="mb-8 max-w-xl text-lg text-white/80">{slide.description}</p>
                        <Button
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-white/90"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {slide.cta}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 left-4 z-20 translate-y-1/2 md:left-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30 md:h-12 md:w-12"
          aria-label="Önceki slayt"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      </div>

      <div className="absolute bottom-1/2 right-4 z-20 translate-y-1/2 md:right-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30 md:h-12 md:w-12"
          aria-label="Sonraki slayt"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
