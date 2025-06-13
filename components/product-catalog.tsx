"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Search, Filter, ChevronDown, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ProductDetailPage } from "@/components/product-detail-page"
import { categories, products, getProductById, getProductsByCategory } from "@/lib/product-data"

export function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
  }

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)
  }

  const handleCloseProductDetail = () => {
    setSelectedProduct(null)
  }

  const filteredProducts = selectedCategory ? getProductsByCategory(selectedCategory) : products

  const searchedProducts = searchQuery
    ? filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredProducts

  const selectedProductData = selectedProduct ? getProductById(selectedProduct) : null

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half-star" className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />)
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-gray-300" aria-hidden="true" />)
    }

    return stars
  }

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
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f4f7f4_1px,transparent_1px),linear-gradient(to_bottom,#f4f7f4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sage-300 to-transparent blur-3xl -z-5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-radial from-mint-400 to-transparent blur-3xl -z-5"
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
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-sage-50 text-sage-600 border border-sage-100"
          >
            Our Products
          </motion.span>

          <h2 className="section-title">
            <span className="gradient-text">Medical</span> Equipment & Supplies
          </h2>
          <p className="section-subtitle">
            Browse our comprehensive range of high-quality medical products designed for healthcare professionals.
          </p>
        </motion.div>

        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="border-sage-600 text-sage-600 hover:bg-sage-50 w-full md:w-auto"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 h-4 w-4" /> Filters <ChevronDown className="ml-2 h-4 w-4" />
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
              <div className="bg-sage-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={
                        selectedCategory === category.id
                          ? "bg-sage-600 hover:bg-sage-700 text-white"
                          : "border-sage-600 text-sage-600 hover:bg-sage-50"
                      }
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories */}
        {!selectedCategory && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={item}>
                <Card
                  className="h-full hover:shadow-xl transition-all duration-500 border-t-4 border-t-sage-500 overflow-hidden group cursor-pointer"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-white font-medium text-lg">{category.name}</span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col items-center text-center relative">
                    <h3 className="text-xl font-bold mb-2 relative z-10">{category.name}</h3>
                    <p className="text-gray-600 relative z-10">{category.description}</p>

                    {/* Background gradient that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-sage-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
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
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <Card
                  className="h-full hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-leaf-500 hover:bg-leaf-600">New</Badge>
                      </div>
                    )}
                    {product.variants[0].compareAtPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-sage-600 border-sage-200 bg-sage-50">
                        {product.category}
                      </Badge>
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                        <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-sage-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          ${product.variants[0].price.toLocaleString()}
                        </span>
                        {product.variants[0].compareAtPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${product.variants[0].compareAtPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-sage-600 hover:bg-sage-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProductClick(product.id)
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>
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
