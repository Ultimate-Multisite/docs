---
title: Mamorona sary famantarana SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Mamorona Logo SVG

Ny fahaiza-manao **Generate Logo SVG** dia mamela ny Theme Builder hamorona sy hampiditra logo SVG manokana mivantana ao amin’ny site WordPress-nao miaraka amin’ny fanadiovana mandeha ho azy azo antoka amin’ny namespace.

## Topimaso

Ity fahaiza-manao ity dia mamorona logo scalable vector graphics (SVG) mifototra amin’ny tari-dalan’ny marika sy ny safidinao amin’ny famolavolana ho an’ny site-nao. Diovina ho azy ireo SVG voaforona mba hiantohana fa azo antoka ampiasaina ao amin’ny WordPress izy ireo sady mitazona ny fahamendrehan’ny endrika hita maso.

## Masontsivana

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Eny | Ny anaran’ny site izay hamoronana ny logo |
| `style` | string | Eny | Ny fomba famolavolana (oh., "maoderina", "klasika", "minimalista", "milalao") |
| `colors` | array | Tsia | Array misy kaody loko hex hampiasaina ao amin’ny logo (oh., `["#678233", "#ffffff"]`) |
| `width` | number | Tsia | Sakan’ny SVG amin’ny piksel (sanda default: 200) |
| `height` | number | Tsia | Haavon’ny SVG amin’ny piksel (sanda default: 200) |
| `include_text` | boolean | Tsia | Na hampiditra ny anaran’ny site ho lahatsoratra ao amin’ny logo na tsia (sanda default: true) |

## Endrika Fivoahana

Ny fahaiza-manao dia mamerina tady SVG manana ity rafitra manaraka ity:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Fitondran-tenan’ny Fanadiovana SVG

Ireo SVG voaforona dia mandalo fanadiovana mandeha ho azy azo antoka amin’ny namespace mba:

- **Hanala toetra tsy azo antoka** — manaisotra event handlers, scripts, ary toetra mety hampidi-doza
- **Hitahiry namespaces** — mitazona SVG namespaces (xmlns, xlink) mba hisehoana araka ny tokony ho izy
- **Hanamarina rafitra** — miantoka fa mifanaraka amin’ny fenitra W3C ny SVG
- **Hamadika entities** — mandositra araka ny tokony ho izy ireo tarehintsoratra manokana ao amin’ny votoaty lahatsoratra
- **Hanala references ivelany** — manaisotra stylesheets ivelany sy references sary

Izany dia miantoka fa azo antoka ampidirina mivantana ao amin’ny WordPress ny SVG nefa tsy mila fanadiovana fanampiny.

## Ohatra Fampiasana

**Prompt:**
```
Mamoròna logo maoderina ho an’ny startup teknolojia-ko antsoina hoe "CloudSync" mampiasa loko manga sy fotsy.
```

**Vokatra:**
Ny fahaiza-manao dia mamorona logo SVG izay:
- Mampiditra ny anaran’ny site "CloudSync"
- Mampiasa ny rafitra loko manga sy fotsy voafaritra
- Manaraka fitsipika famolavolana maoderina
- Voadio ho azy ary vonona hampiasaina

## Fampidirana amin’ny Theme Builder

Rehefa mampiasa ny fifantenana tari-dalan’ny famolavolana ao amin’ny Theme Builder, ny fahaiza-manao Generate Logo SVG dia:

1. Mandinika ny tari-dalan’ny famolavolana sy ny paletan-doko-nao
2. Mamorona logo SVG manokana mifanaraka amin’ny safidinao
3. Mampiditra ho azy ny logo ao amin’ny faritra header/marika an’ny site-nao
4. Mitahiry ny SVG ho logo manokana ao amin’ny haino aman-jery WordPress

## Fomba Fanao Tsara Indrindra

- **Omeo mazava ny safidin’ny fomba** — farito ny fomba famolavolana tianao (maoderina, klasika, milalao, sns.)
- **Farito ny loko** — ampidiro ny lokon’ny marikao mba hitoviana
- **Andramo ny fisehoana** — hamarino fa miseho tsara amin’ny haben-efijery samihafa ny logo
- **Amboary bebe kokoa** — ampiasao ny fitaovana fanamboarana logo an’ny WordPress hanitsiana ny habe sy ny fametrahana

## Fetra

- Ny logo SVG dia foronina ho sary static (tsy misy animation)
- Ny logo sarotra misy singa maro dia mety mila fanatsarana tanana
- Tsy tohanana ny endritsoratra manokana; mampiasa endritsoratra an’ny rafitra ny lahatsoratra
- Ny refy tena lehibe na tena kely dia mety hisy fiantraikany amin’ny kalitao

## Fahaiza-manao Mifandraika

- [Hamarino ny Fifanoheran’ny Paleta](./validate-palette-contrast.md) — zahao ny fifanoheran’ny loko ho an’ny fahafahana miditra
- [Mamorona Menu](./create-menu.md) — mamorona menus fitetezana ho an’ny site-nao
