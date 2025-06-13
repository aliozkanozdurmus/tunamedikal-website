"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function NewsHighlights() {
  const newsPosts = [
    {
      title: "Yeni Nesil Tıbbi Cihazlarımız Piyasaya Sürüldü",
      excerpt:
        "Sağlık sektörünün ihtiyaçlarını karşılamak için tasarlanmış yeni nesil tıbbi cihazlarımız artık piyasada.",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 Haziran 2023",
      category: "Ürün Haberleri",
      comments: 8,
    },
    {
      title: "ISO 13485 Kalite Yönetim Sistemi Sertifikamızı Yeniledik",
      excerpt:
        "Tıbbi cihaz üretiminde uluslararası standartlara uygunluğumuzu belgeleyen ISO 13485 sertifikamız yenilendi.",
      image: "/placeholder.svg?height=400&width=600",
      date: "24 Mayıs 2023",
      category: "Kurumsal",
      comments: 12,
    },
    {
      title: "Sağlık Bakanlığı Onaylı Yeni Ürünlerimiz",
      excerpt: "Sağlık Bakanlığı onaylı yeni ürünlerimiz ile sağlık kurumlarının yanındayız.",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 Nisan 2023",
      category: "Ürün Haberleri",
      comments: 5,
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

  return (
    <section id="news" className="section-padding bg-white relative overflow-hidden">
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
            Haberler
          </motion.span>

          <h2 className="section-title">
            <span className="gradient-text">Son</span> Haberler
          </h2>
          <p className="section-subtitle">
            Firmamız, ürünlerimiz ve sektördeki gelişmeler hakkında en güncel haberleri takip edin.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <motion.div
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-medical-600 hover:bg-medical-700">{post.category}</Badge>
                  </div>
                </motion.div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments} yorum</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-medical-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="#"
                      className="text-medical-600 font-medium hover:text-medical-700 inline-flex items-center"
                    >
                      Devamını Oku <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="outline"
            className="border-medical-600 text-medical-600 hover:bg-medical-50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Tüm Haberleri Görüntüle
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
