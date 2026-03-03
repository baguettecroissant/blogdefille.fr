'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
    question: string;
    options: { label: string; scores: Record<string, number> }[];
}

const questions: Question[] = [
    {
        question: 'Comment est votre peau au réveil, sans aucun soin appliqué ?',
        options: [
            { label: 'Confortable, douce et souple', scores: { normale: 2 } },
            { label: 'Brillante, surtout sur la zone T (front, nez, menton)', scores: { grasse: 2 } },
            { label: 'Tiraillements, sensations d\'inconfort', scores: { seche: 2 } },
            { label: 'Brillante par endroits, sèche à d\'autres', scores: { mixte: 2 } },
            { label: 'Rougeurs, picotements ou irritation', scores: { sensible: 2 } },
        ]
    },
    {
        question: 'Comment votre peau réagit-elle après le nettoyage ?',
        options: [
            { label: 'Elle est fraîche et confortable', scores: { normale: 2 } },
            { label: 'Elle redevient vite brillante', scores: { grasse: 2 } },
            { label: 'Elle tire et paraît desséchée', scores: { seche: 2 } },
            { label: 'Le nez brille mais les joues tiraillent', scores: { mixte: 2 } },
            { label: 'Elle rougit ou chauffe', scores: { sensible: 2 } },
        ]
    },
    {
        question: 'Comment décririez-vous vos pores ?',
        options: [
            { label: 'À peine visibles', scores: { normale: 1, seche: 1 } },
            { label: 'Visiblement dilatés, surtout sur le nez et les joues', scores: { grasse: 2 } },
            { label: 'Très fins, quasiment invisibles', scores: { seche: 2 } },
            { label: 'Dilatés sur la zone T, fins sur les joues', scores: { mixte: 2 } },
            { label: 'Variables, parfois rouges autour', scores: { sensible: 2 } },
        ]
    },
    {
        question: 'Avez-vous des imperfections (boutons, points noirs) ?',
        options: [
            { label: 'Rarement', scores: { normale: 2 } },
            { label: 'Oui, souvent des points noirs et boutons', scores: { grasse: 2 } },
            { label: 'Très rarement, plutôt des plaques sèches', scores: { seche: 2 } },
            { label: 'Surtout sur la zone T', scores: { mixte: 2 } },
            { label: 'Des rougeurs plus que des boutons', scores: { sensible: 2 } },
        ]
    },
    {
        question: 'Comment votre peau supporte-t-elle le soleil ?',
        options: [
            { label: 'Elle bronze sans problème', scores: { normale: 2 } },
            { label: 'Rarement de coup de soleil, luisante', scores: { grasse: 1, normale: 1 } },
            { label: 'Elle rougit et pèle facilement', scores: { seche: 1, sensible: 1 } },
            { label: 'Réaction variable selon les zones', scores: { mixte: 2 } },
            { label: 'Elle rougit et chauffe rapidement', scores: { sensible: 2 } },
        ]
    },
    {
        question: 'L\'hiver, comment se comporte votre peau ?',
        options: [
            { label: 'Elle reste la même', scores: { normale: 2 } },
            { label: 'Toujours un peu brillante', scores: { grasse: 2 } },
            { label: 'Elle pèle et tiraille beaucoup', scores: { seche: 2 } },
            { label: 'Les joues deviennent plus sèches', scores: { mixte: 2 } },
            { label: 'Elle devient réactive et inconfortable', scores: { sensible: 2 } },
        ]
    },
];

interface SkinResult {
    type: string;
    emoji: string;
    title: string;
    description: string;
    routine: string[];
    color: string;
}

