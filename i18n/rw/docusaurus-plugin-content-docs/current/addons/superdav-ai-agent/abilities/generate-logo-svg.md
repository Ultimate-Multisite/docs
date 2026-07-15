---
title: Hanga Ikirango SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Gukora Logo SVG

Ubushobozi bwa **Generate Logo SVG** butuma Theme Builder ikora kandi igashyira logo SVG zabugenewe mu buryo butaziguye muri site yawe ya WordPress, hamwe no kuzisukura mu buryo bwikora burinda namespace.

## Incamake {#overview}

Ubu bushobozi bukora logo za scalable vector graphics (SVG) hashingiwe ku cyerekezo cy’ikirango cya site yawe n’ibyo ukunda mu migaragarire. SVG zakozwe zisukurwa mu buryo bwikora kugira ngo zibe zitekanye gukoreshwa muri WordPress, ari na ko zigumana ubuziranenge bw’imigaragarire.

## Ibipimo {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Izina rya site igomba gukorerwa logo |
| `style` | string | Yes | Imiterere y’igishushanyo (urugero, "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Urutonde rwa kode z’amabara ya hex zo gukoresha muri logo (urugero, `["#678233", "#ffffff"]`) |
| `width` | number | No | Ubugari bwa SVG muri pixels (mburabuzi: 200) |
| `height` | number | No | Uburebure bwa SVG muri pixels (mburabuzi: 200) |
| `include_text` | boolean | No | Niba gushyiramo izina rya site nk’umwandiko muri logo (mburabuzi: true) |

## Imiterere y’Ibisohoka {#output-format}

Ubu bushobozi busubiza umugozi wa SVG ufite imiterere ikurikira:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Imyitwarire yo Gusukura SVG {#svg-sanitisation-behaviour}

SVG zakozwe zinyura mu isukurwa ryikora ririnda namespace kugira ngo:

- **Zikureho attributes zidatekanye** — zikuraho event handlers, scripts, na attributes zishobora guteza akaga
- **Zigumane namespaces** — zigumana namespaces za SVG (xmlns, xlink) kugira ngo zigaragare neza
- **Zigenzure imiterere** — zemeza ko SVG yubahiriza amabwiriza ya W3C
- **Zikode entities** — zihunga neza inyuguti zihariye mu bikubiye mu mwandiko
- **Zikureho references zo hanze** — zikuraho stylesheets zo hanze na references z’amashusho

Ibi byemeza ko SVG itekanye kuyishyira mu buryo butaziguye muri WordPress bitabaye ngombwa isukurwa ry’inyongera.

## Urugero rw’Imikoreshereze {#usage-example}

**Prompt:**
```
Kora logo igezweho ya tech startup yanjye yitwa "CloudSync" ukoresheje amabara y’ubururu n’umweru.
```

**Igisubizo:**
Ubu bushobozi bukora logo ya SVG:
- Irimo izina rya site "CloudSync"
- Ikoresha gahunda y’amabara y’ubururu n’umweru yagaragajwe
- Ikurikiza amahame y’imigaragarire igezweho
- Isukurwa mu buryo bwikora kandi iba yiteguye gukoreshwa

## Kwinjiza hamwe na Theme Builder {#integration-with-theme-builder}

Iyo ukoresha ihitamo ry’icyerekezo cy’imigaragarire rya Theme Builder, ubushobozi bwa Generate Logo SVG:

1. Busesengura icyerekezo cy’imigaragarire yawe n’urutonde rw’amabara
2. Bukora logo SVG yabugenewe ihuye n’ibyo ukunda
3. Bushyira logo mu buryo bwikora mu gice cya header/branding cya site yawe
4. Bubika SVG nka logo yabugenewe muri media ya WordPress

## Imikorere Myiza {#best-practices}

- **Tanga neza ibyo ukunda mu buryo bw’imiterere** — sobanura imiterere y’igishushanyo ushaka (modern, classic, playful, n’ibindi)
- **Garagaza amabara** — shyiramo amabara y’ikirango cyawe kugira ngo hagumane ubudahinduka
- **Gerageza uko igaragara** — genzura ko logo igaragara neza ku ngano zitandukanye za screen
- **Yitunganye kurushaho** — koresha ibikoresho bya WordPress byo gutunganya logo kugira ngo uhindure ingano n’aho ishyirwa

## Imipaka {#limitations}

- Logo za SVG zikorwa nk’ibishushanyo bidahindagurika (ntizinyeganyega)
- Logo zigoye zifite ibice byinshi zishobora gukenera kunozwa n’intoki
- Fonts zabugenewe ntizishyigikiwe; umwandiko ukoresha system fonts
- Ingano nini cyane cyangwa nto cyane zishobora kugira ingaruka ku bwiza

## Ubushobozi Bujyanye {#related-abilities}

- [Kugenzura Contrast y’Urutonde rw’Amabara](./validate-palette-contrast.md) — genzura contrast y’amabara kugira ngo bibe byoroshye kugerwaho
- [Gukora Menu](./create-menu.md) — kora menus z’inzira zo kunyuramo za site yawe
