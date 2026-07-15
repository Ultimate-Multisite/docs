---
title: Ricerca su Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Ricerca Internet

Gratis AI Agent v1.5.0 aggiunge la funzione **Ricerca Internet** che permette all'assistente AI di recuperare informazioni aggiornate dal web durante una conversazione. Questa funzione è alimentata da [Brave Search API](https://brave.com/search/api/) o da [Tavily API](https://tavily.com/).

## Come Funziona {#how-it-works}

Quando la ricerca internet è abilitata, l'assistente può interrogare automaticamente il provider di ricerca configurato quando determina che una domanda richiede informazioni attuali o esterne — ad esempio, notizie recenti, prezzi in tempo reale o documentazione che potrebbe essere cambiata rispetto alla data di interruzione dell'addestramento del modello.

I risultati vengono recuperati in tempo reale e iniettati nel contesto dell'assistente prima che questo generi una risposta. L'assistente indica quando ha utilizzato i risultati della ricerca per rispondere a una domanda.

## Abilitare la Ricerca Internet {#enabling-internet-search}

La ricerca internet richiede una chiave API dal provider di ricerca scelto. Per configurarla:

1. Vai su **Gratis AI Agent → Settings → Advanced**.
2. Individua il menu a tendina **Internet Search Provider** e seleziona **Brave Search** o **Tavily**.
3. Inserisci la tua chiave API nel campo corrispondente. I link di registrazione sono visualizzati accanto a ciascun campo.
4. Clicca su **Save Settings**.

Una volta salvata la chiave, la funzione Ricerca Internet è automaticamente disponibile per l'assistente.

## Brave Search {#brave-search}

### Ottenere una Chiave API di Brave Search {#obtaining-a-brave-search-api-key}

1. Visita la [pagina Brave Search API](https://brave.com/search/api/).
2. Iscriviti a un piano. È disponibile un livello gratuito con un limite di richieste mensili.
3. Copia la tua chiave API dal dashboard per sviluppatori di Brave Search.
4. Incollala nel campo **Brave Search API Key** nelle impostazioni di Gratis AI Agent.

### Limiti di Utilizzo {#usage-limits}

L'utilizzo viene fatturato da Brave Search in base al numero di query effettuate. Ogni risposta AI che attiva una ricerca conta come una query. Monitora il tuo utilizzo nel [Brave Search developer dashboard](https://brave.com/search/api/) per evitare addebiti imprevisti.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 aggiunge **Tavily** come provider alternativo di ricerca internet, offrendo risultati di ricerca più ricchi e capacità di ricerca avanzate.

### Ottenere una Chiave API di Tavily {#obtaining-a-tavily-api-key}

1. Visita la [pagina Tavily API](https://tavily.com/).
2. Iscriviti a un account. È disponibile un livello gratuito con un limite di richieste mensili.
3. Copia la tua chiave API dal dashboard di Tavily.
4. Incollala nel campo **Tavily API Key** nelle impostazioni di Gratis AI Agent.

### Limiti di Utilizzo {#usage-limits-1}

L'utilizzo viene fatturato da Tavily in base al numero di chiamate API effettuate. Ogni risposta AI che attiva una ricerca conta come una chiamata. Monitora il tuo utilizzo nel [Tavily dashboard](https://tavily.com/) per evitare addebiti imprevisti.

## Disabilitare la Ricerca Internet {#disabling-internet-search}

Rimuovi la chiave API dal campo del provider di ricerca attivo e salva. La funzione Ricerca Internet non sarà più disponibile per l'assistente.

:::note
La ricerca internet aggiunge latenza alle risposte perché l'assistente deve attendere i risultati della ricerca prima di generare una risposta. Per casi d'uso sensibili al tempo, valuta se la ricerca in tempo reale è necessaria o se la conoscenza integrata dell'assistente è sufficiente.
:::
