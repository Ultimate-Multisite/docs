---
title: Gadzira Chiratidzo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Gadzira Logo SVG

Kugona kwe**Gadzira Logo SVG** kunobvumira Theme Builder kugadzira uye kuisa maSVG echiratidzo akagadzirirwa iwe zvakananga musaiti yako yeWordPress nekucheneswa otomatiki kwakachengeteka kuma namespace.

## Pfupiso {#overview}

Kugona uku kunogadzira zviratidzo zve scalable vector graphics (SVG) zvichibva pagwara rebranding resaiti yako uye zvaunofarira padhizaini. MaSVG anogadzirwa anocheneswa otomatiki kuti ave nechokwadi chekuti akachengeteka kushandiswa muWordPress uku achichengetedza kuvimbika kwechitarisiko.

## Maparameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Hongu | Zita resaiti yaunoda kugadzirira chiratidzo |
| `style` | string | Hongu | Maitiro edhizaini (semuenzaniso, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Kwete | Array yemakodhi eruvara ehex anoshandiswa muchiratidzo (semuenzaniso, `["#678233", "#ffffff"]`) |
| `width` | number | Kwete | Upamhi hweSVG mumapikisesi (default: 200) |
| `height` | number | Kwete | Urefu hweSVG mumapikisesi (default: 200) |
| `include_text` | boolean | Kwete | Kuti zita resaiti ribatanidzwe semavara muchiratidzo here (default: true) |

## Chimiro cheZvinobuda {#output-format}

Kugona uku kunodzosa tambo yeSVG ine chimiro chinotevera:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Maitiro eKucheneswa kweSVG {#svg-sanitisation-behaviour}

MaSVG anogadzirwa anoitwa kucheneswa otomatiki kwakachengeteka kuma namespace kuti:

- **Kubvisa maattribute asina kuchengeteka** — kunobvisa event handlers, scripts, uye maattribute anogona kuva nenjodzi
- **Kuchengetedza namespaces** — kunochengetedza ma namespace eSVG (xmlns, xlink) kuti iratidzwe zvakanaka
- **Kuongorora chimiro** — kunovimbisa kuti SVG inoenderana nemiyero yeW3C
- **Kukodha entities** — kunobuda zvakanaka mavara akakosha ari muzviri mumavara
- **Kubvisa mareferensi ekunze** — kunobvisa external stylesheets nemareferensi emifananidzo

Izvi zvinovimbisa kuti SVG yakachengeteka kuiswa zvakananga muWordPress pasina kuda kumwe kucheneswa kwekuwedzera.

## Muenzaniso weKushandisa {#usage-example}

**Prompt:**
```
Gadzira chiratidzo chemazuva ano che tech startup yangu inonzi "CloudSync" uchishandisa mavara ebhuruu nechena.
```

**Mhedzisiro:**
Kugona uku kunogadzira chiratidzo cheSVG chino:
- Chinosanganisira zita resaiti "CloudSync"
- Chinoshandisa hurongwa hwemavara ebhuruu nechena hwatsanangurwa
- Chinotevera misimboti yedhizaini yemazuva ano
- Chinocheneswa otomatiki uye chagadzirira kushandiswa

## Kubatanidzwa neTheme Builder {#integration-with-theme-builder}

Paunenge uchishandisa kusarudza gwara redhizaini reTheme Builder, kugona kweGadzira Logo SVG:

1. Kunoongorora gwara rako redhizaini nepalette yemavara
2. Kunogadzira chiratidzo cheSVG chakagadzirirwa iwe chinoenderana nezvaunofarira
3. Kunoisa otomatiki chiratidzo munzvimbo yeheader/branding yesaiti yako
4. Kunochengeta SVG sechiratidzo chakagadzirirwa muWordPress media

## Maitiro Akanakisisa {#best-practices}

- **Ipa zvaunofarira padhizaini zvakajeka** — tsanangura maitiro edhizaini aunoda (modern, classic, playful, nezvimwewo)
- **Tsanangura mavara** — sanganisira mavara ebrand yako kuti pave nekuenderana
- **Edza kuratidzwa** — simbisa kuti chiratidzo chinoratidzwa zvakanaka pamasayizi akasiyana esikirini
- **Gadzirisa zvakare** — shandisa maturusi ekugadzirisa chiratidzo eWordPress kuti uchinje saizi nenzvimbo

## Zvipingamupinyi {#limitations}

- Zviratidzo zveSVG zvinogadzirwa semagirafiki asingachinji (haana animation)
- Zviratidzo zvakaoma zvine zvinhu zvakawanda zvinogona kuda kunatsiridzwa nemaoko
- Mafonti akagadzirirwa haatsigirwi; mavara anoshandisa system fonts
- Zviyero zvikuru kwazvo kana zvidiki kwazvo zvinogona kukanganisa mhando

## Kugona Kwakabatana {#related-abilities}

- [Ongorora Musiyano wePalette](./validate-palette-contrast.md) — tarisa musiyano wemavara kuti zviwanikwe nyore
- [Gadzira Menu](./create-menu.md) — gadzira mamenu ekufamba nawo esaiti yako
