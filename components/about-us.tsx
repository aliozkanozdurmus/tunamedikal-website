"use client"

import { motion } from "framer-motion"
import { Award, Users, Globe, ShieldCheck } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "24",
    label: "Yıllık Tecrübe",
    description: "2000'den bu yana",
  },
  {
    icon: ShieldCheck,
    number: "ISO",
    label: "Sertifikalı Güven",
    description: "13485:2016 Standartları",
  },
  {
    icon: Globe,
    number: "Lojistik",
    label: "Küresel Erişim",
    description: "Uluslararası Pazarlar",
  },
  {
    icon: Users,
    number: "Büyüyen",
    label: "Uzman Kadro",
    description: "Yetkin İnsan Kaynağı",
  },
]

export function AboutUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-sand-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-sage-50/30 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase"
              >
                Geleceğe Yön Veriyoruz
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight">
                Tuna Group <br />
                <span className="text-sage-600/80 font-medium italic">Değer Üretiyor</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-500 font-light leading-relaxed">
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
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {["İnovasyon", "Sürdürülebilirlik", "Kalite"].map((tag) => (
                <div key={tag} className="px-5 py-2 rounded-full border border-sage-100 bg-sand-50/50 text-[11px] font-bold tracking-widest text-sage-800 uppercase">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="p-8 bg-sand-50/30 border border-sage-50/50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-sage-900/5 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 shadow-sm border border-sage-50 mb-6 transition-transform group-hover:scale-110">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-sage-950 mb-1 tracking-tight">{stat.number}</div>
                <div className="text-[10px] font-bold tracking-[0.1em] text-sage-700 uppercase mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 font-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
