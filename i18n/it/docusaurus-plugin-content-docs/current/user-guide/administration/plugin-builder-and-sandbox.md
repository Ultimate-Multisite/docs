---
title: Costruttore e Sandbox di Plugin
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 introduce il **Plugin Builder & Sandbox System**, che permette all'assistente AI di generare, attivare e gestire plugin WordPress sulla tua rete, tutto all'interno di un ambiente sandbox sicuro e isolato.

## Panoramica {#overview}

Il Plugin Builder consente all'assistente AI di scrivere plugin WordPress personalizzati in risposta a richieste in linguaggio naturale. I plugin generati vengono validati, memorizzati e attivati all'interno di uno strato sandbox prima di poter influenzare la funzionalità del sito live.

I casi d'uso includono:

- Generare plugin utility leggeri senza coinvolgimento di sviluppatori.
- Creare prototipi di funzionalità che richiedono hook o custom post types di WordPress.
- Creare script di automazione a breve termine per operazioni in batch.

## Generare un Plugin tramite AI {#generating-a-plugin-via-ai}

Per generare un plugin, apri l'interfaccia chat di Gratis AI Agent e descrivi ciò di cui hai bisogno. Ad esempio:

> "Crea un plugin che aggiunga un avviso amministrativo personalizzato sul dashboard."

L'AI eseguirà:

1. La produzione del codice PHP del plugin utilizzando la generazione di codice strutturata.
2. La validazione dell'output per errori di sintassi e pattern non sicuri.
3. Il salvataggio del plugin generato nello store sandbox.
4. Il ritorno di una conferma con lo slug del plugin e un pulsante **Activate in Sandbox**.

Puoi affinare il risultato continuando la conversazione nello stesso thread prima di attivare il plugin.

## Attivazione Sandbox {#sandbox-activation}

Attivare un plugin generato in sandbox è diverso dall'attivarli sulla rete live. Lo sandbox:

- Esegue il plugin in un ambiente WordPress isolato (wp-env).
- Cattura eventuali errori PHP, warning o conflitti di hook.
- Riporta il risultato dell'attivazione nell'interfaccia chat.

Per attivare un plugin in sandbox, clicca sul pulsante **Activate in Sandbox** nella risposta dell'AI, oppure usa il comando slash:

```
/activate-plugin <plugin-slug>
```

Un messaggio di stato conferma se l'attivazione è riuscita o fallita. In caso di fallimento, il log degli errori viene visualizzato nel thread di chat.

## Gestione dei Plugin Generati {#managing-generated-plugins}

I plugin generati sono elencati in **Gratis AI Agent → Plugin Builder → Manage Plugins**. Da questa schermata puoi:

| Azione | Descrizione |
|---|---|
| **View source** | Rivedere l'intero codice PHP del plugin. |
| **Re-activate in sandbox** | Riprovare il controllo di attivazione in sandbox. |
| **Install on network** | Implementare il plugin sulla rete live (richiede conferma manuale). |
| **Update** | Fornire una nuova versione tramite l'AI, sostituendo il codice esistente. |
| **Delete** | Rimuovere il plugin dallo store sandbox. Disattiva prima da tutti i siti. |

:::warning
**Install on network** implementa il plugin generato sul tuo multisite WordPress live. Rivedi il codice del plugin prima di procedere. Gratis AI Agent ti chiederà conferma prima di completare un'installazione live.
:::

## Installare un Plugin Generato sulla Rete {#installing-a-generated-plugin-on-the-network}

Quando sei soddisfatto di un plugin in sandbox, puoi installarlo sulla rete live:

1. Vai su **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Clicca su **Install on Network** accanto al plugin che desideri implementare.
3. Conferma il dialogo. Il plugin viene installato in `wp-content/plugins/` e attivato a livello di rete.

In alternativa, usa il comando slash nell'interfaccia chat:

```
/install-plugin <plugin-slug>
```

## Aggiornamenti dei Plugin {#plugin-updates}

Per aggiornare un plugin generato, descrivi la modifica all'assistente AI in una nuova conversazione:

> "Aggiorna il plugin dashboard-notice in modo che l'avviso sia visibile solo agli amministratori."

L'AI genera una nuova versione, che appare in sandbox accanto alla versione corrente. Tu rivedi il diff e confermi prima che l'aggiornamento venga applicato.

## Integrazione HookScanner {#hookscanner-integration}

Il Plugin Builder utilizza un **HookScanner** integrato per analizzare gli hook e i filtri registrati da ciascun plugin generato. L'output di HookScanner viene mostrato nella risposta chat e include:

- Gli action hooks registrati (chiamate `add_action`).
- Gli filter hooks registrati (chiamate `add_filter`).
- Qualsiasi hook trovato nelle dipendenze del plugin (salta le directory `vendor/` e `node_modules/`).

Questo ti aiuta a comprendere il comportamento di un plugin prima di attivarlo.

## Considerazioni sulla Sicurezza {#security-considerations}

- I plugin generati sono memorizzati separatamente dai plugin installati manualmente e non sono accessibili tramite la schermata standard di gestione plugin di WordPress finché non li installi esplicitamente sulla rete.
- Lo sandbox utilizza la validazione dei percorsi per prevenire il directory traversal quando scrive i file dei plugin.
- I plugin con chiamate di funzioni pericolose (ad esempio, `eval`, `exec`, `system`) vengono segnalati durante la validazione e non verranno attivati.
