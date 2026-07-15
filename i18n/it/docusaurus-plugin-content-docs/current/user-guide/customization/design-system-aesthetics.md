---
title: Competenza Estetica del Sistema di Design
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Skill Estetica del Design System

Lo **Skill Estetica del Design System** è un approccio guidato per affinare l'identità visiva del tuo sito. Ti aiuta a prendere decisioni coerenti su tipografia, colore, spaziatura e i *token* di movimento che definiscono il tuo design system.

## Cos'è l'Estetica del Design System? {#what-is-design-system-aesthetics}

Design System Aesthetics è uno skill strutturato che copre:

- **Tipografia**: Famiglie di caratteri, dimensioni, pesi e interlinee
- **Colori**: Palette primarie, secondarie, di accento e neutre
- **Spaziatura**: Scale per padding, margin e gap
- **Bordi**: Token per raggio e larghezza
- **Ombre**: Token per elevazione e profondità
- **Movimento**: Animazioni e transizioni

Queste decisioni vengono salvate nel file `theme.json` del tuo tema, creando un sistema visivo coeso.

## Perché usare l'Estetica del Design System? {#why-use-design-system-aesthetics}

### Coerenza {#consistency}

Un design system assicura che:

- Tutto il testo utilizzi la stessa scala tipografica
- I colori siano usati in modo uniforme su tutto il sito
- La spaziatura segua un modello prevedibile
- Le animazioni sembrino unificate

### Efficienza {#efficiency}

Invece di prendere decisioni di design pagina per pagina, tu:

- Definisci i *token* una sola volta
- Li applichi ovunque
- Li aggiorni globalmente modificando un singolo valore

### Flessibilità {#flexibility}

Puoi:

- Regolare l'intero design system rapidamente
- Sperimentare diverse estetiche
- Mantenere la coerenza del brand pur evolvendo

## Attivare lo Skill Estetica del Design System {#triggering-the-design-system-aesthetics-skill}

### Attivazione Manuale {#manual-activation}

Puoi avviare lo skill in qualsiasi momento:

```
"Aiutami a rifinire il mio design system"
```

o

```
"Miglioriamo l'estetica del mio sito"
```

o

```
"Guidami nelle decisioni sul design system"
```

### Suggerimenti Automatici {#automatic-suggestions}

Gli agenti potrebbero suggerire di usare lo skill quando tu:

- Chiedi modifiche di design
- Richiedi un redesign "moderno" o "professionale"
- Vuoi migliorare la coerenza visiva
- Ti stai preparando per il lancio del sito

## Il Processo Estetica del Design System {#the-design-system-aesthetics-process}

### Passo 1: Tipografia {#step-1-typography}

L'agente ti chiederà delle tue scelte di carattere:

```
Qual è il tuo stile tipografico preferito?
- Serif (tradizionale, elegante)
- Sans-serif (moderno, pulito)
- Monospace (tecnico, focalizzato sul codice)

Per il carattere dei titoli:
- Vuoi un carattere distintivo per i titoli, o usare lo stesso del testo del corpo?
- Preferenza: audace, elegante, giocoso, minimale?

Per il carattere del corpo del testo:
- La leggibilità è fondamentale. Preferisci:
  - Testo più grande e più arioso
  - Testo compatto ed efficiente
  - Dimensioni standard
```

L'agente definirà quindi:

- **Carattere dei titoli**: Carattere principale per titoli e intestazioni
- **Carattere del corpo**: Carattere per paragrafi e testo del corpo
- **Carattere monospace**: Carattere per codice e contenuti tecnici
- **Scala delle dimensioni**: Dimensioni predefinite (small, base, large, XL, ecc.)
- **Scala dei pesi**: Pesi del carattere (regular, medium, bold, ecc.)
- **Interlinea**: Spaziatura tra le righe per la leggibilità

### Passo 2: Palette Colori {#step-2-color-palette}

```
Definiamo la tua palette colori.

Colore primario (il colore del tuo brand):
- Attuale: [mostra il colore esistente]
- Cambiare in: [selettore colore o codice esadecimale]

Colore secondario (colore di supporto):
- Attuale: [mostra il colore esistente]
- Cambiare in: [selettore colore o codice esadecimale]

Colore di accento (evidenziazioni e CTA):
- Attuale: [mostra il colore esistente]
- Cambiare in: [selettore colore o codice esadecimale]

Palette neutra (grigi per testo, bordi, sfondi):
- Chiaro: [colore]
- Medio: [colore]
- Scuro: [colore]
```

L'agente creerà una palette completa che include:

- Colori primari, secondari e di accento
- Toni grigi neutri (chiaro, medio, scuro)
- Colori semantici (successo, avviso, errore)
- Stati hover e attivo

### Passo 3: Spaziatura {#step-3-spacing}

```
Quanto spazio di respiro desideri?

Preferenza per la scala di spaziatura:
- Compatto (layout stretti ed efficienti)
- Normale (spaziatura bilanciata)
- Ampio (spazio bianco generoso)

Questo influisce su:
- Padding all'interno di pulsanti e schede
- Margini tra le sezioni
- Gap tra gli elementi della griglia
```

L'agente definisce i *token* di spaziatura:

- Unità base (tipicamente 4px o 8px)
- Scala: xs, sm, md, lg, xl, 2xl
- Valori specifici per padding, margin, gap

### Passo 4: Bordi e Ombre {#step-4-borders-and-shadows}

```
Profondità e definizione visiva:

Preferenza per il raggio del bordo:
- Nitido (senza arrotondamenti)
- Sottile (piccolo raggio)
- Arrotondato (raggio medio)
- Molto arrotondato (grande raggio)

Profondità dell'ombra:
- Piatto (nessuna ombra)
- Sottile (ombre leggere)
- Marcato (ombre forti)
```

