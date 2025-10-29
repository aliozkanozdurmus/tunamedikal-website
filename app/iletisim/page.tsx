"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
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
  const { theme } = useTheme()
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
      description: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      value: "info@tunamedical.com.tr",
      description: "24 saat içinde yanıt"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      value: "Gaziantep, Türkiye",
      description: "Merkez ofisimiz"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      value: "Hafta İçi: 09:00 - 18:00",
      description: "Cumartesi: 09:00 - 13:00"
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
                İletişim
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Sorularınız, talepleriniz ve önerileriniz için
                <span className="text-green-600 font-semibold"> 7/24 hizmetinizdeyiz </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
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
              >
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                      Bize Ulaşın
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Adınız Soyadınız *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                            placeholder="Adınızı girin"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            E-posta *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                            placeholder="ornek@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Telefon
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Konu *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Mesaj konusu"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Mesajınız *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full"
                          placeholder="Mesajınızı buraya yazın..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 font-semibold"
                      >
                        <Send className="w-4 h-4 mr-2" />
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
                className="space-y-8"
              >
                {/* Map */}
                <Card className="shadow-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50860.461246076185!2d37.2818771!3d37.1817268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e0!3m2!1str!2str!4v1761761685456!5m2!1str!2str"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96"
                    title="Tuna Medikal Konum"
                  />
                </Card>

                {/* Quick Contact */}
                <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Hemen Arayın!
                    </h3>
                    <p className="mb-6 opacity-90">
                      Acil durumlar ve hızlı destek için telefonla ulaşabilirsiniz
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-green-600 hover:bg-gray-100 font-semibold w-full"
                    >
                      <Phone className="w-5 h-5 mr-2" />
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
