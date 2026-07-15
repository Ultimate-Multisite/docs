---
title: Nyochaa Ọdịiche Paleti
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Nyochaa Nkwekọrịta Palette Contrast

Ikike **Validate Palette Contrast** na-enyocha ụzọ abụọ agba n'ime palette imewe gị maka irube isi na WCAG (Web Content Accessibility Guidelines) tupu itinye ha na theme gị.

## Nchịkọta {#overview}

Ikike a na-eme ka usoro agba nke saịtị gị kwekọọ na ụkpụrụ nnweta site n'ịkwado oke nkwekọrịta dị n'etiti ederede na agba ndabere. Ọ na-enyere aka igbochi njikọta agba ndị nwere ike isi ike ka ndị ọrụ nwere nsogbu ịhụ ihe gụọ.

## Ụdị Ntinye {#input-format}

Ikike a na-anabata palette agba dịka ntinye:

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

### Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array nke ihe agba nwere njirimara `name` na `hex` |
| `wcag_level` | string | No | Ọkwa irube isi WCAG: "A", "AA" (ndabara), ma ọ bụ "AAA" |
| `pairs_to_check` | array | No | Ụzọ abụọ agba akọwapụtara iji kwado (dịka, `["primary-text", "background-text"]`) |

## Ọkwa WCAG A Na-enyocha {#wcag-levels-checked}

Ikike a na-akwado oke nkwekọrịta dịka ụkpụrụ WCAG si dị:

| Ọkwa | Ederede Nkịtị | Ederede Ukwu | Oke kacha nta |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Ederede Nkịtị** — ederede pere mpe karịa 18pt (ma ọ bụ 14pt bold)
- **Ederede Ukwu** — ederede 18pt ma ọ bụ karịa (ma ọ bụ 14pt bold ma ọ bụ karịa)

## Schema Mmepụta {#output-schema}

Ikike a na-eweghachi akụkọ nkwado zuru ezu:

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

### Ubi Mmepụta {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ma palette niile na-emezu ọkwa WCAG akọwapụtara |
| `wcag_level` | string | Ọkwa WCAG a nyochara |
| `pairs` | array | Nsonaazụ zuru ezu maka ụzọ abụọ agba ọ bụla |
| `contrast_ratio` | number | Oke nkwekọrịta a gbakọrọ (1:1 ruo 21:1) |
| `status` | string | "pass" ma ọ bụ "fail" maka ụzọ abụọ ọ bụla |
| `recommendations` | array | Aro maka imezi ụzọ abụọ dara ada |

## Ihe Nlereanya Ojiji {#usage-example}

**Prompt:**
```
Lelee ma palette agba m na-emezu ụkpụrụ WCAG AA. Enwere m agba primary #678233, agba ederede #ffffff, na ndabere #f5f5f5.
```

**Nsonaazụ:**
Ikike a na-akwado njikọta agba niile ma weghachite:
- ✅ Primary + Text: oke 5.2:1 (na-agafe WCAG AA)
- ✅ Background + Text: oke 12.1:1 (na-agafe WCAG AAA)
- N'ozuzu: Na-erube isi na WCAG AA

## Njikọ na Theme Builder {#integration-with-theme-builder}

Mgbe ị na-eji nhọrọ ntụziaka-imewe nke Theme Builder, ikike Validate Palette Contrast:

1. Na-enyocha palette agba ị họọrọ
2. Na-enyocha njikọta ederede-ndabere niile
3. Na-akwado megide ọkwa WCAG ị họọrọ
4. Na-enye aro maka ụzọ abụọ na-adịghị erube isi
5. Na-egbochi itinye usoro agba ndị na-adịghị enweta mfe

## Omume Kacha Mma {#best-practices}

- **Malite na ọkwa AA** — WCAG AA bụ ụkpụrụ maka ọtụtụ webụsaịtị
- **Nwalee tupu itinye** — kwado palette gị tupu ịkwado imewe
- **Lelee njikọta niile** — hụ na ederede, njikọ, na ihe UI niile na-emezu ụkpụrụ
- **Tụlee mmasị ndị ọrụ** — ụfọdụ ndị ọrụ nwere ike inwe mmetụta agba ọzọ
- **Jiri ndị nyocha nkwekọrịta** — jikọta ikike a na ngwá ọrụ nchọgharị maka nkwenye

## Ụzọ Abụọ Dara Ada na Aro {#failing-pairs-and-recommendations}

Ọ bụrụ na ụzọ abụọ agba adaa nkwado, ikike a na-enye aro:

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

## Ikike Ndị Metụtara {#related-abilities}

- [Mepụta Logo SVG](./generate-logo-svg.md) — mepụta logo jiri palette agba gị a kwadoro
- [Mepụta Menu](./create-menu.md) — wuo ngagharị na agba ndị nwere nnweta
