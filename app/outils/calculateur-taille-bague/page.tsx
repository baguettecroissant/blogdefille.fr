'use client';

import { useState } from 'react';
import Link from 'next/link';

interface RingSize {
    fr: string;
    diameter: string;
    us: string;
    uk: string;
    circumference: string;
}

const ringSizes: RingSize[] = [
    { fr: '44', diameter: '14.0', us: '3', uk: 'F', circumference: '44.0' },
    { fr: '45', diameter: '14.3', us: '3.5', uk: 'G', circumference: '45.0' },
    { fr: '46', diameter: '14.6', us: '3.75', uk: 'H', circumference: '46.0' },
    { fr: '47', diameter: '15.0', us: '4', uk: 'H½', circumference: '47.0' },
    { fr: '48', diameter: '15.3', us: '4.5', uk: 'I½', circumference: '48.0' },
    { fr: '49', diameter: '15.6', us: '5', uk: 'J½', circumference: '49.0' },
    { fr: '50', diameter: '15.9', us: '5.25', uk: 'K', circumference: '50.0' },
    { fr: '51', diameter: '16.2', us: '5.75', uk: 'L', circumference: '51.0' },
    { fr: '52', diameter: '16.6', us: '6', uk: 'L½', circumference: '52.0' },
    { fr: '53', diameter: '16.9', us: '6.5', uk: 'M½', circumference: '53.0' },
    { fr: '54', diameter: '17.2', us: '7', uk: 'N½', circumference: '54.0' },
    { fr: '55', diameter: '17.5', us: '7.25', uk: 'O', circumference: '55.0' },
    { fr: '56', diameter: '17.8', us: '7.75', uk: 'P', circumference: '56.0' },
    { fr: '57', diameter: '18.1', us: '8', uk: 'P½', circumference: '57.0' },
    { fr: '58', diameter: '18.5', us: '8.5', uk: 'Q½', circumference: '58.0' },
    { fr: '59', diameter: '18.8', us: '9', uk: 'R½', circumference: '59.0' },
    { fr: '60', diameter: '19.1', us: '9.25', uk: 'S', circumference: '60.0' },
    { fr: '62', diameter: '19.7', us: '10', uk: 'T½', circumference: '62.0' },
    { fr: '64', diameter: '20.4', us: '10.75', uk: 'V', circumference: '64.0' },
    { fr: '66', diameter: '21.0', us: '11.5', uk: 'W½', circumference: '66.0' },
    { fr: '68', diameter: '21.6', us: '12.25', uk: 'Y', circumference: '68.0' },
    { fr: '70', diameter: '22.3', us: '13', uk: 'Z½', circumference: '70.0' },
];

type Method = 'circumference' | 'diameter' | 'table';

