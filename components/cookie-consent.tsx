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
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-white/80 backdrop-blur-md text-sage-950 z-50 p-6 shadow-2xl shadow-sage-900/10 border border-sage-100 rounded-2xl">
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-tight">Çerez Politikası</p>
          <p className="text-xs text-gray-500 leading-relaxed font-light">
            Size daha iyi bir deneyim sunabilmek için sitemizde çerezler kullanılmaktadır. Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş sayılırsınız.
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={accept}
            className="bg-sage-900 hover:bg-sage-950 text-white text-[11px] font-bold tracking-[0.1em] px-6 py-2.5 uppercase transition-all duration-300"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
