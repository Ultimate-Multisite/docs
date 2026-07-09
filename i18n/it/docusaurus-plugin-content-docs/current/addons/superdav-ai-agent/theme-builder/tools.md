---
title: Strumenti e configurazione
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Strumenti e configurazione

Theme Builder usa un insieme di strumenti per analizzare, progettare e creare il tuo sito WordPress. Nella versione 1.16.0, **sd-ai-agent/site-scrape è ora uno strumento di Tier 1**, rendendolo disponibile per impostazione predefinita in Theme Builder. Superdav AI Agent v1.18.0 introduce anche un pacchetto companion Advanced distribuito separatamente per flussi di lavoro di sviluppatori fidati; questi strumenti non fanno parte del pacchetto core di WordPress.org e devono essere installati e autorizzati separatamente.

## Strumenti disponibili

### Strumenti di Tier 1 (sempre disponibili)

Gli strumenti di Tier 1 sono disponibili per impostazione predefinita in Theme Builder senza alcuna configurazione aggiuntiva.

#### sd-ai-agent/site-scrape

**Scopo:** analizzare siti web esistenti per estrarre ispirazione di design, struttura dei contenuti e funzionalità.

**Funzionalità:**

- **Analisi del sito web** — esegue lo scraping e analizza siti web di concorrenti o di ispirazione
- **Estrazione del design** — identifica colori, font e schemi di layout
- **Struttura dei contenuti** — comprende organizzazione e gerarchia delle pagine
- **Rilevamento delle funzionalità** — identifica plugin e funzionalità
- **Analisi delle prestazioni** — controlla velocità della pagina e ottimizzazione
- **Analisi SEO** — esamina meta tag e dati strutturati

**Utilizzo:**

```
Analizza il design di example.com e usalo come ispirazione per il mio sito.
```

**Cosa estrae:**

- Palette di colori e uso dei colori
- Tipografia (font e dimensioni)
- Struttura del layout e spaziatura
- Schemi di navigazione
- Organizzazione dei contenuti
- Uso di immagini e media
- Elementi interattivi
- Responsività mobile

**Limitazioni:**

- Non può eseguire lo scraping di siti protetti da password
- Rispetta robots.txt e le policy del sito
- Potrebbe non acquisire contenuti dinamici
- I siti con molto JavaScript potrebbero avere un’analisi limitata
- I siti di grandi dimensioni potrebbero richiedere più tempo per l’analisi

### Strumenti di Tier 2 (opzionali)

Gli strumenti di Tier 2 sono disponibili quando vengono abilitati esplicitamente nelle impostazioni di Theme Builder.

#### Analisi avanzata

Fornisce metriche dettagliate sulle prestazioni:

- Tempi di caricamento della pagina
- Core Web Vitals
- Punteggio SEO
- Punteggio di accessibilità
- Punteggio delle best practice

#### Ottimizzatore dei contenuti

Analizza e suggerisce miglioramenti per:

- Leggibilità
- Ottimizzazione SEO
- Uso delle parole chiave
- Struttura dei contenuti
- Posizionamento delle call-to-action

### Strumenti di Tier 3 (Premium)

Gli strumenti di Tier 3 richiedono configurazione aggiuntiva o funzionalità premium.

#### Generatore di contenuti AI

Genera contenuti per:

- Descrizioni dei prodotti
- Pagine dei servizi
- Articoli del blog
- Meta descrizioni
- Testi per call-to-action

#### Strumenti di design avanzati

Fornisce funzionalità di design avanzate:

- Generazione di CSS personalizzato
- Creazione di animazioni
- Design di elementi interattivi
- Teoria avanzata del colore
- Ottimizzazione della tipografia

### Strumenti companion Advanced (pacchetto separato)

Il pacchetto companion Advanced è distribuito separatamente dalla release core di Superdav AI Agent. È destinato ad ambienti di sviluppatori e proprietari di siti fidati in cui gli amministratori consentono esplicitamente all’agente di usare strumenti ad alto impatto.

Le funzionalità companion Advanced possono includere:

- **Strumenti del filesystem** — ispezionare e modificare file approvati in ambienti fidati
- **Strumenti del database** — interrogare o aggiornare i dati del sito quando esplicitamente autorizzato
- **Strumenti WP-CLI** — eseguire comandi di manutenzione e ispezione di WordPress
- **Strumenti REST dispatcher** — chiamare endpoint REST registrati tramite flussi di lavoro di dispatch controllati
- **Strumenti per la creazione di plugin** — creare scaffold e iterare sul codice dei plugin
- **Strumenti di snapshot Git** — creare snapshot prima di operazioni di sviluppo rischiose
- **Strumenti di gestione utenti** — aiutare a rivedere o modificare record utente dove consentito
- **Strumenti di benchmark** — eseguire benchmark di prestazioni o capacità per la revisione dello sviluppo

Non documentare questi strumenti come strumenti Theme Builder generalmente disponibili per ogni installazione. Sono disponibili solo quando il pacchetto companion Advanced è installato, abilitato e limitato ad amministratori fidati.

## Configurazione degli strumenti

### Abilitazione degli strumenti

Per abilitare strumenti aggiuntivi in Theme Builder:

1. Vai a **Gratis AI Agent → Settings**
2. Vai a **Theme Builder → Tools**
3. Attiva/disattiva gli strumenti secondo necessità
4. Salva le impostazioni

### Autorizzazioni degli strumenti

