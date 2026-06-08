---
title: Valida il contrasto della palette
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valida il Contrasto della Palette

La funzionalità **Valida il Contrasto della Palette** controlla le coppie di colori della tua palette di design per assicurarsi che siano conformi alle WCAG (Web Content Accessibility Guidelines) prima di applicarle al tuo tema.

## Panoramica

Questa funzionalità garantisce che lo schema colori del tuo sito rispetti gli standard di accessibilità, validando i rapporti di contrasto tra i colori del testo e dello sfondo. Aiuta a prevenire combinazioni di colori che potrebbero risultare difficili da leggere per gli utenti con disabilità visive.

## Formato Input

La funzionalità accetta una palette di colori come input:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parametri

| Parametro | Tipo | Richiesto | Descrizione |
|-----------|------|----------|-------------|
| `colors` | array | Sì | Array di oggetti colore con proprietà `name` e `hex` |
| `wcag_level` | string | No | Livello di conformità WCAG: "A", "AA" (predefinito), o "AAA" |
| `pairs_to_check` | array | No | Coppie di colori specifiche da validare (es. `["primary-text", "background-text"]`) |

## Livelli WCAG Controllati

La funzionalità valida i rapporti di contrasto secondo gli standard WCAG:

| Livello | Testo Normale | Testo Grande | Rapporto Minimo |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Testo Normale** — testo più piccolo di 18pt (o 14pt in grassetto)
- **Testo Grande** — testo di 18pt o più (o 14pt in grassetto o più)

## Schema Output

La funzionalità restituisce un rapporto di validazione dettagliato:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Campi di Output

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `compliant` | boolean | Indica se l'intera palette rispetta il livello WCAG specificato |
| `wcag_level` | string | Il livello WCAG che è stato controllato |
| `pairs` | array | Risultati dettagliati per ogni coppia di colori |
| `contrast_ratio` | number | Il rapporto di contrasto calcolato (da 1:1 a 21:1) |
| `status` | string | "pass" o "fail" per ogni coppia |
| `recommendations` | array | Suggerimenti per migliorare le coppie fallimentari |

## Esempio di Utilizzo

**Prompt:**
```
Controlla se la mia palette di colori rispetta gli standard WCAG AA. Ho il colore primario #678233, il colore del testo #ffffff e lo sfondo #f5f5f5.
```

**Risultato:**
La funzionalità valida tutte le combinazioni di colori e restituisce:
- ✅ Primario + Testo: rapporto 5.2:1 (supera WCAG AA)
- ✅ Sfondo + Testo: rapporto 12.1:1 (supera WCAG AAA)
- Complessivo: Conforme a WCAG AA

## Integrazione con Theme Builder

Quando si utilizza la selezione della direzione di design di Theme Builder, la funzionalità Valida il Contrasto della Palette:

1. Analizza la palette di colori selezionata
2. Controlla tutte le combinazioni testo-sfondo
3. Valida rispetto al livello WCAG scelto
4. Fornisce raccomandazioni per le coppie non conformi
5. Impedisce di applicare schemi di colori inaccessibili

## Best Practices

- **Inizia con il livello AA** — WCAG AA è lo standard per la maggior parte dei siti web
- **Testa prima di applicare** — valida la tua palette prima di impegnarti in un design
- **Controlla tutte le combinazioni** — assicurati che testo, link e elementi UI soddisfino gli standard
- **Considera le preferenze dell'utente** — alcuni utenti potrebbero avere sensibilità cromatiche aggiuntive
- **Usa i controllori di contrasto** — combina questa funzionalità con strumenti del browser per la verifica

## Coppie Fallimentari e Raccomandazioni

Se una coppia di colori fallisce la validazione, la funzionalità fornisce raccomandazioni:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Schiarisci il colore del testo a #ffffff (il rapporto sarebbe 5.2:1)",
    "Scurisci il colore dello sfondo a #556b2f (il rapporto sarebbe 4.8:1)",
    "Usa un colore primario diverso come #4a6b1f (il rapporto sarebbe 6.1:1)"
  ]
}
```

## Funzionalità Correlate

- [Generate Logo SVG](./generate-logo-svg.md) — crea loghi con la tua palette di colori validata
- [Create Menu](./create-menu.md) — costruisci la navigazione con colori accessibili
