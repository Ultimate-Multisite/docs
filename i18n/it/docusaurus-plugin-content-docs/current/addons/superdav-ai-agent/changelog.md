---
title: Changelog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Changelog

## 1.18.0 — Rilasciato il 2026-06-29 {#1180--released-on-2026-06-29}

### Nuovo {#new}

- **Strumenti Google Calendar** — leggi calendari ed eventi configurati per automazioni consapevoli della pianificazione
- **Mappatura dei contatti e helper per i partecipanti** — abbina i partecipanti del calendario agli utenti e ai contatti del sito
- **Gate di approvazione umana e record di promemoria** — metti in pausa le automazioni per la revisione ed evita notifiche duplicate
- **Provider SMS TextBee** — invia notifiche tramite messaggi di testo configurate attraverso TextBee
- **Pacchetto companion avanzato** — aggiungi strumenti di filesystem per sviluppatori fidati, database, WP-CLI, dispatcher REST, builder di plugin, snapshot git, gestione utenti e benchmark distribuiti separatamente dalla build di WordPress.org

### Migliorato {#improved}

- **Configurazione del servizio Superdav gestito** — aggiungi endpoint del servizio ospitato e provisioning automatico della connessione per i siti supportati
- **Pacchettizzazione della release** — crea ZIP separati per core e Advanced, pubblica entrambi su GitHub e invia solo il pacchetto core a WordPress.org

### Corretto {#fixed}

- **Affidabilità delle richieste IA** — migliora selezione del modello, timeout delle richieste, modello di configurazione predefinito, gestione del testo di ragionamento e guida ai tentativi successivi per chiamate di strumenti non valide
- **Rafforzamento di calendario e promemoria** — rafforza i token Google Calendar e la deduplicazione dei promemoria
- **Riprese di onboarding e approvazione** — corregge gli avvii dell’onboarding frontend e le riprese delle abilità confermate
- **Problemi di revisione della pacchettizzazione WordPress.org** — risponde al feedback di revisione della pacchettizzazione per la release core

## 1.16.0 — Rilasciato il 2026-05-20 {#1160--released-on-2026-05-20}

### Nuovo {#new-1}

- **Abilità Genera logo SVG** — Theme Builder ora può generare e incorporare SVG di loghi personalizzati con sanificazione sicura per i namespace
- **Caricamento foto nell’intervista di discovery** — l’intervista di discovery di Theme Builder ora include un passaggio di caricamento foto per un contesto di design più ricco
- **Abilità Valida contrasto palette** — verifica le coppie di colori per la conformità WCAG prima di applicarle a un tema
- **Menu per hospitality** — Theme Builder ora può generare pagine di menu strutturate per cibi e bevande per attività hospitality
- **Rendering dell’anteprima desktop e mobile** — visualizza l’anteprima del tuo design su dispositivi desktop e mobile durante la selezione della direzione di design
- **Parametro etichetta di navigazione** — l’abilità Crea menu ora supporta un `navigation_label` distinto, separato dal titolo della pagina
- **Disponibilità degli strumenti Tier 1** — sd-ai-agent/site-scrape ora è uno strumento Tier 1 disponibile per impostazione predefinita in Theme Builder

### Corretto {#fixed-1}

- **Cache del client IA** — ora basata su transient per la persistenza tra richieste, prevenendo la perdita di dati nelle attività agente di lunga durata
- **Link delle azioni nella riga del plugin** — corretti e rinominati per maggiore chiarezza

## 1.10.0 — Rilasciato il 2026-05-05 {#1100--released-on-2026-05-05}

### Nuovo {#new-2}

- **Ricerca internet Tavily** — aggiungi Tavily come provider di ricerca per risultati di ricerca internet più ricchi insieme a Brave Search
- **Competenze integrate consapevoli del tema** — le guide alle competenze per Block Themes, Classic Themes, Kadence Blocks e Kadence Theme ora sono incluse con il plugin
- **Abilità modulo di contatto del builder del sito** — aggiungi un modulo di contatto a qualsiasi pagina direttamente dall’interfaccia chat

### Migliorato {#improved-1}

- **Integrazione WooCommerce rifattorizzata** — ora usa le API native di WooCommerce per una migliore affidabilità e compatibilità
- **L’elenco dei provider si aggiorna automaticamente** — quando qualsiasi plugin viene attivato o disattivato

### Corretto {#fixed-2}

- **Abilità navigate-to** — corretto un ciclo di ricaricamento infinito su alcune pagine di amministrazione
- **Abilità list-posts** — ora risolve correttamente i nomi di categorie e tag in slug
- **Comandi WP-CLI** — ripristinati gli alias di namespace mancanti dopo una precedente rifattorizzazione
- **Automazione degli eventi** — gestisce correttamente i siti in cui le tabelle di automazione non sono ancora state create
- **Abilità memory-save** — ora usa il prefisso di namespace corretto nel builder delle istruzioni di sistema
- **Risultati scalari degli strumenti** — ora vengono incapsulati correttamente prima di essere restituiti all’IA
- **Statistiche di utilizzo** — ora gestiscono correttamente il formato legacy delle chiavi delle abilità durante l’aggiornamento da versioni precedenti
