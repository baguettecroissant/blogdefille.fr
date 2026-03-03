import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales | Blog de fille',
    description: 'Mentions légales du site Blog de fille.',
    robots: { index: false, follow: true }
};

export default function MentionsLegales() {
    return (
        <article className="article-page">
            <div className="article-header">
                <h1>Mentions Légales</h1>
            </div>
            <div className="article-content">
                <h2>Éditeur du site</h2>
                <p>Le site <strong>Blog de fille</strong> est édité par :</p>
                <ul>
                    <li>Nom de l'éditeur : [Votre Nom ou Société]</li>
                    <li>Statut juridique : [Statut par ex. Auto-entrepreneur]</li>
                    <li>Email : contact@blogdefille.fr</li>
                </ul>

                <h2>Hébergement</h2>
                <p>Le site est hébergé par Vercel Inc.<br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789<br />
                    États-Unis</p>

                <h2>Propriété intellectuelle</h2>
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>

                <h2>Limitation de responsabilité</h2>
                <p>L'éditeur ne saurait être tenu responsable des erreurs matérielles qui se seraient glissées dans les documents présents sur le site, malgré tout le soin apporté à leur publication.</p>
                <p>Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres ressources présentes sur le réseau Internet, ne sauraient engager la responsabilité de l'éditeur du site.</p>
            </div>
        </article>
    );
}
