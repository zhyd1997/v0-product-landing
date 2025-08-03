"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingBag, Star, Search, Menu } from "lucide-react"

interface Product {
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

const products: Product[] = [
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
]

export const ProductLandingPage = () => {
    const [favorites, setFavorites] = useState<Set<number>>(new Set())

    const toggleFavorite = (productId: number) => {
        setFavorites((prev) => {
            const newFavorites = new Set(prev)
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId)
            } else {
                newFavorites.add(productId)
            }
            return newFavorites
        })
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < rating
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                }`}
            />
        ))
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="font-bold text-xl">ShopHub</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                            Products
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                            Categories
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                            About
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="relative">
                            <Heart className="h-5 w-5" />
                            {favorites.size > 0 && (
                                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                    {favorites.size}
                                </Badge>
                            )}
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Discover Amazing Products</h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Find the perfect items for your lifestyle. From electronics to home essentials, we have everything you need
                        at unbeatable prices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8">
                            Shop Now
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                            View Categories
                        </Button>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Handpicked items that our customers love. Add them to your favorites to save for later!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="relative">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                                        {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
                                        {product.isSale && <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>}
                                    </div>

                                    {/* Favorite Button */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-200"
                                        onClick={() => toggleFavorite(product.id)}
                                    >
                                        <Heart
                                            className={`h-5 w-5 transition-all duration-200 ${
                                                favorites.has(product.id)
                                                    ? "fill-red-500 text-red-500 scale-110"
                                                    : "text-gray-600 hover:text-red-500"
                                            }`}
                                        />
                                    </Button>
                                </div>

                                <CardContent className="p-6">
                                    <div className="mb-2">
                                        <Badge variant="secondary" className="text-xs">
                                            {product.category}
                                        </Badge>
                                    </div>

                                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center">{renderStars(product.rating)}</div>
                                        <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold">${product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                                            )}
                                        </div>
                                        <Button size="sm">Add to Cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-muted">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and discover your new favorite products today.
                    </p>
                    <Button size="lg" className="text-lg px-8">
                        Browse All Products
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <ShoppingBag className="h-6 w-6" />
                                <span className="font-bold text-xl">ShopHub</span>
                            </div>
                            <p className="text-muted-foreground">Your one-stop destination for amazing products at great prices.</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Shop</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Home & Garden
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Fashion
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Shipping Info
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-foreground transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
