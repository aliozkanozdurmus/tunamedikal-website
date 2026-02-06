"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-sand-50 to-sage-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-sage-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-gradient-radial from-clay-200 to-transparent blur-3xl -z-5"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-6"
            >
              Sağlık Sektörünün Güvenilir Partneri
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              15 yılı aşkın deneyimimiz ile sağlık kuruluşlarınızın tüm ihtiyaçlarını karşılamaya hazırız. Kaliteli
              ürünler, hızlı teslimat ve profesyonel hizmet için bizimle iletişime geçin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button className="btn-green-gradient rounded-full px-8 py-3 text-lg font-semibold group">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Hemen Arayın
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="btn-glass border-2 border-sand-200 text-sage-700 hover:bg-sand-100 rounded-full px-8 py-3 text-lg font-semibold group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                E-posta Gönderin
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            >
              <div className="glass p-4 rounded-2xl">
                <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-sm text-gray-600">Teknik Destek</div>
              </div>
              <div className="glass p-4 rounded-2xl">
                <div className="text-2xl font-bold gradient-text mb-1">500+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="glass p-4 rounded-2xl">
                <div className="text-2xl font-bold gradient-text mb-1">15+</div>
                <div className="text-sm text-gray-600">Yıllık Deneyim</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
