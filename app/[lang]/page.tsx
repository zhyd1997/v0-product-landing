import {ProductLandingPage} from "@/modules/landing/home";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {getProducts} from "@/modules/landing/constants/products";

export default async function HomePage({params}: {
  params: Promise<{ lang: 'en' | 'tr' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const products = getProducts(lang)

  return (
      <ProductLandingPage dict={dict} products={products} />
    );
}
