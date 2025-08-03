import {Button} from "@/components/ui/button";
import {products} from "@/modules/landing/constants/products";
import type {FC} from "react";
import {ProductDetail} from "@/modules/landing/detail";
import type { ProductDetailProps } from "@/modules/landing/detail";

export interface ProductOverviewProps extends Pick<ProductDetailProps, 'favorites' | 'toggleFavorite'> {
    dict: {
        title: string
        description: string
        ctaTitle: string
        ctaDescription: string
        ctaButton: string
        product: ProductDetailProps['dict']
    }
}

export const ProductOverview: FC<ProductOverviewProps> = (props) => {
    const {favorites, toggleFavorite, dict} = props;

    return (
        <>
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {dict.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductDetail key={product.id} product={product} favorites={favorites} toggleFavorite={toggleFavorite} dict={dict.product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-muted">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">{dict.ctaTitle}</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        {dict.ctaDescription}
                    </p>
                    <Button size="lg" className="text-lg px-8">
                        {dict.ctaButton}
                    </Button>
                </div>
            </section>
        </>
    )
}