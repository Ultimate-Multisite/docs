---
title: Feedback dei clienti e segnalazione problemi
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback dell'Utente e Segnalazione Problemi {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 introduce un sistema integrato per il feedback e la segnalazione problemi che consente agli utenti finali di segnalare risposte poco utili e di riportare problemi direttamente dall'interfaccia chat. Questo sistema include la gestione del consenso, un comando di segnalazione automatizzato e un triage assistito dall'IA sul backend.

## Pulsante "Pollice Giù" {#thumbs-down-button}

Ogni messaggio inviato dall'assistente AI mostra un pulsante **pollice giù** (👎). Quando un utente fa clic su di esso, può contrassegnare una risposta come poco utile o errata.

- Il pulsante appare al passaggio del mouse accanto ad ogni messaggio dell'assistente.
- Cliccarlo apre il **Modale di Consenso per il Feedback**.
- Il feedback è associato al thread di conversazione e al messaggio specifico.

## Modale di Consenso per il Feedback {#feedback-consent-modal}

Quando un utente fa clic sul pulsante pollice giù, appare un modale di consenso prima che vengano inviati dati. Il modale:

- Spiega quali informazioni verranno raccolte (estratto della conversazione, contesto del browser).
- Chiede all'utente di confermare il consenso alla condivisione di questi dati.
- Fornisce un campo di testo libero per descrivere cosa è andato storto.
- Offre un'opzione **Annulla** per chiudere senza inviare.

Nessun feedback viene registrato finché l'utente non conferma esplicitamente.

## Banner Feedback Auto-Prompt {#auto-prompt-feedback-banner}

Alla fine di una conversazione, l'assistente può visualizzare un **banner feedback auto-prompt** — un messaggio non invadente che chiede se la sessione è stata utile.

Questo banner appare automaticamente in base alla lunghezza e all'esito della conversazione. Collega lo stesso flusso di feedback del pulsante pollice giù. Gli utenti possono chiudere il banner senza fornire feedback.

## Comando Slash /report-issue {#report-issue-slash-command}

Gli utenti possono attivare il flusso di feedback digitando direttamente `/report-issue` nell'input chat. Questo comando:

- Apre immediatamente il Modale di Consenso per il Feedback.
- Prepopola il campo descrizione con il contesto della conversazione corrente.
- Consente agli utenti di aggiungere dettagli aggiuntivi prima di inviare.

Il comando `/report-issue` è disponibile in tutte le modalità chat (inline, widget flottante, a schermo intero).

## Triage Assistito dall'IA {#ai-assisted-triage}

Il feedback inviato viene instradato a un livello di triage AI che:

- Categorizza la segnalazione (errore fattuale, risposta poco utile, contenuto inappropriato, ecc.).
- Allega i metadati di conversazione pertinenti.
- Inoltra il riepilogo del triage al **Feedback Endpoint** configurato (vedi [Impostazioni > Avanzate](#settings-advanced)).

Questo riduce il tempo di revisione manuale evidenziando prima i problemi più critici.

## Settings > Advanced {#settings-advanced}

Per abilitare il backend di feedback, configura i seguenti campi sotto **Gratis AI Agent → Settings → Advanced**:

| Campo | Descrizione |
|---|---|
| **Feedback Endpoint URL** | L'URL che riceve le richieste POST con i payload di feedback (JSON). |
| **Feedback API Key** | Token Bearer inviato nell'header `Authorization` per autenticare l'invio dei feedback. |

Lascia entrambi i campi vuoti per disabilitare la raccolta di feedback. I pulsanti di feedback individuali rimangono visibili agli utenti, ma le segnalazioni non verranno inoltrate.

:::tip
L'endpoint di feedback deve accettare un corpo JSON con almeno i campi `message_id`, `conversation_id`, `feedback_text` e `triage_category`. Consulta la documentazione del tuo provider di endpoint per lo schema atteso.
:::
