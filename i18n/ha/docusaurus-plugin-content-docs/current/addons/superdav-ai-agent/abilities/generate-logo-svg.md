---
title: Ƙirƙiri Tambarin SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Samar da Logo SVG {#generate-logo-svg}

Ikon **Generate Logo SVG** yana ba Theme Builder damar ƙirƙira da saka logo SVG na musamman kai tsaye cikin shafin WordPress ɗinka tare da tsabtacewa ta atomatik mai aminci ga namespace.

## Bayani Gabaɗaya {#overview}

Wannan iko yana samar da logos na scalable vector graphics (SVG) bisa alkiblar branding na shafinka da zaɓin ƙira. SVGs da aka samar ana tsabtace su ta atomatik don tabbatar da cewa suna da aminci don amfani a WordPress yayin da ake kiyaye ingancin gani.

## Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Sunan shafin da za a samar masa da logo |
| `style` | string | Yes | Salon ƙira (misali, "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Jerin lambobin launin hex da za a yi amfani da su a cikin logo (misali, `["#678233", "#ffffff"]`) |
| `width` | number | No | Faɗin SVG a pixels (tsoho: 200) |
| `height` | number | No | Tsayin SVG a pixels (tsoho: 200) |
| `include_text` | boolean | No | Ko a haɗa sunan shafin a matsayin rubutu a cikin logo (tsoho: true) |

## Tsarin Fitarwa {#output-format}

Ikon yana dawo da string na SVG tare da tsarin nan:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Halin Tsabtace SVG {#svg-sanitisation-behaviour}

SVGs da aka samar suna bi ta tsabtacewa ta atomatik mai aminci ga namespace don:

- **Cire attributes marasa aminci** — yana cire event handlers, scripts, da attributes masu yiwuwar haɗari
- **Kiyaye namespaces** — yana riƙe namespaces na SVG (xmlns, xlink) don nuna su yadda ya kamata
- **Tabbatar da tsari** — yana tabbatar da SVG ya dace da ƙa'idodin W3C
- **Encode entities** — yana escape na musamman characters cikin abun cikin rubutu yadda ya kamata
- **Cire nassoshi na waje** — yana cire stylesheets na waje da nassoshin hoto

Wannan yana tabbatar da SVG na da aminci a saka shi kai tsaye cikin WordPress ba tare da buƙatar ƙarin tsabtacewa ba.

## Misalin Amfani {#usage-example}

**Prompt:**
```
Samar da logo na zamani don tech startup dina mai suna "CloudSync" ta amfani da launuka shuɗi da fari.
```

**Sakamako:**
Ikon yana ƙirƙirar logo SVG wanda:
- Ya haɗa sunan shafin "CloudSync"
- Yana amfani da tsarin launuka shuɗi da fari da aka ayyana
- Yana bin ƙa'idodin ƙira na zamani
- An tsabtace shi ta atomatik kuma yana shirye don amfani

## Haɗawa da Theme Builder {#integration-with-theme-builder}

Lokacin amfani da zaɓin alkiblar ƙira na Theme Builder, ikon Generate Logo SVG:

1. Yana nazarin alkiblar ƙirarka da palette ɗin launuka
2. Yana samar da logo SVG na musamman da ya dace da zaɓinka
3. Yana saka logo ta atomatik cikin header/branding area na shafinka
4. Yana adana SVG a matsayin logo na musamman a WordPress media

## Kyawawan Hanyoyi {#best-practices}

- **Bayar da zaɓin salo a sarari** — bayyana salon ƙira da kake so (modern, classic, playful, da sauransu)
- **Ayyana launuka** — haɗa launukan brand ɗinka don daidaito
- **Gwada nunawa** — tabbatar logo yana bayyana daidai a kan girman allo daban-daban
- **Ƙara gyare-gyare** — yi amfani da kayan aikin gyaran logo na WordPress don daidaita girma da matsayi

## Iyakoki {#limitations}

- Ana samar da logos na SVG a matsayin hotunan static (ba animated ba)
- Logos masu rikitarwa da abubuwa da yawa na iya buƙatar gyaran hannu
- Ba a goyon bayan custom fonts; rubutu yana amfani da fonts na tsarin
- Girma masu matuƙar yawa ko ƙanƙanta na iya shafar inganci

## Ikoki Masu Alaƙa {#related-abilities}

- [Tabbatar da Bambancin Palette](./validate-palette-contrast.md) — duba bambancin launi don samun sauƙin amfani
- [Ƙirƙiri Menu](./create-menu.md) — ƙirƙiri menus na kewayawa don shafinka