L'agente crea:

- Token per il raggio del bordo (per pulsanti, schede, input)
- Token per le ombre a vari livelli di elevazione
- Token per la larghezza del bordo

### Passo 5: Movimento e Animazione {#step-5-motion-and-animation}

```
Come dovrebbe sentirsi il tuo sito quando è interattivo?

Preferenza di animazione:
- Minimo (nessuna animazione)
- Sottile (transizioni delicate)
- Giocoso (animazioni evidenti)

Animazioni specifiche:
- Transizioni di pagina: dissolvenza, scorrimento o nessuna?
- Hover del pulsante: scala, cambio colore o entrambi?
- Stati di caricamento: spinner, skeleton o barra di avanzamento?
```

L'agente definisce:

- Durate di transizione (veloce, normale, lento)
- Funzioni di easing (ease-in, ease-out, ease-in-out)
- Keyframe di animazione per interazioni comuni

## Applicare l'Estetica del Design System {#applying-design-system-aesthetics}

### Applicazione Automatica {#automatic-application}

Dopo aver completato lo skill, l'agente:

1. Aggiorna il `theme.json` del tuo tema con tutti i *token*
2. Applica il design system al tuo tema attivo
3. Rigenera gli stili dei blocchi per adattarsi al nuovo sistema
4. Attiva il tema aggiornato

### Applicazione Manuale {#manual-application}

Puoi anche modificare `theme.json` direttamente:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Visualizzare il tuo Design System {#viewing-your-design-system}

### Chiedere all'Agente {#ask-the-agent}

```
"Mostrami il mio design system"
```

o

```
"Quali sono i miei token di design attuali?"
```

L'agente visualizzerà la tua tipografia, i colori, la spaziatura e altri *token*.

### Visualizzare theme.json {#view-themejson}

Apri `/wp-content/themes/[theme-name]/theme.json` in un editor di testo per vedere le definizioni grezze dei *token*.

## Aggiornare il tuo Design System {#updating-your-design-system}

### Aggiornamenti Rapidi {#quick-updates}

Chiedi all'agente modifiche specifiche:

```
"Rendi il colore primario più scuro"
```

o

```
"Aumenta la scala di spaziatura del 20%"
```

o

```
"Cambia il carattere dei titoli in un serif"
```

### Redesign Completo {#full-redesign}

Esegui nuovamente lo skill Estetica del Design System:

```
"Riprogettiamo l'intero design system"
```

Questo ti guiderà attraverso tutte le decisioni, partendo dai tuoi valori attuali.

### Aggiornamenti Parziali {#partial-updates}

Aggiorna aspetti specifici:

```
"Aggiorna solo la palette colori, lascia tutto il resto"
```

## Best Practices del Design System {#design-system-best-practices}

### Coerenza {#consistency-1}

- Usa sempre gli stessi *token* ovunque
- Non creare colori o dimensioni "una tantum"
- Fai riferimento ai *token* invece di codificare valori fissi

### Nomenclatura {#naming}

Usa nomi chiari e semantici:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Scalabilità {#scalability}

Progetta il tuo sistema in modo che possa crescere:

- Usa unità relative (rem, em) invece dei pixel
- Crea scale (xs, sm, md, lg, xl) invece di valori arbitrari
- Pianifica le aggiunte future

### Documentazione {#documentation}

Documenta il tuo design system:

- Perché hai scelto colori specifici
- Quando usare ogni *token*
- Eccezioni e casi limite

## Pattern Comuni del Design System {#common-design-system-patterns}

### Minimalista Moderno {#modern-minimalist}

- Tipografia sans-serif (Inter, Helvetica)
- Palette colori limitata (2-3 colori)
- Spaziatura generosa
- Ombre sottili
- Animazioni fluide e veloci

### Caldo e Amichevole {#warm-and-friendly}

- Mix di serif e sans-serif
- Palette colori calda (arancioni, grigi caldi)
- Angoli arrotondati
- Ombre morbide
- Animazioni giocose

### Corporate Professionale {#professional-corporate}

- Sans-serif pulito (Roboto, Open Sans)
- Palette neutra con colore di accento
- Spaziatura strutturata
- Ombre minime
- Transizioni delicate

### Creativo e Audace {#creative-and-bold}

- Tipografia distintiva
- Palette colori audace
- Spaziatura varia
- Ombre marcate
- Animazioni evidenti

## Risoluzione dei Problemi {#troubleshooting}

**Le modifiche al mio design system non vengono mostrate**
- Cancella la cache del browser
- Ricostruisci il sito se usi un static generator
- Controlla che `theme.json` sia un JSON valido
- Verifica che il tema sia attivo

**I colori sembrano diversi su pagine diverse**
- Controlla CSS in conflitto nei plugin
- Verifica che tutte le pagine utilizzino lo stesso tema
- Cancella eventuali plugin di caching

**Voglio tornare a un design system precedente**
- Chiedi all'agente: "Mostrami la cronologia del mio design system"
- Modifica manualmente `theme.json` con i valori precedenti
- Riprova lo skill con scelte diverse

## Prossimi Passi {#next-steps}

Dopo aver definito il tuo design system:

1. **Rivedi il tuo sito**: Visita il tuo sito per vedere il nuovo design
2. **Raffina ulteriormente**: Effettua aggiustamenti riutilizzando lo skill
3. **Crea template**: Costruisci template di blocchi personalizzati utilizzando i tuoi *token* di design
4. **Documenta**: Condividi il tuo design system con i membri del team
