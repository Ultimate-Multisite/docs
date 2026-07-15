---
title: Sortu logotipoaren SVGa
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Sortu logoaren SVG

**Generate Logo SVG** gaitasunak Theme Builder-i logo SVG pertsonalizatuak sortu eta zuzenean zure WordPress gunean txertatzeko aukera ematen dio, namespace-ari dagokionez segurua den garbiketa automatikoarekin.

## Ikuspegi orokorra {#overview}

Gaitasun honek grafiko bektorial eskalagarriak (SVG) diren logoak sortzen ditu, zure gunearen marka-norabidean eta diseinu-lehentasunetan oinarrituta. Sortutako SVGak automatikoki garbitzen dira WordPress-en erabiltzeko seguruak direla ziurtatzeko, osotasun bisuala mantenduz.

## Parametroak {#parameters}

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|-----------|------|----------|-------------|
| `site_name` | string | Bai | Logoa sortu behar zaion gunearen izena |
| `style` | string | Bai | Diseinu-estiloa (adib., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ez | Logoan erabiltzeko hex kolore-kodeen arraya (adib., `["#678233", "#ffffff"]`) |
| `width` | number | Ez | SVGaren zabalera pixeletan (lehenetsia: 200) |
| `height` | number | Ez | SVGaren altuera pixeletan (lehenetsia: 200) |
| `include_text` | boolean | Ez | Gunearen izena logoan testu gisa sartu behar den ala ez (lehenetsia: true) |

## Irteera-formatua {#output-format}

Gaitasunak egitura hau duen SVG kate bat itzultzen du:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG garbiketaren portaera {#svg-sanitisation-behaviour}

Sortutako SVGek namespace-ari dagokionez segurua den garbiketa automatikoa jasaten dute, honako hauetarako:

- **Atributu ez-seguruak kentzea** — gertaera-kudeatzaileak, scriptak eta arriskutsuak izan daitezkeen atributuak kentzen ditu
- **Namespace-ak mantentzea** — SVG namespace-ak (xmlns, xlink) mantentzen ditu errendatze egokia lortzeko
- **Egitura baliozkotzea** — SVGak W3C estandarrak betetzen dituela ziurtatzen du
- **Entitateak kodetzea** — testu-edukiko karaktere bereziak behar bezala ihes egiten ditu
- **Kanpoko erreferentziak kentzea** — kanpoko estilo-orriak eta irudi-erreferentziak kentzen ditu

Honek ziurtatzen du SVG zuzenean WordPress-en txertatzeko segurua dela, garbiketa gehigarririk behar izan gabe.

## Erabilera-adibidea {#usage-example}

**Prompt:**
```
Sortu logo moderno bat "CloudSync" izeneko nire teknologia-startuparentzat, kolore urdinak eta zuriak erabiliz.
```

**Emaitza:**
Gaitasunak SVG logo bat sortzen du, eta honek:
- "CloudSync" gunearen izena barneratzen du
- Zehaztutako kolore urdin eta zurien eskema erabiltzen du
- Diseinu-printzipio modernoei jarraitzen die
- Automatikoki garbituta dago eta erabiltzeko prest

## Theme Builder-ekin integrazioa {#integration-with-theme-builder}

Theme Builder-en diseinu-norabidearen hautapena erabiltzean, Generate Logo SVG gaitasunak:

1. Zure diseinu-norabidea eta kolore-paleta aztertzen ditu
2. Zure lehentasunekin bat datorren SVG logo pertsonalizatua sortzen du
3. Logoa automatikoki txertatzen du zure gunearen goiburukoan/marka-eremuan
4. SVGa logo pertsonalizatu gisa gordetzen du WordPress mediatan

## Jardunbide egokiak {#best-practices}

- **Eman estilo-lehentasun argiak** — deskribatu nahi duzun diseinu-estiloa (modernoa, klasikoa, jostaria, etab.)
- **Zehaztu koloreak** — sartu zure markaren koloreak koherentzia lortzeko
- **Probatu errendatzea** — egiaztatu logoa behar bezala bistaratzen dela pantaila-tamaina desberdinetan
- **Pertsonalizatu gehiago** — erabili WordPress-en logoa pertsonalizatzeko tresnak tamaina eta kokapena doitzeko

## Mugak {#limitations}

- SVG logoak grafiko estatiko gisa sortzen dira (ez animatuak)
- Elementu asko dituzten logo konplexuek eskuzko fintzea behar izan dezakete
- Letra-tipo pertsonalizatuak ez dira onartzen; testuak sistemako letra-tipoak erabiltzen ditu
- Dimentsio oso handiek edo oso txikiek kalitatean eragina izan dezakete

## Lotutako gaitasunak {#related-abilities}

- [Baliozkotu paletaren kontrastea](./validate-palette-contrast.md) — egiaztatu kolore-kontrastea irisgarritasunerako
- [Sortu menua](./create-menu.md) — sortu nabigazio-menuak zure gunerako
