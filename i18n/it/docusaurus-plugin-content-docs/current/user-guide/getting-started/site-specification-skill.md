---
title: Competenza nelle Specifiche del Sito
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Skill di Specificazione del Sito

La **skill di Specificazione del Sito** è un approccio strutturato per catturare gli obiettivi, il pubblico e l'identità del brand del tuo sito. Queste informazioni vengono memorizzate nella tua memoria **site_brief**, che gli agenti consultano durante le sessioni per fornire assistenza coerente e contestualizzata.

## Cos'è la Specificazione del Sito? {#what-is-site-specification}

La Specificazione del Sito è il processo di documentazione di:

- **Scopo del sito**: Cosa fa il tuo sito e perché esiste
- **Pubblico target**: Chi visita il tuo sito e di cosa ha bisogno
- **Identità del brand**: I tuoi colori, il tono e lo stile visivo
- **Obiettivi aziendali**: Cosa significa successo per il tuo sito
- **Struttura dei contenuti**: Come è organizzato il tuo sito

Questa specifica diventa il tuo **site_brief**, una memoria persistente che gli agenti utilizzano per comprendere il contesto del tuo sito.

## Perché usare la Specificazione del Sito? {#why-use-site-specification}

### Coerenza tra le Sessioni {#consistency-across-sessions}

Senza il site_brief, dovresti riesporre lo scopo del tuo sito ogni volta che inizi una nuova sessione. Con esso, gli agenti comprendono immediatamente:

- Gli obiettivi e il pubblico del tuo sito
- I colori e il tono del tuo brand
- La struttura dei tuoi contenuti
- I tuoi obiettivi aziendali

### Raccomandazioni Migliori {#better-recommendations}

Gli agenti utilizzano il tuo site_brief per:

- Suggerire funzionalità allineate allo scopo del tuo sito
- Raccomandare strutture di contenuti che corrispondono ai tuoi obiettivi
- Proporre design coerenti con il tuo brand
- Evitare di suggerire funzionalità incompatibili

### Onboarding Più Veloce {#faster-onboarding}

Nuovi agenti (o agenti in nuove sessioni) possono mettersi in pari rapidamente leggendo il tuo site_brief anziché dover porre domande di chiarimento.

## Avviare la Specificazione del Sito {#initiating-site-specification}

### Durante l'Onboarding del Theme Builder {#during-theme-builder-onboarding}

La skill di Specificazione del Sito viene avviata automaticamente durante il **flusso di onboarding del Theme Builder**. L'agente Setup Assistant pone domande e costruisce il tuo site_brief.

### Avvio Manuale {#manual-initiation}

Puoi avviare la Specificazione del Sito in qualsiasi momento:

```
"Definiamo la specifica del mio sito"
```

o

```
"Aiutami a creare un site brief"
```

## Il Processo di Specificazione del Sito {#the-site-specification-process}

### Passo 1: Scopo del Sito {#step-1-site-purpose}

L'agente chiede:

```
Qual è lo scopo principale del tuo sito?
- E-commerce store
- Blog o sito di contenuti
- Portfolio o vetrina
- Applicazione SaaS
- Community o forum
- Altro: [descrivi]
```

Puoi selezionare una categoria o descrivere il tuo scopo.

### Passo 2: Pubblico Target {#step-2-target-audience}

```
Chi è il tuo pubblico principale?
- Consumatori / pubblico generale
- Professionisti del settore
- Sviluppatori / utenti tecnici
- Studenti / educatori
- Altro: [descrivi]

Quali sono i loro bisogni principali?
```

### Passo 3: Identità del Brand {#step-3-brand-identity}

```
Quali sono i colori del tuo brand?
- Colore primario: [selettore colore o codice esadecimale]
- Colore secondario: [selettore colore o codice esadecimale]
- Colore d'accento: [opzionale]

Come descriveresti il tono del tuo brand?
- Professionale / aziendale
- Creativo / artistico
- Giocoso / casual
- Minimal / moderno
- Caldo / amichevole
```

### Passo 4: Obiettivi Aziendali {#step-4-business-goals}

```
Come appare il successo per il tuo sito?
- Generare lead
- Vendere prodotti
- Costruire una community
- Condividere conoscenze
- Stabilire autorità
- Altro: [descrivi]

Qual è la tua metrica principale?
- Ricavi
- Coinvolgimento degli utenti
- Portata dei contenuti
- Conversioni
- Altro
```

### Passo 5: Struttura dei Contenuti {#step-5-content-structure}

```
Come sono organizzati i tuoi contenuti?
- Piatto (tutti i contenuti allo stesso livello)
- Gerarchico (categorie e sottocategorie)
- Cronologico (stile blog)
- Basato su prodotti (catalogo)
- Altro: [descrivi]

Quali tipi di contenuti utilizzi?
- Articoli di blog
- Pagine prodotto
- Case study
- Documentazione
- Video
- Altro
```

## La tua memoria site_brief {#your-sitebrief-memory}

Dopo aver completato la Specificazione del Sito, le tue informazioni vengono memorizzate come **site_brief** nella memoria del tuo agente. Si tratta di un record strutturato che contiene:

```json
{
  "site_purpose": "E-commerce store per gioielli fatti a mano",
  "target_audience": "Donne di età compresa tra 25 e 45 anni, interessate alla moda sostenibile",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Caldo, artigianale, sostenibile",
  "business_goals": ["Generare vendite", "Costruire fedeltà al brand"],
  "primary_metric": "Ricavi",
  "content_structure": "Catalogo prodotti con blog",
  "content_types": ["Pagine prodotto", "Articoli di blog", "Storie di clienti"]
}
```

