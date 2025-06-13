export interface ProductFeature {
  icon: string
  title: string
  description: string
}

export interface ProductSpecification {
  name: string
  value: string
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  compareAtPrice?: number
  inStock: boolean
  attributes: Record<string, string>
}

export interface ProductReview {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  helpful: number
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
  variants: ProductVariant[]
  reviews: ProductReview[]
  rating: number
  reviewCount: number
  isNew?: boolean
  isFeatured?: boolean
  relatedProducts: string[]
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  subcategories?: { id: string; name: string }[]
}

// Sample product categories
export const categories: Category[] = [
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    description: "High-quality medical equipment for hospitals and clinics",
    image: "/placeholder.svg?height=400&width=600",
    subcategories: [
      { id: "diagnostic", name: "Diagnostic Equipment" },
      { id: "surgical", name: "Surgical Equipment" },
      { id: "monitoring", name: "Patient Monitoring" },
    ],
  },
  {
    id: "disposables",
    name: "Disposable Products",
    description: "Single-use medical supplies for healthcare facilities",
    image: "/placeholder.svg?height=400&width=600",
    subcategories: [
      { id: "syringes", name: "Syringes & Needles" },
      { id: "gloves", name: "Medical Gloves" },
      { id: "masks", name: "Face Masks & PPE" },
    ],
  },
  {
    id: "laboratory",
    name: "Laboratory Equipment",
    description: "Precision instruments for medical laboratories",
    image: "/placeholder.svg?height=400&width=600",
    subcategories: [
      { id: "analyzers", name: "Clinical Analyzers" },
      { id: "microscopes", name: "Microscopes" },
      { id: "centrifuges", name: "Centrifuges" },
    ],
  },
  {
    id: "furniture",
    name: "Medical Furniture",
    description: "Specialized furniture for healthcare environments",
    image: "/placeholder.svg?height=400&width=600",
    subcategories: [
      { id: "beds", name: "Hospital Beds" },
      { id: "cabinets", name: "Medical Cabinets" },
      { id: "chairs", name: "Examination Chairs" },
    ],
  },
]

