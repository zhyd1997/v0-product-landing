"use client"

import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Heart, Star} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import type {Product} from "@/modules/landing/constants/products";
import type {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, toggle} from "@/lib/features/products/favoritesSlice";

export interface ProductDetailProps {
    product: Product
    dict: {
        badgeNew: string
        badgeSale: string
        reviews: string
        addToCart: string
    }
}

export const ProductDetail: FC<ProductDetailProps> = (props) => {
    const {product, dict} = props;

    const dispatch = useDispatch()

    const favorites = useSelector(selectFavorites)

    const toggleFavorite = () => {
        dispatch(toggle(product.id))
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
                    {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">{dict.badgeNew}</Badge>}
                    {product.isSale && <Badge className="bg-red-500 hover:bg-red-600">{dict.badgeSale}</Badge>}
                </div>

                {/* Favorite Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-200"
                    onClick={toggleFavorite}
                >
                    <Heart
                        className={`h-5 w-5 transition-all duration-200 ${
                            favorites.includes(product.id)
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
                      {product.rating} ({product.reviews} {dict.reviews})
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                    </div>
                    <Button size="sm">{dict.addToCart}</Button>
                </div>
            </CardContent>
        </Card>
    )
}