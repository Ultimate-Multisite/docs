---
title: Thibitisha Tofauti ya Rangi ya Paleti
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Thibitisha Tofauti ya Rangi ya Paleti {#validate-palette-contrast}

Uwezo wa **Thibitisha Tofauti ya Rangi ya Paleti** unachangia kuangalia rangi wanazojiridhia katika paleti yako ya usanifu ili kuhakikisha inazingatia kanuni za WCAG (Mwongozo wa Upatikanaji wa Maudhui ya Tovuti) kabla ya kuzitumia kwenye mandhari yako.

## Muhtasari {#overview}

Uwezo huu unahakikisha kwamba rangi za tovuti yako zinakidhi viwango vya upatikanaji kwa kuthibitisha uwiano wa tofauti kati ya rangi za maandishi na rangi za mandhari. Unasaidia kuzuia mchanganyiko wa rangi ambazo zinaweza kuwa vigumu kwa watumiaji wenye matatizo ya kuona kuzisoma.

## Muundo wa Kuingiza Data (Input Format) {#input-format}

Uwezo huu unakubali paleti ya rangi kama data ya kuingiza:

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

### Vigezo (Parameters) {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ya vitu vya rangi zenye sifa za `name` na `hex` |
| `wcag_level` | string | No | Kiwango cha kuzingatia WCAG: "A", "AA" (kawaida), au "AAA" |
| `pairs_to_check` | array | No | Mashirika maalum ya rangi ya kuthibitisha (mfano: `["primary-text", "background-text"]`) |

## Viwango vya WCAG Vinavyotibiwa {#wcag-levels-checked}

Uwezo huu unathibitisha uwiano wa tofauti kulingana na viwango vya WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — maandishi yanayopungua chini ya 18pt (au 14pt nene)
- **Large Text** — maandishi ya 18pt au zaidi (au 14pt nene au zaidi)

## Muundo wa Matokeo (Output Schema) {#output-schema}

Uwezo huu unarudisha ripoti ya kina ya uthibitisho:

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

### Vipengele vya Matokeo (Output Fields) {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Kama paleti nzima inakidhi kiwango kilichotajwa cha WCAG |
| `wcag_level` | string | Kiwango cha WCAG kilichotibiwa |
| `pairs` | array | Matokeo ya kina kwa kila shirikisho la rangi |
| `contrast_ratio` | number | Uwiano wa tofauti uliotokana na hesabu (kutoka 1:1 hadi 21:1) |
| `status` | string | "pass" au "fail" kwa kila shirikisho |
| `recommendations` | array | Mapendekezo ya kuboresha mashirika ambayo hayakidhi viwango |

## Mfano wa Matumizi {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Matokeo:**
Uwezo huu unathibitisha mchanganyiko wote wa rangi na kurudisha:
- ✅ Primary + Text: Uwiano wa 5.2:1 (unapita WCAG AA)
- ✅ Background + Text: Uwiano wa 12.1:1 (unapita WCAG AAA)
- Jumla: Inazingatia WCAG AA

## Uunganishaji na Theme Builder {#integration-with-theme-builder}

Unapotumia uteuzi wa mwelekeo wa usanifu (design-direction selection) wa Theme Builder, uwezo wa Thibitisha Tofauti ya Rangi ya Paleti:

1. Unachambua paleti yako ya rangi iliyochaguliwa
2. Unangalia mchanganyiko wote wa maandishi na mandhari
3. Unathibitisha kulingana na kiwango chako cha WCAG
4. Unatoa mapendekezo kwa mashirika ambayo hayakidhi viwango
5. Unazuia kutumia miundo ya rangi ambayo haitawafaa watumiaji

## Mazoea Bora (Best Practices) {#best-practices}

- **Anza na kiwango cha AA** — WCAG AA ni kiwango cha kawaida kwa tovuti nyingi
- **Jaribisha kabla ya kutumia** — thibitisha paleti yako kabla ya kujitolea kwa usanifu
- **Angalia mchanganyiko wote** — hakikisha maandishi, viungo, na vipengele vya UI vyote vinakidhi viwango
- **Zingatia mapendeleo ya mtumiaji** — baadhi ya watumiaji wanaweza kuwa na hisia zaidi za rangi
- **Tumia zana za kuangalia tofauti** — ongeza uwezo huu na zana za kivinjari kwa ajili ya uthibitisho

## Mashirika Yanayoshindwa na Mapendekezo {#failing-pairs-and-recommendations}

Ikiwa shirikisho la rangi linashindwa uthibitisho, uwezo huu unatoa mapendekezo:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Fanya rangi ya maandishi kuwa nyepesi zaidi hadi #ffffff (uwiano ungekuwa 5.2:1)",
    "Fanya rangi ya mandhari kuwa nyeusi zaidi hadi #556b2f (uwiano ungekuwa 4.8:1)",
    "Tumia rangi tofauti ya primary kama #4a6b1f (uwiano ungekuwa 6.1:1)"
  ]
}
```

## Uwezo Husababishi (Related Abilities) {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — unda nembo kwa kutumia paleti yako ya rangi iliyothibitishwa
- [Create Menu](./create-menu.md) — jenga navigatio kwa rangi zinazoweza kufikiwa
