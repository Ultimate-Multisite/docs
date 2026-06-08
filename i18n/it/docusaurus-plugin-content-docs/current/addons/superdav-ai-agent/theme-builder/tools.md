---
title: Strumenti e Configurazione
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Strumenti e Configurazione

Theme Builder utilizza una serie di strumenti per analizzare, progettare e costruire il tuo sito WordPress. Nella versione 1.16.0, **sd-ai-agent/site-scrape è ora uno strumento Tier 1**, rendendolo disponibile per impostazione predefinita in Theme Builder.

## Strumenti Disponibili

### Strumenti Tier 1 (Sempre Disponibili)

Gli strumenti Tier 1 sono disponibili per impostazione predefinita in Theme Builder senza alcuna configurazione aggiuntiva.

#### sd-ai-agent/site-scrape

**Scopo:** Analizzare siti web esistenti per estrarre ispirazione di design, struttura dei contenuti e funzionalità.

**Funzionalità:**

- **Analisi del sito web** — scansionare e analizzare siti web concorrenti o di ispirazione
- **Estrazione del design** — identificare colori, font e schemi di layout
- **Struttura dei contenuti** — comprendere l'organizzazione e la gerarchia delle pagine
- **Rilevamento di funzionalità** — identificare plugin e funzionalità
- **Analisi delle prestazioni** — controllare la velocità e l'ottimizzazione della pagina
- **Analisi SEO** — rivedere meta tag e dati strutturati

**Utilizzo:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Cosa Estrae:**

- Palette e utilizzo dei colori
- Tipografia (font e dimensioni)
- Struttura e spaziatura del layout
- Modelli di navigazione
- Organizzazione dei contenuti
- Utilizzo di immagini e media
- Elementi interattivi
- Reattività su dispositivi mobili

**Limitazioni:**

- Non può scansionare siti protetti da password
- Rispetta robots.txt e le politiche del sito
- Potrebbe non catturare contenuti dinamici
- I siti con molto JavaScript potrebbero avere un'analisi limitata
- I siti grandi potrebbero richiedere più tempo per essere analizzati

### Strumenti Tier 2 (Opzionali)

Gli strumenti Tier 2 sono disponibili quando vengono esplicitamente abilitati nelle impostazioni di Theme Builder.

#### Advanced Analytics

Fornisce metriche dettagliate sulle prestazioni:

- Tempi di caricamento della pagina
- Core Web Vitals
- Punteggio SEO
- Punteggio di accessibilità
- Punteggio delle migliori pratiche

#### Content Optimizer

Analizza e suggerisce miglioramenti per:

- Leggibilità
- Ottimizzazione SEO
- Utilizzo delle parole chiave
- Struttura dei contenuti
- Posizionamento delle call-to-action

### Strumenti Tier 3 (Premium)

Gli strumenti Tier 3 richiedono configurazioni aggiuntive o funzionalità premium.

#### AI Content Generator

Genera contenuti per:

- Descrizioni di prodotti
- Pagine di servizi
- Articoli di blog
- Meta descrizioni
- Testo per call-to-action

#### Advanced Design Tools

Fornisce capacità di design avanzate:

- Generazione di CSS personalizzato
- Creazione di animazioni
- Design di elementi interattivi
- Teoria del colore avanzata
- Ottimizzazione della tipografia

## Configurazione degli Strumenti

### Abilitazione degli Strumenti

Per abilitare strumenti aggiuntivi in Theme Builder:

1. Vai su **Gratis AI Agent → Settings**
2. Vai su **Theme Builder → Tools**
3. Attiva/disattiva gli strumenti secondo necessità
4. Salva le impostazioni

### Permessi degli Strumenti

Alcuni strumenti richiedono permessi:

- **Site scraping** — richiede accesso a Internet
- **Analytics** — richiede l'integrazione con Google Analytics
- **Content generation** — richiede chiavi API
- **Advanced features** — potrebbe richiedere un abbonamento premium

### Chiavi API e Credenziali

Configura le chiavi API per gli strumenti che ne hanno bisogno:

