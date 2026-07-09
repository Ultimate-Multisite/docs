---
title: Búa til SVG-lógó
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Búa til Logo SVG {#generate-logo-svg}

Getan **Generate Logo SVG** gerir Theme Builder kleift að búa til og fella sérsniðin logo SVG beint inn á WordPress vefinn þinn með sjálfvirkri hreinsun sem er örugg gagnvart nafnrýmum.

## Yfirlit {#overview}

Þessi geta býr til skalanleg vektorgrafík (SVG) fyrir logo út frá vörumerkjastefnu og hönnunaróskum vefsins þíns. SVG-in sem eru búin til eru sjálfkrafa hreinsuð til að tryggja að þau séu örugg til notkunar í WordPress, án þess að skerða sjónræna heild.

## Færibreytur {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Nafn vefsins sem á að búa til logo fyrir |
| `style` | string | Yes | Hönnunarstíllinn (t.d. „modern“, „classic“, „minimalist“, „playful“) |
| `colors` | array | No | Fylki af hex-litakóðum til að nota í logo-inu (t.d. `["#678233", "#ffffff"]`) |
| `width` | number | No | SVG-breidd í pixlum (sjálfgefið: 200) |
| `height` | number | No | SVG-hæð í pixlum (sjálfgefið: 200) |
| `include_text` | boolean | No | Hvort eigi að hafa nafn vefsins sem texta í logo-inu (sjálfgefið: true) |

## Úttakssnið {#output-format}

Getan skilar SVG-streng með eftirfarandi uppbyggingu:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Hegðun SVG-hreinsunar {#svg-sanitisation-behaviour}

SVG-in sem eru búin til fara í gegnum sjálfvirka hreinsun sem er örugg gagnvart nafnrýmum til að:

- **Fjarlægja óörugg eigindi** — fjarlægir atvikameðhöndlara, forskriftir og mögulega hættuleg eigindi
- **Varðveita nafnrými** — heldur SVG-nafnrýmum (xmlns, xlink) fyrir rétta birtingu
- **Staðfesta uppbyggingu** — tryggir að SVG samræmist W3C-stöðlum
- **Kóða einingar** — umbreytir sértáknum rétt í textainnihaldi
- **Fjarlægja ytri tilvísanir** — fjarlægir ytri stílsíður og myndatilvísanir

Þetta tryggir að SVG sé öruggt að fella beint inn í WordPress án þess að krefjast viðbótarhreinsunar.

## Notkunardæmi {#usage-example}

**Prompt:**
```
Búðu til nútímalegt logo fyrir tæknisprotafyrirtækið mitt sem heitir „CloudSync“ með bláum og hvítum litum.
```

**Niðurstaða:**
Getan býr til SVG-logo sem:
- Fellir inn nafn vefsins „CloudSync“
- Notar tilgreinda bláa og hvíta litasamsetningu
- Fylgir nútímalegum hönnunarreglum
- Er sjálfkrafa hreinsað og tilbúið til notkunar

## Samþætting við Theme Builder {#integration-with-theme-builder}

Þegar val á hönnunarstefnu í Theme Builder er notað, gerir Generate Logo SVG-getan eftirfarandi:

1. Greinir hönnunarstefnuna þína og litapallettu
2. Býr til sérsniðið SVG-logo sem passar við óskirnar þínar
3. Fellir logo-ið sjálfkrafa inn í haus-/vörumerkjasvæði vefsins þíns
4. Geymir SVG sem sérsniðið logo í WordPress miðlum

## Bestu starfsvenjur {#best-practices}

- **Gefðu skýrar stílóskir** — lýstu hönnunarstílnum sem þú vilt (nútímalegur, klassískur, leikandi o.s.frv.)
- **Tilgreindu liti** — láttu vörumerkjalitina þína fylgja með til að tryggja samræmi
- **Prófaðu birtingu** — staðfestu að logo-ið birtist rétt á mismunandi skjástærðum
- **Sérsníddu frekar** — notaðu logo-sérsniðstól WordPress til að stilla stærð og staðsetningu

## Takmarkanir {#limitations}

- SVG-logo eru búin til sem kyrrstæð grafík (ekki hreyfimyndir)
- Flókin logo með mörgum einingum gætu krafist handvirkrar fínstillingar
- Sérsniðin letur eru ekki studd; texti notar kerfisletur
- Mjög stórar eða mjög litlar stærðir geta haft áhrif á gæði

## Tengdar getu {#related-abilities}

- [Staðfesta andstæðu litapallettu](./validate-palette-contrast.md) — athuga litaskil með tilliti til aðgengis
- [Búa til valmynd](./create-menu.md) — búa til leiðsagnarvalmyndir fyrir vefinn þinn
