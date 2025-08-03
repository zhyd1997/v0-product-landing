import {ShoppingBag} from "lucide-react";
import Link from "next/link";
import type {FC} from "react";

interface FooterProps {
    dict: {
        tagline: string
        shop: {
            title: string
            allProducts: string
            electronics: string
            homeGarden: string
            fashion: string
        }
        support: {
            title: string
            helpCenter: string
            shippingInfo: string
            returns: string
            contactUs: string
        }
        company: {
            title: string
            aboutUs: string
            careers: string
            privacyPolicy: string
            termsOfService: string
        }
        rights: string
    }
}

export const ProductLandingFooter: FC<FooterProps> = ({dict}) => {
    return (
        <footer className="border-t py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="font-bold text-xl">ShopHub</span>
                        </div>
                        <p className="text-muted-foreground">{dict.tagline}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{dict.shop.title}</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.shop.allProducts}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.shop.electronics}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.shop.homeGarden}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.shop.fashion}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{dict.support.title}</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.support.helpCenter}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.support.shippingInfo}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.support.returns}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.support.contactUs}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{dict.company.title}</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.company.aboutUs}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.company.careers}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.company.privacyPolicy}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    {dict.company.termsOfService}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ShopHub. {dict.rights}</p>
                </div>
            </div>
        </footer>
    )
}