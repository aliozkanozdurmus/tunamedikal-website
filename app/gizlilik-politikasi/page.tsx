"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Eye, Lock, Database, User, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GizlilikPolitikasi() {
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

  const sections = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Veri Toplama",
      content: "Web sitemiz üzerinden kişisel verilerinizi yalnızca kanunların izin verdiği ölçüde toplarız. Bu veriler; ad, soyad, e-posta adresi, telefon numarası ve taleplerinizle ilgili bilgileri içerebilir."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Veri Koruma",
      content: "Kişisel verilerinizi yetkisiz erişime, kayba, değiştirilmeye veya imhaya karşı korumak için gerekli tüm teknik ve idari güvenlik önlemlerini alıyoruz."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Veri Kullanımı",
      content: "Topladığımız verileri; hizmetlerimizi sunmak, müşteri desteği sağlamak, web sitemizi iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanırız."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Haklarınız",
      content: "Kişisel verilerinizin işlenmesi hakkında bilgi alma, verilerinizi düzettirme, silme veya yok edilmesini talep etme haklarına sahipsiniz."
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
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-green-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Gizlilik Politikası
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Kişisel verilerinizin güvenliği bizim için önceliklidir.
                <span className="text-green-600 font-semibold"> Verilerinizi nasıl koruduğumuzu </span>
                burada bulabilirsiniz.
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
                      Genel Bilgiler
                    </h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        Tuna Medikal olarak, kişisel verilerinizin korunmasına büyük önem veriyoruz. 
                        Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizden 
                        faydalandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını ve 
                        korunduğunu açıklamaktadır.
                      </p>
                      <p>
                        Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
                        kapsamında işlenmekte olup, bu kanun hükümlerine uygun olarak gereken tüm 
                        önlemler alınmaktadır.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sections Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-green-600 flex-shrink-0">
                            {section.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                              {section.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Detailed Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <FileText className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Detaylı Bilgiler
                      </h3>
                    </div>
                    
                    <div className="space-y-6 text-gray-600 dark:text-gray-300">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          Çerezler (Cookies)
                        </h4>
                        <p>
                          Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. 
                          Çerezler, tarayıcınızda saklanan küçük metin dosyalarıdır ve web sitemizin 
                          sizin için nasıl çalıştığını anlamamıza yardımcı olur.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          Üçüncü Taraflar
                        </h4>
                        <p>
                          Web sitemizde yer alan dış bağlantılar üçüncü taraf web sitelerine yönlendirebilir. 
                          Bu sitelerin gizlilik politikalarından sorumlu değiliz ve bu sitelerin 
                          gizlilik uygulamalarını incelemenizi öneririz.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          Politika Güncellemeleri
                        </h4>
                        <p>
                          Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Güncellemeler web 
                          sitemizde yayınlandığı tarihte yürürlüğe girer. Politikadaki önemli değişiklikler 
                          hakkında sizi bilgilendireceğiz.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          İletişim
                        </h4>
                        <p>
                          Gizlilik politikamızla ilgili sorularınız veya talepleriniz için bize 
                          <a href="mailto:info@tunamedical.com.tr" className="text-green-600 hover:text-green-700 font-medium">
                            {" "}info@tunamedical.com.tr{" "}
                          </a>
                          e-posta adresi üzerinden ulaşabilirsiniz.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Last Updated */}
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Son Güncellenme:</strong> {new Date().toLocaleDateString('tr-TR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
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
