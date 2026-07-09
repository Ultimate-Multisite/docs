---
title: Hlahisa SVG ea letšoao
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Hlahisa Letshwao la SVG {#generate-logo-svg}

Bokgoni ba **Hlahisa Letshwao la SVG** bo dumella Theme Builder ho bopa le ho kenya matshwao a SVG a ikgethileng ka kotloloho sebakeng sa hao sa WordPress ka ho hlwekiswa ho iketsang ho bolokehileng bakeng sa namespace.

## Kakaretso {#overview}

Bokgoni bona bo hlahisa matshwao a scalable vector graphics (SVG) a thehilweng hodima tataiso ya lebitso la sebaka sa hao le dikgetho tsa moralo. Di-SVG tse hlahisitsweng di hlwekiswa ka boiketsetso ho netefatsa hore di bolokehile bakeng sa tshebediso ho WordPress ha di ntse di boloka botshepehi ba ponahalo.

## Dipharamitha {#parameters}

| Pharamitha | Mofuta | E a hlokahala | Tlhaloso |
|-----------|------|----------|-------------|
| `site_name` | string | Ee | Lebitso la sebaka seo letshwao le lokelang ho hlahisetswa sona |
| `style` | string | Ee | Setaele sa moralo (mohl., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Tjhe | Lenane la dikhoutu tsa mebala ya hex tse tla sebediswa letshwaong (mohl., `["#678233", "#ffffff"]`) |
| `width` | number | Tjhe | Bophara ba SVG ka dipikselse (ya kamehla: 200) |
| `height` | number | Tjhe | Bophahamo ba SVG ka dipikselse (ya kamehla: 200) |
| `include_text` | boolean | Tjhe | Hore na ho kenngwe lebitso la sebaka e le mongolo letshwaong (ya kamehla: true) |

## Sebopeho sa Sephetho {#output-format}

Bokgoni bo kgutlisa kgwele ya SVG e nang le sebopeho se latelang:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Boitshwaro ba ho Hlwekisa SVG {#svg-sanitisation-behaviour}

Di-SVG tse hlahisitsweng di feta ho hlwekisweng ha boiketsetso ho bolokehileng bakeng sa namespace ho:

- **Tlosa dikarolo tse sa bolokehang** — e tlosa event handlers, scripts, le dikarolo tse ka bang kotsi
- **Boloka namespaces** — e boloka di-namespace tsa SVG (xmlns, xlink) bakeng sa ho bontshwa hantle
- **Netefatsa sebopeho** — e netefatsa hore SVG e latela maemo a W3C
- **Encode entities** — e balehisa ditlhaku tse ikgethileng ka nepo dikateng tsa mongolo
- **Tlosa ditshupiso tsa kantle** — e tlosa stylesheets tsa kantle le ditshupiso tsa ditshwantsho

Sena se netefatsa hore SVG e bolokehile ho kenngwa ka kotloloho ho WordPress ntle le ho hloka ho hlwekiswa ho eketsehileng.

## Mohlala wa Tshebediso {#usage-example}

**Prompt:**
```
Hlahisa letshwao la sejoale-joale bakeng sa tech startup ya ka e bitswang "CloudSync" o sebedisa mebala e putswa le e tshweu.
```

**Sephetho:**
Bokgoni bo bopa letshwao la SVG le:
- Kenyeletsang lebitso la sebaka "CloudSync"
- Sebedisang sekema sa mebala e putswa le e tshweu se boletsweng
- Latelang melao-motheo ya moralo wa sejoale-joale
- Hlwekisitsweng ka boiketsetso mme le loketse ho sebediswa

## Kopanyo le Theme Builder {#integration-with-theme-builder}

Ha o sebedisa kgetho ya tataiso ya moralo ya Theme Builder, bokgoni ba Hlahisa Letshwao la SVG bo:

1. Sekaseka tataiso ya hao ya moralo le palete ya mebala
2. Hlahisa letshwao la SVG le ikgethileng le tsamaisanang le dikgetho tsa hao
3. Kenya letshwao ka boiketsetso karolong ya hlooho/branding ya sebaka sa hao
4. Boloka SVG e le letshwao le ikgethileng ho media ya WordPress

## Mekgwa e Metle ka ho Fetisisa {#best-practices}

- **Fana ka dikgetho tsa setaele tse hlakileng** — hlalosa setaele sa moralo seo o se batlang (modern, classic, playful, jj.)
- **Bolela mebala** — kenyeletsa mebala ya brand ya hao bakeng sa botsitso
- **Leka ho bontshwa** — netefatsa hore letshwao le bontshwa ka nepo ho boholo bo fapaneng ba disekrine
- **Iketsetse diphetoho tse ding** — sebedisa disebediswa tsa WordPress tsa ho iketsetsa letshwao ho lokisa boholo le sebaka

## Meedi {#limitations}

- Matshwao a SVG a hlahiswa e le ditshwantsho tse sa sisinyeheng (ha a na animation)
- Matshwao a rarahaneng a nang le dikarolo tse ngata a ka hloka ntlafatso ya letsoho
- Difonte tse ikgethileng ha di tshehetswe; mongolo o sebedisa difonte tsa sistimi
- Dikganyo tse kgolo haholo kapa tse nyane haholo di ka ama boleng

## Bokgoni bo Amanang {#related-abilities}

- [Netefatsa Phapang ya Palete](./validate-palette-contrast.md) — hlahloba phapang ya mebala bakeng sa phihlello
- [Bopa Menu](./create-menu.md) — bopa dimenu tsa ho tsamaya bakeng sa sebaka sa hao
