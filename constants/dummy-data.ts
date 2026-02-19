// ============================================================
// DUMMY DATA - Temporary replacement for Sanity CMS
// Remove this file and uncomment Sanity code when ready
// ============================================================

export interface DummyProduct {
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    slug: { current: string; _type: "slug" };
    price: number;
    discount?: number;
    images: DummyImage[];
    status?: "new" | "hot" | "sale";
    stock?: number;
    variantInfo?: string;
    description?: any;
    rating?: number;
    isBestSelling?: boolean;
    isTopRated?: boolean;
    salesCount?: number;
    categories?: any[];
    brand?: string;
    collection?: string;
    variant?: string;
}

export interface DummyImage {
    _key: string;
    _type: "image";
    url: string;
}

export interface DummyCategory {
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    slug: { current: string; _type: "slug" };
    description?: string;
    image?: DummyImage;
}

export interface DummyHero {
    _id: string;
    seasonTitle: string;
    mainHeading: string;
    subheading?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    heroImage?: DummyImage;
    order: number;
}

export interface DummyBanner {
    _id: string;
    title: string;
    description?: string;
    image?: DummyImage;
    ctaText?: string;
    ctaLink?: string;
    placement: string;
}

export interface DummyShowcase {
    _id: string;
    title: string;
    subtitle?: string;
    products: DummyProduct[];
    backgroundColor?: string;
    ctaText?: string;
    ctaLink?: string;
}

// -----------------------------------------------------------
// PRODUCTS
// -----------------------------------------------------------

