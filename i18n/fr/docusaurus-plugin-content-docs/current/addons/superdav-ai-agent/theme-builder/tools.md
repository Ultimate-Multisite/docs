---
title: Outils et configuration
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Outils et configuration

Theme Builder utilise un ensemble d’outils pour analyser, concevoir et créer votre site WordPress. Dans la version 1.16.0, **sd-ai-agent/site-scrape est désormais un outil de Tier 1**, ce qui le rend disponible par défaut dans Theme Builder. Superdav AI Agent v1.18.0 introduit également un package compagnon avancé distribué séparément pour les workflows de développeurs de confiance ; ces outils ne font pas partie du package principal WordPress.org et doivent être installés et autorisés séparément.

## Outils disponibles {#available-tools}

### Outils de Tier 1 (toujours disponibles) {#tier-1-tools-always-available}

Les outils de Tier 1 sont disponibles par défaut dans Theme Builder sans configuration supplémentaire.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Objectif :** analyser des sites web existants afin d’en extraire de l’inspiration de design, la structure de contenu et les fonctionnalités.

**Capacités :**

- **Analyse de sites web** — explorer et analyser des sites web concurrents ou d’inspiration
- **Extraction de design** — identifier les couleurs, les polices et les modèles de mise en page
- **Structure de contenu** — comprendre l’organisation et la hiérarchie des pages
- **Détection de fonctionnalités** — identifier les plugins et les fonctionnalités
- **Analyse des performances** — vérifier la vitesse des pages et l’optimisation
- **Analyse SEO** — examiner les balises meta et les données structurées

**Utilisation :**

```
Analyse le design de example.com et utilise-le comme inspiration pour mon site.
```

**Ce qu’il extrait :**

- Palette de couleurs et utilisation des couleurs
- Typographie (polices et tailles)
- Structure de mise en page et espacement
- Modèles de navigation
- Organisation du contenu
- Utilisation des images et des médias
- Éléments interactifs
- Adaptabilité mobile

**Limitations :**

- Ne peut pas explorer les sites protégés par mot de passe
- Respecte robots.txt et les politiques du site
- Peut ne pas capturer le contenu dynamique
- Les sites utilisant beaucoup JavaScript peuvent avoir une analyse limitée
- Les grands sites peuvent prendre plus de temps à analyser

### Outils de Tier 2 (facultatifs) {#tier-2-tools-optional}

Les outils de Tier 2 sont disponibles lorsqu’ils sont explicitement activés dans les réglages de Theme Builder.

#### Analyses avancées {#advanced-analytics}

Fournit des métriques de performances détaillées :

- Temps de chargement des pages
- Core Web Vitals
- Score SEO
- Score d’accessibilité
- Score des bonnes pratiques

#### Optimiseur de contenu {#content-optimizer}

Analyse et suggère des améliorations pour :

- Lisibilité
- Optimisation SEO
- Utilisation des mots-clés
- Structure du contenu
- Placement des appels à l’action

### Outils de Tier 3 (Premium) {#tier-3-tools-premium}

Les outils de Tier 3 nécessitent une configuration supplémentaire ou des fonctionnalités premium.

#### Générateur de contenu IA {#ai-content-generator}

Génère du contenu pour :

- Descriptions de produits
- Pages de services
- Articles de blog
- Meta descriptions
- Texte d’appel à l’action

#### Outils de design avancés {#advanced-design-tools}

Fournit des capacités de design avancées :

- Génération de CSS personnalisé
- Création d’animations
- Design d’éléments interactifs
- Théorie avancée des couleurs
- Optimisation de la typographie

### Outils compagnons avancés (package séparé) {#advanced-companion-tools-separate-package}

Le package compagnon avancé est distribué séparément de la version principale de Superdav AI Agent. Il est destiné aux environnements de développeurs et de propriétaires de sites de confiance, où les administrateurs autorisent explicitement l’agent à utiliser des outils à fort impact.

Les capacités du compagnon avancé peuvent inclure :

- **Outils de système de fichiers** — inspecter et modifier des fichiers approuvés dans des environnements de confiance
- **Outils de base de données** — interroger ou mettre à jour les données du site lorsque cela est explicitement autorisé
- **Outils WP-CLI** — exécuter des commandes de maintenance et d’inspection WordPress
- **Outils de répartiteur REST** — appeler des endpoints REST enregistrés via des workflows de dispatch contrôlés
- **Outils de création de plugins** — échafauder et itérer sur du code de plugin
- **Outils d’instantané Git** — créer des instantanés avant des opérations de développement risquées
- **Outils de gestion des utilisateurs** — aider à examiner ou ajuster les enregistrements d’utilisateurs lorsque cela est autorisé
- **Outils de benchmark** — exécuter des benchmarks de performances ou de capacités pour l’examen de développement

Ne les documentez pas comme des outils Theme Builder généralement disponibles pour chaque installation. Ils ne sont disponibles que lorsque le package compagnon avancé est installé, activé et limité aux administrateurs de confiance.

## Configuration des outils {#tool-configuration}

### Activation des outils {#enabling-tools}

Pour activer des outils supplémentaires dans Theme Builder :

1. Accédez à **Gratis AI Agent → Settings**
2. Allez dans **Theme Builder → Tools**
3. Activez/désactivez les outils selon les besoins
4. Enregistrez les réglages

### Autorisations des outils {#tool-permissions}

Certains outils nécessitent des autorisations :

- **Exploration de site** — nécessite un accès Internet
- **Analyses** — nécessitent une intégration Google Analytics
- **Génération de contenu** — nécessite des API keys
- **Fonctionnalités avancées** — peuvent nécessiter un abonnement premium
- **Outils compagnons avancés** — nécessitent le package Advanced distribué séparément et une confiance explicite de l’administrateur

