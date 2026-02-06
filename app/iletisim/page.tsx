"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Iletisim() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+90 342 360 9850",
      description: "Hafta İçi: 09:00 - 18:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      value: "info@tunamedical.com.tr",
      description: "24 saat içinde dönüş"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      value: "Gaziantep, Türkiye",
      description: "Genel Merkez"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Mesai Saatleri",
      value: "Pazartesi - Cumartesi",
      description: "09:00 - 18:00"
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-sand-50">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-100/50 via-sand-100/30 to-clay-100/50"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white text-sage-700 border border-sand-200 shadow-sm"
              >
                İletişim
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
                Bize Ulaşın
              </h1>
              <p className="text-lg md:text-xl text-sage-800 leading-relaxed max-w-2xl mx-auto">
                Sorularınız, iş birliği talepleriniz veya bilgi almak için
                <span className="text-sage-700 font-semibold"> uzman ekibimizle </span>
                iletişime geçebilirsiniz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 group border-sand-100 bg-sand-50/30">
                    <CardContent className="p-8 text-center">
                      <div className="text-sage-600 mb-4 flex justify-center group-hover:scale-110 transition-transform bg-white w-14 h-14 rounded-full items-center mx-auto shadow-sm border border-sand-100">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-sage-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-semibold text-sage-800 mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-2xl border-sand-100 bg-white rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-sage-900 mb-8">
                      Mesaj Gönderin
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-sage-800 ml-1">
                            Adınız Soyadınız *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-sand-50/50 border-sand-200 focus:border-sage-400 rounded-xl"
                            placeholder="Adınızı girin"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-sage-800 ml-1">
                            E-posta *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-sand-50/50 border-sand-200 focus:border-sage-400 rounded-xl"
                            placeholder="ornek@email.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-sage-800 ml-1">
                          Telefon
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-sand-50/50 border-sand-200 focus:border-sage-400 rounded-xl"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-sage-800 ml-1">
                          Konu *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-sand-50/50 border-sand-200 focus:border-sage-400 rounded-xl"
                          placeholder="Mesaj konusu"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-sage-800 ml-1">
                          Mesajınız *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="bg-sand-50/50 border-sand-200 focus:border-sage-400 rounded-xl resize-none"
                          placeholder="Mesajınızı buraya yazın..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full btn-green-gradient py-6 rounded-xl text-lg group"
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Mesajı Gönder
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map and Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Map */}
                <Card className="shadow-xl overflow-hidden rounded-3xl border border-sand-100 grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50860.461246076185!2d37.2818771!3d37.1817268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e0!3m2!1str!2str!4v1761761685456!5m2!1str!2str"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[400px] md:h-[450px]"
                    title="Tuna Medikal Konum"
                  />
                </Card>

                {/* Quick Contact */}
                <Card className="bg-gradient-to-br from-sage-700 to-clay-600 text-white rounded-3xl overflow-hidden shadow-lg">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Hızlı Destek Hattı
                    </h3>
                    <p className="mb-8 text-white/80 leading-relaxed italic">
                      Acil durumlar ve detaylı ürün bilgisi için uzman danışmanlarımıza doğrudan ulaşabilirsiniz.
                    </p>
                    <Button
                      size="lg"
                      onClick={() => window.open('tel:+903423609850')}
                      className="bg-white text-sage-800 hover:bg-sand-50 font-bold w-full rounded-xl py-7 text-lg shadow-inner"
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      +90 342 360 9850
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
