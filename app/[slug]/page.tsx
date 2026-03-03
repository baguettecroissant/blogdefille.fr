import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { articles, getArticleBySlug, getCategoryInfo, getArticlesByCategory } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';

export function generateStaticParams() {
    return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return {};
    const cat = getCategoryInfo(article.category);
    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.date,
            section: cat.name,
            locale: 'fr_FR',
            images: [{ url: `https://blogdefille.fr${article.image}`, width: 1200, height: 630, alt: article.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [`https://blogdefille.fr${article.image}`],
        },
        alternates: { canonical: `https://blogdefille.fr/${article.slug}` },
    };
}

function extractFAQ(content: string): { question: string; answer: string }[] {
    const faqItems: { question: string; answer: string }[] = [];
    const faqIndex = content.indexOf('<h2>FAQ</h2>');
    if (faqIndex === -1) return faqItems;

    const faqSection = content.slice(faqIndex);
    const h3Regex = /<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
    let match;
    while ((match = h3Regex.exec(faqSection)) !== null) {
        faqItems.push({
            question: match[1].replace(/<[^>]+>/g, ''),
            answer: match[2].replace(/<[^>]+>/g, ''),
        });
    }
    return faqItems;
}

function countWords(html: string): number {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return text.split(' ').length;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    const cat = getCategoryInfo(article.category);
    const related = getArticlesByCategory(article.category)
        .filter(a => a.id !== article.id)
        .slice(0, 3);
    const dateFormatted = new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

    const faqItems = extractFAQ(article.content);
    const wordCount = countWords(article.content);

    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://blogdefille.fr/${article.slug}`,
        },
        headline: article.title,
        description: article.excerpt,
        image: `https://blogdefille.fr${article.image}`,
        datePublished: article.date,
        dateModified: article.date,
        wordCount,
        articleSection: cat.name,
        inLanguage: 'fr-FR',
        author: {
            '@type': 'Organization',
            name: 'Blog de fille',
            url: 'https://blogdefille.fr',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Blog de fille',
            url: 'https://blogdefille.fr',
            logo: {
                '@type': 'ImageObject',
                url: 'https://blogdefille.fr/favicon.ico',
            },
        },
    };

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
            {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `https://blogdefille.fr/${article.slug}`,
            },
        ],
    };

    const faqJsonLd = faqItems.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    } : null;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {faqJsonLd && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            )}

            <article className="article-page">
                <nav className="article-breadcrumb" aria-label="Fil d'Ariane">
                    <Link href="/">Accueil</Link>
                    <span>/</span>
                    <Link href={`/categorie/${cat.slug}`}>{cat.name}</Link>
                    <span>/</span>
                    <span style={{ color: 'var(--text)' }}>{article.title}</span>
                </nav>

                <div className="article-header">
                    <h1>{article.title}</h1>
                    <div className="article-meta">
                        <time dateTime={article.date}>Écrit le {dateFormatted}</time>
                        <span>•</span>
                        <span>{article.readTime} de lecture</span>
                        <span>•</span>
                        <Link href={`/categorie/${cat.slug}`} style={{ color: 'var(--accent)' }}>{cat.name}</Link>
                    </div>
                </div>

                <img className="article-hero-img" src={article.image} alt={article.title} width={1200} height={630} loading="eager" />

                <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

                {/* Internal Links Section */}
                {related.length > 0 && (
                    <div style={{
                        background: 'var(--bg-alt)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                        marginTop: '2rem',
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, marginBottom: '1rem' }}>
                            📚 À lire aussi dans {cat.name}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {related.map(a => (
                                <li key={a.id}>
                                    <Link href={`/${a.slug}`} style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: '0.95rem' }}>
                                        → {a.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="affiliate-box">
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Vous aimez cet article ?</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Découvrez notre sélection de produits recommandés par la rédaction.</p>
                    </div>
                    <Link href="#" className="btn-primary" style={{ marginLeft: 'auto', whiteSpace: 'nowrap' }}>
                        Voir la sélection
                    </Link>
                </div>
            </article>

            {related.length > 0 && (
                <section className="section" style={{ background: 'var(--bg-alt)' }}>
                    <div className="section-header">
                        <h2>Dans la même thématique</h2>
                    </div>
                    <div className="bento-grid">
                        {related.map(a => (
                            <div key={a.id} className="bento-item bento-wide">
                                <ArticleCard article={a} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Newsletter />
        </>
    );
}
