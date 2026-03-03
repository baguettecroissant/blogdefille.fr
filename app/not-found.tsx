import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page introuvable | Blog de fille',
    description: 'Oups, cette page n\'existe pas.'
};

export default function NotFound() {
    return (
        <section className="hero" style={{ minHeight: '80vh' }}>
            <div className="hero-bg">
                <div className="hero-blob hero-blob-1" style={{ background: 'var(--mauve-soft)' }}></div>
                <div className="hero-blob hero-blob-3" style={{ background: 'var(--accent-soft)' }}></div>
            </div>
            <div className="hero-content">
                <div className="hero-label">ERREUR 404</div>
                <h1>Oups, cette page semble s'être <em>égarée</em>...</h1>
                <p className="hero-subtitle">
                    Nous avons fouillé dans notre garde-robe et sous nos coussins, mais impossible de trouver ce que vous cherchez.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <Link href="/" className="btn-primary">
                        Retourner à la page d'accueil
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
