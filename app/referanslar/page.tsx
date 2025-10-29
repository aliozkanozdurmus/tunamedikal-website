"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star, Quote, Building, Users, Award, TrendingUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Referanslar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const testimonials = [
    {
      id: 1,
      position: "Anestezi Uzmanı",
      rating: 5,
      comment: "Tuna Medikal'in ürünleri kalitesi ve hizmet anlayışı gerçekten takdir edilesi. 5 yıldır çalışıyoruz ve memnuniyetimiz günden güne artıyor.",
      avatar: "/placeholder-user.jpg",
      category: "hospital"
    },
    {
      id: 2,
      position: "Satın Alma Müdürü",
      rating: 5,
      comment: "Hızlı teslimat ve rekabetçi fiyatlarla en iyi tedarikçimiz oldular. Özellikle acil durumlarda bize hep destek oldular.",
      avatar: "/placeholder-user.jpg",
      category: "hospital"
    },
    {
      id: 3,
      position: "Kardiyoloji Bölüm Başkanı",
      rating: 5,
      comment: "Teknolojik ürünleri ve after sales servisleri mükemmel. Özellikle hasta monitörleri departmanımızda vazgeçilmez oldu.",
      avatar: "/placeholder-user.jpg",
      category: "hospital"
    },
    {
      id: 4,
      position: "Eczane Sahibi",
      rating: 4,
      comment: "Küçük işletmemiz için bile özel ilgi gösteriyorlar. Ürün çeşitliliği ve fiyatları çok uygun.",
      avatar: "/placeholder-user.jpg",
      category: "pharmacy"
    },
    {
      id: 5,
      position: "Yoğun Bakım Uzmanı",
      rating: 5,
      comment: "Yoğun bakım ekipmanları konusunda en güvenilir tedarikçimiz. 7/24 destekleri hayat kurtarıyor.",
      avatar: "/placeholder-user.jpg",
      category: "hospital"
    },
    {
      id: 6,
      position: "CEO",
      rating: 5,
      comment: "15 yıldır birlikte çalışıyoruz. Tuna Medikal sadece tedarikçi değil, iş ortağımız oldu.",
      avatar: "/placeholder-user.jpg",
      category: "clinic"
    }
  ]

  const partners = [
    {
      type: "Özel Hastane",
      since: "2015",
      logo: "/placeholder-logo.png",
      description: "Türkiye'nin önde gelen özel hastanelerinden biri"
    },
    {
      type: "Sağlık Grubu",
      since: "2016",
      logo: "/placeholder-logo.png",
      description: "20+ hastaneli büyük sağlık kuruluşu"
    },
    {
      type: "Üniversite Hastanesi",
      since: "2018",
      logo: "/placeholder-logo.png",
      description: "Akademik tıp ve araştırma merkezi"
    },
    {
      type: "Kamu Hastanesi",
      since: "2019",
      logo: "/placeholder-logo.png",
      description: "Bölgenin en büyük kamu hastanelerinden"
    },
    {
      type: "Özel Klinik",
      since: "2010",
      logo: "/placeholder-logo.png",
      description: "Özel sağlık hizmetleri sağlayıcısı"
    },
    {
      type: "Eczane",
      since: "2017",
      logo: "/placeholder-logo.png",
      description: "Bölgenin güvenilir eczanesi"
    }
  ]

  const categories = [
    { id: "all", name: "Tümü", count: testimonials.length },
    { id: "hospital", name: "Hastaneler", count: testimonials.filter(t => t.category === "hospital").length },
    { id: "pharmacy", name: "Eczaneler", count: testimonials.filter(t => t.category === "pharmacy").length },
    { id: "clinic", name: "Klinikler", count: testimonials.filter(t => t.category === "clinic").length }
  ]

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  const stats = [
    {
      icon: <Building className="w-8 h-8" />,
      value: "500+",
      label: "Mutlu Müşteri",
      description: "Türkiye genelinde"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "50,000+",
      label: "Memnun Hasta",
      description: "Yıllık hizmet"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "Yıllık Deneyim",
      description: "Sektörde"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "98%",
      label: "Memnuniyet Oranı",
      description: "Müşteri tatmini"
    }
  ]

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark bg-slate-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`}>
      <Navbar isScrolled={isScrolled} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Referanslarımız
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                15 yıldır güvenle çalışanlarımızdan aldığımız güçlü referanslarla
                <span className="text-green-600 font-semibold"> sektörde lideriz </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
                >
                  <div className="text-green-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Müşteri Yorumları
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Bizimle çalışan kurumlardan gelen görüşler
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-green-600 hover:bg-green-700"
                      : "border-green-600 text-green-600 hover:bg-green-50"
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200" />
                        <p className="text-gray-700 dark:text-gray-300 italic relative z-10">
                          "{testimonial.comment}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">
                            {testimonial.position}
                          </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                İş Ortaklarımız
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Güvenle birlikte çalıştığımız kurumlar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Building className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {partner.type}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {partner.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{partner.since} yılından beri çalışıyoruz</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
