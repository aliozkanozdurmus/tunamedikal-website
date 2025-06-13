"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Yıllık Deneyim",
    description: "Sağlık sektöründe",
  },
  {
    icon: Users,
    number: "500+",
    label: "Mutlu Müşteri",
    description: "Türkiye genelinde",
  },
  {
    icon: Clock,
    number: "7/24",
    label: "Teknik Destek",
    description: "Kesintisiz hizmet",
  },
  {
    icon: Shield,
    number: "ISO",
    label: "Sertifikalı",
    description: "Kalite güvencesi",
  },
]

export function AboutUs() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-6"
              >
                Hakkımızda
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg mb-6 leading-relaxed"
              >
                Tuna Medikal, 2008 yılından bu yana Türkiye'nin önde gelen tıbbi cihaz ve malzeme tedarikçilerinden
                biridir. Sağlık sektörüne yönelik kaliteli, güvenilir ve yenilikçi çözümler sunarak hasta güvenliğini ön
                planda tutuyoruz.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg mb-8 leading-relaxed"
              >
                Deneyimli ekibimiz ve geniş ürün yelpazemiz ile hastaneler, klinikler ve sağlık kuruluşlarının
                ihtiyaçlarına en uygun çözümleri sunmaktayız.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-blue-600 font-semibold">Kalite</span>
                </div>
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-blue-600 font-semibold">Güvenilirlik</span>
                </div>
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-blue-600 font-semibold">İnovasyon</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="glass w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-blue-600 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
