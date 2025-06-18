"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Check } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gradient-radial from-medical-300 to-transparent blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-medical-50 text-medical-600 border border-medical-100"
            >
              Sağlığınız İçin Yanınızdayız
            </motion.span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
            >
              Sağlığınız İçin <span className="gradient-text">İleri Teknoloji</span> Tıbbi Testler
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Hassasiyet ve özenle sunulan ileri düzey tanı hizmetleri. Sağlığınız önceliğimizdir ve uzman ekibimiz size
              yardımcı olmak için burada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-medical hover:shadow-lg hover:shadow-medical-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Randevu Al
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-medical-600 text-medical-600 hover:bg-medical-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Hizmetlerimiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              {["Sertifikalı Uzmanlar", "Modern Ekipmanlar", "Hızlı Sonuçlar"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="flex items-center justify-center rounded-full bg-medical-100 p-1 mr-2">
                    <Check className="h-4 w-4 text-medical-600" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-medical-500/20 to-medical-700/20 z-10 rounded-2xl"></div>
              <Image
                src="/images/hero/hero-main-medical.jpg"
                alt="Tuna Medikal uzman doktorları"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg glass-effect"
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="h-10 w-10 rounded-full border-2 border-white bg-medical-100 flex items-center justify-center text-xs font-medium text-medical-600"
                    >
                      Dr
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Uzman Doktorlar</p>
                  <p className="text-xs text-gray-500">20+ Uzman</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg glass-effect"
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <p className="text-2xl font-bold text-medical-600">%98</p>
                <p className="text-xs text-gray-500">Hasta Memnuniyeti</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
