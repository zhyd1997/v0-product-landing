export interface Product {
    id: number
    name: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    reviews: number
    category: string
    isNew?: boolean
    isSale?: boolean
}

const productsEn: Product[] = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        originalPrice: 99.99,
        image: "/products/airpods.jpg?height=300&width=300",
        rating: 4.5,
        reviews: 128,
        category: "Electronics",
        isSale: true,
    },
    {
        id: 2,
        name: "Premium Coffee Maker",
        price: 149.99,
        image: "/products/coffee-maker.jpg?height=300&width=300",
        rating: 4.8,
        reviews: 89,
        category: "Kitchen",
        isNew: true,
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        price: 299.99,
        image: "/products/chair.jpg?height=300&width=300",
        rating: 4.6,
        reviews: 156,
        category: "Furniture",
    },
    {
        id: 4,
        name: "Smart Fitness Watch",
        price: 199.99,
        originalPrice: 249.99,
        image: "/products/watch.jpg?height=300&width=300",
        rating: 4.4,
        reviews: 203,
        category: "Electronics",
        isSale: true,
    },
    {
        id: 5,
        name: "Organic Skincare Set",
        price: 89.99,
        image: "/products/skincare-set.jpg?height=300&width=300",
        rating: 4.7,
        reviews: 94,
        category: "Beauty",
        isNew: true,
    },
    {
        id: 6,
        name: "Portable Bluetooth Speaker",
        price: 59.99,
        image: "/products/bluetooth-speaker.jpg?height=300&width=300",
        rating: 4.3,
        reviews: 167,
        category: "Electronics",
    },
];

const productsTr: Product[] = [
    {
        id: 1,
        name: "Kablosuz Bluetooth Kulaklık",
        price: 79.99,
        originalPrice: 99.99,
        image: "/products/airpods.jpg?height=300&width=300",
        rating: 4.5,
        reviews: 128,
        category: "Elektronik",
        isSale: true,
    },
    {
        id: 2,
        name: "Premium Kahve Makinesi",
        price: 149.99,
        image: "/products/coffee-maker.jpg?height=300&width=300",
        rating: 4.8,
        reviews: 89,
        category: "Mutfak",
        isNew: true,
    },
    {
        id: 3,
        name: "Ergonomik Ofis Sandalyesi",
        price: 299.99,
        image: "/products/chair.jpg?height=300&width=300",
        rating: 4.6,
        reviews: 156,
        category: "Mobilya",
    },
    {
        id: 4,
        name: "Akıllı Fitness Saati",
        price: 199.99,
        originalPrice: 249.99,
        image: "/products/watch.jpg?height=300&width=300",
        rating: 4.4,
        reviews: 203,
        category: "Elektronik",
        isSale: true,
    },
    {
        id: 5,
        name: "Organik Cilt Bakım Seti",
        price: 89.99,
        image: "/products/skincare-set.jpg?height=300&width=300",
        rating: 4.7,
        reviews: 94,
        category: "Güzellik",
        isNew: true,
    },
    {
        id: 6,
        name: "Taşınabilir Bluetooth Hoparlör",
        price: 59.99,
        image: "/products/bluetooth-speaker.jpg?height=300&width=300",
        rating: 4.3,
        reviews: 167,
        category: "Elektronik",
    },
];

export function getProducts(lang: 'en' | 'tr'): Product[] {
    return lang === 'tr' ? productsTr : productsEn;
}
