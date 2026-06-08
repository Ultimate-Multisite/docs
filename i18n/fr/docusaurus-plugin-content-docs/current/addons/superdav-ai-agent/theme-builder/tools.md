---
title: Outils et Configuration
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Outils et configuration

Le Générateur de Thème (Theme Builder) utilise un ensemble d'outils pour analyser, concevoir et construire votre site WordPress. Dans la version 1.16.0, **sd-ai-agent/site-scrape est désormais un outil de Niveau 1 (Tier 1)**, ce qui le rend disponible par défaut dans le Générateur de Thème.

## Outils disponibles

### Outils de Niveau 1 (Tier 1) (Toujours disponibles)

Les outils de Niveau 1 sont disponibles par défaut dans le Générateur de Thème sans aucune configuration supplémentaire.

#### sd-ai-agent/site-scrape

**Objectif :** Analyser des sites web existants pour en extraire l'inspiration de design, la structure de contenu et les fonctionnalités.

**Capacités :**

- **Analyse de site web** — analyser et décortiquer des sites concurrents ou sources d'inspiration
- **Extraction de design** — identifier les couleurs, les polices et les motifs de mise en page
- **Structure de contenu** — comprendre l'organisation et la hiérarchie des pages
- **Détection de fonctionnalités** — identifier les plugins et les fonctionnalités
- **Analyse de performance** — vérifier la vitesse de chargement et l'optimisation des pages
- **Analyse SEO** — examiner les balises méta et les données structurées

**Utilisation :**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Ce qu'il extrait :**

- Palette de couleurs et utilisation des couleurs
- Typographie (polices et tailles)
- Structure de mise en page et espacement
- Motifs de navigation
- Organisation du contenu
- Utilisation des images et des médias
- Éléments interactifs
- Adaptabilité mobile

**Limitations :**

- Ne peut pas analyser les sites protégés par mot de passe
- Respecte le fichier robots.txt et les politiques du site
- Peut ne pas capturer le contenu dynamique
- Les sites très dépendants de JavaScript peuvent avoir une analyse limitée
- Les grands sites peuvent prendre plus de temps à analyser

### Outils de Niveau 2 (Tier 2) (Optionnels)

Les outils de Niveau 2 sont disponibles lorsqu'ils sont explicitement activés dans les paramètres du Générateur de Thème.

#### Advanced Analytics (Analyses avancées)

Fournit des métriques de performance détaillées :

- Temps de chargement des pages
- Core Web Vitals
- Score SEO
- Score d'accessibilité
- Score des meilleures pratiques

#### Content Optimizer (Optimiseur de contenu)

Analyse et suggère des améliorations pour :

- La lisibilité
- L'optimisation SEO
- L'utilisation des mots-clés
- La structure du contenu
- Le placement des appels à l'action

### Outils de Niveau 3 (Tier 3) (Premium)

Les outils de Niveau 3 nécessitent une configuration supplémentaire ou des fonctionnalités premium.

#### AI Content Generator (Générateur de contenu IA)

Génère du contenu pour :

- Les descriptions de produits
- Les pages de services
- Les articles de blog
- Les méta-descriptions
- Les textes d'appels à l'action

#### Advanced Design Tools (Outils de design avancés)

Fournit des capacités de design avancées :

- Génération de CSS personnalisé
- Création d'animations
- Conception d'éléments interactifs
- Théorie des couleurs avancée
- Optimisation de la typographie

## Configuration des outils

### Activation des outils

Pour activer des outils supplémentaires dans le Générateur de Thème :

1. Naviguez vers **Gratis AI Agent → Settings**
2. Allez dans **Theme Builder → Tools**
3. Activez ou désactivez les outils selon vos besoins
4. Enregistrez les paramètres

### Permissions des outils

Certains outils nécessitent des autorisations :

- **Site scraping** — nécessite un accès Internet
- **Analytics** — nécessite une intégration Google Analytics
- **Content generation** — nécessite des clés API
- **Advanced features** — peut nécessiter un abonnement premium

