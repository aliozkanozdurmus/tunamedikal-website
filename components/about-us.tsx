"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-medical-300 blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-medical-400 blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-medical-50 text-medical-600 border border-medical-100"
          >
            Hakkımızda
          </motion.span>

          <h2 className="section-title">
            <span className="gradient-text">Tuna Medikal</span> Hakkında
          </h2>
          <p className="section-subtitle">
            Yüksek kaliteli tıbbi malzeme üretimi ve tedariki konusunda Türkiye'nin lider firmalarından biriyiz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="h-64 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Modern üretim tesisi"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="h-40 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Tıbbi ekipmanlar"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="space-y-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="h-40 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Kalite kontrol laboratuvarı"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="h-64 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Lojistik merkezi"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg glass-effect"
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <p className="text-2xl font-bold text-medical-600">15+</p>
                <p className="text-xs text-gray-500">Yıllık Deneyim</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">2008'den Beri Sağlık Sektörünün Güvenilir Tedarikçisi</h3>
            <p className="text-gray-600 mb-6">
              Tuna Medikal, 15 yılı aşkın süredir sağlık sektörüne yüksek kaliteli tıbbi malzeme ve ekipman sağlayan
              lider bir üretici ve tedarikçidir. Hastaneler, klinikler ve sağlık kuruluşlarının ihtiyaçlarını karşılamak
              için geniş bir ürün yelpazesi sunuyoruz.
            </p>
            <p className="text-gray-600 mb-6">
              En son teknoloji ile donatılmış üretim tesislerimiz ve deneyimli ekibimiz, uluslararası standartlarda
              ürünler üretmeye ve tedarik etmeye adanmıştır. Kalite ve müşteri memnuniyeti bizim için her zaman
              önceliktir.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "ISO 13485 Sertifikalı Üretim",
                "CE İşaretli Ürünler",
                "Kapsamlı Ürün Yelpazesi",
                "Hızlı ve Güvenilir Teslimat",
                "Müşteri Odaklı Yaklaşım",
                "Rekabetçi Fiyatlandırma",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-center rounded-full bg-medical-100 p-1 mr-2">
                    <Check className="h-4 w-4 text-medical-600" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button className="bg-gradient-medical hover:shadow-lg hover:shadow-medical-500/20 transition-all duration-300 transform hover:-translate-y-1">
                Hakkımızda Daha Fazla Bilgi
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
