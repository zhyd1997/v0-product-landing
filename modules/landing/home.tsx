import {FC} from "react"
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
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <ProductLandingHeader dict={dict.header} />

            {/* Hero Section */}
            <ProductLandingHero dict={dict.hero} />

            {/* Products Section */}
            <ProductOverview products={products} dict={dict.overview} />

            {/* Footer */}
            <ProductLandingFooter dict={dict.footer} />
        </div>
    )
}
