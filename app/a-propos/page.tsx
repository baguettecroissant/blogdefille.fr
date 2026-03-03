import { Metadata } from 'next';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
    title: 'À propos de nous | Blog de fille',
    description: 'Découvrez l\'histoire de Blog de fille, notre équipe de passionnées et notre mission : vous inspirer au quotidien avec authenticité.',
    alternates: { canonical: 'https://blogdefille.fr/a-propos' },
    openGraph: {
        title: 'À propos — Blog de fille',
        description: 'Découvrez l\'histoire de Blog de fille, notre équipe de passionnées et notre mission.',
        type: 'website',
        locale: 'fr_FR',
    },
};

export default function About() {
    return (
        <>
            <article className="article-page" style={{ maxWidth: '840px', paddingBottom: '2rem' }}>
                <div className="article-header" style={{ textAlign: 'center' }}>
                    <div className="hero-label" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>NOTRE HISTOIRE</div>
                    <h1>De la passion à <em>l'inspiration</em></h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
                        Blog de fille est né d'une envie simple : partager des découvertes, des conseils honnêtes et une dose de bonne humeur quotidienne avec les femmes d'aujourd'hui.
                    </p>
                </div>

                <img
                    className="article-hero-img"
                    src="/images/author-portrait.jpg"
                    alt="Portrait de la fondatrice dans son bureau élégant"
                    style={{ marginTop: '3rem', height: '560px' }}
                />

                <div className="article-content" style={{ marginTop: '4rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                        <div>
                            <h2 style={{ marginTop: 0 }}>Notre Mission</h2>
                            <p>
                                Dans un monde ultra-connecté où la perfection est souvent mise en avant, nous avons voulu créer un espace <strong style={{ color: 'var(--accent)' }}>authentique et bienveillant</strong>.
                            </p>
                            <p>
                                Notre mission est de vous accompagner dans votre quotidien à travers des articles qui vous parlent vraiment : de la mode accessible, des routines beauté naturelles, des projets couture décomplexés et des conseils bien-être pour vous sentir bien dans votre tête et dans votre corps.
                            </p>
                        </div>
                        <div style={{ background: 'var(--bg-alt)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginTop: 0, marginBottom: '1rem' }}>Nos Valeurs</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>✨</span>
                                    <span><strong>Authenticité :</strong> Nous testons vraiment ce dont nous parlons.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>🌱</span>
                                    <span><strong>Naturel :</strong> Une approche saine de la beauté et du bien-être.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>🤝</span>
                                    <span><strong>Partage :</strong> Une communauté bienveillante et inspirante.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2>L'Équipe</h2>
                    <p>
                        Derrière <strong>Blog de fille</strong>, se cache une équipe de rédactrices passionnées, chacune experte dans son domaine. De la couturière aguerrie à la passionnée de cosmétiques naturels, nous regroupons nos talents pour vous offrir un contenu riche et varié.
                    </p>

                    <blockquote style={{ background: 'var(--mauve-soft)', borderColor: 'var(--mauve)', margin: '3rem 0', padding: '2rem' }}>
                        "La vraie beauté réside dans l'acceptation de soi et le plaisir des choses simples. C'est ce message que nous souhaitons transmettre à travers chaque article."
                    </blockquote>

                    <h2>Envie de collaborer ?</h2>
                    <p>
                        Nous sommes toujours à la recherche de jolies marques éthiques avec lesquelles collaborer, ou de nouvelles plumes pour rejoindre l'équipe.
                    </p>

                    <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                        <Link href="/contact" className="btn-primary">
                            Contactez-nous
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </Link>
                    </div>
                </div>
            </article>

            <Newsletter />
        </>
    );
}
