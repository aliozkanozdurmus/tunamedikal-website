"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Geçici test için her zaman göster
    setVisible(true);
    
    // Orijinal kod:
    // try {
    //   const hasConsent = localStorage.getItem("cookie-consent");
    //   if (!hasConsent) {
    //     setVisible(true);
    //   }
    // } catch {
    //   setVisible(true);
    // }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookie-consent", "true");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 text-white z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-sm">
          Çerezleri kullanıyoruz. Deneyiminizi geliştirmek için bu site çerezleri kullanır.
        </span>
        <button
          onClick={accept}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
