import {ProductLandingPage} from "@/modules/landing/home";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function HomePage({params}: {
  params: Promise<{ lang: 'en' | 'tr' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
      <ProductLandingPage dict={dict} />
    );
}
