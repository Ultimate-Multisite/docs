---
title: Generare Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Genera Logo SVG {#generate-logo-svg}

La funzionalità **Genera Logo SVG** consente a Theme Builder di creare e incorporare SVG di logo personalizzati direttamente nel tuo sito WordPress, con una sanificazione automatica sicura per lo spazio dei nomi (namespace-safe).

## Panoramica {#overview}

Questa funzionalità genera loghi SVG (Scalable Vector Graphics) basati sulla direzione del brand e sulle preferenze di design del tuo sito. Gli SVG generati vengono automaticamente sanificati per garantire che siano sicuri da utilizzare in WordPress, mantenendo al contempo l'integrità visiva.

## Parametri {#parameters}

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|--------------|-------------|
| `site_name` | string | Sì | Il nome del sito per cui generare il logo |
| `style` | string | Sì | Lo stile di design (es. "moderno", "classico", "minimalista", "giocoso") |
| `colors` | array | No | Array di codici colore esadecimali da utilizzare nel logo (es. `["#678233", "#ffffff"]`) |
| `width` | number | No | Larghezza SVG in pixel (predefinito: 200) |
| `height` | number | No | Altezza SVG in pixel (predefinito: 200) |
| `include_text` | boolean | No | Se includere il nome del sito come testo nel logo (predefinito: true) |

## Formato di Output {#output-format}

La funzionalità restituisce una stringa SVG con la seguente struttura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamento di Sanificazione SVG {#svg-sanitisation-behaviour}

Gli SVG generati subiscono una sanificazione automatica sicura per lo spazio dei nomi (namespace-safe) per:

- **Rimuovere attributi non sicuri** — elimina gestori di eventi, script e attributi potenzialmente pericolosi
- **Preservare gli spazi dei nomi** — mantiene gli spazi dei nomi SVG (xmlns, xlink) per un corretto rendering
- **Validare la struttura** — assicura che l'SVG rispetti gli standard W3C
- **Codificare le entità** — escape correttamente i caratteri speciali nel contenuto testuale
- **Rimuovere riferimenti esterni** — elimina fogli di stile e riferimenti di immagini esterni

Questo assicura che l'SVG sia sicuro da incorporare direttamente in WordPress senza richiedere sanificazioni aggiuntive.

## Esempio di Utilizzo {#usage-example}

**Prompt:**
```
Genera un logo moderno per la mia startup tecnologica chiamata "CloudSync" usando colori blu e bianchi.
```

**Risultato:**
La funzionalità crea un logo SVG che:
- Incorpora il nome del sito "CloudSync"
- Utilizza la combinazione di colori blu e bianco specificata
- Segue i principi di design moderni
- È automaticamente sanificato e pronto per l'uso

## Integrazione con Theme Builder {#integration-with-theme-builder}

Quando si utilizza la selezione della direzione di design di Theme Builder, la funzionalità Genera Logo SVG:

1. Analizza la direzione di design e la palette di colori del tuo sito
2. Genera un logo SVG personalizzato che corrisponde alle tue preferenze
3. Incorpora automaticamente il logo nell'area header/branding del tuo sito
4. Archivia l'SVG come logo personalizzato nella media library di WordPress

## Best Practices {#best-practices}

- **Fornisci preferenze di stile chiare** — descrivi lo stile di design che desideri (moderno, classico, giocoso, ecc.)
- **Specifica i colori** — includi i colori del tuo brand per garantire coerenza
- **Testa il rendering** — verifica che il logo venga visualizzato correttamente su diversi formati di schermo
- **Personalizza ulteriormente** — usa gli strumenti di personalizzazione logo di WordPress per regolare dimensione e posizionamento

## Limitazioni {#limitations}

- I loghi SVG vengono generati come grafiche statiche (non animate)
- I loghi complessi con molti elementi potrebbero richiedere un raffinamento manuale
- Non sono supportati font personalizzati; il testo utilizza i font di sistema
- Dimensioni molto grandi o molto piccole potrebbero influire sulla qualità

## Funzionalità Correlate {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — controlla il contrasto dei colori per l'accessibilità
- [Create Menu](./create-menu.md) — crea menu di navigazione per il tuo sito
