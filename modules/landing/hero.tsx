import {Button} from "@/components/ui/button";
import type {FC} from "react";

interface HeroProps {
    dict: {
        title: string
        description: string
        shopNow: string
        viewCategories: string
    }
}

export const ProductLandingHero: FC<HeroProps> = ({dict}) => {
    return (
        <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{dict.title}</h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {dict.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8">
                        {dict.shopNow}
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                        {dict.viewCategories}
                    </Button>
                </div>
            </div>
        </section>
    )
}