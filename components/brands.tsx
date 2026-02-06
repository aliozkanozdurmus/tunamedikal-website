"use client"

import { motion } from "framer-motion"

export default function Brands() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 bg-sand-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-80 h-80 bg-sage-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase mb-4 block"
          >
            Küresel Distribütörlük Ağı
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight mb-6">
            Sektörlerin Güvenilir İsmi: <span className="text-sage-600 font-medium italic">Küresel Ağ</span>
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Dünya çapında tanınmış markalarla güçlü iş ortaklıkları kurarak,
            hem sağlık hem de endüstriyel çözüm alanlarında küresel çapta bir köprü kuruyoruz.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "50+", label: "Marka Ortaklığı" },
            { number: "1500+", label: "Ürün Portföyü" },
            { number: "24", label: "Yıllık Tecrübe" },
            { number: "7/24", label: "Profesyonel Destek" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-8 bg-sand-50/30 border border-sage-50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-sage-900/5 transition-all duration-500"
            >
              <div className="text-3xl font-bold text-sage-950 mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-[10px] font-bold tracking-[0.1em] text-sage-700 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Partnership Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-10 bg-white border border-sage-100/50 rounded-[2.5rem] shadow-xl shadow-sage-900/[0.02] text-center">
            <h3 className="text-xl font-bold text-sage-950 mb-4">Sürdürülebilir İş Ortaklıkları</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Tuna Group olarak, dünya çapında tanınmış üreticiler ile uzun yıllardır süren güçlü bağlara sahibiz.
              Sadece distribütörlükle kalmıyor, ISO 13485 standartlarındaki kendi üretimimizle de
              başta Avrupa olmak üzere küresel pazarda etkin bir rol üstleniyoruz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
