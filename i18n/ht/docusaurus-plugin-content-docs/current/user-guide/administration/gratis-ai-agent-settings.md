---
title: Règleman AI Agent Paramètres gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Paramètres de l'Agent IA Gratuit

L'écran **Paramètres → Avancé** dans Gratis AI Agent offre une configuration de niveau administrateur pour les intégrations backend introduites dans la version v1.5.0. Cette page documente les champs du **Feedback Endpoint** et leur format attendu.

## Accéder aux Paramètres

1. Dans l'administration WordPress, allez à **Gratis AI Agent → Paramètres**.
2. Cliquez sur l'onglet **Avancé**.

## Configuration du Feedback Endpoint

Le feedback endpoint reçoit des requêtes POST de l'agent IA chaque fois qu'un utilisateur soumet un commentaire via le bouton pouce vers le bas, la bannière d'auto-invite ou la commande `/report-issue`.

| Champ | Description |
|---|---|
| **Feedback Endpoint URL** | L'URL qui reçoit les soumissions de commentaires en tant que requêtes HTTP POST avec un corps JSON. |
| **Feedback API Key** | Un jeton bearer envoyé dans l'en-tête `Authorization` de chaque requête de feedback. Laissez vide si votre endpoint ne nécessite pas d'authentification. |

### Charge Utile Attendue (JSON Payload)

Votre feedback endpoint doit accepter un corps JSON avec au moins les champs suivants :

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

La couche de triage de l'IA attribue l'une des valeurs suivantes à `triage_category` avant de transmettre la charge utile :

| Valeur | Signification |
|---|---|
| `factual_error` | L'assistant a fourni une information factuelle incorrecte. |
| `unhelpful_answer` | La réponse était techniquement correcte mais pas utile. |
| `inappropriate_content` | La réponse contenait un contenu qui ne devrait pas être montré aux utilisateurs. |
| `other` | Le commentaire ne correspondait à aucune catégorie connue. |

### Authentification

Si ou nivo endpoint la mande yon autentifikasyon, mete valè **Feedback API Key** a token bearer ou an. Agant la voye:

```
Authorization: Bearer <your-api-key>
```

Si valè **Feedback API Key** la vid, pa gen okenn `Authorization` header k ap voye.

### Desaktive Koleksyon Feedback

Lèt tou de **Feedback Endpoint URL** ak **Feedback API Key** yo vid. Bouton thumbs-down la ak UI feedback la rete vizib pou itilizatè yo, men soumission yo pa telechaje nan okenn sèvis eksteryè.

## Brave Search API Key

Sou tab **Advanced** la tou, valè **Brave Search API Key** la k ap aktive kapasite [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | API key ou a soti nan dashboard devlopè Brave Search. Li nesesè pou aktive internet search nan asistan AI la. |

Etikèt l gen yon link klike ki mennen nan paj enskripsyon API Brave Search. Kite li vid pou desaktive internet search la.

Gade [Internet Search](../configuration/internet-search) pou dokiman itilizatè sou fonksyon sa a.

## Feature Flags

Toujou antre nan v1.9.0, tab **Settings → Feature Flags** la bay switch yo pou fonksyonalite opsyonèl. Chak flag se ki aktif oswa desaktive tout rezo a; pa gen okenn override pèsite sit la kounye a.

### Akses nan Feature Flags

1. Nan admin WordPress, ale **Gratis AI Agent → Settings**.
2. Klike sou tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Deskripsyon |
|---|---|---|
| **Restreigni pou Administrateur yo** | Off | Lè ou active sa, sèl itilizat ki gen wòl `administrator` ka ouvri panel chat AI Agent la. Tout lòt wòl ap wè yon mesaj "Kontakte administrateur ou". |
| **Restreigni pou Admin Rezo a** | Off | Lè li aktive sou rezo multisite, sèl Super Admins yo ka itilize agent la. Admin sit endividyèl yo bloke. Li pran plis enpòtans pase "Restreigni pou Administrateur yo" si toude yo active. |
| **Permet Akses Subscriber** | Off | Lè li aktive, itilizat ki gen wòl `subscriber` ka itilize entèfas chat la men yo limite a kapasite li li sèlman (pa ka kreye pòs oswa chanje tout bagay). |
| **Dezactive pou Non-Membre** | Off | Li konekte ak statistik manm Ultimate Multisite. Lè li aktive, chat la rete kache pou sit ki pa gen yon manm aktif. |

### Flag Branding (Branding Flags)

| Flag | Default | Deskripsyon |
|---|---|---|
| **Kache "Powered by Gratis AI Agent" Footer** | Off | Retire liy atribisyon branding ki montre anba widget chat la. Li rekòmande pou deplwaman ki gen yon label ou pwòp (white-label). |
| **Non Agent Koutim** | *(vide)* | Li ranplase etiket "Gratis AI Agent" de default nan tèt chat la ak mennu admin la ak non pwòp pwodwi ou. Kite li vide pou itilize default la. |
| **Kache Choix Agent la** | Off | Lè li aktive, itilizat pa ka chanje ant twa agent inite yo ki vini avan. Agent kounye a rete fiks sou sa k ap configure kòm default nan Settings → General. |
| **Itilize Ikon Sit la Kòm Avatar Chat la** | Off | Li ranplase ikon AI de default nan tèt widget chat la ak ikon sit WordPress la (configure anba Appearance → Customize → Site Identity). |

### Aplike Chanjman yo

Klike sou **Save Settings** apre ou fin chanje nenpòt flag. Chanjman yo ap mache imedyatman — pa gen okenn netwayaj cache oswa reaktive plugin ki nesesè.
