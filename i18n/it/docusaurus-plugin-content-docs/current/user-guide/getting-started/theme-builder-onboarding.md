---
title: Flusso di onboarding del Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flusso di Onboarding del Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 introduce un **flusso di onboarding del Theme Builder** guidato che ti aiuta a creare un tema block personalizzato durante la configurazione iniziale. Questo sostituisce la modalità Site Builder legacy con un approccio più flessibile e assistito dall'agente.

## Cos'è il Flusso di Onboarding del Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Il flusso di onboarding del Theme Builder è un assistente di configurazione interattivo che:

- Ti guida attraverso le decisioni di design (colori, tipografia, layout)
- Cattura le preferenze di identità visiva del tuo sito
- Genera un tema block personalizzato adattato alle tue esigenze
- Attiva il tema automaticamente al completamento

Il flusso è alimentato dall'**agente Setup Assistant**, che pone domande di chiarimento e costruisce il tuo tema in modo incrementale.

## Avviare l'Onboarding del Theme Builder {#starting-the-theme-builder-onboarding}

### Configurazione al Primo Avvio {#first-run-setup}

Quando lanci Superdav AI Agent per la prima volta su una nuova installazione di WordPress, vedrai:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Seleziona **"Build a custom theme"** per entrare nel flusso di onboarding del Theme Builder.

### Attivazione Manuale {#manual-activation}

Puoi anche avviare l'onboarding del Theme Builder in qualsiasi momento richiedendo:

```
"Start the Theme Builder onboarding"
```

o

```
"Help me create a custom theme"
```

## I Passaggi di Onboarding {#the-onboarding-steps}

### Passo 1: Selezione della Modalità {#step-1-mode-selection}

L'agente Setup Assistant ti chiede la tua preferenza:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

La **modalità guidata** è consigliata per la maggior parte degli utenti; l'agente fa raccomandazioni di design basate sul tuo settore e sui tuoi obiettivi.

### Passo 2: Specificazione del Sito {#step-2-site-specification}

Ti verranno chieste informazioni sul tuo sito:

- **Scopo del sito**: E-commerce, blog, portfolio, SaaS, ecc.
- **Pubblico target**: Chi sono i tuoi visitatori?
- **Colori del brand**: Colori primari e secondari (o "non ne sono sicuro")
- **Tono**: Professionale, creativo, giocoso, minimalista, ecc.

Queste informazioni vengono salvate nella tua memoria **site_brief**, che gli agenti consultano nelle sessioni future.

### Passo 3: Decisioni sul Sistema di Design {#step-3-design-system-decisions}

L'agente ti guida attraverso la selezione dei token di design:

- **Tipografia**: Famiglia di caratteri (serif, sans-serif, monospace) e scala dimensionale
- **Palette colori**: Colori primari, secondari, di accento e neutri
- **Spaziatura**: Layout compatti, normali o ampi
- **Movimento**: Animazioni e transizioni (se desiderato)

### Passo 4: Generazione del Tema {#step-4-theme-generation}

L'agente Setup Assistant crea la struttura base del tuo tema block personalizzato con:

- `theme.json` contenente tutti i tuoi token di design
- Modelli block per layout comuni (homepage, blog, contatti)
- Stili block personalizzati che corrispondono al tuo sistema di design
- Metadati del tema e dichiarazioni di supporto WordPress

### Passo 5: Attivazione e Verifica {#step-5-activation-and-verification}

Il tema viene attivato automaticamente e vedrai:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Potrai quindi visitare il tuo sito per verificare che il tema venga visualizzato correttamente.

## Specificazione del Sito e Memoria site_brief {#site-specification-and-sitebrief-memory}

Durante l'onboarding, l'agente cattura la specifica del tuo sito in una categoria di memoria **site_brief**. Questo include:

- Scopo e obiettivi del sito
- Pubblico target
- Colori e tono del brand
- Preferenze di design
- Struttura dei contenuti

### Perché è importante site_brief {#why-sitebrief-matters}

Nelle sessioni future, gli agenti consultano il tuo site_brief per:

- Mantenere la coerenza del design durante le modifiche
- Suggerire funzionalità allineate allo scopo del tuo sito
- Fornire raccomandazioni contestuali
- Evitare di ripetere domande di configurazione

### Visualizzare il tuo site_brief {#viewing-your-sitebrief}

Puoi chiedere all'agente:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

L'agente visualizzerà la specifica del sito salvata.

## Personalizzazione Dopo l'Onboarding {#customizing-after-onboarding}

Dopo il completamento dell'onboarding del Theme Builder, puoi:

### Usare la Skill Estetica del Sistema di Design {#use-the-design-system-aesthetics-skill}

Richiedere raffinamenti di design:

```
"Refine the typography to be more modern"
```

o

```
"Adjust the color palette to be warmer"
```

La **Design System Aesthetics skill** ti guida attraverso aggiornamenti di design mirati.

### Modificare theme.json Direttamente {#edit-themejson-directly}

Per utenti avanzati, modifica `/wp-content/themes/[theme-name]/theme.json` per regolare:

- Token colore
- Scale tipografiche
- Valori di spaziatura
- Definizioni di bordi e ombre

### Creare Modelli Block Personalizzati {#create-custom-block-templates}

Usa l'editor block di WordPress per creare modelli personalizzati per:

- Layout della homepage
- Pagine di post del blog
- Pagine prodotto
- Moduli di contatto

## Confronto: Onboarding Vecchio vs. Nuovo {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Form basato su wizard | Conversazione guidata dall'agente |
| Theme generation | Modelli limitati | Struttura base personalizzabile |
| Design tokens | Inserimento manuale | Decisioni guidate |
| Flexibility | Opzioni fisse | Personalizzabile |
| Future updates | Non referenziato | Salvato in site_brief |

## Risoluzione dei Problemi {#troubleshooting}

**Il flusso di onboarding non è stato completato**
- Riavviare il flusso: "Start the Theme Builder onboarding"
- Controllare che la tua installazione di WordPress sia aggiornata
- Verificare che l'agente Setup Assistant sia abilitato

**Il mio site_brief non viene utilizzato**
- Confermare che l'agente abbia accesso alla memoria
- Chiedere all'agente di "recall my site brief"
- Controllare che la memoria sia abilitata nelle impostazioni

**Il tema generato non corrisponde alle mie preferenze**
- Usare la Design System Aesthetics skill per affinarlo
- Chiedere all'agente di "regenerate the theme with [specific changes]"
- Modificare theme.json direttamente per un controllo preciso

## Prossimi Passaggi {#next-steps}

Dopo aver completato l'onboarding del Theme Builder:

1. **Verifica il tuo sito**: Visita il tuo sito per vedere il nuovo tema
2. **Raffina il design**: Usa la Design System Aesthetics skill per gli aggiustamenti
3. **Aggiungi contenuti**: Inizia a costruire i contenuti del tuo sito
4. **Esplora le capacità**: Impara altre capacità dell'agente come scaffold-block-theme e activate-theme
