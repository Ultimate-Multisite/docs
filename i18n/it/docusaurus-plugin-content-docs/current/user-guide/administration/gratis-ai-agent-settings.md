---
title: Impostazioni di Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Impostazioni di Gratis AI Agent

La schermata **Settings → Advanced** in Gratis AI Agent fornisce una configurazione a livello di amministratore per le integrazioni backend. Questa pagina documenta l'inoltro del feedback, le chiavi dei provider di ricerca, la configurazione del servizio Superdav gestito, i controlli di Google Calendar, le impostazioni SMS di TextBee e i flag di funzionalità a livello di rete.

## Accesso alle impostazioni

1. Nell'amministrazione WordPress, vai a **Gratis AI Agent → Settings**.
2. Fai clic sulla scheda **Advanced**.

## Configurazione dell'endpoint di feedback

L'endpoint di feedback riceve richieste POST dall'agente AI ogni volta che un utente invia feedback tramite il pulsante con il pollice verso il basso, il banner di prompt automatico o il comando `/report-issue`.

| Campo | Descrizione |
|---|---|
| **Feedback Endpoint URL** | L'URL che riceve gli invii di feedback come richieste HTTP POST con un corpo JSON. |
| **Feedback API Key** | Un bearer token inviato nell'`Authorization` header di ogni richiesta di feedback. Lascialo vuoto se il tuo endpoint non richiede autenticazione. |

### Payload JSON previsto

Il tuo endpoint di feedback deve accettare un corpo JSON con almeno i seguenti campi:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Nel payload possono essere presenti campi aggiuntivi a seconda del contesto della conversazione.

### Valori di `triage_category`

Il livello di triage AI assegna uno dei seguenti valori a `triage_category` prima di inoltrare il payload:

| Valore | Significato |
|---|---|
| `factual_error` | L'assistente ha fornito informazioni fattuali errate. |
| `unhelpful_answer` | La risposta era tecnicamente corretta ma non utile. |
| `inappropriate_content` | La risposta conteneva contenuti che non dovrebbero essere mostrati agli utenti. |
| `other` | Il feedback non corrispondeva a una categoria nota. |

### Autenticazione

Se il tuo endpoint richiede autenticazione, imposta il campo **Feedback API Key** sul tuo bearer token. L'agente invia:

```
Authorization: Bearer <your-api-key>
```

Se il campo **Feedback API Key** è vuoto, non viene inviato alcun `Authorization` header.

### Disabilitazione della raccolta di feedback

Lascia vuoti entrambi i campi **Feedback Endpoint URL** e **Feedback API Key**. Il pulsante con il pollice verso il basso e l'interfaccia di feedback rimangono visibili agli utenti, ma gli invii non vengono inoltrati ad alcun servizio esterno.

## Brave Search API Key

Sempre nella scheda **Advanced**, il campo **Brave Search API Key** abilita la funzionalità [Ricerca Internet](../configuration/internet-search).

| Campo | Descrizione |
|---|---|
| **Brave Search API Key** | La tua chiave API dal dashboard per sviluppatori di Brave Search. Necessaria per abilitare la ricerca Internet nell'assistente AI. |

L'etichetta del campo include un link cliccabile alla pagina di registrazione di Brave Search API. Lascialo vuoto per disabilitare la ricerca Internet.

Vedi [Ricerca Internet](../configuration/internet-search) per la documentazione destinata agli utenti finali su questa funzionalità.

## Servizio Superdav gestito

Superdav AI Agent v1.18.0 aggiunge endpoint del servizio Superdav gestito e provisioning automatico della connessione per siti supportati. Usa questi controlli quando il tuo sito deve connettersi al provider ospitato invece che a un endpoint di servizio configurato manualmente.

| Campo | Descrizione |
|---|---|
| **Managed Superdav Service** | Abilita la connessione al servizio Superdav ospitato per siti supportati. |
| **Provision Connection** | Avvia il provisioning automatico di endpoint e credenziali. Usalo dopo aver confermato che il sito deve usare il provider gestito. |
| **Service Endpoint / Connection Status** | Mostra l'endpoint corrente o lo stato della connessione dopo il provisioning. |

Dopo il provisioning, salva le impostazioni e verifica lo stato della connessione prima di fare affidamento sui flussi di lavoro del servizio gestito. Se il provisioning fallisce, esamina le indicazioni di nuovo tentativo visualizzate e conferma che il sito abbia l'autorizzazione a usare il provider ospitato.

## Configurazione di Google Calendar

Quando le funzionalità di calendario di Superdav AI Agent v1.18.0 sono abilitate, l'agente può leggere i calendari configurati e i dettagli degli eventi. Gli strumenti del calendario sono orientati alla lettura e sono utili per promemoria sensibili alla pianificazione, follow-up dei partecipanti e corrispondenza dei contatti.

| Campo | Descrizione |
|---|---|
| **Google Calendar Credentials** | Memorizza le credenziali o la connessione token necessarie per leggere i dati del calendario. |
| **Calendar Selection** | Limita quali calendari configurati l'agente può ispezionare. |
| **Calendar Connection Status** | Conferma se le credenziali correnti possono leggere calendari ed eventi. |