## Visualizzare e Aggiornare il tuo site_brief {#viewing-and-updating-your-sitebrief}

### Visualizzare il tuo site_brief {#view-your-sitebrief}

Chiedi all'agente:

```
"Mostrami il mio site brief"
```

o

```
"Cosa sai del mio sito?"
```

L'agente visualizzerà la tua specifica salvata.

### Aggiornare il tuo site_brief {#update-your-sitebrief}

Se il tuo sito evolve, puoi aggiornarlo:

```
"Aggiorna il mio site brief: ora ci rivolgiamo a clienti B2B"
```

o

```
"Aggiorna la mia specifica del sito"
```

Questo ri-eseguirà la skill di Specificazione del Sito utilizzando le tue informazioni esistenti come punto di partenza.

## Come gli agenti usano il site_brief {#how-agents-use-sitebrief}

### Raccomandazioni di Design {#design-recommendations}

Quando chiedi modifiche al design, gli agenti consultano il tuo site_brief:

```
Tu: "Riprogetta la mia homepage"
Agente: "In base al tuo site brief, ti rivolgi a donne di età compresa tra 25 e 45 anni
con un tono caldo e artigianale. Creerò un design che enfatizzi
i tuoi gioielli fatti a mano e i valori di sostenibilità."
```

### Suggerimenti di Funzionalità {#feature-suggestions}

Gli agenti suggeriscono funzionalità allineate ai tuoi obiettivi:

```
Tu: "Quali funzionalità dovrei aggiungere?"
Agente: "Per un e-commerce store focalizzato sulla fedeltà del cliente,
consiglierei: programma fedeltà, recensioni dei clienti, newsletter via email
e raccomandazioni di prodotti."
```

### Struttura dei Contenuti {#content-structure}

Gli agenti propongono l'organizzazione dei contenuti basandosi sulla tua struttura:

```
Tu: "Come dovrei organizzare il mio blog?"
Agente: "Dato che utilizzi un catalogo prodotti con blog, suggerirei
di organizzare i post per categoria di prodotto e di creare 'guide di stile'
che mostrino più prodotti insieme."
```

## Best Practices {#best-practices}

### Sii Specifico {#be-specific}

Invece di "pubblico generale", descrivi il tuo pubblico reale:

- ✓ "Donne di età compresa tra 25 e 45 anni, interessate alla moda sostenibile"
- ✗ "Tutti"

### Aggiorna Regolarmente {#update-regularly}

Man mano che il tuo sito evolve, aggiorna il tuo site_brief:

- Quando cambi pubblico target
- Quando aggiungi nuove linee di prodotti
- Quando cambia l'identità del tuo brand
- Quando cambiano i tuoi obiettivi aziendali

### Usa Terminologia Coerente {#use-consistent-terminology}

Usa gli stessi termini durante le sessioni:

- ✓ Dire sempre "gioielli sostenibili" (non "gioielli ecologici" e "prodotti verdi")
- ✓ Fare riferimento al tuo pubblico in modo coerente

### Includi il Contesto {#include-context}

Fornisci informazioni di sfondo che aiutino gli agenti a comprendere le tue decisioni:

- "Ci rivolgiamo a professionisti che valorizzano la qualità rispetto al prezzo"
- "Il nostro pubblico è esperto di tecnologia e si aspetta un design moderno"
- "Siamo una startup autofinanziata, quindi abbiamo bisogno di soluzioni economiche"

## Relazione con l'Onboarding del Theme Builder {#relationship-to-theme-builder-onboarding}

La skill di Specificazione del Sito è integrata nel **flusso di onboarding del Theme Builder**. Quando completi l'onboarding, il tuo site_brief viene creato automaticamente con le informazioni che hai fornito.

Puoi anche eseguire la Specificazione del Sito in modo indipendente se lo desideri:

- Per affinare la tua specifica dopo l'installazione iniziale
- Per aggiornare il tuo site brief man mano che il tuo sito evolve
- Per creare una specifica dettagliata prima di iniziare con il Theme Builder

## Risoluzione dei Problemi {#troubleshooting}

**Il mio site_brief non viene utilizzato**
- Conferma che l'agente ha accesso alla memoria
- Chiedi all'agente di "ricordare il mio site brief"
- Controlla che la memoria sia abilitata nelle tue impostazioni

**Voglio ricominciare con un nuovo site_brief**
- Chiedi all'agente: "Cancella il mio site brief e ricomincia da capo"
- Quindi esegui nuovamente la Specificazione del Sito

**L'agente fa raccomandazioni che non corrispondono al mio site_brief**
- Chiedi all'agente di "rivedere il mio site brief"
- Aggiorna il tuo site_brief se è obsoleto
- Fornisci contesto aggiuntivo nelle tue richieste

## Prossimi Passi {#next-steps}

Dopo aver definito la specifica del tuo sito:

1. **Usa Theme Builder**: Crea un tema personalizzato basato sul tuo site_brief
2. **Affina il Design**: Usa la skill Design System Aesthetics per lavori di design dettagliati
3. **Pianifica i Contenuti**: Chiedi agli agenti raccomandazioni sulla struttura dei contenuti
4. **Costruisci le Funzionalità**: Richiedi funzionalità allineate ai tuoi obiettivi aziendali
