---
title: Ultimate AI Connector for Compatible Endpoints Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Journal des modifications du Connecteur IA Ultime pour Endpoints Compatibles {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## Version 2.0.0 — Publié le 24-04-2026 {#version-200--released-on-2026-04-24}

* Nouveau : Prise en charge multi-fournisseurs — configurez plusieurs endpoints IA et acheminez les requêtes avec un basculement automatique entre les fournisseurs.
* Correction : Intégration multi-fournisseurs du SDK avec les bons identifiants de fournisseur, URL d'enregistrement et portée de filtre HTTP par fournisseur.
* Correction : La nouvelle carte de fournisseur s'étend automatiquement lors de l'ajout ; annulation du cache de script lors de la mise à jour du plugin.
* Correction : Namespace de classe fournisseur dynamique pour `eval()` et comportement d'expansion automatique pour les fournisseurs nouvellement ajoutés.
* Correction : Utilise les composants stables Card/CardBody/CardHeader/CardDivider (plus expérimental) pour la compatibilité WordPress 6.9+.
* Correction : Remplacement du `DragHandle` indéfini par une icône de poignée Unicode pour le réordonnancement par glisser-déposer des fournisseurs.
* Correction : Élimination de la requête HTTP bloquante qui se déclenchait à chaque chargement de page.
* Amélioré : Les flux de travail GitHub Actions mis à niveau vers Node.js 24.

## Version 1.0.0 — Première publication {#version-100--initial-release}
