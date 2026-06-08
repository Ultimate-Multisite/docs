---
title: Avis des clients et signalement de problèmes
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Commentaires et signalement de problèmes des utilisateurs

Gratis AI Agent v1.5.0 introduit un système intégré de commentaires et de signalement de problèmes qui permet aux utilisateurs finaux de signaler des réponses inutiles et de rapporter des problèmes directement depuis l'interface de chat. Ce système comprend la gestion du consentement, une commande de signalement automatisée et un tri assisté par IA en arrière-plan.

## Bouton Pouce Bas

Chaque message envoyé par l'assistant IA affiche un bouton **pouce bas** (👎). Lorsqu'un utilisateur clique dessus, il peut marquer une réponse comme inutile ou incorrecte.

- Le bouton apparaît au survol à côté de chaque message de l'assistant.
- Cliquer dessus ouvre la **Modale de consentement aux commentaires**.
- Le commentaire est associé au fil de conversation et au message spécifique.

## Modale de consentement aux commentaires

Lorsqu'un utilisateur clique sur le bouton pouce bas, une modale de consentement apparaît avant que toute donnée ne soit envoyée. La modale :

- Explique quelles informations seront collectées (extrait de conversation, contexte du navigateur).
- Demande à l'utilisateur de confirmer son consentement au partage de ces données.
- Fournit un champ de texte libre pour que l'utilisateur décrive ce qui n'a pas fonctionné.
- Offre une option **Annuler** pour fermer sans soumettre.

Aucun commentaire n'est enregistré tant que l'utilisateur ne confirme pas explicitement.

## Bannière de commentaires automatique

À la fin d'une conversation, l'assistant peut afficher une **bannière de commentaires automatique** — un message non intrusif demandant si la session a été utile.

Cette bannière apparaît automatiquement en fonction de la longueur de la conversation et des heuristiques de résultat. Elle renvoie au même flux de commentaires que le bouton pouce bas. Les utilisateurs peuvent fermer la bannière sans fournir de commentaires.

## Commande Slash `/report-issue`

Les utilisateurs peuvent déclencher le flux de commentaires directement en tapant `/report-issue` dans le champ de saisie de chat. Cette commande :

- Ouvre immédiatement la Modale de consentement aux commentaires.
- Pré-remplit le champ de description avec le contexte de la conversation actuelle.
- Permet aux utilisateurs d'ajouter des détails supplémentaires avant de soumettre.

La commande `/report-issue` est disponible dans tous les modes de chat (en ligne, widget flottant, plein écran).

## Tri assisté par IA

Les commentaires soumis sont acheminés vers une couche de tri IA qui :

- Catégorise le rapport (erreur factuelle, réponse inutile, contenu inapproprié, etc.).
- Joigne les métadonnées de conversation pertinentes.
- Transmet le résumé du tri au **Point de terminaison de commentaires** (Feedback Endpoint) configuré (voir [Réglages > Avancé](#settings-advanced)).

Cela réduit le temps d'examen manuel en faisant remonter les problèmes les plus critiques en premier.

## Réglages > Avancé {#settings-advanced}

Pour activer l'arrière-plan de commentaires, configurez les champs suivants sous **Gratis AI Agent → Réglages → Avancé** :

| Champ | Description |
|---|---|
| **Feedback Endpoint URL** | L'URL qui reçoit les requêtes POST avec les charges utiles de commentaires (JSON). |
| **Feedback API Key** | Jeton Bearer envoyé dans l'en-tête `Authorization` pour authentifier les soumissions de commentaires. |

Laissez les deux champs vides pour désactiver la collecte de commentaires. Les boutons de commentaires individuels restent visibles pour les utilisateurs, mais les soumissions ne seront pas transmises.

:::tip
Le point de terminaison de commentaires doit accepter un corps JSON contenant au moins les champs `message_id`, `conversation_id`, `feedback_text` et `triage_category`. Consultez la documentation de votre fournisseur de point de terminaison pour le schéma attendu.
:::
