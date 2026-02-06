"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

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
      text: "Sektördeki teknolojik gelişmeleri yakından takip ederek, her zaman en iyi hizmeti sunuyoruz.",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sage-200/40 to-sand-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-clay-200/35 to-sand-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sage-700 via-sage-600 to-clay-500 bg-clip-text text-transparent leading-normal py-2">
                Sağlığa Değer Katan Yenilikçi Çözümler
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Amacımız, her zaman daha iyisini başarmak ve sağlık sektörüne değer katmaktır. Bu doğrultuda;
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-sage-600 to-clay-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {solution.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative glass-card p-8 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-500/10 via-transparent to-clay-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <Image
                  src="/images/solutions/healthcare-consultation.jpeg"
                  alt="Sağlık Profesyoneli"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-sage-400 to-clay-400 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-sand-300 to-clay-300 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-sage-400 to-clay-400 rounded-full opacity-30 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-sand-300 to-clay-300 rounded-full opacity-40 blur-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