### API keys et identifiants {#api-keys-and-credentials}

Configurez les API keys pour les outils qui les nécessitent :

1. Allez dans **Gratis AI Agent → Settings → API Keys**
2. Saisissez les identifiants pour chaque outil
3. Testez la connexion
4. Enregistrez de manière sécurisée

### Installation du package compagnon avancé {#installing-the-advanced-companion-package}

Le package compagnon avancé est publié séparément du ZIP principal WordPress.org. Installez-le uniquement depuis le canal officiel de distribution du projet pour la version, puis limitez l’accès aux administrateurs de confiance. Examinez les portes d’approbation humaine et le comportement des instantanés git avant d’activer les outils de système de fichiers, de base de données, WP-CLI, de répartiteur REST, de création de plugins, de gestion des utilisateurs ou de benchmark sur un site de production.

## Utilisation de sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Utilisation de base {#basic-usage}

Demandez à Theme Builder d’analyser un site web :

```
Analyse le design du site de mon concurrent à l’adresse competitor.com
et suggère des améliorations de design pour mon site.
```

### Analyse spécifique {#specific-analysis}

Demandez des types d’analyse spécifiques :

```
Extrais la palette de couleurs de example.com et utilise-la comme inspiration.
```

```
Analyse la structure de navigation de example.com et applique une
organisation similaire à mon site.
```

```
Vérifie l’adaptabilité mobile de example.com et assure-toi que mon site
est tout aussi responsive.
```

### Analyse comparative {#comparison-analysis}

Comparez plusieurs sites :

```
Compare les designs de site1.com et site2.com et crée un design
qui combine les meilleurs éléments des deux.
```

## Limitations et considérations des outils {#tool-limitations-and-considerations}

### Limitation du débit {#rate-limiting}

- Le scraping est limité en débit pour éviter la surcharge du serveur
- Plusieurs requêtes vers le même site peuvent être ralenties
- Les grands sites peuvent prendre plus de temps à analyser

### Exactitude du contenu {#content-accuracy}

- Le contenu dynamique peut ne pas être entièrement capturé
- Le contenu rendu par JavaScript peut être incomplet
- Les données en temps réel peuvent ne pas être reflétées
- Certains contenus peuvent se trouver derrière des paywalls

### Considérations juridiques et éthiques {#legal-and-ethical-considerations}

- Respectez robots.txt et les politiques du site
- Ne scrapez pas du contenu protégé par des droits d’auteur pour le reproduire
- Utilisez l’analyse comme source d’inspiration, pas pour copier
- Vérifiez que vous avez les droits d’utiliser le contenu extrait
- Respectez les conditions de service des sites analysés

### Impact sur les performances {#performance-impact}

- Le scraping de grands sites peut prendre du temps
- Plusieurs scrapes simultanés peuvent être plus lents
- La connectivité réseau affecte la vitesse
- Les grands jeux de données peuvent nécessiter davantage de traitement

## Bonnes pratiques {#best-practices}

### Utilisation de l’analyse de site {#using-site-analysis}

1. **Analysez plusieurs sites** — recueillez de l’inspiration auprès de plusieurs sources
2. **Concentrez-vous sur la structure** — apprenez les modèles de mise en page et d’organisation
3. **Extrayez les couleurs** — utilisez les palettes de couleurs comme points de départ
4. **Étudiez la typographie** — identifiez les combinaisons de polices que vous aimez
5. **Examinez la navigation** — comprenez l’organisation des menus

### Scraping éthique {#ethical-scraping}

1. **Respectez robots.txt** — suivez les directives du site
2. **Ne copiez pas le contenu** — utilisez l’analyse uniquement comme source d’inspiration
3. **Vérifiez les droits** — assurez-vous de pouvoir utiliser le contenu extrait
4. **Attribuez les sources** — créditez les sources d’inspiration
5. **Respectez les conditions** — conformez-vous aux conditions de service du site

### Maximiser l’efficacité des outils {#maximizing-tool-effectiveness}

1. **Soyez précis** — demandez des types d’analyse spécifiques
2. **Fournissez du contexte** — expliquez l’objectif de votre site
3. **Définissez les attentes** — décrivez vos objectifs de design
4. **Itérez** — affinez en fonction des résultats
5. **Combinez les outils** — utilisez plusieurs outils pour une analyse complète

## Dépannage {#troubleshooting}

### Le site ne peut pas être scrapé {#site-wont-scrape}

- Vérifiez si le site est accessible publiquement
- Vérifiez que robots.txt autorise le scraping
- Essayez un autre site
- Vérifiez la connexion Internet
- Contactez le support si le problème persiste

### Analyse incomplète {#incomplete-analysis}

- Le site peut avoir du contenu dynamique
- JavaScript peut ne pas être entièrement rendu
- Les grands sites peuvent expirer
- Essayez plutôt d’analyser des pages spécifiques
- Demandez des types d’analyse spécifiques

### Performances lentes {#slow-performance}

- Les grands sites prennent plus de temps à analyser
- Plusieurs scrapes simultanés sont plus lents
- La connectivité réseau affecte la vitesse
- Essayez pendant les heures creuses
- Analysez d’abord de plus petites sections

## Documentation associée {#related-documentation}

- [Entretien de découverte](./discovery-interview.md) — recueillir des informations de design
- [Direction du design](./design-direction.md) — affiner votre design
- [Menus d’hospitalité](./hospitality-menus.md) — créer des pages de menus
