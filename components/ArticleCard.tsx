import Link from 'next/link';
import { Article, getCategoryInfo } from '@/lib/data';

export default function ArticleCard({ article }: { article: Article }) {
    const cat = getCategoryInfo(article.category);

    return (
        <article className="article-card">
            <Link href={`/${article.slug}`} className="card-image">
                <img src={article.image} alt={article.title} loading="lazy" />
                <span className={`card-category ${cat.cssClass}`}>{cat.name}</span>
            </Link>
            <div className="card-body">
                <h3><Link href={`/${article.slug}`}>{article.title}</Link></h3>
                <p className="card-excerpt">{article.excerpt}</p>
                <div className="card-footer">
                    <span>{article.readTime} de lecture</span>
                    <Link href={`/${article.slug}`} className="card-read-more">
                        Lire l'article
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}
