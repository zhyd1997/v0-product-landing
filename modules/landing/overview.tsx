import {Button} from "@/components/ui/button";
import {products} from "@/modules/landing/constants/products";
import type {FC} from "react";
import {ProductDetail} from "@/modules/landing/detail";
import type { ProductDetailProps } from "@/modules/landing/detail";

export interface ProductOverviewProps extends Pick<ProductDetailProps, 'favorites' | 'toggleFavorite'> {}

export const ProductOverview: FC<ProductOverviewProps> = (props) => {
    const {favorites, toggleFavorite} = props;

    return (
        <>
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
                            <ProductDetail key={product.id} product={product} favorites={favorites} toggleFavorite={toggleFavorite} />
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
        </>
    )
}