"use client"

import { useState } from "react"
import {ProductLandingHeader} from "@/modules/landing/header";
import {ProductLandingHero} from "@/modules/landing/hero";
import {ProductLandingFooter} from "@/modules/landing/footer";
import {ProductOverview} from "@/modules/landing/overview";

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

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <ProductLandingHeader favorites={favorites} />

            {/* Hero Section */}
            <ProductLandingHero />

            {/* Products Section */}
            <ProductOverview favorites={favorites} toggleFavorite={toggleFavorite} />

            {/* Footer */}
            <ProductLandingFooter />
        </div>
    )
}
