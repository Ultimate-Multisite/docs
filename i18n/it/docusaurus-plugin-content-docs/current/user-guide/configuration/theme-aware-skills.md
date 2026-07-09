---
title: Abilità Sensibili al Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skills Consapevoli del Tema {#theme-aware-skills}

Superdav AI Agent v1.10.0 include quattro nuove skill integrate e consapevoli del tema che si adattano automaticamente al tema WordPress attivo. Queste skill forniscono guide e capacità specializzate adattate all'architettura e alle funzionalità del tuo tema.

## Cosa Sono le Skill Consapevoli del Tema? {#what-are-theme-aware-skills}

Le skill consapevoli del tema sono basi di conoscenza e set di strumenti preconfigurati che l'assistente AI seleziona automaticamente in base al tema WordPress attualmente attivo sul tuo sito. Quando cambi tema, le skill disponibili dell'assistente si aggiornano automaticamente, senza necessità di configurazione manuale.

Ogni skill include:

- **Documentazione specifica del tema** — guide su come utilizzare e personalizzare il tema
- **Riferimenti a blocchi e pattern** — blocchi, pattern e opzioni di design disponibili
- **Esempi di personalizzazione** — snippet di codice e pattern di configurazione per attività comuni
- **Migliori pratiche** — raccomandazioni per l'architettura e il flusso di lavoro del tema

## Skill Consapevoli del Tema Disponibili {#available-theme-aware-skills}

### Block Themes (Temi a Blocchi) {#block-themes}

**Si applica a:** Temi che utilizzano l'architettura basata sui blocchi di WordPress (Full Site Editing).

La skill Block Themes fornisce guide su:

- Creazione e modifica di template utilizzando l'editor a blocchi
- Lavorare con pattern di blocchi e blocchi riutilizzabili
- Personalizzazione degli stili globali e delle impostazioni theme.json
- Utilizzo dei blocchi e delle variazioni del tema
- Creazione di pattern di blocchi personalizzati per il tuo sito

**Attivata automaticamente quando:** Il tuo tema attivo è un tema a blocchi (supporta la funzionalità `block-templates`).

### Classic Themes (Temi Classici) {#classic-themes}

**Si applica a:** Temi WordPress tradizionali che utilizzano template PHP e l'editor classico.

La skill Classic Themes fornisce guide su:

- Lavorare con file template PHP e hook
- Personalizzare l'aspetto del tema tramite il Customizer
- Utilizzo delle aree widget e delle sidebar
- Modifica di CSS e sviluppo con i child theme
- Comprensione della gerarchia del tema e dei tag template

**Attivata automaticamente quando:** Il tuo tema attivo è un tema classico (non a blocchi).

### Kadence Blocks {#kadence-blocks}

**Si applica a:** Siti che utilizzano il plugin Kadence Blocks per un design avanzato basato sui blocchi.

La skill Kadence Blocks fornisce guide su:

- Utilizzo della libreria avanzata di blocchi di Kadence (Hero, Testimonials, Pricing, ecc.)
- Configurazione delle impostazioni dei blocchi Kadence e delle opzioni responsive
- Creazione di layout personalizzati con i blocchi grid e container di Kadence
- Integrazione dei blocchi Kadence con il tuo tema
- Sfruttamento del sistema di design e dei preset di Kadence

**Attivata automaticamente quando:** Il plugin Kadence Blocks è attivo sul tuo sito.

### Kadence Theme {#kadence-theme}

**Si applica a:** Siti che utilizzano il tema Kadence per il design e la personalizzazione basati sui blocchi.

La skill Kadence Theme fornisce guide su:

- Personalizzazione del tema Kadence tramite stili globali e theme.json
- Utilizzo dei pattern e dei template integrati di Kadence
- Configurazione delle impostazioni e delle opzioni del tema Kadence
- Creazione di design personalizzati con il sistema di design di Kadence
- Integrazione di Kadence con plugin e strumenti popolari

**Attivata automaticamente quando:** Il tema Kadence è il tuo tema attivo.

## Come Vengono Selezionate le Skill {#how-skills-are-selected}

L'assistente rileva automaticamente il tuo tema attivo e i plugin installati ad ogni messaggio. Se è disponibile una skill consapevole del tema corrispondente, viene caricata automaticamente nel contesto dell'assistente. Non è necessario abilitare o cambiare le skill manualmente.

### Multiple Skills {#multiple-skills}

Se più skill si applicano al tuo sito (ad esempio, se hai sia Kadence Blocks che Kadence Theme attivi), l'assistente ha accesso a tutte le skill applicabili e può fare riferimento alle guide di ciascuna.

### Cambio Tema {#switching-themes}

Quando cambi il tema attivo, le skill disponibili dell'assistente si aggiornano automaticamente nel messaggio successivo. Ad esempio:

1. Stai utilizzando un tema a blocchi con la skill **Block Themes** attiva.
2. Passi a un tema classico.
3. Nel tuo prossimo messaggio, la skill **Classic Themes** viene caricata automaticamente e la skill **Block Themes** non è più disponibile.

## Utilizzo delle Skill Consapevoli del Tema {#using-theme-aware-skills}

Per sfruttare una skill consapevole del tema, descrivi semplicemente cosa vuoi fare nell'interfaccia di chat. L'assistente farà riferimento automaticamente alla guida della skill appropriata.

### Esempi di Prompt {#example-prompts}

**Per Block Themes:**
> "Crea una sezione hero con un'immagine di sfondo e testo centrato utilizzando pattern di blocchi."

**Per Classic Themes:**
> "Aggiungi un'area widget personalizzata alla sidebar utilizzando un child theme."

**Per Kadence Blocks:**
> "Costruisci una sezione di testimonianze utilizzando il blocco Testimonials di Kadence."

**Per Kadence Theme:**
> "Personalizza il layout dell'header e lo stile del menu di navigazione."

L'assistente fornirà guide specifiche del tema ed esempi di codice adattati al tuo tema e ai tuoi plugin attivi.

:::note
Le skill consapevoli del tema sono automaticamente disponibili in Superdav AI Agent v1.10.0 e versioni successive. Non è richiesta alcuna configurazione o impostazione aggiuntiva.
:::
