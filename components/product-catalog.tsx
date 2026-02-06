"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products, type Product } from "@/lib/product-data"
import { toTitleCase } from "@/lib/utils"
import { ChevronDown, ChevronUp, Search, XCircle, Info } from "lucide-react"
import { ProductDetailPage as ProductDetailModal } from "./product-detail-page"

const INITIAL_VISIBLE_PRODUCTS = 4
const PRODUCTS_TO_SHOW_INCREMENT = 4

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleProductCount, setVisibleProductCount] = useState(INITIAL_VISIBLE_PRODUCTS)
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProductForModal(product)
  }

  const closeModal = () => {
    setSelectedProductForModal(null)
  }

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products
    const term = searchTerm.toLowerCase()
    return products.filter(
      (product) =>
        toTitleCase(product.name).toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.refNumber?.toLowerCase().includes(term)
    )
  }, [searchTerm])

  useEffect(() => {
    setVisibleProductCount(INITIAL_VISIBLE_PRODUCTS)
  }, [filteredProducts])

  const handleShowMoreProducts = () => {
    setVisibleProductCount((prevCount) => Math.min(prevCount + PRODUCTS_TO_SHOW_INCREMENT, filteredProducts.length))
  }

  const handleShowLessProducts = () => {
    setVisibleProductCount((prevCount) => Math.max(prevCount - PRODUCTS_TO_SHOW_INCREMENT, INITIAL_VISIBLE_PRODUCTS))
  }

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleProductCount)
  }, [filteredProducts, visibleProductCount])

  const canShowMore = visibleProductCount < filteredProducts.length
  const canShowLess = visibleProductCount > INITIAL_VISIBLE_PRODUCTS

  return (
    <section id="urunler" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-sand-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.2em] text-sage-600 uppercase mb-4 block"
            >
              Ürün Kataloğu
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-sage-950 tracking-tight">Geniş Ürün <span className="text-sage-600 font-medium italic">Yelpazesi</span></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-sage-400 group-focus-within:text-sage-600 transition-colors" />
              <Input
                type="search"
                placeholder="Ürün veya kategori ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 h-14 w-full lg:w-[400px] rounded-2xl border-sage-100 bg-sand-50/50 focus:bg-white focus:ring-sage-200 transition-all font-light"
              />
              {searchTerm && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sage-400 hover:text-sage-600 transition-colors"
                  onClick={() => setSearchTerm("")}
                >
                  <XCircle className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card
                    className="group h-full bg-white border border-sage-50 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-sage-900/[0.04] transition-all duration-500 cursor-pointer flex flex-col"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-sand-50 rounded-xl group-hover:bg-sage-50 transition-colors duration-500">
                          <Info className="w-4 h-4 text-sage-600" />
                        </div>
                        {product.refNumber && (
                          <span className="text-[10px] font-bold tracking-widest text-sage-400 uppercase">REF: {product.refNumber}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-sage-950 mb-3 leading-tight group-hover:text-sage-600 transition-colors">
                        {toTitleCase(product.name)}
                      </h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                    <div className="px-8 pb-8 pt-2">
                      <div className="h-[1px] w-full bg-sage-50 mb-4" />
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-widest text-sage-400 uppercase">
                          {product.boxQuantity ? `${product.boxQuantity} Adet / Kutu` : "Standart Ölçü"}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <div className="inline-block p-6 bg-sand-50 rounded-full mb-6">
                <Search className="h-10 w-10 text-sage-300" />
              </div>
              <p className="text-xl text-sage-900 font-bold mb-2">Ürün Bulunamadı</p>
              <p className="text-gray-400 font-light max-w-sm mx-auto">Aradığınız kriterlere uygun bir ürün bulunamadı. Lütfen başka bir terim deneyin.</p>
            </motion.div>
          )}

          {(canShowMore || canShowLess) && (
            <div className="flex justify-center gap-4 pt-12">
              {canShowLess && (
                <Button
                  variant="outline"
                  onClick={handleShowLessProducts}
                  className="rounded-full px-8 h-14 border-sage-100 text-sage-600 hover:bg-sand-50 transition-all font-bold tracking-widest uppercase text-xs"
                >
                  <ChevronUp className="mr-2 h-4 w-4" /> Daha Az
                </Button>
              )}
              {canShowMore && (
                <Button
                  onClick={handleShowMoreProducts}
                  className="bg-sage-900 hover:bg-sage-950 text-white rounded-full px-10 h-14 font-bold tracking-widest uppercase text-xs transition-all shadow-xl shadow-sage-900/10"
                >
                  Tüm Ürünleri Gör <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      {selectedProductForModal && <ProductDetailModal product={selectedProductForModal} onClose={closeModal} />}
    </section>
  )
}
