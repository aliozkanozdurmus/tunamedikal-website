"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react"

export function MobileFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="md:hidden bg-white border-t border-sand-100 py-10 px-6">
            <div className="flex flex-col gap-10">
                {/* Logo & Slogan */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/images/tuna-medikal-logo.png"
                        alt="Tuna Group Logo"
                        width={160}
                        height={50}
                        className="object-contain mb-4"
                    />
                    <p className="text-xs text-gray-400 font-light tracking-wide uppercase italic">
                        "Sağlıkta ve Endüstride Değer Üretiyoruz"
                    </p>
                </div>

                {/* Quick Links Group */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-sage-900 uppercase opacity-50">Menü</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/hakkimizda" className="text-sm text-sage-800 flex items-center gap-1 group">
                                <ChevronRight className="w-3 h-3 text-sage-300" /> Hakkımızda
                            </Link>
                            <Link href="/urunler" className="text-sm text-sage-800 flex items-center gap-1">
                                <ChevronRight className="w-3 h-3 text-sage-300" /> Ürünler
                            </Link>
                            <Link href="/iletisim" className="text-sm text-sage-800 flex items-center gap-1">
                                <ChevronRight className="w-3 h-3 text-sage-300" /> İletişim
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-sage-900 uppercase opacity-50">Yasal</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/gizlilik-politikasi" className="text-sm text-sage-800 flex items-center gap-1">
                                <ChevronRight className="w-3 h-3 text-sage-300" /> Gizlilik
                            </Link>
                            <Link href="/kvkk" className="text-sm text-sage-800 flex items-center gap-1">
                                <ChevronRight className="w-3 h-3 text-sage-300" /> KVKK
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Contact Info (Compact) */}
                <div className="space-y-6">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-sage-900 uppercase opacity-50 border-b border-sand-50 pb-2">İletişim</h4>
                    <div className="flex flex-col gap-4">
                        <a href="tel:+903423609850" className="flex items-center gap-4 group">
                            <div className="w-8 h-8 rounded-full bg-sand-50 flex items-center justify-center text-sage-600 group-active:bg-sage-900 group-active:text-white transition-colors">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-sage-900">+90 342 360 9850</span>
                        </a>
                        <a href="mailto:info@tunamedical.com.tr" className="flex items-center gap-4 group">
                            <div className="w-8 h-8 rounded-full bg-sand-50 flex items-center justify-center text-sage-600 group-active:bg-sage-900 group-active:text-white transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-sage-900">info@tunamedical.com.tr</span>
                        </a>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-sand-50 flex items-center justify-center text-sage-600 shrink-0">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                3. Organize Sanayi Bölgesi <br />
                                Kamil Şerbetçi Blv. No: 39 <br />
                                Gaziantep, Türkiye
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-sand-50 text-center space-y-2">
                    <p className="text-[9px] text-gray-400 leading-relaxed font-light">
                        &copy; {currentYear} Tuna Group. <br />
                        Tüm Hakları Saklıdır.
                    </p>
                    <p className="text-[8px] text-gray-400 font-light">
                        Veni AI yapay zeka teknolojileri ile yapılmıştır.{" "}
                        <a
                            href="https://veniplatform.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage-600 hover:text-sage-700 font-medium transition-colors underline decoration-dotted"
                        >
                            veniplatform.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
