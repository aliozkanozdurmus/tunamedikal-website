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
      "Anestezi ve solunum sistemleri için profesyonel tıbbi cihazlar ve malzemeler. Hasta güvenliği ve konforunu ön planda tutan yüksek kaliteli ürünler.",
    image: "/images/categories/anestezi-solunum.jpg",
    subcategories: [
      { id: "filtreler", name: "FİLTRELER" },
      { id: "sisirilebilir-maskeler", name: "ŞİŞİRİLEBİLİR & SİLİKON MASKELER" },
      { id: "kateter-mount", name: "KATETER MOUNT" },
      { id: "airway", name: "AIRWAY" },
      { id: "solunum-egzersiz", name: "SOLUNUM EGZERSİZ CİHAZI" },
      { id: "oksijen-aerosol", name: "OKSİJEN & AEROSOL TERAPİ" },
      { id: "cpap-bipap", name: "CPAP & BIPAP MASKELERİ" },
      { id: "suni-solunum", name: "SUNİ SOLUNUM BALONU" },
      { id: "konnektorler-anestezi", name: "KONNEKTÖRLER" },
      { id: "komponentler-anestezi", name: "KOMPONENTLER" },
      { id: "diger-urunler-anestezi", name: "DİĞER ÜRÜNLER" },
    ],
  },
  {
    id: "uroloji",
    name: "ÜROLOJİ",
    description:
      "Ürolojik işlemler için özel tasarlanmış tıbbi malzemeler. Minimal invaziv prosedürler ve hasta konforu için geliştirilmiş teknolojik çözümler.",
    image: "/images/categories/uroloji.jpg",
    subcategories: [
      { id: "ureteral-stent", name: "ÜRETERAL STENT & SETLERİ" },
      { id: "kilavuz-teller", name: "KILAVUZ TELLER" },
      { id: "nephroflex", name: "NEPHROFLEX® NEFROSTOMİ BALON DİLATÖR SETİ" },
      { id: "hidrofilik-kilif", name: "HİDROFİLİK ÜRETERAL GİRİŞ KILIFI & DİLATÖR SETİ" },
      { id: "tas-cikarma", name: "TAŞ ÇIKARMA SEPETİ" },
      { id: "pigtail", name: "PIGTAIL NEFROSTOMİ KATETER & SETLERİ" },
      { id: "ureteral-balon-dilator", name: "ÜRETERAL BALON DİLATÖR" },
      { id: "transureteroskopik-balon-dilator", name: "TRANSÜRETEROSKOPİK BALON DİLATÖR" },
      { id: "malecot", name: "MALECOT / RE-ENTRY MALECOT NEFROSTOMİ KATETER ve SETLERİ" },
      { id: "amplatz", name: "AMPLATZ RENAL DİLATÖR & KILIF SETİ" },
      { id: "giris-igneleri", name: "GİRİŞ İĞNELERİ" },
      { id: "dilatorler-uroloji", name: "DİLATÖRLER" },
      { id: "ureteral-kateterler", name: "ÜRETERAL KATETERLER" },
      { id: "suprapubik", name: "SUPRAPUBİK KATETER SETLERİ" },
      { id: "aksesuarlar-uroloji", name: "AKSESUARLAR" },
    ],
  },
  {
    id: "drenaj",
    name: "DRENAJ",
    description:
      "Drenaj ve aspirasyon sistemleri için kapsamlı çözümler. Cerrahi sonrası hasta bakımı ve enfeksiyon kontrolü için güvenilir sistemler.",
    image: "/images/categories/drenaj.jpg",
    subcategories: [
      { id: "aspirasyon-esnek", name: "ASPİRASYON TORBASI – ESNEK TORBA" },
      { id: "kanister-esnek", name: "KANİSTER (ESNEK TORBA)" },
      { id: "mobil-esnek", name: "MOBİL ARABA (ESNEK TORBA)" },
      { id: "aspirasyon-torbalari", name: "ASPİRASYON TORBALARI" },
      { id: "kanisterler", name: "KANİSTERLER" },
      { id: "mobil-araba", name: "MOBİL ARABA" },
      { id: "tandem-baglanti", name: "ASPİRASYON TORBASI – TANDEM BAĞLANTI" },
      { id: "aksesuarlar-drenaj", name: "AKSESUARLAR" },
      { id: "yankauer", name: "YANKAUER ASPiRASYON SETİ" },
      { id: "hemovack", name: "DRENAJ SİSTEMLERİ – HEMOVACK" },
      { id: "bomba-silikon", name: "DRENAJ SİSTEMLERİ – BOMBA SİLİKON" },
      { id: "silikon-round", name: "SİLİKON ROUND DREN" },
      { id: "flat-dren", name: "FLAT DREN" },
      { id: "drenaj-torbali-silikon", name: "DRENAJ TORBALI YUMUŞAK DREN – SİLİKON" },
      { id: "drenaj-torbali-pvc", name: "DRENAJ TORBALI YUMUŞAK DREN – PVC" },
      { id: "konnektor-drenaj", name: "KONNEKTÖR" },
    ],
  },
  {
    id: "jinekoloji",
    name: "JİNEKOLOJİ",
    description:
      "Jinekolojik muayene ve işlemler için özel ürünler. Kadın sağlığı alanında güvenilir ve konforlu çözümler sunan profesyonel malzemeler.",
    image: "/images/categories/jinekoloji.jpg",
    subcategories: [
      { id: "iui-kateter", name: "IUI KATETER (IntraUterin Inseminasyon Kateteri)" },
      { id: "karman-enjektor", name: "KARMAN ENJEKTÖR" },
      { id: "karman-kanul", name: "KARMAN KANÜL UCU" },
      { id: "endometrial-ornek", name: "ENDOMETRİAL ÖRNEK ALMA KANÜLÜ" },
      { id: "smear-fircasi", name: "SMEAR FIRÇASI" },
      { id: "smear-tasima-kabi", name: "SMEAR TAŞIMA KABI" },
      { id: "poche-acacagi", name: "POCHE AÇACAĞI" },
    ],
  },
  {
    id: "diger-genel",
    name: "DİĞER",
    description:
      "Çeşitli tıbbi malzemeler ve aksesuarlar. Hastane ve klinik ortamlarında kullanılan genel amaçlı tıbbi malzemeler ve yardımcı ürünler.",
    image: "/images/categories/diger-tibbi-malzemeler.jpg",
    subcategories: [
      { id: "damla-ayar-seti", name: "DAMLA AYAR SETİ" },
      { id: "lavman-seti", name: "LAVMAN SETİ" },
      { id: "gobek-kordon-klemp", name: "GÖBEK KORDON KLEMP" },
      { id: "cerrahi-el-fircasi", name: "CERRAHİ EL FIRÇALARI" },
      { id: "biyopsi-punch", name: "BİYOPSİ PUNCH" },
      { id: "instoper", name: "İNSTOPER (HEPARİN ÇAP)" },
      { id: "kamera-kilifi", name: "KAMERA KILIFI" },
      { id: "kan-gazi-enjektoru", name: "KAN GAZI ENJEKTÖRÜ" },
      { id: "idrar-torbasi-askisi", name: "İDRAR TORBASI ASKISI" },
      { id: "kunye", name: "KÜNYE" },
      { id: "gaz-ornek-alma-hatti", name: "GAZ ÖRNEK ALMA HATTI" },
    ],
  },
]

