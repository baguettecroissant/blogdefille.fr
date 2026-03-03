'use client';

import { useState } from 'react';
import Link from 'next/link';

type SizeType = 'vetements-femme' | 'vetements-homme' | 'chaussures-femme' | 'chaussures-homme';

interface SizeRow {
    fr: string;
    eu: string;
    us: string;
    uk: string;
}

const sizeData: Record<SizeType, SizeRow[]> = {
    'vetements-femme': [
        { fr: '34', eu: '32', us: '2 (XS)', uk: '6' },
        { fr: '36', eu: '34', us: '4 (S)', uk: '8' },
        { fr: '38', eu: '36', us: '6 (S)', uk: '10' },
        { fr: '40', eu: '38', us: '8 (M)', uk: '12' },
        { fr: '42', eu: '40', us: '10 (M)', uk: '14' },
        { fr: '44', eu: '42', us: '12 (L)', uk: '16' },
        { fr: '46', eu: '44', us: '14 (L)', uk: '18' },
        { fr: '48', eu: '46', us: '16 (XL)', uk: '20' },
        { fr: '50', eu: '48', us: '18 (XXL)', uk: '22' },
    ],
    'vetements-homme': [
        { fr: '44', eu: '44', us: 'XS (34)', uk: '34' },
        { fr: '46', eu: '46', us: 'S (36)', uk: '36' },
        { fr: '48', eu: '48', us: 'M (38)', uk: '38' },
        { fr: '50', eu: '50', us: 'L (40)', uk: '40' },
        { fr: '52', eu: '52', us: 'XL (42)', uk: '42' },
        { fr: '54', eu: '54', us: 'XXL (44)', uk: '44' },
        { fr: '56', eu: '56', us: '3XL (46)', uk: '46' },
    ],
    'chaussures-femme': [
        { fr: '35', eu: '35', us: '5', uk: '2.5' },
        { fr: '36', eu: '36', us: '5.5', uk: '3.5' },
        { fr: '37', eu: '37', us: '6.5', uk: '4' },
        { fr: '38', eu: '38', us: '7.5', uk: '5' },
        { fr: '39', eu: '39', us: '8', uk: '5.5' },
        { fr: '40', eu: '40', us: '9', uk: '6.5' },
        { fr: '41', eu: '41', us: '9.5', uk: '7' },
        { fr: '42', eu: '42', us: '10', uk: '8' },
    ],
    'chaussures-homme': [
        { fr: '39', eu: '39', us: '6.5', uk: '5.5' },
        { fr: '40', eu: '40', us: '7', uk: '6' },
        { fr: '41', eu: '41', us: '8', uk: '7' },
        { fr: '42', eu: '42', us: '9', uk: '8' },
        { fr: '43', eu: '43', us: '9.5', uk: '8.5' },
        { fr: '44', eu: '44', us: '10.5', uk: '9.5' },
        { fr: '45', eu: '45', us: '11', uk: '10.5' },
        { fr: '46', eu: '46', us: '12', uk: '11' },
        { fr: '47', eu: '47', us: '13', uk: '12' },
    ],
};

const labels: Record<SizeType, string> = {
    'vetements-femme': '👗 Vêtements Femme',
    'vetements-homme': '👔 Vêtements Homme',
    'chaussures-femme': '👠 Chaussures Femme',
    'chaussures-homme': '👟 Chaussures Homme',
};

