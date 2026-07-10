---
title: Icyerekezo cy’Igishushanyo mbonera
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Icyerekezo cy’Igishushanyo {#design-direction}

Intambwe ya **Design Direction** igufasha gusuzuma, kunoza, no kwemeza burundu igishushanyo kigaragara cya theme yawe mbere y’uko Theme Builder itanga theme yuzuye.

## Incamake {#overview}

Nyuma yo kurangiza Discovery Interview, Theme Builder yerekana icyerekezo cy’igishushanyo cyawe hamwe na **desktop na mobile preview rendering**. Ibi bigufasha kubona neza uko igishushanyo cyawe kizagaragara ku bikoresho bitandukanye mbere yo kwemeza theme.

## Ibigize Design Direction {#design-direction-components}

### 1. Urutonde rw’Amabara {#1-color-palette}

Imiterere y’amabara ya theme yawe, harimo:

- **Ibara ry’ibanze** — ibara nyamukuru ry’ikirango rikoreshwa kuri buto, amahuza, n’ibishimangira
- **Ibara rya kabiri** — ibara ryuzuzanya ritanga ubudasa
- **Ibara rishimangira** — ibara rigaragaza ibintu by’ingenzi
- **Amabara atabogamye** — amabara y’imvi n’ay’umweru akoreshwa ku mbuganyuma no ku nyandiko
- **Ibara ry’inyandiko** — ibara ry’ibanze ry’inyandiko rituma isomeka neza

### 2. Imyandikire {#2-typography}

Guhitamo imyandikire ya:

- **Imyandikire y’imitwe** — ikoreshwa ku mitwe y’amapaji no ku mitwe y’ibice
- **Imyandikire y’umubiri** — ikoreshwa ku nyandiko z’ibika n’ibirimo
- **Ingano z’imyandikire** — ingano zihinduka hakurikijwe ingano zitandukanye za ekrani
- **Uburebure bw’imirongo** — intera hagati y’imirongo kugira ngo bisomeke neza
- **Uburemere bw’imyandikire** — uburyo bunini, busanzwe, n’ubworoshye

### 3. Imiterere n’Intera {#3-layout-and-spacing}

- **Ubugari bwa kontineri** — ubugari ntarengwa bw’ibirimo
- **Padding na margins** — intera ikikije ibintu
- **Sisitemu ya grid** — imiterere y’inkingi ku gishushanyo gihinduka bitewe n’igikoresho
- **Intera y’ibice** — intera hagati y’ibintu bya UI

### 4. Ibintu Bigaragara {#4-visual-elements}

- **Imisusire ya buto** — ibishushanyo bya buto z’ibanze, iza kabiri, n’iza gatatu
- **Ibishushanyo bya card** — imiterere y’amablock y’ibirimo
- **Icons** — imisusire n’ingano za icons
- **Imipaka n’ibicucu** — ubujyakuzimu bugaragara butoroheje
- **Ingaruka za hover** — imisusire y’imiterere y’imikoranire

## Preview Rendering {#preview-rendering}

### Desktop Preview {#desktop-preview}

Desktop preview yerekana igishushanyo cyawe ku bugari bwuzuye (akenshi 1200px cyangwa burenze):

- Menu yuzuye y’iyoborere
- Imiterere yuzuye ifite inkingi zose
- Imyandikire minini n’intera
- Ibintu byose bigaragara ku ngano yuzuye

### Mobile Preview {#mobile-preview}

Mobile preview yerekana igishushanyo cyawe ku bugari bwa mobile (akenshi 375px):

- Iyoborere rihinduka (hamburger menu)
- Imiterere y’inkingi imwe
- Imyandikire n’intera byahinduwe
- Ingano za buto zorohereza gukoraho

### Responsive Breakpoints {#responsive-breakpoints}

Theme Builder itanga previews kuri izi breakpoints:

| Igikoresho | Ubugari | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Telefoni ihagaze |
| **Tablet** | 768px | Tablet itambitse |
| **Desktop** | 1200px | Desktop y’ubugari bwuzuye |
| **Desktop Nini** | 1920px | Ekrani yagutse cyane |

## Kunoza Igishushanyo Cyawe {#refining-your-design}

### Gukora Impinduka {#making-adjustments}

Ushobora kunoza icyerekezo cy’igishushanyo cyawe ukoresheje:

1. **Guhindura amabara** — hindura ibara iryo ari ryo ryose riri mu rutonde
2. **Guhindura imyandikire** — hitamo typefaces zitandukanye
3. **Guhindura intera** — hindura padding na margins
4. **Kuvugurura imiterere** — hindura ubugari bwa kontineri n’inkingi za grid
5. **Kunoza ibintu** — hindura imisusire ya buto, ibishushanyo bya card, n’ibindi.

### Ivugururwa rya Preview {#preview-updates}

Impinduka zigaragara ako kanya:

- Desktop preview ivugururwa ako kanya
- Mobile preview ivugururwa ako kanya
- Responsive breakpoints zose zivugururwa
- Ushobora guhinduranya previews kugira ngo wemeze impinduka

### Uburyo bwo Kugereranya {#comparison-view}

Gereranya icyerekezo cy’igishushanyo cyawe na:

- **Igishushanyo cy’umwimerere** — reba ibyahindutse
- **Ibishushanyo by’abanywanyi** — gereranya n’imbuga zatanze igitekerezo
- **Verisiyo zabanje** — subira ku byerekezo by’igishushanyo bya mbere

## Kwemeza Design Direction {#design-direction-approval}

Iyo umaze kunyurwa n’igishushanyo cyawe:

1. **Suzuma previews zombi** — wemeze ko desktop na mobile zigaragara neza
2. **Reba amabara yose** — wemeze ko hari contrast n’ubugerwaho
3. **Gerageza imyandikire** — wemeze ko isomeka ku ngano zose
4. **Emeza imiterere** — reba intera n’itondekanya
5. **Emeza igishushanyo** — komeza ujye ku gukora theme

## Intambwe Zikurikira {#next-steps}

Nyuma yo kwemeza icyerekezo cy’igishushanyo cyawe:

1. Theme Builder itanga theme yawe yuzuye
2. Theme ishyirwa ku rubuga rwawe rwa WordPress
3. Ushobora gukomeza kuyitunganya ukoresheje WordPress customizer
4. Komeza ujye kuri [Menus za Hospitality](./hospitality-menus.md) cyangwa ibindi biranga

## Imikorere Myiza {#best-practices}

- **Gerageza ku bikoresho nyabyo** — koresha telefoni na tablets nyazo niba bishoboka
- **Reba isomeka** — wemeze ko inyandiko isomeka ku ngano zose
- **Emeza contrast** — koresha [Validate Palette Contrast](../abilities/validate-palette-contrast.md) ku bw’ubugerwaho
- **Zirikana imikorere** — optimize amashusho n’imyandikire kugira ngo byihute
- **Teganyiriza ibirimo** — wemeze ko imiterere ikorana n’ibirimo byawe nyabyo

## Gukemura Ibibazo {#troubleshooting}

### Preview Itavugururwa {#preview-not-updating}

- Subizamo paji
- Siba cache ya browser
- Gerageza browser itandukanye
- Reba ihuzanzira rya internet

### Amabara Agaragara Atandukanye {#colors-look-different}

- Reba igenamiterere ry’amabara rya monitor
- Gerageza ku bikoresho bitandukanye
- Emeza contrast y’amabara ukoresheje ibikoresho by’ubugerwaho
- Tekereza ku bikoresho byigana kutabona amabara neza

### Ibibazo by’Imyandikire {#typography-issues}

- Emeza ko dosiye z’imyandikire zirimo gupakirwa
- Reba ingano y’imyandikire kuri breakpoints zitandukanye
- Gerageza ukoresheje ibirimo nyabyo
- Tekereza ku burebure bw’umurongo kugira ngo bisomeke neza

## Inyandiko Zifitanye Isano {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — gukusanya amakuru y’igishushanyo
- [Menus za Hospitality](./hospitality-menus.md) — gukora amapaji ya menu afite imiterere
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — gusuzuma ubugerwaho bw’amabara
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — gukora logos zihariye
