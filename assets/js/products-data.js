/**
 * VESTARO – PREMIUM MEN'S FORMAL WEAR STORE
 * Product Catalogue, Brand Collections & Sartorial Pairing Data
 * 24 Curated Products (Divisible by 2, 3, and 4 columns for zero empty grid slots)
 */

window.VESTARO_CONFIG = {
  brandName: "VESTARO",
  tagline: "The Art of Dressing Well.",
  whatsappNumber: "919820000000",
  storePhone: "+91 (022) 6789-4321",
  storeEmail: "concierge@vestaro.in",
  storeAddress: "Suite 104, The Heritage Arcade, Luxury Retail Boulevard (Configurable Flagship Location)",
  openingHours: "Monday – Sunday: 10:30 AM – 09:00 PM IST",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    youtube: "https://youtube.com"
  }
};

window.VESTARO_CATEGORIES = [
  "All",
  "Formal Shirts",
  "Slim Fit Shirts",
  "Regular Fit Shirts",
  "Formal Trousers",
  "Slim Fit Trousers",
  "Regular Fit Trousers",
  "Blazers",
  "Business Suits",
  "Waistcoats",
  "Formal Accessories"
];

window.VESTARO_BRANDS = [
  {
    id: "vestaro-signature",
    name: "VESTARO Signature",
    monogram: "VS • MILANO",
    tagline: "The Pinnacle of Sartorial Excellence",
    signatureStyle: "Full-Canvas Super 150s Wool Suits & Sea Island Cotton Dress Shirts",
    eraStyle: "Timeless Italian Bespoke",
    description: "Our flagship house label crafted with full-canvas construction, hand-rolled lapels, mother-of-pearl buttons, and two-ply Egyptian and Sea Island cottons for discerning leaders.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=1000&q=85",
    video: "videos/10319603-uhd_2160_3840_25fps.mp4",
    featuredCategory: "Business Suits"
  },
  {
    id: "the-executive-edit",
    name: "The Executive Edit",
    monogram: "TEE • LONDON",
    tagline: "Commanding Boardroom Authority",
    signatureStyle: "Non-Iron Cavalry Twill Shirts & Sharp Peak-Lapel Power Suits",
    eraStyle: "Modern Boardroom Architecture",
    description: "Engineered for high-stakes global executives. Crease-resistant merino wool tailoring and crisp non-iron poplin shirts that stay immaculate from morning flights to evening galas.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&h=1000&q=85",
    video: "videos/10320260-uhd_2160_3840_25fps.mp4",
    featuredCategory: "Formal Shirts"
  },
  {
    id: "classic-tailors",
    name: "Classic Tailors",
    monogram: "CT • JERMYN ST",
    tagline: "British Savile & Jermyn Street Heritage",
    signatureStyle: "Split-Yoke Poplin Shirts, Double-Cuff French Weaves & Structured Blazers",
    eraStyle: "Classic British Sartorial",
    description: "Inspired by Jermyn Street shirtmaking traditions. Featuring brass collar stays, four-piece split yokes, and structured chest canvases that honor centuries of classic menswear.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&h=1000&q=85",
    video: "videos/4651577-uhd_2160_4096_30fps.mp4",
    featuredCategory: "Regular Fit Shirts"
  },
  {
    id: "urban-gentleman",
    name: "Urban Gentleman",
    monogram: "UG • CONTEMPORARY",
    tagline: "Razor-Sharp Contemporary Silhouettes",
    signatureStyle: "Tapered Slim-Fit Shirts, Unstructured Hopsack Blazers & Pleated Trousers",
    eraStyle: "Contemporary Metropolitan",
    description: "Designed for the dynamic cosmopolitan gentleman. Clean minimal lines, tapered athletic cuts, and breathable natural-stretch Italian fabrics for effortless day-to-night transitions.",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&h=1000&q=85",
    video: "videos/13801231-uhd_2160_3840_24fps.mp4",
    featuredCategory: "Slim Fit Shirts"
  },
  {
    id: "heritage-formal",
    name: "Heritage Formal",
    monogram: "HF • CEREMONY",
    tagline: "Black-Tie & Grand Occasion Mastery",
    signatureStyle: "Three-Piece Waistcoat Ensembles, Barathea Tuxedos & Silk Jacquard Ties",
    eraStyle: "Ceremonial & Formal Occasionwear",
    description: "Dedicated to black-tie galas, diplomatic receptions, and milestone celebrations. Rich barathea wools, grosgrain silk facings, and double-breasted waistcoats.",
    image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&h=1000&q=85",
    video: "videos/6766334-uhd_2160_3840_25fps.mp4",
    featuredCategory: "Waistcoats"
  },
  {
    id: "modern-office-collection",
    name: "Modern Office Collection",
    monogram: "MOC • ESSENTIALS",
    tagline: "Refined Daily Workwear Wardrobe",
    signatureStyle: "Breathable Oxford Weaves, Gurkha-Tab Trousers & Leather Dress Essentials",
    eraStyle: "Elevated Everyday Business",
    description: "The cornerstone of a distinguished five-day rotation. Interlocking colour palettes across shirts, tailored trousers, and full-grain calfskin accessories that pair effortlessly.",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&h=1000&q=85",
    video: "videos/7647327-uhd_2160_3840_24fps.mp4",
    featuredCategory: "Formal Trousers"
  }
];

