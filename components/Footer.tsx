import Link from 'next/link';
import { categories } from '@/lib/data';

const Instagram = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const Pinterest = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.85 6.41 9.3-.1-.79-.19-2 .04-2.87.21-.8 1.36-5.74 1.36-5.74s-.35-.69-.35-1.72c0-1.61.94-2.81 2.1-2.81 1.01 0 1.5.76 1.5 1.67 0 1.01-.65 2.53-.98 3.93-.28 1.18.59 2.14 1.76 2.14 2.11 0 3.73-2.22 3.73-5.43 0-2.85-2.05-4.84-4.98-4.84-3.4 0-5.39 2.55-5.39 5.17 0 1.01.39 2.1 0.88 2.69.1.12.11.22.08.35-.09.38-.28 1.15-.32 1.32-.05.21-.18.26-.4.16-1.49-.69-2.42-2.87-2.42-4.63 0-3.77 2.74-7.23 7.89-7.23 4.14 0 7.36 2.95 7.36 6.9 0 4.12-2.59 7.44-6.19 7.44-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1.01 2.34-1.5 3.13 1.14.35 2.35.53 3.61.53 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg>);
const TikTok = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>);

export default function Footer() {
    return (
        <footer className="site-footer" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
            <div className="footer-inner" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
                <div className="footer-brand" style={{ paddingRight: '2rem' }}>
                    <Link href="/" className="site-logo" style={{ fontSize: '1.8rem', display: 'inline-block', marginBottom: '1rem' }}>Blog de fille</Link>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                        Votre magazine féminin en ligne : mode, beauté, couture, bien-être et lifestyle. Des conseils authentiques par des passionnées, pour des passionnées.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                        <a href="#" aria-label="Instagram" className="social-icon"><Instagram /></a>
                        <a href="#" aria-label="Pinterest" className="social-icon"><Pinterest /></a>
                        <a href="#" aria-label="TikTok" className="social-icon"><TikTok /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', letterSpacing: '0.05em', color: 'var(--text)' }}>Catégories</h4>
                    <ul>
                        {categories.map(cat => (
                            <li key={cat.slug}><Link href={`/categorie/${cat.slug}`}>{cat.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', letterSpacing: '0.05em', color: 'var(--text)' }}>Outils gratuits</h4>
                    <ul>
                        <li><Link href="/outils/convertisseur-tailles">Convertisseur de tailles</Link></li>
                        <li><Link href="/outils/quiz-type-de-peau">Quiz type de peau</Link></li>
                        <li><Link href="/outils/calculateur-taille-bague">Calculateur taille bague</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', letterSpacing: '0.05em', color: 'var(--text)' }}>Le magazine</h4>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/a-propos">À propos de nous</Link></li>
                        <li><Link href="/contact">Nous contacter</Link></li>
                        <li><Link href="/outils">Toutes nos ressources</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', letterSpacing: '0.05em', color: 'var(--text)' }}>Légal</h4>
                    <ul>
                        <li><Link href="/mentions-legales">Mentions légales</Link></li>
                        <li><Link href="/politique-confidentialite">Confidentialité</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom" style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Blog de fille. Fait avec ♥ en France.</p>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <span>Indépendant</span>
                    <span>•</span>
                    <span>Conseils authentiques</span>
                </div>
            </div>
        </footer>
    );
}