export const DUMMY_PRODUCTS: DummyProduct[] = [
    {
        _id: "prod-1",
        _type: "product",
        _createdAt: "2024-01-01T00:00:00Z",
        _updatedAt: "2024-01-01T00:00:00Z",
        _rev: "1",
        name: "Classic Pinstripe Shirt",
        slug: { current: "classic-pinstripe-shirt", _type: "slug" },
        price: 7500,
        discount: 0,
        stock: 25,
        status: "new",
        variantInfo: "Blue / S-XL",
        rating: 4.8,
        isBestSelling: true,
        isTopRated: true,
        salesCount: 120,
        images: [
            { _key: "img-1a", _type: "image", url: "/images/classic-pinstripe-shirt.png" },
        ],
        description: [{ _type: "block", _key: "d1", children: [{ _type: "span", _key: "s1", text: "A timeless blue pinstripe shirt made from premium lightweight cotton. Perfect for both casual and semi-formal urban settings." }] }],
    },
    {
        _id: "prod-2",
        _type: "product",
        _createdAt: "2024-01-02T00:00:00Z",
        _updatedAt: "2024-01-02T00:00:00Z",
        _rev: "1",
        name: "Urban Signature Hoodie",
        slug: { current: "urban-signature-hoodie", _type: "slug" },
        price: 4800,
        discount: 0,
        stock: 18,
        status: "new",
        variantInfo: "Black / S-XXL",
        rating: 4.9,
        isBestSelling: true,
        isTopRated: true,
        salesCount: 95,
        images: [
            { _key: "img-2a", _type: "image", url: "/images/urban-signature-hoodie.png" },
        ],
        description: [{ _type: "block", _key: "d2", children: [{ _type: "span", _key: "s2", text: "Heavyweight black hoodie featuring signature red branding on the sleeves. Designed for a bold, uncompromising street silhouette." }] }],
    },
    {
        _id: "prod-3",
        _type: "product",
        _createdAt: "2024-01-03T00:00:00Z",
        _updatedAt: "2024-01-03T00:00:00Z",
        _rev: "1",
        name: "Heritage Forest Polo",
        slug: { current: "heritage-forest-polo", _type: "slug" },
        price: 5500,
        discount: 0,
        stock: 12,
        status: "new",
        variantInfo: "Forest Green / S-XL",
        rating: 4.7,
        isBestSelling: false,
        isTopRated: true,
        salesCount: 65,
        images: [
            { _key: "img-3a", _type: "image", url: "/images/heritage-forest-polo.png" },
        ],
        description: [{ _type: "block", _key: "d3", children: [{ _type: "span", _key: "s3", text: "Premium forest green polo shirt with classic heritage detailing. Engineered for comfort and style in the concrete jungle." }] }],
    },
    {
        _id: "prod-4",
        _type: "product",
        _createdAt: "2024-01-04T00:00:00Z",
        _updatedAt: "2024-01-04T00:00:00Z",
        _rev: "1",
        name: "Midnight Oxford Shirt",
        slug: { current: "midnight-oxford-shirt", _type: "slug" },
        price: 6200,
        discount: 0,
        stock: 30,
        status: "hot",
        variantInfo: "Navy / S-XXL",
        rating: 4.6,
        isBestSelling: true,
        isTopRated: false,
        salesCount: 150,
        images: [
            { _key: "img-4a", _type: "image", url: "/images/midnight-oxford-shirt.png" },
        ],
        description: [{ _type: "block", _key: "d4", children: [{ _type: "span", _key: "s4", text: "Durable navy oxford shirt with a modern tailored fit. A versatile essential for the modern urban wardrobe." }] }],
    },
    {
        _id: "prod-5",
        _type: "product",
        _createdAt: "2024-01-05T00:00:00Z",
        _updatedAt: "2024-01-05T00:00:00Z",
        _rev: "1",
        name: "Stealth Hoodie",
        slug: { current: "stealth-hoodie", _type: "slug" },
        price: 6500,
        discount: 20,
        stock: 20,
        status: "new",
        variantInfo: "Charcoal / M-XXL",
        rating: 4.9,
        isBestSelling: true,
        isTopRated: true,
        salesCount: 200,
        images: [
            { _key: "img-5a", _type: "image", url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80" },
            { _key: "img-5b", _type: "image", url: "https://images.unsplash.com/photo-1578768079470-0a4c2e3c4f62?w=800&q=80" },
        ],
        description: [{ _type: "block", _key: "d5", children: [{ _type: "span", _key: "s5", text: "Premium 400gsm French terry hoodie with kangaroo pocket and hidden zip. Double-layered hood with waxed drawcords. Minimalist design, maximum presence." }] }],
    },
    {
        _id: "prod-6",
        _type: "product",
        _createdAt: "2024-01-06T00:00:00Z",
        _updatedAt: "2024-01-06T00:00:00Z",
        _rev: "1",
        name: "Noir Button-Down Shirt",
        slug: { current: "noir-button-down-shirt", _type: "slug" },
        price: 4200,
        discount: 0,
        stock: 15,
        status: "new",
        variantInfo: "Black / S-XL",
        rating: 4.5,
        isBestSelling: false,
        isTopRated: false,
        salesCount: 40,
        images: [
            { _key: "img-6a", _type: "image", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80" },
            { _key: "img-6b", _type: "image", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80" },
        ],
        description: [{ _type: "block", _key: "d6", children: [{ _type: "span", _key: "s6", text: "Relaxed-fit button-down in matte black cotton twill. Features a hidden button placket and curved hem for a clean, modern silhouette." }] }],
    },
    {
        _id: "prod-7",
        _type: "product",
        _createdAt: "2024-01-07T00:00:00Z",
        _updatedAt: "2024-01-07T00:00:00Z",
        _rev: "1",
        name: "Urban Tech Joggers",
        slug: { current: "urban-tech-joggers", _type: "slug" },
        price: 4500,
        discount: 10,
        stock: 22,
        status: "hot",
        variantInfo: "Slate Grey / S-XXL",
        rating: 4.7,
        isBestSelling: true,
        isTopRated: true,
        salesCount: 180,
        images: [
            { _key: "img-7a", _type: "image", url: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80" },
            { _key: "img-7b", _type: "image", url: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80" },
        ],
        description: [{ _type: "block", _key: "d7", children: [{ _type: "span", _key: "s7", text: "Performance joggers with a street-ready aesthetic. Water-resistant ripstop fabric with tapered leg and zippered pockets. Elastic waist with internal drawcord." }] }],
    },
    {
        _id: "prod-8",
        _type: "product",
        _createdAt: "2024-01-08T00:00:00Z",
        _updatedAt: "2024-01-08T00:00:00Z",
        _rev: "1",
        name: "Heritage Graphic Tee",
        slug: { current: "heritage-graphic-tee", _type: "slug" },
        price: 2900,
        discount: 0,
        stock: 40,
        status: "new",
        variantInfo: "Off-White / S-XXL",
        rating: 4.4,
        isBestSelling: false,
        isTopRated: false,
        salesCount: 55,
        images: [
            { _key: "img-8a", _type: "image", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80" },
            { _key: "img-8b", _type: "image", url: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80" },
        ],
        description: [{ _type: "block", _key: "d8", children: [{ _type: "span", _key: "s8", text: "Premium boxy-fit graphic tee with screen-printed heritage motif. 220gsm combed cotton with reinforced neck seam. Limited edition seasonal print." }] }],
    },
    {
        _id: "prod-9",
        _type: "product",
        _createdAt: "2024-01-09T00:00:00Z",
        _updatedAt: "2024-01-09T00:00:00Z",
        _rev: "1",
        name: "Raw Selvedge Denim",
        slug: { current: "raw-selvedge-denim", _type: "slug" },
        price: 8500,
        discount: 0,
        stock: 15,
        status: "new",
        variantInfo: "Indigo / 30-36",
        rating: 4.9,
        isBestSelling: true,
        isTopRated: true,
        salesCount: 45,
        images: [
            { _key: "img-9a", _type: "image", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80" },
        ],
        description: [{ _type: "block", _key: "d9", children: [{ _type: "span", _key: "s9", text: "Premium 14oz raw selvedge denim. Dark indigo blue with a stiff, structural silhouette that ages uniquely with wear. Minimalist design for the true denim enthusiast." }] }],
    },
    {
        _id: "prod-10",
        _type: "product",
        _createdAt: "2024-01-10T00:00:00Z",
        _updatedAt: "2024-01-10T00:00:00Z",
        _rev: "1",
        name: "Distressed Slim Jeans",
        slug: { current: "distressed-slim-jeans", _type: "slug" },
        price: 12500,
        discount: 10,
        stock: 10,
        status: "hot",
        variantInfo: "Washed Black / 28-34",
        rating: 4.8,
        isBestSelling: false,
        isTopRated: true,
        salesCount: 30,
        images: [
            { _key: "img-10a", _type: "image", url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80" },
        ],
        description: [{ _type: "block", _key: "d10", children: [{ _type: "span", _key: "s10", text: "Modern slim-fit jeans featuring artful distressed detailing and ripped knees. Washed black finish for a rugged urban aesthetic." }] }],
    },
];

// -----------------------------------------------------------
// CATEGORIES
// -----------------------------------------------------------

export const DUMMY_CATEGORIES: DummyCategory[] = [
    {
        _id: "cat-1",
        _type: "category",
        _createdAt: "2024-01-01T00:00:00Z",
        _updatedAt: "2024-01-01T00:00:00Z",
        _rev: "1",
        title: "T-Shirts",
        slug: { current: "t-shirts", _type: "slug" },
        description: "Premium oversized and fitted tees for the modern streetwear enthusiast.",
        image: { _key: "cat-img-1", _type: "image", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
    },
    {
        _id: "cat-2",
        _type: "category",
        _createdAt: "2024-01-01T00:00:00Z",
        _updatedAt: "2024-01-01T00:00:00Z",
        _rev: "1",
        title: "Pants",
        slug: { current: "pants", _type: "slug" },
        description: "Cargo pants, joggers, and technical trousers built for the streets.",
        image: { _key: "cat-img-2", _type: "image", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80" },
    },
    {
        _id: "cat-3",
        _type: "category",
        _createdAt: "2024-01-01T00:00:00Z",
        _updatedAt: "2024-01-01T00:00:00Z",
        _rev: "1",
        title: "Denim",
        slug: { current: "denim", _type: "slug" },
        description: "Raw selvedge and washed denim in modern silhouettes.",
        image: { _key: "cat-img-3", _type: "image", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80" },
    },
    {
        _id: "cat-4",
        _type: "category",
        _createdAt: "2024-01-01T00:00:00Z",
        _updatedAt: "2024-01-01T00:00:00Z",
        _rev: "1",
        title: "Outerwear",
        slug: { current: "outerwear", _type: "slug" },
        description: "Jackets, hoodies, and layering pieces for every season.",
        image: { _key: "cat-img-4", _type: "image", url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80" },
    },
];

// -----------------------------------------------------------
// SHOP HERO
// -----------------------------------------------------------

export const DUMMY_HEROES: DummyHero[] = [
    {
        _id: "hero-1",
        seasonTitle: "Spring / Summer 2025",
        mainHeading: "Redefine Your Edge",
        subheading: "Premium streetwear crafted for those who move different.",
        primaryButtonText: "Shop Now",
        primaryButtonLink: "/shop",
        secondaryButtonText: "New Arrivals",
        secondaryButtonLink: "/category/t-shirts",
        heroImage: { _key: "hero-img-1", _type: "image", url: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1920&q=80" },
        order: 1,
    },
    {
        _id: "hero-2",
        seasonTitle: "Limited Drop",
        mainHeading: "Shadow Collection",
        subheading: "Dark aesthetics. Bold statements. Available now.",
        primaryButtonText: "Explore",
        primaryButtonLink: "/shop",
        heroImage: { _key: "hero-img-2", _type: "image", url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687b0b?w=1920&q=80" },
        order: 2,
    },
];

// -----------------------------------------------------------
// PROMO BANNERS
// -----------------------------------------------------------

export const DUMMY_PROMO_BANNERS: DummyBanner[] = [
    {
        _id: "promo-1",
        title: "New Season Drops",
        description: "Explore the latest arrivals from our Spring collection",
        image: { _key: "promo-img-1", _type: "image", url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&q=80" },
        ctaText: "Shop New",
        ctaLink: "/shop",
        placement: "promo-left",
    },
    {
        _id: "promo-2",
        title: "Streetwear Essentials",
        image: { _key: "promo-img-2", _type: "image", url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
        ctaText: "View",
        ctaLink: "/category/t-shirts",
        placement: "promo-top-right-1",
    },
    {
        _id: "promo-3",
        title: "Denim Edit",
        image: { _key: "promo-img-3", _type: "image", url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80" },
        ctaText: "View",
        ctaLink: "/category/denim",
        placement: "promo-top-right-2",
    },
    {
        _id: "promo-4",
        title: "Urban Cargo Collection",
        description: "Technical meets style",
        image: { _key: "promo-img-4", _type: "image", url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80" },
        ctaText: "Explore Pants",
        ctaLink: "/category/pants",
        placement: "promo-bottom-right",
    },
];

// -----------------------------------------------------------
// MID-PAGE BANNERS
// -----------------------------------------------------------

export const DUMMY_MID_BANNERS: DummyBanner[] = [
    {
        _id: "mid-1",
        title: "The Art of Layering",
        description: "Master your outerwear game with our curated picks",
        image: { _key: "mid-img-1", _type: "image", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" },
        ctaText: "Shop Outerwear",
        ctaLink: "/category/outerwear",
        placement: "mid-left",
    },
    {
        _id: "mid-2",
        title: "Built Different",
        description: "Premium fabrics. Uncompromising fit.",
        image: { _key: "mid-img-2", _type: "image", url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&q=80" },
        ctaText: "Discover More",
        ctaLink: "/shop",
        placement: "mid-right",
    },
];

// -----------------------------------------------------------
// PRODUCT SHOWCASE
// -----------------------------------------------------------

export const DUMMY_SHOWCASES: DummyShowcase[] = [
    {
        _id: "showcase-1",
        title: "Editor's Picks",
        subtitle: "Handpicked pieces from our latest collection",
        products: DUMMY_PRODUCTS.slice(0, 4),
        backgroundColor: "beige",
        ctaText: "View All",
        ctaLink: "/shop",
    },
];

// -----------------------------------------------------------
// Helper: map products by pseudo-category
// -----------------------------------------------------------

const PRODUCT_CATEGORY_MAP: Record<string, string[]> = {
    "t-shirts": ["prod-1", "prod-8"],
    "pants": ["prod-2", "prod-7"],
    "denim": ["prod-9", "prod-10"],
    "outerwear": ["prod-3", "prod-5"],
};

export const getProductsByDummyCategory = (categorySlug: string): DummyProduct[] => {
    if (categorySlug === "all") return DUMMY_PRODUCTS;
    const ids = PRODUCT_CATEGORY_MAP[categorySlug];
    if (!ids) return DUMMY_PRODUCTS; // Return all as fallback
    return DUMMY_PRODUCTS.filter((p) => ids.includes(p._id));
};

export const searchDummyProducts = (term: string): DummyProduct[] => {
    const lower = term.toLowerCase();
    return DUMMY_PRODUCTS.filter((p) => p.name?.toLowerCase().includes(lower));
};

export const getDummyProductBySlug = (slug: string): DummyProduct | null => {
    return DUMMY_PRODUCTS.find((p) => p.slug.current === slug) ?? null;
};