const results: Record<string, SkinResult> = {
    normale: {
        type: 'normale',
        emoji: '🌸',
        title: 'Peau Normale',
        description: 'Félicitations, vous avez une peau équilibrée ! Elle n\'est ni trop grasse ni trop sèche, avec un teint uniforme et des pores peu visibles. L\'objectif est de maintenir cet équilibre.',
        routine: [
            'Nettoyant doux moussant matin et soir',
            'Sérum à la vitamine C le matin pour l\'éclat',
            'Crème hydratante légère jour et nuit',
            'SPF 30+ chaque matin',
            'Masque hydratant 1x par semaine',
        ],
        color: 'var(--sage)',
    },
    grasse: {
        type: 'grasse',
        emoji: '✨',
        title: 'Peau Grasse',
        description: 'Votre peau produit un excès de sébum, ce qui peut entraîner des brillances et des imperfections. La bonne nouvelle ? Les peaux grasses vieillissent moins vite ! L\'objectif est de réguler le sébum sans décaper.',
        routine: [
            'Nettoyant gel purifiant (sans sulfates agressifs)',
            'Lotion tonique à l\'acide salicylique (BHA)',
            'Sérum niacinamide pour resserrer les pores',
            'Crème légère oil-free ou gel hydratant',
            'SPF 50 matifiant chaque matin',
            'Masque à l\'argile verte 1 à 2x par semaine',
        ],
        color: 'var(--accent)',
    },
    seche: {
        type: 'seche',
        emoji: '🫧',
        title: 'Peau Sèche',
        description: 'Votre peau manque de lipides et/ou d\'hydratation. Elle peut paraître terne, tirailler et présenter des zones de desquamation. L\'objectif est de nourrir et protéger la barrière cutanée.',
        routine: [
            'Huile ou baume démaquillant (double nettoyage le soir)',
            'Lotion hydratante sans alcool',
            'Sérum à l\'acide hyaluronique pour attirer l\'eau',
            'Crème riche nourrissante matin et soir',
            'SPF 30+ avec formule hydratante',
            'Masque nourrissant au beurre de karité 2x par semaine',
        ],
        color: 'var(--mauve)',
    },
    mixte: {
        type: 'mixte',
        emoji: '🌗',
        title: 'Peau Mixte',
        description: 'Votre peau présente deux comportements : la zone T (front, nez, menton) est plus grasse tandis que les joues sont normales à sèches. L\'astuce est d\'adapter les soins selon les zones.',
        routine: [
            'Nettoyant doux universel',
            'Lotion équilibrante sans alcool',
            'Sérum niacinamide sur la zone T',
            'Crème légère sur la zone T, plus riche sur les joues',
            'SPF 30+ adapté peau mixte',
            'Masque multi-zones (argile sur zone T, hydratant sur joues)',
        ],
        color: 'var(--amber)',
    },
    sensible: {
        type: 'sensible',
        emoji: '🌺',
        title: 'Peau Sensible',
        description: 'Votre peau réagit facilement aux agressions extérieures (froid, chaleur, produits). Elle peut devenir rouge, picoter ou tirailler. L\'objectif est d\'apaiser et de renforcer la barrière cutanée.',
        routine: [
            'Eau micellaire ou lait démaquillant (sans rinçage)',
            'Brume d\'eau thermale pour apaiser',
            'Sérum réparateur au panthénol ou au bisabolol',
            'Crème apaisante sans parfum, hypoallergénique',
            'SPF 50 minéral (écrans physiques uniquement)',
            'Masque calmant à l\'aloe vera 1x par semaine',
        ],
        color: 'var(--accent)',
    },
};

