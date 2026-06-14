---
title: Aktarċa Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Ricerca Internet

Gratis AI Agent v1.5.0 aggiunge la capacità di **Internet Search** (Ricerca Internet) che permette all'assistente AI di recuperare informazioni aggiornate dal web durante una conversazione. Questa funzionalità è alimentata da [Brave Search API](https://brave.com/search/api/) o dalla [Tavily API](https://tavily.com/).

## Come Funziona

Quando la ricerca internet è abilitata, l'assistente può interrogare automaticamente il tuo fornitore di ricerca configurato quando capisce che una domanda richiede informazioni attuali o esterne — per esempio, notizie recenti, prezzi in tempo reale o documentazione che potrebbe essere cambiata da quando il modello è stato addestrato.

I risultati vengono recuperati in tempo reale e inseriti nel contesto dell'assistente prima che generi una risposta. L'assistente indica quando ha utilizzato i risultati della ricerca per rispondere a una domanda.

## Abilitare la Ricerca Internet

La ricerca internet richiede una chiave API dal tuo fornitore di ricerca scelto. Per configurarla:

1. Vai su **Gratis AI Agent → Settings → Advanced**.
2. Trova il menu a tendina **Internet Search Provider** (Fornitore di Ricerca Internet) e seleziona **Brave Search** o **Tavily**.
3. Inserisci la tua chiave API nel campo corrispondente. I link per l'iscrizione sono visualizzati accanto ad ogni campo.
4. Clicca su **Save Settings** (Salva Impostazioni).

Una volta salvata la chiave, la capacità di Ricerca Internet è automaticamente disponibile per l'assistente.

## Brave Search

### Ottenere una Chiave API di Brave Search

1. Visita la [Brave Search API page](https://brave.com/search/api/).
2. Iscriviti a un piano. È disponibile un livello gratuito con un limite di richieste mensili.
3. Copia la tua chiave API dalla dashboard dello sviluppatore di Brave Search.
4. Incollala nel campo **Brave Search API Key** nelle impostazioni di Gratis AI Agent.

### Limiti d'Uso

L-użu jippilja b'Brave Search b'awerq il-numru ta'laq (queries) maġġie. Kulle risposta tal-AI li tivigħti ricerca tgħatti għal query waħda. Monitorja l-użu tiegħek f' [Brave Search developer dashboard](https://brave.com/search/api/) biex tevitaw speċċi żiegħa ta spesa.

## Tavily

Superdav AI Agent v1.10.0 aggi **Tavily** bħala alternattiva provider tal-internet search, li joffri rezultati ricerca aktar għaġġli u capacità għajja ta riċerqa.

### Ottenere API Key ta Tavily

1. Visita l- [Tavily API page](https://tavily.com/).
2. Iscrivi per kont. Il-free tier huwa disponibbli b'limitu ta riċievi mensili.
3. Kopja l-API key tiegħek mill-Tavily dashboard.
4. Inkolla fl-mejdan **Tavily API Key** f' impostazzjonijiet tal-Gratis AI Agent.

### Limiti ta Użu

L-użu jippilja b'Tavily b'awerq il-numru tal-API calls maġġie. Kulle risposta tal-AI li tivigħti ricerca tgħatti għal call waħda. Monitorja l-użu tiegħek f' [Tavily dashboard](https://tavily.com/) biex tevitaw speċċi żiegħa ta spesa.

## Disabilitazzjoni tal-Internet Search

Elimina l-API key mill-mejdan provider tal-internet search attiv u savwa. Il-abilità tal-Internet Search ma tiddirqem aktar latenza (latency) għall-risposte, it-tista għandha tqanwa għaċ-ċekkja ta rezultati ricerca qabel ma tgħmli risposta. Biex tista' tiffaqa b'użu li jittiegħed mill-tempi, isalxa b'għażla jew se l-għarfien integrat tal-assistant huwa suffiċjent.

:::note
Internet search tiddirqem latenza għall-risposte perché l-assistant għandu jippanta għaċ-ċekkja ta rezultati ricerca qabel ma tgħmli risposta. Biex tista' tiffaqa b'użu li jittiegħed mill-tempi, isalxa b'għażla jew se l-għarfien integrat tal-assistant huwa suffiċjent.
:::
