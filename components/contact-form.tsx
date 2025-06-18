"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleCall = () => {
    window.open("tel:+903423609850", "_self")
  }

  const handleEmail = () => {
    window.open("mailto:info@tunamedical.com.tr", "_self")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 342 360 9850"],
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@tunamedical.com.tr"],
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["3. Organize Sanayi Bölgesi", "Kamil Şerbetçi Bulvarı No: 39", "Şehitkamil / Gaziantep"],
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-green-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-green-400 to-transparent blur-3xl -z-5"
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
            className="inline-block px-6 py-2 mb-6 text-sm font-medium rounded-full glass-card"
          >
            İletişim
          </motion.span>

          <h2 className="section-title gradient-text">Bizimle İletişime Geçin</h2>
          <p className="section-subtitle">
            Sorularınız için bize ulaşın. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6">İletişim Bilgileri</h3>
              <p className="text-gray-600 mb-8">
                Tıbbi cihaz ve malzeme ihtiyaçlarınız için bizimle iletişime geçebilirsiniz. Profesyonel ekibimiz size
                en uygun çözümleri sunmak için hazır.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCall} className="btn-green-gradient flex-1 rounded-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Arayın
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="flex-1 rounded-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  E-posta Gönderin
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold gradient-text mb-6">Mesaj Gönderin</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-0"
                    placeholder="Adınızı girin"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glass border-0"
                    placeholder="Telefon numaranız"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass border-0"
                  placeholder="E-posta adresiniz"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass border-0"
                  placeholder="Mesaj konusu"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="glass border-0 resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>

              <Button type="submit" className="btn-green-gradient w-full rounded-full py-3">
                <Send className="mr-2 h-4 w-4" />
                Mesaj Gönder
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
