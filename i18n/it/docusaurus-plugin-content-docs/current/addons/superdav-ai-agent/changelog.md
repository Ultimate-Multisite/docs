---
title: Changelog
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Rilasciato il 2026-05-20

### Novità

- **Funzionalità di generazione SVG del logo** — Theme Builder può ora generare e incorporare SVG di logo personalizzati con sanitizzazione sicura (namespace-safe)
- **Caricamento foto nell'intervista di scoperta** — L'intervista di scoperta di Theme Builder include ora un passaggio per il caricamento di foto, per un contesto di design più ricco
- **Funzionalità di convalida del contrasto della palette** — Controlla le coppie di colori per la conformità WCAG prima di applicarle a un tema
- **Menu per strutture ricettive** — Theme Builder può ora generare pagine di menu alimentari e bevande strutturate per attività nel settore dell'ospitalità
- **Anteprima desktop e mobile** — Anteprima il tuo design su dispositivi desktop e mobile durante la selezione della direzione di design
- **Parametro etichetta di navigazione** — La funzionalità di Creazione Menu supporta ora un `navigation_label` distinto dal titolo della pagina
- **Disponibilità strumento Tier 1** — sd-ai-agent/site-scrape è ora uno strumento Tier 1 disponibile di default in Theme Builder

### Corretti

- **Cache del client AI** — ora supportata da transienti per la persistenza tra le richieste, prevenendo la perdita di dati durante compiti agenti di lunga durata
- **Link delle azioni delle righe dei plugin** — corretti e rinominati per maggiore chiarezza

## 1.10.0 — Rilasciato il 2026-05-05

### Novità

- **Ricerca internet Tavily** — aggiunge Tavily come provider di ricerca per risultati di ricerca internet più ricchi, insieme a Brave Search
- **Skill integrate sensibili al tema** — Block Themes, Classic Themes, Kadence Blocks e le guide per le skill di Kadence Theme ora includono il plugin
- **Funzionalità di modulo di contatto per il costruttore di siti** — aggiungi un modulo di contatto a qualsiasi pagina direttamente dall'interfaccia chat

### Miglioramenti

- **Integrazione WooCommerce rifattorizzata** — ora utilizza le API native di WooCommerce per una migliore affidabilità e compatibilità
- **Aggiornamento automatico dell'elenco dei provider** — quando viene attivato o disattivato qualsiasi plugin

### Corretti

- **Funzionalità navigate-to** — risolto il ciclo di ricaricamento infinito su alcune pagine di amministrazione
- **Funzionalità list-posts** — ora risolve correttamente i nomi di categoria e tag in slug
- **Comandi WP-CLI** — ripristinati gli alias di namespace mancanti dopo un precedente refactoring
- **Automazione eventi** — gestisce con grazia i siti dove le tabelle di automazione non sono ancora state create
- **Funzionalità memory-save** — ora utilizza il prefisso namespace corretto nel costruttore di istruzioni di sistema
- **Risultati dello strumento Scalar** — ora correttamente incapsulati prima di essere restituiti all'AI
- **Statistiche di utilizzo** — ora gestiscono correttamente il formato chiave di capacità legacy durante l'aggiornamento da versioni precedenti
