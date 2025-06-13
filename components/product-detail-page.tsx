"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
  Share2,
  ShoppingCart,
  Star,
  StarHalf,
  Check,
  Info,
  Truck,
  Shield,
  RefreshCw,
  HeartPulse,
  Monitor,
  Wifi,
  Battery,
  Bell,
  TrendingUp,
  Activity,
  Zap,
  Save,
  Camera,
  Maximize,
  Move,
  Sun,
  MessageCircle,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Product, ProductVariant } from "@/lib/product-data"

interface ProductDetailPageProps {
  product: Product
  onClose: () => void
}

export function ProductDetailPage({ product, onClose }: ProductDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("overview")

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "heart-pulse":
        return <HeartPulse className="h-6 w-6" />
      case "monitor":
        return <Monitor className="h-6 w-6" />
      case "wifi":
        return <Wifi className="h-6 w-6" />
      case "battery":
        return <Battery className="h-6 w-6" />
      case "bell":
        return <Bell className="h-6 w-6" />
      case "trending-up":
        return <TrendingUp className="h-6 w-6" />
      case "activity":
        return <Activity className="h-6 w-6" />
      case "zap":
        return <Zap className="h-6 w-6" />
      case "save":
        return <Save className="h-6 w-6" />
      case "camera":
        return <Camera className="h-6 w-6" />
      case "maximize":
        return <Maximize className="h-6 w-6" />
      case "move":
        return <Move className="h-6 w-6" />
      case "sun":
        return <Sun className="h-6 w-6" />
      default:
        return <Info className="h-6 w-6" />
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

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />)
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-gray-300" aria-hidden="true" />)
    }

    return stars
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-7xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
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
                <Link href="#" className="text-sage-600 hover:text-sage-800">
                  Products
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                <Link href="#" className="text-sage-600 hover:text-sage-800">
                  {product.category}
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                <span className="text-gray-600">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200">
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
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Fullscreen button */}
                <button
                  onClick={toggleFullScreen}
                  className="absolute bottom-4 right-4 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize className="h-5 w-5" />
                </button>

                {/* New badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-leaf-500 hover:bg-leaf-600">New</Badge>
                  </div>
                )}
              </div>

              {/* Thumbnail gallery */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? "border-sage-600" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
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
                  <Badge variant="outline" className="text-sage-600 border-sage-200 bg-sage-50">
                    {product.category}
                  </Badge>
                  {product.subcategory && (
                    <Badge variant="outline" className="text-mint-600 border-mint-200 bg-mint-50">
                      {product.subcategory}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center mt-2 mb-4">
                  <div className="flex items-center">{renderStars(product.rating)}</div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Price and variants */}
              <div className="space-y-4 border-t border-b border-gray-200 py-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">${selectedVariant.price.toLocaleString()}</span>
                  {selectedVariant.compareAtPrice && (
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${selectedVariant.compareAtPrice.toLocaleString()}
                    </span>
                  )}
                  {selectedVariant.compareAtPrice && (
                    <span className="ml-2 text-sm font-medium text-green-600">
                      Save ${(selectedVariant.compareAtPrice - selectedVariant.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Variant selection */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => handleVariantChange(variant)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          selectedVariant.id === variant.id
                            ? "bg-sage-600 text-white"
                            : "bg-sage-100 text-sage-800 hover:bg-sage-200"
                        } ${!variant.inStock ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!variant.inStock}
                      >
                        {variant.name}
                        {!variant.inStock && " (Out of Stock)"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity selector */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                      aria-label="Decrease quantity"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <Input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-16 text-center rounded-none border-y border-gray-300"
                    />
                    <button
                      onClick={incrementQuantity}
                      className="p-2 rounded-r-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                      aria-label="Increase quantity"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center">
                  {selectedVariant.inStock ? (
                    <>
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">In Stock</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-red-600 font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <Button className="flex-1 bg-sage-600 hover:bg-sage-700 text-white" disabled={!selectedVariant.inStock}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 border-sage-600 text-sage-600 hover:bg-sage-50">
                  <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-sage-600 hover:bg-sage-50">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>

              {/* Shipping and returns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-sage-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">Free Shipping</h3>
                    <p className="text-xs text-gray-500">On orders over $1000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-sage-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">2-Year Warranty</h3>
                    <p className="text-xs text-gray-500">Full coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RefreshCw className="h-5 w-5 text-sage-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">30-Day Returns</h3>
                    <p className="text-xs text-gray-500">Hassle-free returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="mt-12">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-sage-100">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-sage-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-sage-600 data-[state=active]:text-white"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger value="specs" className="data-[state=active]:bg-sage-600 data-[state=active]:text-white">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-sage-600 data-[state=active]:text-white">
                  Reviews ({product.reviewCount})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-6">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line text-gray-700">{product.longDescription}</p>
                </div>
              </TabsContent>

              <TabsContent value="features" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg border border-gray-100 hover:border-sage-100 hover:bg-sage-50/30 transition-colors"
                    >
                      <div className="mr-4 rounded-full bg-sage-100 p-3 text-sage-600">
                        {getIconComponent(feature.icon)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specs" className="pt-6">
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-sage-50" : "bg-white"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-8">
                  {/* Review summary */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-sage-50 p-6 rounded-lg text-center md:w-1/3">
                      <div className="text-5xl font-bold text-sage-700 mb-2">{product.rating.toFixed(1)}</div>
                      <div className="flex justify-center mb-2">{renderStars(product.rating)}</div>
                      <p className="text-gray-600">Based on {product.reviewCount} reviews</p>
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>

                      {/* Review list */}
                      <div className="space-y-6">
                        {product.reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{review.author}</h4>
                                <div className="flex items-center mt-1">
                                  <div className="flex">{renderStars(review.rating)}</div>
                                  <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="mt-3 text-gray-700">{review.comment}</p>
                            <div className="mt-3 flex items-center">
                              <button className="flex items-center text-sm text-gray-500 hover:text-sage-600">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Helpful ({review.helpful})
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Write a review */}
                      <div className="mt-8 bg-sage-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium mb-4">Write a Review</h3>
                        <form className="space-y-4">
                          <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                              Rating
                            </label>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button key={star} type="button" className="text-gray-300 hover:text-yellow-400">
                                  <Star className="h-6 w-6" />
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Name
                            </label>
                            <Input id="name" placeholder="Your name" />
                          </div>
                          <div>
                            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                              Review
                            </label>
                            <Textarea id="review" placeholder="Write your review here..." rows={4} />
                          </div>
                          <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                            <MessageCircle className="mr-2 h-4 w-4" /> Submit Review
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
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
              aria-label="Exit fullscreen"
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
                  aria-label={`Image ${index + 1}`}
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
                aria-label="Previous image"
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
                aria-label="Next image"
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
