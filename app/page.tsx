import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import { getLatestArticles, getFeaturedArticle, categories, getCategoryInfo } from '@/lib/data';

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(6);

  return (
    <main>
      {/* Nouveau Hero Section Style Magazine + Image */}
      <section className="hero">
        <div className="hero-bg-image" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-label">ÉDITION 2026</div>
          <h1>Bienvenue sur <em>Blog de fille</em></h1>
          <p className="hero-subtitle">
            Mode, beauté, couture et lifestyle — Des conseils authentiques et esthétiques pour les femmes d'aujourd'hui.
          </p>
          <div className="hero-categories">
            {categories.slice(0, 4).map(cat => (
              <Link key={cat.slug} href={`/categorie/${cat.slug}`} className={`category-pill ${cat.cssClass}`}>
                <span></span> {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="section">
          <div className="section-header">
            <h2>À la une</h2>
          </div>
          <div className="featured-card">
            <div className="card-image">
              <img src={featured.image} alt={featured.title} />
              <span className={`card-category ${getCategoryInfo(featured.category).cssClass}`}>
                {getCategoryInfo(featured.category).name}
              </span>
            </div>
            <div className="card-body">
              <h3><Link href={`/${featured.slug}`}>{featured.title}</Link></h3>
              <p className="card-excerpt">{featured.excerpt}</p>
              <Link href={`/${featured.slug}`} className="btn-primary">
                Lire l&apos;article
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-header">
          <h2>Derniers articles</h2>
          <Link href="/categorie/mode" className="section-header-link">Tout voir →</Link>
        </div>
        <div className="bento-grid">
          {latest.map((article, index) => {
            let bentoClass = 'bento-wide';
            if (index === 0) bentoClass = 'bento-featured';
            else if (index === 1 || index === 2) bentoClass = 'bento-tall';
            return (
              <div key={article.id} className={`bento-item ${bentoClass}`}>
                <ArticleCard article={article} />
              </div>
            );
          })}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
