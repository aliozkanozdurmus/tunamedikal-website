"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/product-data"

interface ProductDetailPageProps {
  product: Product
  onClose: () => void
}

export function ProductDetailPage({ product, onClose }: ProductDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

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
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 lg:p-8">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="#" className="text-green-600 hover:text-green-800">
                  Ürünler
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-400 mx-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 01.97-1.13l4.753 4.873a.75.75 0 010 1.06l-4.753 4.874a.75.75 0 01-.998.08z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="#" className="text-green-600 hover:text-green-800">
                  {product.category}
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-400 mx-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 01.97-1.13l4.753 4.873a.75.75 0 010 1.06l-4.753 4.874a.75.75 0 01-.998.08z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-8">
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    {product.category}
                  </Badge>
                  {product.subcategory && (
                    <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                      {product.subcategory}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gray-600 mt-4">{product.description}</p>
              </div>

              {/* Product Overview */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 gradient-text">Ürün Açıklaması</h3>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line text-gray-700">{product.longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
