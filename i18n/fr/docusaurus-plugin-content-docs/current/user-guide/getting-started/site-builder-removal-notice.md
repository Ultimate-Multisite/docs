---
title: Avis de suppression du mode constructeur de site
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Suppression du Mode Constructeur de site {#site-builder-mode-removal-notice}

**Le mode Constructeur de site (Site Builder mode) a été supprimé dans Superdav AI Agent v1.12.0.** Si vous utilisiez ce mode, vous devez migrer vers l'**agent Assistant de configuration (Setup Assistant agent)** pour la création de thèmes et la configuration de votre site.

## Ce qui s'est passé ? {#what-happened}

### Mode Constructeur de site (Ancien) {#site-builder-mode-legacy}

Le mode Constructeur de site était une interface basée sur un assistant (wizard) permettant de :

- Créer des sites à partir de modèles
- Configurer les paramètres de base
- Choisir un thème
- Définir le contenu initial

### Ce qui l'a remplacé ? {#what-replaced-it}

L'**agent Assistant de configuration (Setup Assistant agent)** gère désormais toutes les fonctionnalités du Constructeur de site grâce à :

- Une configuration guidée par l'agent, plus flexible
- De meilleures options de personnalisation des thèmes
- L'intégration avec l'intégration du Constructeur de thèmes (Theme Builder onboarding)
- Une mémoire persistante du `site_brief` pour les sessions futures

## Si vous utilisiez le Mode Constructeur de site {#if-you-were-using-site-builder-mode}

### Vos sites sont en sécurité {#your-sites-are-safe}

- Les sites existants créés avec le Mode Constructeur de site continuent de fonctionner
- Aucune perte de données ni interruption de votre site
- Vous pouvez continuer à gérer vos sites normalement

### Migrez vers l'agent Assistant de configuration {#migrate-to-setup-assistant-agent}

Pour la configuration de nouveaux sites ou les changements de thème, utilisez l'agent Assistant de configuration :

```
"Aidez-moi à configurer un nouveau site"
```

ou

```
"Démarrer l'intégration du Constructeur de thèmes"
```

L'agent Assistant de configuration offre la même fonctionnalité, mais avec plus de flexibilité.

## Comparaison : Constructeur de site vs. Assistant de configuration {#comparison-site-builder-vs-setup-assistant}

| Fonctionnalité | Constructeur de site (Supprimé) | Assistant de configuration (Nouveau) |
|---------|----------------------|----------------------|
| Méthode de configuration | Formulaire assistant | Conversation avec l'agent |
| Sélection de thème | Modèles prédéfinis | Génération personnalisée |
| Personnalisation | Options limitées | Système de conception complet |
| Brève du site | Non stockée | Mémoire persistante |
| Sessions futures | Configuration répétitive | Utilisation du `site_brief` stocké |
| Flexibilité | Flux de travail fixe | Conversation adaptative |

## Migration vers l'agent Assistant de configuration {#migrating-to-setup-assistant-agent}

### Pour les nouveaux sites {#for-new-sites}

Au lieu d'utiliser le Mode Constructeur de site :

1. Demande : "Aidez-moi à configurer un nouveau site"
2. L'agent Assistant de configuration vous guidera à travers :
   - L'objectif et les buts du site
   - Le public cible
   - L'identité de marque
   - La génération du thème
   - La configuration initiale

### Pour les sites existants {#for-existing-sites}

Si vous avez un site existant créé avec le Mode Constructeur de site :

1. Vous pouvez continuer à l'utiliser tel quel
2. Pour mettre à jour le thème, demandez : "Refaire le design de mon site"
3. L'agent Assistant de configuration vous aidera à créer un nouveau thème
4. Les données de votre site restent inchangées

### Pour les changements de thème {#for-theme-changes}

Au lieu de la sélection de thème du Mode Constructeur de site :

1. Demande : "Changer mon thème"
2. L'agent Assistant de configuration :
   - Vous demandera vos préférences de design
   - Générera un thème personnalisé
   - L'activera sur votre site

## Différences clés {#key-differences}

### Mode Constructeur de site {#site-builder-mode}

```
1. Choisir un modèle
2. Sélectionner un thème
3. Configurer les paramètres de base
4. Terminé
```

### Agent Assistant de configuration {#setup-assistant-agent}

```
1. Décrire l'objectif de votre site
2. Définir votre public cible
3. Choisir les préférences de design
4. L'agent génère un thème personnalisé
5. L'agent active le thème
6. Le site_brief est stocké pour les sessions futures
```

## Avantages de l'agent Assistant de configuration {#benefits-of-setup-assistant-agent}

### Plus flexible {#more-flexible}

- Décrivez votre site en langage naturel
- Obtenez des recommandations personnalisées
- S'adapte à vos besoins spécifiques

### Meilleure personnalisation {#better-customization}

- Génération de thèmes personnalisés
- Décisions basées sur le système de conception
- Jeton de conception (design tokens) persistant

### Mémoire persistante {#persistent-memory}

- Votre `site_brief` est stocké
- Les agents futurs comprennent votre site
- Pas besoin de répéter les informations de configuration

### Flux de travail intégré {#integrated-workflow}

- Intégration du Constructeur de thèmes
- Compétence Esthétique du système de conception (Design System Aesthetics skill)
- Contrôles de visibilité de capacité (Ability Visibility controls)
- Tout fonctionne ensemble de manière transparente

## Dépannage {#troubleshooting}

### Je ne trouve pas le Mode Constructeur de site {#i-cant-find-site-builder-mode}

Le Mode Constructeur de site a été supprimé. Utilisez l'agent Assistant de configuration à la place :

```
"Aidez-moi à configurer un nouveau site"
```

### Je veux recréer un site à partir du Constructeur de site {#i-want-to-recreate-a-site-from-site-builder}

Vous pouvez le recréer avec l'agent Assistant de configuration :

1. Demande : "Aidez-moi à configurer un nouveau site"
2. Décrivez l'objectif et le design de votre site original
3. L'agent générera un thème similaire
4. Votre `site_brief` sera stocké pour référence future

### Mon site Constructeur de site existant ne fonctionne pas {#my-existing-site-builder-site-isnt-working}

Les sites existants créés avec le Mode Constructeur de site continuent de fonctionner. Si vous rencontrez des problèmes :

1. Vérifiez que votre thème est toujours actif
2. Vérifiez que vos plugins sont activés
3. Consultez les journaux d'erreurs de WordPress
4. Contactez le support si les problèmes persistent

### Puis-je toujours utiliser mes anciens modèles Constructeur de site ? {#can-i-still-use-my-old-site-builder-templates}

Les modèles Constructeur de site ne sont plus disponibles. Cependant :

- Vos sites existants continuent de fonctionner
- Vous pouvez recréer des sites similaires avec l'agent Assistant de configuration
- L'agent Assistant de configuration offre plus d'options de personnalisation

## Prochaines étapes {#next-steps}

1. **Pour les nouveaux sites** : Utilisez l'agent Assistant de configuration
2. **Pour les sites existants** : Continuez de les utiliser tels quels
3. **Pour les changements de thème** : Demandez de l'aide à l'agent Assistant de configuration
4. **Pour le raffinement du design** : Utilisez la compétence Esthétique du système de conception

## Sujets connexes {#related-topics}

- **Intégration du Constructeur de thèmes (Theme Builder Onboarding)** : Configuration guidée pour les thèmes personnalisés
- **Agent Assistant de configuration (Setup Assistant Agent)** : Configuration de site guidée par l'agent
- **Compétence Spécification de site (Site Specification Skill)** : Définir les objectifs et le public de votre site
- **Compétence Esthétique du système de conception (Design System Aesthetics Skill)** : Affiner l'identité visuelle de votre site