export default function ConvertisseurTailles() {
    const [activeType, setActiveType] = useState<SizeType>('vetements-femme');
    const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

    const data = sizeData[activeType];

    return (
        <main>
            <article className="article-page" style={{ maxWidth: '900px' }}>
                <nav className="article-breadcrumb">
                    <Link href="/">Accueil</Link>
                    <span>/</span>
                    <Link href="/outils">Outils</Link>
                    <span>/</span>
                    <span style={{ color: 'var(--text)' }}>Convertisseur de Tailles</span>
                </nav>

                <div className="article-header" style={{ textAlign: 'center' }}>
                    <div className="hero-label" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>OUTIL GRATUIT</div>
                    <h1>Convertisseur de <em>Tailles</em></h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                        Trouvez votre taille en un clin d&apos;œil ! Sélectionnez le type de vêtement ou chaussure pour voir les correspondances FR / EU / US / UK.
                    </p>
                </div>

                {/* Type Selector */}
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    margin: '3rem 0 2rem',
                }}>
                    {(Object.keys(labels) as SizeType[]).map(type => (
                        <button
                            key={type}
                            onClick={() => { setActiveType(type); setHighlightedRow(null); }}
                            style={{
                                padding: '0.7rem 1.4rem',
                                borderRadius: '100px',
                                border: '1px solid',
                                borderColor: activeType === type ? 'var(--accent)' : 'var(--border)',
                                background: activeType === type ? 'var(--accent-soft)' : 'var(--surface)',
                                color: activeType === type ? 'var(--accent)' : 'var(--text-secondary)',
                                fontWeight: activeType === type ? 600 : 400,
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s var(--ease-out)',
                                fontFamily: 'inherit',
                            }}
                        >
                            {labels[type]}
                        </button>
                    ))}
                </div>

                {/* Size Table */}
                <div style={{
                    background: 'var(--surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    marginBottom: '3rem',
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontFamily: 'var(--font-sans)',
                    }}>
                        <thead>
                            <tr>
                                {['🇫🇷 France', '🇪🇺 Europe', '🇺🇸 US', '🇬🇧 UK'].map(h => (
                                    <th key={h} style={{
                                        padding: '1.1rem 1.5rem',
                                        textAlign: 'center',
                                        fontWeight: 600,
                                        fontSize: '0.85rem',
                                        letterSpacing: '0.03em',
                                        borderBottom: '2px solid var(--border)',
                                        background: 'var(--bg-alt)',
                                        color: 'var(--text)',
                                    }}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, i) => (
                                <tr
                                    key={i}
                                    onClick={() => setHighlightedRow(i === highlightedRow ? null : i)}
                                    style={{
                                        cursor: 'pointer',
                                        background: highlightedRow === i ? 'var(--accent-soft)' : i % 2 === 1 ? 'rgba(0,0,0,0.01)' : 'transparent',
                                        transition: 'background 0.2s',
                                    }}
                                >
                                    {[row.fr, row.eu, row.us, row.uk].map((val, j) => (
                                        <td key={j} style={{
                                            padding: '1rem 1.5rem',
                                            textAlign: 'center',
                                            fontSize: '0.95rem',
                                            borderBottom: '1px solid var(--border)',
                                            fontWeight: highlightedRow === i ? 600 : 400,
                                            color: highlightedRow === i ? 'var(--accent)' : 'var(--text)',
                                        }}>
                                            {val}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* SEO Content */}
                <div className="article-content">
                    <h2>Comment convertir les tailles de vêtements ?</h2>
                    <p>
                        Les systèmes de tailles varient considérablement d'un pays à l'autre, ce qui peut vite devenir un casse-tête quand on commande en ligne sur des sites étrangers. Notre convertisseur de tailles vous permet de retrouver en un instant la correspondance entre les tailles françaises (FR), européennes (EU), américaines (US) et britanniques (UK).
                    </p>

                    <h3>Quelques conseils pour bien choisir sa taille</h3>
                    <ul>
                        <li><strong>Prenez vos mensurations :</strong> Tour de poitrine, tour de taille et tour de hanches sont les mesures essentielles pour les vêtements.</li>
                        <li><strong>Consultez le guide des tailles :</strong> Chaque marque peut avoir ses propres standards. Quand c'est disponible, consultez le guide de la marque.</li>
                        <li><strong>En cas de doute, prenez la taille au-dessus :</strong> Il est toujours plus facile de faire retoucher un vêtement trop grand que trop petit.</li>
                        <li><strong>Pour les chaussures :</strong> Mesurez votre pied en fin de journée quand il est légèrement gonflé pour une mesure plus réaliste.</li>
                    </ul>

                    <h3>Différences entre les systèmes de taille</h3>
                    <p>
                        Le système français est basé sur le tour de poitrine divisé par deux pour les femmes. Le système européen (EU) est généralement identique au système français pour les vêtements féminins. Le système américain (US) utilise des chiffres pairs ainsi que des lettres (XS, S, M, L, XL). Le système britannique (UK) est décalé de quelques tailles par rapport au système français.
                    </p>

                    <h3>Cas particulier des chaussures</h3>
                    <p>
                        Pour les chaussures, les écarts de pointure entre les systèmes sont plus importants. La pointure US est par exemple plus petite de 1 à 2 tailles par rapport à la pointure européenne pour les femmes. N'hésitez pas à utiliser notre outil ci-dessus pour vous éviter toute mauvaise surprise !
                    </p>
                </div>
            </article>
        </main>
    );
}
