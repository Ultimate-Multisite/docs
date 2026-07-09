---
title: Abuur Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Samee Logo SVG

Awoodda **Samee Logo SVG** waxay Theme Builder u oggolaanaysaa inuu abuuro oo si toos ah ugu dhex daro logo SVGyo gaar ah site-kaaga WordPress, iyadoo leh nadiifin otomaatig ah oo namespace-safe ah.

## Dulmar

Awooddani waxay abuurtaa logos scalable vector graphics (SVG) ah oo ku salaysan jihada sumadeynta site-kaaga iyo doorbidyada naqshadda. SVGyada la abuuray si otomaatig ah ayaa loo nadiifiyaa si loo hubiyo inay ammaan u yihiin isticmaalka WordPress, iyadoo la ilaalinayo daacadnimada muuqaalka.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Magaca site-ka loo abuurayo logo-ga |
| `style` | string | Yes | Qaabka naqshadda (tusaale, "casri", "caadi", "minimalist", "ciyaar leh") |
| `colors` | array | No | Array ka kooban koodhadh midab hex ah oo lagu isticmaalo logo-ga (tusaale, `["#678233", "#ffffff"]`) |
| `width` | number | No | Ballaca SVG ee pixels (default: 200) |
| `height` | number | No | Dhererka SVG ee pixels (default: 200) |
| `include_text` | boolean | No | In magaca site-ka loogu daro qoraal ahaan logo-ga (default: true) |

## Qaabka Wax-soo-saarka

Awooddu waxay soo celisaa xarig SVG ah oo leh qaab-dhismeedka soo socda:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Hab-dhaqanka Nadiifinta SVG

SVGyada la abuuray waxay maraan nadiifin otomaatig ah oo namespace-safe ah si loo:

- **Saarto attributes aan ammaan ahayn** — waxay ka saartaa event handlers, scripts, iyo attributes laga yaabo inay khatar yihiin
- **Ilaaliso namespaces** — waxay ilaalisaa SVG namespaces (xmlns, xlink) si rendering-ku u saxnaado
- **Xaqiijiso qaab-dhismeedka** — waxay hubisaa in SVG-gu waafaqsan yahay heerarka W3C
- **Encode-gareyso entities** — si sax ah ayay uga baxsisaa xarfo gaar ah oo ku jira nuxurka qoraalka
- **Saarto tixraacyada dibadda** — waxay ka saartaa stylesheets iyo tixraacyada sawirrada ee dibadda

Tani waxay hubisaa in SVG-gu ammaan u yahay in si toos ah loogu dhex daro WordPress adigoon u baahnayn nadiifin dheeraad ah.

## Tusaalaha Isticmaalka

**Prompt:**
```
U samee logo casri ah startup-kayga tech ee la yiraahdo "CloudSync" adigoo isticmaalaya midabbada buluug iyo caddaan.
```

**Natiijo:**
Awooddu waxay abuurtaa logo SVG ah oo:
- Ku dara magaca site-ka "CloudSync"
- Isticmaala nidaamka midabbada buluugga iyo caddaanka ee la cayimay
- Raaca mabaa'diida naqshadda casriga ah
- Si otomaatig ah loo nadiifiyay oo diyaar u ah isticmaal

## Isku-darka Theme Builder

Markaad isticmaalayso xulashada jihada-naqshadda ee Theme Builder, awoodda Samee Logo SVG waxay:

1. Falanqaysaa jihada naqshaddaada iyo palette-ka midabbada
2. Abuurtaa logo SVG gaar ah oo ku habboon doorbidyadaada
3. Si otomaatig ah ugu dhex dartaa logo-ga aagga header/branding ee site-kaaga
4. U kaydisaa SVG-ga sida logo gaar ah oo ku jira WordPress media

## Hababka Ugu Fiican

- **Bixi doorbidyo qaab oo cad** — sharax qaabka naqshadda aad rabto (casri, caadi, ciyaar leh, iwm.)
- **Cayim midabbada** — ku dar midabbada brand-kaaga si joogteyn loo helo
- **Tijaabi rendering-ka** — xaqiiji in logo-gu si sax ah uga muuqdo cabbirro shaashad oo kala duwan
- **Sii habee** — isticmaal qalabka habaynta logo-ga ee WordPress si aad u hagaajiso cabbirka iyo meelaynta

## Xaddidaadaha

- Logo-yada SVG waxaa loo abuuraa sida garaafyo static ah (ma aha animated)
- Logo-yo adag oo leh qaybo badan ayaa laga yaabaa inay u baahdaan hagaajin gacanta ah
- Fonts gaar ah lama taageero; qoraalku wuxuu isticmaalaa fonts-ka system-ka
- Cabbirro aad u waaweyn ama aad u yaryar waxay saameyn karaan tayada

## Awoodaha La Xiriira

- [Xaqiiji Isbarbardhigga Palette-ka](./validate-palette-contrast.md) — hubi isbarbardhigga midabka si accessibility loo helo
- [Abuur Menu](./create-menu.md) — u abuur menus navigation site-kaaga
