---
title: Funzionalità del Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Funzionalità del Theme Builder: Strutturare e Attivare i Block Theme {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 introduce due potenti funzionalità che ti permettono di generare e implementare block theme personalizzati direttamente dall'interfaccia chat.

## Panoramica {#overview}

Le funzionalità **scaffold-block-theme** e **activate-theme** consentono agli agenti di:
- Generare block theme completi e pronti per la produzione, basati sulle tue specifiche
- Attivare automaticamente i temi sul tuo sito senza interventi manuali
- Creare identità visive coerenti attraverso decisioni di design guidate

## Strutturare un Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

La funzionalità **scaffold-block-theme** genera un nuovo block theme WordPress con una struttura completa, che include:

- Configurazione `theme.json` con design tokens
- File di template per i block per layout comuni
- Stili e variazioni di block personalizzati
- Metadati e dichiarazioni di supporto del tema

### Come richiamarla {#how-to-invoke}

Nella tua chat con Superdav AI Agent, puoi richiedere la generazione del tema:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

L'agente:
1. Raccoglierà le tue preferenze di design tramite conversazione
2. Genererà la struttura completa del tema
3. Creerà tutti i file necessari del tema
4. Preparerà il tema per l'attivazione

### Output atteso {#expected-output}

Quando la funzionalità viene eseguita con successo, vedrai:

- La conferma che il tema è stato strutturato (scaffolded)
- Il nome e la posizione del tema
- Un riepilogo dei design tokens applicati (colori, tipografia, spaziatura)
- Stato pronto per l'attivazione

Esempio di output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Attivare il Tema (Activate Theme) {#activate-theme}

La funzionalità **activate-theme** cambia il tuo sito su un block theme appena strutturato o esistente.

### Come richiamarla {#how-to-invoke-1}

Dopo aver strutturato un tema, puoi attivarli immediatamente:

```
"Activate the Modern Agency theme"
```

Oppure attivare qualsiasi tema esistente:

```
"Switch to the Twentytwentyfour theme"
```

### Output atteso {#expected-output-1}

Quando l'attivazione ha successo:

- Conferma del tema attivo
- Nome del tema precedente (per riferimento)
- URL del sito dove il tema è ora attivo
- Eventuali note di configurazione specifiche del tema

Esempio di output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Flusso di lavoro: Strutturare e Attivare {#workflow-scaffold-and-activate}

Un flusso di lavoro tipico combina entrambe le funzionalità:

1. **Richiedere la generazione del tema**: "Create a block theme for my SaaS landing page"
2. **L'agente struttura il tema**: Genera i file e i design tokens
3. **Revisione e affinamento**: Discutere modifiche di design se necessario
4. **Attivare**: "Activate the theme now"
5. **Verificare**: Visitare il tuo sito per confermare che il nuovo design è attivo

## Design Tokens e Personalizzazione {#design-tokens-and-customization}

I temi strutturati utilizzano i design tokens di WordPress (tramite `theme.json`) per:

- **Colori**: Palette primaria, secondaria, accento, neutra
- **Tipografia**: Famiglie di caratteri, dimensioni, pesi, altezze di riga
- **Spaziatura**: Scale di padding, margine, gap
- **Bordi**: Token di raggio e larghezza
- **Ombre**: Livelli di elevazione

Questi token sono centralizzati in `theme.json`, rendendo facile regolare l'intero sistema di design da un unico file.

## Limitazioni e Note {#limitations-and-notes}

- I temi vengono strutturati in `/wp-content/themes/` e devono seguire le convenzioni di denominazione di WordPress
- L'attivazione richiede permessi appropriati sul tuo sito WordPress
- Il codice PHP personalizzato nei temi è minimo; usa i plugin per funzionalità complesse
- I block theme funzionano meglio con WordPress 5.9 e versioni successive

## Risoluzione dei problemi {#troubleshooting}

**Il tema non appare dopo lo scaffolding**
- Verifica che la directory del tema esista e abbia i permessi corretti
- Controlla che `theme.json` sia un JSON valido
- Assicurati che il nome del tema non entri in conflitto con temi esistenti

**L'attivazione fallisce**
- Conferma di avere permessi di amministratore
- Controlla che la directory del tema sia leggibile da WordPress
- Rivedi i log degli errori di WordPress per maggiori dettagli

**I design tokens non vengono applicati**
- Verifica che la sintassi di `theme.json` sia corretta
- Cancella eventuali plugin di caching
- Controlla che la tua versione di WordPress supporti i token che stai utilizzando

## Prossimi Passi {#next-steps}

Dopo aver attivato il tuo tema, puoi:
- Usare la skill **Design System Aesthetics** per affinare tipografia, colori e spaziatura
- Personalizzare stili di block individuali tramite l'editor block di WordPress
- Aggiungere CSS personalizzato nel file `style.css` del tema
- Creare template di block personalizzati per tipi di pagina specifici
