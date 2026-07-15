---
title: Fonctionnalités du Constructeur de Thème
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capacités du Générateur de Thèmes : Scaffolder et Activer les Thèmes de Blocs

Superdav AI Agent v1.12.0 introduit deux capacités puissantes qui vous permettent de générer et de déployer des thèmes de blocs personnalisés directement depuis l'interface de chat.

## Aperçu {#overview}

Les capacités **scaffold-block-theme** et **activate-theme** permettent aux agents de :
- Générer des thèmes de blocs complets et prêts pour la production, basés sur vos spécifications
- Activer automatiquement les thèmes sur votre site sans intervention manuelle
- Créer des identités visuelles cohérentes grâce à des décisions de conception guidées

## Scaffolder un Thème de Blocs {#scaffold-block-theme}

La capacité **scaffold-block-theme** génère un nouveau thème de blocs WordPress avec une structure complète, incluant :

- La configuration `theme.json` avec des jetons de conception (design tokens)
- Des fichiers de modèles de blocs pour des mises en page courantes
- Des styles et variations de blocs personnalisés
- Les métadonnées et déclarations de support du thème

### Comment l'utiliser {#how-to-invoke}

Dans votre chat avec Superdav AI Agent, vous pouvez demander la génération d'un thème :

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

L'agent va :
1. Recueillir vos préférences de conception au cours de la conversation
2. Générer la structure complète du thème
3. Créer tous les fichiers de thème nécessaires
4. Préparer le thème pour l'activation

### Résultat attendu {#expected-output}

Lorsque la capacité s'exécute avec succès, vous verrez :

- Une confirmation que le thème a été scaffoldé
- Le nom et l'emplacement du thème
- Un résumé des jetons de conception appliqués (couleurs, typographie, espacement)
- Un statut prêt à être activé

Exemple de résultat :
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activer un Thème {#activate-theme}

La capacité **activate-theme** bascule votre site vers un thème de blocs nouvellement scaffoldé ou existant.

### Comment l'utiliser {#how-to-invoke-1}

Après avoir scaffoldé un thème, vous pouvez l'activer immédiatement :

```
"Activate the Modern Agency theme"
```

Ou activer n'importe quel thème existant :

```
"Switch to the Twentytwentyfour theme"
```

### Résultat attendu {#expected-output-1}

Lorsque l'activation réussit :

- Confirmation du thème actif
- Nom du thème précédent (pour référence)
- URL du site où le thème est maintenant en ligne
- Toutes notes de configuration spécifiques au thème

Exemple de résultat :
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Flux de travail : Scaffolder et Activer {#workflow-scaffold-and-activate}

Un flux de travail typique combine les deux capacités :

1. **Demander la génération du thème** : "Create a block theme for my SaaS landing page"
2. **L'agent scaffolde le thème** : Génère les fichiers et les jetons de conception
3. **Revue et affinement** : Discutez des changements de conception si nécessaire
4. **Activer** : "Activate the theme now"
5. **Vérifier** : Visitez votre site pour confirmer que le nouveau design est en ligne

## Jetons de Conception et Personnalisation {#design-tokens-and-customization}

Les thèmes scaffoldés utilisent les jetons de conception (design tokens) de WordPress (via `theme.json`) pour :

- **Couleurs** : Palette primaire, secondaire, accent, neutre
- **Typographie** : Familles de polices, tailles, graisses, hauteurs de ligne
- **Espacement** : Échelles de rembourrage (padding), marge (margin), et écart (gap)
- **Bordures** : Jetons de rayon et de largeur
- **Ombres** : Niveaux d'élévation

Ces jetons sont centralisés dans `theme.json`, ce qui facilite l'ajustement de l'ensemble de votre système de conception à partir d'un seul fichier.

## Limitations et Notes {#limitations-and-notes}

- Les thèmes sont scaffoldés dans `/wp-content/themes/` et doivent suivre les conventions de nommage de WordPress
- L'activation nécessite des autorisations appropriées sur votre site WordPress
- Le code PHP personnalisé dans les thèmes est minimal ; utilisez des plugins pour les fonctionnalités complexes
- Les thèmes de blocs fonctionnent mieux avec WordPress 5.9 et ultérieur

## Dépannage {#troubleshooting}

**Le thème n'apparaît pas après le scaffolding**
- Vérifiez que le répertoire du thème existe et dispose des permissions appropriées
- Assurez-vous que `theme.json` est un JSON valide
- Vérifiez que le nom du thème ne entre pas en conflit avec des thèmes existants

**L'activation échoue**
- Confirmez que vous disposez des autorisations d'administrateur
- Vérifiez que le répertoire du thème est lisible par WordPress
- Consultez les journaux d'erreurs de WordPress pour plus de détails

**Les jetons de conception ne s'appliquent pas**
- Vérifiez que la syntaxe de `theme.json` est correcte
- Videz tous les plugins de mise en cache
- Vérifiez que votre version de WordPress prend en charge les jetons que vous utilisez

## Prochaines étapes {#next-steps}

Après avoir activé votre thème, vous pouvez :
- Utiliser la compétence **Design System Aesthetics** pour affiner la typographie, les couleurs et l'espacement
- Personnaliser les styles de blocs individuels via l'éditeur de blocs WordPress
- Ajouter du CSS personnalisé dans le fichier `style.css` du thème
- Créer des modèles de blocs personnalisés pour des types de pages spécifiques
