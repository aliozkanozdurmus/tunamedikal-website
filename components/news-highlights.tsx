"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight, MessageSquare, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsPost {
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
  comments: number
}

export function NewsHighlights() {
  const [selectedNews, setSelectedNews] = useState<NewsPost | null>(null)

  const newsPosts: NewsPost[] = [
    {
      title: "Nazal Kanül Nedir ve Ne İşe Yarar?",
      excerpt:
        "Nazal kanül, oksijen tedavisinde kullanılan önemli bir tıbbi cihaz. Burun yoluyla oksijen verilmesini sağlayan bu cihazın kullanım alanları ve faydaları.",
      content: `Nazal kanül, oksijen tedavisinde kullanılan en yaygın tıbbi cihazlardan biridir. Bu cihaz, hastanın burun deliklerine yerleştirilen ince tüplerle oksijen verilmesini sağlar.

**Nazal Kanülün Özellikleri:**
- Hafif ve esnek yapısı sayesinde hasta konforu sağlar
- Farklı yaş grupları için çeşitli boyutlarda üretilir
- Tek kullanımlık olup hijyenik kullanım sunar
- Şeffaf malzemeden üretildiği için gözle kontrol edilebilir

**Kullanım Alanları:**
- Kronik obstrüktif akciğer hastalığı (KOAH) tedavisi
- Uyku apnesi tedavisi
- Post-operatif oksijen desteği
- Acil durumlarda oksijen verilmesi

**Avantajları:**
- Kolay uygulanabilir
- Hasta mobilizasyonunu kısıtlamaz
- Konuşma ve yemek yemeyi engellемez
- Maliyet etkin bir çözümdür

Nazal kanül kullanımında doğru boyut seçimi ve düzenli değişim önemlidir. Hasta güvenliği için steril koşullarda saklanmalı ve tek kullanımlık olarak tercih edilmelidir.`,
      image: "/images/nasal-cannula.jpg",
      date: "15 Aralık 2023",
      category: "Tıbbi Bilgi",
      comments: 12,
    },
    {
      title: "Nebulizatör Maskesi: Solunum Tedavisinin Vazgeçilmezi",
      excerpt:
        "Astım, KOAH ve diğer solunum hastalıklarının tedavisinde kullanılan nebulizatör maskelerinin çalışma prensibi ve doğru kullanım yöntemleri.",
      content: `Nebulizatör maskesi, solunum yolu hastalıklarının tedavisinde kullanılan önemli bir tıbbi cihazdır. İlaçları aerosol formuna dönüştürerek hastanın solunum yollarına ulaştırır.

**Çalışma Prensibi:**
- Sıvı ilaçları küçük partiküllere böler
- Kompresör yardımıyla aerosol oluşturur
- Maske aracılığıyla hastaya ulaştırır
- Derin solunum yollarına kadar penetrasyon sağlar

**Kullanım Alanları:**
- Astım krizi tedavisi
- KOAH alevlenme dönemleri
- Bronşit tedavisi
- Pnömoni destekleyici tedavisi
- Mukolitik tedavi uygulamaları

**Doğru Kullanım:**
1. Cihazı temiz bir yüzeye yerleştirin
2. İlaç dozunu doktor önerisi doğrultusunda hazırlayın
3. Maskeyi yüze sıkıca yerleştirin
4. Normal nefes alıp verin
5. İlaç bitene kadar işlemi sürdürün

**Bakım ve Temizlik:**
- Her kullanım sonrası temizlenmeli
- Dezenfektan solüsyonla sterilize edilmeli
- Kuru ortamda saklanmalı
- Düzenli olarak değiştirilmeli

Nebulizatör maskesi kullanımında hasta eğitimi çok önemlidir. Doğru teknikle kullanıldığında tedavi etkinliği maksimum düzeye çıkar.`,
      image: "/images/nebulizer-mask.jpg",
      date: "8 Aralık 2023",
      category: "Tıbbi Bilgi",
      comments: 18,
    },
    {
      title: "Oksijen Maskesi Türleri ve Kullanım Alanları",
      excerpt:
        "Farklı oksijen maskesi türleri, hangi durumlarda kullanıldığı ve hasta güvenliği açısından dikkat edilmesi gereken önemli noktalar.",
      content: `Oksijen maskeleri, hastanelerde ve acil durumlarda oksijen tedavisi için kullanılan hayati önem taşıyan tıbbi cihazlardır. Farklı türleri ve kullanım alanları bulunmaktadır.

**Oksijen Maskesi Türleri:**

**1. Basit Oksijen Maskesi:**
- %35-50 oksijen konsantrasyonu sağlar
- 6-10 L/dk akış hızında kullanılır
- Kısa süreli oksijen desteği için idealdir

**2. Venturi Maskesi:**
- Sabit oksijen konsantrasyonu sağlar
- %24-50 arasında ayarlanabilir
- KOAH hastalarında tercih edilir

**3. Non-Rebreathing Maskesi:**
- %90-95 oksijen konsantrasyonu
- Rezervuar torbalı sistem
- Acil durumlarda kullanılır

**4. Partial Rebreathing Maskesi:**
- %60-80 oksijen konsantrasyonu
- Orta düzey oksijen desteği
- Rezervuar torbalı

**Kullanım Alanları:**
- Ameliyat sonrası dönem
- Solunum yetmezliği
- Kalp krizi
- Travma vakaları
- Zehirlenme durumları

**Güvenlik Önlemleri:**
- Doğru boyut seçimi yapılmalı
- Düzenli kontrol edilmeli
- Steril koşullarda saklanmalı
- Tek kullanımlık tercih edilmeli
- Yangın riski nedeniyle dikkatli olunmalı

**Hasta Konforu:**
- Maske cildi tahriş etmemeli
- Düzenli pozisyon değişimi yapılmalı
- Cilt bakımına özen gösterilmeli

Oksijen maskesi seçimi hastanın durumuna göre yapılmalı ve sürekli monitörize edilmelidir.`,
      image: "/images/oxygen-mask.jpg",
      date: "2 Aralık 2023",
      category: "Tıbbi Bilgi",
      comments: 9,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleNewsClick = (news: NewsPost) => {
    setSelectedNews(news)
  }

  const closeNewsModal = () => {
    setSelectedNews(null)
  }

  return (
    <section id="news" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl -z-5"
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
            Tıbbi Bilgiler
          </motion.span>

          <h2 className="section-title gradient-text">Son Haberler</h2>
          <p className="section-subtitle">
            Tıbbi cihazlar ve sağlık ekipmanları hakkında faydalı bilgiler ve güncel gelişmeler.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 group glass-card cursor-pointer"
                onClick={() => handleNewsClick(post)}
              >
                <motion.div
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">{post.category}</Badge>
                  </div>
                </motion.div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments} yorum</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <span className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                      Devamını Oku <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={closeNewsModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeNewsModal}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white transition-colors"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 lg:p-8">
                {/* Header Image */}
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                  <Image
                    src={selectedNews.image || "/placeholder.svg"}
                    alt={selectedNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">{selectedNews.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{selectedNews.date}</span>
                    <span className="mx-2">•</span>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{selectedNews.comments} yorum</span>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedNews.title}</h1>

                  <div className="prose max-w-none">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedNews.content}</div>
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
