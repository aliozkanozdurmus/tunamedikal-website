"use client"

import { motion } from "framer-motion"

const brands = [
  {
    id: 1,
    name: "Philips Healthcare",
    description: "Tıbbi görüntüleme ve hasta monitörleri",
  },
  {
    id: 2,
    name: "GE Healthcare",
    description: "Tanı ekipmanları ve çözümleri",
  },
  {
    id: 3,
    name: "Siemens Healthineers",
    description: "İleri teknoloji tıbbi cihazlar",
  },
  {
    id: 4,
    name: "Medtronic",
    description: "Tıbbi teknoloji çözümleri",
  },
  {
    id: 5,
    name: "Abbott",
    description: "Tanı ve laboratuvar çözümleri",
  },
  {
    id: 6,
    name: "Johnson & Johnson",
    description: "Cerrahi ve tıbbi cihazlar",
  },
  {
    id: 7,
    name: "Roche",
    description: "Laboratuvar tanı sistemleri",
  },
  {
    id: 8,
    name: "Boston Scientific",
    description: "Minimal invaziv tıbbi teknolojiler",
  },
  {
    id: 9,
    name: "Mindray",
    description: "Hasta monitörleme sistemleri",
  },
  {
    id: 10,
    name: "Olympus",
    description: "Endoskopi ve cerrahi çözümler",
  },
  {
    id: 11,
    name: "Stryker",
    description: "Ortopedik ve cerrahi ekipmanlar",
  },
  {
    id: 12,
    name: "Baxter",
    description: "İnfüzyon ve diyaliz sistemleri",
  },
]

export function Brands() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-green-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-gradient-radial from-green-400 to-transparent blur-3xl -z-5"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium rounded-full glass-card"
          >
            İş Ortaklarımız
          </motion.span>

          <h2 className="section-title gradient-text">Markalarımız</h2>
          <p className="section-subtitle">
            Dünya çapında tanınmış tıbbi ekipman üreticileri ile güçlü iş ortaklıklarımız bulunmaktadır.
          </p>
        </motion.div>

        {/* Brands Grid - Text Only */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {brands.map((brand) => (
            <motion.div key={brand.id} variants={item} whileHover={{ scale: 1.02, y: -2 }} className="group">
              <div className="glass-card p-6 rounded-2xl h-full hover:shadow-xl transition-all duration-300 border border-green-100/20">
                <div className="flex items-start space-x-4">
                  {/* Brand Initial Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{brand.name.charAt(0)}</span>
                  </div>

                  {/* Brand Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{brand.description}</p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Marka Ortaklığı" },
            { number: "1000+", label: "Ürün Çeşidi" },
            { number: "15+", label: "Yıllık Deneyim" },
            { number: "24/7", label: "Teknik Destek" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center glass-card p-6 rounded-2xl group hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Brand Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold gradient-text mb-4">Uzmanlık Alanlarımız</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Tıbbi Görüntüleme",
                "Laboratuvar Ekipmanları",
                "Cerrahi Aletler",
                "Hasta Monitörleri",
                "Anestezi Cihazları",
                "Diyaliz Sistemleri",
                "Endoskopi",
                "Ortopedik Implantlar",
              ].map((category, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-medium hover:from-green-200 hover:to-green-300 transition-all duration-300 cursor-default"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
