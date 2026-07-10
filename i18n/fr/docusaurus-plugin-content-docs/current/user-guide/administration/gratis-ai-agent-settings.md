---
title: Paramètres de Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Paramètres de Gratis AI Agent {#gratis-ai-agent-settings}

L’écran **Settings → Advanced** dans Gratis AI Agent fournit une configuration de niveau administrateur pour les intégrations backend. Cette page documente le transfert des retours, les clés de fournisseur de recherche, la configuration du service Superdav géré, les contrôles Google Calendar, les paramètres SMS TextBee et les indicateurs de fonctionnalités à l’échelle du réseau.

## Accéder aux paramètres {#accessing-settings}

1. Dans l’admin WordPress, allez à **Gratis AI Agent → Settings**.
2. Cliquez sur l’onglet **Advanced**.

## Configuration de l’endpoint de retour {#feedback-endpoint-configuration}

L’endpoint de retour reçoit des requêtes POST de l’agent IA chaque fois qu’un utilisateur soumet un retour via le bouton pouce vers le bas, la bannière d’invite automatique ou la commande `/report-issue`.

| Champ | Description |
|---|---|
| **URL de l’endpoint de retour** | L’URL qui reçoit les soumissions de retour sous forme de requêtes HTTP POST avec un corps JSON. |
| **Feedback API Key** | Un bearer token envoyé dans le `Authorization` header de chaque requête de retour. Laissez vide si votre endpoint ne nécessite pas d’authentification. |

### Payload JSON attendu {#expected-json-payload}

Votre endpoint de retour doit accepter un corps JSON avec au moins les champs suivants :

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Des champs supplémentaires peuvent être présents dans le payload selon le contexte de la conversation.

### Valeurs de `triage_category` {#triagecategory-values}

La couche de triage IA attribue l’une des valeurs suivantes à `triage_category` avant de transférer le payload :

| Valeur | Signification |
|---|---|
| `factual_error` | L’assistant a fourni des informations factuelles incorrectes. |
| `unhelpful_answer` | La réponse était techniquement correcte, mais pas utile. |
| `inappropriate_content` | La réponse contenait du contenu qui ne devrait pas être montré aux utilisateurs. |
| `other` | Le retour ne correspondait à aucune catégorie connue. |

### Authentification {#authentication}

Si votre endpoint nécessite une authentification, définissez le champ **Feedback API Key** sur votre bearer token. L’agent envoie :

```
Authorization: Bearer <your-api-key>
```

Si le champ **Feedback API Key** est vide, aucun `Authorization` header n’est envoyé.

### Désactiver la collecte des retours {#disabling-feedback-collection}

Laissez les champs **URL de l’endpoint de retour** et **Feedback API Key** vides. Le bouton pouce vers le bas et l’interface de retour restent visibles pour les utilisateurs, mais les soumissions ne sont transférées à aucun service externe.

## Brave Search API Key {#brave-search-api-key}

Également dans l’onglet **Advanced**, le champ **Brave Search API Key** active la fonctionnalité [Recherche Internet](../configuration/internet-search).

| Champ | Description |
|---|---|
| **Brave Search API Key** | Votre clé API depuis le Dashboard développeur Brave Search. Requise pour activer la recherche Internet dans l’assistant IA. |

Le libellé du champ inclut un lien cliquable vers la page d’inscription à l’API Brave Search. Laissez vide pour désactiver la recherche Internet.

Consultez [Recherche Internet](../configuration/internet-search) pour la documentation utilisateur final sur cette fonctionnalité.

## Service Superdav géré {#managed-superdav-service}

Superdav AI Agent v1.18.0 ajoute des endpoints de service Superdav géré et un provisionnement automatique de connexion pour les sites pris en charge. Utilisez ces contrôles lorsque votre site doit se connecter au fournisseur hébergé au lieu d’un endpoint de service configuré manuellement.

| Champ | Description |
|---|---|
| **Service Superdav géré** | Active la connexion au service Superdav hébergé pour les sites pris en charge. |
| **Provisionner la connexion** | Lance le provisionnement automatique de l’endpoint et des identifiants. Utilisez ceci après avoir confirmé que le site doit utiliser le fournisseur géré. |
| **Endpoint de service / État de la connexion** | Affiche l’endpoint actuel ou l’état de la connexion après le provisionnement. |

Après le provisionnement, enregistrez les paramètres et vérifiez l’état de la connexion avant de vous appuyer sur des workflows de service géré. Si le provisionnement échoue, consultez les conseils de nouvelle tentative affichés et confirmez que le site est autorisé à utiliser le fournisseur hébergé.

## Configuration Google Calendar {#google-calendar-configuration}

Lorsque les fonctionnalités de calendrier de Superdav AI Agent v1.18.0 sont activées, l’agent peut lire les calendriers configurés et les détails des événements. Les outils de calendrier sont orientés lecture et sont utiles pour les rappels tenant compte des plannings, le suivi des participants et la mise en correspondance des contacts.

| Champ | Description |
|---|---|
| **Identifiants Google Calendar** | Stocke les identifiants ou la connexion par token nécessaires pour lire les données de calendrier. |
| **Sélection de calendrier** | Limite les calendriers configurés que l’agent peut inspecter. |
| **État de la connexion au calendrier** | Confirme si les identifiants actuels peuvent lire les calendriers et les événements. |

Limitez les identifiants de calendrier aux calendriers dont l’agent a besoin. Reconnectez ou renouvelez les identifiants si l’état indique un token expiré.

## Notifications SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 ajoute TextBee comme fournisseur SMS pour les workflows de notification configurés. Les notifications SMS doivent être associées à des étapes d’approbation humaine pour les messages sensibles ou destinés aux utilisateurs.

| Champ | Description |
|---|---|
| **Clé API TextBee** | Authentifie les requêtes auprès du fournisseur SMS TextBee. |
| **Appareil / expéditeur TextBee** | Sélectionne l’expéditeur ou l’appareil TextBee utilisé pour les messages sortants, lorsque le fournisseur l’exige. |
| **Notifications SMS activées** | Autorise les workflows approuvés à envoyer des notifications par message texte. Laissez désactivé pour empêcher les envois SMS. |

Envoyez un message de test uniquement à un numéro appartenant à un administrateur, puis confirmez le comportement de l’étape d’approbation avant d’activer les rappels programmés ou destinés aux participants.

## Indicateurs de fonctionnalités {#feature-flags}

Également introduit dans la v1.9.0, l’onglet **Settings → Feature Flags** fournit des interrupteurs pour les fonctionnalités facultatives. Chaque indicateur est activé ou désactivé à l’échelle du réseau ; il n’existe actuellement aucun remplacement par site.

### Accéder aux indicateurs de fonctionnalités {#accessing-feature-flags}

1. Dans l’admin WordPress, allez à **Gratis AI Agent → Settings**.
2. Cliquez sur l’onglet **Feature Flags**.

### Indicateurs de contrôle d’accès {#access-control-flags}

| Indicateur | Par défaut | Description |
|---|---|---|
| **Restreindre aux Administrators** | Désactivé | Lorsqu’il est activé, seuls les utilisateurs ayant le rôle `administrator` peuvent ouvrir le panneau de chat de AI Agent. Tous les autres rôles voient à la place un message « Contactez votre administrator ». |
| **Restreindre aux Network Admins** | Désactivé | Lorsqu’il est activé sur un réseau multisite, seuls les Super Admins peuvent utiliser l’agent. Les administrateurs de sites individuels sont bloqués. Prend le pas sur « Restreindre aux Administrators » si les deux sont activés. |
| **Autoriser l’accès Subscriber** | Désactivé | Lorsqu’il est activé, les utilisateurs ayant le rôle `subscriber` peuvent utiliser l’interface de chat, mais sont limités aux capacités en lecture seule (pas de création de publications ni de modifications des réglages). |
| **Désactiver pour les non-membres** | Désactivé | S’intègre avec le statut d’adhésion Ultimate Multisite. Lorsqu’il est activé, le chat est masqué pour les sites qui n’ont pas d’adhésion active. |

### Indicateurs de marque {#branding-flags}

| Indicateur | Par défaut | Description |
|---|---|---|
| **Masquer le pied de page "Powered by Gratis AI Agent"** | Désactivé | Supprime la ligne d’attribution de marque affichée en bas du widget de chat. Recommandé pour les déploiements en marque blanche. |
| **Nom personnalisé de l’agent** | *(vide)* | Remplace le libellé par défaut "Gratis AI Agent" dans l’en-tête du chat et le menu d’administration par votre propre nom de produit. Laissez vide pour utiliser la valeur par défaut. |
| **Masquer le sélecteur d’agent** | Désactivé | Lorsqu’il est activé, les utilisateurs ne peuvent pas basculer entre les cinq agents intégrés. L’agent actuel est fixé à ce qui est configuré comme valeur par défaut dans Réglages → Général. |
| **Utiliser l’icône du site comme avatar de chat** | Désactivé | Remplace l’icône IA par défaut dans l’en-tête du widget de chat par l’icône du site WordPress (définie sous Apparence → Personnaliser → Identité du site). |

### Indicateurs de sécurité de l’automatisation {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduit des points de validation humaine et des enregistrements de rappels pour des exécutions d’automatisation plus sûres. Ces contrôles peuvent apparaître dans les indicateurs de fonctionnalité ou dans les réglages avancés d’automatisation, selon le package installé.

| Indicateur | Par défaut | Description |
|---|---|---|
| **Exiger une approbation humaine** | Recommandé activé | Met en pause les automatisations sensibles jusqu’à ce qu’un utilisateur autorisé examine et confirme l’action proposée. |
| **Déduplication des rappels** | Activé | Enregistre les rappels envoyés afin que les nouvelles tentatives ou les exécutions planifiées n’envoient pas de notifications en double. |
| **Activer les outils de calendrier** | Désactivé jusqu’à configuration | Permet à l’agent de lire les calendriers et événements Google configurés. |
| **Activer les notifications SMS** | Désactivé jusqu’à configuration | Permet aux workflows approuvés d’envoyer des notifications SMS TextBee après l’enregistrement des identifiants. |

### Application des modifications {#applying-changes}

Cliquez sur **Enregistrer les réglages** après avoir activé ou désactivé un indicateur. Les modifications prennent effet immédiatement — aucune purge du cache ni réactivation du plugin n’est requise.
