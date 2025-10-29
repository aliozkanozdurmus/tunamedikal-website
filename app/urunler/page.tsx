"use client";

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Search, Filter, Star, ShoppingCart, Heart, Package, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Urunler() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
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

  const categories = [
    { id: "all", name: "Tüm Ürünler", icon: <Package className="w-5 h-5" /> },
    { id: "respiratory", name: "Solunum Cihazları", icon: <Package className="w-5 h-5" /> },
    { id: "monitoring", name: "Monitörler", icon: <Package className="w-5 h-5" /> },
    { id: "emergency", name: "Acil Tıp", icon: <Package className="w-5 h-5" /> },
    { id: "surgical", name: "Cerrahi Ekipmanlar", icon: <Package className="w-5 h-5" /> }
  ]

  const products = [
    {
      id: 1,
      name: "Nebulizer Maske",
      category: "respiratory",
      price: "₺450",
      image: "/images/nebulizer-mask.jpg",
      description: "Yüksek kaliteli nebulizer maske, konforlu kullanım",
      features: ["Steril", "Tek kullanımlık", "Yüksek verimlilik"]
    },
    {
      id: 2,
      name: "Oksijen Maskesi",
      category: "respiratory",
      price: "₺320",
      image: "/images/oxygen-mask.jpg",
      description: "Güvenilir oksijen tedavisi için ideal çözüm",
      features: ["Hasta dostu", "Ayarlanabilir", "Tıkanıklık yok"]
    },
    {
      id: 3,
      name: "Nazal Kanül",
      category: "respiratory",
      price: "₺180",
      image: "/images/nasal-cannula.jpg",
      description: "Rahat nazal oksijen uygulaması",
      features: ["Yumuşak malzeme", "Uzun kullanım", "Deri dostu"]
    },
    {
      id: 4,
      name: "Hasta Monitörü",
      category: "monitoring",
      price: "₺12,500",
      image: "/placeholder.jpg",
      description: "Çok fonksiyonlu hasta monitör sistemi",
      features: ["7\" ekran", "Wireless", "Alarm sistemi"]
    },
    {
      id: 5,
      name: "Defibrilatör",
      category: "emergency",
      image: "/placeholder.jpg",
      description: "Profesyonel acil müdahale cihazı",
      features: ["Otomatik", "Taşınabilir", "Hızlı"]
    },
    {
      id: 6,
      name: "Cerrahi Set",
      category: "surgical",
      image: "/placeholder.jpg",
      description: "Kapsamlı cerrahi alet seti",
      features: ["Stainless steel", "Steril", "30 parça"]
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
                Ürünlerimiz
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Sağlık sektörüne yönelik yenilikçi ve kaliteli medikal ürünler
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? "bg-green-600 hover:bg-green-700"
                        : "border-green-600 text-green-600 hover:bg-green-50"
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Kalite Garantisi</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Tüm ürünler CE belgelidir</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                <Truck className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Hızlı Teslimat</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">24 saat içinde kargo</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                <Package className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Geniş Ürün Yelpazesi</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">500+ medikal ürün</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">98% memnuniyet oranı</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>



                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Aradığınız kriterlere uygun ürün bulunamadı.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
