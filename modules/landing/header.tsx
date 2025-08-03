import Link from "next/link";
import {Menu, Search, ShoppingBag} from "lucide-react";
import {Button} from "@/components/ui/button";
import type {FC} from "react";
import {ModeToggle} from "@/components/mode-toggle";
import {FavoritesCountBadge} from "@/modules/landing/favorites/CountBadge";

export interface HeaderProps {
    dict: {
        appName: string
        home: string
        products: string
        categories: string
        about: string
    }
}

export const ProductLandingHeader: FC<HeaderProps> = (props) => {
    const {dict} = props;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShoppingBag className="h-6 w-6" />
                        <span className="font-bold text-xl">{dict.appName}</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.home}
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.products}
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.categories}
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.about}
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                       <FavoritesCountBadge />
                    </Button>

                    <ModeToggle />
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}