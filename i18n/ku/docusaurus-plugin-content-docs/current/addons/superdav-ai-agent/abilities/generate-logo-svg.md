---
title: SVG ya logoyê çêbike
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG çêbike

Karîna **Logo SVG çêbike** dihêle ku Theme Builder logo SVG-yên taybet rasterast di nav malpera te ya WordPress de çêbike û bi paqijkirina otomatîk a ewle ji bo namespace têxe hundir.

## Têgihiştin

Ev karîn li gorî arasteya branding a malpera te û tercîhên sêwiranê logo-yên scalable vector graphics (SVG) çêdike. SVG-yên çêkirî bi awayekî otomatîk tên paqijkirin da ku ji bo bikaranînê di WordPress de ewle bin, di heman demê de yekparetiya dîtbarî biparêzin.

## Parametre

| Parametre | Cure | Pêwîst | Danasîn |
|-----------|------|----------|-------------|
| `site_name` | string | Erê | Navê malperê ku logo ji bo wê were çêkirin |
| `style` | string | Erê | Şêwaza sêwiranê (mînak, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Na | Rêza kodên rengê hex ku di logo de werin bikaranîn (mînak, `["#678233", "#ffffff"]`) |
| `width` | number | Na | Firehiya SVG bi pixelan (standard: 200) |
| `height` | number | Na | Bilindiya SVG bi pixelan (standard: 200) |
| `include_text` | boolean | Na | Ma navê malperê wek nivîs di logo de were têxistin an na (standard: true) |

## Forma derketinê

Ev karîn stringek SVG bi vê avahiyê vedigerîne:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Tevgera paqijkirina SVG

SVG-yên çêkirî di bin paqijkirina otomatîk a ewle ji bo namespace re derbas dibin da ku:

- **Taybetmendiyên neewle rake** — event handler, script û taybetmendiyên ku dibe xeternak bin jê dike
- **Namespace biparêze** — namespace-yên SVG (xmlns, xlink) ji bo nîşandana rast diparêze
- **Avahiyê piştrast bike** — piştrast dike ku SVG li gorî standardên W3C be
- **Entity kod bike** — karakterên taybet di naveroka nivîsê de bi awayekî rast escape dike
- **Referansên derveyî rake** — stylesheet û referansên wêneyan ên derveyî jê dike

Ev yek piştrast dike ku SVG ewle ye ku bêyî pêwîstiya paqijkirina zêde rasterast di WordPress de were têxistin.

## Mînaka bikaranînê

**Daxwaz:**
```
Ji bo startup-a min a teknolojiyê ya bi navê "CloudSync" bi rengên şîn û spî logoyek modern çêbike.
```

**Encam:**
Ev karîn logoyek SVG çêdike ku:
- Navê malperê "CloudSync" tê de bi cih dike
- Plana rengên şîn û spî ya diyarbûyî bi kar tîne
- Li gorî prensîbên sêwirana modern diçe
- Bi awayekî otomatîk tê paqijkirin û ji bo bikaranînê amade ye

## Yekbûn bi Theme Builder re

Dema ku hilbijartina arasteya sêwiranê ya Theme Builder tê bikaranîn, karîna Logo SVG çêbike:

1. Arasteya sêwiranê û paletteya rengên te analîz dike
2. Logoyek SVG a taybet ku bi tercîhên te re li hev tê çêdike
3. Logo bi awayekî otomatîk dixe nav devera header/branding a malpera te
4. SVG wek logoyek taybet di medya WordPress de tomar dike

## Rêbazên herî baş

- **Tercîhên şêwazê bi zelalî bide** — şêwaza sêwiranê ya ku dixwazî binivîse (modern, classic, playful, hwd.)
- **Rengan diyar bike** — ji bo yekrengiyê rengên brand-a xwe têxe nav
- **Nîşandanê test bike** — piştrast bike ku logo li ser mezinahiyên cihêreng ên ekranê rast tê nîşandan
- **Zêdetir taybet bike** — amûrên taybetkirina logo ya WordPress bi kar bîne da ku mezinahî û cih bicîhkirinê rast bike

## Sînordarî

- Logo-yên SVG wek grafîkên static tên çêkirin (ne animated)
- Logo-yên aloz bi gelek hêmanan dibe ku pêdivî bi başkirina destan hebe
- Fontên taybet nayên piştgirîkirin; nivîs fontên system bi kar tîne
- Mezinahiyên pir mezin an pir biçûk dibe ku bandorê li kalîteyê bikin

## Karînên têkildar

- [Kontrasta paletteyê piştrast bike](./validate-palette-contrast.md) — kontrasta rengan ji bo gihîştinbarî kontrol bike
- [Menu çêbike](./create-menu.md) — ji bo malpera xwe menu-yên navigation çêbike
