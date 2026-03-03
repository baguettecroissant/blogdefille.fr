import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contactez-nous | Blog de fille',
    description: 'Une question, une collaboration ou un petit mot doux ? N\'hésitez pas à nous écrire.',
    alternates: { canonical: 'https://blogdefille.fr/contact' },
};

export default function Contact() {
    return (
        <article className="article-page" style={{ maxWidth: '800px' }}>
            <div className="article-header" style={{ textAlign: 'center' }}>
                <div className="hero-label" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>CONTACT</div>
                <h1>Envoyez-nous un <em>petit mot</em></h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
                    Que ce soit pour une question, une proposition de partenariat mode/beauté, ou juste pour nous faire un coucou, nous serons ravies de vous lire !
                </p>
            </div>

            <div style={{
                background: 'var(--surface)',
                padding: '3rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border)',
                marginTop: '3rem'
            }}>
                <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Nom complet</label>
                            <input type="text" placeholder="Sophie Dupont" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontFamily: 'inherit', outline: 'none' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email</label>
                            <input type="email" placeholder="sophie@exemple.fr" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontFamily: 'inherit', outline: 'none' }} required />
                        </div>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Sujet</label>
                        <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontFamily: 'inherit', outline: 'none', background: 'var(--surface)' }}>
                            <option>Question générale</option>
                            <option>Proposition de partenariat / Sponsoring</option>
                            <option>Bug sur le site</option>
                            <option>Autre</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Votre message</label>
                        <textarea rows={6} placeholder="Dites-nous tout..." style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }} required></textarea>
                    </div>
                    <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start', border: 'none', cursor: 'pointer' }}>
                        Envoyer mon message
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour vous recontacter.
                    </p>
                </form>
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h3>Autres moyens de nous contacter</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Vous pouvez aussi nous envoyer un email directement à : <a href="mailto:contact@blogdefille.fr" style={{ color: 'var(--accent)', fontWeight: 600 }}>contact@blogdefille.fr</a>
                </p>
            </div>
        </article>
    );
}