window.VESTARO_PRODUCTS = [
  {
    id: "vst-001",
    name: "Jermyn Non-Iron Royal Oxford Shirt",
    category: "Formal Shirts",
    subCategories: ["Formal Shirts", "Regular Fit Shirts"],
    brand: "Classic Tailors",
    price: 4490,
    originalPrice: 5490,
    discountPercent: 18,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#C8DCF0" },
      { name: "Navy", hex: "#1B2A4A" }
    ],
    fabric: "100% 2-Ply Egyptian Royal Oxford Cotton (Non-Iron Finish, Brass Collar Stays)",
    shortDesc: "Signature semi-spread collar dress shirt in luminous two-ply Egyptian Royal Oxford weave.",
    description: "Woven from long-staple Egyptian cotton in a distinctive diamond Royal Oxford texture, this shirt delivers day-long crispness without ironing. Finished with split-yoke shoulder construction and mother-of-pearl buttons.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 99,
    dateAdded: "2026-10-28"
  },
  {
    id: "vst-002",
    name: "Mayfair Sky Herringbone Slim Shirt",
    category: "Slim Fit Shirts",
    subCategories: ["Formal Shirts", "Slim Fit Shirts"],
    brand: "The Executive Edit",
    price: 4790,
    originalPrice: 5990,
    discountPercent: 20,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Sky Blue", hex: "#B8D2EB" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Ivory", hex: "#F5F1E9" }
    ],
    fabric: "Superfine 120s Micro-Herringbone Cotton with French Double Cuffs",
    shortDesc: "Tapered slim-fit herringbone weave with cutaway collar and convertible cuffs.",
    description: "Cut close through the chest and waist for a clean silhouette beneath tailored jackets. The subtle micro-herringbone weave catches the light with understated luxury.",
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 96,
    dateAdded: "2026-10-25"
  },
  {
    id: "vst-003",
    name: "Savile Sea Island Poplin Dress Shirt",
    category: "Regular Fit Shirts",
    subCategories: ["Formal Shirts", "Regular Fit Shirts"],
    brand: "VESTARO Signature",
    price: 6490,
    originalPrice: 7490,
    discountPercent: 13,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Ivory", hex: "#F5F1E9" },
      { name: "Sky Blue", hex: "#C8DCF0" }
    ],
    fabric: "100% West Indian Sea Island 140s Poplin Cotton",
    shortDesc: "Ultra-silky 140s Sea Island cotton poplin built for cufflinks and executive boardrooms.",
    description: "Our finest formal shirt crafted from certified Sea Island cotton. Features hand-shanked Ascolite mother-of-pearl buttons, reinforced gussets, and a classic Windsor spread collar.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: true,
    popularity: 93,
    dateAdded: "2026-09-18"
  },
  {
    id: "vst-004",
    name: "Milano Atelier Poplin Trio Shirt",
    category: "Slim Fit Shirts",
    subCategories: ["Formal Shirts", "Slim Fit Shirts"],
    brand: "Urban Gentleman",
    price: 4290,
    originalPrice: 4990,
    discountPercent: 14,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#C8DCF0" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "97% Combed Egyptian Cotton, 3% Elastane Satin-Touch Poplin",
    shortDesc: "Architectural slim-fit dress shirt with structured spread collar and natural stretch.",
    description: "Tailored with dual back darts for a contoured torso fit. Ideal for pairing with charcoal trousers or wearing beneath an unstructured hopsack blazer.",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 88,
    dateAdded: "2026-09-10"
  },
  {
    id: "vst-005",
    name: "Biella Super 120s Pleated Trousers",
    category: "Formal Trousers",
    subCategories: ["Formal Trousers", "Regular Fit Trousers"],
    brand: "VESTARO Signature",
    price: 7890,
    originalPrice: 8990,
    discountPercent: 12,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#25272B" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Black", hex: "#111214" }
    ],
    fabric: "100% Super 120s Pure Virgin Merino Wool (Biella, Italy)",
    shortDesc: "Single-pleat tailored wool trousers with side-tab adjusters and horn buttons.",
    description: "Cut with a comfortable mid-to-high rise and a clean tapered leg. Features a curtained sartorial waistband, D-ring side adjusters, and breathable Bemberg knee lining.",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 97,
    dateAdded: "2026-10-22"
  },
  {
    id: "vst-006",
    name: "Kensington Navy Cavalry Twill Trousers",
    category: "Slim Fit Trousers",
    subCategories: ["Formal Trousers", "Slim Fit Trousers"],
    brand: "Modern Office Collection",
    price: 6290,
    originalPrice: 7490,
    discountPercent: 16,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Warm Taupe", hex: "#B99A65" }
    ],
    fabric: "98% Merino Wool, 2% Lycra Crease-Recovery Cavalry Twill",
    shortDesc: "Flat-front slim trousers engineered for sharp crease retention and daily travel.",
    description: "Crafted from resilient diagonal-ribbed cavalry twill that naturally sheds wrinkles. Internal silicone shirt-grip keeps your formal shirt neatly tucked all day.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 94,
    dateAdded: "2026-10-19"
  },
  {
    id: "vst-007",
    name: "Westminster Gurkha Ivory Trousers",
    category: "Regular Fit Trousers",
    subCategories: ["Formal Trousers", "Regular Fit Trousers"],
    brand: "Classic Tailors",
    price: 6890,
    originalPrice: 7990,
    discountPercent: 14,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Ivory", hex: "#F5F1E9" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Navy", hex: "#1B2A4A" }
    ],
    fabric: "Italian Tropical Fresco Wool & Linen Blend",
    shortDesc: "Extended double-buckle Gurkha waistband trousers with deep forward pleats.",
    description: "An iconic sartorial statement that eliminates the need for a belt. Breathable fresco weave drapes cleanly and keeps you cool in warmer climates.",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 89,
    dateAdded: "2026-09-05"
  },
  {
    id: "vst-008",
    name: "Soho Jet Black Tailored Trousers",
    category: "Slim Fit Trousers",
    subCategories: ["Formal Trousers", "Slim Fit Trousers"],
    brand: "Urban Gentleman",
    price: 5890,
    originalPrice: 6990,
    discountPercent: 16,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Navy", hex: "#1B2A4A" }
    ],
    fabric: "Super 110s Worsted Wool with Natural Mechanical Stretch",
    shortDesc: "Razor-sharp black dress trousers with blind-stitched hems and double-button tab.",
    description: "The quintessential formal black trouser for boardroom presentations and evening occasions. Clean pocket welts and a streamlined silhouette.",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 86,
    dateAdded: "2026-08-29"
  },
  {
    id: "vst-009",
    name: "Brera Navy Hopsack Sartorial Blazer",
    category: "Blazers",
    subCategories: ["Blazers"],
    brand: "VESTARO Signature",
    price: 18990,
    originalPrice: 22490,
    discountPercent: 16,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "100% Vitale Barberis Canonico Hopsack Wool (Half-Canvas)",
    shortDesc: "Neapolitan shoulder navy hopsack blazer with working surgeon's cuffs.",
    description: "Our most versatile blazer. Crafted with soft spalla camicia shoulders, a generous notch lapel with hand pick-stitching, and smoked mother-of-pearl buttons.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 98,
    dateAdded: "2026-10-27"
  },
  {
    id: "vst-010",
    name: "Belgravia Windowpane Club Blazer",
    category: "Blazers",
    subCategories: ["Blazers"],
    brand: "The Executive Edit",
    price: 21490,
    originalPrice: 24990,
    discountPercent: 14,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "English Worsted Wool with Horn Buttons & Peak Lapels",
    shortDesc: "Tailored windowpane check blazer with sweeping peak lapels and patch pockets.",
    description: "Commands immediate presence in any room. Structured shoulders and a sculpted waist create a distinguished V-shaped frame.",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: true,
    popularity: 92,
    dateAdded: "2026-09-24"
  },
  {
    id: "vst-011",
    name: "Como Soft Grey Merino Wool Blazer",
    category: "Blazers",
    subCategories: ["Blazers"],
    brand: "Urban Gentleman",
    price: 19490,
    originalPrice: 22990,
    discountPercent: 15,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#25272B" },
      { name: "Warm Taupe", hex: "#B99A65" },
      { name: "Ivory", hex: "#F5F1E9" }
    ],
    fabric: "80% Virgin Wool, 12% Mulberry Silk, 8% Linen Birdseye Weave",
    shortDesc: "Featherlight unlined jacket in an expressive soft-grey wool-silk blend.",
    description: "Combines the drape of wool, the subtle lustre of silk, and the breathability of linen. Pairs effortlessly with both crisp white shirts and charcoal trousers.",
    image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: false,
    popularity: 90,
    dateAdded: "2026-10-14"
  },
  {
    id: "vst-012",
    name: "Sartoria Milano Three-Piece Suit",
    category: "Business Suits",
    subCategories: ["Business Suits"],
    brand: "VESTARO Signature",
    price: 36990,
    originalPrice: 42990,
    discountPercent: 14,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Black", hex: "#111214" }
    ],
    fabric: "100% Super 150s Reda Merino Wool (Full Floating Horsehair Canvas)",
    shortDesc: "Flagship three-piece suit comprising jacket, five-button waistcoat, and pleated trousers.",
    description: "Hand-finished in our signature Milanese cut. Full floating horsehair canvas molds to your physique over time, delivering peerless comfort and lapel roll.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 100,
    dateAdded: "2026-10-30"
  },
  {
    id: "vst-013",
    name: "Canary Wharf Midnight Power Suit",
    category: "Business Suits",
    subCategories: ["Business Suits"],
    brand: "The Executive Edit",
    price: 32990,
    originalPrice: 38990,
    discountPercent: 15,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Navy", hex: "#1B2A4A" }
    ],
    fabric: "100% Super 130s Huddersfield Worsted Merino Wool",
    shortDesc: "Classic two-piece executive suit with structured notch lapels and dual vents.",
    description: "Tailored for C-suite authority. Subtle worsted weave elongates the frame while the Huddersfield wool resists creasing during long boardroom sessions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: true,
    popularity: 95,
    dateAdded: "2026-10-05"
  },
  {
    id: "vst-014",
    name: "Grosvenor Sovereign Black Business Suit",
    category: "Business Suits",
    subCategories: ["Business Suits"],
    brand: "Classic Tailors",
    price: 29490,
    originalPrice: 34990,
    discountPercent: 16,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#111214" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "100% Super 120s Four-Season Sharkskin Merino Wool",
    shortDesc: "All-season sharkskin weave suit with classic notch lapels and flat-front trousers.",
    description: "Every gentleman's foundational suit. The bi-tonal sharkskin weave offers depth and resilience across all four seasons.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 91,
    dateAdded: "2026-09-12"
  },
  {
    id: "vst-015",
    name: "Burlington Herringbone Wool Waistcoat",
    category: "Waistcoats",
    subCategories: ["Waistcoats"],
    brand: "Heritage Formal",
    price: 8990,
    originalPrice: 10490,
    discountPercent: 14,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Taupe", hex: "#B99A65" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Black", hex: "#111214" }
    ],
    fabric: "Super 130s Herringbone Wool Front with Cupro Jacquard Back & Cinch",
    shortDesc: "Tailored herringbone waistcoat ensemble that elevates formal layering.",
    description: "Featuring sculpted lapels, real horn buttons, and an adjustable rear cinch buckle for a bespoke contoured fit.",
    image: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 92,
    dateAdded: "2026-10-20"
  },
  {
    id: "vst-016",
    name: "Ascot Charcoal Check Formal Waistcoat",
    category: "Waistcoats",
    subCategories: ["Waistcoats"],
    brand: "Heritage Formal",
    price: 8490,
    originalPrice: 9990,
    discountPercent: 15,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#25272B" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Warm Taupe", hex: "#B99A65" }
    ],
    fabric: "75% Merino Wool, 25% Como Silk Glen Check",
    shortDesc: "Five-button single-breasted waistcoat with contrast glen-check trim.",
    description: "Designed to provide sophisticated contrast beneath navy, charcoal, or morning-dress tailoring.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 85,
    dateAdded: "2026-08-22"
  },
  {
    id: "vst-017",
    name: "Como 7-Fold Champagne Jacquard Silk Tie",
    category: "Formal Accessories",
    subCategories: ["Formal Accessories"],
    brand: "VESTARO Signature",
    price: 3490,
    originalPrice: 4290,
    discountPercent: 19,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Taupe", hex: "#B99A65" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Black", hex: "#111214" }
    ],
    fabric: "100% Hand-Rolled 7-Fold Como Mulberry Jacquard Silk",
    shortDesc: "Seven-fold unlined Italian silk necktie paired with a hand-rolled silk finish.",
    description: "Woven in Como, Italy, and folded seven times by hand for a substantial dimple and rich drape.",
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: true,
    popularity: 94,
    dateAdded: "2026-10-01"
  },
  {
    id: "vst-018",
    name: "Florentine Box-Calf Dress Belt",
    category: "Formal Accessories",
    subCategories: ["Formal Accessories"],
    brand: "Modern Office Collection",
    price: 4990,
    originalPrice: 5990,
    discountPercent: 17,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Taupe", hex: "#B99A65" },
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "Full-Grain Hand-Stitched Italian Box Calfskin & Brushed Buckle",
    shortDesc: "32mm full-grain calfskin dress belt with hand-stitched keeper and palladium buckle.",
    description: "Presented in a velvet-lined VESTARO presentation box. Feather-edged calfskin leather transitions seamlessly between formal trousers.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 87,
    dateAdded: "2026-09-15"
  },
  {
    id: "vst-019",
    name: "Northampton Goodyear Oxford Dress Shoes",
    category: "Formal Accessories",
    subCategories: ["Formal Accessories"],
    brand: "Heritage Formal",
    price: 14990,
    originalPrice: 17990,
    discountPercent: 17,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Taupe", hex: "#B99A65" },
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "French Annonay Calfskin Upper with Goodyear-Welted Oak-Bark Leather Sole",
    shortDesc: "Hand-burnished formal leather dress shoes with Goodyear welt construction.",
    description: "Built on a chiselled formal last with cork footbed cushioning that molds to your foot.",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&h=1000&q=85",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 96,
    dateAdded: "2026-10-18"
  },
  {
    id: "vst-020",
    name: "Bond Street Double-Cuff White Poplin Shirt",
    category: "Formal Shirts",
    subCategories: ["Formal Shirts", "Slim Fit Shirts"],
    brand: "VESTARO Signature",
    price: 5290,
    originalPrice: 6290,
    discountPercent: 16,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#C8DCF0" },
      { name: "Ivory", hex: "#F5F1E9" }
    ],
    fabric: "100% 2-Ply 120s Egyptian Poplin Cotton with French Cuffs",
    shortDesc: "Crisp white French-cuff formal shirt tailored for black-tie and boardroom wear.",
    description: "Cut with a sharp Windsor spread collar and French double cuffs. Includes complimentary rhodium-plated brass collar stays.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: false,
    popularity: 91,
    dateAdded: "2026-10-21"
  },
  {
    id: "vst-021",
    name: "Pall Mall Charcoal Worsted Pleated Trousers",
    category: "Regular Fit Trousers",
    subCategories: ["Formal Trousers", "Regular Fit Trousers"],
    brand: "The Executive Edit",
    price: 7290,
    originalPrice: 8490,
    discountPercent: 14,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#25272B" },
      { name: "Black", hex: "#111214" },
      { name: "Navy", hex: "#1B2A4A" }
    ],
    fabric: "100% Super 130s English Worsted Merino Wool",
    shortDesc: "Classic regular-fit pleated formal trousers with sartorial waistband grip.",
    description: "Tailored for all-day boardroom comfort with single forward pleats and horn button closures.",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 89,
    dateAdded: "2026-09-28"
  },
  {
    id: "vst-022",
    name: "Roma Sovereign Emerald-Charcoal Suit",
    category: "Business Suits",
    subCategories: ["Business Suits"],
    brand: "Urban Gentleman",
    price: 34490,
    originalPrice: 39990,
    discountPercent: 14,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#25272B" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Black", hex: "#111214" }
    ],
    fabric: "100% Super 140s Biella Worsted Wool (Half-Canvas)",
    shortDesc: "Contemporary peak-lapel two-piece suit with horn buttons and tapered trousers.",
    description: "Sculpted with sweeping peak lapels and a contoured waist for modern executive distinction.",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: true,
    popularity: 95,
    dateAdded: "2026-10-24"
  },
  {
    id: "vst-023",
    name: "Knightsbridge Blue Check Three-Piece Vest",
    category: "Waistcoats",
    subCategories: ["Waistcoats"],
    brand: "Classic Tailors",
    price: 9290,
    originalPrice: 10990,
    discountPercent: 15,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Charcoal", hex: "#25272B" },
      { name: "Warm Taupe", hex: "#B99A65" }
    ],
    fabric: "100% British Shetland & Merino Windowpane Check Wool",
    shortDesc: "Five-button tailored windowpane waistcoat with welt pockets and satin back.",
    description: "Worn either as part of a three-piece suit or as a statement layering piece beneath navy blazers.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: false,
    isTrending: false,
    popularity: 88,
    dateAdded: "2026-09-19"
  },
  {
    id: "vst-024",
    name: "Mayfair Hand-Burnished Brogue Wingtips",
    category: "Formal Accessories",
    subCategories: ["Formal Accessories"],
    brand: "Modern Office Collection",
    price: 15490,
    originalPrice: 18490,
    discountPercent: 16,
    fit: "Regular Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Taupe", hex: "#B99A65" },
      { name: "Black", hex: "#111214" },
      { name: "Charcoal", hex: "#25272B" }
    ],
    fabric: "Full-Grain Calfskin Leather with Perforated Medallion Toe",
    shortDesc: "Artisanal perforated Derby brogues crafted from hand-burnished calfskin.",
    description: "Pairs effortlessly with navy, charcoal, and ivory tailored trousers for distinguished formal elegance.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&h=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&h=1000&q=85"
    ],
    isNew: true,
    isTrending: false,
    popularity: 93,
    dateAdded: "2026-10-16"
  }
];