export default function QuizTypePeau() {
    const [currentQ, setCurrentQ] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({});
    const [showResult, setShowResult] = useState(false);
    const [answered, setAnswered] = useState<number[]>([]);

    const handleAnswer = (optionScores: Record<string, number>) => {
        const newScores = { ...scores };
        Object.entries(optionScores).forEach(([key, val]) => {
            newScores[key] = (newScores[key] || 0) + val;
        });
        setScores(newScores);
        setAnswered([...answered, currentQ]);

        if (currentQ < questions.length - 1) {
            setTimeout(() => setCurrentQ(currentQ + 1), 300);
        } else {
            setTimeout(() => setShowResult(true), 400);
        }
    };

    const getResult = (): SkinResult => {
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topType = sorted.length > 0 ? sorted[0][0] : 'normale';
        return results[topType];
    };

    const restart = () => {
        setCurrentQ(0);
        setScores({});
        setShowResult(false);
        setAnswered([]);
    };

    const progress = ((answered.length) / questions.length) * 100;

    return (
        <main>
            <article className="article-page" style={{ maxWidth: '800px' }}>
                <nav className="article-breadcrumb">
                    <Link href="/">Accueil</Link>
                    <span>/</span>
                    <Link href="/outils">Outils</Link>
                    <span>/</span>
                    <span style={{ color: 'var(--text)' }}>Quiz Type de Peau</span>
                </nav>

                <div className="article-header" style={{ textAlign: 'center' }}>
                    <div className="hero-label" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>QUIZ BEAUTÉ</div>
                    <h1>Quel est votre <em>type de peau</em> ?</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '560px', margin: '1rem auto 0' }}>
                        Répondez à {questions.length} questions simples et découvrez votre type de peau ainsi qu&apos;une routine beauté personnalisée.
                    </p>
                </div>

                {/* Progress Bar */}
                <div style={{
                    margin: '3rem 0 2rem',
                    height: '6px',
                    background: 'var(--bg-alt)',
                    borderRadius: '100px',
                    overflow: 'hidden',
                }}>
                    <div style={{
                        height: '100%',
                        width: `${progress}%`,
                        background: showResult ? 'var(--sage)' : 'var(--accent)',
                        borderRadius: '100px',
                        transition: 'width 0.5s var(--ease-out)',
                    }} />
                </div>

                {!showResult ? (
                    <div style={{
                        background: 'var(--surface)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--border)',
                        padding: '2.5rem',
                        marginBottom: '3rem',
                    }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>
                            Question {currentQ + 1} / {questions.length}
                        </div>
                        <h2 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            marginBottom: '2rem',
                            lineHeight: 1.3,
                        }}>
                            {questions[currentQ].question}
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {questions[currentQ].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt.scores)}
                                    style={{
                                        padding: '1rem 1.4rem',
                                        background: 'var(--bg)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius)',
                                        textAlign: 'left',
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s var(--ease-out)',
                                        fontFamily: 'inherit',
                                        color: 'var(--text)',
                                        lineHeight: 1.5,
                                    }}
                                    onMouseEnter={e => {
                                        (e.target as HTMLElement).style.borderColor = 'var(--accent)';
                                        (e.target as HTMLElement).style.background = 'var(--accent-soft)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.target as HTMLElement).style.borderColor = 'var(--border)';
                                        (e.target as HTMLElement).style.background = 'var(--bg)';
                                    }}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    (() => {
                        const result = getResult();
                        return (
                            <div style={{ marginBottom: '3rem' }}>
                                {/* Result Card */}
                                <div style={{
                                    background: 'var(--surface)',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '1px solid var(--border)',
                                    padding: '3rem',
                                    textAlign: 'center',
                                    marginBottom: '2rem',
                                }}>
                                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{result.emoji}</div>
                                    <h2 style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '2.2rem',
                                        fontWeight: 400,
                                        marginBottom: '1rem',
                                        color: result.color,
                                    }}>
                                        {result.title}
                                    </h2>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1rem',
                                        lineHeight: 1.7,
                                        maxWidth: '560px',
                                        margin: '0 auto',
                                    }}>
                                        {result.description}
                                    </p>
                                </div>

                                {/* Routine Card */}
                                <div style={{
                                    background: 'var(--bg-alt)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: '2.5rem',
                                    marginBottom: '2rem',
                                }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '1.5rem',
                                        fontWeight: 400,
                                        marginBottom: '1.5rem',
                                    }}>
                                        🧴 Votre routine recommandée
                                    </h3>
                                    <ol style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        {result.routine.map((step, i) => (
                                            <li key={i} style={{
                                                fontSize: '0.95rem',
                                                lineHeight: 1.6,
                                                color: 'var(--text)',
                                            }}>
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Restart */}
                                <div style={{ textAlign: 'center' }}>
                                    <button onClick={restart} className="btn-primary" style={{ border: 'none' }}>
                                        Refaire le quiz
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })()
                )}

                {/* SEO Content */}
                <div className="article-content">
                    <h2>Comprendre son type de peau</h2>
                    <p>
                        Connaître son type de peau est la première étape essentielle pour construire une routine de soins efficace. En effet, utiliser des produits inadaptés à votre type de peau peut aggraver les problèmes existants ou en créer de nouveaux.
                    </p>

                    <h3>Les 5 types de peau</h3>
                    <p>
                        Il existe cinq grands types de peau, chacun avec ses caractéristiques propres :
                    </p>
                    <ul>
                        <li><strong>Peau normale :</strong> Équilibrée, ni trop grasse ni trop sèche, teint uniforme.</li>
                        <li><strong>Peau grasse :</strong> Excès de sébum, pores dilatés, tendance aux imperfections.</li>
                        <li><strong>Peau sèche :</strong> Manque de lipides, tiraillements, zones de desquamation.</li>
                        <li><strong>Peau mixte :</strong> Zone T grasse, joues normales à sèches.</li>
                        <li><strong>Peau sensible :</strong> Réactive, rougeurs, inconfort, intolérances fréquentes.</li>
                    </ul>

                    <h3>Pourquoi faire un test ?</h3>
                    <p>
                        Notre quiz vous permet d&apos;identifier rapidement votre type de peau pour mieux cibler vos soins. En quelques minutes, recevez un diagnostic personnalisé et une routine beauté sur-mesure adaptée à vos besoins.
                    </p>
                </div>
            </article>
        </main>
    );
}
