export interface ProductFeature {
  icon: string
  title: string
  description: string
}

export interface ProductSpecification {
  name: string
  value: string
}

export interface Product {
  id: string
  name: string
  category: string
  subcategory?: string
  description: string
  longDescription: string
  features: ProductFeature[]
  specifications: ProductSpecification[]
  images: string[]
  isNew?: boolean
  isFeatured?: boolean
  relatedProducts: string[]
  refNumber?: string
  boxQuantity?: string
}

export interface Category {
  id: string
  name: string
  description: string
  image?: string
  subcategories?: { id: string; name: string }[]
}

// Product categories
export const categories: Category[] = [
  {
    id: "anestezi-solunum",
    name: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    description:
      "Tuna Group bünyesinde geliştirilen, anestezi ve solunum sistemleri için profesyonel tıbbi cihazlar ve malzemeler. Hasta güvenliği ve konforunu ön planda tutan yüksek kaliteli çözümler.",
    image: "/images/categories/anestezi-solunum.jpeg",
    subcategories: [
      { id: "nebulizer-setleri", name: "NEBULİZER SETLERİ" },
      { id: "oksijen-maskeleri", name: "OKSİJEN MASKELERİ" },
      { id: "nazal-kanul", name: "NAZAL KANÜL" },
    ],
  },
  {
    id: "endustriyel-ambalaj",
    name: "ENDÜSTRİYEL AMBALAJ ÇÖZÜMLERİ",
    description:
      "Tuna Group'un endüstriyel üretim gücüyle sunduğu çevre dostu ve dayanıklı ambalaj çözümleri. Farklı sektörlerin ihtiyaçlarına yönelik yüksek mukavemetli çuval ve her türlü endüstriyel ambalaj ürünleri.",
    image: "/images/categories/ambalaj.jpeg", // Note: Need to make sure this exists or use a placeholder
    subcategories: [
      { id: "sentetik-cuval", name: "SENTETİK ÇUVAL" },
      { id: "endustriyel-paketleme", name: "ENDÜSTRİYEL PAKETLEME" },
    ],
  },
  {
    id: "tibbi-atik",
    name: "TIBBİ ATIK YÖNETİMİ",
    description:
      "Tıbbi atık yönetimi için Tuna Group güvencesiyle sunulan güvenli ve dayanıklı çözümler. Hastane ve klinik ortamlarında güvenli atık bertarafı için özel tasarlanmış ürünler.",
    image: "/images/categories/tibbi-atik.jpeg",
    subcategories: [{ id: "atik-kovasi", name: "ATIK KOVASI" }],
  },
]

