"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Modern üretim tesisi",
      category: "Tesis",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "İleri teknoloji tıbbi cihazlar",
      category: "Ürünler",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Kalite kontrol laboratuvarı",
      category: "Laboratuvar",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Lojistik merkezi",
      category: "Lojistik",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Ar-Ge departmanı",
      category: "Ar-Ge",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Uluslararası fuar katılımı",
      category: "Etkinlikler",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl -z-5"
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
            Galeri
          </motion.span>

          <h2 className="section-title">
            <span className="gradient-text">Tesislerimiz</span> ve Ürünlerimiz
          </h2>
          <p className="section-subtitle">Modern üretim tesislerimiz ve yüksek kaliteli ürünlerimizden görüntüler.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  aria-label="Modalı kapat"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-8 w-8" />
                </motion.button>
                <div className="relative h-[80vh] w-full">
                  <Image
                    src={galleryImages[selectedImage].src || "/placeholder.svg"}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white text-center mt-4">{galleryImages[selectedImage].alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
