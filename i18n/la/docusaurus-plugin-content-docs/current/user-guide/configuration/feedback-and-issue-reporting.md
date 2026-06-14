---
title: Feedback et Rapport Problemum Clientium
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback et Rapport de Problèmes des Clients

Gratis AI Agent v1.5.0 introduce un système intégré de retour d'information et de signalement de problèmes qui permet aux utilisateurs finaux de signaler les réponses inutiles et de rapporter directement les problèmes depuis l'interface de discussion. Ce système comprend la gestion du consentement, une commande de rapport automatisée et un triage assisté par IA en arrière-plan.

## Bouton Pouce Baissé (Thumbs-Down Button)

Chaque message envoyé par l'assistant IA affiche un bouton **pouce baissé** (👎). Lorsqu'un utilisateur clique dessus, il peut marquer une réponse comme inutile ou incorrecte.

- Le bouton apparaît au survol à côté de chaque message de l'assistant.
- Cliquer dessus ouvre la fenêtre modale de **Consentement au Retour d'Information**.
- Le retour d'information est associé au fil de conversation et au message spécifique.

## Fenêtre Modale de Consentement au Retour d'Information (Feedback Consent Modal)

Lorsqu'un utilisateur clique sur le bouton pouce baissé, une fenêtre modale de consentement apparaît avant que toute donnée ne soit envoyée. La modale :

- Explique quelles informations seront collectées (extrait de la conversation, contexte du navigateur).
- Demande à l'utilisateur de confirmer son consentement au partage de ces données.
- Fournit un champ de texte libre pour que l'utilisateur puisse décrire ce qui n'a pas fonctionné.
- Propose une option **Annuler** pour fermer sans soumettre.

Aucun retour d'information n'est enregistré tant que l'utilisateur ne confirme pas explicitement.

## Bannière de Retour Automatique (Auto-Prompt Feedback Banner)

À la fin d'une conversation, l'assistant peut afficher une **bannière de retour automatique** — un message non intrusif demandant si la session a été utile.

Cette bannière apparaît automatiquement en fonction de la longueur et des heuristiques du résultat de la conversation. Elle renvoie au même flux de retour d'information que le bouton pouce baissé. Les utilisateurs peuvent fermer la bannière sans fournir de commentaires.

## Commande Slash /report-issue

Les utilisateurs peuvent déclencher directement le flux de retour en tapant `/report-issue` dans la zone de saisie de discussion. Cette commande :

Apertura immediatamente il Modale di Consenso per i Feedback.
Pre-compila il campo descrizione con il contesto della conversazione corrente.
Permette agli utenti di aggiungere dettagli aggiuntivi prima di inviare.

Il comando `/report-issue` è disponibile in tutti i modi di chat (inline, widget fluttuante, schermo intero).

## Triage Assistito dall'IA

I feedback inviati vengono indirizzati a un livello di triage AI che:

- Categorizza il report (errore fattuale, risposta inutile, contenuto inappropriato, ecc.).
- Allega i metadati pertinenti alla conversazione.
- Invia il riepilogo del triage al **Feedback Endpoint** configurato (vedi [Impostazioni > Avanzate](#settings-advanced)).

Questo riduce il tempo di revisione manuale mettendo in evidenza prima i problemi più critici.

## Impostazioni > Avanzate {#settings-advanced}

Per abilitare il backend dei feedback, configura i seguenti campi sotto **Gratis AI Agent → Impostazioni → Avanzate**:

| Campo | Descrizione |
|---|---|
| **Feedback Endpoint URL** | L'URL che riceve le richieste POST con i payload di feedback (JSON). |
| **Feedback API Key** | Il token Bearer inviato nell'header `Authorization` per autenticare l'invio dei feedback. |

Lascia entrambi i campi vuoti per disabilitare la raccolta dei feedback. I pulsanti di feedback individuali rimangono visibili agli utenti, ma le invii non verranno inoltrati.

:::tip
L'endpoint dei feedback deve accettare un corpo JSON con almeno i campi `message_id`, `conversation_id`, `feedback_text` e `triage_category`. Consulta la documentazione del tuo provider di endpoint per lo schema atteso.
:::
