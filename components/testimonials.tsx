"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Özel Anadolu Hastanesi",
      role: "Müşteri",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Tuna Medikal ile çalışmak her zaman güvenilir ve sorunsuz. Ürünlerin kalitesi ve teslimat hızı beklentilerimizin ötesinde. Sağlık sektöründe böyle bir tedarikçi ile çalışmak büyük avantaj.",
      rating: 5,
    },
    {
      name: "Devlet Hastanesi",
      role: "Müşteri",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Acil ihtiyaçlarımızda bile hızlı teslimat yapabilen nadir firmalardan. Ürün kalitesi ve fiyat-performans dengesi açısından sektörün en iyilerinden.",
      rating: 5,
    },
    {
      name: "Özel Klinik Zinciri",
      role: "Müşteri",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Tüm kliniklerimizin tıbbi malzeme ihtiyaçlarını Tuna Medikal'den karşılıyoruz. Geniş ürün yelpazesi ve profesyonel yaklaşımları için teşekkür ederiz.",
      rating: 5,
    },
    {
      name: "Üniversite Hastanesi",
      role: "Müşteri",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Araştırma laboratuvarlarımız için özel üretim taleplerinde bile çözüm odaklı yaklaşımları takdire şayan. Akademik çalışmalarımızda güvenilir bir partner.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleTestimonials >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prevIndex - 1,
    )
  }

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + visibleTestimonials)

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-medical-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -left-40 bottom-40 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-500 to-transparent blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-medical-50 text-medical-600 border border-medical-100"
          >
            Referanslarımız
          </motion.span>

          <h2 className="section-title">
            <span className="gradient-text">Müşterilerimiz</span> Ne Diyor?
          </h2>
          <p className="section-subtitle">Ürün ve hizmetlerimizi kullanan değerli müşterilerimizin yorumları.</p>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            <AnimatePresence mode="wait">
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={currentIndex + index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                          <Quote className="h-8 w-8 text-medical-200" />
                        </motion.div>
                      </div>
                      <p className="text-gray-600 mb-4">{testimonial.content}</p>
                      <div className="flex">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                          ))}
                      </div>

                      {/* Background gradient that appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-medical-50 to-medical-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-medical-50 transition-colors"
              aria-label="Önceki referans"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-medical-50 transition-colors"
              aria-label="Sonraki referans"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
