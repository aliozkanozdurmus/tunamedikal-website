"use client"

import { motion } from "framer-motion"

export default function Brands() {
  return (
    <section className="section-padding bg-gradient-to-br from-sand-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-sage-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-gradient-radial from-clay-200 to-transparent blur-3xl -z-5"
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

          <h2 className="section-title gradient-text">Sağlığın Güvenilir Elleri: Distribütör Ağı</h2>
          <p className="section-subtitle">
            Dünya çapında tanınmış tıbbi ekipman üreticileri ile güçlü iş ortaklıklarımız bulunmaktadır.
          </p>
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
            { number: "40+", label: "Yıllık Deneyim" },
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

        {/* Additional Brand Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold gradient-text mb-4">Güvenilir İş Ortaklıkları</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              TUNA Medikal olarak, dünya çapında tanınmış tıbbi ekipman üreticileri ile uzun yıllardır süren güçlü iş
              ortaklıklarımız bulunmaktadır. Kaliteli ürünler ve güvenilir hizmet anlayışımızla sağlık sektörünün
              ihtiyaçlarını karşılamaya devam ediyoruz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
