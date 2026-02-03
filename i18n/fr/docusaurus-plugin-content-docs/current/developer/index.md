---
title: Documentation du développeur
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Documentation pour les Développeurs

Ce guide fournit aux développeurs tout ce dont ils ont besoin pour intégrer, étendre ou développer des addons pour Ultimate Multisite. Ultimate Multisite transforme un réseau WordPress Multisite en une plateforme Website-as-a-Service (WaaS).

## Ce qui est disponible

- **[API REST](./rest-api/overview)** — Opérations CRUD complètes pour toutes les entités (clients, sites, adhésions, paiements, produits, domaines) avec authentification par clé API
- **[Référence des Hooks](./hooks/guide)** — Plus de 200 hooks d'action et plus de 280 hooks de filtre pour les événements du cycle de vie et la personnalisation
- **[Guide d'Intégration](./integration-guide/)** — Exemples d'intégration CRM, d'analytique, de passerelles personnalisées et de webhooks
- **[Exemples de Code](./code-examples/)** — Modèles avancés pour la tarification dynamique, la provision de sites, les limitations personnalisées et le traitement multi-passerelles
- **[Développement d'Addon](./addon-development/getting-started)** — Cadre structuré pour la création de plugins addons

## Exigences

- Installation WordPress Multisite
- PHP 7.4 ou supérieur
- Plugin Ultimate Multisite activé

## Démarrage Rapide

### Utiliser l'API REST

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Se connecter aux Événements

```php
add_action('wu_customer_post_create', function($customer) {
    // Réagir aux nouvelles inscriptions de clients
});
```

### Créer un Addon

```bash
# Générer le squelette d'un addon à partir du modèle
bash create-addon.sh
```

Voir chaque section pour une documentation détaillée et des exemples.
