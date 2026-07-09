---
title: Staðfesta birtuskil litaspjalds
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Staðfesta birtuskil litatöflu

Getan **Validate Palette Contrast** athugar litapör í hönnunarlitatöflunni þinni með tilliti til samræmis við WCAG (Web Content Accessibility Guidelines) áður en þau eru notuð í þemað þitt.

## Yfirlit

Þessi geta tryggir að litasamsetning vefsins þíns uppfylli aðgengisstaðla með því að staðfesta birtuskilahlutföll milli texta- og bakgrunnslita. Hún hjálpar til við að koma í veg fyrir litasamsetningar sem gætu verið erfiðar aflestrar fyrir notendur með sjónskerðingu.

## Inntakssnið

Getan tekur við litatöflu sem inntaki:

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

### Færibreytur

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|-----------|------|----------|-------------|
| `colors` | array | Já | Fylki af litahlutum með eiginleikunum `name` og `hex` |
| `wcag_level` | string | Nei | WCAG-samræmisstig: "A", "AA" (sjálfgefið) eða "AAA" |
| `pairs_to_check` | array | Nei | Sérstök litapör til að staðfesta (t.d. `["primary-text", "background-text"]`) |

## WCAG-stig sem eru athuguð

Getan staðfestir birtuskilahlutföll samkvæmt WCAG-stöðlum:

| Stig | Venjulegur texti | Stór texti | Lágmarkshlutfall |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Venjulegur texti** — texti minni en 18pt (eða 14pt feitletraður)
- **Stór texti** — texti 18pt eða stærri (eða 14pt feitletraður eða stærri)

## Úttaksskema

Getan skilar ítarlegri staðfestingarskýrslu:

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

### Úttaksreitir

| Reitur | Tegund | Lýsing |
|-------|------|-------------|
| `compliant` | boolean | Hvort öll litatöflan uppfylli tilgreint WCAG-stig |
| `wcag_level` | string | WCAG-stigið sem var athugað |
| `pairs` | array | Ítarlegar niðurstöður fyrir hvert litapar |
| `contrast_ratio` | number | Útreiknað birtuskilahlutfall (1:1 til 21:1) |
| `status` | string | "pass" eða "fail" fyrir hvert par |
| `recommendations` | array | Tillögur til að bæta pör sem standast ekki |

## Notkunardæmi

**Kvaðning:**
```
Athugaðu hvort litatöflan mín uppfylli WCAG AA-staðla. Ég er með aðallit #678233, textalit #ffffff og bakgrunn #f5f5f5.
```

**Niðurstaða:**
Getan staðfestir allar litasamsetningar og skilar:
- ✅ Aðallitur + texti: 5.2:1 hlutfall (stenst WCAG AA)
- ✅ Bakgrunnur + texti: 12.1:1 hlutfall (stenst WCAG AAA)
- Heildarniðurstaða: Samræmist WCAG AA

## Samþætting við Theme Builder

Þegar val á hönnunarstefnu í Theme Builder er notað, gerir Validate Palette Contrast-getan eftirfarandi:

1. Greinir valda litatöflu þína
2. Athugar allar texta- og bakgrunnssamsetningar
3. Staðfestir gagnvart völdu WCAG-stigi þínu
4. Veitir tillögur fyrir pör sem uppfylla ekki kröfur
5. Kemur í veg fyrir að óaðgengilegar litasamsetningar séu notaðar

## Bestu starfsvenjur

- **Byrjaðu á AA-stigi** — WCAG AA er staðallinn fyrir flesta vefi
- **Prófaðu áður en þú notar** — staðfestu litatöfluna áður en þú skuldbindur þig til hönnunar
- **Athugaðu allar samsetningar** — tryggðu að texti, tenglar og UI-einingar uppfylli allir staðla
- **Taktu tillit til notendastillinga** — sumir notendur geta haft aukið litanæmi
- **Notaðu birtuskilaprófara** — sameinaðu þessa getu með vafraverkfærum til staðfestingar

## Pör sem standast ekki og tillögur

Ef litapar stenst ekki staðfestingu veitir getan tillögur:

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

## Tengdar getu

- [Búa til Logo SVG](./generate-logo-svg.md) — búðu til merki með staðfestri litatöflu þinni
- [Búa til valmynd](./create-menu.md) — byggðu upp leiðarkerfi með aðgengilegum litum
