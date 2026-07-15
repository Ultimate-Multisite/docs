---
title: Pārbaudīt paletes kontrastu
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validēt paletes kontrastu

Spēja **Validate Palette Contrast** pārbauda krāsu pārus jūsu dizaina paletē attiecībā uz WCAG (Web Content Accessibility Guidelines) atbilstību, pirms tos piemēro jūsu theme.

## Pārskats {#overview}

Šī spēja nodrošina, ka jūsu site krāsu shēma atbilst pieejamības standartiem, validējot kontrasta attiecības starp teksta un fona krāsām. Tā palīdz novērst krāsu kombinācijas, kuras lietotājiem ar redzes traucējumiem varētu būt grūti salasīt.

## Ievades formāts {#input-format}

Spēja kā ievadi pieņem krāsu paleti:

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

### Parametri {#parameters}

| Parametrs | Tips | Obligāts | Apraksts |
|-----------|------|----------|-------------|
| `colors` | array | Jā | Krāsu objektu masīvs ar `name` un `hex` īpašībām |
| `wcag_level` | string | Nē | WCAG atbilstības līmenis: "A", "AA" (noklusējums) vai "AAA" |
| `pairs_to_check` | array | Nē | Konkrēti validējamie krāsu pāri (piem., `["primary-text", "background-text"]`) |

## Pārbaudītie WCAG līmeņi {#wcag-levels-checked}

Spēja validē kontrasta attiecības atbilstoši WCAG standartiem:

| Līmenis | Parasts teksts | Liels teksts | Minimālā attiecība |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Parasts teksts** — teksts, kas ir mazāks par 18pt (vai 14pt treknrakstā)
- **Liels teksts** — teksts 18pt vai lielāks (vai 14pt treknrakstā vai lielāks)

## Izvades shēma {#output-schema}

Spēja atgriež detalizētu validācijas pārskatu:

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

### Izvades lauki {#output-fields}

| Lauks | Tips | Apraksts |
|-------|------|-------------|
| `compliant` | boolean | Vai visa palete atbilst norādītajam WCAG līmenim |
| `wcag_level` | string | WCAG līmenis, kas tika pārbaudīts |
| `pairs` | array | Detalizēti rezultāti katram krāsu pārim |
| `contrast_ratio` | number | Aprēķinātā kontrasta attiecība (no 1:1 līdz 21:1) |
| `status` | string | "pass" vai "fail" katram pārim |
| `recommendations` | array | Ieteikumi neveiksmīgo pāru uzlabošanai |

## Lietošanas piemērs {#usage-example}

**Uzvedne:**
```
Pārbaudi, vai mana krāsu palete atbilst WCAG AA standartiem. Man ir primārā krāsa #678233, teksta krāsa #ffffff un fons #f5f5f5.
```

**Rezultāts:**
Spēja validē visas krāsu kombinācijas un atgriež:
- ✅ Primārā + teksts: attiecība 5.2:1 (atbilst WCAG AA)
- ✅ Fons + teksts: attiecība 12.1:1 (atbilst WCAG AAA)
- Kopumā: atbilst WCAG AA

## Integrācija ar Theme Builder {#integration-with-theme-builder}

Izmantojot Theme Builder dizaina virziena izvēli, Validate Palette Contrast spēja:

1. Analizē jūsu izvēlēto krāsu paleti
2. Pārbauda visas teksta un fona kombinācijas
3. Validē pret jūsu izvēlēto WCAG līmeni
4. Sniedz ieteikumus neatbilstošiem pāriem
5. Novērš nepieejamu krāsu shēmu piemērošanu

## Labākā prakse {#best-practices}

- **Sāciet ar AA līmeni** — WCAG AA ir standarts lielākajai daļai tīmekļa vietņu
- **Testējiet pirms piemērošanas** — validējiet savu paleti, pirms apstiprināt dizainu
- **Pārbaudiet visas kombinācijas** — pārliecinieties, ka teksts, saites un UI elementi atbilst standartiem
- **Ņemiet vērā lietotāju preferences** — dažiem lietotājiem var būt papildu jutība pret krāsām
- **Izmantojiet kontrasta pārbaudītājus** — apvienojiet šo spēju ar pārlūka rīkiem verifikācijai

## Neveiksmīgi pāri un ieteikumi {#failing-pairs-and-recommendations}

Ja krāsu pāris neiztur validāciju, spēja sniedz ieteikumus:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## Saistītās spējas {#related-abilities}

- [Ģenerēt Logo SVG](./generate-logo-svg.md) — izveidojiet logotipus ar savu validēto krāsu paleti
- [Izveidot izvēlni](./create-menu.md) — veidojiet navigāciju ar pieejamām krāsām
