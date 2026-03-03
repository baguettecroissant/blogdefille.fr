import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politique de Confidentialité | Blog de fille',
    description: 'Notre politique de confidentialité.',
    robots: { index: false, follow: true }
};

export default function PolitiqueConfidentialite() {
    return (
        <article className="article-page">
            <div className="article-header">
                <h1>Politique de Confidentialité</h1>
            </div>
            <div className="article-content">
                <p>Date de dernière mise à jour : [Date du jour]</p>

                <h2>1. Collecte des données</h2>
                <p>Nous collectons les données suivantes :</p>
                <ul>
                    <li><strong>Newsletter :</strong> Votre adresse email pour vous envoyer nos actualités.</li>
                    <li><strong>Formulaire de contact :</strong> Votre nom, adresse email et message pour vous répondre.</li>
                    <li><strong>Statistiques :</strong> Données de navigation anonymisées (via [Outil Analytics par ex. Google Analytics ou Matomo]) pour améliorer l'expérience utilisateur.</li>
                </ul>

                <h2>2. Utilisation des données</h2>
                <p>Les données collectées sont utilisées uniquement pour les finalités décrites ci-dessus. Nous ne revendons pas vos données personnelles à des tiers.</p>

                <h2>3. Durée de conservation</h2>
                <p>Nous conservons vos données uniquement le temps nécessaire aux finalités poursuivies, conformément aux prescriptions légales.</p>

                <h2>4. Vos droits (RGPD)</h2>
                <p>Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à : contact@blogdefille.fr.</p>

                <h2>5. Cookies</h2>
                <p>Le site <strong>Blog de fille</strong> utilise des cookies pour analyser le trafic et personnaliser le contenu. Vous pouvez paramétrer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.</p>
            </div>
        </article>
    );
}
