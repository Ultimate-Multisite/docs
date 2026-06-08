---
title: Impostazioni Agente AI Gratuite
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Impostazioni AI Agent Gratis

La schermata **Impostazioni → Avanzate** di Gratis AI Agent fornisce configurazioni di livello amministratore per le integrazioni backend introdotte nella v1.5.0. Questa pagina documenta i campi del **Feedback Endpoint** e il loro formato atteso.

## Accesso alle Impostazioni

1. Nell'area admin di WordPress, vai su **Gratis AI Agent → Impostazioni**.
2. Clicca sulla scheda **Avanzate**.

## Configurazione del Feedback Endpoint

L'endpoint di feedback riceve richieste POST dall'agente AI ogni volta che un utente invia un feedback tramite il pulsante "pollice giù", il banner di prompt automatico o il comando `/report-issue`.

| Campo | Descrizione |
|---|---|
| **Feedback Endpoint URL** | L'URL che riceve i feedback come richieste HTTP POST con un corpo JSON. |
| **Feedback API Key** | Un token bearer inviato nell'header `Authorization` di ogni richiesta di feedback. Lascia vuoto se il tuo endpoint non richiede autenticazione. |

### Payload JSON Atteso

Il tuo endpoint di feedback deve accettare un corpo JSON con almeno i seguenti campi:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La risposta era errata riguardo ai prezzi.",
  "triage_category": "factual_error"
}
```

Possono essere presenti campi aggiuntivi nel payload a seconda del contesto della conversazione.

### Valori di `triage_category`

Lo strato di triage AI assegna uno dei seguenti valori a `triage_category` prima di inoltrare il payload:

| Valore | Significato |
|---|---|
| `factual_error` | L'assistente ha fornito informazioni fattuali errate. |
| `unhelpful_answer` | La risposta era tecnicamente corretta ma non utile. |
| `inappropriate_content` | La risposta conteneva contenuti che non dovrebbero essere mostrati agli utenti. |
| `other` | Il feedback non corrisponde a una categoria nota. |

### Autenticazione

Se il tuo endpoint richiede autenticazione, imposta il campo **Feedback API Key** con il tuo token bearer. L'agente invia:

```
Authorization: Bearer <your-api-key>
```

Se il campo **Feedback API Key** è vuoto, non viene inviato alcun header `Authorization`.

### Disabilitazione della Raccolta Feedback

Lascia entrambi i campi **Feedback Endpoint URL** e **Feedback API Key** vuoti. Il pulsante "pollice giù" e l'interfaccia utente per il feedback rimangono visibili agli utenti, ma i feedback non vengono inoltrati a nessun servizio esterno.

## Brave Search API Key

Anche sulla scheda **Avanzate**, il campo **Brave Search API Key** abilita la capacità di [Ricerca Internet](../configuration/internet-search).

| Campo | Descrizione |
|---|---|
| **Brave Search API Key** | La tua chiave API dal dashboard per sviluppatori di Brave Search. È richiesta per abilitare la ricerca internet nell'assistente AI. |

L'etichetta del campo include un link cliccabile alla pagina di iscrizione alla Brave Search API. Lascia vuoto per disabilitare la ricerca internet.

Consulta [Ricerca Internet](../configuration/internet-search) per la documentazione per l'utente finale su questa funzione.

## Feature Flags

Introdotto anche nella v1.9.0, la scheda **Impostazioni → Feature Flags** fornisce interruttori per funzionalità opzionali. Ogni flag è abilitato o disabilitato a livello di rete; al momento non è possibile sovrascriverlo per singolo sito.

### Accesso ai Feature Flags

1. Nell'area admin di WordPress, vai su **Gratis AI Agent → Impostazioni**.
2. Clicca sulla scheda **Feature Flags**.

### Flag di Controllo Accesso

| Flag | Default | Descrizione |
|---|---|---|
| **Restrict to Administrators** | Off | Quando abilitato, solo gli utenti con il ruolo `administrator` possono aprire il pannello di chat AI Agent. Tutti gli altri ruoli vedranno invece un messaggio "Contatta il tuo amministratore". |
| **Restrict to Network Admins** | Off | Quando abilitato su una rete multisito, solo gli Super Admin possono utilizzare l'agente. Gli amministratori di singoli siti sono bloccati. Ha la precedenza su "Restrict to Administrators" se entrambi sono abilitati. |
| **Allow Subscriber Access** | Off | Quando abilitato, gli utenti con il ruolo `subscriber` possono utilizzare l'interfaccia di chat, ma sono limitati a capacità di sola lettura (senza creazione di post o modifiche alle impostazioni). |
| **Disable for Non-Members** | Off | Si integra con lo stato di iscrizione di Ultimate Multisite. Quando abilitato, la chat è nascosta per i siti che non hanno un'iscrizione attiva. |

### Flag di Branding

| Flag | Default | Descrizione |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Rimuove la riga di attribuzione del brand mostrata in fondo al widget di chat. Consigliato per implementazioni white-label. |
| **Custom Agent Name** | *(blank)* | Sostituisce l'etichetta predefinita "Gratis AI Agent" nell'intestazione della chat e nel menu admin con il nome del tuo prodotto. Lascia vuoto per usare il predefinito. |
| **Hide Agent Picker** | Off | Quando abilitato, gli utenti non possono passare tra i cinque agenti integrati. L'agente corrente è fissato a quello configurato come predefinito in Impostazioni → Generale. |
| **Use Site Icon as Chat Avatar** | Off | Sostituisce l'icona AI predefinita nell'intestazione del widget di chat con l'icona del sito WordPress (impostata sotto Aspetto → Personalizza → Identità del sito). |

### Applicare le Modifiche

Clicca su **Save Settings** dopo aver modificato qualsiasi flag. Le modifiche hanno effetto immediato: non è necessario svuotare la cache o riattivare il plugin.
