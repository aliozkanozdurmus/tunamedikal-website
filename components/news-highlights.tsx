"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ArrowRight, X } from "lucide-react"

interface NewsPost {
  title: string
  excerpt: string
  content: string
  date: string
  category: string
}

export function NewsHighlights() {
  const [selectedNews, setSelectedNews] = useState<NewsPost | null>(null)

  const newsPosts: NewsPost[] = [
    {
      title: "Tuna Group Endüstriyel Üretim Kapasitesini Artırıyor",
      excerpt: "Sağlık teknolojilerindeki başarımızı endüstriyel ambalaj ve çuval üretimine taşıyarak global pazarda büyümemizi sürdürüyoruz.",
      content: `Tuna Group, 24 yıllık sektör tecrübesini endüstriyel ambalaj ve çuval üretimiyle taçlandırıyor. Gaziantep 3. Organize Sanayi Bölgesi'ndeki modern tesislerimizde, en yeni teknoloji ile üretilen yüksek mukavemetli ambalaj çözümlerimiz artık dünyanın birçok bölgesine ihraç edilmektedir.

**Üretim Odak Noktalarımız:**
- %100 Geri dönüştürülebilir PP Sentetik Çuvallar
- Gıda güvenliğine uygun endüstriyel paketleme sistemleri
- Yüksek mukavemetli sanayi tipi ambalajlar

Sürdürülebilirlik ilkelerimiz doğrultusunda, hem medikal hem de ambalaj üretiminde çevreye minimum etki, topluma maksimum değer vizyonuyla hareket ediyoruz.`,
      date: "10 Şubat 2024",
      category: "Kurumsal",
    },
    {
      title: "EU MDR ve ISO 13485 Standartlarında Kalite Güvencesi",
      excerpt: "Sağlık teknolojileri üretimimiz, en güncel Avrupa tıbbi cihaz yönetmeliklerine (EU MDR) tam uyum göstererek güven veriyor.",
      content: `Tuna Group olarak sağlık teknolojilerinde kalite standartlarımızı en üst seviyede tutuyoruz. ISO 13485:2016 kalite yönetim sistemi çerçevesinde gerçekleştirdiğimiz üretimimiz, EU MDR yönetmeliklerine uygunluğu ile CE sertifikalı olarak uluslararası pazarlara sunulmaktadır.

**Kalite Politikamız:**
- Sıfır hata prensibiyle üretim
- Sürekli ar-ge ve inovasyon çalışmaları
- Uluslararası sağlık protokollerine tam uyum

Anestezi ve solunum sistemlerinden tanı ekipmanlarına kadar her ürünümüzde Tuna Group güvencesini hissedeceksiniz.`,
      date: "15 Ocak 2024",
      category: "Kalite & Sertifika",
    },
    {
      title: "Nazal Kanül ve Solunum Sistemlerinde İnovatif Çözümler",
      excerpt: "Hasta konforunu odak noktasına alan yeni nesil nazal kanül setlerimiz, medikal profesyonellerden tam not aldı.",
      content: `Solunum tedavilerinde en yaygın kullanılan cihazlardan biri olan nazal kanül tasarımlarımızda devrim niteliğinde iyileştirmeler yaptık. Yumuşak uçlu, cildi tahriş etmeyen ve kontaminasyona dayanıklı yeni nesil setlerimiz seri üretime geçti.

**Yeni Nesil Ürün Özellikleri:**
- Anatomik yapıya tam uyumlu yumuşak konnektörler
- Kesintisiz akış sağlayan kink-resistant hortum yapısı
- Yenidoğandan yetişkine her yaş grubuna özel boyutlar

Tuna Group olarak "Sevgiyi Sağlıkla Buluşturuyoruz" mottomuzu her yeni ürünümüzle hayata geçirmeye devam ediyoruz.`,
      date: "05 Ocak 2024",
      category: "Ürün Geliştirme",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            Güncel Gelişmeler
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight">Haberler & <span className="text-sage-600 font-medium italic">Yenilikler</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
              onClick={() => setSelectedNews(post)}
            >
              <div className="bg-sand-50/30 border border-sage-50 rounded-[2.5rem] p-10 h-full hover:bg-white hover:shadow-2xl hover:shadow-sage-900/[0.04] transition-all duration-500 flex flex-col items-start text-left">
                <div className="inline-block px-4 py-1.5 bg-sage-900 rounded-full text-[9px] font-bold tracking-[0.2em] text-white uppercase mb-8">
                  {post.category}
                </div>

                <div className="flex items-center text-[10px] font-bold tracking-widest text-sage-400 uppercase mb-4">
                  <Calendar className="w-3 h-3 mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-sage-950 group-hover:text-sage-600 transition-colors duration-300 mb-4 leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-xs font-bold text-sage-900 tracking-wider uppercase group-hover:gap-3 transition-all duration-300">
                  Detayları Oku <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-sage-950/20 backdrop-blur-lg p-4"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute right-8 top-8 z-10 w-12 h-12 rounded-full bg-sand-50 flex items-center justify-center text-sage-950 hover:bg-white shadow-sm transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-8 md:p-16 lg:p-24">
                <div className="inline-block px-5 py-2 bg-sage-900 rounded-full text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-8">
                  {selectedNews.category}
                </div>

                <div className="flex items-center text-[10px] font-bold tracking-widest text-sage-400 uppercase mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedNews.date}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-sage-950 mb-10 tracking-tight leading-tight">
                  {selectedNews.title}
                </h1>

                <div className="h-[1px] w-full bg-sage-50 mb-12" />

                <div className="prose prose-sage !max-w-none">
                  <div className="text-gray-500 font-light leading-relaxed text-lg whitespace-pre-line">
                    {selectedNews.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