export default function CalculateurTailleBague() {
    const [method, setMethod] = useState<Method>('circumference');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<RingSize | null>(null);
    const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

    const findClosestSize = (value: number, key: 'circumference' | 'diameter'): RingSize => {
        let closest = ringSizes[0];
        let minDiff = Infinity;
        for (const size of ringSizes) {
            const diff = Math.abs(parseFloat(size[key]) - value);
            if (diff < minDiff) {
                minDiff = diff;
                closest = size;
            }
        }
        return closest;
    };

    const handleCalculate = () => {
        const val = parseFloat(inputValue.replace(',', '.'));
        if (isNaN(val) || val <= 0) return;

        if (method === 'circumference') {
            setResult(findClosestSize(val, 'circumference'));
        } else {
            setResult(findClosestSize(val, 'diameter'));
        }
    };

    const methods: { key: Method; label: string; icon: string }[] = [
        { key: 'circumference', label: 'Par la circonférence', icon: '📏' },
        { key: 'diameter', label: 'Par le diamètre', icon: '⭕' },
        { key: 'table', label: 'Tableau complet', icon: '📊' },
    ];

    return (
        <main>
            <article className="article-page" style={{ maxWidth: '900px' }}>
                <nav className="article-breadcrumb">
                    <Link href="/">Accueil</Link>
                    <span>/</span>
                    <Link href="/outils">Outils</Link>
                    <span>/</span>
                    <span style={{ color: 'var(--text)' }}>Calculateur Taille de Bague</span>
                </nav>

                <div className="article-header" style={{ textAlign: 'center' }}>
                    <div className="hero-label" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>OUTIL GRATUIT</div>
                    <h1>Calculateur de <em>Taille de Bague</em></h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                        Trouvez votre taille de bague exacte grâce à notre calculateur. Mesurez la circonférence ou le diamètre de votre doigt et obtenez la correspondance FR, US et UK.
                    </p>
                </div>

                {/* Method Selector */}
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    margin: '3rem 0 2rem',
                }}>
                    {methods.map(m => (
                        <button
                            key={m.key}
                            onClick={() => { setMethod(m.key); setResult(null); setInputValue(''); }}
                            style={{
                                padding: '0.7rem 1.4rem',
                                borderRadius: '100px',
                                border: '1px solid',
                                borderColor: method === m.key ? 'var(--accent)' : 'var(--border)',
                                background: method === m.key ? 'var(--accent-soft)' : 'var(--surface)',
                                color: method === m.key ? 'var(--accent)' : 'var(--text-secondary)',
                                fontWeight: method === m.key ? 600 : 400,
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s var(--ease-out)',
                                fontFamily: 'inherit',
                            }}
                        >
                            {m.icon} {m.label}
                        </button>
                    ))}
                </div>

                {method !== 'table' ? (
                    <div style={{
                        background: 'var(--surface)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--border)',
                        padding: '2.5rem',
                        marginBottom: '2rem',
                    }}>
                        {/* Step-by-step Guide */}
                        <div style={{
                            background: 'var(--bg-alt)',
                            borderRadius: 'var(--radius)',
                            padding: '1.5rem',
                            marginBottom: '2rem',
                        }}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '1rem' }}>
                                {method === 'circumference' ? '📏 Comment mesurer la circonférence ?' : '⭕ Comment mesurer le diamètre ?'}
                            </h3>
                            {method === 'circumference' ? (
                                <ol style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <li>Enroulez une bande de papier ou un fil autour de votre doigt</li>
                                    <li>Marquez l&apos;endroit où le papier/fil se rejoint</li>
                                    <li>Mesurez la longueur obtenue avec une règle <strong>en millimètres</strong></li>
                                    <li>Entrez cette valeur ci-dessous</li>
                                </ol>
                            ) : (
                                <ol style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <li>Prenez une bague qui vous va parfaitement</li>
                                    <li>Posez-la à plat sur une règle</li>
                                    <li>Mesurez l&apos;intérieur de la bague d&apos;un bord à l&apos;autre <strong>en millimètres</strong></li>
                                    <li>Entrez cette valeur ci-dessous</li>
                                </ol>
                            )}
                        </div>

                        {/* Input */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
                            <div style={{ flex: 1, position: 'relative' }}>
                                <input
                                    type="text"
                                    inputMode="decimal"
                                    value={inputValue}
                                    onChange={e => setInputValue(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleCalculate()}
                                    placeholder={method === 'circumference' ? 'Ex: 52' : 'Ex: 16.5'}
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.4rem',
                                        paddingRight: '3.5rem',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid var(--border)',
                                        background: 'var(--bg)',
                                        fontSize: '1.1rem',
                                        fontFamily: 'inherit',
                                        outline: 'none',
                                        transition: 'border-color 0.3s',
                                        color: 'var(--text)',
                                    }}
                                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--accent)'}
                                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--border)'}
                                />
                                <span style={{
                                    position: 'absolute',
                                    right: '1.2rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                }}>
                                    mm
                                </span>
                            </div>
                            <button
                                onClick={handleCalculate}
                                className="btn-primary"
                                style={{ border: 'none', whiteSpace: 'nowrap', padding: '1rem 2rem' }}
                            >
                                Calculer 💍
                            </button>
                        </div>

                        {/* Result */}
                        {result && (
                            <div style={{
                                background: 'var(--accent-soft)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '2rem',
                                textAlign: 'center',
                                animation: 'fadeIn 0.4s ease-out',
                            }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💍</div>
                                <h3 style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.8rem',
                                    fontWeight: 400,
                                    color: 'var(--accent)',
                                    marginBottom: '1rem',
                                }}>
                                    Votre taille : {result.fr}
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '1rem',
                                    maxWidth: '500px',
                                    margin: '0 auto',
                                }}>
                                    {[
                                        { label: '🇫🇷 France', value: result.fr },
                                        { label: '🇺🇸 US', value: result.us },
                                        { label: '🇬🇧 UK', value: result.uk },
                                        { label: '⌀ Diamètre', value: `${result.diameter} mm` },
                                    ].map(item => (
                                        <div key={item.label} style={{
                                            background: 'var(--surface)',
                                            borderRadius: 'var(--radius)',
                                            padding: '1rem',
                                        }}>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem', fontWeight: 500 }}>{item.label}</div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text)' }}>{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Full Table */
                    <div style={{
                        background: 'var(--surface)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        overflow: 'hidden',
                        marginBottom: '2rem',
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
                            <thead>
                                <tr>
                                    {['🇫🇷 France', '⌀ Diamètre (mm)', '🇺🇸 US', '🇬🇧 UK', 'Circ. (mm)'].map(h => (
                                        <th key={h} style={{
                                            padding: '1rem 1.2rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '0.82rem',
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
                                {ringSizes.map((row, i) => (
                                    <tr
                                        key={i}
                                        onClick={() => setHighlightedRow(i === highlightedRow ? null : i)}
                                        style={{
                                            cursor: 'pointer',
                                            background: highlightedRow === i ? 'var(--accent-soft)' : i % 2 === 1 ? 'rgba(0,0,0,0.01)' : 'transparent',
                                            transition: 'background 0.2s',
                                        }}
                                    >
                                        {[row.fr, row.diameter, row.us, row.uk, row.circumference].map((val, j) => (
                                            <td key={j} style={{
                                                padding: '0.85rem 1.2rem',
                                                textAlign: 'center',
                                                fontSize: '0.9rem',
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
                )}

                {/* Tips */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1rem',
                    marginBottom: '3rem',
                }}>
                    {[
                        { icon: '🌡️', title: 'Mesurez à température ambiante', text: 'Vos doigts gonflent en cas de chaleur ou d\'effort. Mesurez au repos, à température normale.' },
                        { icon: '🔄', title: 'Mesurez plusieurs fois', text: 'Prenez la mesure à différents moments de la journée pour une moyenne plus fiable.' },
                        { icon: '💡', title: 'En cas de doute', text: 'Si vous hésitez entre deux tailles, choisissez toujours la taille supérieure.' },
                    ].map(tip => (
                        <div key={tip.title} style={{
                            background: 'var(--bg-alt)',
                            borderRadius: 'var(--radius)',
                            padding: '1.5rem',
                        }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>{tip.title}</h4>
                            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tip.text}</p>
                        </div>
                    ))}
                </div>

                {/* SEO Content */}
                <div className="article-content">
                    <h2>Comment connaître sa taille de bague ?</h2>
                    <p>
                        Choisir la bonne taille de bague est essentiel pour un confort optimal et éviter de perdre votre bijou. En France, la taille de bague correspond à la <strong>circonférence intérieure</strong> de l&apos;anneau exprimée en millimètres. Ainsi, une bague de taille 52 signifie que son tour intérieur mesure 52 mm.
                    </p>

                    <h3>Les différentes méthodes de mesure</h3>
                    <p>Il existe plusieurs façons de déterminer sa taille de bague :</p>
                    <ul>
                        <li><strong>La méthode du fil :</strong> Enroulez un fil ou une bande de papier autour de votre doigt, marquez l&apos;endroit où les extrémités se croisent, puis mesurez la longueur obtenue. C&apos;est la circonférence.</li>
                        <li><strong>La méthode de la bague existante :</strong> Prenez une bague qui vous va bien et mesurez son diamètre intérieur à l&apos;aide d&apos;une règle. Multipliez par π (3.14) pour obtenir la circonférence, ou utilisez directement notre outil.</li>
                        <li><strong>Le baguier :</strong> Disponible en bijouterie, c&apos;est l&apos;outil le plus précis. Un ensemble d&apos;anneaux de différentes tailles permet de trouver celui qui s&apos;ajuste parfaitement.</li>
                    </ul>

                    <h3>Correspondances internationales</h3>
                    <p>
                        Le système français (FR) est basé sur la circonférence en mm. Le système américain (US) utilise des nombres de 1 à 13+ avec des demi-tailles. Le système britannique (UK) utilise des lettres de A à Z+. Notre tableau ci-dessus vous donne toutes les correspondances.
                    </p>

                    <h3>À quel doigt porter sa bague ?</h3>
                    <p>
                        La taille varie d&apos;un doigt à l&apos;autre ! Votre annulaire gauche n&apos;a pas forcément la même taille que votre annulaire droit. Mesurez spécifiquement le doigt sur lequel vous comptez porter la bague. N&apos;oubliez pas que la largeur de la bague est aussi un facteur : une bague large nécessite généralement une demi-taille au-dessus.
                    </p>
                </div>
            </article>
        </main>
    );
}
