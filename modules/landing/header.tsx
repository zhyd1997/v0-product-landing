import Link from "next/link";
import {Heart, Menu, Search, ShoppingBag} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import type {FC} from "react";
import {ModeToggle} from "@/components/mode-toggle";

export interface HeaderProps {
    favorites: Set<number>;
}

export const ProductLandingHeader: FC<HeaderProps> = (props) => {
    const {favorites} = props;

    return (
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

                    <ModeToggle />
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}