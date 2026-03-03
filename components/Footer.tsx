import Link from 'next/link';
import { categories } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <Link href="/" className="site-logo">Blog de fille</Link>
                    <p>Votre magazine féminin en ligne : mode, beauté, couture, bien-être et lifestyle. Des conseils authentiques par des passionnées, pour des passionnées.</p>
                </div>
                <div className="footer-col">
                    <h4>Catégories</h4>
                    <ul>
                        {categories.map(cat => (
                            <li key={cat.slug}><Link href={`/categorie/${cat.slug}`}>{cat.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Outils gratuits</h4>
                    <ul>
                        <li><Link href="/outils/convertisseur-tailles">Convertisseur tailles</Link></li>
                        <li><Link href="/outils/quiz-type-de-peau">Quiz type de peau</Link></li>
                        <li><Link href="/outils/calculateur-taille-bague">Taille de bague</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Le blog</h4>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/a-propos">À propos</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Légal</h4>
                    <ul>
                        <li><Link href="/mentions-legales">Mentions légales</Link></li>
                        <li><Link href="/politique-confidentialite">Confidentialité</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Blog de fille. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
