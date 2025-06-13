"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Form gönderildi! Bu bir demo.")
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefon",
      details: ["+90 555 123 4567", "+90 555 765 4321"],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "E-posta",
      details: ["info@tunamedikal.com", "randevu@tunamedikal.com"],
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Konum",
      details: ["123 Tıp Merkezi Caddesi", "İstanbul, Türkiye 34000"],
      color: "bg-red-50 text-red-600",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Çalışma Saatleri",
      details: ["Pazartesi-Cuma: 08:00 - 20:00", "Cumartesi: 09:00 - 17:00"],
      color: "bg-purple-50 text-purple-600",
    },
  ]

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-medical-50 to-white relative overflow-hidden"
    >
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
            İletişim
          </motion.span>

          <h2 className="section-title">
            <span className="gradient-text">İletişime</span> Geçin
          </h2>
          <p className="section-subtitle">
            Sorularınız mı var veya randevu mu planlamak istiyorsunuz? Bugün bizimle iletişime geçin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`rounded-full p-3 mr-4 ${item.color}`}>{item.icon}</div>
                        <div>
                          <h3 className="font-bold mb-2">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden shadow-lg border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Bize Mesaj Gönderin</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ad Soyad
                      </label>
                      <Input id="name" placeholder="Adınız" required />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta Adresi
                      </label>
                      <Input id="email" type="email" placeholder="E-posta adresiniz" required />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon Numarası
                    </label>
                    <Input id="phone" placeholder="Telefon numaranız" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Konu
                    </label>
                    <Input id="subject" placeholder="Mesaj konusu" required />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesaj
                    </label>
                    <Textarea id="message" placeholder="Mesajınız" rows={5} required />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-medical hover:shadow-lg hover:shadow-medical-500/20 transition-all duration-300"
                    >
                      Mesaj Gönder
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
