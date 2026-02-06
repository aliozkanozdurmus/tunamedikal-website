"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Lightbulb, ShieldCheck, Zap, PackageOpen, Award, Users, Globe, TrendingUp, Factory, Leaf, CheckCircle } from "lucide-react"

export default function Hakkimizda() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Kalite Standartları",
      description: "ISO 13485:2016 ve EU MDR CE sertifikalı üretim gücü."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "İnovasyon",
      description: "Teknoloji odaklı yaklaşım ile yeni nesil çözümler."
    },
    {
      icon: <PackageOpen className="w-6 h-6" />,
      title: "Endüstriyel Güç",
      description: "Ambalaj ve çuval üretiminde sürdürülebilir altyapı."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Global Güven",
      description: "Dünya markalarının distribütörlüğü ve yerli üretim başarısı."
    }
  ]

  const timeline = [
    {
      year: "2000",
      title: "Kuruluş",
      description: "Tuna Group, sağlık teknolojileri alanında faaliyete başladı."
    },
    {
      year: "2008",
      title: "Uluslararası Sertifikasyon",
      description: "ISO 13485 kalite yönetim sistemi sertifikası alındı."
    },
    {
      year: "2015",
      title: "Üretim Kapasitesi Artışı",
      description: "Modern üretim tesislerimiz Gaziantep OSB'de faaliyete geçti."
    },
    {
      year: "2020",
      title: "Endüstriyel Ambalaj",
      description: "Endüstriyel ambalaj ve çuval üretimi bünyeye katıldı."
    },
    {
      year: "2024",
      title: "Global Büyüme",
      description: "Avrupa ve Orta Doğu pazarlarında güçlü distribütörlük ağı kuruldu."
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "150+", label: "Uzman Ekip" },
    { icon: <Globe className="w-6 h-6" />, value: "25+", label: "İhracat Ülkesi" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "1500+", label: "Ürün Çeşidi" },
    { icon: <Factory className="w-6 h-6" />, value: "15.000m²", label: "Üretim Alanı" }
  ]

  const sustainability = [
    "Geri dönüştürülebilir malzeme kullanımı",
    "Enerji verimliliği odaklı üretim",
    "Atık yönetimi ve çevre koruma",
    "Sürdürülebilir tedarik zinciri",
    "Karbon ayak izi azaltma programları"
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-32 pb-24 bg-sand-50/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-sage-950 mb-8 tracking-tight">
                Tuna Group
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında
                değer üreten, güvene dayalı yarınları inşa eden bir grup şirketidir.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-y border-sage-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600">
                    {stat.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-sage !max-w-none text-gray-600 font-light leading-relaxed"
              >
                <p>
                  Tuna Group, 2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü bir şirkettir. Dünya markalarının distribütörlüğünü yürütürken, kendi üretimiyle yenilikçi ve sürdürülebilir çözümler sunmaktadır.
                </p>
                <p>
                  Sağlık teknolojilerinde ISO 13485:2016 standartlarında üretim yapan ve EU MDR kapsamında CE sertifikalı ürünler geliştiren Tuna Group, ulusal ve uluslararası pazarlarda güvenle tercih edilmektedir.
                </p>
                <p>
                  Ambalaj ve çuval üretimini bünyesine katarak endüstriyel çözümler alanında da güçlü bir yapıya kavuşmuştur. Çevre dostu ve dayanıklı ürünleri birçok sektör tarafından kullanılmaktadır.
                </p>
                <p>
                  Uzman ekibi, büyüyen üretim kapasitesi ve güçlü iş ortaklıklarıyla Tuna Group; sağlık teknolojilerinden endüstriyel ambalaja uzanan geniş bir alanda değer üretmeye devam etmektedir.
                </p>
              </motion.div>

              {/* Mission & Vision Grid */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-sand-50 rounded-[2.5rem] border border-sage-50"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 shadow-sm border border-sage-50 mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-sage-950 mb-4">Misyonumuz</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    Sağlık teknolojileri ve endüstriyel üretim alanlarında, uluslararası kalite standartlarına uygun, güvenilir ve yenilikçi çözümler sunmak; sürdürülebilir üretim gücümüz, yetkin insan kaynağımız ve teknoloji odaklı yaklaşımımızla müşterilerimize sürekli değer yaratmak.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-sage-50 rounded-[2.5rem] border border-sage-50"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 shadow-sm border border-sage-50 mb-6">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-sage-950 mb-4">Vizyonumuz</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    Sağlık teknolojileri ve endüstriyel üretim alanlarında, yenilikçi yaklaşımı ve sürdürülebilir üretim gücüyle bölgesel liderliği aşarak küresel ölçekte güven veren ve tercih edilen bir grup şirketi olmak; teknolojiyi, kaliteyi ve insan odaklı yönetimi bir araya getirerek sektörlere yön veren çözümler geliştirmek.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-sand-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase mb-4 block">
                Tarihçemiz
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight">
                24 Yıllık <span className="text-sage-600 font-medium italic">Yolculuk</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-sage-100 hidden md:block" />

                <div className="space-y-12">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex gap-8 items-start"
                    >
                      {/* Year Badge */}
                      <div className="flex-shrink-0 w-16 h-16 bg-sage-900 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {item.year}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white p-8 rounded-3xl border border-sage-50 shadow-sm">
                        <h4 className="text-xl font-bold text-sage-950 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Block */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase mb-4 block">
                Değerlerimiz
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight">
                Temel <span className="text-sage-600 font-medium italic">Prensiplerimiz</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-sand-100 rounded-3xl hover:bg-sand-50/50 transition-colors"
                >
                  <div className="text-sage-600 mb-6">
                    {val.icon}
                  </div>
                  <h4 className="text-lg font-bold text-sage-950 mb-2">{val.title}</h4>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-24 bg-sage-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Sürdürülebilirlik Taahhüdümüz
                </h2>
                <p className="text-white/60 font-light max-w-2xl mx-auto">
                  Çevreye saygılı üretim anlayışımızla gelecek nesillere yaşanabilir bir dünya bırakma sorumluluğunu taşıyoruz.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {sustainability.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
