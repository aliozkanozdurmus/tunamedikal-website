"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products, type Product } from "@/lib/product-data"
import { toTitleCase } from "@/lib/utils"
import { ChevronDown, ChevronUp, Search, XCircle } from "lucide-react"
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
    let tempProducts = products

    if (searchTerm) {
      tempProducts = tempProducts.filter(
        (product) =>
          toTitleCase(product.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
    return tempProducts
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
    <section id="urunler" className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0 font-sans">
            Ürünlerimiz
          </h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Ürün veya kategori ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 font-sans"
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
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          <div className="w-full">
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {displayedProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold group-hover:text-blue-600 font-sans">
                          {toTitleCase(product.name)}
                        </CardTitle>
                        {product.refNumber && (
                          <CardDescription className="text-xs text-blue-500 dark:text-blue-400 font-sans">
                            REF: {product.refNumber}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 font-sans">
                          {product.description}
                        </p>
                        {product.boxQuantity && (
                          <p className="text-xs text-gray-500 mt-2 font-sans">Kutu İçi: {product.boxQuantity} adet</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {(canShowMore || canShowLess) && (
                  <div className="mt-8 flex justify-center gap-4">
                    {canShowLess && (
                      <Button variant="outline" onClick={handleShowLessProducts} className="font-sans">
                        <ChevronUp className="mr-2 h-4 w-4" /> Daha Azını Göster
                      </Button>
                    )}
                    {canShowMore && (
                      <Button onClick={handleShowMoreProducts} className="font-sans">
                        <ChevronDown className="mr-2 h-4 w-4" /> Daha Fazlasını Göster
                      </Button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-xl text-gray-600 dark:text-gray-300 font-sans">
                  Aradığınız kriterlere uygun ürün bulunamadı.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-sans">
                  Farklı bir arama terimi deneyin.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedProductForModal && <ProductDetailModal product={selectedProductForModal} onClose={closeModal} />}
    </section>
  )
}