### Clés API et identifiants

Configurez les clés API pour les outils qui en ont besoin :

1. Allez dans **Gratis AI Agent → Settings → API Keys**
2. Entrez les identifiants pour chaque outil
3. Testez la connexion
4. Enregistrez en toute sécurité

## Utilisation de sd-ai-agent/site-scrape

### Utilisation de base

Demandez au Générateur de Thème d'analyser un site web :

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Analyse spécifique

Demandez des types d'analyse spécifiques :

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Analyse comparative

Comparez plusieurs sites :

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Limitations et considérations des outils

### Limitation de débit (Rate Limiting)

- Le scraping est limité pour éviter la surcharge du serveur
- Des requêtes multiples vers le même site peuvent être ralenties
- Les grands sites peuvent prendre plus de temps à analyser

### Exactitude du contenu

- Le contenu dynamique peut ne pas être entièrement capturé
- Le contenu rendu par JavaScript peut être incomplet
- Les données en temps réel peuvent ne pas être reflétées
- Certains contenus peuvent être derrière des murs payants

### Considérations légales et éthiques

- Respecter le fichier robots.txt et les politiques du site
- Ne pas scraper de contenu protégé par droit d'auteur pour le reproduire
- Utiliser l'analyse pour l'inspiration, pas pour la copie
- Vérifier que vous avez les droits d'utilisation du contenu extrait
- Respecter les conditions d'utilisation des sites analysés

### Impact sur les performances

- Le scraping de grands sites peut prendre du temps
- Plusieurs analyses simultanées peuvent être plus lentes
- La connectivité réseau affecte la vitesse
- Les grands ensembles de données peuvent nécessiter plus de traitement

## Bonnes pratiques

### Utilisation de l'analyse de site

1. **Analyser plusieurs sites** — recueillir l'inspiration de plusieurs sources
2. **Se concentrer sur la structure** — apprendre les motifs de mise en page et d'organisation
3. **Extraire les couleurs** — utiliser les palettes de couleurs comme point de départ
4. **Étudier la typographie** — identifier les combinaisons de polices qui vous plaisent
5. **Examiner la navigation** — comprendre l'organisation des menus

### Scraping éthique

1. **Respecter robots.txt** — suivre les directives du site
2. **Ne pas copier de contenu** — utiliser l'analyse uniquement pour l'inspiration
3. **Vérifier les droits** — s'assurer que vous pouvez utiliser le contenu extrait
4. **Attribuer les sources** — créditer les sources d'inspiration
5. **Respecter les conditions** — se conformer aux conditions d'utilisation du site

### Maximiser l'efficacité des outils

1. **Être précis** — demander des types d'analyse spécifiques
2. **Fournir un contexte** — expliquer l'objectif de votre site
3. **Définir des attentes** — décrire vos objectifs de design
4. **Itérer** — affiner en fonction des résultats
5. **Combiner les outils** — utiliser plusieurs outils pour une analyse complète

## Dépannage

### Le site ne se scrape pas

- Vérifiez si le site est publiquement accessible
- Vérifiez que robots.txt autorise le scraping
- Essayez un autre site
- Vérifiez la connexion Internet
- Contactez le support si le problème persiste

### Analyse incomplète

- Le site peut contenir du contenu dynamique
- JavaScript peut ne pas être entièrement rendu
- Les grands sites peuvent dépasser le délai d'attente (timeout)
- Essayez d'analyser des pages spécifiques à la place
- Demandez des types d'analyse spécifiques

### Performance lente

- Les grands sites prennent plus de temps à analyser
- Plusieurs analyses simultanées sont plus lentes
- La connectivité réseau affecte la vitesse
- Essayez pendant les heures creuses
- Analysez d'abord des sections plus petites

## Documentation connexe

- [Discovery Interview](./discovery-interview.md) — recueillir des informations de design
- [Design Direction](./design-direction.md) — affiner votre design
- [Hospitality Menus](./hospitality-menus.md) — créer des pages de menus
