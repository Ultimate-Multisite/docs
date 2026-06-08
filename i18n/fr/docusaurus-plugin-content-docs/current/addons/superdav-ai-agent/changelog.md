---
title: Journal des modifications
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Journal des modifications

## 1.16.0 — Publié le 2026-05-20

### Nouveautés

- **Fonctionnalité de génération de logo SVG** — Le Générateur de thèmes peut désormais générer et intégrer des logos SVG personnalisés avec un assainissement sécurisé par namespace.
- **Téléchargement de photos dans l'entretien de découverte** — L'entretien de découverte du Générateur de thèmes comprend désormais une étape de téléchargement de photos pour un contexte de conception plus riche.
- **Fonctionnalité de validation du contraste de palette** — Vérifie les paires de couleurs pour la conformité WCAG avant de les appliquer à un thème.
- **Menus hôteliers** — Le Générateur de thèmes peut désormais générer des pages de menus structurés pour l'alimentation et les boissons destinées aux entreprises hôtelières.
- **Rendu de prévisualisation sur bureau et mobile** — Prévisualisez votre conception sur des appareils de bureau et mobiles lors de la sélection de la direction de conception.
- **Paramètre d'étiquette de navigation** — La fonctionnalité Créer Menu prend désormais en charge un `navigation_label` distinct, séparé du titre de la page.
- **Disponibilité de l'outil de niveau 1** — sd-ai-agent/site-scrape est désormais un outil de niveau 1 disponible par défaut dans le Générateur de thèmes.

### Corrections

- **Cache du client IA** — Maintenant géré par des transients pour une persistance inter-requêtes, empêchant la perte de données lors de tâches d'agent de longue durée.
- **Liens d'action de ligne de plugin** — Corrigé et renommé pour plus de clarté.

## 1.10.0 — Publié le 2026-05-05

### Nouveautés

- **Recherche internet Tavily** — Ajoute Tavily comme fournisseur de recherche pour des résultats de recherche internet plus riches, en complément de Brave Search.
- **Compétences intégrées sensibles au thème** — Les guides de compétences pour les thèmes de blocs, les thèmes classiques, Kadence Blocks et Kadence Theme sont désormais inclus avec le plugin.
- **Fonctionnalité de formulaire de contact du constructeur de sites** — Ajoute un formulaire de contact à n'importe quelle page directement depuis l'interface de chat.

### Améliorations

- **Intégration WooCommerce refactorisée** — Utilise désormais les API natives de WooCommerce pour une meilleure fiabilité et compatibilité.
- **La liste des fournisseurs se rafraîchit automatiquement** — Lorsqu'un plugin est activé ou désactivé.

### Corrections

- **Fonctionnalité navigate-to** — Correction de la boucle de rechargement infinie sur certaines pages d'administration.
- **Fonctionnalité list-posts** — Résout désormais correctement les noms de catégories et de tags en slugs.
- **Commandes WP-CLI** — Restaure les alias d'espace de noms manquants après un précédent refactoring.
- **Automatisation des événements** — Gère correctement les sites où les tables d'automatisation ne sont pas encore créées.
- **Fonctionnalité memory-save** — Utilise désormais le préfixe d'espace de noms correct dans le constructeur d'instructions système.
- **Résultats de l'outil Scalar** — Sont désormais correctement encapsulés avant d'être renvoyés à l'IA.
- **Statistiques d'utilisation** — Gère désormais correctement le format de clé de fonctionnalité hérité lors de la mise à niveau depuis des versions antérieures.
