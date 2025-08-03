"use client"

import {useState, FC} from "react"
import {ProductLandingHeader} from "@/modules/landing/header";
import {ProductLandingHero} from "@/modules/landing/hero";
import {ProductLandingFooter} from "@/modules/landing/footer";
import {ProductOverview} from "@/modules/landing/overview";
import type {Product} from "@/modules/landing/constants/products";

export interface ProductLandingPageProps {
    dict: {
        header: any
        hero: any
        overview: any
        footer: any
    }
    products: Product[]
}

export const ProductLandingPage: FC<ProductLandingPageProps> = ({dict, products}) => {
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

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <ProductLandingHeader favorites={favorites} dict={dict.header} />

            {/* Hero Section */}
            <ProductLandingHero dict={dict.hero} />

            {/* Products Section */}
            <ProductOverview favorites={favorites} toggleFavorite={toggleFavorite} products={products} dict={dict.overview} />

            {/* Footer */}
            <ProductLandingFooter dict={dict.footer} />
        </div>
    )
}
