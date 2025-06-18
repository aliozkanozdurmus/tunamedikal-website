"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react" // ChevronUp eklendi
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ProductDetailPage } from "@/components/product-detail-page"
import { categories, products, getProductById, getProductsByCategory } from "@/lib/product-data"
import { toTitleCase } from "@/lib/utils"

const INITIAL_VISIBLE_PRODUCTS = 3

export function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [visibleProductCount, setVisibleProductCount] = useState(INITIAL_VISIBLE_PRODUCTS)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
    setVisibleProductCount(INITIAL_VISIBLE_PRODUCTS)
  }

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)
  }

  const handleCloseProductDetail = () => {
    setSelectedProduct(null)
  }

  const handleShowMoreProducts = () => {
    setVisibleProductCount((prevCount) => Math.min(prevCount + 3, searchedProducts.length))
  }

  const handleShowLessProducts = () => {
    setVisibleProductCount((prevCount) => Math.max(prevCount - 3, INITIAL_VISIBLE_PRODUCTS))
  }

  useEffect(() => {
    setVisibleProductCount(INITIAL_VISIBLE_PRODUCTS)
  }, [searchQuery, selectedCategory])

  const filteredProducts = selectedCategory ? getProductsByCategory(selectedCategory) : products

  const searchedProducts = searchQuery
    ? filteredProducts.filter(
        (product) =>
          toTitleCase(product.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.category && toTitleCase(product.category).toLowerCase().includes(searchQuery.toLowerCase())) ||
          (product.subcategory && toTitleCase(product.subcategory).toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : filteredProducts

  const productsToDisplay = searchedProducts.slice(0, visibleProductCount)
  const canShowMore = visibleProductCount < searchedProducts.length
  const canShowLess = visibleProductCount > INITIAL_VISIBLE_PRODUCTS

  const selectedProductData = selectedProduct ? getProductById(selectedProduct) : null

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

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f4f7f4_1px,transparent_1px),linear-gradient(to_bottom,#f4f7f4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-green-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
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
            Ürünlerimiz
          </motion.span>

          <h2 className="section-title gradient-text">Tıbbi Ekipman & Malzemeler</h2>
          <p className="section-subtitle">
            Sağlık profesyonelleri için tasarlanmış yüksek kaliteli tıbbi ürünlerin kapsamlı koleksiyonunu keşfedin.
          </p>
        </motion.div>

        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Ürün ara..."
              className="pl-10 glass-card border-0 text-gray-700 placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="btn-glass border-2 border-green-200 text-green-700 hover:bg-green-50 w-full md:w-auto"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 h-4 w-4" /> Filtreler <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 overflow-hidden"
            >
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-medium mb-4 gradient-text-green">Kategoriye Göre Filtrele</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={
                        selectedCategory === category.id
                          ? "btn-green-gradient"
                          : "btn-glass border-green-200 text-green-700 hover:bg-green-50"
                      }
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {toTitleCase(category.name)}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories - Görseller kaldırıldı */}
        {!selectedCategory && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" // lg:grid-cols-4'ten 3'e düşürüldü, daha iyi görünebilir
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={item}>
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-500 border-0 glass-card overflow-hidden group cursor-pointer flex flex-col" // flex flex-col eklendi
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {/* Kategori görseli kaldırıldı */}
                  <CardContent className="p-6 flex flex-col items-center text-center relative flex-grow">
                    {" "}
                    {/* flex-grow eklendi */}
                    <h3 className="text-xl font-bold mb-2 relative z-10 gradient-text-green">
                      {toTitleCase(category.name)}
                    </h3>
                    <p className="text-gray-600 relative z-10 text-sm">{category.description}</p>{" "}
                    {/* text-sm eklendi */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Products */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
              <motion.div key={product.id} variants={item}>
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer border-0 glass-card"
                  onClick={() => handleProductClick(product.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                        {toTitleCase(product.category)}
                      </Badge>
                      {product.subcategory && (
                        <div className="text-xs text-gray-500">{toTitleCase(product.subcategory)}</div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">
                      {toTitleCase(product.name)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-end mt-4">
                      <Button
                        size="sm"
                        className="btn-green-gradient rounded-full px-6"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProductClick(product.id)
                        }}
                      >
                        Detayları Gör
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ürün bulunamadı</h3>
              <p className="text-gray-600">Arama veya filtre kriterlerinizi ayarlamayı deneyin</p>
            </div>
          )}
        </motion.div>

        {/* Show More / Show Less Buttons */}
        {(canShowMore || canShowLess) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-12 flex justify-center gap-4"
          >
            {canShowLess && (
              <Button
                onClick={handleShowLessProducts}
                variant="outline"
                className="btn-glass border-2 border-green-200 text-green-700 hover:bg-green-50 rounded-full px-8 py-3 text-lg font-semibold group"
              >
                Daha azını göster
                <ChevronUp className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              </Button>
            )}
            {canShowMore && (
              <Button
                onClick={handleShowMoreProducts}
                className="btn-green-gradient rounded-full px-8 py-3 text-lg font-semibold group"
              >
                Daha fazlasını göster
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            )}
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && selectedProductData && (
          <ProductDetailPage product={selectedProductData} onClose={handleCloseProductDetail} />
        )}
      </AnimatePresence>
    </section>
  )
}
