---
title: Journal des modifications de l'Ultimate AI Connector pour WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Version 1.1.0 — Released on 2026-04-09 {#version-110--released-on-2026-04-09}

* Nouveau : Widget de chat flottant avec indicateur d'état dans la barre d'administration — tout utilisateur connecté peut interroger le LLM côté navigateur directement depuis le front-end.
* Nouveau : Runtime SharedWorker — le moteur MLC s'exécute désormais dans un SharedWorker, ce qui permet à plusieurs onglets de partager une seule session GPU au lieu de se disputer les ressources.
* Nouveau : Intercepteur middleware apiFetch — Les requêtes REST de WordPress qui correspondent au modèle du SDK AI Client sont acheminées de manière transparente vers le courtier WebLLM local, éliminant le besoin d'un aller-retour HTTP de boucle.
* Nouveau : Interface utilisateur des paramètres du widget dans le panneau Connector pour basculer le widget de chat et configurer le comportement de l'auto-prompt.
* Correction : Force le backend de cache IndexedDB afin que les téléchargements des poids du modèle survivent aux redirections CDN HuggingFace xet qui cassent le chemin par défaut de l'API Cache.
* Correction : Ignore l'écrasement du KV-cache context_window pour les modèles d'embedding (ils n'ont pas de décodeur et l'écrasement provoquait une erreur d'exécution).
* Correction : Annonce le modèle candidat au démarrage à froid dans /webllm/v1/models avant que l'onglet worker ne soit chargé, afin que les consommateurs du SDK voient un modèle immédiatement.
* Correction : Connecte WebLLM au filtre wpai_preferred_text_models afin que la fonctionnalité AI Experiments soit acheminée vers le moteur navigateur lorsqu'un modèle est configuré.
* Amélioré : Corrections de cache-busting, de normalisation du contenu et de référence matérielle découvertes lors des tests de bout en bout.

## Version 1.0.0 — Première version {#version-100--initial-release}
