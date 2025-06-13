"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MaintenancePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Pop-up'ı 1 saniye sonra göster
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-md rounded-xl bg-white/80 p-6 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute right-4 top-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Kapat</span>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="mb-2 text-xl font-bold">Bakım Sayfası</h2>
              <p className="mb-6 text-gray-600">
                Web sitemiz şu anda bakım aşamasındadır. Bazı özellikler geçici olarak kullanılamayabilir. En kısa
                sürede hizmetinize tam olarak devam edeceğiz.
              </p>
              <Button onClick={() => setIsOpen(false)}>Anladım</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
