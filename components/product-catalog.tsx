"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  categories,
  products,
  type Product,
  type Category,
  getCategoryById,
  getSubcategoryName,
} from "@/lib/product-data"
import { toTitleCase } from "@/lib/utils"
import { ChevronDown, ChevronUp, Search, XCircle, Filter } from "lucide-react"
// Changed import to named import and aliased
import { ProductDetailPage as ProductDetailModal } from "./product-detail-page"

const INITIAL_VISIBLE_PRODUCTS = 3
const PRODUCTS_TO_SHOW_INCREMENT = 3

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [visibleProductCount, setVisibleProductCount] = useState(INITIAL_VISIBLE_PRODUCTS)
  // Removed isModalOpen state, selectedProductForModal will control rendering
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProductForModal(product)
    // No need to set isModalOpen anymore
  }

  const closeModal = () => {
    setSelectedProductForModal(null)
    // No need to set isModalOpen anymore
  }

  const filteredProducts = useMemo(() => {
    let tempProducts = products

    if (selectedCategory) {
      tempProducts = tempProducts.filter((product) => product.category === selectedCategory.name)
      if (selectedSubcategory) {
        const subcatName = getSubcategoryName(selectedSubcategory)
        tempProducts = tempProducts.filter((product) => product.subcategory === subcatName)
      }
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter(
        (product) =>
          toTitleCase(product.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }
    return tempProducts
  }, [searchTerm, selectedCategory, selectedSubcategory])

  useEffect(() => {
    setVisibleProductCount(INITIAL_VISIBLE_PRODUCTS)
  }, [filteredProducts, selectedCategory, selectedSubcategory])

  const handleCategoryClick = (category: Category | null) => {
    setSelectedCategory(category)
    setSelectedSubcategory(null)
    setSearchTerm("")
    setVisibleProductCount(INITIAL_VISIBLE_PRODUCTS)
  }

  const handleSubcategoryClick = (subcategoryId: string | null) => {
    setSelectedSubcategory(subcategoryId)
    setVisibleProductCount(INITIAL_VISIBLE_PRODUCTS)
  }

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
    <section id="urunler" className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
            {selectedCategory ? toTitleCase(selectedCategory.name) : "Ürün Kategorileri"}
          </h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Ürün veya kategori ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setSearchTerm("")}
                >
                  <XCircle className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <Filter className="h-5 w-5 mr-2" />
              Filtreler
            </Button>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Kategoriler</h3>
            <Select
              onValueChange={(value) => {
                if (value === "all") {
                  handleCategoryClick(null)
                } else {
                  const cat = getCategoryById(value)
                  if (cat) handleCategoryClick(cat)
                }
              }}
              value={selectedCategory?.id || "all"}
            >
              <SelectTrigger>
                <SelectValue placeholder="Kategori Seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Kategoriler</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {toTitleCase(cat.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedCategory && selectedCategory.subcategories && (
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Alt Kategoriler</h4>
                <Select
                  onValueChange={(value) => handleSubcategoryClick(value === "all" ? null : value)}
                  value={selectedSubcategory || "all"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Alt Kategori Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm Alt Kategoriler</SelectItem>
                    {selectedCategory.subcategories.map((subcat) => (
                      <SelectItem key={subcat.id} value={subcat.id}>
                        {toTitleCase(subcat.name)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Desktop Filters - Sidebar */}
          <div className="hidden md:block md:col-span-3 lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant={!selectedCategory ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleCategoryClick(null)}
                >
                  Tüm Ürünler
                </Button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Button
                    variant={selectedCategory?.id === cat.id ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {toTitleCase(cat.name)}
                  </Button>
                  {selectedCategory?.id === cat.id && cat.subcategories && (
                    <ul className="pl-4 mt-2 space-y-1 border-l border-gray-200 dark:border-gray-700">
                      <li>
                        <Button
                          variant={!selectedSubcategory ? "link" : "ghost"}
                          size="sm"
                          className={`w-full justify-start text-xs ${!selectedSubcategory ? "font-semibold text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                          onClick={() => handleSubcategoryClick(null)}
                        >
                          Tümü ({selectedCategory.name})
                        </Button>
                      </li>
                      {cat.subcategories.map((subcat) => (
                        <li key={subcat.id}>
                          <Button
                            variant={selectedSubcategory === subcat.id ? "link" : "ghost"}
                            size="sm"
                            className={`w-full justify-start text-xs ${selectedSubcategory === subcat.id ? "font-semibold text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                            onClick={() => handleSubcategoryClick(subcat.id)}
                          >
                            {toTitleCase(subcat.name)}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Listing */}
          <div className="md:col-span-9 lg:col-span-10">
            {selectedCategory === null && !searchTerm ? (
              // Category Grid
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {categories.map((category) => (
                  <Card
                    key={category.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold group-hover:text-blue-600">
                        {toTitleCase(category.name)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              // Product Grid
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold group-hover:text-blue-600">
                          {toTitleCase(product.name)}
                        </CardTitle>
                        {product.subcategory && (
                          <CardDescription className="text-xs text-blue-500 dark:text-blue-400">
                            {toTitleCase(product.subcategory)}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {(canShowMore || canShowLess) && (
                  <div className="mt-8 flex justify-center gap-4">
                    {canShowLess && (
                      <Button variant="outline" onClick={handleShowLessProducts}>
                        <ChevronUp className="mr-2 h-4 w-4" /> Daha Azını Göster
                      </Button>
                    )}
                    {canShowMore && (
                      <Button onClick={handleShowMoreProducts}>
                        <ChevronDown className="mr-2 h-4 w-4" /> Daha Fazlasını Göster
                      </Button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-xl text-gray-600 dark:text-gray-300">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Farklı bir kategori seçmeyi veya arama terimini değiştirmeyi deneyin.
                </p>
                {selectedCategory && (
                  <Button onClick={() => handleCategoryClick(null)} className="mt-6">
                    Tüm Kategorilere Dön
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedProductForModal && <ProductDetailModal product={selectedProductForModal} onClose={closeModal} />}
    </section>
  )
}
