---
title: Paramètres de l'agent IA gratuit
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Paramètres de l'agent AI Gratis

L'écran **Paramètres → Avancé** de Gratis AI Agent fournit une configuration de niveau administrateur pour les intégrations backend introduites dans la v1.5.0. Cette page documente les champs du **Point de terminaison de feedback** et leur format attendu.

## Accéder aux paramètres

1. Dans le panneau d'administration WordPress, allez à **Gratis AI Agent → Paramètres**.
2. Cliquez sur l'onglet **Avancé**.

## Configuration du point de terminaison de feedback

Le point de terminaison de feedback reçoit des requêtes POST de l'agent AI chaque fois qu'un utilisateur soumet un feedback via le bouton « pouce en bas », la bannière de prompt automatique ou la commande `/report-issue`.

| Champ | Description |
|---|---|
| **Feedback Endpoint URL** | L'URL qui reçoit les soumissions de feedback sous forme de requêtes HTTP POST avec un corps JSON. |
| **Feedback API Key** | Un jeton *bearer* envoyé dans l'en-tête `Authorization` de chaque requête de feedback. Laissez vide si votre point de terminaison ne nécessite pas d'authentification. |

### Charge utile JSON attendue

Votre point de terminaison de feedback doit accepter un corps JSON contenant au minimum les champs suivants :

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La réponse était incorrecte concernant les prix.",
  "triage_category": "factual_error"
}
```

Des champs supplémentaires peuvent être présents dans la charge utile en fonction du contexte de la conversation.

### Valeurs de `triage_category`

La couche de triage AI attribue l'une des valeurs suivantes à `triage_category` avant de transmettre la charge utile :

| Valeur | Signification |
|---|---|
| `factual_error` | L'assistant a fourni des informations factuelles incorrectes. |
| `unhelpful_answer` | La réponse était techniquement correcte mais peu utile. |
| `inappropriate_content` | La réponse contenait du contenu qui ne devrait pas être montré aux utilisateurs. |
| `other` | Le feedback ne correspondait à aucune catégorie connue. |

### Authentification

Si votre point de terminaison nécessite une authentification, définissez le champ **Feedback API Key** avec votre jeton *bearer*. L'agent envoie :

```
Authorization: Bearer <votre-clé-api>
```

Si le champ **Feedback API Key** est vide, aucun en-tête `Authorization` n'est envoyé.

### Désactiver la collecte de feedback

Laissez les champs **Feedback Endpoint URL** et **Feedback API Key** vides. Le bouton « pouce en bas » et l'interface utilisateur de feedback restent visibles pour les utilisateurs, mais les soumissions ne sont envoyées à aucun service externe.

## Clé API Brave Search

Également dans l'onglet **Avancé**, le champ **Brave Search API Key** active la capacité de recherche Internet [Recherche Internet](../configuration/internet-search).

| Champ | Description |
|---|---|
| **Brave Search API Key** | Votre clé API provenant du tableau de bord développeur Brave Search. Nécessaire pour activer la recherche Internet dans l'assistant AI. |

L'étiquette du champ comprend un lien cliquable vers la page d'inscription à l'API Brave Search. Laissez vide pour désactiver la recherche Internet.

Consultez [Recherche Internet](../configuration/internet-search) pour la documentation destinée aux utilisateurs finaux sur cette fonctionnalité.

## Indicateurs de fonctionnalité (Feature Flags)

Introduits également dans la v1.9.0, l'onglet **Paramètres → Indicateurs de fonctionnalité** fournit des interrupteurs pour des fonctionnalités optionnelles. Chaque indicateur est soit activé, soit désactivé pour l'ensemble du réseau ; il n'y a pas de remplacement au niveau du site pour le moment.

### Accéder aux indicateurs de fonctionnalité

1. Dans le panneau d'administration WordPress, allez à **Gratis AI Agent → Paramètres**.
2. Cliquez sur l'onglet **Indicateurs de fonctionnalité**.

### Indicateurs de contrôle d'accès

| Indicateur | Défaut | Description |
|---|---|---|
| **Restrict to Administrators** | Désactivé | Lorsqu'il est activé, seuls les utilisateurs ayant le rôle `administrator` peuvent ouvrir le panneau de chat de l'agent AI. Tous les autres rôles voient un message "Contactez votre administrateur" à la place. |
| **Restrict to Network Admins** | Désactivé | Lorsqu'il est activé sur un réseau multisite, seuls les Super Admins peuvent utiliser l'agent. Les administrateurs de site individuels sont bloqués. Il prime sur "Restrict to Administrators" si les deux sont activés. |
| **Allow Subscriber Access** | Désactivé | Lorsqu'il est activé, les utilisateurs ayant le rôle `subscriber` peuvent utiliser l'interface de chat, mais sont limités à des capacités de lecture seule (aucune création de publication ou modification de paramètres). |
| **Disable for Non-Members** | Désactivé | S'intègre au statut d'adhésion Ultimate Multisite. Lorsqu'il est activé, le chat est masqué pour les sites qui n'ont pas d'adhésion active. |

### Indicateurs de marque (Branding Flags)

| Indicateur | Défaut | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Désactivé | Supprime la ligne d'attribution de marque affichée au bas du widget de chat. Recommandé pour les déploiements en marque blanche. |
| **Custom Agent Name** | *(vide)* | Remplace l'étiquette par défaut "Gratis AI Agent" dans l'en-tête du chat et le menu d'administration par le nom de votre produit. Laissez vide pour utiliser le défaut. |
| **Hide Agent Picker** | Désactivé | Lorsqu'il est activé, les utilisateurs ne peuvent pas basculer entre les cinq agents intégrés. L'agent actuel est fixé à celui configuré comme défaut dans Paramètres → Général. |
| **Use Site Icon as Chat Avatar** | Désactivé | Remplace l'icône AI par défaut dans l'en-tête du widget de chat par l'icône du site WordPress (définie sous Apparence → Personnaliser → Identité du site). |

### Appliquer les modifications

Cliquez sur **Save Settings** après avoir basculé un indicateur. Les changements prennent effet immédiatement — aucun vidage de cache ni réactivation de plugin n'est nécessaire.
