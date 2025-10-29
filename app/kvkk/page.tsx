"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Users, FileCheck, AlertCircle, Gavel, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Kvkk() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
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

  const rights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bilgi Edinme Hakkı",
      content: "Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme hakkına sahipsiniz."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Düzeltme Talebi",
      content: "Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme hakkınız bulunmaktadır."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Silme ve Yok Etme",
      content: "Kişisel verilerinizin silinmesini veya yok edilmesini talep etme hakkınız mevcuttur."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Yasal Yollar",
      content: "Haklarınızın ihlali durumında Kuruma başvurarak yasal yollardan haklarınızı arayabilirsiniz."
    }
  ]

  const dataCategories = [
    "Kimlik Bilgileri (Ad, soyad, T.C. kimlik numarası)",
    "İletişim Bilgileri (Adres, telefon, e-posta)",
    "Müşteri Bilgileri (Siparişler, talepler, geri bildirimler)",
    "Finansal Bilgiler (Fatura bilgileri, ödeme kayıtları)",
    "Teknik Bilgiler (IP adresi, çerez verileri, log kayıtları)"
  ]

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark bg-slate-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`}>
      <Navbar isScrolled={isScrolled} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                KVKK Aydınlatma Metni
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
                <span className="text-blue-600 font-semibold"> haklarınız ve verilerinizin işlenmesi </span>
                hakkında bilmeniz gerekenler.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Veri Sorumlusu Tanımı
                    </h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Veri Sorumlusu:</strong> Tuna Medikal Tıbbi Cihazlar Sanayi Ve Ticaret Limited Şirketi
                      </p>
                      <p>
                        <strong>Adres:</strong> 3. Organize Sanayi Bölgesi, Kamil Şerbetçi Bulvarı No: 39, Şehitkamil/Gaziantep
                      </p>
                      <p>
                        <strong>Telefon:</strong> +90 342 360 9850
                      </p>
                      <p>
                        <strong>E-posta:</strong> info@tunamedical.com.tr
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data Processing Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Database className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Kişisel Verilerin İşlenme Amaçları
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Hizmetlerimizi sunmak ve gereksinimlerinizi karşılamak</li>
                        <li>Müşteri ilişkileri yönetimi ve memnuniyet ölçümü</li>
                        <li>İletişim ve pazarlama faaliyetleri yürütmek</li>
                        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                        <li>İş sürekliliğini ve operasyonel verimliliği sağlamak</li>
                        <li>Sözleşme ilişkilerinden doğan hak ve yükümlülükleri yerine getirmek</li>
                        <li>Finans ve muhasebe işlemlerini yürütmek</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data Categories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      İşlenen Kişisel Veri Kategorileri
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {dataCategories.map((category, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 dark:text-gray-300">{category}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Legal Basis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Kişisel Verilerin Aktarıldığı Taraflar
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        Kişisel verileriniz, aşağıdaki amaçlarla ve yasal yükümlülüklerimiz çerçevesinde:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Yetkili kamu kurum ve kuruluşlarına</li>
                        <li>Hukuki zorunluluklar nedeniyle adli makamlara</li>
                        <li>Hizmet sağlayıcılarımız ve iş ortaklarımıza</li>
                        <li>Finans kurumlarına</li>
                        <li>Kargo ve lojistik firmalarına</li>
                        <li>Teknoloji ve yazılım sağlayıcılarına</li>
                      </ul>
                      <p>
                        aktarılabilmektedir. Veri aktarımları KVKK'nın belirlediği ilkeler doğrultusunda 
                        gerçekleştirilmektedir.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Rights Section */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {rights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-blue-600 flex-shrink-0">
                            {right.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                              {right.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {right.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Haklarınızı Kullanmak İçin Başvuru
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        KVKK kapsamındaki haklarınızı kullanmak için bize aşağıdaki yollarla başvurabilirsiniz:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <strong>E-posta:</strong>
                          <a href="mailto:info@tunamedical.com.tr" className="block text-blue-600 hover:text-blue-700">
                            info@tunamedical.com.tr
                          </a>
                        </div>
                        <div>
                          <strong>Posta Adresi:</strong>
                          <p className="text-sm">
                            3. Organize Sanayi Bölgesi, Kamil Şerbetçi Bulvarı No: 39<br />
                            Şehitkamil/Gaziantep
                          </p>
                        </div>
                      </div>
                      <p>
                        Başvurularınız en geç 30 gün içinde sonuçlandırılacak ve size bildirilecektir.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Last Updated */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Son Güncellenme:</strong> {new Date().toLocaleDateString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
