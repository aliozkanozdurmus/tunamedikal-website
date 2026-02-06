"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white pt-32 pb-24 overflow-hidden">
      {/* High-End Sophisticated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Abstract Sophisticated Image Component */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.55] transition-transform duration-[10000ms] ease-linear overflow-hidden"
          style={{ backgroundImage: "url('/images/hero/hero-organic-03.jpeg')" }}
        />

        {/* Minimalist Multi-Tone Overlays - Simplified for visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
        <div className="absolute inset-0 bg-white/30" />

        {/* Ultra-Soft Atmospheric Glows */}
        <div className="absolute top-[-30%] right-[-10%] w-[80%] h-[80%] bg-sage-50/60 rounded-full blur-[160px] opacity-40 animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-[-20%] left-[-20%] w-[70%] h-[70%] bg-clay-50/40 rounded-full blur-[140px] opacity-30" />

        {/* Fine Grain Silk Texture */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')]" />

        {/* Floating Vertical Separation Line (Minimal Luxury Detail) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-sage-200/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Refined Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold text-sage-950 mb-8 leading-[1.1] tracking-[-0.03em]"
          >
            Geleceğin Teknolojisi,
            <br />
            <span className="text-sage-600/90 italic font-medium">Tuna Group Güvencesiyle</span>
          </motion.h1>

          {/* Minimal Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            2000 yılından bu yana sağlık teknolojilerinden endüstriyel ambalaja uzanan geniş bir alanda,
            yenilikçi ve sürdürülebilir çözümlerle değer üretiyoruz.
          </motion.p>


          {/* Stats Segmented Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-16 gap-y-10 max-w-4xl mx-auto border-t border-sage-50 pt-12"
          >
            {[
              { value: "ISO 13485", label: "Global Standart" },
              { value: "EU MDR", label: "CE Sertifikalı" },
              { value: "24 Yıl", label: "Sektörel Güven" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl font-semibold text-sage-900 mb-1 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold tracking-[0.1em] text-gray-400 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