// Sample products
export const products: Product[] = [
  {
    id: "advanced-patient-monitor",
    name: "Advanced Patient Monitor Pro X5",
    category: "Medical Equipment",
    subcategory: "Patient Monitoring",
    description: "Comprehensive patient monitoring system with advanced vital sign tracking capabilities.",
    longDescription: `The Advanced Patient Monitor Pro X5 is a state-of-the-art monitoring system designed for intensive care units, operating rooms, and emergency departments. 

    This high-performance monitor provides continuous, real-time monitoring of vital signs including ECG, SpO2, NIBP, temperature, and respiration. The 15-inch high-resolution touchscreen display offers clear visibility of patient data from various angles.
    
    With wireless connectivity capabilities, the Pro X5 integrates seamlessly with hospital information systems, allowing healthcare providers to access patient data remotely. The system features customizable alarm settings, trend analysis, and comprehensive data management tools.
    
    Built with durability in mind, the Pro X5 includes a long-lasting battery backup, ensuring uninterrupted monitoring during patient transport or power outages. The intuitive interface reduces training time and improves workflow efficiency for healthcare professionals.`,
    features: [
      {
        icon: "heart-pulse",
        title: "Multi-Parameter Monitoring",
        description: "Simultaneous tracking of ECG, SpO2, NIBP, temperature, and respiration",
      },
      {
        icon: "monitor",
        title: "15-inch Touchscreen",
        description: "High-resolution display with intuitive touch interface",
      },
      {
        icon: "wifi",
        title: "Wireless Connectivity",
        description: "Seamless integration with hospital information systems",
      },
      {
        icon: "battery",
        title: "Extended Battery Life",
        description: "Up to 8 hours of continuous operation on battery power",
      },
      {
        icon: "bell",
        title: "Smart Alarm System",
        description: "Customizable alarms with visual and audio indicators",
      },
      {
        icon: "trending-up",
        title: "Advanced Analytics",
        description: "Real-time trend analysis and comprehensive reporting",
      },
    ],
    specifications: [
      { name: "Display Size", value: "15-inch touchscreen" },
      { name: "Resolution", value: "1920 x 1080 pixels" },
      { name: "Parameters", value: "ECG, SpO2, NIBP, Temp, Resp" },
      { name: "ECG Leads", value: "3/5/12-lead options" },
      { name: "Battery Life", value: "Up to 8 hours" },
      { name: "Dimensions", value: "370 x 320 x 170 mm" },
      { name: "Weight", value: "5.2 kg (with battery)" },
      { name: "Storage", value: "256GB SSD" },
      { name: "Connectivity", value: "Wi-Fi, Bluetooth, Ethernet, USB" },
      { name: "Certifications", value: "FDA, CE, ISO 13485" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    variants: [
      {
        id: "pm-standard",
        name: "Standard Edition",
        price: 12500,
        compareAtPrice: 13999,
        inStock: true,
        attributes: {
          version: "Standard",
          warranty: "2 years",
        },
      },
      {
        id: "pm-advanced",
        name: "Advanced Edition",
        price: 15800,
        inStock: true,
        attributes: {
          version: "Advanced",
          warranty: "3 years",
        },
      },
      {
        id: "pm-premium",
        name: "Premium Edition",
        price: 18900,
        inStock: false,
        attributes: {
          version: "Premium",
          warranty: "5 years",
        },
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Dr. Sarah Johnson",
        rating: 5,
        date: "2023-08-15",
        comment:
          "Excellent monitoring system with intuitive interface. The wireless connectivity has greatly improved our workflow efficiency.",
        helpful: 24,
      },
      {
        id: "r2",
        author: "Nurse Mark Thompson",
        rating: 4,
        date: "2023-07-22",
        comment:
          "Very reliable system with great battery life. The touchscreen could be slightly more responsive, but overall it's a fantastic unit.",
        helpful: 16,
      },
      {
        id: "r3",
        author: "Dr. Emily Chen",
        rating: 5,
        date: "2023-06-30",
        comment:
          "The Pro X5 has been a game-changer for our ICU. The alarm system is highly customizable and the data analytics are incredibly useful.",
        helpful: 31,
      },
    ],
    rating: 4.7,
    reviewCount: 42,
    isNew: true,
    isFeatured: true,
    relatedProducts: ["digital-vital-signs-monitor", "portable-ecg-monitor", "wireless-patient-monitor"],
  },
  {
    id: "digital-vital-signs-monitor",
    name: "Digital Vital Signs Monitor VS2",
    category: "Medical Equipment",
    subcategory: "Patient Monitoring",
    description: "Compact and reliable vital signs monitor for routine patient assessment.",
    longDescription: `The Digital Vital Signs Monitor VS2 is a compact, user-friendly monitoring solution designed for routine vital signs assessment in various healthcare settings. This versatile monitor provides accurate measurements of blood pressure, pulse rate, SpO2, and temperature.

    With its lightweight design and rechargeable battery, the VS2 offers excellent mobility for spot-checks and continuous monitoring. The bright 7-inch color display ensures clear visibility of vital signs data, even in low-light environments.
    
    The VS2 features one-touch operation for quick measurements and includes memory storage for reviewing previous readings. Its durable construction withstands the rigors of daily clinical use, while the antimicrobial housing helps reduce the risk of cross-contamination.
    
    Ideal for general wards, clinics, and ambulatory care, the VS2 provides reliable performance at an affordable price point, making it an excellent choice for healthcare facilities of all sizes.`,
    features: [
      {
        icon: "activity",
        title: "Multi-Parameter Monitoring",
        description: "Measures NIBP, SpO2, pulse rate, and temperature",
      },
      {
        icon: "zap",
        title: "Rapid Assessment",
        description: "One-touch operation for quick vital signs measurement",
      },
      {
        icon: "save",
        title: "Data Storage",
        description: "Stores up to 1,000 measurement records",
      },
      {
        icon: "battery",
        title: "Rechargeable Battery",
        description: "Up to 10 hours of continuous operation",
      },
    ],
    specifications: [
      { name: "Display Size", value: "7-inch color LCD" },
      { name: "Resolution", value: "800 x 480 pixels" },
      { name: "Parameters", value: "NIBP, SpO2, Pulse Rate, Temperature" },
      { name: "NIBP Range", value: "0-300 mmHg" },
      { name: "SpO2 Range", value: "0-100%" },
      { name: "Battery Life", value: "Up to 10 hours" },
      { name: "Dimensions", value: "240 x 180 x 120 mm" },
      { name: "Weight", value: "1.8 kg" },
      { name: "Memory", value: "1,000 measurements" },
      { name: "Certifications", value: "FDA, CE" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    variants: [
      {
        id: "vs2-standard",
        name: "Standard Package",
        price: 2999,
        compareAtPrice: 3499,
        inStock: true,
        attributes: {
          version: "Standard",
          warranty: "1 year",
        },
      },
      {
        id: "vs2-plus",
        name: "Plus Package",
        price: 3499,
        inStock: true,
        attributes: {
          version: "Plus",
          warranty: "2 years",
        },
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Nurse Rebecca Miller",
        rating: 5,
        date: "2023-09-05",
        comment: "Perfect for our busy clinic. Easy to use and very reliable readings.",
        helpful: 12,
      },
      {
        id: "r2",
        author: "Dr. James Wilson",
        rating: 4,
        date: "2023-08-17",
        comment: "Good value for money. Battery life is excellent and the display is clear.",
        helpful: 8,
      },
    ],
    rating: 4.5,
    reviewCount: 28,
    relatedProducts: ["advanced-patient-monitor", "portable-ecg-monitor", "wireless-patient-monitor"],
  },
  {
    id: "digital-microscope-pro",
    name: "Digital Microscope Pro M800",
    category: "Laboratory Equipment",
    subcategory: "Microscopes",
    description: "High-resolution digital microscope with advanced imaging capabilities for laboratory applications.",
    longDescription: `The Digital Microscope Pro M800 is a cutting-edge imaging system designed for modern laboratories and research facilities. With its 20-megapixel camera and powerful optics, the M800 delivers exceptional image quality for detailed specimen analysis.

    This advanced microscope features a motorized stage for precise positioning and a versatile illumination system with both transmitted and reflected LED lighting options. The 10.1-inch built-in touchscreen display allows for immediate viewing and analysis, while the integrated software provides tools for measurement, annotation, and image enhancement.
    
    The M800 supports magnification ranges from 40x to 1000x, making it suitable for a wide variety of applications including clinical pathology, microbiology, and materials science. Its modular design allows for easy upgrades and customization to meet specific research needs.
    
    With multiple connectivity options including Wi-Fi, USB, and HDMI, the M800 facilitates seamless data sharing and documentation. The system includes built-in storage and supports cloud integration for secure backup of valuable research data.`,
    features: [
      {
        icon: "camera",
        title: "20MP Camera",
        description: "High-resolution imaging for detailed specimen analysis",
      },
      {
        icon: "maximize",
        title: "Versatile Magnification",
        description: "40x to 1000x magnification range",
      },
      {
        icon: "monitor",
        title: "Built-in Display",
        description: "10.1-inch touchscreen for immediate viewing",
      },
      {
        icon: "move",
        title: "Motorized Stage",
        description: "Precise positioning with digital controls",
      },
      {
        icon: "sun",
        title: "Advanced Illumination",
        description: "Dual LED lighting system with adjustable intensity",
      },
      {
        icon: "save",
        title: "Integrated Storage",
        description: "128GB internal storage with cloud backup options",
      },
    ],
    specifications: [
      { name: "Camera Resolution", value: "20 megapixels" },
      { name: "Magnification", value: "40x - 1000x" },
      { name: "Display", value: "10.1-inch touchscreen" },
      { name: "Illumination", value: "Dual LED (transmitted and reflected)" },
      { name: "Stage", value: "Motorized, 100x100mm travel range" },
      { name: "Storage", value: "128GB internal, expandable via USB" },
      { name: "Connectivity", value: "Wi-Fi, USB 3.0, HDMI, Ethernet" },
      { name: "Software", value: "Advanced imaging suite with measurement tools" },
      { name: "Dimensions", value: "380 x 240 x 450 mm" },
      { name: "Weight", value: "12 kg" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    variants: [
      {
        id: "m800-standard",
        name: "Standard Edition",
        price: 9500,
        compareAtPrice: 10999,
        inStock: true,
        attributes: {
          version: "Standard",
          warranty: "2 years",
        },
      },
      {
        id: "m800-advanced",
        name: "Advanced Edition",
        price: 12800,
        inStock: true,
        attributes: {
          version: "Advanced",
          warranty: "3 years",
        },
      },
      {
        id: "m800-research",
        name: "Research Edition",
        price: 15900,
        inStock: false,
        attributes: {
          version: "Research",
          warranty: "5 years",
        },
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Dr. Michael Brown",
        rating: 5,
        date: "2023-07-12",
        comment:
          "Exceptional image quality and intuitive software. The motorized stage has greatly improved our workflow precision.",
        helpful: 19,
      },
      {
        id: "r2",
        author: "Lab Technician Lisa Garcia",
        rating: 4,
        date: "2023-06-28",
        comment:
          "Very impressive microscope with excellent optics. The touchscreen is responsive and the software is feature-rich.",
        helpful: 14,
      },
    ],
    rating: 4.8,
    reviewCount: 35,
    isFeatured: true,
    relatedProducts: ["laboratory-centrifuge", "clinical-analyzer", "slide-preparation-system"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.category === getCategoryById(categoryId)?.name)
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return products.filter((product) => product.subcategory === getSubcategoryName(subcategoryId))
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
