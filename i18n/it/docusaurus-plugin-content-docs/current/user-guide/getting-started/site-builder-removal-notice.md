---
title: Avviso di Rimozione Modalità Costruttore di Siti
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Rimozione di Site Builder Mode

**Site Builder mode è stato rimosso in Superdav AI Agent v1.12.0.** Se stavi utilizzando Site Builder mode, dovresti migrare all'**Setup Assistant agent** per la creazione di temi e l'impostazione del sito.

## Cosa è successo? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Site Builder mode era un'interfaccia basata su wizard per:

- Creare siti da template
- Configurare impostazioni di base
- Scegliere un tema
- Impostare contenuti iniziali

### Cosa lo ha sostituito? {#what-replaced-it}

L'**Setup Assistant agent** ora gestisce tutte le funzionalità di Site Builder con:

- Un'impostazione guidata più flessibile tramite agent
- Opzioni di personalizzazione del tema migliori
- Integrazione con l'onboarding di Theme Builder
- Memoria persistente `site_brief` per sessioni future

## Se stavi usando Site Builder Mode {#if-you-were-using-site-builder-mode}

### I tuoi siti sono al sicuro {#your-sites-are-safe}

- I siti esistenti creati con Site Builder mode continuano a funzionare
- Nessuna perdita di dati o interruzione del sito
- Puoi continuare a gestire i tuoi siti normalmente

### Migra all'Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Per nuove impostazioni di siti o modifiche al tema, usa l'Setup Assistant agent:

```
"Help me set up a new site"
```

o

```
"Start the Theme Builder onboarding"
```

L'Setup Assistant agent fornisce la stessa funzionalità con maggiore flessibilità.

## Confronto: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (Rimosso) | Setup Assistant (Nuovo) |
|---------|----------------------|----------------------|
| Setup method | Form wizard | Conversazione con l'agent |
| Theme selection | Template predefiniti | Generazione personalizzata |
| Customization | Opzioni limitate | Sistema di design completo |
| Site brief | Non memorizzato | Memoria persistente |
| Future sessions | Ripetizione dell'impostazione | Utilizza il site_brief salvato |
| Flexibility | Flusso di lavoro fisso | Conversazione adattiva |

## Migrare all'Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Per nuovi siti {#for-new-sites}

Invece di usare Site Builder mode:

1. Richiesta: "Help me set up a new site"
2. L'Setup Assistant agent ti guiderà attraverso:
   - Scopo e obiettivi del sito
   - Pubblico target
   - Identità del brand
   - Generazione del tema
   - Configurazione iniziale

### Per siti esistenti {#for-existing-sites}

Se hai un sito esistente creato con Site Builder mode:

1. Puoi continuare a usarlo così com'è
2. Per aggiornare il tema, richiedi: "Redesign my site"
3. L'Setup Assistant agent ti aiuterà a creare un nuovo tema
4. I dati del tuo sito rimangono invariati

### Per modifiche al tema {#for-theme-changes}

Invece della selezione del tema di Site Builder mode:

1. Richiesta: "Change my theme"
2. L'Setup Assistant agent:
   - Chiederà delle tue preferenze di design
   - Genererà un tema personalizzato
   - Lo attiverà sul tuo sito

## Differenze chiave {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Scegli un template
2. Seleziona un tema
3. Configura impostazioni di base
4. Fatto
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Descrivi lo scopo del tuo sito
2. Definisci il tuo pubblico target
3. Scegli le preferenze di design
4. L'agent genera un tema personalizzato
5. L'agent attiva il tema
6. Il site_brief viene salvato per sessioni future
```

## Vantaggi dell'Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Più flessibile {#more-flexible}

- Descrivi il tuo sito in linguaggio naturale
- Ottieni raccomandazioni personalizzate
- Si adatta alle tue esigenze specifiche

### Migliore personalizzazione {#better-customization}

- Generazione di temi personalizzati
- Decisioni sul sistema di design
- Token di design persistenti

### Memoria persistente {#persistent-memory}

- Il tuo `site_brief` viene salvato
- Gli agent futuri conoscono il tuo sito
- Non è necessario ripetere le informazioni di configurazione

### Flusso di lavoro integrato {#integrated-workflow}

- Onboarding di Theme Builder
- Skill Design System Aesthetics
- Controlli di visibilità della capacità (Ability Visibility controls)
- Tutto lavora insieme senza interruzioni

## Risoluzione dei problemi {#troubleshooting}

### Non trovo Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode è stato rimosso. Usa invece l'Setup Assistant agent:

```
"Help me set up a new site"
```

### Voglio ricreare un sito da Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Puoi ricrearlo con l'Setup Assistant agent:

1. Richiesta: "Help me set up a new site"
2. Descrivi lo scopo e il design del tuo sito originale
3. L'agent genererà un tema simile
4. Il tuo `site_brief` verrà salvato per riferimento futuro

### Il mio sito Site Builder esistente non funziona {#my-existing-site-builder-site-isnt-working}

I siti esistenti creati con Site Builder mode continuano a funzionare. Se riscontri problemi:

1. Controlla che il tuo tema sia ancora attivo
2. Verifica che i tuoi plugin siano abilitati
3. Controlla i log degli errori di WordPress
4. Contatta il supporto se i problemi persistono

### Posso ancora usare i miei vecchi template di Site Builder? {#can-i-still-use-my-old-site-builder-templates}

I template di Site Builder non sono più disponibili. Tuttavia:

- I tuoi siti esistenti continuano a funzionare
- Puoi ricreare siti simili con l'Setup Assistant agent
- L'Setup Assistant agent fornisce più opzioni di personalizzazione

## Prossimi passi {#next-steps}

1. **Per nuovi siti**: Usa l'Setup Assistant agent
2. **Per siti esistenti**: Continua a usarli così come sono
3. **Per modifiche al tema**: Richiedi aiuto dall'Setup Assistant agent
4. **Per affinare il design**: Usa la skill Design System Aesthetics

## Argomenti correlati {#related-topics}

- **Theme Builder Onboarding**: Configurazione guidata per temi personalizzati
- **Setup Assistant Agent**: Setup del sito guidato da un agent
- **Site Specification Skill**: Definisci gli obiettivi e il pubblico del tuo sito
- **Design System Aesthetics Skill**: Affina l'identità visiva del tuo sito
