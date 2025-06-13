"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  const faqs = [
    {
      question: "Hangi tıbbi malzeme kategorilerinde ürün sunuyorsunuz?",
      answer:
        "Kardiyovasküler ürünler, tanı ekipmanları, laboratuvar malzemeleri, tek kullanımlık ürünler, hasta izleme sistemleri ve daha birçok kategoride geniş bir ürün yelpazesi sunuyoruz. Detaylı ürün kataloğumuzu web sitemizden inceleyebilir veya satış temsilcilerimizle iletişime geçebilirsiniz.",
    },
    {
      question: "Ürünleriniz hangi kalite sertifikalarına sahip?",
      answer:
        "Tüm ürünlerimiz ISO 13485 Tıbbi Cihazlar Kalite Yönetim Sistemi sertifikasına sahiptir. Ayrıca, Avrupa pazarında satılan ürünlerimiz CE işaretine, Amerika pazarında satılan ürünlerimiz ise FDA onayına sahiptir. Ürünlerimiz düzenli olarak bağımsız laboratuvarlarda test edilmektedir.",
    },
    {
      question: "Minimum sipariş miktarınız nedir?",
      answer:
        "Ürün kategorisine göre minimum sipariş miktarlarımız değişiklik göstermektedir. Toplu alımlarda özel fiyatlandırma seçeneklerimiz mevcuttur. Detaylı bilgi için satış departmanımızla iletişime geçmenizi öneririz.",
    },
    {
      question: "Teslimat süreleriniz nedir?",
      answer:
        "Stokta bulunan ürünler için teslimat süresi genellikle 1-3 iş günüdür. Özel üretim veya büyük miktarlı siparişler için teslimat süresi 1-4 hafta arasında değişebilir. Acil durumlarda hızlı teslimat seçeneklerimiz de bulunmaktadır.",
    },
    {
      question: "Özel üretim yapıyor musunuz?",
      answer:
        "Evet, sağlık kurumlarının özel ihtiyaçlarına yönelik özelleştirilmiş tıbbi malzeme üretimi yapıyoruz. Ar-Ge ekibimiz, müşterilerimizin spesifikasyonlarına uygun ürünler geliştirmek için çalışmaktadır. Özel üretim talepleriniz için lütfen bizimle iletişime geçin.",
    },
    {
      question: "Uluslararası gönderim yapıyor musunuz?",
      answer:
        "Evet, dünya genelinde 50'den fazla ülkeye ihracat yapıyoruz. Uluslararası lojistik ağımız sayesinde ürünlerimizi güvenli ve hızlı bir şekilde dünyanın her yerine ulaştırabiliyoruz. Ulu̧slararası siparişler için özel gümrük ve lojistik desteği sağlıyoruz.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-medical-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -left-40 bottom-40 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-500 to-transparent blur-3xl -z-10"
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
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-medical-50 text-medical-600 border border-medical-100"
          >
            SSS
          </motion.span>

          <h2 className="section-title">
            Sıkça Sorulan <span className="gradient-text">Sorular</span>
          </h2>
          <p className="section-subtitle">Ürün ve hizmetlerimiz hakkında sık sorulan soruların cevaplarını bulun.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:no-underline group">
                    <span className="group-hover:text-medical-600 transition-colors">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
