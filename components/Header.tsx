'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link href="/" className="site-logo">Blog de fille</Link>
                <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
                    {categories.map(cat => (
                        <Link key={cat.slug} href={`/categorie/${cat.slug}`} onClick={() => setMenuOpen(false)}>
                            {cat.name}
                        </Link>
                    ))}
                    <Link href="/outils" onClick={() => setMenuOpen(false)} style={{ color: 'var(--accent)', fontWeight: 600 }}>
                        Outils
                    </Link>
                </nav>
                <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
}
