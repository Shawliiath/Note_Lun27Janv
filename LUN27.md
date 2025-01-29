# Chapitre 1

## 1 - Préambule

### Informations

- **WordPress** : 2 sites sur trois dans le monde sont faits en WordPress.
- Étude des techniques permettant de gagner en popularité de façon gratuite.
- **Google** : 9 milliards de recherches par jour, composées principalement de mots-clés.
- **Part du trafic web** passant par des appareils mobiles : entre 60 et 70 %, ce qui montre l’importance de créer des sites responsives.

#### Algorithme Google

L’algorithme de Google repose sur :
- Une compréhension active de l’input de recherche.
- L’analyse des intentions des utilisateurs pour fournir les résultats les plus pertinents.

### Définitions

- **Référencement** : La présence d’une page web dans la base de données d’un moteur de recherche. Le simple fait d’être présent dans cette base suffit à être référencé.

- **Positionnement** : Votre rang dans les résultats naturels des pages de recherche.

- **SEO (Search Engine Optimization)** : Optimisation par toutes les techniques gratuites visant à améliorer le positionnement, le référencement et le suivi de votre site web, ou à moindre coût si un professionnel est engagé.

- **SEA (Search Engine Advertising)** : Techniques payantes, telles que les annonces publicitaires (ads), pour améliorer la visibilité d'un site.

- **AEO (Answer Engine Optimization)** : Optimisation du contenu de certaines pages pour répondre directement aux questions des internautes et apparaître à la position zéro des résultats de recherche.

- **SMO (Social Media Optimization)** : Techniques visant à augmenter la visibilité d’un site web sur les réseaux sociaux (Facebook, Twitter, Instagram, etc.).

- **SEM (Search Engine Marketing)** : Ensemble des techniques de marketing en ligne regroupant le SEO, le SEA et le SMO.

- **SERP (Search Engine Results Page)** : Page de résultats des moteurs de recherche comprenant :
  - Les liens organiques (résultats naturels) => **SEO**
  - Les liens sponsorisés (résultats payants) => **SEA**

- **Backlink** : Un backlink est un lien qui pointe vers votre site web depuis un autre site web ou depuis une page interne de votre propre site web. Cela a un impact sur la popularité de votre site web et donc sur son référencement.

- **Netlinking** : _strategie qui consiste à obtenir des baclinks de qualité pour ameliorer le referencement de votre site web_


### 3.1 Fonctionnement des outils de recherche - Le référencement SEO

Le SEO peut varier selon le langage. Google est insensible aux accents, ce qui signifie que les accents n'affectent pas les résultats des recherches.

On peut paramétrer ses recherches avec des caractères spéciaux, comme les guillemets qui permettent de rechercher une **expression exacte**, chercher un format de fichier précis, des liens, etc.

#### Ce qui influe :
- **Champs de recherche**
- **Titre**
- **URL** : façon dont elles sont liées
- **Description**
- **Type de document et son extension** : le format (PDF, DOC, etc.)

Google devient un moteur de réponse, c'est-à-dire qu'il tente de deviner l'intention exacte de l'utilisateur par plusieurs moyens, tels que :

- Les tendances actuelles
- L'IA
- ...

**Keyword** : mots-clés ou expressions utilisés par l'internaute pour trouver des informations parmi une multitude de pages web.

Comment Google collecte-t-il des informations sur les sites web ? Il utilise des robots appelés **spiders**, qui vont visiter chacune des pages web présentes sur la toile.

Les temps de chargement des pages doivent être réduits au maximum, car ils ont un impact sur l'ergonomie et l'expérience utilisateur.

La qualité du site et du contenu (métier / code) ont également un impact sur la stratégie SEO.

La qualité, la pertinence et la position des liens influencent également le SEO.

### Il y a trois endroits où vous devez placer vos mots-clés pour optimiser le référencement de votre page web :

1. **Dans l'en-tête de la page (head)** : Cette partie est invisible pour l'utilisateur, mais elle est lue par les moteurs de recherche et le navigateur. Elle contient des informations sur la page, telles que le titre, la description, les mots-clés, etc.

2. **Dans le corps de la page (body)** : C'est la partie visible de la page, où vous placez le contenu. Il est important d'inclure des mots-clés de manière naturelle et pertinente ici.

3. **Dans l'URL des pages** : Les mots-clés présents dans l'URL sont très importants pour le référencement, car ils aident les moteurs de recherche à mieux comprendre le contenu de la page.

**OneBOX** : Cela affiche, par exemple, les résultats récents de compétitions sportives de différents sports.
 
### La balise TITLE

Le contenu de la balise **title** s'affiche dans les **SERPs** et sur l'onglet de la page concernée. Le titre doit à la fois contenir des mots-clés et informer l'utilisateur sur le contenu de la page.

#### Conseils de rédaction :
- **Clareté et précision**
- **50-60 caractères**
- Trouvez une expression qui inclut le plus de mots-clés possible
- Personnalisez le titre de chaque page
- Essayez de placer les mots-clés en début de phrase (pour la balise **title**, le nombre de caractères reconnus peut varier d'un moteur de recherche à un autre)
- Éviter impérativement les mots redondants, ou trop de generiques

### La balise meta

La balise **meta** est une balise HTML qui permet de définir les métadonnées qui ne sont pas affichées à l'écran. Il y a encore trop peu de pages qui ne contiennent pas de balise **meta**. 

L'évolution récente des moteurs de recherche a rendu ces balises moins importantes pour le référencement, mais elles restent utiles pour d'autres raisons. 

Faites-les figurer sur toutes vos pages.

### La balise meta description

La balise **meta description** est un résumé de la page qui s'affiche dans les **SERPs**. Elle doit être claire, concise et informative. Elle doit contenir des mots-clés et inciter l'utilisateur à cliquer sur le lien.

### La balise meta-robots

### La balise meta-robots

La balise **meta-robots** indique aux robots des moteurs de recherche comment ils doivent se comporter avec la page : l'indexer ou non, suivre les liens ou non, etc.

```html
<meta name="robots" content="noindex, nofollow">

vous pouvez specifier d'autre instructions:

nonspiet: affiche def
noarchive: affiche def
unavaible_after : affiche def

