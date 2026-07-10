---
title: Tengeneza Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Kutengeneza Logo ya SVG {#generate-logo-svg}

Uwezo wa **Kutengeneza Logo ya SVG** unaruhusu Theme Builder kutengeneza na kuingiza logo za SVG za kipekee moja kwa moja kwenye tovuti yako ya WordPress, huku ukifanya usafishaji wa kiotomatiki ili kuhakikisha usalama wa jina (namespace-safe sanitisation).

## Muhtasari {#overview}

Uwezo huu unatengeneza logo za grafiki za vector zinazopanuka (SVG) kulingana na mwelekeo wa chapa (branding) na mapendeleo yako ya usanifu wa tovuti. SVG zilizotengenezwa hizi hinasafishwa kiotomatiki kuhakikisha ni salama kutumika kwenye WordPress huku zikiweka ubora wa kuonekana.

## Vigezo {#parameters}

| Kigezo | Aina | Lazima | Maelezo |
|---|---|---|---|
| `site_name` | string | Ndiyo | Jina la tovuti ambayo logo itatengenezwa |
| `style` | string | Ndiyo | Mtindo wa usanifu (k.m., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Hapana | Orodha ya msimbo wa rangi (hex) za kutumia kwenye logo (k.m., `["#678233", "#ffffff"]`) |
| `width` | number | Hapana | Upana wa SVG kwa pikseli (kiwango: 200) |
| `height` | number | Hapana | Urefu wa SVG kwa pikseli (kiwango: 200) |
| `include_text` | boolean | Hapana | Kama kuingiza jina la tovuti kama maandishi kwenye logo (kiwango: true) |

## Muundo wa Matokeo {#output-format}

Uwezo huu unarudisha (return) msimbo wa SVG wenye muundo ufuatao:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Utaratibu wa Kusafisha SVG {#svg-sanitisation-behaviour}

SVG zilizotengenezwa hizi hupitia usafishaji kiotomatiki ili kuhakikisha usalama wa nafasi ya jina (namespace-safe sanitisation) kwa:

- **Kuondoa sifa zisizo salama** — zinasafisha vifuatilia matukio (event handlers), scripts, na sifa zingine zenye hatari.
- **Kuhifadhi nafasi za jina** — zinadumisha nafasi za jina za SVG (xmlns, xlink) ili kuonyeshwa vizuri.
- **Kuthibitisha muundo** — zinahakikisha kuwa SVG inazingatia viwango vya W3C.
- **Kuandika entiti** — zinapunguza kwa usahihi herufi maalum katika maandishi.
- **Kuondoa marejeo ya nje** — zinasafisha karatasi za mitindo (stylesheets) na marejeo ya picha kutoka nje.

Hii inahakikisha kuwa SVG ni salama kuingizwa moja kwa moja kwenye WordPress bila kuhitaji usafishaji wowote wa ziada.

## Mfano wa Matumizi {#usage-example}

**Ombi:**
```
Tengeneza logo ya kisasa kwa kampuni yangu ya teknolojia inayoitwa "CloudSync" kwa kutumia rangi za bluu na nyeupe.
```

**Matokeo:**
Uwezo huu unaunda logo ya SVG ambayo:
- Inajumuisha jina la tovuti "CloudSync"
- Inatumia rangi za bluu na nyeupe zilizotajwa
- Inafuata kanuni za usanifu wa kisasa
- Imesafishwa kiotomatiki na tayari kwa matumizi

## Uunganishaji na Theme Builder {#integration-with-theme-builder}

Unapotumia uchaguzi wa mwelekeo wa usanifu (design-direction selection) wa Theme Builder, uwezo wa Kutengeneza Logo ya SVG:

1. Unachanganua mwelekeo wa usanifu na rangi za chapa yako.
2. Unatengeneza logo ya SVG ya kipekee inayolingana na mapendeleo yako.
3. Inaingizwa kiotomatiki kwenye eneo la kichwa/chapa ya tovuti yako.
4. Inahifadhi SVG kama logo maalum kwenye media ya WordPress.

## Mazoea Bora {#best-practices}

- **Toa mapendeleo ya mtindo wazi** — elezea mtindo wa usanifu unaohitaji (kisasa, wa kihistoria, wa kuchezea, n.k.).
- **Taja rangi** — jumuisha rangi za chapa yako kwa ushirikiano.
- **Jaribu kuonyesha** — thibitisha kuwa logo inaonekana vizuri kwenye ukubwa tofauti wa skrini.
- **Badilisha zaidi** — tumia zana za kubadilisha logo za WordPress ili kurekebisha ukubwa na nafasi.

## Mapungufu {#limitations}

- Logo za SVG hutengenezwa kama grafiki za kimakumi (si za kuchezewa/animated).
- Logo tata zenye vipengele vingi zinaweza kuhitaji marekebisho ya mikono.
- Fonts za kipekee hazisafishwa; maandishi hutumia fonts za mfumo.
- Vipimo vikubwa sana au vidogo sana vinaweza kuathiri ubora.

## Uwezo Zinazohusiana {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — angalia tofauti ya rangi kwa ajili ya uwezo wa kuona.
- [Create Menu](./create-menu.md) — tengeneza menyu za urambazaji kwa tovuti yako
