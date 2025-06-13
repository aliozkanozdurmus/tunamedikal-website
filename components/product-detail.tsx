"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
  Monitor,
  Wifi,
  Battery,
  Search,
  Camera,
  Save,
  Zap,
  Activity,
  FileText,
  Download,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/product-data"

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <Heart className="h-6 w-6" />
      case "monitor":
        return <Monitor className="h-6 w-6" />
      case "wifi":
        return <Wifi className="h-6 w-6" />
      case "battery":
        return <Battery className="h-6 w-6" />
      case "search":
        return <Search className="h-6 w-6" />
      case "camera":
        return <Camera className="h-6 w-6" />
      case "save":
        return <Save className="h-6 w-6" />
      case "zap":
        return <Zap className="h-6 w-6" />
      case "activity":
        return <Activity className="h-6 w-6" />
      default:
        return <Heart className="h-6 w-6" />
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white transition-colors"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />

              {/* Image navigation */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={prevImage}
                  className="rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white transition-colors"
                  aria-label="Önceki görsel"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white transition-colors"
                  aria-label="Sonraki görsel"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Fullscreen button */}
              <button
                onClick={toggleFullScreen}
                className="absolute bottom-4 right-4 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white transition-colors"
                aria-label="Tam ekran"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isFullScreen ? (
                    <>
                      <polyline points="4 14 10 14 10 20"></polyline>
                      <polyline points="20 10 14 10 14 4"></polyline>
                      <line x1="14" y1="10" x2="21" y2="3"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </>
                  ) : (
                    <>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Thumbnail gallery */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? "border-medical-600" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Görsel ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="text-medical-600 border-medical-200 bg-medical-50">
                  {product.category}
                </Badge>
                {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">Yeni</Badge>}
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-medical hover:shadow-lg hover:shadow-medical-500/20">Teklif İste</Button>
              <Button variant="outline" className="border-medical-600 text-medical-600 hover:bg-medical-50">
                <FileText className="mr-2 h-4 w-4" /> Broşür İndir
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-medical-600 hover:bg-medical-50">
                <Share2 className="mr-2 h-4 w-4" /> Paylaş
              </Button>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
                <TabsTrigger value="features">Özellikler</TabsTrigger>
                <TabsTrigger value="specs">Teknik Detaylar</TabsTrigger>
                <TabsTrigger value="documents">Dokümanlar</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-4">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{product.longDescription}</p>
                </div>
              </TabsContent>

              <TabsContent value="features" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg border border-gray-100 hover:border-medical-100 hover:bg-medical-50/30 transition-colors"
                    >
                      <div className="mr-4 rounded-full bg-medical-100 p-3 text-medical-600">
                        {getIconComponent(feature.icon)}
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specs" className="pt-4">
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="pt-4">
                <div className="space-y-4">
                  {product.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-medical-200 hover:bg-medical-50/30 transition-colors"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-medical-600 mr-3" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          {doc.fileSize && <p className="text-xs text-gray-500">{doc.fileSize}</p>}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-medical-600 hover:bg-medical-100">
                        <Download className="h-4 w-4 mr-1" /> İndir
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        {product.relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 p-6 lg:p-8">
            <h2 className="text-xl font-bold mb-4">İlgili Ürünler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link href={`#${relatedProduct.id}`} className="block">
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-medical-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-500">{relatedProduct.category}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Fullscreen image modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-4"
            onClick={toggleFullScreen}
          >
            <button
              onClick={toggleFullScreen}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              aria-label="Tam ekrandan çık"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-[80vh] w-full max-w-6xl">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(index)
                  }}
                  className={`h-2 w-8 rounded-full transition-all ${
                    currentImageIndex === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Görsel ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute inset-y-0 left-6 flex items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors"
                aria-label="Önceki görsel"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-6 flex items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors"
                aria-label="Sonraki görsel"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
