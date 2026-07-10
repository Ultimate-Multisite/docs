---
title: Waihanga SVG Waitohu
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Whakaputa Logo SVG {#generate-logo-svg}

Mā te āheinga **Whakaputa Logo SVG** ka taea e Theme Builder te waihanga me te tāmau i ngā SVG tohu waitohu ritenga ki tō pae WordPress me te whakahoromata aunoa e haumaru ana mō te namespace.

## Tirohanga whānui {#overview}

Ka whakaputa tēnei āheinga i ngā tohu waitohu whakairoiro pere arineine (SVG) i runga i te aronga waitohu me ngā manakohanga hoahoa o tō pae. Ka whakahoromatatia aunoatia ngā SVG kua whakaputaina kia haumaru ai mō te whakamahi ki WordPress, me te pupuri tonu i te tōtika ā-ataata.

## Ngā tawhā {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Āe | Te ingoa o te pae hei whakaputa i te tohu waitohu |
| `style` | string | Āe | Te kāhua hoahoa (hei tauira, "hou", "tawhito", "ngāwari", "tākaro") |
| `colors` | array | Kāo | He huinga waehere tae hex hei whakamahi ki te tohu waitohu (hei tauira, `["#678233", "#ffffff"]`) |
| `width` | number | Kāo | Te whānui SVG ki ngā pika (taunoa: 200) |
| `height` | number | Kāo | Te teitei SVG ki ngā pika (taunoa: 200) |
| `include_text` | boolean | Kāo | Me whakauru rānei te ingoa pae hei kuputuhi ki te tohu waitohu (taunoa: true) |

## Hōputu Huaputa {#output-format}

Ka whakahoki te āheinga i tētahi aho SVG me te hanganga e whai ake nei:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Whanonga Whakahoromata SVG {#svg-sanitisation-behaviour}

Ka whai ngā SVG kua whakaputaina i te whakahoromata aunoa e haumaru ana mō te namespace kia:

- **Tango i ngā huanga kāore i te haumaru** — ka unu i ngā pūwhāwhā takahanga, ngā hōtuhi, me ngā huanga pea he mōrearea
- **Pupuri i ngā namespace** — ka pupuri i ngā namespace SVG (xmlns, xlink) kia tika ai te whakaaturanga
- **Whakamana i te hanganga** — ka whakarite kia ū te SVG ki ngā paerewa W3C
- **Whakawaehere i ngā entities** — ka mawhiti tika i ngā pūāhua motuhake i roto i te ihirangi kuputuhi
- **Tango i ngā tohutoro ā-waho** — ka unu i ngā raukāhua ā-waho me ngā tohutoro atahanga

Mā konei ka haumaru te SVG kia tāmaua tōtika ki WordPress, me te kore e hiahiatia he whakahoromata anō.

## Tauira Whakamahi {#usage-example}

**Tohuaki:**
```
Whakaputaina he tohu waitohu hou mō taku tīmatanga hangarau e kīia ana ko "CloudSync", mā te whakamahi i ngā tae kikorangi me te mā.
```

**Hua:**
Ka waihanga te āheinga i tētahi tohu waitohu SVG e:
- Whakauru ana i te ingoa pae "CloudSync"
- Whakamahi ana i te kaupapa tae kikorangi me te mā kua tohua
- Whai ana i ngā mātāpono hoahoa hou
- Kua whakahoromatatia aunoatia, ā, kua rite mō te whakamahi

## Whakaurunga ki Theme Builder {#integration-with-theme-builder}

Ina whakamahi ana i te kōwhiringa aronga-hoahoa a Theme Builder, ka mahia e te āheinga Whakaputa Logo SVG:

1. Ka tātari i tō aronga hoahoa me tō papatae tae
2. Ka whakaputa i tētahi tohu waitohu SVG ritenga e hāngai ana ki ō manakohanga
3. Ka tāmau aunoa i te tohu waitohu ki te pane/wāhi waitohu o tō pae
4. Ka rokiroki i te SVG hei tohu waitohu ritenga ki te pāpāho WordPress

## Ngā Tikanga Pai {#best-practices}

- **Homai ngā manakohanga kāhua mārama** — whakaahuatia te kāhua hoahoa e hiahia ana koe (hou, tawhito, tākaro, aha atu)
- **Tohua ngā tae** — whakaurua ō tae waitohu kia ōrite tonu
- **Whakamātauria te whakaaturanga** — manatoko ka whakaaturia tika te tohu waitohu puta noa i ngā rahi mata rerekē
- **Whakaritea anō** — whakamahia ngā taputapu whakarite tohu waitohu a WordPress hei whakatika i te rahi me te tūnga

## Ngā Here {#limitations}

- Ka whakaputaina ngā tohu waitohu SVG hei whakairoiro pūmau (ehara i te whakakorikori)
- Tērā pea me whakapai ā-ringa ngā tohu waitohu matatini he maha ngā huānga
- Kāore ngā momotuhi ritenga i te tautokona; ka whakamahi te kuputuhi i ngā momotuhi pūnaha
- Ka pā pea ngā āhuatanga tino nui, tino iti rānei ki te kounga

## Ngā Āheinga E Hāngai Ana {#related-abilities}

- [Whakamana Rerekētanga Papatae](./validate-palette-contrast.md) — tirohia te rerekētanga tae mō te āheitanga
- [Waihanga Tahua](./create-menu.md) — waihanga i ngā tahua whakatere mō tō pae
