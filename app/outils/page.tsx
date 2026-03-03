import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Outils Gratuits Mode & Beauté | Blog de fille',
    description: 'Des outils gratuits pour vous faciliter la vie : convertisseur de tailles, quiz type de peau, calculateur taille de bague et plus encore.',
    alternates: { canonical: 'https://blogdefille.fr/outils' },
};

const tools = [
    {
        title: 'Convertisseur de Tailles',
        description: 'Convertissez instantanément vos tailles vêtements et chaussures entre les systèmes français, européen, américain et britannique.',
        href: '/outils/convertisseur-tailles',
        icon: '📏',
        color: 'var(--accent-soft)',
        borderColor: 'var(--accent)',
    },
    {
        title: 'Quiz : Mon Type de Peau',
        description: 'Répondez à quelques questions pour découvrir votre type de peau et recevoir une routine beauté personnalisée.',
        href: '/outils/quiz-type-de-peau',
        icon: '✨',
        color: 'var(--mauve-soft)',
        borderColor: 'var(--mauve)',
    },
    {
        title: 'Calculateur Taille de Bague',
        description: 'Mesurez votre doigt et trouvez votre taille de bague exacte avec les correspondances FR, US et UK.',
        href: '/outils/calculateur-taille-bague',
        icon: '💍',
        color: 'var(--amber-soft)',
        borderColor: 'var(--amber)',
    },
];

export default function OutilsPage() {
    return (
        <main>
            <section className="hero" style={{ minHeight: '50vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
                <div className="hero-content">
                    <div className="hero-label">OUTILS GRATUITS</div>
                    <h1>Nos outils <em>pratiques</em></h1>
                    <p className="hero-subtitle">
                        Des petits outils malins pensés pour vous simplifier la vie au quotidien. 100% gratuits, sans inscription.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '0' }}>
                <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
                    {tools.map(tool => (
                        <Link key={tool.href} href={tool.href} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            padding: '2.5rem',
                            background: 'var(--surface)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--border)',
                            transition: 'all 0.4s var(--ease-out)',
                            textDecoration: 'none',
                        }} className="tool-card">
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: 'var(--radius)',
                                background: tool.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                            }}>
                                {tool.icon}
                            </div>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400 }}>{tool.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{tool.description}</p>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: 'auto',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                color: tool.borderColor,
                            }}>
                                Utiliser l&apos;outil →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