// Products
export const products: Product[] = [
  // Nebulizer Setleri
  {
    id: "nebulizer-set-yetiskin-tmn-02",
    name: "Nebulizer Set / Yetişkin",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "NEBULİZER SETLERİ",
    refNumber: "TMN-02",
    boxQuantity: "150",
    description:
      "Yetişkin hastalar için profesyonel nebulizatör seti. Medical grade PVC malzemeden üretilmiş, standart konnektörlü.",
    longDescription:
      "Yetişkin hastaların solunum yolu tedavilerinde kullanılan, ilaçların buharlaştırılarak akciğerlere iletilmesini sağlayan komple settir. Kontaminasya-Bulaşmaya dayanıklı hortum ve nebulizer kap ile donatılmıştır.",
    features: [
      { icon: "shield", title: "Medical Grade PVC Malzeme", description: "Yüksek kaliteli tıbbi malzeme" },
      { icon: "link", title: "Standart Konnektör", description: "Evrensel bağlantı imkanı" },
      { icon: "droplet", title: "Kontaminasya-Bulaşmaya Dayanıklı Hortum", description: "Hijyenik kullanım" },
      { icon: "cup", title: "Nebulizer Kap", description: "İlaç haznesi dahil" },
    ],
    specifications: [
      { name: "Malzeme", value: "Medical grade PVC" },
      { name: "Konnektör", value: "Standart" },
      { name: "Hortum", value: "Kink resistant tubing" },
      { name: "Kap", value: "Nebulizer cup" },
      { name: "Kutu İçi Adet", value: "150" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["nebulizer-set-cocuk-tmn-01"],
  },
  {
    id: "nebulizer-set-cocuk-tmn-01",
    name: "Nebulizer Set / Çocuk",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "NEBULİZER SETLERİ",
    refNumber: "TMN-01",
    boxQuantity: "200",
    description: "Pediatrik hastalar için özel tasarlanmış nebulizatör seti. Medical grade PVC malzemeden üretilmiş.",
    longDescription:
      "Çocuk hastaların solunum yolu tedavilerinde kullanılan, ilaçların buharlaştırılarak akciğerlere iletilmesini sağlayan komple settir. Pediatrik anatomiye özel tasarımı ile çocuklarda güvenli ve etkili tedavi imkanı sunar.",
    features: [
      { icon: "shield", title: "Medical Grade PVC Malzeme", description: "Yüksek kaliteli tıbbi malzeme" },
      { icon: "link", title: "Standart Konnektör", description: "Evrensel bağlantı imkanı" },
      { icon: "droplet", title: "Kontaminasya-Bulaşmaya Dayanıklı Hortum", description: "Hijyenik kullanım" },
      { icon: "cup", title: "Nebulizer Kap", description: "İlaç haznesi dahil" },
    ],
    specifications: [
      { name: "Malzeme", value: "Medical grade PVC" },
      { name: "Konnektör", value: "Standart" },
      { name: "Hortum", value: "Kink resistant tubing" },
      { name: "Kap", value: "Nebulizer cup" },
      { name: "Kutu İçi Adet", value: "200" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["nebulizer-set-yetiskin-tmn-02"],
  },

  // Oksijen Maskeleri
  {
    id: "oksijen-maskesi-yetiskin-tmn-05",
    name: "Oksijen Maskesi / Yetişkin",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN MASKELERİ",
    refNumber: "TMN-05",
    boxQuantity: "200",
    description: "Yetişkin hastalar için oksijen maskesi. Medical grade PVC malzemeden üretilmiş.",
    longDescription:
      "Yetişkin hastalara oksijen tedavisi uygulamak için kullanılan standart maskedir. Kontaminasya-bulaşmaya dayanıklı hortum ile donatılmıştır.",
    features: [
      { icon: "shield", title: "Medical Grade PVC Malzeme", description: "Yüksek kaliteli tıbbi malzeme" },
      { icon: "droplet", title: "Kontaminasya-Bulaşmaya Dayanıklı Hortum", description: "Hijyenik kullanım" },
    ],
    specifications: [
      { name: "Malzeme", value: "Medical grade PVC" },
      { name: "Hortum", value: "Kink resistant of tubing" },
      { name: "Kutu İçi Adet", value: "200" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["oksijen-maskesi-cocuk-tmn-04"],
  },
  {
    id: "oksijen-maskesi-cocuk-tmn-04",
    name: "Oksijen Maskesi / Çocuk",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN MASKELERİ",
    refNumber: "TMN-04",
    boxQuantity: "250",
    description: "Pediatrik hastalar için oksijen maskesi. Medical grade PVC malzemeden üretilmiş.",
    longDescription:
      "Çocuk hastalara oksijen tedavisi uygulamak için kullanılan özel boyutlu maskedir. Kontaminasya-bulaşmaya dayanıklı hortum ile donatılmıştır.",
    features: [
      { icon: "shield", title: "Medical Grade PVC Malzeme", description: "Yüksek kaliteli tıbbi malzeme" },
      { icon: "droplet", title: "Kontaminasya-Bulaşmaya Dayanıklı Hortum", description: "Hijyenik kullanım" },
    ],
    specifications: [
      { name: "Malzeme", value: "Medical grade PVC" },
      { name: "Hortum", value: "Kink resistant of tubing" },
      { name: "Kutu İçi Adet", value: "250" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["oksijen-maskesi-yetiskin-tmn-05"],
  },

  // Nazal Kanül - Yetişkin ve Çocuk
  {
    id: "nazal-kanul-yetiskin-tmn-07",
    name: "Nazal Kanül / Yetişkin",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "NAZAL KANÜL",
    refNumber: "TMN-07",
    boxQuantity: "300",
    description: "Yetişkin hastalar için nazal kanül. Medical grade PVC malzemeden üretilmiş.",
    longDescription:
      "Burun yoluyla düşük akımlı oksijen vermek için kullanılan esnek kanüldür. Yumuşak uç, burnu tahriş etmeyen kanül ve kontaminasya-bulaşmaya dayanıklı hortum ile donatılmıştır.",
    features: [
      { icon: "shield", title: "Medical Grade PVC Malzeme", description: "Yüksek kaliteli tıbbi malzeme" },
      { icon: "wind", title: "Yumuşak Uç, Burnu Tahriş Etmeyen Kanül", description: "Konforlu kullanım" },
      { icon: "droplet", title: "Kontaminasya-Bulaşmaya Dayanıklı Hortum", description: "Hijyenik kullanım" },
    ],
    specifications: [
      { name: "Malzeme", value: "Medical grade PVC" },
      { name: "Kanül", value: "Neonatal soft tip curved nasal cannula" },
      { name: "Hortum", value: "Kink resistant of tubing" },
      { name: "Kutu İçi Adet", value: "300" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["nazal-kanul-cocuk-tmn-06", "nazal-kanul-yenidogan"],
  },
  {
    id: "nazal-kanul-cocuk-tmn-06",
    name: "Nazal Kanül / Çocuk",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "NAZAL KANÜL",
    refNumber: "TMN-06",
    boxQuantity: "300",
    description: "Pediatrik hastalar için nazal kanül. Medical grade PVC malzemeden üretilmiş.",
    longDescription:
      "Çocuk hastalarda burun yoluyla düşük akımlı oksijen vermek için kullanılan esnek kanüldür. Yumuşak uç, burnu tahriş etmeyen kanül ve kontaminasya-bulaşmaya dayanıklı hortum ile donatılmıştır.",
    features: [
      { icon: "shield", title: "Medical Grade PVC Malzeme", description: "Yüksek kaliteli tıbbi malzeme" },
      { icon: "wind", title: "Yumuşak Uç, Burnu Tahriş Etmeyen Kanül", description: "Konforlu kullanım" },
      { icon: "droplet", title: "Kontaminasya-Bulaşmaya Dayanıklı Hortum", description: "Hijyenik kullanım" },
    ],
    specifications: [
      { name: "Malzeme", value: "Medical grade PVC" },
      { name: "Kanül", value: "Neonatal soft tip curved nasal cannula" },
      { name: "Hortum", value: "Kink resistant of tubing" },
      { name: "Kutu İçi Adet", value: "300" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["nazal-kanul-yetiskin-tmn-07", "nazal-kanul-yenidogan"],
  },

  // Nazal Kanül - Yenidoğan
  {
    id: "nazal-kanul-yenidogan",
    name: "Nazal Kanül Yenidoğan",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "NAZAL KANÜL",
    description: "Yenidoğanlar ve bebekler için özel tasarlanmış nazal kanül seti. 7 farklı boyutta mevcuttur.",
    longDescription:
      "Yenidoğanların ve bebeklerin hassas özellikleri için özel yumuşak uç tasarımı. Bebek için hortum stabilitesi ve konfor için istege bağlı Konfor Kılıfları mevcuttur. Düşük/yüksek akışlı Oksijen ile kullanım için ve kolay boyut tanımlama için renk kodlu.",
    features: [
      {
        icon: "baby",
        title: "Yenidoğanların ve Bebeklerin Hassas Özellikleri İçin Özel Yumuşak Uç Tasarımı",
        description: "Hassas cilt için uygun",
      },
      {
        icon: "shield",
        title: "Bebek İçin Hortum Stabilitesi ve Konfor İçin İsteğe Bağlı Konfor Kılıfları Mevcuttur",
        description: "Ek konfor sağlar",
      },
      { icon: "wind", title: "Düşük/Yüksek Akışlı Oksijen İle Kullanım İçin", description: "Çok amaçlı kullanım" },
      { icon: "palette", title: "Kolay Boyut Tanımlama İçin Renk Kodlu", description: "Hızlı seçim imkanı" },
    ],
    specifications: [
      { name: "R1", value: "(2.5mm/3mm) BEYAZ" },
      { name: "R2", value: "(2.5mm/3mm) YEŞİL" },
      { name: "R3", value: "(4.75mm/3.5mm) MAVİ" },
      { name: "R4", value: "(5mm/4mm) TURUNCU" },
      { name: "R5", value: "(5.75mm/5.25mm) SARI" },
      { name: "R6", value: "(6.75mm/5.75mm) DENİZ MAVİSİ" },
      { name: "R7", value: "(7.75mm/6.5mm) MOR" },
    ],
    images: ["/images/categories/anestezi-solunum.jpeg"],
    relatedProducts: ["nazal-kanul-yetiskin-tmn-07", "nazal-kanul-cocuk-tmn-06"],
  },

  // Tıbbi Atık Kovası
  {
    id: "tibbi-atik-kovasi-5lt",
    name: "Tıbbi Atık Kovası 5 LT",
    category: "TIBBİ ATIK YÖNETİMİ",
    subcategory: "ATIK KOVASI",
    description:
      "5 litrelik tıbbi atık kovası. Tek kullanımlık, kesici ve delici özellikli tıbbi atıklara karşı dayanıklıdır.",
    longDescription:
      "Hastane ve klinik ortamlarında güvenli tıbbi atık bertarafı için tasarlanmış 5 litrelik atık kovası. Kesici ve delici özellikli tıbbi atıklara karşı yüksek dayanıklılık gösterir.",
    features: [
      { icon: "trash", title: "Tek Kullanımlık", description: "Hijyenik ve güvenli" },
      { icon: "droplet", title: "5 lt Hacime Sahiptir", description: "Yeterli kapasite" },
      {
        icon: "shield",
        title: "Kesici ve Delici Özellikli Tıbbi Atıklara Karşı Dayanıklıdır",
        description: "Güvenli bertaraf",
      },
    ],
    specifications: [
      { name: "Hacim", value: "5 Litre" },
      { name: "Kullanım", value: "Tek kullanımlık" },
      { name: "Dayanıklılık", value: "Kesici ve delici atıklara karşı dayanıklı" },
      { name: "Malzeme", value: "Tıbbi atık için uygun plastik" },
    ],
    images: ["/images/categories/tibbi-atik.jpeg"],
    relatedProducts: [],
  },

  // Endüstriyel Ambalaj
  {
    id: "sentetik-cuval-standart",
    name: "PP Sentetik Çuval / Standart",
    category: "ENDÜSTRİYEL AMBALAJ ÇÖZÜMLERİ",
    subcategory: "SENTETİK ÇUVAL",
    description: "Endüstriyel kullanıma uygun yüksek mukavemetli PP sentetik çuval.",
    longDescription:
      "Tuna Group'un modern üretim tesislerinde üretilen PP sentetik çuvallar, tarım, gıda ve sanayi ürünlerinin güvenli taşınması için tasarlanmıştır. UV dirençli ve çevre dostu yapısı ile uzun süreli kullanım sağlar.",
    features: [
      { icon: "shield-alert", title: "Yüksek Mukavemet", description: "Yırtılma ve patlamaya dirençli" },
      { icon: "sun", title: "UV Koruması", description: "Güneş ışınlarına karşı dayanıklı" },
      { icon: "leaf", title: "%100 Geri Dönüştürülebilir", description: "Çevre dostu üretim" },
    ],
    specifications: [
      { name: "Malzeme", value: "Polipropilen (PP)" },
      { name: "Boyutlar", value: "İsteğe bağlı özel üretim" },
      { name: "Renk", value: "Beyaz / Renkli seçenekler" },
      { name: "Kullanım Alanları", value: "Baklagil, Un, Şeker, Yem, Sanayi ürünleri" },
    ],
    images: ["/images/categories/ambalaj.jpeg"],
    relatedProducts: [],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  const category = getCategoryById(categoryId)
  if (!category) return []
  return products.filter((product) => product.category === category.name)
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  const subcategoryName = getSubcategoryName(subcategoryId)
  if (!subcategoryName) return []
  return products.filter((product) => product.subcategory === subcategoryName)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}

export function getSubcategoryName(id: string): string | undefined {
  for (const category of categories) {
    if (category.subcategories) {
      const subcategory = category.subcategories.find((sub) => sub.id === id)
      if (subcategory) return subcategory.name
    }
  }
  return undefined
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId)
  if (!product) return []
  return product.relatedProducts.map((id) => getProductById(id)).filter((p): p is Product => p !== undefined)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured)
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew)
}