Mantieni le credenziali del calendario limitate ai calendari di cui l'agente ha bisogno. Riconnetti o ruota le credenziali se lo stato indica un token scaduto.

## Notifiche SMS TextBee

Superdav AI Agent v1.18.0 aggiunge TextBee come provider SMS per flussi di lavoro di notifica configurati. Le notifiche SMS dovrebbero essere abbinate a passaggi di approvazione umana per messaggi sensibili o rivolti agli utenti.

| Campo | Descrizione |
|---|---|
| **TextBee API Key** | Autentica le richieste al provider SMS TextBee. |
| **TextBee Device / Sender** | Seleziona il mittente o dispositivo TextBee usato per i messaggi in uscita, quando richiesto dal provider. |
| **SMS Notifications Enabled** | Consente ai flussi di lavoro approvati di inviare notifiche tramite messaggi di testo. Lascialo disabilitato per impedire l'invio di SMS. |

Invia un messaggio di prova solo a un numero di proprietà di un amministratore, quindi conferma il comportamento del passaggio di approvazione prima di abilitare promemoria pianificati o rivolti ai partecipanti.

## Feature Flags

Introdotta anch'essa nella v1.9.0, la scheda **Settings → Feature Flags** fornisce interruttori per funzionalità opzionali. Ogni flag è abilitato o disabilitato a livello di rete; al momento non esiste alcuna sovrascrittura per singolo sito.

### Accesso ai Feature Flags

1. Nell'amministrazione WordPress, vai a **Gratis AI Agent → Settings**.
2. Fai clic sulla scheda **Feature Flags**.

### Flag di controllo dell'accesso

| Flag | Predefinito | Descrizione |
|---|---|---|
| **Limita agli amministratori** | Disattivato | Quando è abilitato, solo gli utenti con il ruolo `administrator` possono aprire il pannello chat dell’AI Agent. Tutti gli altri ruoli vedono invece un messaggio "Contatta il tuo amministratore". |
| **Limita agli amministratori di rete** | Disattivato | Quando è abilitato su una rete multisito, solo i Super Admin possono usare l’agent. Gli amministratori dei singoli siti vengono bloccati. Ha la precedenza su "Limita agli amministratori" se entrambi sono abilitati. |
| **Consenti accesso ai sottoscrittori** | Disattivato | Quando è abilitato, gli utenti con il ruolo `subscriber` possono usare l’interfaccia chat ma sono limitati a funzionalità di sola lettura (nessuna creazione di post o modifica delle impostazioni). |
| **Disabilita per i non membri** | Disattivato | Si integra con lo stato di membership di Ultimate Multisite. Quando è abilitato, la chat è nascosta per i siti che non hanno una membership attiva. |

### Flag di branding

| Flag | Predefinito | Descrizione |
|---|---|---|
| **Nascondi il footer "Powered by Gratis AI Agent"** | Disattivato | Rimuove la riga di attribuzione del branding mostrata in fondo al widget chat. Consigliato per distribuzioni white-label. |
| **Nome agent personalizzato** | *(vuoto)* | Sostituisce l’etichetta predefinita "Gratis AI Agent" nell’intestazione della chat e nel menu admin con il nome del tuo prodotto. Lascia vuoto per usare il valore predefinito. |
| **Nascondi il selettore agent** | Disattivato | Quando è abilitato, gli utenti non possono passare tra i cinque agent integrati. L’agent corrente è fissato a quello configurato come predefinito in Impostazioni → Generale. |
| **Usa l’icona del sito come avatar della chat** | Disattivato | Sostituisce l’icona AI predefinita nell’intestazione del widget chat con l’icona del sito WordPress (impostata in Aspetto → Personalizza → Identità del sito). |

### Flag di sicurezza dell’automazione

Superdav AI Agent v1.18.0 introduce passaggi di approvazione umana e record di promemoria per esecuzioni di automazione più sicure. Questi controlli possono apparire nelle feature flag o nelle impostazioni di automazione avanzata, a seconda del pacchetto installato.

| Flag | Predefinito | Descrizione |
|---|---|---|
| **Richiedi approvazione umana** | Consigliato attivo | Mette in pausa le automazioni sensibili finché un utente autorizzato non esamina e conferma l’azione proposta. |
| **Deduplicazione dei promemoria** | Attivato | Registra i promemoria inviati in modo che tentativi ripetuti o esecuzioni programmate non inviino notifiche duplicate. |
| **Abilita strumenti calendario** | Disattivato finché non configurato | Consente all’agent di leggere calendari ed eventi Google configurati. |
| **Abilita notifiche SMS** | Disattivato finché non configurato | Consente ai workflow approvati di inviare notifiche SMS TextBee dopo il salvataggio delle credenziali. |

### Applicazione delle modifiche

Fai clic su **Salva impostazioni** dopo aver attivato o disattivato qualsiasi flag. Le modifiche hanno effetto immediato: non è necessario svuotare la cache né riattivare il plugin.
