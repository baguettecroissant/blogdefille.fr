import { MetadataRoute } from 'next';
import { articles, categories } from '@/lib/data';

const BASE_URL = 'https://blogdefille.fr';

export default function sitemap(): MetadataRoute.Sitemap {
    const articleUrls = articles.map(article => ({
        url: `${BASE_URL}/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const categoryUrls = categories.map(cat => ({
        url: `${BASE_URL}/categorie/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const staticPages = [
        { url: `${BASE_URL}/a-propos`, changeFrequency: 'monthly' as const, priority: 0.5 },
        { url: `${BASE_URL}/contact`, changeFrequency: 'yearly' as const, priority: 0.4 },
        { url: `${BASE_URL}/mentions-legales`, changeFrequency: 'yearly' as const, priority: 0.2 },
        { url: `${BASE_URL}/politique-confidentialite`, changeFrequency: 'yearly' as const, priority: 0.2 },
    ].map(p => ({ ...p, lastModified: new Date() }));

    const toolPages = [
        { url: `${BASE_URL}/outils`, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${BASE_URL}/outils/convertisseur-tailles`, changeFrequency: 'yearly' as const, priority: 0.8 },
        { url: `${BASE_URL}/outils/quiz-type-de-peau`, changeFrequency: 'yearly' as const, priority: 0.8 },
        { url: `${BASE_URL}/outils/calculateur-taille-bague`, changeFrequency: 'yearly' as const, priority: 0.8 },
    ].map(p => ({ ...p, lastModified: new Date() }));

    return [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        ...categoryUrls,
        ...articleUrls,
        ...toolPages,
        ...staticPages,
    ];
}
