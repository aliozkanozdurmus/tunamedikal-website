"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function DoctorsTeam() {
  const doctors = [
    {
      name: "Dr. Ahmet Yılmaz",
      role: "Tıbbi Direktör",
      specialty: "Kardiyoloji",
      image: "/images/doctors/ahmet-yilmaz.jpg",
      bio: "Dr. Yılmaz, kardiyoloji ve tıbbi tanı alanında 20 yılı aşkın deneyime sahiptir.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Ayşe Kaya",
      role: "Laboratuvar Direktörü",
      specialty: "Patoloji",
      image: "/images/doctors/ayse-kaya.jpg",
      bio: "Dr. Kaya, yenilikçi tanı teknikleri odaklı patoloji alanında uzmanlaşmıştır.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Mehmet Demir",
      role: "Kıdemli Uzman",
      specialty: "Radyoloji",
      image: "/images/doctors/mehmet-demir.jpg",
      bio: "Dr. Demir, ileri görüntüleme ve tanısal radyoloji konusunda uzmandır.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Zeynep Şahin",
      role: "Tıbbi Danışman",
      specialty: "İç Hastalıkları",
      image: "/images/doctors/zeynep-sahin.jpg",
      bio: "Dr. Şahin, karmaşık vakalar için kapsamlı bakım ve tanı danışmanlığı sağlar.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
      },
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
    <section
      id="doctors"
      className="section-padding bg-gradient-to-b from-white to-medical-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-medical-400 to-transparent blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -left-40 bottom-40 h-[300px] w-[300px] rounded-full bg-gradient-radial from-medical-500 to-transparent blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
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
            Uzman Ekibimiz
          </motion.span>

          <h2 className="section-title">
            Uzman <span className="gradient-text">Doktorlarımız</span>
          </h2>
          <p className="section-subtitle">
            En yüksek kalitede bakım sunmaya adanmış deneyimli tıp uzmanları ekibimizle tanışın.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 gradient-border bg-white">
                <motion.div
                  className="relative h-80 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-medical-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-4">{doctor.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{doctor.bio}</p>
                  <div className="flex space-x-3">
                    {Object.entries(doctor.social).map(([platform, url], i) => (
                      <motion.a
                        key={platform}
                        href={url}
                        className="text-gray-400 hover:text-medical-600 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {platform === "twitter" && <Twitter className="h-5 w-5" />}
                        {platform === "facebook" && <Facebook className="h-5 w-5" />}
                        {platform === "linkedin" && <Linkedin className="h-5 w-5" />}
                        {platform === "instagram" && <Instagram className="h-5 w-5" />}
                        <span className="sr-only">{platform}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
