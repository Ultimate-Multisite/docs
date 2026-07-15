---
title: Bailíochtaigh Codarsnacht an Phailéid
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Codarsnacht Pailéid a Bhailíochtú

Seiceálann an cumas **Codarsnacht Pailéid a Bhailíochtú** péirí dathanna i do phailéad dearaidh le haghaidh chomhlíonadh WCAG (Treoirlínte Inrochtaineachta Ábhair Gréasáin) sula gcuirtear i bhfeidhm iad ar do théama.

## Forbhreathnú {#overview}

Cinntíonn an cumas seo go gcomhlíonann scéim dathanna do tsuímh caighdeáin inrochtaineachta trí chóimheasa codarsnachta idir téacs agus dathanna cúlra a bhailíochtú. Cabhraíonn sé le teaglamaí dathanna a d’fhéadfadh a bheith deacair le léamh d’úsáideoirí a bhfuil lagú radhairc orthu a chosc.

## Formáid Ionchuir {#input-format}

Glacann an cumas le pailéad dathanna mar ionchur:

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

### Paraiméadair {#parameters}

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|-----------|------|----------|-------------|
| `colors` | array | Tá | Eagar d’oibiachtaí datha le hairíonna `name` agus `hex` |
| `wcag_level` | string | Níl | Leibhéal comhlíonta WCAG: "A", "AA" (réamhshocrú), nó "AAA" |
| `pairs_to_check` | array | Níl | Péirí dathanna sonracha le bailíochtú (m.sh., `["primary-text", "background-text"]`) |

## Leibhéil WCAG a Sheiceáiltear {#wcag-levels-checked}

Bailíochtaíonn an cumas cóimheasa codarsnachta de réir chaighdeáin WCAG:

| Leibhéal | Gnáth-Théacs | Téacs Mór | Cóimheas Íosta |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Gnáth-Théacs** — téacs níos lú ná 18pt (nó 14pt trom)
- **Téacs Mór** — téacs 18pt nó níos mó (nó 14pt trom nó níos mó)

## Scéimre Aschuir {#output-schema}

Filleann an cumas tuarascáil bhailíochtaithe mhionsonraithe:

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

### Réimsí Aschuir {#output-fields}

| Réimse | Cineál | Cur síos |
|-------|------|-------------|
| `compliant` | boolean | Cibé an gcomhlíonann an pailéad iomlán an leibhéal WCAG sonraithe |
| `wcag_level` | string | An leibhéal WCAG a seiceáladh |
| `pairs` | array | Torthaí mionsonraithe do gach péire dathanna |
| `contrast_ratio` | number | An cóimheas codarsnachta ríofa (1:1 go 21:1) |
| `status` | string | "pass" nó "fail" do gach péire |
| `recommendations` | array | Moltaí chun péirí a theipeann orthu a fheabhsú |

## Sampla Úsáide {#usage-example}

**Leid:**
```
Seiceáil an gcomhlíonann mo phailéad dathanna caighdeáin WCAG AA. Tá dath príomhúil #678233 agam, dath téacs #ffffff, agus cúlra #f5f5f5.
```

**Toradh:**
Bailíochtaíonn an cumas gach teaglaim dathanna agus filleann sé:
- ✅ Príomhúil + Téacs: cóimheas 5.2:1 (pasann WCAG AA)
- ✅ Cúlra + Téacs: cóimheas 12.1:1 (pasann WCAG AAA)
- Tríd is tríd: Comhlíontach le WCAG AA

## Comhtháthú le Theme Builder {#integration-with-theme-builder}

Agus roghnú treo dearaidh Theme Builder á úsáid, déanann an cumas Codarsnacht Pailéid a Bhailíochtú:

1. Anailís ar do phailéad dathanna roghnaithe
2. Seiceáil ar gach teaglaim téacs-cúlra
3. Bailíochtú i gcoinne do leibhéil WCAG roghnaithe
4. Moltaí a sholáthar do phéirí neamhchomhlíontacha
5. Cosc a chur ar scéimeanna dathanna neamh-inrochtana a chur i bhfeidhm

## Dea-Chleachtais {#best-practices}

- **Tosaigh le leibhéal AA** — is é WCAG AA an caighdeán don chuid is mó de shuíomhanna gréasáin
- **Tástáil roimh chur i bhfeidhm** — bailíochtaigh do phailéad sula ngeallann tú do dhearadh
- **Seiceáil gach teaglaim** — cinntigh go gcomhlíonann téacs, naisc, agus eilimintí UI na caighdeáin ar fad
- **Cuir roghanna úsáideoirí san áireamh** — d’fhéadfadh íogaireacht bhreise do dhath a bheith ag úsáideoirí áirithe
- **Úsáid seiceálaithe codarsnachta** — comhcheangail an cumas seo le huirlisí brabhsálaí le haghaidh fíoraithe

## Péirí a Theipeann Orthu agus Moltaí {#failing-pairs-and-recommendations}

Má theipeann ar phéire dathanna sa bhailíochtú, soláthraíonn an cumas moltaí:

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

## Cumais Ghaolmhara {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — cruthaigh lógónna le do phailéad dathanna bailíochtaithe
- [Create Menu](./create-menu.md) — tóg nascleanúint le dathanna inrochtana
