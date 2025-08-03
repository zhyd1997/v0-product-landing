import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://v0-product-landing-pied.vercel.app',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://v0-product-landing-pied.vercel.app/en',
                    tr: 'https://v0-product-landing-pied.vercel.app/tr',
                },
            },
        },
        {
            url: 'https://v0-product-landing-pied.vercel.app/about',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://v0-product-landing-pied.vercel.app/en/about',
                    tr: 'https://v0-product-landing-pied.vercel.app/tr/about',
                },
            },
        },
        {
            url: 'https://v0-product-landing-pied.vercel.app/blog',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://v0-product-landing-pied.vercel.app/en/blog',
                    tr: 'https://v0-product-landing-pied.vercel.app/tr/blog',
                },
            },
        },
    ]
}
