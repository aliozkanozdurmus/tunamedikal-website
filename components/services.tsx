"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Stethoscope, Microscope, Syringe, Thermometer, Clipboard, Truck, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ProductDetail } from "@/components/product-detail"
import { products, getProductsByCategory } from "@/lib/product-data"

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const services = [
    {
      title: "Kardiyovasküler Ürünler",
      description: "Kalp ve damar sağlığı için yüksek kaliteli tanı ve tedavi ekipmanları.",
      icon: <Heart className="h-10 w-10" />,
    },
    {
      title: "Tanı Ekipmanları",
      description: "Doğru ve hızlı tanı için modern ve güvenilir tıbbi cihazlar.",
      icon: <Stethoscope className="h-10 w-10" />,
    },
    {
      title: "Laboratuvar Malzemeleri",
      description: "Hassas ve güvenilir test sonuçları için kaliteli laboratuvar ürünleri.",
      icon: <Microscope className="h-10 w-10" />,
    },
    {
      title: "Tek Kullanımlık Ürünler",
      description: "Enfeksiyon kontrolü ve hasta güvenliği için steril tek kullanımlık malzemeler.",
      icon: <Syringe className="h-10 w-10" />,
    },
    {
      title: "Hasta İzleme Sistemleri",
      description: "Hasta sağlığını sürekli takip etmek için gelişmiş izleme cihazları.",
      icon: <Thermometer className="h-10 w-10" />,
    },
    {
      title: "Özel Üretim Çözümleri",
      description: "Sağlık kurumlarının özel ihtiyaçlarına yönelik özelleştirilmiş ürünler.",
      icon: <Clipboard className="h-10 w-10" />,
    },
    {
      title: "Tedarik Zinciri Yönetimi",
      description: "Kesintisiz malzeme tedariki için entegre lojistik çözümleri.",
      icon: <Truck className="h-10 w-10" />,
    },
    {
      title: "Kalite Güvence Hizmetleri",
      description: "Tüm ürünlerimiz için kapsamlı kalite kontrol ve sertifikasyon.",
      icon: <Shield className="h-10 w-10" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)

    // Eğer seçilen kategoride ürün varsa, ilk ürünü göster
    const categoryProducts = getProductsByCategory(category)
    if (categoryProducts.length > 0) {
      setSelectedProduct(categoryProducts[0].id)
    } else {
      setSelectedProduct(null)
    }
  }

  const handleCloseProductDetail = () => {
    setSelectedProduct(null)
  }

  const selectedProductData = products.find((p) => p.id === selectedProduct)

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl -z-5"
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
            Ürün ve Hizmetlerimiz
          </motion.span>

          <h2 className="section-title gradient-text">Ürün Kategorilerimiz</h2>
          <p className="section-subtitle">
            Sağlık sektörünün tüm ihtiyaçlarını karşılamak için geniş bir ürün ve hizmet yelpazesi sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className="h-full hover:shadow-xl transition-all duration-500 border-t-4 border-t-medical-500 overflow-hidden group cursor-pointer"
                onClick={() => handleCategoryClick(service.title)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center relative">
                  <motion.div
                    className="text-medical-600 mb-4 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">{service.title}</h3>
                  <p className="text-gray-600 relative z-10">{service.description}</p>

                  {/* Background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-medical-50 to-medical-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && selectedProductData && (
          <ProductDetail product={selectedProductData} onClose={handleCloseProductDetail} />
        )}
      </AnimatePresence>
    </section>
  )
}
