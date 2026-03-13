import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import { getLatestArticles, getFeaturedArticle, categories, getCategoryInfo, getArticlesByCategory } from '@/lib/data';

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(6);
  const beauteArticles = getArticlesByCategory('beaute').slice(0, 3); // Pour la section thématique

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

      {/* Explorer par Catégories (Nouveau) */}
      <section className="section" style={{ background: 'var(--bg-alt)', borderRadius: 'var(--radius-xl)', padding: '4rem 2rem', marginTop: '2rem' }}>
        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2>Explorer nos thématiques</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Découvrez nos derniers articles par catégories</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/categorie/${cat.slug}`} className="category-card" style={{
              background: 'var(--surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.8rem' }}>
                <span className={`category-pill ${cat.cssClass}`} style={{ margin: 0 }}></span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text)' }}>{cat.name}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1, margin: 0, lineHeight: 1.5 }}>
                {cat.description}
              </p>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500, marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                Voir la catégorie <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Derniers articles */}
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="section-header">
          <h2>Derniers publications</h2>
          <Link href="/blog" className="section-header-link">Tout voir →</Link>
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

      {/* Nos Outils Gratuits (Nouveau) */}
      <section className="section">
        <div style={{
          background: 'linear-gradient(135deg, var(--sage-soft), var(--surface))',
          borderRadius: 'var(--radius-xl)',
          padding: '4rem 3rem',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div className="hero-label" style={{ marginBottom: '1rem' }}>SÉLECTION PRATIQUE</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 400 }}>Nos Outils Gratuits</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Découvrez nos applis interactives pour vous faciliter le quotidien. Convertissez vos tailles, déterminez votre type de peau ou trouvez votre taille idéale de bague en quelques clics.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/outils/convertisseur-tailles" className="btn-primary" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              📏 Convertisseur de Tailles
            </Link>
            <Link href="/outils/quiz-type-de-peau" className="btn-primary" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              ✨ Quiz Type de Peau
            </Link>
            <Link href="/outils/calculateur-taille-bague" className="btn-primary" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              💍 Taille de Bague
            </Link>
            <Link href="/outils" className="section-header-link" style={{ alignSelf: 'center', marginLeft: '1rem' }}>
              Tous les outils →
            </Link>
          </div>
        </div>
      </section>

      {/* Zoom Thématique (Nouveau) */}
      {beauteArticles.length > 0 && (
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="section-header">
            <h2>Zoom sur la Beauté</h2>
            <Link href="/categorie/beaute" className="section-header-link">Découvrir la beauté →</Link>
          </div>
          <div className="bento-grid">
            {beauteArticles.map(article => (
              <div key={article.id} className="bento-item bento-wide">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </section>
      )}

      <Newsletter />
    </main>
  );
}
