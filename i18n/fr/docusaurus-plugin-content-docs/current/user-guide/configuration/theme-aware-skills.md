---
title: Compétences adaptées au thème
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Fonctionnalités adaptées au thème {#theme-aware-skills}

Superdav AI Agent v1.10.0 inclut quatre nouvelles fonctionnalités intégrées adaptées au thème, qui s'ajustent automatiquement à votre thème WordPress actif. Ces fonctionnalités fournissent des conseils et des capacités spécialisés, adaptés à l'architecture et aux fonctionnalités de votre thème.

## Qu'est-ce que les fonctionnalités adaptées au thème ? {#what-are-theme-aware-skills}

Les fonctionnalités adaptées au thème sont des bases de connaissances et des ensembles d'outils préconfigurés que l'assistant IA sélectionne automatiquement en fonction du thème WordPress actuellement actif sur votre site. Lorsque vous changez de thème, les fonctionnalités disponibles de l'assistant se mettent à jour automatiquement — aucune configuration manuelle n'est nécessaire.

Chaque fonctionnalité comprend :

- **Documentation spécifique au thème** — des conseils sur l'utilisation et la personnalisation du thème
- **Références de blocs et de modèles** — les blocs, modèles et options de conception disponibles
- **Exemples de personnalisation** — des extraits de code et des modèles de configuration pour les tâches courantes
- **Meilleures pratiques** — des recommandations pour l'architecture et le flux de travail du thème

## Fonctionnalités adaptées au thème disponibles {#available-theme-aware-skills}

### Thèmes basés sur les blocs (Block Themes) {#block-themes}

**S'applique à :** Les thèmes utilisant l'architecture basée sur les blocs de WordPress (Full Site Editing).

La fonctionnalité Thèmes basés sur les blocs fournit des conseils sur :

- La création et l'édition de modèles à l'aide de l'éditeur de blocs
- Le travail avec les modèles de blocs et les blocs réutilisables
- La personnalisation des styles globaux et des paramètres `theme.json`
- L'utilisation des blocs et des variations de thème
- La création de modèles de blocs personnalisés pour votre site

**Activée automatiquement lorsque :** Votre thème actif est un thème basé sur les blocs (supporte la fonctionnalité `block-templates`).

### Thèmes classiques (Classic Themes) {#classic-themes}

**S'applique à :** Les thèmes WordPress traditionnels qui utilisent des fichiers de modèles PHP et l'éditeur classique.

La fonctionnalité Thèmes classiques fournit des conseils sur :

- Le travail avec les fichiers de modèles PHP et les hooks
- La personnalisation de l'apparence du thème via le Personnalisateur (Customizer)
- L'utilisation des zones de widgets et des barres latérales
- La modification du CSS et le développement de thèmes enfants
- La compréhension de la hiérarchie des thèmes et des balises de modèle

**Activée automatiquement lorsque :** Votre thème actif est un thème classique (non basé sur les blocs).

### Kadence Blocks {#kadence-blocks}

**S'applique à :** Les sites utilisant le plugin Kadence Blocks pour une conception avancée basée sur les blocs.

La fonctionnalité Kadence Blocks fournit des conseils sur :

- L'utilisation de la bibliothèque de blocs avancée de Kadence (Héros, Témoignages, Tarification, etc.)
- La configuration des paramètres des blocs Kadence et des options de réactivité
- La création de mises en page personnalisées avec les blocs de grille et de conteneur de Kadence
- L'intégration des blocs Kadence avec votre thème
- L'exploitation du système de conception et des préréglages de Kadence

**Activée automatiquement lorsque :** Le plugin Kadence Blocks est actif sur votre site.

### Kadence Theme {#kadence-theme}

**S'applique à :** Les sites utilisant le thème Kadence pour la conception et la personnalisation basées sur les blocs.

La fonctionnalité Kadence Theme fournit des conseils sur :

- La personnalisation du thème Kadence via les styles globaux et `theme.json`
- L'utilisation des modèles et des blocs intégrés de Kadence
- La configuration des paramètres et des options du thème Kadence
- La création de designs personnalisés avec le système de conception de Kadence
- L'intégration de Kadence avec des plugins et des outils populaires

**Activée automatiquement lorsque :** Le thème Kadence est votre thème actif.

## Comment les fonctionnalités sont sélectionnées {#how-skills-are-selected}

L'assistant détecte automatiquement votre thème actif et les plugins installés à chaque message. Si une fonctionnalité adaptée au thème correspondante est disponible, elle est chargée automatiquement dans le contexte de l'assistant. Vous n'avez pas besoin d'activer ou de basculer manuellement les fonctionnalités.

### Fonctionnalités multiples {#multiple-skills}

Si plusieurs fonctionnalités s'appliquent à votre site (par exemple, si vous avez à la fois Kadence Blocks et Kadence Theme actifs), l'assistant a accès à toutes les fonctionnalités applicables et peut faire référence aux conseils de chacune.

### Changement de thème {#switching-themes}

Lorsque vous changez votre thème actif, les fonctionnalités disponibles de l'assistant se mettent à jour automatiquement lors du message suivant. Par exemple :

1. Vous utilisez un thème basé sur les blocs avec la fonctionnalité **Thèmes basés sur les blocs** active.
2. Vous passez à un thème classique.
3. Lors de votre prochain message, la fonctionnalité **Thèmes classiques** est automatiquement chargée, et la fonctionnalité **Thèmes basés sur les blocs** n'est plus disponible.

## Utilisation des fonctionnalités adaptées au thème {#using-theme-aware-skills}

Pour tirer parti d'une fonctionnalité adaptée au thème, il suffit de décrire ce que vous souhaitez faire dans l'interface de chat. L'assistant fera automatiquement référence aux conseils de la fonctionnalité appropriée.

### Exemples de requêtes {#example-prompts}

**Pour Thèmes basés sur les blocs :**
> "Créer une section héros avec une image de fond et un texte centré à l'aide de modèles de blocs."

**Pour Thèmes classiques :**
> "Ajouter une zone de widget personnalisée à la barre latérale à l'aide d'un thème enfant."

**Pour Kadence Blocks :**
> "Construire une section de témoignages à l'aide du bloc Témoignages de Kadence."

**Pour Kadence Theme :**
> "Personnaliser la mise en page de l'en-tête et le style du menu de navigation."

L'assistant fournira des conseils spécifiques au thème et des exemples de code adaptés à votre thème et à vos plugins actifs.

:::note
Les fonctionnalités adaptées au thème sont automatiquement disponibles dans Superdav AI Agent v1.10.0 et ultérieur. Aucun paramétrage ou configuration supplémentaire n'est requis.
:::
