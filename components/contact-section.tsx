"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
    const contactDetails = [
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Telefon",
            value: "+90 342 360 9850",
            link: "tel:+903423609850"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "E-posta",
            value: "info@tunamedical.com.tr",
            link: "mailto:info@tunamedical.com.tr"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Adres",
            value: "Gaziantep, Türkiye",
            link: "https://goo.gl/maps/5D5w8ZpWz9D2"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Mesai",
            value: "09:00 - 18:00",
            link: null
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Organic Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-sand-100 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-sage-50 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-5xl font-bold text-sage-950 mb-3 tracking-tight"
                        >
                            Bize Ulaşın
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xs md:text-gray-500 max-w-2xl mx-auto font-light px-4"
                        >
                            Her türlü soru ve talebiniz için profesyonel ekibimiz çözüm ortağınız olmaya hazır.
                        </motion.p>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                        {contactDetails.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 md:p-8 bg-white/50 backdrop-blur-sm border border-sage-100/50 rounded-2xl md:rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-sage-900/5 transition-all duration-500"
                            >
                                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-sand-50 rounded-lg text-sage-600 mb-4 md:mb-6 transition-colors group-hover:bg-sage-900 group-hover:text-white">
                                    {item.icon}
                                </div>
                                <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1 md:mb-2">
                                    {item.title}
                                </p>
                                {item.link ? (
                                    <a href={item.link} className="text-sm md:text-base font-semibold text-sage-900 hover:text-sage-600 transition-colors block leading-snug">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-sm md:text-base font-semibold text-sage-900 leading-snug">
                                        {item.value}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Map - Significant height reduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-[21/5] md:aspect-[21/6] min-h-[180px] md:min-h-[280px] bg-sand-50 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sage-900/10 border border-white"
                    >
                        {/* Grayscale overlay that fades on hover */}
                        <div className="absolute inset-0 z-10 pointer-events-none bg-sage-900/5 mix-blend-saturation group-hover:opacity-0 transition-opacity duration-1000" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50860.461246076185!2d37.2818771!3d37.1817268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e0!3m2!1str!2str!4v1761761685456!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tuna Medikal Konum"
                            className="grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
