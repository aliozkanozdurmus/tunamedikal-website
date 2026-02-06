"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sand-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-sage-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="bg-sand-50/30 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-sage-100/50 max-w-5xl mx-auto shadow-2xl shadow-sage-900/[0.03]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-sage-950 mb-6 tracking-tight"
            >
              Geleceğin Çözümlerini <br />
              <span className="text-sage-600 font-medium italic">Birlikte İnşa Edelim</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              24 yıllık üretim ve mühendislik tecrübemizle, sağlık teknolojilerinden endüstriyel ambalaja
              kadar her alanda güvenilir partneriniz olmaya hazırız.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            >
              <Button
                onClick={() => window.location.href = 'tel:+903423609850'}
                className="bg-sage-900 hover:bg-sage-950 text-white rounded-full px-10 h-14 text-sm font-bold tracking-widest uppercase transition-all duration-500 shadow-xl shadow-sage-900/10 group"
              >
                <Phone className="mr-3 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Hemen Arayın
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={() => window.location.href = 'mailto:info@tunamedical.com.tr'}
                className="bg-transparent border border-sage-200 text-sage-900 hover:bg-white rounded-full px-10 h-14 text-sm font-bold tracking-widest uppercase transition-all duration-500 group"
              >
                <Mail className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform" />
                E-posta Gönderin
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-sage-100/50"
            >
              <div className="space-y-1">
                <div className="text-2xl font-bold text-sage-950">24/7</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-sage-600 uppercase">Küresel Destek</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-sage-950">750+</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-sage-600 uppercase">Aktif İş Ortağı</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-sage-950">ISO 13485</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-sage-600 uppercase">Kalite Standartları</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
