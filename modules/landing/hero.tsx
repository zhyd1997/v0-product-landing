import {Button} from "@/components/ui/button";

export const ProductLandingHero = () => {
    return (
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
    )
}