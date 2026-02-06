"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
    // Handle form submission
    alert("Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      value: "+90 342 360 9850",
      link: "tel:+903423609850"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-posta",
      value: "info@tunamedical.com.tr",
      link: "mailto:info@tunamedical.com.tr"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adres",
      value: "Gaziantep, Türkiye",
      link: "https://goo.gl/maps/5D5w8ZpWz9D2"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Mesai",
      value: "09:00 - 18:00",
      link: null
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-sand-50 via-white to-sage-50/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand-100 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/4" />

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
                viewport={{ once: true }}
                className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase mb-4 block"
              >
                İletişim
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold text-sage-950 mb-8 tracking-tight">
                Bize Ulaşın
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Her türlü soru ve talebiniz için profesyonel ekibimiz
                çözüm ortağınız olmaya hazır.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-sand-50/30 border border-sage-50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-sage-900/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 shadow-sm border border-sage-50 mb-6 transition-transform group-hover:scale-110">
                    {info.icon}
                  </div>
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-sage-700 uppercase mb-2">
                    {info.title}
                  </h3>
                  <div className="text-sm font-bold text-sage-950">
                    {info.link ? (
                      <a href={info.link} className="hover:text-sage-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto mb-24"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-sage-950 mb-4 tracking-tight">Hızlı İletişim Formu</h2>
                <p className="text-gray-500 font-light text-sm">Aşağıdaki formu doldurarak bize doğrudan mesaj iletebilirsiniz.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-sage-700 uppercase ml-1">Ad Soyad</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-14 rounded-2xl border-sage-100 bg-sand-50/50 focus:bg-white transition-all shadow-sm"
                      placeholder="Örn: Ahmet Tuna"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-sage-700 uppercase ml-1">E-posta</label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      type="email"
                      className="h-14 rounded-2xl border-sage-100 bg-sand-50/50 focus:bg-white transition-all shadow-sm"
                      placeholder="ahmet@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-sage-700 uppercase ml-1">Konu</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="h-14 rounded-2xl border-sage-100 bg-sand-50/50 focus:bg-white transition-all shadow-sm"
                    placeholder="İş birliği, öneri, soru..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-sage-700 uppercase ml-1">Mesajınız</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-[200px] rounded-3xl border-sage-100 bg-sand-50/50 focus:bg-white transition-all shadow-sm p-6"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 bg-sage-900 hover:bg-sage-950 text-white rounded-full text-sm font-bold tracking-widest uppercase shadow-xl shadow-sage-900/10 transition-all group"
                >
                  Gönder
                  <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>


            {/* Full Width Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50860.461246076185!2d37.2818771!3d37.1817268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e0!3m2!1str!2str!4v1761761685456!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Tuna Group Konum"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
