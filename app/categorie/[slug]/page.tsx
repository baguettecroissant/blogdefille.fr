import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { categories, getArticlesByCategory, Category } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';

export function generateStaticParams() {
    return categories.map(cat => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const cat = categories.find(c => c.slug === slug);
    if (!cat) return {};
    return {
        title: `${cat.name} — Conseils & Inspirations`,
        description: `Découvrez nos articles ${cat.name.toLowerCase()} : ${cat.description.toLowerCase()}. Conseils, tendances et inspirations sur Blog de fille.`,
        openGraph: {
            title: `${cat.name} — Blog de fille`,
            description: cat.description,
            type: 'website',
            locale: 'fr_FR',
            images: [{ url: 'https://blogdefille.fr/images/hero-bg.jpg', width: 1200, height: 630 }],
        },
        alternates: { canonical: `https://blogdefille.fr/categorie/${cat.slug}` },
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cat = categories.find(c => c.slug === slug);
    if (!cat) notFound();

    const catArticles = getArticlesByCategory(slug as Category);

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://blogdefille.fr',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: cat.name,
                item: `https://blogdefille.fr/categorie/${cat.slug}`,
            },
        ],
    };

    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: cat.name,
        description: cat.description,
        url: `https://blogdefille.fr/categorie/${cat.slug}`,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Blog de fille',
            url: 'https://blogdefille.fr',
        },
        numberOfItems: catArticles.length,
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

            <section className="category-header">
                <h1>{cat.name}</h1>
                <p>{cat.description}</p>
            </section>

            <section className="category-content" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
                {catArticles.length > 0 ? (
                    <div className="bento-grid">
                        {catArticles.map((article, index) => {
                            let bentoClass = 'bento-wide';
                            if (index === 0 && catArticles.length >= 3) bentoClass = 'bento-featured';
                            else if ((index === 1 || index === 2) && catArticles.length >= 3) bentoClass = 'bento-tall';
                            return (
                                <div key={article.id} className={`bento-item ${bentoClass}`}>
                                    <ArticleCard article={article} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem 1.5rem', color: 'var(--gray-400)' }}>
                        <p>Aucun article dans cette catégorie pour le moment. Revenez bientôt !</p>
                    </div>
                )}
            </section>

            <Newsletter />
        </>
    );
}
