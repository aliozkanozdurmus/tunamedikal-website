"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Tuna Medikal hangi tür tıbbi cihazlar üretiyor?",
    answer:
      "Kardiyovasküler ürünler, tanı ekipmanları, laboratuvar malzemeleri, tek kullanımlık ürünler, hasta izleme sistemleri ve özel üretim çözümleri dahil olmak üzere geniş bir ürün yelpazesi sunuyoruz.",
  },
  {
    question: "Ürünleriniz hangi kalite standartlarına sahip?",
    answer:
      "Tüm ürünlerimiz ISO 13485 kalite yönetim sistemi standartlarına uygun olarak üretilmekte ve CE işareti taşımaktadır. Ayrıca Sağlık Bakanlığı onaylarına sahiptir.",
  },
  {
    question: "Teslimat süreniz ne kadar?",
    answer:
      "Stokta bulunan ürünler için 1-3 iş günü, özel üretim gerektiren ürünler için 2-4 hafta teslimat süresi bulunmaktadır. Acil durumlar için hızlı teslimat seçeneklerimiz mevcuttur.",
  },
  {
    question: "Teknik destek hizmeti veriyor musunuz?",
    answer:
      "Evet, 7/24 teknik destek hizmeti sunuyoruz. Ürün kurulumu, kullanım eğitimi, bakım ve onarım hizmetleri dahil olmak üzere kapsamlı destek sağlıyoruz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Türkiye genelinde hizmet vermekteyiz. İstanbul, Ankara, İzmir başta olmak üzere tüm illere teslimat yapıyoruz. Ayrıca seçili ülkelere ihracat da gerçekleştiriyoruz.",
  },
  {
    question: "Ürün garantisi var mı?",
    answer:
      "Tüm ürünlerimiz için minimum 2 yıl garanti sunuyoruz. Bazı özel ürünler için garanti süresi daha uzun olabilir. Garanti kapsamında ücretsiz bakım ve onarım hizmeti verilmektedir.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-green-300 to-transparent blur-3xl -z-5"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium rounded-full glass-card"
          >
            Sık Sorulan Sorular
          </motion.span>

          <h2 className="section-title gradient-text">Sıkça Sorulan Sorular</h2>
          <p className="section-subtitle">
            Tuna Medikal hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-green-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-green-600" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
