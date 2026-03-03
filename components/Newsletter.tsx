'use client';

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter-inner">
                <h2>💌 Rejoignez la communauté</h2>
                <p>Recevez nos meilleurs conseils mode, beauté et lifestyle directement dans votre boîte mail. Pas de spam, promis !</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Votre adresse email..." />
                    <button type="submit">S&apos;inscrire</button>
                </form>
            </div>
        </section>
    );
}
