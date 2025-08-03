import {ShoppingBag} from "lucide-react";
import Link from "next/link";

export const ProductLandingFooter = () => {
    return (
        <footer className="border-t py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="font-bold text-xl">ShopHub</span>
                        </div>
                        <p className="text-muted-foreground">Your one-stop destination for amazing products at great prices.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Home & Garden
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Fashion
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}