// Products with extended descriptions
export const products: Product[] = [
  // ANESTEZİ & SOLUNUM SİSTEMLERİ
  {
    id: "nebulizator-seti-yetiskin",
    name: "Nebulizatör Seti (Yetişkin)",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description:
      "Yetişkin hastalar için profesyonel nebulizatör seti. Solunum yolu hastalıklarının tedavisinde kullanılan, ilaçların etkili bir şekilde akciğerlere ulaştırılmasını sağlayan komple sistem.",
    longDescription:
      "Yetişkin hastaların solunum yolu tedavilerinde kullanılan, ilaçların buharlaştırılarak akciğerlere iletilmesini sağlayan komple settir. Astım, KOAH ve diğer solunum yolu hastalıklarının tedavisinde etkili sonuçlar alınmasını sağlar.",
    features: [{ icon: "user", title: "Yetişkin Uyumlu", description: "Yetişkin anatomisine uygun tasarım." }],
    specifications: [{ name: "Kullanım", value: "Tek kullanımlık" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["nebulizator-seti-pediatrik"],
  },
  {
    id: "nebulizator-seti-pediatrik",
    name: "Nebulizatör Seti (Pediatrik)",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description:
      "Pediatrik hastalar için özel tasarlanmış nebulizatör seti. Çocukların hassas solunum sistemine uygun, güvenli ve etkili ilaç iletimi sağlayan sistem.",
    longDescription:
      "Çocuk hastaların solunum yolu tedavilerinde kullanılan, ilaçların buharlaştırılarak akciğerlere iletilmesini sağlayan komple settir. Pediatrik anatomiye özel tasarımı ile çocuklarda güvenli ve etkili tedavi imkanı sunar.",
    features: [{ icon: "baby", title: "Pediatrik Uyumlu", description: "Çocuk anatomisine uygun tasarım." }],
    specifications: [{ name: "Kullanım", value: "Tek kullanımlık" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["nebulizator-seti-yetiskin"],
  },
  {
    id: "oksijen-maskesi-yetiskin",
    name: "Oksijen Maskesi (Yetişkin)",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description:
      "Yetişkin hastalar için standart oksijen maskesi. Acil durumlar ve oksijen tedavisi gereken durumlarda güvenilir oksijen iletimi sağlayan profesyonel tıbbi malzeme.",
    longDescription:
      "Yetişkin hastalara oksijen tedavisi uygulamak için kullanılan standart maskedir. Şeffaf malzemeden üretilmiş olup, hasta takibini kolaylaştırır ve güvenli oksijen iletimi sağlar.",
    features: [{ icon: "wind", title: "Etkili Oksijenasyon", description: "Yeterli oksijen iletimi sağlar." }],
    specifications: [{ name: "Boyut", value: "Yetişkin" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["oksijen-maskesi-pediatrik"],
  },
  {
    id: "oksijen-maskesi-pediatrik",
    name: "Oksijen Maskesi (Pediatrik)",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description: "Pediatrik hastalar için oksijen maskesi.",
    longDescription: "Çocuk hastalara oksijen tedavisi uygulamak için kullanılan özel boyutlu maskedir.",
    features: [{ icon: "wind", title: "Çocuklara Uygun", description: "Pediatrik yüz yapısına uygun." }],
    specifications: [{ name: "Boyut", value: "Pediatrik" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["oksijen-maskesi-yetiskin"],
  },
  {
    id: "nebulizer-t-kit-yetiskin",
    name: "Nebulizer T-Kit (Yetişkin)",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description: "Yetişkin hastalar için T-parçalı nebulizatör kiti.",
    longDescription: "Yetişkinlerde aerosol tedavisi için T-parçası içeren nebulizatör kitidir.",
    features: [{ icon: "tool", title: "T-Parçalı Tasarım", description: "Etkili ilaç iletimi." }],
    specifications: [{ name: "Kullanıcı", value: "Yetişkin" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["nebulizer-t-kit-pediatrik-neonatal"],
  },
  {
    id: "nebulizer-t-kit-pediatrik-neonatal",
    name: "Nebulizer T-Kit (Pediatrik, Neonatal)",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description: "Pediatrik ve neonatal hastalar için T-parçalı nebulizatör kiti.",
    longDescription: "Çocuk ve yenidoğanlarda aerosol tedavisi için T-parçası içeren özel nebulizatör kitidir.",
    features: [{ icon: "baby", title: "Hassas Boyutlar", description: "Pediatrik ve neonatal kullanıma uygun." }],
    specifications: [{ name: "Kullanıcı", value: "Pediatrik, Neonatal" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["nebulizer-t-kit-yetiskin"],
  },
  {
    id: "nazal-kanul",
    name: "Nazal Kanül",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "OKSİJEN & AEROSOL TERAPİ",
    description: "Oksijen tedavisi için nazal kanül.",
    longDescription: "Burun yoluyla düşük akımlı oksijen vermek için kullanılan esnek kanüldür.",
    features: [{ icon: "wind", title: "Konforlu Kullanım", description: "Yumuşak ve esnek yapı." }],
    specifications: [{ name: "Malzeme", value: "Tıbbi PVC" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["oksijen-maskesi-yetiskin"],
  },
  {
    id: "solunum-devresi",
    name: "Solunum Devresi",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "KOMPONENTLER-ANESTEZI",
    description: "Anestezi ve ventilatör cihazları için solunum devresi.",
    longDescription:
      "Hasta ile solunum cihazı arasında hava akışını sağlayan, tek kullanımlık veya çok kullanımlık devrelerdir.",
    features: [{ icon: "refresh-cw", title: "Güvenli Bağlantı", description: "Sızdırmaz ve güvenli." }],
    specifications: [{ name: "Tipler", value: "Yetişkin, Pediatrik" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["filtreler-anestezi"],
  },
  {
    id: "cpap-maskesi",
    name: "CPAP Maskesi",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "CPAP & BIPAP MASKELERİ",
    description:
      "CPAP tedavisi için profesyonel yüz veya burun maskesi. Uyku apnesi tedavisinde kullanılan, sürekli pozitif hava yolu basıncı sağlayan konforlu ve etkili sistem.",
    longDescription:
      "Sürekli pozitif hava yolu basıncı (CPAP) tedavisi için tasarlanmış, uyku apnesi gibi durumlarda kullanılan maskedir. Farklı yüz yapılarına uyum sağlayan ergonomik tasarımı ile konforlu kullanım sunar.",
    features: [{ icon: "moon", title: "Konforlu Uyum", description: "Uzun süreli kullanım için rahat." }],
    specifications: [{ name: "Çeşitler", value: "Nazal, Oral, Tam Yüz" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["bipap-maskeleri"],
  },
  {
    id: "filtreler-anestezi",
    name: "FİLTRELER",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "FİLTRELER",
    description: "Solunum devreleri için bakteri/viral filtreler.",
    longDescription: "Solunum devrelerinde kullanılan, hastayı ve cihazı kontaminasyondan koruyan filtrelerdir.",
    features: [{ icon: "shield", title: "Yüksek Filtrasyon", description: "Etkili koruma sağlar." }],
    specifications: [{ name: "Tipler", value: "HME, Bakteri/Viral" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["solunum-devresi"],
  },
  {
    id: "sisirilebilir-silikon-maskeler",
    name: "ŞİŞİRİLEBİLİR & SİLİKON MASKELER",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "ŞİŞİRİLEBİLİR & SİLİKON MASKELER",
    description: "Anestezi ve resüsitasyon için şişirilebilir ve silikon yüz maskeleri.",
    longDescription: "Manuel ventilasyon ve anestezi uygulamalarında kullanılan, yüze tam oturan maskelerdir.",
    features: [{ icon: "maximize-2", title: "Tam Uyum", description: "Yüze sızdırmaz şekilde oturur." }],
    specifications: [{ name: "Malzeme", value: "Silikon, PVC" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["suni-solunum-balonu"],
  },
  {
    id: "kateter-mount",
    name: "KATETER MOUNT",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "KATETER MOUNT",
    description: "Solunum devresi ile trakeal tüp/maske arasında esnek bağlantı.",
    longDescription:
      "Solunum devresine esneklik kazandıran, hasta hareketlerinden kaynaklanan çekmeyi azaltan ara bağlantı parçasıdır.",
    features: [{ icon: "git-pull-request", title: "Esnek Bağlantı", description: "Hareket kolaylığı sağlar." }],
    specifications: [{ name: "Uzunluk", value: "Çeşitli" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["airway-anestezi"],
  },
  {
    id: "airway-anestezi",
    name: "AIRWAY",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "AIRWAY",
    description: "Açık hava yolu sağlamak için orofarengeal ve nazofarengeal airwayler.",
    longDescription: "Bilinçsiz hastalarda dilin geriye düşerek hava yolunu tıkamasını engelleyen araçlardır.",
    features: [{ icon: "wind", title: "Açık Hava Yolu", description: "Solunumu kolaylaştırır." }],
    specifications: [{ name: "Tipler", value: "Guedel, Nazal" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["kateter-mount"],
  },
  {
    id: "solunum-egzersiz-cihazi",
    name: "SOLUNUM EGZERSİZ CİHAZI",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "SOLUNUM EGZERSİZ CİHAZI",
    description: "Akciğer kapasitesini artırmak için solunum egzersiz cihazı (Triflo).",
    longDescription:
      "Ameliyat sonrası veya akciğer rahatsızlıklarında akciğer fonksiyonlarını geliştirmek için kullanılan cihazdır.",
    features: [{ icon: "bar-chart-2", title: "Kapasite Artırıcı", description: "Akciğer egzersizi sağlar." }],
    specifications: [{ name: "Tip", value: "İnsentif Spirometre" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["oksijen-maskesi-yetiskin"],
  },
  {
    id: "bipap-maskeleri",
    name: "BIPAP MASKELERİ",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "CPAP & BIPAP MASKELERİ",
    description: "BiPAP tedavisi için özel tasarlanmış yüz veya burun maskeleri.",
    longDescription:
      "İki seviyeli pozitif hava yolu basıncı (BiPAP) tedavisi için kullanılan, solunum yetmezliği gibi durumlarda tercih edilen maskelerdir.",
    features: [{ icon: "sliders", title: "İki Seviyeli Basınç", description: "BiPAP cihazlarıyla uyumlu." }],
    specifications: [{ name: "Çeşitler", value: "Nazal, Tam Yüz" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["cpap-maskesi"],
  },
  {
    id: "suni-solunum-balonu",
    name: "SUNİ SOLUNUM BALONU",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "SUNİ SOLUNUM BALONU",
    description: "Manuel resüsitasyon için ambu (balon valf maske).",
    longDescription:
      "Solunumu durmuş veya yetersiz olan hastalara manuel olarak solunum yaptırmak için kullanılan temel yaşam desteği aracıdır.",
    features: [{ icon: "activity", title: "Manuel Ventilasyon", description: "Acil durumlarda hayat kurtarıcı." }],
    specifications: [{ name: "Boyutlar", value: "Yetişkin, Pediatrik, Neonatal" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["sisirilebilir-silikon-maskeler"],
  },
  {
    id: "konnektorler-anestezi",
    name: "KONNEKTÖRLER",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "KONNEKTÖRLER-ANESTEZI",
    description: "Solunum devreleri ve ekipmanları için çeşitli bağlantı parçaları.",
    longDescription:
      "Solunum sistemlerinde farklı parçaları birbirine bağlamak için kullanılan standart veya özel konnektörlerdir.",
    features: [{ icon: "link-2", title: "Çeşitli Tipler", description: "Farklı ihtiyaçlara uygun." }],
    specifications: [{ name: "Malzeme", value: "Plastik, Metal" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["komponentler-anestezi"],
  },
  {
    id: "komponentler-anestezi",
    name: "KOMPONENTLER",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "KOMPONENTLER-ANESTEZI",
    description: "Anestezi ve solunum sistemleri için yedek parça ve bileşenler.",
    longDescription: "Solunum cihazları ve devreleri için çeşitli yedek parçalar, adaptörler ve diğer bileşenlerdir.",
    features: [{ icon: "settings", title: "Sistem Uyumu", description: "Cihazlarla uyumlu parçalar." }],
    specifications: [{ name: "Çeşitlilik", value: "Geniş ürün yelpazesi." }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: ["solunum-devresi"],
  },
  {
    id: "diger-urunler-anestezi",
    name: "DİĞER ÜRÜNLER",
    category: "ANESTEZİ & SOLUNUM SİSTEMLERİ",
    subcategory: "DİĞER ÜRÜNLER-ANESTEZI",
    description: "Anestezi ve solunum kategorisindeki diğer özel ürünler.",
    longDescription: "Bu kategoride yer almayan, anestezi ve solunumla ilgili diğer özel tıbbi malzemelerdir.",
    features: [{ icon: "package", title: "Özel Çözümler", description: "Farklı ihtiyaçlara yönelik." }],
    specifications: [{ name: "Uygulama", value: "Çeşitli" }],
    images: ["/images/categories/anestezi-solunum.jpg"],
    relatedProducts: [],
  },

  // ÜROLOJİ
  {
    id: "ureteral-stent-setleri",
    name: "ÜRETERAL STENT & SETLERİ",
    category: "ÜROLOJİ",
    subcategory: "ÜRETERAL STENT & SETLERİ",
    description: "Üreter tıkanıklıklarında kullanılan stentler ve yerleştirme setleri.",
    longDescription:
      "Böbrek ile mesane arasındaki idrar akışını sağlamak için üretere yerleştirilen ince tüpler ve bu işlemi kolaylaştıran setlerdir.",
    features: [{ icon: "git-commit", title: "İdrar Akışı Sağlar", description: "Tıkanıklıkları giderir." }],
    specifications: [{ name: "Malzeme", value: "Silikon, Poliüretan" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["kilavuz-teller-uroloji"],
  },
  {
    id: "kilavuz-teller-uroloji",
    name: "KILAVUZ TELLER",
    category: "ÜROLOJİ",
    subcategory: "KILAVUZ TELLER",
    description: "Ürolojik işlemlerde kateter ve stent yerleştirmek için kullanılan kılavuz teller.",
    longDescription: "Endoskopik ürolojik girişimlerde yol gösterici olarak kullanılan, esnek ve dayanıklı tellerdir.",
    features: [{ icon: "navigation", title: "Yol Gösterici", description: "Hassas yerleştirme sağlar." }],
    specifications: [{ name: "Tipler", value: "Hidrofilik, PTFE kaplı" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["ureteral-stent-setleri"],
  },
  {
    id: "nephroflex-balon-dilator",
    name: "NEPHROFLEX® NEFROSTOMİ BALON DİLATÖR SETİ",
    category: "ÜROLOJİ",
    subcategory: "NEPHROFLEX® NEFROSTOMİ BALON DİLATÖR SETİ",
    description: "Nefrostomi yolu genişletmek için balon dilatör seti.",
    longDescription:
      "Perkütan nefrostomi işlemlerinde, böbreğe erişim yolunu genişletmek için kullanılan özel balon dilatör setidir. YENİ üründür.",
    features: [
      { icon: "maximize", title: "Yol Genişletme", description: "Nefrostomi için güvenli genişletme." },
      { icon: "star", title: "Yeni Ürün", description: "Gelişmiş teknoloji." },
    ],
    specifications: [{ name: "Balon Çapları", value: "Çeşitli" }],
    images: ["/images/categories/uroloji.jpg"],
    isNew: true,
    relatedProducts: ["pigtail-nefrostomi-kateter"],
  },
  {
    id: "hidrofilik-ureteral-giris-kilifi",
    name: "HİDROFİLİK ÜRETERAL GİRİŞ KILIFI & DİLATÖR SETİ",
    category: "ÜROLOJİ",
    subcategory: "HİDROFİLİK ÜRETERAL GİRİŞ KILIFI & DİLATÖR SETİ",
    description: "Üretere atravmatik giriş için hidrofilik kılıf ve dilatör seti.",
    longDescription:
      "Üreteroskopik işlemlerde üretere kolay ve travmasız erişim sağlamak için kullanılan hidrofilik kaplı giriş kılıfı ve eşlik eden dilatör setidir.",
    features: [{ icon: "droplet", title: "Hidrofilik Kaplama", description: "Kaygan ve atravmatik giriş." }],
    specifications: [{ name: "Boyutlar", value: "Farklı Fr seçenekleri" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["ureteral-balon-dilator-uroloji"],
  },
  {
    id: "tas-cikarma-sepeti",
    name: "TAŞ ÇIKARMA SEPETİ",
    category: "ÜROLOJİ",
    subcategory: "TAŞ ÇIKARMA SEPETİ",
    description: "Üriner sistemdeki taşları çıkarmak için kullanılan endoskopik sepetler.",
    longDescription:
      "Böbrek, üreter veya mesanedeki taşları endoskopik olarak yakalayıp çıkarmak için tasarlanmış çeşitli tiplerde sepetlerdir.",
    features: [{ icon: "trash-2", title: "Etkili Taş Toplama", description: "Farklı taş tiplerine uygun." }],
    specifications: [{ name: "Tel Sayısı", value: "3, 4, 5 telli" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["ureteral-stent-setleri"],
  },
  {
    id: "pigtail-nefrostomi-kateter",
    name: "PIGTAIL NEFROSTOMİ KATETER & SETLERİ",
    category: "ÜROLOJİ",
    subcategory: "PIGTAIL NEFROSTOMİ KATETER & SETLERİ",
    description: "Böbrekten idrar drenajı için pigtail (kıvrık uçlu) kateter ve setleri.",
    longDescription:
      "Perkütan olarak böbreğe yerleştirilen, idrarın dışarıya veya mesaneye drenajını sağlayan kıvrık uçlu kateterler ve yerleştirme setleridir.",
    features: [
      { icon: "corner-down-left", title: "Güvenli Drenaj", description: "Pigtail ucu yerinden çıkmayı önler." },
    ],
    specifications: [{ name: "Malzeme", value: "Poliüretan" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["nephroflex-balon-dilator"],
  },
  {
    id: "ureteral-balon-dilator-uroloji",
    name: "ÜRETERAL BALON DİLATÖR",
    category: "ÜROLOJİ",
    subcategory: "ÜRETERAL BALON DİLATÖR",
    description: "Üreter darlıklarını genişletmek için balon dilatör.",
    longDescription:
      "Üreterdeki darlıkları veya striktürleri genişletmek amacıyla kullanılan, kontrollü basınçla şişirilen balon kateterlerdir.",
    features: [{ icon: "maximize", title: "Darlık Genişletme", description: "Kontrollü ve etkili." }],
    specifications: [{ name: "Balon Uzunlukları", value: "Çeşitli" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["transureteroskopik-balon-dilator"],
  },
  {
    id: "transureteroskopik-balon-dilator",
    name: "TRANSÜRETEROSKOPİK BALON DİLATÖR",
    category: "ÜROLOJİ",
    subcategory: "TRANSÜRETEROSKOPİK BALON DİLATÖR",
    description: "Üreteroskopi sırasında kullanılan balon dilatör.",
    longDescription:
      "Üreteroskop ile birlikte kullanılarak üreterin belirli bölgelerini genişletmek için tasarlanmış özel balon dilatörlerdir.",
    features: [{ icon: "aperture", title: "Üreteroskopik Kullanım", description: "Endoskopik işlemlere uygun." }],
    specifications: [{ name: "Çalışma Kanalı Uyumu", value: "Evet" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["ureteral-balon-dilator-uroloji"],
  },
  {
    id: "malecot-reentry-nefrostomi-kateter",
    name: "MALECOT / RE-ENTRY MALECOT NEFROSTOMİ KATETER ve SETLERİ",
    category: "ÜROLOJİ",
    subcategory: "MALECOT / RE-ENTRY MALECOT NEFROSTOMİ KATETER ve SETLERİ",
    description: "Malecot uçlu nefrostomi kateterleri ve re-entry setleri.",
    longDescription:
      "Kendiliğinden tutunan Malecot ucu sayesinde böbrekte stabil drenaj sağlayan kateterler ve yeniden giriş (re-entry) işlemlerini kolaylaştıran setlerdir.",
    features: [{ icon: "anchor", title: "Stabil Drenaj", description: "Malecot ucu güvenli fiksasyon sağlar." }],
    specifications: [{ name: "Malzeme", value: "Silikon, Lateks" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["pigtail-nefrostomi-kateter"],
  },
  {
    id: "amplatz-renal-dilator-kilif-seti",
    name: "AMPLATZ RENAL DİLATÖR & KILIF SETİ",
    category: "ÜROLOJİ",
    subcategory: "AMPLATZ RENAL DİLATÖR & KILIF SETİ",
    description: "Perkütan nefrolitotomi (PCNL) için Amplatz dilatör ve kılıf seti.",
    longDescription:
      "Böbrek taşı kırma operasyonlarında (PCNL) böbreğe erişim yolunu seri olarak genişletmek ve çalışma kanalı oluşturmak için kullanılan setlerdir.",
    features: [{ icon: "layers", title: "Seri Dilatasyon", description: "PCNL işlemleri için ideal." }],
    specifications: [{ name: "Boyutlar", value: "Farklı Fr setleri" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["giris-igneleri-uroloji"],
  },
  {
    id: "giris-igneleri-uroloji",
    name: "GİRİŞ İĞNELERİ",
    category: "ÜROLOJİ",
    subcategory: "GİRİŞ İĞNELERİ",
    description: "Ürolojik perkütan girişimler için çeşitli giriş iğneleri.",
    longDescription:
      "Nefrostomi, sistostomi gibi perkütan ürolojik işlemlerde ilk erişimi sağlamak için kullanılan farklı tip ve boyutlarda iğnelerdir.",
    features: [{ icon: "crosshair", title: "Hassas Giriş", description: "Keskin uçlu ve güvenli." }],
    specifications: [{ name: "Tipler", value: "Chiba, Trokar uçlu" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["dilatorler-uroloji"],
  },
  {
    id: "dilatorler-uroloji",
    name: "DİLATÖRLER",
    category: "ÜROLOJİ",
    subcategory: "DİLATÖRLER-UROLOJI",
    description: "Ürolojik yolları genişletmek için kullanılan çeşitli dilatörler.",
    longDescription:
      "Üretra, üreter veya nefrostomi yolu gibi daralmış ürolojik kanalları genişletmek için kullanılan farklı materyal ve tasarımlarda dilatörlerdir.",
    features: [{ icon: "trending-up", title: "Kademeli Genişletme", description: "Atravmatik ve etkili." }],
    specifications: [{ name: "Malzeme", value: "Plastik, Metal" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["ureteral-kateterler-uroloji"],
  },
  {
    id: "ureteral-kateterler-uroloji",
    name: "ÜRETERAL KATETERLER",
    category: "ÜROLOJİ",
    subcategory: "ÜRETERAL KATETERLER",
    description: "Tanısal ve terapötik amaçlı üreteral kateterler.",
    longDescription:
      "Üretere retrograd veya antegrad yolla yerleştirilerek idrar drenajı, kontrast madde verilmesi veya diğer tanısal/terapötik işlemler için kullanılan kateterlerdir.",
    features: [{ icon: "activity", title: "Tanı ve Tedavi", description: "Çok amaçlı kullanım." }],
    specifications: [{ name: "Uç Tipleri", value: "Açık uç, Whistle tip" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["suprapubik-kateter-setleri"],
  },
  {
    id: "suprapubik-kateter-setleri",
    name: "SUPRAPUBİK KATETER SETLERİ",
    category: "ÜROLOJİ",
    subcategory: "SUPRAPUBİK KATETER SETLERİ",
    description: "Mesaneye suprapubik yoldan kateter yerleştirmek için setler.",
    longDescription:
      "Karın duvarından direkt olarak mesaneye kateter yerleştirilerek idrar drenajı sağlamak için kullanılan komple setlerdir.",
    features: [{ icon: "shield-check", title: "Alternatif Drenaj", description: "Üretral yol uygun olmadığında." }],
    specifications: [{ name: "Tipler", value: "Trokar, Seldinger" }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["aksesuarlar-uroloji"],
  },
  {
    id: "aksesuarlar-uroloji",
    name: "AKSESUARLAR",
    category: "ÜROLOJİ",
    subcategory: "AKSESUARLAR-UROLOJI",
    description: "Ürolojik işlemler için çeşitli yardımcı aksesuarlar.",
    longDescription:
      "Kılavuz tel yönlendiricileri, Luer-Lock adaptörler, stopcocklar gibi ürolojik girişimlerde kullanılan çeşitli yardımcı malzemelerdir.",
    features: [{ icon: "settings", title: "İşlem Kolaylığı", description: "Girişimleri destekler." }],
    specifications: [{ name: "Çeşitlilik", value: "Geniş ürün gamı." }],
    images: ["/images/categories/uroloji.jpg"],
    relatedProducts: ["ureteral-stent-setleri"],
  },

  // DRENAJ
  {
    id: "aspirasyon-torbasi-esnek",
    name: "ASPİRASYON TORBASI – ESNEK TORBA",
    category: "DRENAJ",
    subcategory: "ASPİRASYON TORBASI – ESNEK TORBA",
    description: "Tek kullanımlık esnek aspirasyon torbası.",
    longDescription:
      "Cerrahi ve medikal aspirasyon işlemleri için tasarlanmış, kanister içine yerleştirilen tek kullanımlık esnek torbadır.",
    features: [
      { icon: "archive", title: "Hijyenik Toplama", description: "Tek kullanımlık, kontaminasyon riskini azaltır." },
    ],
    specifications: [{ name: "Hacimler", value: "1L, 2L, 3L" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["kanister-esnek-torba"],
  },
  {
    id: "kanister-esnek-torba",
    name: "KANİSTER (ESNEK TORBA)",
    category: "DRENAJ",
    subcategory: "KANİSTER (ESNEK TORBA)",
    description: "Esnek aspirasyon torbaları için tekrar kullanılabilir kanister.",
    longDescription:
      "Esnek aspirasyon torbalarının içine yerleştirildiği, dayanıklı ve tekrar kullanılabilir dış haznedir.",
    features: [{ icon: "box", title: "Dayanıklı Yapı", description: "Uzun ömürlü kullanım." }],
    specifications: [{ name: "Malzeme", value: "Polikarbonat" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["aspirasyon-torbasi-esnek"],
  },
  {
    id: "mobil-araba-esnek-torba",
    name: "MOBİL ARABA (ESNEK TORBA)",
    category: "DRENAJ",
    subcategory: "MOBİL ARABA (ESNEK TORBA)",
    description: "Esnek torbalı aspirasyon sistemleri için mobil taşıma arabası.",
    longDescription:
      "Esnek torba kullanan aspirasyon kanisterlerini taşımak ve mobilite sağlamak için tasarlanmış tekerlekli arabadır.",
    features: [{ icon: "truck", title: "Kolay Taşıma", description: "Mobilite ve kullanım kolaylığı." }],
    specifications: [{ name: "Kapasite", value: "1-4 kanister" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["kanister-esnek-torba"],
  },
  {
    id: "aspirasyon-torbalari-drenaj",
    name: "ASPİRASYON TORBALARI",
    category: "DRENAJ",
    subcategory: "ASPİRASYON TORBALARI",
    description: "Standart aspirasyon işlemleri için tek kullanımlık torbalar.",
    longDescription: "Sert kanisterli sistemlerle uyumlu, tek kullanımlık, farklı hacimlerde aspirasyon torbalarıdır.",
    features: [{ icon: "droplet", title: "Sıvı Toplama", description: "Güvenli ve hijyenik." }],
    specifications: [{ name: "Filtre", value: "Hidrofobik, antibakteriyel" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["kanisterler-drenaj"],
  },
  {
    id: "kanisterler-drenaj",
    name: "KANİSTERLER",
    category: "DRENAJ",
    subcategory: "KANİSTERLER",
    description: "Aspirasyon torbaları için tekrar kullanılabilir sert kanisterler.",
    longDescription:
      "Standart aspirasyon torbalarının içine yerleştirildiği, otoklavlanabilir veya dezenfekte edilebilir sert dış haznelerdir.",
    features: [{ icon: "package", title: "Tekrar Kullanılabilir", description: "Dayanıklı ve steril edilebilir." }],
    specifications: [{ name: "Malzeme", value: "Polisülfon, Polikarbonat" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["aspirasyon-torbalari-drenaj"],
  },
  {
    id: "mobil-araba-drenaj",
    name: "MOBİL ARABA",
    category: "DRENAJ",
    subcategory: "MOBİL ARABA",
    description: "Sert kanisterli aspirasyon sistemleri için mobil taşıma arabası.",
    longDescription:
      "Sert kanisterli aspirasyon sistemlerini taşımak ve klinik içinde mobilite sağlamak için tasarlanmış tekerlekli arabadır.",
    features: [{ icon: "move", title: "Klinik İçi Mobilite", description: "Kolay ve güvenli taşıma." }],
    specifications: [{ name: "Yapı", value: "Paslanmaz çelik veya boyalı metal" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["kanisterler-drenaj"],
  },
  {
    id: "aspirasyon-torbasi-tandem",
    name: "ASPİRASYON TORBASI – TANDEM BAĞLANTI",
    category: "DRENAJ",
    subcategory: "ASPİRASYON TORBASI – TANDEM BAĞLANTI",
    description: "Yüksek hacimli aspirasyon için tandem bağlantılı torba sistemi.",
    longDescription:
      "Birden fazla aspirasyon torbasının seri bağlanarak kapasite artırımına olanak tanıyan özel bağlantı sistemine sahip torbalardır.",
    features: [{ icon: "link", title: "Kapasite Artırımı", description: "Uzun süreli aspirasyon için." }],
    specifications: [{ name: "Bağlantı Tipi", value: "Tandem konnektör" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["aspirasyon-torbalari-drenaj"],
  },
  {
    id: "aksesuarlar-drenaj",
    name: "AKSESUARLAR",
    category: "DRENAJ",
    subcategory: "AKSESUARLAR-DRENAJ",
    description: "Aspirasyon ve drenaj sistemleri için çeşitli aksesuarlar.",
    longDescription:
      "Aspirasyon hortumları, filtreler, bağlantı parçaları gibi drenaj ve aspirasyon sistemlerini tamamlayan çeşitli aksesuarlardır.",
    features: [{ icon: "settings", title: "Sistem Tamamlayıcı", description: "Fonksiyonelliği artırır." }],
    specifications: [{ name: "Çeşitlilik", value: "Geniş ürün yelpazesi." }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["yankauer-aspirasyon-seti"],
  },
  {
    id: "yankauer-aspirasyon-seti",
    name: "YANKAUER ASPiRASYON SETİ",
    category: "DRENAJ",
    subcategory: "YANKAUER ASPiRASYON SETİ",
    description: "Cerrahi aspirasyon için Yankauer uçlu set.",
    longDescription:
      "Ağız içi ve cerrahi alanlardaki sıvıları aspire etmek için kullanılan, sert Yankauer ucu ve bağlantı hortumundan oluşan settir.",
    features: [{ icon: "filter", title: "Etkili Aspirasyon", description: "Cerrahi alan temizliği." }],
    specifications: [{ name: "Uç Tipi", value: "Standart, Kontrol valfli" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["aspirasyon-torbalari-drenaj"],
  },
  {
    id: "drenaj-sistemleri-hemovack",
    name: "DRENAJ SİSTEMLERİ – HEMOVACK",
    category: "DRENAJ",
    subcategory: "DRENAJ SİSTEMLERİ – HEMOVACK",
    description: "Postoperatif yara drenajı için Hemovack sistemi.",
    longDescription:
      "Ameliyat sonrası yara bölgesinde biriken kan ve sıvıları düşük negatif basınçla drene etmek için kullanılan kapalı sistemdir.",
    features: [{ icon: "shield-off", title: "Kapalı Sistem Drenaj", description: "Enfeksiyon riskini azaltır." }],
    specifications: [{ name: "Hacimler", value: "200ml, 400ml, 600ml" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["drenaj-sistemleri-bomba-silikon"],
  },
  {
    id: "drenaj-sistemleri-bomba-silikon",
    name: "DRENAJ SİSTEMLERİ – BOMBA SİLİKON",
    category: "DRENAJ",
    subcategory: "DRENAJ SİSTEMLERİ – BOMBA SİLİKON",
    description: "Silikon bomba rezervuarlı yara drenaj sistemi.",
    longDescription:
      "Yumuşak silikon bomba (rezervuar) ile düşük ve sürekli negatif basınç sağlayarak yara drenajı yapan sistemdir.",
    features: [{ icon: "zap", title: "Sürekli Negatif Basınç", description: "Etkili sıvı uzaklaştırma." }],
    specifications: [{ name: "Rezervuar Malzemesi", value: "Silikon" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["silikon-round-dren"],
  },
  {
    id: "silikon-round-dren",
    name: "SİLİKON ROUND DREN",
    category: "DRENAJ",
    subcategory: "SİLİKON ROUND DREN",
    description: "Yara drenajı için yuvarlak kesitli silikon dren.",
    longDescription:
      "Yumuşak, biyouyumlu silikondan yapılmış, yara bölgesine yerleştirilerek sıvıların drenajını sağlayan yuvarlak kesitli drendir.",
    features: [{ icon: "circle", title: "Biyouyumlu Silikon", description: "Doku dostu, esnek." }],
    specifications: [{ name: "Çaplar", value: "Farklı Fr seçenekleri" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["flat-dren-drenaj"],
  },
  {
    id: "flat-dren-drenaj",
    name: "FLAT DREN",
    category: "DRENAJ",
    subcategory: "FLAT DREN",
    description: "Yara drenajı için yassı kesitli silikon veya PVC dren.",
    longDescription:
      "Özellikle dar alanlarda veya yüzeyel drenaj için kullanılan, yassı (flat) profilli, silikon veya PVC materyalden yapılmış drendir.",
    features: [{ icon: "minimize-2", title: "Yassı Profil", description: "Dar alanlar için uygun." }],
    specifications: [{ name: "Malzeme", value: "Silikon, PVC" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["silikon-round-dren"],
  },
  {
    id: "drenaj-torbali-yumusak-dren-silikon",
    name: "DRENAJ TORBALI YUMUŞAK DREN – SİLİKON",
    category: "DRENAJ",
    subcategory: "DRENAJ TORBALI YUMUŞAK DREN – SİLİKON",
    description: "Toplama torbası entegre edilmiş yumuşak silikon dren.",
    longDescription:
      "Yumuşak silikon drenden ve buna direkt bağlı toplama torbasından oluşan, pratik kullanımlı kapalı drenaj sistemidir.",
    features: [{ icon: "package", title: "Entegre Sistem", description: "Dren ve torba bir arada." }],
    specifications: [{ name: "Dren Malzemesi", value: "Silikon" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["drenaj-torbali-yumusak-dren-pvc"],
  },
  {
    id: "drenaj-torbali-yumusak-dren-pvc",
    name: "DRENAJ TORBALI YUMUŞAK DREN – PVC",
    category: "DRENAJ",
    subcategory: "DRENAJ TORBALI YUMUŞAK DREN – PVC",
    description: "Toplama torbası entegre edilmiş yumuşak PVC dren.",
    longDescription:
      "Yumuşak PVC drenden ve buna direkt bağlı toplama torbasından oluşan, ekonomik ve pratik kapalı drenaj sistemidir.",
    features: [{ icon: "dollar-sign", title: "Ekonomik Çözüm", description: "PVC malzeme ile uygun maliyet." }],
    specifications: [{ name: "Dren Malzemesi", value: "PVC" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["drenaj-torbali-yumusak-dren-silikon"],
  },
  {
    id: "konnektor-drenaj",
    name: "KONNEKTÖR",
    category: "DRENAJ",
    subcategory: "KONNEKTÖR-DRENAJ",
    description: "Drenaj sistemleri için çeşitli bağlantı konnektörleri.",
    longDescription:
      "Farklı drenaj tüplerini, torbalarını veya sistemlerini birbirine bağlamak için kullanılan çeşitli tip ve boyutlarda konnektörlerdir.",
    features: [{ icon: "link", title: "Güvenli Bağlantı", description: "Sızdırmaz ve uyumlu." }],
    specifications: [{ name: "Tipler", value: "Düz, Y-konnektör, Luer" }],
    images: ["/images/categories/drenaj.jpg"],
    relatedProducts: ["aksesuarlar-drenaj"],
  },

  // JİNEKOLOJİ
  {
    id: "vajinal-spekulum-kucuk",
    name: "Vajinal Spekülüm (Küçük)",
    category: "JİNEKOLOJİ",
    description: "Jinekolojik muayene için küçük boy vajinal spekülüm.",
    longDescription:
      "Genç hastalar ve dar anatomiye sahip kadınlar için özel olarak tasarlanmış, tek kullanımlık steril vajinal spekülümdür.",
    features: [{ icon: "user-minus", title: "Küçük Boy", description: "Hassas muayene için." }],
    specifications: [{ name: "Boyut", value: "S" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["vajinal-spekulum-orta", "vajinal-spekulum-buyuk"],
  },
  {
    id: "vajinal-spekulum-orta",
    name: "Vajinal Spekülüm (Orta)",
    category: "JİNEKOLOJİ",
    description: "Jinekolojik muayene için orta boy vajinal spekülüm.",
    longDescription:
      "Standart jinekolojik muayenelerde en sık kullanılan, tek kullanımlık steril orta boy vajinal spekülümdür.",
    features: [{ icon: "user", title: "Standart Boy", description: "Yaygın kullanıma uygun." }],
    specifications: [{ name: "Boyut", value: "M" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["vajinal-spekulum-kucuk", "vajinal-spekulum-buyuk"],
  },
  {
    id: "vajinal-spekulum-buyuk",
    name: "Vajinal Spekülüm (Büyük)",
    category: "JİNEKOLOJİ",
    description: "Jinekolojik muayene için büyük boy vajinal spekülüm.",
    longDescription:
      "Geniş anatomiye sahip hastalar veya özel işlemler için tasarlanmış, tek kullanımlık steril büyük boy vajinal spekülümdür.",
    features: [{ icon: "user-plus", title: "Geniş Boy", description: "Geniş görüş alanı sağlar." }],
    specifications: [{ name: "Boyut", value: "L" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["vajinal-spekulum-kucuk", "vajinal-spekulum-orta"],
  },
  {
    id: "iui-kateter",
    name: "IUI KATETER (IntraUterin Inseminasyon Kateteri)",
    category: "JİNEKOLOJİ",
    subcategory: "IUI KATETER (IntraUterin Inseminasyon Kateteri)",
    description: "Rahim içi aşılama (IUI) için kullanılan kateter.",
    longDescription:
      "Spermlerin direkt olarak rahim içine transfer edilmesi işleminde (aşılama) kullanılan, ince, esnek ve steril kateterdir.",
    features: [{ icon: "target", title: "Hassas Transfer", description: "Atravmatik ve etkili." }],
    specifications: [{ name: "Uç Tipi", value: "Yumuşak, düz veya açılı" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["endometrial-ornek-alma-kanulu"],
  },
  {
    id: "karman-enjektor",
    name: "KARMAN ENJEKTÖR",
    category: "JİNEKOLOJİ",
    subcategory: "KARMAN ENJEKTÖR",
    description: "Manuel vakum aspirasyonu (MVA) için Karman enjektörü.",
    longDescription:
      "Rahim içi doku örneklemesi veya erken gebelik sonlandırması gibi işlemlerde negatif basınç oluşturmak için kullanılan manuel enjektördür.",
    features: [{ icon: "minus-circle", title: "Manuel Vakum", description: "Kontrollü aspirasyon." }],
    specifications: [{ name: "Hacim", value: "60cc" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["karman-kanul-ucu"],
  },
  {
    id: "karman-kanul-ucu",
    name: "KARMAN KANÜL UCU",
    category: "JİNEKOLOJİ",
    subcategory: "KARMAN KANÜL UCU",
    description: "Karman enjektörü ile kullanılan tek kullanımlık kanül uçları.",
    longDescription:
      "Manuel vakum aspirasyonu sırasında rahim içine yerleştirilen, farklı boyutlarda, esnek veya sert, tek kullanımlık kanül uçlarıdır.",
    features: [{ icon: "tool", title: "Çeşitli Boyutlar", description: "Farklı ihtiyaçlara uygun." }],
    specifications: [{ name: "Çaplar", value: "4mm - 12mm" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["karman-enjektor"],
  },
  {
    id: "endometrial-ornek-alma-kanulu",
    name: "ENDOMETRİAL ÖRNEK ALMA KANÜLÜ",
    category: "JİNEKOLOJİ",
    subcategory: "ENDOMETRİAL ÖRNEK ALMA KANÜLÜ",
    description: "Endometriumdan (rahim iç zarı) biyopsi almak için kanül.",
    longDescription:
      "Rahim iç zarından tanısal amaçlı doku örneği (biyopsi) almak için kullanılan ince, esnek ve steril kanüldür.",
    features: [{ icon: "edit-3", title: "Atravmatik Örnekleme", description: "Minimal invaziv." }],
    specifications: [{ name: "Tip", value: "Pipelle, Novak vb." }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["smear-fircasi"],
  },
  {
    id: "smear-fircasi",
    name: "SMEAR FIRÇASI",
    category: "JİNEKOLOJİ",
    subcategory: "SMEAR FIRÇASI",
    description: "Pap smear testi için servikal hücre örneği alma fırçası.",
    longDescription:
      "Rahim ağzından (serviks) Pap smear testi için hücre örneği toplamak amacıyla kullanılan, tek kullanımlık steril fırçadır.",
    features: [{ icon: "brush", title: "Etkili Hücre Toplama", description: "Yeterli örnek alımı." }],
    specifications: [{ name: "Fırça Tipi", value: "Servikal, Endoservikal" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["smear-tasima-kabi"],
  },
  {
    id: "smear-tasima-kabi",
    name: "SMEAR TAŞIMA KABI",
    category: "JİNEKOLOJİ",
    subcategory: "SMEAR TAŞIMA KABI",
    description: "Smear örneklerini laboratuvara taşımak için özel kap.",
    longDescription:
      "Alınan smear örneklerinin güvenli ve uygun koşullarda laboratuvara transferi için kullanılan, genellikle fiksatif içeren veya içermeyen kaplardır.",
    features: [{ icon: "package", title: "Güvenli Taşıma", description: "Örnek bütünlüğünü korur." }],
    specifications: [{ name: "Tip", value: "Sıvı bazlı, Konvansiyonel" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["smear-fircasi"],
  },
  {
    id: "poche-acacagi",
    name: "POCHE AÇACAĞI",
    category: "JİNEKOLOJİ",
    subcategory: "POCHE AÇACAĞI",
    description: "Amniyotomi (su kesesinin açılması) için kullanılan alet.",
    longDescription:
      "Doğum sırasında amniyon kesesini kontrollü bir şekilde açmak (amniyotomi) için kullanılan, genellikle tek kullanımlık steril bir araçtır.",
    features: [{ icon: "scissors", title: "Kontrollü Amniyotomi", description: "Güvenli ve etkili." }],
    specifications: [{ name: "Malzeme", value: "Plastik" }],
    images: ["/images/categories/jinekoloji.jpg"],
    relatedProducts: ["gobek-kordon-klemp"],
  },

  // DİĞER (Genel Kategori)
  {
    id: "idrar-bardagi",
    name: "İdrar Bardağı",
    category: "DİĞER",
    subcategory: "DİĞER",
    description: "İdrar örneği toplama için steril bardak.",
    longDescription:
      "Laboratuvar testleri için idrar örneği toplamak amacıyla kullanılan, genellikle ölçekli ve kapaklı, tek kullanımlık steril bardaktır.",
    features: [{ icon: "beaker", title: "Steril Örnekleme", description: "Kontaminasyonsuz örnek alımı." }],
    specifications: [{ name: "Hacim", value: "100ml, 120ml" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["gaita-kabi"],
  },
  {
    id: "gaita-kabi",
    name: "Gaita Kabı",
    category: "DİĞER",
    subcategory: "DİĞER",
    description: "Gaita (dışkı) örneği toplama için kapaklı ve kaşıklı kap.",
    longDescription:
      "Laboratuvar incelemeleri için gaita örneği toplamak amacıyla kullanılan, genellikle örnek alma kaşığı içeren, tek kullanımlık steril veya non-steril kaplardır.",
    features: [{ icon: "trash", title: "Hijyenik Toplama", description: "Kaşıklı ve kapaklı tasarım." }],
    specifications: [{ name: "Hacim", value: "20ml, 30ml" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["idrar-bardagi"],
  },
  {
    id: "damla-ayar-seti",
    name: "DAMLA AYAR SETİ",
    category: "DİĞER",
    subcategory: "DAMLA AYAR SETİ",
    description: "IV tedavi sırasında sıvı akış hızını ayarlamak için set.",
    longDescription:
      "İntravenöz (IV) sıvı tedavilerinde, sıvının hastaya veriliş hızını (damla/dakika) hassas bir şekilde ayarlamak için kullanılan settir.",
    features: [{ icon: "sliders", title: "Hassas Akış Kontrolü", description: "Doğru dozajlama sağlar." }],
    specifications: [{ name: "Tip", value: "Makro, Mikro damla" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["instoper-heparin-cap"],
  },
  {
    id: "lavman-seti",
    name: "LAVMAN SETİ",
    category: "DİĞER",
    subcategory: "LAVMAN SETİ",
    description: "Rektal yolla sıvı vermek (lavman) için kullanılan set.",
    longDescription:
      "Bağırsak temizliği veya ilaç uygulaması amacıyla rektal yoldan sıvı vermek için kullanılan, torba, hortum ve rektal uçtan oluşan settir.",
    features: [{ icon: "droplet", title: "Rektal Uygulama", description: "Kolay ve güvenli kullanım." }],
    specifications: [{ name: "Hacim", value: "1L, 1.5L" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: [],
  },
  {
    id: "gobek-kordon-klemp",
    name: "GÖBEK KORDON KLEMP",
    category: "DİĞER",
    subcategory: "GÖBEK KORDON KLEMP",
    description: "Yenidoğanlarda göbek kordonunu klemplemek için plastik klemp.",
    longDescription:
      "Doğumdan sonra yenidoğanın göbek kordonunu kanamayı önlemek amacıyla sıkıştırmak için kullanılan, tek kullanımlık steril plastik klemptir.",
    features: [{ icon: "lock", title: "Güvenli Klempleme", description: "Kaymaz ve sağlam." }],
    specifications: [{ name: "Malzeme", value: "Medikal Plastik" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["poche-acacagi"],
  },
  {
    id: "cerrahi-el-fircasi",
    name: "CERRAHİ EL FIRÇALARI",
    category: "DİĞER",
    subcategory: "CERRAHİ EL FIRÇALARI",
    description: "Cerrahi öncesi el ve tırnak temizliği için fırça.",
    longDescription:
      "Cerrahların ve ameliyathane personelinin operasyon öncesi el hijyenini sağlamak için kullandığı, genellikle antiseptik emdirilmiş veya kuru, tek kullanımlık fırçalardır.",
    features: [{ icon: "sun", title: "Etkili Temizlik", description: "Antiseptik özellikli olabilir." }],
    specifications: [{ name: "Tip", value: "Kuru, Antiseptikli" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: [],
  },
  {
    id: "biyopsi-punch",
    name: "BİYOPSİ PUNCH",
    category: "DİĞER",
    subcategory: "BİYOPSİ PUNCH",
    description: "Deri ve diğer dokulardan küçük silindirik örnek almak için punch.",
    longDescription:
      "Dermatoloji ve diğer cerrahi dallarda, tanısal amaçlı olarak deriden veya diğer yumuşak dokulardan tam kat silindirik biyopsi örneği almak için kullanılan keskin, tek kullanımlık alettir.",
    features: [{ icon: "disc", title: "Hassas Örnekleme", description: "Farklı çaplarda mevcut." }],
    specifications: [{ name: "Çaplar", value: "2mm - 8mm" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["endometrial-ornek-alma-kanulu"],
  },
  {
    id: "instoper-heparin-cap",
    name: "İNSTOPER (HEPARİN ÇAP)",
    category: "DİĞER",
    subcategory: "İNSTOPER (HEPARİN ÇAP)",
    description: "IV kanüllerin ucunu kapatmak ve heparin uygulamak için kapak.",
    longDescription:
      "İntravenöz kanüllerin kullanılmadığı zamanlarda pıhtılaşmayı önlemek ve steril kalmasını sağlamak amacıyla ucuna takılan, heparin enjeksiyon portu da olabilen kapaktır.",
    features: [{ icon: "shield-check", title: "Pıhtılaşmayı Önler", description: "Kanül açıklığını korur." }],
    specifications: [{ name: "Bağlantı", value: "Luer Lock" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["damla-ayar-seti"],
  },
  {
    id: "kamera-kilifi",
    name: "KAMERA KILIFI",
    category: "DİĞER",
    subcategory: "KAMERA KILIFI",
    description: "Endoskopik ve laparoskopik kameralar için steril kılıf.",
    longDescription:
      "Cerrahi işlemler sırasında kullanılan endoskopik veya laparoskopik kamera sistemlerini steril tutmak için tasarlanmış, tek kullanımlık şeffaf kılıflardır.",
    features: [{ icon: "video", title: "Steril Bariyer", description: "Kamera sistemini korur." }],
    specifications: [{ name: "Malzeme", value: "Şeffaf Polietilen" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: [],
  },
  {
    id: "kan-gazi-enjektoru",
    name: "KAN GAZI ENJEKTÖRÜ",
    category: "DİĞER",
    subcategory: "KAN GAZI ENJEKTÖRÜ",
    description: "Arteriyel kan gazı analizi için heparinli enjektör.",
    longDescription:
      "Arterden kan örneği alarak kan gazı değerlerini (pH, pO2, pCO2 vb.) ölçmek için kullanılan, genellikle pıhtılaşmayı önleyici heparin içeren özel enjektörlerdir.",
    features: [{ icon: "droplet", title: "Arteriyel Örnekleme", description: "Heparinli, hava kabarcıksız." }],
    specifications: [{ name: "Hacim", value: "1ml, 3ml" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["idrar-bardagi"],
  },
  {
    id: "idrar-torbasi-askisi",
    name: "İDRAR TORBASI ASKISI",
    category: "DİĞER",
    subcategory: "İDRAR TORBASI ASKISI",
    description: "İdrar toplama torbalarını yatak kenarına veya tekerlekli sandalyeye asmak için askı.",
    longDescription:
      "Hastaların idrar toplama torbalarını yatak, sedye veya tekerlekli sandalye gibi yerlere güvenli bir şekilde asmak için kullanılan plastik veya metal askılardır.",
    features: [{ icon: "paperclip", title: "Güvenli Sabitleme", description: "Torbanın düşmesini engeller." }],
    specifications: [{ name: "Malzeme", value: "Plastik, Metal" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["idrar-bardagi"],
  },
  {
    id: "kunye",
    name: "KÜNYE",
    category: "DİĞER",
    subcategory: "KÜNYE",
    description: "Hasta kimlik bilgileri için bilek veya yatak başı künyesi.",
    longDescription:
      "Hastanelerde hasta kimliğini doğrulamak ve karışıklıkları önlemek amacıyla kullanılan, bileğe takılan veya yatak başına asılan, üzerine hasta bilgilerinin yazıldığı künyelerdir.",
    features: [{ icon: "user-check", title: "Hasta Kimlik Doğrulama", description: "Güvenliği artırır." }],
    specifications: [{ name: "Tipler", value: "Yetişkin, Çocuk, Bebek" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: [],
  },
  {
    id: "gaz-ornek-alma-hatti",
    name: "GAZ ÖRNEK ALMA HATTI",
    category: "DİĞER",
    subcategory: "GAZ ÖRNEK ALMA HATTI",
    description: "Anestezi sırasında solunum gazlarını analiz etmek için örnek alma hattı.",
    longDescription:
      "Anestezi cihazlarından veya solunum devrelerinden gaz örneği alarak kapnografi veya diğer gaz analiz cihazlarına iletmek için kullanılan ince hortumdur.",
    features: [{ icon: "bar-chart", title: "Gaz Analizi", description: "Solunum gazlarını izleme." }],
    specifications: [{ name: "Uzunluk", value: "Standart" }],
    images: ["/images/categories/diger-tibbi-malzemeler.jpg"],
    relatedProducts: ["filtreler-anestezi"],
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
