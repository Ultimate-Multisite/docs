---
title: Compétence en spécifications de site
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Fonctionnalité de spécification de site {#site-specification-skill}

La **fonctionnalité de spécification de site** est une approche structurée pour capturer les objectifs, le public et l'identité de marque de votre site. Ces informations sont stockées dans votre mémoire **site_brief**, que les agents consultent au fil des sessions pour fournir une assistance cohérente et contextuelle.

## Qu'est-ce que la spécification de site ? {#what-is-site-specification}

La spécification de site est le processus de documentation des éléments suivants :

- **Objectif du site** : Ce que fait votre site et pourquoi il existe
- **Public cible** : Qui visite votre site et de quoi il a besoin
- **Identité de marque** : Vos couleurs, votre ton et votre style visuel
- **Objectifs commerciaux** : Ce à quoi ressemble le succès pour votre site
- **Structure du contenu** : Comment votre site est organisé

Cette spécification devient votre **site_brief**, une mémoire persistante que les agents utilisent pour comprendre le contexte de votre site.

## Pourquoi utiliser la spécification de site ? {#why-use-site-specification}

### Cohérence entre les sessions {#consistency-across-sessions}

Sans site_brief, vous devriez réexpliquer l'objectif de votre site chaque fois que vous commencez une nouvelle session. Avec lui, les agents comprennent immédiatement :

- Les objectifs et le public de votre site
- Les couleurs et le ton de votre marque
- La structure de votre contenu
- Vos objectifs commerciaux

### Des recommandations améliorées {#better-recommendations}

Les agents utilisent votre site_brief pour :

- Suggérer des fonctionnalités alignées sur l'objectif de votre site
- Recommander des structures de contenu qui correspondent à vos objectifs
- Proposer des designs cohérents avec votre marque
- Éviter de suggérer des fonctionnalités incompatibles

### Un démarrage plus rapide {#faster-onboarding}

Les nouveaux agents (ou les agents dans de nouvelles sessions) peuvent se mettre au point rapidement en lisant votre site_brief au lieu de poser des questions de clarification.

## Lancement de la spécification de site {#initiating-site-specification}

### Pendant l'intégration de Theme Builder {#during-theme-builder-onboarding}

La fonctionnalité de spécification de site est automatiquement lancée pendant le **flux d'intégration de Theme Builder**. L'agent Assistant de configuration pose des questions et construit votre site_brief.

### Lancement manuel {#manual-initiation}

Vous pouvez démarrer la spécification de site à tout moment :

```
"Définissons la spécification de mon site"
```

ou

```
"Aidez-moi à créer un site brief"
```

## Le processus de spécification de site {#the-site-specification-process}

### Étape 1 : Objectif du site {#step-1-site-purpose}

L'agent demande :

```
Quel est l'objectif principal de votre site ?
- Boutique e-commerce
- Blog ou site de contenu
- Portfolio ou vitrine
- Application SaaS
- Communauté ou forum
- Autre : [décrire]
```

Vous pouvez sélectionner une catégorie ou décrire votre propre objectif.

### Étape 2 : Public cible {#step-2-target-audience}

```
Quel est votre public principal ?
- Consommateurs / grand public
- Professionnels du secteur
- Développeurs / utilisateurs techniques
- Étudiants / éducateurs
- Autre : [décrire]

Quels sont leurs besoins principaux ?
```

### Étape 3 : Identité de marque {#step-3-brand-identity}

```
Quelles sont les couleurs de votre marque ?
- Couleur primaire : [sélecteur de couleur ou code hexadécimal]
- Couleur secondaire : [sélecteur de couleur ou code hexadécimal]
- Couleur d'accentuation : [optionnel]

Comment décririez-vous le ton de votre marque ?
- Professionnel / corporatif
- Créatif / artistique
- Ludique / décontracté
- Minimaliste / moderne
- Chaleureux / amical
```

### Étape 4 : Objectifs commerciaux {#step-4-business-goals}

```
À quoi ressemble le succès pour votre site ?
- Générer des prospects
- Vendre des produits
- Créer une communauté
- Partager des connaissances
- Établir une autorité
- Autre : [décrire]

Quelle est votre métrique principale ?
- Revenus
- Engagement utilisateur
- Portée du contenu
- Conversions
- Autre
```

### Étape 5 : Structure du contenu {#step-5-content-structure}

```
Comment votre contenu est-il organisé ?
- Plat (tout le contenu au même niveau)
- Hiérarchique (catégories et sous-catégories)
- Chronologique (style blog)
- Basé sur les produits (catalogue)
- Autre : [décrire]

Quels types de contenu utilisez-vous ?
- Articles de blog
- Pages produits
- Études de cas
- Documentation
- Vidéos
- Autre
```

## Votre mémoire site_brief {#your-sitebrief-memory}

Après avoir terminé la spécification de site, vos informations sont stockées sous la forme **site_brief** dans la mémoire de votre agent. Il s'agit d'un enregistrement structuré contenant :

```json
{
  "site_purpose": "Boutique e-commerce de bijoux faits main",
  "target_audience": "Femmes âgées de 25 à 45 ans, intéressées par la mode durable",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Chaleureux, artisanal, durable",
  "business_goals": ["Générer des ventes", "Construire la fidélité à la marque"],
  "primary_metric": "Revenus",
  "content_structure": "Catalogue de produits avec blog",
  "content_types": ["Pages produits", "Articles de blog", "Histoires clients"]
}
```

## Visualiser et mettre à jour votre site_brief {#viewing-and-updating-your-sitebrief}

### Voir votre site_brief {#view-your-sitebrief}

Demandez à l'agent :

```
"Montre-moi mon site brief"
```

ou

```
"Qu'est-ce que tu sais de mon site ?"
```

L'agent affichera votre spécification enregistrée.

### Mettre à jour votre site_brief {#update-your-sitebrief}

Si votre site évolue, vous pouvez le mettre à jour :

```
"Mets à jour mon site brief : nous ciblons maintenant les clients B2B"
```

ou

```
"Actualise ma spécification de site"
```

Ceci relancera la fonctionnalité de spécification de site en utilisant vos informations existantes comme point de départ.

## Comment les agents utilisent site_brief {#how-agents-use-sitebrief}

### Recommandations de design {#design-recommendations}

Lorsque vous demandez des modifications de design, les agents consultent votre site_brief :

```
Vous : "Refais le design de ma page d'accueil"
Agent : "D'après votre site brief, vous ciblez des femmes âgées de 25 à 45 ans
avec un ton chaleureux et artisanal. Je vais créer un design qui met l'accent
sur vos bijoux faits main et vos valeurs de durabilité."
```

### Suggestions de fonctionnalités {#feature-suggestions}

Les agents suggèrent des fonctionnalités alignées sur vos objectifs :

```
Vous : "Quelles fonctionnalités devrais-je ajouter ?"
Agent : "Pour une boutique e-commerce axée sur la fidélité client,
je recommanderais : un programme de fidélité, des avis clients, une newsletter par e-mail,
et des suggestions de produits."
```

### Structure du contenu {#content-structure}

Les agents proposent une organisation du contenu basée sur votre structure :

```
Vous : "Comment devrais-je organiser mon blog ?"
Agent : "Puisque vous utilisez un catalogue de produits avec un blog, je suggère
d'organiser les articles par catégorie de produits et de créer des 'guides de style'
qui présentent plusieurs produits ensemble."
```

## Bonnes pratiques {#best-practices}

### Soyez précis {#be-specific}

Au lieu de "public général", décrivez votre public réel :

- ✓ "Femmes âgées de 25 à 45 ans, intéressées par la mode durable"
- ✗ "Tout le monde"

### Mettez à jour régulièrement {#update-regularly}

À mesure que votre site évolue, mettez à jour votre site_brief :

- Lorsque vous changez de public cible
- Lorsque vous ajoutez de nouvelles gammes de produits
- Lorsque votre identité de marque change
- Lorsque vos objectifs commerciaux changent

### Utilisez une terminologie cohérente {#use-consistent-terminology}

Utilisez les mêmes termes au cours des sessions :

- ✓ Dites toujours "bijoux durables" (et non "bijoux écologiques" et "produits verts")
- ✓ Faites toujours référence à votre public de la même manière

### Incluez le contexte {#include-context}

Fournissez des informations de fond qui aident les agents à comprendre vos décisions :

- "Nous ciblons des professionnels qui valorisent la qualité plutôt que le prix"
- "Notre public est technophile et s'attend à un design moderne"
- "Nous sommes une startup autofinancée, nous avons donc besoin de solutions rentables"

## Relation avec l'intégration de Theme Builder {#relationship-to-theme-builder-onboarding}

La fonctionnalité de spécification de site est intégrée au **flux d'intégration de Theme Builder**. Lorsque vous terminez l'intégration, votre site_brief est automatiquement créé avec les informations que vous avez fournies.

Vous pouvez également exécuter la spécification de site de manière indépendante si vous le souhaitez :

- Affiner votre spécification après la configuration initiale
- Mettre à jour votre site brief à mesure que votre site évolue
- Créer une spécification détaillée avant de commencer Theme Builder

## Dépannage {#troubleshooting}

**Mon site_brief n'est pas utilisé**
- Confirmez que l'agent a accès à la mémoire
- Demandez à l'agent de "rappeler mon site brief"
- Vérifiez que la mémoire est activée dans vos paramètres

**Je veux recommencer avec un nouveau site_brief**
- Demandez à l'agent : "Effacer mon site brief et recommencer"
- Puis exécutez à nouveau la spécification de site

**L'agent fait des recommandations qui ne correspondent pas à mon site_brief**
- Demandez à l'agent de "réviser mon site brief"
- Mettez à jour votre site_brief s'il est obsolète
- Fournissez un contexte supplémentaire dans vos requêtes

## Prochaines étapes {#next-steps}

Après avoir défini votre spécification de site :

1. **Utiliser Theme Builder** : Créez un thème personnalisé basé sur votre site_brief
2. **Affiner le design** : Utilisez la fonctionnalité Design System Aesthetics pour un travail de design détaillé
3. **Planifier le contenu** : Demandez aux agents des recommandations de structure de contenu
4. **Construire les fonctionnalités** : Demandez des fonctionnalités alignées sur vos objectifs commerciaux
