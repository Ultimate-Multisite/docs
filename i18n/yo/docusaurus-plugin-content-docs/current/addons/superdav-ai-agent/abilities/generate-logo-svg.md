---
title: Ṣẹda Aami SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Ṣẹda Aami SVG

Agbara **Ṣẹda Aami SVG** jẹ́ kí Theme Builder lè ṣẹ̀dá àti fi àwọn SVG aami àkànṣe sínú site WordPress rẹ taara pẹ̀lú ìwẹ̀numọ́ aládàáṣiṣẹ́ tó ní ààbò fún namespace.

## Àkótán {#overview}

Agbara yìí máa ń ṣẹ̀dá àwọn aami scalable vector graphics (SVG) tó dá lórí ìtọ́sọ́nà branding site rẹ àti àwọn ohun tí o fẹ́ nínú design. Àwọn SVG tí a ṣẹ̀dá ni a máa ń wẹ̀ mọ́ aládàáṣiṣẹ́ láti rí i dájú pé wọ́n ní ààbò fún lílò nínú WordPress nígbà tí wọ́n ṣì ń pa ìdúróṣinṣin ojú-hàn mọ́.

## Àwọn Paramita {#parameters}

| Paramita | Iru | Dandan | Apejuwe |
|-----------|------|----------|-------------|
| `site_name` | string | Bẹ́ẹ̀ni | Orúkọ site tí a fẹ́ ṣẹ̀dá aami fún |
| `style` | string | Bẹ́ẹ̀ni | Ara design (f.a., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Rárá | Àkójọpọ̀ àwọn kóòdù àwọ̀ hex láti lò nínú aami (f.a., `["#678233", "#ffffff"]`) |
| `width` | number | Rárá | Ìbú SVG ní pixels (àiyipada: 200) |
| `height` | number | Rárá | Gíga SVG ní pixels (àiyipada: 200) |
| `include_text` | boolean | Rárá | Bóyá kí orúkọ site wà gẹ́gẹ́ bí ọ̀rọ̀ nínú aami (àiyipada: true) |

## Fọ́ọ̀mù Àbájáde {#output-format}

Agbara náà máa ń dá okùn SVG padà pẹ̀lú ètò yìí:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Ìhùwàsí Ìwẹ̀numọ́ SVG {#svg-sanitisation-behaviour}

Àwọn SVG tí a ṣẹ̀dá máa ń gba ìwẹ̀numọ́ aládàáṣiṣẹ́ tó ní ààbò fún namespace láti:

- **Yọ àwọn attributes tí kò ní ààbò kúrò** — yọ àwọn event handlers, scripts, àti attributes tó lè léwu kúrò
- **Pa namespaces mọ́** — mú kí àwọn namespaces SVG (xmlns, xlink) dúró fún fífi hàn tó péye
- **Ṣàyẹ̀wò ètò** — rí i dájú pé SVG bá àwọn ìlànà W3C mu
- **Encode entities** — sá àwọn àmì pàtàkì nínú àkóónú ọ̀rọ̀ bó ṣe yẹ
- **Yọ àwọn ìtọ́kasí òde kúrò** — yọ àwọn stylesheets àti ìtọ́kasí àwòrán òde kúrò

Èyí rí i dájú pé SVG náà ní ààbò láti fi sínú WordPress taara láì nílò ìwẹ̀numọ́ míì.

## Àpẹẹrẹ Lílò {#usage-example}

**Prompt:**
```
Ṣẹ̀dá aami òde-òní fún tech startup mi tí a ń pè ní "CloudSync" ní lílo àwọn àwọ̀ buluu àti funfun.
```

**Àbájáde:**
Agbara náà ṣẹ̀dá aami SVG kan tó:
- Fi orúkọ site "CloudSync" sínú rẹ
- Lo ètò àwọ̀ buluu àti funfun tí a sọ
- Tẹ̀lé àwọn ìlànà design òde-òní
- Ti gba ìwẹ̀numọ́ aládàáṣiṣẹ́, ó sì ti ṣe tán fún lílò

## Ìṣepọ̀ pẹ̀lú Theme Builder {#integration-with-theme-builder}

Nígbà tí o bá ń lo yíyan ìtọ́sọ́nà-design ti Theme Builder, agbara Ṣẹda Aami SVG:

1. Ṣe àyẹ̀wò ìtọ́sọ́nà design rẹ àti palette àwọ̀ rẹ
2. Ṣẹ̀dá aami SVG àkànṣe tó bá àwọn ohun tí o fẹ́ mu
3. Fi aami náà sínú header/agbegbe branding site rẹ aládàáṣiṣẹ́
4. Tọ́jú SVG náà gẹ́gẹ́ bí aami àkànṣe nínú media WordPress

## Àwọn Ìlànà Tó Dára Jù {#best-practices}

- **Pèsè àwọn ohun tí o fẹ́ nípa style kedere** — ṣàpèjúwe ara design tí o fẹ́ (òde-òní, clásico, alárinrin, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ)
- **Sọ àwọn àwọ̀ pàtó** — fi àwọn àwọ̀ brand rẹ kún un fún ìbámu
- **Dán fífi hàn wò** — jẹ́rìí pé aami náà hàn dáadáa lórí oríṣìíríṣìí ìwọn iboju
- **Ṣe àkànṣe sí i** — lo àwọn irinṣẹ́ àtúnṣe aami ti WordPress láti ṣàtúnṣe ìwọn àti ibi tí a gbe e sí

## Àwọn Ààlà {#limitations}

- Àwọn aami SVG ni a ṣẹ̀dá gẹ́gẹ́ bí graphics tí kò ń rìn (kì í ṣe animated)
- Àwọn aami tó díjú pẹ̀lú ọ̀pọ̀ elements lè nílò ìtúnṣe ọwọ́
- A kò ṣe àtìlẹ́yìn fún fonts àkànṣe; ọ̀rọ̀ máa ń lo fonts system
- Àwọn ìwọ̀n tó tóbi gan-an tàbí tó kéré gan-an lè ní ipa lórí didara

## Àwọn Agbara Tó Jọmọ́ {#related-abilities}

- [Ṣàyẹ̀wò Contrast Palette](./validate-palette-contrast.md) — ṣàyẹ̀wò contrast àwọ̀ fún accessibility
- [Ṣẹ̀dá Menu](./create-menu.md) — ṣẹ̀dá àwọn menu navigation fún site rẹ
