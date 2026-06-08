---
title: Flux d'intégration du constructeur de thèmes
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flux d'intégration du constructeur de thèmes

Superdav AI Agent v1.12.0 introduit un **flux d'intégration guidé du constructeur de thèmes** qui vous aide à créer un thème de blocs personnalisé lors de votre configuration initiale. Cela remplace le mode Site Builder hérité par une approche plus flexible, assistée par agent.

## Qu'est-ce que le flux d'intégration du constructeur de thèmes ?

Le flux d'intégration du constructeur de thèmes est un assistant de configuration interactif qui :

- Vous guide à travers les décisions de conception (couleurs, typographie, mise en page)
- Capture les préférences d'identité visuelle de votre site
- Génère un thème de blocs personnalisé adapté à vos besoins
- Active le thème automatiquement une fois terminé

Ce flux est alimenté par l'**agent Setup Assistant**, qui pose des questions de clarification et construit votre thème de manière incrémentielle.

## Démarrer l'intégration du constructeur de thèmes

### Configuration initiale

Lorsque vous lancez Superdav AI Agent pour la première fois sur une nouvelle installation WordPress, vous verrez :

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Sélectionnez **"Build a custom theme"** pour accéder au flux d'intégration du constructeur de thèmes.

### Activation manuelle

Vous pouvez également démarrer l'intégration du constructeur de thèmes à tout moment en demandant :

```
"Start the Theme Builder onboarding"
```

ou

```
"Help me create a custom theme"
```

## Les étapes d'intégration

### Étape 1 : Sélection du mode

L'agent Setup Assistant vous demande votre préférence :

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

Le **mode guidé** est recommandé pour la plupart des utilisateurs ; l'agent fait des recommandations de conception basées sur votre secteur d'activité et vos objectifs.

### Étape 2 : Spécification du site

On vous posera des questions sur votre site :

- **Objectif du site** : E-commerce, blog, portfolio, SaaS, etc.
- **Public cible** : Qui sont vos visiteurs ?
- **Couleurs de marque** : Couleurs primaires et secondaires (ou "Je ne suis pas sûr")
- **Ton** : Professionnel, créatif, ludique, minimaliste, etc.

Ces informations sont stockées dans votre mémoire **site_brief**, que les agents consultent lors de sessions futures.

### Étape 3 : Décisions du système de conception

L'agent vous guide à travers la sélection des tokens de conception :

- **Typographie** : Famille de police (serif, sans-serif, monospace) et échelle de taille
- **Palette de couleurs** : Couleurs primaires, secondaires, d'accentuation et neutres
- **Espacement** : Mise en page compacte, normale ou spacieuse
- **Mouvement** : Animations et transitions (si souhaité)

### Étape 4 : Génération du thème

L'agent Setup Assistant structure votre thème de blocs personnalisé avec :

- `theme.json` contenant tous vos tokens de conception
- Des modèles de blocs pour les mises en page courantes (page d'accueil, blog, contact)
- Des styles de blocs personnalisés correspondant à votre système de conception
- Les métadonnées du thème et les déclarations de support WordPress

### Étape 5 : Activation et vérification

Le thème est activé automatiquement, et vous verrez :

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Vous pouvez ensuite visiter votre site pour vérifier que le thème s'affiche correctement.

## Spécification du site et mémoire site_brief

Pendant l'intégration, l'agent capture la spécification de votre site dans une catégorie de mémoire **site_brief**. Cela comprend :

- L'objectif et les buts du site
- Le public cible
- Les couleurs et le ton de la marque
- Les préférences de conception
- La structure du contenu

### Pourquoi le site_brief est important

Lors de sessions futures, les agents consultent votre site_brief pour :

- Maintenir la cohérence de conception lors des modifications
- Suggérer des fonctionnalités alignées sur l'objectif de votre site
- Fournir des recommandations contextuelles
- Éviter de répéter les questions de configuration

### Visualiser votre site_brief

Vous pouvez demander à l'agent :

```
"Show me my site brief"
```

ou

```
"What do you know about my site?"
```

L'agent affichera votre spécification de site enregistrée.

## Personnalisation après l'intégration

Une fois l'intégration du constructeur de thèmes terminée, vous pouvez :

### Utiliser la compétence Esthétique du système de conception

Demander des raffinements de conception :

```
"Refine the typography to be more modern"
```

ou

```
"Adjust the color palette to be warmer"
```

La **compétence Esthétique du système de conception** vous guide à travers des mises à jour de conception ciblées.

### Modifier theme.json directement

Pour les utilisateurs avancés, modifiez `/wp-content/themes/[theme-name]/theme.json` pour ajuster :

- Les tokens de couleur
- Les échelles de typographie
- Les valeurs d'espacement
- Les définitions de bordure et d'ombre

### Créer des modèles de blocs personnalisés

Utilisez l'éditeur de blocs WordPress pour créer des modèles personnalisés pour :

- Les mises en page de la page d'accueil
- Les pages d'articles de blog
- Les pages produits
- Les formulaires de contact

## Comparaison : Ancien vs. Nouveau flux d'intégration

| Fonctionnalité | Site Builder (Hérité) | Theme Builder (Nouveau) |
|---------|----------------------|-------------------|
| Méthode de configuration | Formulaire basé sur un assistant | Conversation guidée par l'agent |
| Génération de thème | Modèles limités | Structure personnalisée |
| Tokens de conception | Saisie manuelle | Décisions guidées |
| Flexibilité | Options fixes | Personnalisable |
| Mises à jour futures | Non référencées | Stockées dans site_brief |

## Dépannage

**Le flux d'intégration n'a pas été complété**
- Redémarrer le flux : "Start the Theme Builder onboarding"
- Vérifier que votre installation WordPress est à jour
- Vérifier que l'agent Setup Assistant est activé

**Mon site_brief n'est pas utilisé**
- Confirmer que l'agent a accès à la mémoire
- Demander à l'agent de "recall my site brief"
- Vérifier que la mémoire est activée dans vos paramètres

**Le thème généré ne correspond pas à mes préférences**
- Utiliser la compétence Esthétique du système de conception pour le raffiner
- Demander à l'agent de "regenerate the theme with [specific changes]"
- Modifier theme.json directement pour un contrôle précis

## Prochaines étapes

Après avoir terminé l'intégration du constructeur de thèmes :

1. **Vérifier votre site** : Visitez votre site pour voir le nouveau thème
2. **Affiner le design** : Utilisez la compétence Esthétique du système de conception pour les ajustements
3. **Ajouter du contenu** : Commencez à créer le contenu de votre site
4. **Explorer les capacités** : Apprenez-en davantage sur d'autres capacités d'agent comme scaffold-block-theme et activate-theme