1. Vai su **Gratis AI Agent → Settings → API Keys**
2. Inserisci le credenziali per ogni strumento
3. Testa la connessione
4. Salva in modo sicuro

## Utilizzo di sd-ai-agent/site-scrape

### Utilizzo Base

Chiedi a Theme Builder di analizzare un sito web:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Analisi Specifica

Richiedi tipi specifici di analisi:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Analisi Comparativa

Confronta più siti:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Limitazioni e Considerazioni sugli Strumenti

### Rate Limiting (Limitazione del Tasso)

- Lo scraping è limitato per prevenire il sovraccarico del server
- Più richieste allo stesso sito potrebbero essere rallentate
- I siti grandi potrebbero richiedere più tempo per essere analizzati

### Accuratezza dei Contenuti

- I contenuti dinamici potrebbero non essere catturati completamente
- I contenuti renderizzati con JavaScript potrebbero essere incompleti
- I dati in tempo reale potrebbero non essere riflessi
- Alcuni contenuti potrebbero essere dietro paywall

### Considerazioni Legali ed Etiche

- Rispetta robots.txt e le politiche del sito
- Non scansionare contenuti protetti da copyright per la riproduzione
- Usa l'analisi per l'ispirazione, non per la copia
- Verifica di avere i diritti di utilizzo dei contenuti estratti
- Segui i termini di servizio dei siti analizzati

### Impatto sulle Prestazioni

- Scansionare siti grandi può richiedere tempo
- Più scansionamenti simultanei potrebbero essere più lenti
- La connettività di rete influisce sulla velocità
- Grandi set di dati potrebbero richiedere più elaborazione

## Best Practices (Migliori Pratiche)

### Utilizzo dell'Analisi del Sito

1. **Analizza più siti** — raccogli ispirazione da diverse fonti
2. **Concentrati sulla struttura** — impara schemi di layout e organizzazione
3. **Estrai i colori** — usa le palette di colori come punti di partenza
4. **Studia la tipografia** — identifica combinazioni di font che ti piacciono
5. **Rivedi la navigazione** — comprendi l'organizzazione del menu

### Scraping Etico

1. **Rispetta robots.txt** — segui le linee guida del sito
2. **Non copiare contenuti** — usa l'analisi solo per ispirazione
3. **Verifica i diritti** — assicurati di poter utilizzare i contenuti estratti
4. **Attribuisci le fonti** — accredita le fonti di ispirazione
5. **Segui i termini** — rispetta i termini di servizio del sito

### Massimizzare l'Efficacia degli Strumenti

1. **Sii specifico** — richiedi tipi specifici di analisi
2. **Fornisci contesto** — spiega lo scopo del tuo sito
3. **Stabilisci aspettative** — descrivi i tuoi obiettivi di design
4. **Itera** — perfeziona in base ai risultati
5. **Combina gli strumenti** — usa più strumenti per un'analisi completa

## Risoluzione dei Problemi (Troubleshooting)

### Il Sito Non Viene Scansionato

- Controlla se il sito è pubblicamente accessibile
- Verifica che robots.txt consenta lo scraping
- Prova un sito diverso
- Controlla la connessione Internet
- Contatta il supporto se il problema persiste

### Analisi Incompleta

- Il sito potrebbe avere contenuti dinamici
- JavaScript potrebbe non essere completamente renderizzato
- I siti grandi potrebbero scadere (timeout)
- Prova ad analizzare pagine specifiche invece
- Richiedi tipi di analisi specifici

### Prestazioni Lente

- I siti grandi richiedono più tempo per essere analizzati
- Più scansionamenti simultanei sono più lenti
- La connettività di rete influisce sulla velocità
- Prova durante le ore di minor traffico
- Analizza prima le sezioni più piccole

## Documentazione Correlata

- [Discovery Interview](./discovery-interview.md) — raccogliere informazioni di design
- [Design Direction](./design-direction.md) — affinare il tuo design
- [Hospitality Menus](./hospitality-menus.md) — creare pagine menu