Alcuni strumenti richiedono autorizzazioni:

- **Scraping del sito** — richiede accesso a internet
- **Analisi** — richiede integrazione con Google Analytics
- **Generazione di contenuti** — richiede chiavi API
- **Funzionalità avanzate** — potrebbero richiedere un abbonamento premium
- **Strumenti companion Advanced** — richiedono il pacchetto Advanced distribuito separatamente e la fiducia esplicita dell’amministratore

### Chiavi API e credenziali

Configura le chiavi API per gli strumenti che le richiedono:

1. Vai a **Gratis AI Agent → Settings → API Keys**
2. Inserisci le credenziali per ogni strumento
3. Testa la connessione
4. Salva in modo sicuro

### Installazione del pacchetto companion Advanced

Il pacchetto companion Advanced viene rilasciato separatamente dallo ZIP core di WordPress.org. Installalo solo dal canale ufficiale di distribuzione del progetto per la release, quindi limita l’accesso ad amministratori fidati. Esamina i gate di approvazione umana e il comportamento degli snapshot git prima di abilitare strumenti di filesystem, database, WP-CLI, REST dispatcher, creazione di plugin, gestione utenti o benchmark su un sito di produzione.

## Uso di sd-ai-agent/site-scrape

### Utilizzo di base

Chiedi a Theme Builder di analizzare un sito web:

```
Analizza il design del sito del mio concorrente su competitor.com
e suggerisci miglioramenti di design per il mio sito.
```

### Analisi specifica

Richiedi tipi specifici di analisi:

```
Estrai la palette di colori da example.com e usala come ispirazione.
```

```
Analizza la struttura di navigazione di example.com e applica
un’organizzazione simile al mio sito.
```

```
Controlla la responsività mobile di example.com e assicurati che il mio sito
sia altrettanto responsive.
```

### Analisi comparativa

Confronta più siti:

```
Confronta i design di site1.com e site2.com e crea un design
che combini i migliori elementi di entrambi.
```

## Limitazioni e considerazioni sugli strumenti

### Limitazione della frequenza

- Lo scraping ha limiti di frequenza per prevenire il sovraccarico del server
- Più richieste allo stesso sito possono essere limitate
- I siti di grandi dimensioni possono richiedere più tempo per essere analizzati

### Accuratezza dei contenuti

- I contenuti dinamici potrebbero non essere acquisiti completamente
- I contenuti renderizzati con JavaScript potrebbero essere incompleti
- I dati in tempo reale potrebbero non essere riflessi
- Alcuni contenuti potrebbero trovarsi dietro paywall

### Considerazioni legali ed etiche

- Rispetta robots.txt e le policy del sito
- Non effettuare scraping di contenuti protetti da copyright per la riproduzione
- Usa l'analisi come ispirazione, non per copiare
- Verifica di avere i diritti per usare i contenuti estratti
- Segui i termini di servizio dei siti analizzati

### Impatto sulle prestazioni

- Lo scraping di siti di grandi dimensioni può richiedere tempo
- Più scraping simultanei possono essere più lenti
- La connettività di rete influisce sulla velocità
- Set di dati di grandi dimensioni possono richiedere più elaborazione

## Best practice

### Uso dell'analisi del sito

1. **Analizza più siti** — raccogli ispirazione da diverse fonti
2. **Concentrati sulla struttura** — apprendi modelli di layout e organizzazione
3. **Estrai i colori** — usa le palette di colori come punti di partenza
4. **Studia la tipografia** — identifica le combinazioni di font che ti piacciono
5. **Esamina la navigazione** — comprendi l'organizzazione dei menu

### Scraping etico

1. **Rispetta robots.txt** — segui le linee guida del sito
2. **Non copiare contenuti** — usa l'analisi solo come ispirazione
3. **Verifica i diritti** — assicurati di poter usare i contenuti estratti
4. **Attribuisci le fonti** — accredita le fonti di ispirazione
5. **Segui i termini** — rispetta i termini di servizio del sito

### Massimizzare l'efficacia degli strumenti

1. **Sii specifico** — richiedi tipi specifici di analisi
2. **Fornisci contesto** — spiega lo scopo del tuo sito
3. **Imposta le aspettative** — descrivi i tuoi obiettivi di design
4. **Itera** — perfeziona in base ai risultati
5. **Combina strumenti** — usa più strumenti per un'analisi completa

## Risoluzione dei problemi

### Il sito non viene sottoposto a scraping

- Controlla se il sito è accessibile pubblicamente
- Verifica che robots.txt consenta lo scraping
- Prova un sito diverso
- Controlla la connessione internet
- Contatta il supporto se il problema persiste

### Analisi incompleta

- Il sito potrebbe avere contenuti dinamici
- JavaScript potrebbe non essere renderizzato completamente
- I siti di grandi dimensioni potrebbero andare in timeout
- Prova invece ad analizzare pagine specifiche
- Richiedi tipi specifici di analisi

### Prestazioni lente

- I siti di grandi dimensioni richiedono più tempo per essere analizzati
- Più scraping simultanei sono più lenti
- La connettività di rete influisce sulla velocità
- Prova durante le ore non di punta
- Analizza prima sezioni più piccole

## Documentazione correlata

- [Intervista di scoperta](./discovery-interview.md) — raccogli informazioni sul design
- [Direzione del design](./design-direction.md) — perfeziona il tuo design
- [Menu per l'ospitalità](./hospitality-menus.md) — crea pagine di menu
