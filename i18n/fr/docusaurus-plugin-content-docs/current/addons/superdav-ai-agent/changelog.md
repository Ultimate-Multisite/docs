---
title: Journal des modifications
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Journal des modifications {#changelog}

## 1.18.0 — Publié le 2026-06-29 {#1180--released-on-2026-06-29}

### Nouveau {#new}

- **Outils Google Calendar** — lisez les calendriers et événements configurés pour des automatisations tenant compte du planning
- **Mappage des contacts et assistants pour les participants** — faites correspondre les participants du calendrier aux utilisateurs et contacts du site
- **Étapes d’approbation humaine et enregistrements de rappel** — mettez les automatisations en pause pour révision et évitez les notifications en double
- **Fournisseur de SMS TextBee** — envoyez des notifications par SMS configurées via TextBee
- **Package compagnon avancé** — ajoutez des outils de système de fichiers pour développeurs de confiance, de base de données, WP-CLI, répartiteur REST, générateur de plugin, instantané git, gestion des utilisateurs et benchmark, distribués séparément de la version WordPress.org

### Amélioré {#improved}

- **Configuration du service Superdav géré** — ajoutez des endpoints de service hébergés et un provisionnement automatique de connexion pour les sites pris en charge
- **Packaging de publication** — construisez des ZIPs distincts pour le cœur et l’Advanced, publiez les deux sur GitHub, et envoyez uniquement le package du cœur à WordPress.org

### Corrigé {#fixed}

- **Fiabilité des requêtes IA** — améliorez la sélection du modèle, les délais d’expiration des requêtes, le modèle de configuration par défaut, la gestion du texte de raisonnement et les conseils de nouvelle tentative pour les appels d’outils invalides
- **Renforcement du calendrier et des rappels** — renforcez les jetons Google Calendar et la déduplication des rappels
- **Reprises de l’onboarding et des approbations** — corrigez les lancements d’onboarding côté frontend et les reprises de capacités confirmées
- **Problèmes de révision du packaging WordPress.org** — prenez en compte les retours de révision du packaging pour la version cœur

## 1.16.0 — Publié le 2026-05-20 {#1160--released-on-2026-05-20}

### Nouveau {#new-1}

- **Capacité Generate Logo SVG** — Theme Builder peut désormais générer et intégrer des SVG de logo personnalisés avec une sanitation compatible avec les namespaces
- **Téléversement de photo dans l’entretien de découverte** — l’entretien de découverte de Theme Builder inclut désormais une étape de téléversement de photo pour un contexte de design plus riche
- **Capacité Validate Palette Contrast** — vérifiez les paires de couleurs pour la conformité WCAG avant de les appliquer à un thème
- **Menus d’hôtellerie-restauration** — Theme Builder peut désormais générer des pages de menus de nourriture et de boissons structurées pour les entreprises de l’hôtellerie-restauration
- **Rendu d’aperçu desktop et mobile** — prévisualisez votre design sur des appareils desktop et mobiles lors de la sélection de l’orientation de design
- **Paramètre d’étiquette de navigation** — la capacité Create Menu prend désormais en charge un `navigation_label` distinct, séparé du titre de la page
- **Disponibilité des outils de niveau 1** — sd-ai-agent/site-scrape est désormais un outil de niveau 1 disponible par défaut dans Theme Builder

### Corrigé {#fixed-1}

- **Cache du client IA** — désormais basé sur des transients pour la persistance entre requêtes, évitant la perte de données lors des tâches d’agent de longue durée
- **Liens d’action de ligne de plugin** — corrigés et renommés pour plus de clarté

## 1.10.0 — Publié le 2026-05-05 {#1100--released-on-2026-05-05}

### Nouveau {#new-2}

- **Recherche Internet Tavily** — ajoutez Tavily comme fournisseur de recherche pour des résultats de recherche Internet plus riches aux côtés de Brave Search
- **Compétences intégrées tenant compte du thème** — les guides de compétences Block Themes, Classic Themes, Kadence Blocks et Kadence Theme sont désormais fournis avec le plugin
- **Capacité de formulaire de contact du constructeur de site** — ajoutez un formulaire de contact à n’importe quelle page directement depuis l’interface de chat

### Amélioré {#improved-1}

- **Intégration WooCommerce refactorisée** — utilise désormais les API natives WooCommerce pour une meilleure fiabilité et compatibilité
- **La liste des fournisseurs s’actualise automatiquement** — lorsqu’un plugin est activé ou désactivé

### Corrigé {#fixed-2}

- **Capacité navigate-to** — correction de la boucle de rechargement infinie sur certaines pages d’administration
- **Capacité list-posts** — résout désormais correctement les noms de catégories et d’étiquettes en slugs
- **Commandes WP-CLI** — restauration des alias de namespace manquants après un refactoring précédent
- **Automatisation des événements** — gère avec élégance les sites où les tables d’automatisation ne sont pas encore créées
- **Capacité memory-save** — utilise désormais le préfixe de namespace correct dans le générateur d’instructions système
- **Résultats d’outils scalaires** — désormais correctement enveloppés avant d’être renvoyés à l’IA
- **Statistiques d’utilisation** — gèrent désormais correctement l’ancien format de clé de capacité lors de la mise à niveau depuis des versions plus anciennes
