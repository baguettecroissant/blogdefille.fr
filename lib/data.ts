export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export type Category = 'mode' | 'beaute' | 'couture' | 'bien-etre' | 'bijoux';

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  cssClass: string;
}

export const categories: CategoryInfo[] = [
  { slug: 'mode', name: 'Mode', description: 'Tendances, conseils style et looks inspirants', cssClass: 'cat-mode' },
  { slug: 'beaute', name: 'Beauté', description: 'Soins, maquillage et astuces beauté naturelle', cssClass: 'cat-beaute' },
  { slug: 'couture', name: 'Couture & DIY', description: 'Créations, patrons et tutoriels couture', cssClass: 'cat-couture' },
  { slug: 'bien-etre', name: 'Bien-être', description: 'Santé féminine, wellness et lifestyle', cssClass: 'cat-bienetre' },
  { slug: 'bijoux', name: 'Bijoux & Accessoires', description: 'Sélections, tendances et guides d\'achat', cssClass: 'cat-bijoux' },
];

export function getCategoryInfo(slug: Category): CategoryInfo {
  return categories.find(c => c.slug === slug)!;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'la-culotte-menstruelle-coton',
    title: 'La culotte menstruelle en coton : guide complet pour bien choisir',
    excerpt: 'Découvrez tout ce qu\'il faut savoir sur les culottes menstruelles en coton bio : confort, absorption, entretien et notre sélection des meilleures marques françaises.',
    category: 'bien-etre',
    image: '/images/articles/culotte-menstruelle.jpg',
    date: '2026-03-01',
    readTime: '8 min',
    featured: true,
    content: `<p>Depuis quelques années, les <strong>culottes menstruelles en coton</strong> ont révolutionné la façon dont les femmes vivent leur cycle. Fini le stress des tampons et des serviettes jetables : place à une protection <strong>confortable, écologique et économique</strong>.</p>

<h2>Pourquoi choisir une culotte menstruelle en coton ?</h2>

<p>Le coton biologique est la matière idéale pour les sous-vêtements menstruels. Respirant, hypoallergénique et doux, il respecte votre peau et votre intimité. Contrairement aux matières synthétiques, le coton certifié OEKO-TEX ne contient aucune substance nocive.</p>

<h3>Les avantages du coton bio</h3>
<ul>
<li><strong>Confort optimal</strong> : le coton est naturellement doux et respirant</li>
<li><strong>Zéro produit chimique</strong> : pas de pesticides ni de substances irritantes</li>
<li><strong>Absorption efficace</strong> : jusqu'à 3 tampons d'équivalence selon les modèles</li>
<li><strong>Durabilité</strong> : une culotte bien entretenue dure 5 à 7 ans</li>
<li><strong>Économiques</strong> : rentabilisées en moins d'un an</li>
</ul>

<h2>Comment choisir sa culotte menstruelle ?</h2>

<p>Plusieurs critères sont à prendre en compte pour trouver <strong>la culotte menstruelle parfaite</strong> :</p>

<h3>Le niveau d'absorption</h3>
<p>Les culottes menstruelles se déclinent en plusieurs niveaux d'absorption : flux léger, moyen et abondant. Pour les premiers jours de règles, optez pour un modèle flux abondant. En fin de cycle, un modèle flux léger suffira.</p>

<h3>La composition</h3>
<p>Privilégiez les modèles composés d'au moins <strong>95% de coton biologique certifié</strong>. La couche absorbante peut contenir du bambou ou du Tencel pour renforcer l'absorption.</p>

<h3>La coupe</h3>
<p>Du shorty au string en passant par la culotte classique, il existe des coupes pour tous les goûts. Notre conseil : commencez par un modèle classique taille haute pour un maximum de sécurité.</p>

<h2>Top 3 des meilleures culottes menstruelles en coton</h2>

<h3>1. Réjeanne — La référence française</h3>
<p>Fabriquée en France, la culotte Réjeanne allie <strong>élégance et efficacité</strong>. Son coton bio certifié GOTS offre un confort incomparable. Absorption : équivalent 3 tampons. Prix : environ 35€.</p>

<h3>2. Elia Lingerie — Le meilleur rapport qualité-prix</h3>
<p>Elia propose une gamme complète de culottes menstruelles en coton bio. Leur modèle « Classique » est parfait pour débuter. Absorption : équivalent 2,5 tampons. Prix : environ 30€.</p>

<h3>3. So'Cup — L'option éco-responsable</h3>
<p>So'Cup se distingue par son engagement écologique total : emballage zéro déchet, coton bio et fabrication européenne. Absorption : équivalent 3 tampons. Prix : environ 28€.</p>

<h2>Comment entretenir sa culotte menstruelle ?</h2>

<p>L'entretien est simple mais essentiel pour préserver l'efficacité de votre culotte :</p>
<ol>
<li><strong>Rincer</strong> à l'eau froide après utilisation jusqu'à ce que l'eau soit claire</li>
<li><strong>Laver</strong> en machine à 30°C avec une lessive douce (sans adoucissant)</li>
<li><strong>Sécher</strong> à l'air libre — jamais au sèche-linge</li>
</ol>

<blockquote>Astuce : un trempage de 30 minutes dans de l'eau froide avec une cuillère de percarbonate de soude élimine toutes les taches tenaces.</blockquote>

<h2>FAQ</h2>

<h3>Les culottes menstruelles sont-elles vraiment fiables ?</h3>
<p>Oui ! Les modèles de qualité garantissent une protection anti-fuites grâce à leur technologie multicouche. Des milliers de femmes les utilisent quotidiennement.</p>

<h3>Combien de culottes faut-il dans sa rotation ?</h3>
<p>Nous recommandons un minimum de <strong>5 à 7 culottes</strong> pour couvrir un cycle complet confortablement.</p>

<h3>Les culottes menstruelles conviennent-elles aux flux abondants ?</h3>
<p>Absolument. Les modèles « flux abondant » peuvent absorber l'équivalent de 4 tampons. Pour les flux très abondants, vous pouvez les associer à une cup menstruelle.</p>`
  },
  {
    id: 2,
    slug: 'offrir-un-bijou-a-un-homme-idees-et-conseils',
    title: 'Offrir un bijou à un homme : idées originales et conseils',
    excerpt: 'Choisir le cadeau parfait pour un homme n\'est pas simple. Découvrez notre guide pour offrir un bijou masculin qui fera mouche à coup sûr.',
    category: 'bijoux',
    image: '/images/articles/bijou-homme.jpg',
    date: '2026-02-28',
    readTime: '6 min',
    content: `<p>Offrir un bijou à un homme peut sembler intimidant, mais c'est en réalité l'un des <strong>cadeaux les plus élégants et personnels</strong> que vous puissiez faire. Les bijoux masculins ont considérablement évolué ces dernières années, offrant une variété de styles pour tous les goûts.</p>

<h2>Les types de bijoux pour homme</h2>

<h3>La gourmette</h3>
<p>Classique indémodable, la <strong>gourmette</strong> reste le bijou masculin par excellence. En argent sterling, en or ou en acier, elle se porte aussi bien au quotidien qu'en occasion spéciale. Pensez à la faire graver pour une touche personnelle unique.</p>

<h3>Le bracelet</h3>
<p>Du bracelet en cuir tressé au modèle en perles de pierres naturelles, le choix est vaste. Les bracelets en <strong>perles d'œil-de-tigre</strong> ou de <strong>lave</strong> sont particulièrement tendance et apportent une touche bohème chic.</p>

<h3>La chevalière</h3>
<p>La chevalière connaît un vrai retour en force. Qu'elle soit ornée des initiales, d'un symbole ou simplement design, elle ajoute du caractère à n'importe quelle tenue.</p>

<h3>Le collier / pendentif</h3>
<p>Les chaînes fines avec un pendentif discret sont très populaires. Médaille, croix, plaque gravée... les options ne manquent pas pour un cadeau qui se porte près du cœur.</p>

<h2>Comment choisir le bon bijou ?</h2>

<h3>Observez son style</h3>
<p>Un homme qui s'habille de manière classique appréciera une gourmette sobre en argent. Un homme au style plus décontracté préférera un bracelet en cuir ou en perles.</p>

<h3>Le budget</h3>
<ul>
<li><strong>Moins de 30€</strong> : bracelet en cuir, bracelet perles</li>
<li><strong>30-80€</strong> : gourmette en acier, pendentif argent</li>
<li><strong>80-200€</strong> : chevalière, gourmette argent gravée</li>
<li><strong>200€+</strong> : bijoux en or, montres</li>
</ul>

<h3>La personnalisation</h3>
<p>Un bijou gravé sera toujours plus impactant qu'un modèle standard. La plupart des bijoutiers proposent la gravure pour quelques euros supplémentaires.</p>

<h2>Nos coups de cœur</h2>

<p>Voici notre sélection de bijoux masculins qui font toujours leur effet :</p>

<ol>
<li><strong>Bracelet Figaro en argent 925</strong> — Le classique revisité, parfait pour toutes les occasions</li>
<li><strong>Collier plaque gravée</strong> — Discret et personnel, idéal pour un message intime</li>
<li><strong>Bracelet double tour en cuir</strong> — L'accessoire casual chic par excellence</li>
</ol>

<blockquote>Notre conseil : emballez le bijou dans un écrin de qualité. La présentation fait partie intégrante du cadeau !</blockquote>`
  },
  {
    id: 3,
    slug: 'pourquoi-sinitier-a-la-couture',
    title: 'Pourquoi s\'initier à la couture ? 7 bonnes raisons de commencer',
    excerpt: 'La couture est bien plus qu\'un hobby : c\'est un art qui développe la créativité, fait économiser et permet de s\'habiller de manière unique. Voici pourquoi vous devriez vous y mettre.',
    category: 'couture',
    image: '/images/articles/initier-couture.jpg',
    date: '2026-02-25',
    readTime: '7 min',
    content: `<p>La couture fascine de plus en plus de personnes, et ce n'est pas un hasard. À l'heure de la <strong>fast fashion</strong> et de la surconsommation, apprendre à coudre est un acte à la fois <strong>créatif, écologique et libérateur</strong>.</p>

<h2>1. Créer des vêtements uniques</h2>
<p>L'un des principaux avantages de la couture réside dans le fait qu'elle permet de <strong>créer ses propres vêtements</strong>. Fini les looks identiques à tout le monde : chaque pièce que vous confectionnez est unique et reflète votre personnalité.</p>

<h2>2. Faire des économies</h2>
<p>Même si l'investissement initial (machine à coudre, tissus, mercerie) peut sembler conséquent, la couture devient très <strong>économique sur le long terme</strong>. Un vêtement cousu maison coûte en moyenne 3 à 5 fois moins cher que son équivalent en boutique.</p>

<h2>3. Développer sa créativité</h2>
<p>La couture stimule votre <strong>imagination et votre sens artistique</strong>. Choix des tissus, des couleurs, des formes... Chaque projet est une expression de votre créativité. C'est une activité méditative qui vous permet de vous déconnecter du quotidien.</p>

<h2>4. Un engagement écologique</h2>
<p>En cousant vous-même, vous contribuez à réduire votre impact environnemental. Vous choisissez des <strong>tissus de qualité et éthiques</strong>, vous produisez moins de déchets textiles, et vous pouvez upcycler vos anciens vêtements.</p>

<h2>5. Retoucher et réparer</h2>
<p>Savoir coudre, c'est aussi savoir <strong>réparer et retoucher</strong> ses vêtements. Un ourlet à refaire, un bouton à recoudre, une fermeture éclair à changer... Autant de petites réparations qui vous feront économiser et prolongeront la vie de vos vêtements.</p>

<h2>6. Un hobby anti-stress</h2>
<p>La couture est reconnue pour ses vertus <strong>relaxantes et anti-stress</strong>. La concentration qu'elle demande permet de faire le vide et de pratiquer une forme de mindfulness. De nombreuses couturières comparent leur séance de couture à une séance de méditation.</p>

<h2>7. Rejoindre une communauté passionnée</h2>
<p>La communauté couture est incroyablement <strong>bienveillante et inspirante</strong>. Cours en ligne, tutoriels YouTube, groupes Facebook, ateliers en présentiel... Les ressources et le soutien ne manquent pas pour progresser.</p>

<h2>Par où commencer ?</h2>

<h3>L'équipement de base</h3>
<ul>
<li>Une <strong>machine à coudre débutante</strong> (dès 150€)</li>
<li>Un kit de mercerie (ciseaux, épingles, mètre ruban, craie tailleur)</li>
<li>Du tissu en coton pour vos premiers projets</li>
<li>Un patron simple (tote bag, jupe droite)</li>
</ul>

<h3>Nos premiers projets recommandés</h3>
<ol>
<li><strong>Le tote bag</strong> — Idéal pour maîtriser les coutures droites (2h)</li>
<li><strong>La housse de coussin</strong> — Apprentissage de la fermeture éclair (3h)</li>
<li><strong>La jupe élastiquée</strong> — Votre premier vêtement ! (4h)</li>
</ol>

<blockquote>N'attendez pas d'être parfaite pour commencer. La couture s'apprend en faisant, et chaque erreur est une leçon précieuse.</blockquote>`
  },
  {
    id: 4,
    slug: 'comment-bien-choisir-ses-boutons-de-couture',
    title: 'Comment bien choisir ses boutons de couture ?',
    excerpt: 'Les boutons ne sont pas de simples accessoires fonctionnels : ils subliment vos créations. Voici notre guide pour choisir les boutons parfaits pour chaque projet couture.',
    category: 'couture',
    image: '/images/articles/boutons-couture.jpg',
    date: '2026-02-22',
    readTime: '5 min',
    content: `<p>Les boutons de couture sont bien plus que de simples <strong>éléments fonctionnels</strong>. Ils apportent du caractère, de la couleur et de la personnalité à vos créations. Choisir les bons boutons peut transformer un vêtement basique en pièce unique.</p>

<h2>Les différents types de boutons</h2>

<h3>Boutons à trous</h3>
<p>Les plus classiques, avec 2 ou 4 trous. Ils se cousent directement sur le tissu et sont parfaits pour les <strong>chemises, robes et pantalons</strong>. Les modèles à 4 trous sont plus solides.</p>

<h3>Boutons à queue</h3>
<p>Dotés d'un petit anneau au dos, ils donnent un rendu plus net et sont idéaux pour les <strong>vestes, manteaux et tissus épais</strong>.</p>

<h3>Boutons pression</h3>
<p>Pratiques et discrets, ils se fixent avec une pince spéciale. Parfaits pour les <strong>vêtements d'enfants</strong> et les fermetures invisibles.</p>

<h3>Boutons décoratifs</h3>
<p>En nacre, bois, métal ou tissu recouvert, ces boutons ajoutent une touche d'<strong>originalité et de luxe</strong> à vos créations.</p>

<h2>Comment choisir la bonne taille ?</h2>
<p>La règle d'or : le bouton doit être proportionnel au vêtement. Voici un guide rapide :</p>
<ul>
<li><strong>Chemise / blouse</strong> : 10 à 12 mm</li>
<li><strong>Robe</strong> : 12 à 18 mm</li>
<li><strong>Veste</strong> : 18 à 25 mm</li>
<li><strong>Manteau</strong> : 25 à 35 mm</li>
</ul>

<h2>Choisir la matière selon le projet</h2>

<p>La matière du bouton doit s'harmoniser avec le tissu :</p>
<ul>
<li><strong>Coton / lin</strong> → boutons en nacre ou bois</li>
<li><strong>Laine / tweed</strong> → boutons en cuir, corne ou métal</li>
<li><strong>Soie / satin</strong> → boutons recouverts de tissu</li>
<li><strong>Jean / denim</strong> → boutons métalliques rivetés</li>
</ul>

<blockquote>Astuce pro : achetez toujours un ou deux boutons supplémentaires. Cela vous sauvera en cas de perte ou de casse !</blockquote>`
  },
  {
    id: 5,
    slug: 'comment-shabiller-quand-on-est-enceinte',
    title: 'Comment s\'habiller quand on est enceinte ? Guide style maternité',
    excerpt: 'La grossesse ne doit pas être synonyme de compromis sur le style. Découvrez nos astuces pour rester élégante tout au long de vos 9 mois.',
    category: 'mode',
    image: '/images/articles/mode-enceinte.jpg',
    date: '2026-02-20',
    readTime: '7 min',
    content: `<p>Lorsqu'une femme est enceinte, elle fait face à des <strong>changements corporels</strong> qui nécessitent d'adapter sa garde-robe. Bonne nouvelle : il est tout à fait possible de rester <strong>stylée et confortable</strong> pendant ces 9 mois magnifiques.</p>

<h2>Les essentiels de la garde-robe de grossesse</h2>

<h3>Le jean de maternité</h3>
<p>Investir dans un <strong>bon jean de maternité</strong> avec bande élastique est indispensable. Il vous accompagnera du début à la fin de la grossesse. Privilégiez les modèles slim ou mom cut.</p>

<h3>Les robes fluides</h3>
<p>Les robes <strong>empire</strong> (resserrées sous la poitrine) sont vos meilleures alliées. Elles s'adaptent à toutes les étapes de la grossesse et se portent aussi bien au bureau qu'en soirée.</p>

<h3>Les tops croisés</h3>
<p>Le cache-cœur est le <strong>top idéal pour la grossesse</strong> : il s'adapte à l'évolution de votre poitrine et de votre ventre, tout en mettant en valeur votre silhouette.</p>

<h2>Les erreurs à éviter</h2>

<ul>
<li><strong>Acheter trop tôt</strong> : attendez le 4ème mois pour investir dans des vêtements de maternité</li>
<li><strong>Tout acheter en taille XXL</strong> : les vêtements trop grands ne sont pas flatteurs, préférez les coupes ajustées</li>
<li><strong>Négliger les sous-vêtements</strong> : un bon soutien-gorge de maternité est essentiel pour votre confort</li>
<li><strong>Renoncer aux talons</strong> : un petit talon de 3-4 cm reste parfaitement confortable</li>
</ul>

<h2>Astuces pour ne pas se ruiner</h2>

<p>La grossesse ne dure que 9 mois, pas besoin de dépenser une fortune :</p>
<ol>
<li><strong>Piochez dans la garde-robe du conjoint</strong> : chemises, pulls oversize, blazers</li>
<li><strong>Investissez dans des basiques</strong> : 4-5 pièces de qualité suffisent</li>
<li><strong>Location de vêtements</strong> : des services comme Tale Me proposent la location pour femmes enceintes</li>
<li><strong>Seconde main</strong> : Vinted et les vide-dressings sont vos meilleurs amis</li>
</ol>

<blockquote>Rappel : la grossesse est temporaire, votre style ne doit pas l'être. Restez fidèle à votre personnalité mode !</blockquote>`
  },
  {
    id: 6,
    slug: 'comment-concevoir-un-masque-de-beaute-soi-meme',
    title: 'Comment concevoir un masque de beauté maison ? 5 recettes naturelles',
    excerpt: 'Réalisez vos propres masques de beauté avec des ingrédients naturels que vous avez déjà dans votre cuisine. Résultats garantis !',
    category: 'beaute',
    image: '/images/articles/masque-beaute.jpg',
    date: '2026-02-18',
    readTime: '6 min',
    content: `<p>Les masques de beauté faits maison sont une alternative <strong>naturelle, économique et efficace</strong> aux produits industriels. Avec quelques ingrédients simples, vous pouvez créer des soins adaptés à votre type de peau.</p>

<h2>1. Masque hydratant au miel et avocat</h2>
<p><strong>Pour les peaux sèches</strong></p>
<ul>
<li>½ avocat mûr écrasé</li>
<li>1 cuillère à soupe de miel</li>
<li>1 cuillère à café d'huile d'olive</li>
</ul>
<p>Mélangez tous les ingrédients, appliquez sur le visage propre, laissez poser 15 minutes puis rincez à l'eau tiède. L'avocat nourrit en profondeur tandis que le miel hydrate et adoucit.</p>

<h2>2. Masque purifiant au concombre</h2>
<p><strong>Pour les peaux mixtes à grasses</strong></p>
<ul>
<li>½ concombre mixé</li>
<li>1 cuillère à soupe de yaourt nature</li>
<li>Quelques gouttes de jus de citron</li>
</ul>
<p>Appliquez le mélange sur le visage et laissez poser 20 minutes. Le concombre resserre les pores et apaise, le yaourt équilibre le pH de la peau.</p>

<h2>3. Masque anti-rides aux blancs d'œuf</h2>
<p><strong>Pour les peaux matures</strong></p>
<ul>
<li>1 blanc d'œuf battu en neige</li>
<li>1 cuillère à café de miel</li>
<li>Quelques gouttes d'huile de rose musquée</li>
</ul>
<p>Appliquez en couche fine, laissez sécher 15 minutes. L'effet tenseur est immédiat ! À faire 1 à 2 fois par semaine.</p>

<h2>4. Masque éclat au curcuma</h2>
<p><strong>Pour un teint lumineux</strong></p>
<ul>
<li>1 cuillère à café de curcuma en poudre</li>
<li>2 cuillères à soupe de yaourt</li>
<li>1 cuillère à café de miel</li>
</ul>
<p>Attention : le curcuma peut teinter temporairement la peau. Faites un test sur une petite zone avant la première utilisation.</p>

<h2>5. Masque apaisant à l'avoine</h2>
<p><strong>Pour les peaux sensibles</strong></p>
<ul>
<li>3 cuillères à soupe de flocons d'avoine finement mixés</li>
<li>1 cuillère à soupe de miel</li>
<li>Eau tiède (pour obtenir une pâte)</li>
</ul>
<p>Ce masque calme les irritations et les rougeurs tout en exfoliant délicatement la peau.</p>

<h2>Conseils d'application</h2>
<ol>
<li><strong>Préparez votre peau</strong> en la nettoyant et en ouvrant les pores avec de la vapeur</li>
<li><strong>Appliquez en couche uniforme</strong> en évitant le contour des yeux</li>
<li><strong>Respectez le temps de pose</strong> indiqué</li>
<li><strong>Rincez à l'eau tiède</strong> puis terminez à l'eau froide pour resserrer les pores</li>
<li><strong>Hydratez</strong> avec votre crème habituelle</li>
</ol>

<blockquote>Important : toujours faire un test d'allergie dans le creux du coude 24h avant d'appliquer un nouveau masque sur le visage.</blockquote>`
  },
  {
    id: 7,
    slug: 'les-papillons-rares',
    title: 'Les papillons rares : espèces menacées et comment les protéger',
    excerpt: 'Découvrez les papillons les plus rares au monde, les menaces qui pèsent sur eux et les actions concrètes pour contribuer à leur préservation.',
    category: 'bien-etre',
    image: '/images/articles/papillons-rares.jpg',
    date: '2026-02-15',
    readTime: '6 min',
    content: `<p>Les papillons sont parmi les créatures les plus <strong>fascinantes et colorées</strong> de notre planète. Malheureusement, de nombreuses espèces sont aujourd'hui menacées de disparition. Découvrons ensemble ces merveilles de la nature et comment les protéger.</p>

<h2>Les espèces les plus rares</h2>

<h3>Le Morpho bleu (Morpho menelaus)</h3>
<p>Avec ses ailes d'un <strong>bleu métallique iridescent</strong>, le Morpho bleu est sans doute le papillon le plus spectaculaire au monde. On le trouve dans les forêts tropicales d'Amérique du Sud, où son habitat se réduit d'année en année.</p>

<h3>L'Ornithoptère de la Reine Alexandra</h3>
<p>Le <strong>plus grand papillon diurne au monde</strong> avec une envergure de 30 cm. Endémique de Papouasie-Nouvelle-Guinée, il est classé en danger critique d'extinction par l'UICN.</p>

<h3>Le Flambé (Iphiclides podalirius)</h3>
<p>Autrefois commun en France, ce <strong>papillon aux rayures élégantes</strong> se fait de plus en plus rare dans nos campagnes en raison des pesticides et de la destruction de ses habitats.</p>

<h2>Pourquoi les papillons disparaissent</h2>
<ul>
<li><strong>Destruction des habitats</strong> : urbanisation et agriculture intensive</li>
<li><strong>Pesticides</strong> : même les néonicotinoïdes « ciblés » affectent les papillons</li>
<li><strong>Changement climatique</strong> : modification des cycles de floraison</li>
<li><strong>Pollution lumineuse</strong> : désorientation des espèces nocturnes</li>
</ul>

<h2>Comment agir à notre échelle</h2>
<ol>
<li><strong>Planter des fleurs mellifères</strong> : lavande, buddleia, valériane</li>
<li><strong>Bannir les pesticides</strong> de votre jardin</li>
<li><strong>Laisser une zone sauvage</strong> dans votre espace vert</li>
<li><strong>Installer un abreuvoir</strong> pour les papillons</li>
<li><strong>Participer aux programmes de science citoyenne</strong> comme l'Opération Papillons du Muséum</li>
</ol>

<blockquote>Saviez-vous ? Un jardin de seulement 10m² peut accueillir jusqu'à 20 espèces de papillons différentes si les bonnes plantes sont installées.</blockquote>`
  },
  {
    id: 8,
    slug: 'comment-bien-choisir-une-casquette',
    title: 'Comment bien choisir une casquette ? Le guide ultime',
    excerpt: 'La casquette est l\'accessoire mode incontournable qui peut sublimer ou ruiner un look. Voici tous nos conseils pour trouver LA casquette qui vous correspond.',
    category: 'mode',
    image: '/images/articles/choisir-casquette.jpg',
    date: '2026-02-12',
    readTime: '5 min',
    content: `<p>La casquette est bien plus qu'un simple couvre-chef : c'est un véritable <strong>accessoire de mode</strong> qui en dit long sur votre personnalité. Encore faut-il savoir la choisir et la porter correctement.</p>

<h2>Les différents styles de casquettes</h2>

<h3>La casquette baseball</h3>
<p>La plus populaire et la plus polyvalente. Avec sa visière courbée et sa couronne structurée, elle convient à <strong>presque tous les visages</strong> et s'adapte aux looks casual comme sportifs.</p>

<h3>La casquette plate (béret)</h3>
<p>Élégante et intemporelle, la casquette plate apporte un côté <strong>chic et rétro</strong>. Elle est idéale pour les tenues plus habillées et convient particulièrement aux visages ovales et allongés.</p>

<h3>La casquette trucker</h3>
<p>Reconnaissable à son filet à l'arrière, elle est parfaite pour un look <strong>décontracté et estival</strong>. Son côté aéré la rend idéale pour les journées chaudes.</p>

<h3>Le bob / bucket hat</h3>
<p>Revenu en force ces dernières années, le bob est l'<strong>accessoire streetwear</strong> par excellence. Il offre une protection solaire complète et ajoute une touche cool à n'importe quelle tenue.</p>

<h2>Choisir selon la forme de son visage</h2>
<ul>
<li><strong>Visage rond</strong> : optez pour une casquette à visière plate et couronne haute</li>
<li><strong>Visage ovale</strong> : vous avez de la chance, tout vous va !</li>
<li><strong>Visage carré</strong> : préférez les casquettes arrondies pour adoucir les traits</li>
<li><strong>Visage allongé</strong> : choisissez une casquette plate ou un bob</li>
</ul>

<h2>Les matières</h2>
<p>Le choix de la matière dépend de l'usage et de la saison :</p>
<ul>
<li><strong>Coton</strong> : toute l'année, respirant et facile d'entretien</li>
<li><strong>Lin</strong> : été, ultra-léger et élégant</li>
<li><strong>Laine</strong> : automne/hiver, chaud et structuré</li>
<li><strong>Polyester</strong> : sport, résistant à la transpiration</li>
</ul>

<blockquote>Règle d'or : une casquette doit correspondre à votre style personnel. Ne suivez pas les tendances aveuglément, trouvez ce qui vous met en valeur.</blockquote>`
  },
  {
    id: 9,
    slug: 'pourquoi-et-comment-trouver-son-bracelet-de-chemin-de-vie',
    title: 'Le bracelet chemin de vie : signification, bienfaits et guide d\'achat',
    excerpt: 'À mi-chemin entre numérologie et lithothérapie, le bracelet chemin de vie est un bijou unique calculé à partir de vos données personnelles. Découvrez ses secrets.',
    category: 'bijoux',
    image: '/images/articles/bracelet-chemin-vie.jpg',
    date: '2026-02-10',
    readTime: '8 min',
    content: `<p>Le <strong>bracelet chemin de vie</strong> est un bijou énergétique unique, conçu à partir de vos données personnelles (nom, prénoms, date de naissance). Se trouvant à mi-chemin entre la <strong>numérologie et la lithothérapie</strong>, il est composé de 8 pierres spécifiques qui forment votre chemin de vie.</p>

<h2>Comment fonctionne le bracelet chemin de vie ?</h2>

<p>Le calcul du chemin de vie repose sur la <strong>numérologie</strong> : chaque lettre de vos noms et prénoms est convertie en un nombre, puis associée à une pierre naturelle. Les 8 pierres obtenues correspondent à 8 aspects de votre personnalité :</p>

<ol>
<li><strong>Pierre de base</strong> : vos racines et fondations</li>
<li><strong>Pierre de sommet</strong> : votre évolution spirituelle</li>
<li><strong>Pierre de chemin de vie</strong> : votre mission de vie</li>
<li><strong>Pierre d'appel</strong> : vos aspirations profondes</li>
<li><strong>Pierre de personnalité</strong> : comment les autres vous perçoivent</li>
<li><strong>Pierre d'expression</strong> : votre communication</li>
<li><strong>Pierre de toucher</strong> : votre sensibilité</li>
<li><strong>Pierre de vœu</strong> : votre souhait le plus profond</li>
</ol>

<h2>Les bienfaits</h2>

<p>Les adeptes de la lithothérapie attribuent de nombreux bienfaits au bracelet chemin de vie :</p>
<ul>
<li><strong>Rééquilibrage des chakras</strong> : les pierres travaillent en synergie</li>
<li><strong>Protection énergétique</strong> : contre les énergies négatives</li>
<li><strong>Développement personnel</strong> : meilleure connaissance de soi</li>
<li><strong>Apaisement</strong> : réduction du stress et de l'anxiété</li>
</ul>

<h2>Comment bien choisir son bracelet</h2>

<h3>Attention aux contrefaçons</h3>
<p>Le marché est inondé de bracelets « chemin de vie » avec des pierres génériques. Un vrai bracelet doit être <strong>calculé individuellement</strong> à partir de vos données personnelles par un(e) spécialiste.</p>

<h3>La qualité des pierres</h3>
<p>Exigez des <strong>pierres naturelles</strong> (pas de pierres teintées ou synthétiques). Les pierres doivent être certifiées et provenir de sources éthiques.</p>

<h3>Le support</h3>
<p>Le fil élastique est le plus courant, mais un montage sur fil d'acier ou chaîne sera <strong>plus durable</strong>. Vérifiez aussi la taille des perles (idéalement 8mm pour un bracelet élégant).</p>

<h2>Comment le porter</h2>
<p>Portez votre bracelet chemin de vie au <strong>poignet gauche</strong> (le côté réceptif du corps). Le laisser en contact avec la peau permet aux pierres de travailler sur votre énergie. Purifiez-le régulièrement en le passant sous l'eau claire ou en le posant sur une géode d'améthyste.</p>

<blockquote>Conseil : n'attendez pas un « effet magique » immédiat. Le bracelet chemin de vie est un compagnon de développement personnel qui agit progressivement.</blockquote>`
  },
  {
    id: 10,
    slug: 'comment-etre-elegante-a-la-plage',
    title: 'Comment être élégante à la plage ? Nos conseils mode balnéaire',
    excerpt: 'Le soleil, la plage et le style ne sont pas incompatibles ! Découvrez comment rester chic et tendance même les pieds dans le sable.',
    category: 'mode',
    image: '/images/articles/elegante-plage.jpg',
    date: '2026-02-08',
    readTime: '5 min',
    content: `<p>La plage est souvent synonyme de décontraction totale, mais cela ne signifie pas qu'il faut négliger son style. Voici comment rester <strong>élégante et tendance</strong> tout en profitant du soleil.</p>

<h2>Le maillot de bain, pièce maîtresse</h2>

<h3>Choisir selon sa morphologie</h3>
<ul>
<li><strong>Morphologie en A</strong> : bikini avec haut à volume (volants, push-up) et bas simple</li>
<li><strong>Morphologie en V</strong> : haut triangle et bas taille haute à motifs</li>
<li><strong>Morphologie en H</strong> : une-pièce décolleté ou bikini bandeau</li>
<li><strong>Morphologie en 8</strong> : tout vous va ! Le une-pièce échancré est sublime</li>
</ul>

<h2>Les pièces indispensables du look plage</h2>

<h3>Le paréo</h3>
<p>Le paréo est l'<strong>accessoire balnéaire par excellence</strong>. Porté en jupe, en robe ou en étole, il est aussi élégant que pratique. Optez pour des imprimés floraux ou des couleurs vives.</p>

<h3>Le chapeau de paille</h3>
<p>Au-delà de la protection solaire, un beau chapeau de paille <strong>structure votre look</strong> et ajoute une touche glamour. Largeur de bord recommandée : 8 à 12 cm.</p>

<h3>Les lunettes de soleil</h3>
<p>Choisissez des lunettes avec une <strong>protection UV400</strong> et une monture qui complète la forme de votre visage. Les modèles oversize sont toujours flatteurs.</p>

<h3>Le sac de plage</h3>
<p>Oubliez les sacs en plastique : investissez dans un <strong>cabas en osier</strong> ou en toile de qualité. Il doit être assez grand pour contenir vos essentiels mais assez joli pour passer du restaurant à la plage.</p>

<h2>Les erreurs mode à éviter à la plage</h2>
<ol>
<li><strong>Les tongs en mousse</strong> : préférez des sandales en cuir ou des mules élégantes</li>
<li><strong>Le T-shirt baggy</strong> : optez pour une tunique en lin ou un kimono léger</li>
<li><strong>Trop d'accessoires</strong> : quelques bijoux dorés résistants à l'eau suffisent</li>
</ol>

<blockquote>Le secret d'un look plage réussi : garder la simplicité. Les plus beaux looks balnéaires sont souvent les plus épurés.</blockquote>`
  },
  {
    id: 11,
    slug: 'se-mettre-au-tricot-quels-sont-les-essentiels-dont-vous-avez-besoin',
    title: 'Se mettre au tricot : les essentiels pour bien débuter',
    excerpt: 'Envie de tricoter votre premier pull ? Découvrez le matériel indispensable et nos conseils pour bien commencer le tricot sans vous décourager.',
    category: 'couture',
    image: '/images/articles/debuter-tricot.jpg',
    date: '2026-02-05',
    readTime: '6 min',
    content: `<p>Le tricot fait son grand retour et séduit de plus en plus de créatives. Art ancestral remis au goût du jour, il est à la fois <strong>relaxant, créatif et gratifiant</strong>. Voici tout ce qu'il vous faut pour commencer.</p>

<h2>Le matériel essentiel</h2>

<h3>Les aiguilles à tricoter</h3>
<p>Pour débuter, optez pour des <strong>aiguilles droites en bambou</strong> de taille 5 ou 6 mm. Le bambou est léger, agréable au toucher et les mailles glissent moins qu'avec le métal — idéal quand on apprend.</p>
<ul>
<li><strong>Taille 4-5 mm</strong> : laine fine, accessoires</li>
<li><strong>Taille 6-8 mm</strong> : laine moyenne, projets débutants</li>
<li><strong>Taille 10-15 mm</strong> : grosse laine, projets rapides</li>
</ul>

<h3>Les pelotes de laine</h3>
<p>Commencez avec une <strong>laine acrylique ou mélange acrylique/laine</strong> de grosseur moyenne. Les laines 100% acrylique sont abordables, faciles d'entretien et pardonnent les erreurs.</p>

<h3>Les accessoires indispensables</h3>
<ul>
<li><strong>Aiguille à laine</strong> : pour rentrer les fils</li>
<li><strong>Anneaux marqueurs</strong> : pour repérer les rangs et les motifs</li>
<li><strong>Ciseaux</strong> : une bonne paire suffit</li>
<li><strong>Mètre ruban</strong> : pour vérifier vos dimensions</li>
</ul>

<h2>Les premiers projets recommandés</h2>

<h3>1. L'écharpe en point mousse</h3>
<p>Le projet parfait pour maîtriser la <strong>maille endroit</strong>. Montez 30 mailles et tricotez en point mousse jusqu'à obtenir la longueur souhaitée. Simple et gratifiant !</p>

<h3>2. Le headband torsadé</h3>
<p>Un projet un peu plus avancé qui vous apprendra la <strong>technique des torsades</strong>. Résultat chic garanti.</p>

<h3>3. Le bonnet basique</h3>
<p>Votre premier projet en rond ! Vous apprendrez les <strong>aiguilles circulaires et les diminutions</strong>.</p>

<h2>Les erreurs de débutante à éviter</h2>
<ol>
<li><strong>Tricoter trop serré</strong> : détendez vos mains, le tricot doit rester souple</li>
<li><strong>Choisir une laine trop fine</strong> : commencez gros, vous affinerez plus tard</li>
<li><strong>Négliger l'échantillon</strong> : 10 minutes d'échantillon peuvent sauver 10 heures de travail</li>
<li><strong>Se comparer aux experts</strong> : chaque tricoteuse a débuté avec des mailles irrégulières !</li>
</ol>

<blockquote>Astuce : les tutoriels YouTube sont vos meilleurs amis. Voir les gestes en vidéo est bien plus efficace que les explications écrites quand on débute.</blockquote>`
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter(a => a.category === category);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find(a => a.featured);
}

export function getLatestArticles(count: number = 6): Article[] {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
