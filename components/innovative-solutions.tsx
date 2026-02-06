"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function InnovativeSolutions() {
  const solutions = [
    {
      text: "Ulusal ve uluslararası yasal şartlara tam uyum göstererek güvenilirliğimizi ve şeffaflığımızı koruyoruz.",
    },
    {
      text: "Müşterilerimizin ve çalışanlarımızın memnuniyetini en üst düzeyde tutuyor, sürekli iletişim ve geri bildirimle süreçlerimizi geliştiriyoruz.",
    },
    {
      text: "Sürekli eğitimler ile çalışanlarımızın bilgi ve becerilerini artırarak sektördeki yeniliklere öncülük ediyoruz.",
    },
    {
      text: "Teknolojik gelişmeleri yakından takip ederek, hem medikal hem de ambalaj üretiminde en yüksek kaliteyi sunuyoruz.",
    },
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-sand-50/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sage-100/40 to-sand-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-clay-100/35 to-sand-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase"
              >
                Kurumsal Yaklaşımımız
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight leading-[1.1]">
                Değer Katan <br />
                <span className="text-sage-600 font-medium italic">Yenilikçi Çözümler</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-lg">
                Amacımız, her zaman daha iyisini başarmak ve faaliyet gösterdiğimiz tüm sektörlerde değer yaratmaktır.
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-900 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-light group-hover:text-sage-950 transition-colors">
                    {solution.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-br from-sand-100 to-sage-50 rounded-[3rem] overflow-hidden hidden lg:block"
          >
            <div className="aspect-[4/5] bg-white/40 backdrop-blur-xl rounded-[2.9rem] flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <div className="text-7xl font-light text-sage-200 tracking-tighter">24</div>
                <div className="text-[11px] font-bold tracking-[0.3em] text-sage-600 uppercase">Yıllık Tecrübe ve Güven</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
