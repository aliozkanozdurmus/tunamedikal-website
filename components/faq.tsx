"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Tuna Group hangi alanlarda faaliyet gösteriyor?",
    answer:
      "Tuna Group, 2000 yılından bu yana sağlık teknolojileri (anestezi, solunum sistemleri vb.) ve endüstriyel üretim (sentetik ambalaj, çuval üretimi) alanlarında faaliyet göstermektedir. Ayrıca global markaların distribütörlüğünü yürütmekteyiz.",
  },
  {
    question: "Üretim tesisleriniz hangi kalite standartlarına sahip?",
    answer:
      "Sağlık alanındaki üretimimiz ISO 13485:2016 standartlarına uygun olup, ürünlerimiz EU MDR kapsamında CE sertifikalıdır. Endüstriyel ambalaj tarafında ise uluslararası dayanıklılık ve çevre standartlarını (geri dönüştürülebilirlik) tam olarak karşılıyoruz.",
  },
  {
    question: "Tuna Group'un distribütörlük ağı nasıldır?",
    answer:
      "Dünya çapında tanınmış medikal ekipman üreticileriyle güçlü iş ortaklıklarımız bulunmaktadır. Hem ulusal pazarda hem de başta Avrupa olmak üzere uluslararası pazarlarda geniş bir dağıtım ve satış sonrası hizmet ağına sahibiz.",
  },
  {
    question: "Endüstriyel ambalaj üretiminde ürünleriniz çevre dostu mu?",
    answer:
      "Evet, ambalaj ve çuval üretimimizde %100 geri dönüştürülebilir polipropilen (PP) kullanıyoruz. Sürdürülebilir üretim gücümüzle karbon ayak izimizi minimize etmeyi hedefliyoruz.",
  },
  {
    question: "Kurumsal çözüm ortaklığı için nasıl ilerleniyor?",
    answer:
      "Uzman ekibimiz, projenize özel ihtiyaç analizi yaparak size en uygun sağlık teknolojisi veya endüstriyel ambalaj çözümünü sunar. İletişim bölümümüzden bize ulaşarak profesyonel danışmanlık alabilirsiniz.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft Decor */}
      <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-sand-50/50 rounded-full blur-[100px] pointer-events-none" />

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
            Bilgi Merkezi
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight">Sıkça Sorulan Sorular</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4"
            >
              <div className="bg-sand-50/30 border border-sage-50/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl hover:shadow-sage-900/[0.02] transition-all duration-500">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-sage-950 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-sage-600" />
                    ) : (
                      <Plus className="h-4 w-4 text-sage-600" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-6 text-sm text-gray-500 font-light leading-relaxed">
                        {faq.answer}
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
