---
title: Tema-aware skills
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-Aware Skills

Superdav AI Agent v1.10.0 lanzatzen da hiru eskila berriak, tema-aware (tema-eriketa-du) eskila hauek, zehatz WordPress tema aktiboan aukeratzen dira. Hau eskilak ematen dute espezialbidegitura garrantzitsu eta funtzionalitate batzuk, diseinuaren eta funtzioiaduen bidez onartutakoa.

## Zer da Theme-Aware Skills?

Theme-aware skills hauek da ezarrituta dagoen jakintza-baseak eta tool set-ak (herri-erakundeak) zehatz AI asistentua, diseinuaren WordPress tema aktiboan aukeratzen duenean. Tema aldatu duenean, asistentiaren eskila hauek otomatikoki onartzen dira — manualean konfiguratzea ez da beharrezkoa.

Ezkila batekin jarraitzen da:

- **Tema-spesifik jakintza-basea** — tema erabil eta onartzeko aukera batzuk
- **Block eta pattern referentziak** — eskila, pattern eta diseinu opsioak disponibleak
- **Onartzeko oinarriak (Customization examples)** — common task-ek bitarteko kode-snippet eta konfiguratura patternak
- **Best practices** — tema erariketa eta workflow-erako aukera batzuk

## Disponible Theme-Aware Skills

### Block Themes

**Erakusten da:** WordPress block-based (Full Site Editing) arkitektura erabiltzen dituzten tema hauek.

Block Themes eskila hau ematen du:

- Block editorra erabiliz templateak jartzeko eta editu eta
- Block pattern eta reusable blocks berekin lan egiten eta
- Global styles eta theme.json aukerak onartzeko
- Theme blocks eta variations erabiltzeko
- Itzultzeko sitean block patterns bere oneskatu eta

**Automatiko onartzen daenean:** Tema aktiboak block theme bat da (block-templates funtzioia suportatzen du).

### Classic Themes

**Erakusten da:** WordPress tema tradizionalak, PHP templates eta classic editor erabiltzen dituztenak.

Classic Themes eskila hau ematen du:

PHP template file eta hook-ezare lan egin

Tema erabilera Customizer-ek bidez moldatzea

Widget area eta sidebar-ek erabilera

CSS modifikazio eta child theme developmenta

Tema hierarkia eta template tags ezberditate

**Automatikoa aktiboa da horrek:** Aktiboa tema irudial (non-block) tema bat izan zen.

### Kadence Blocks

**Erabilera:** Advanced block-based design-ek Kadence Blocks plugin erabiltzen duten webstei.

Kadence Blocks skill-ek erantzunak ematen du:

- Kadence-ren advanced block librarya (Hero, Testimonials, Pricing, eta besteak) erabilera
- Kadence block settings eta responsive opsioak konfiguratzea
- Kadence grid eta container blocks-ek erabilera custom layouts ezartzea
- Kadence blocks-ek tema-rekin integratzea
- Kadence-ren design systema eta presets-ek erabilera

**Automatikoa aktiboa da horrek:** Kadence Blocks pluginak websteian aktibo dagoenean.

### Kadence Theme

**Erabilera:** Block-based design eta customizazio-ek Kadence theme erabiltzen duten webstei.

Kadence Theme skill-ek erantzunak ematen du:

- Global styles eta theme.json bidez Kadence theme moldatzea
- Kadence-ren built-in block patterns eta templates-ek erabilera
- Kadence theme settings eta opsioak konfiguratzea
- Kadence design systema bidez custom designs ezartzea
- Popular plugins eta tools-ek Kadence-rekin integratzea

**Automatikoa aktiboa da horrek:** Kadence theme-ak aktibo tema dela.

## Skill-ek onartzen jakin nahi duzu?

Asistenta lekuan dagoen tema eta plugin-ek automatikoki identifikatzen du. Eguna zehar, eskaera baten bitartean, ematuta skill bat erabilera, asistentia kontekstuan automaticoki sartzen da. Skill-ek manuelki aktiboa edo aldatu behar du ez da.

### Multiple Skills

Ez dago, non bilatzen ari zaitzen duzun skill bat edo gehiago (adibidez, Kadence Blocks eta Kadence Theme duzun), asistentia da guztizko skill-ekara dago eta horiek batzuketik gizarteak emateko gure gizarteak ere referentzia egiten dute.

### Tema-larpenak (Switching Themes)

Aktiboa tema aldatzen duenean, asistentiaren eskaintzen dituen skill-ekara automatikoki update dira iragazlearen lehen mensegunean. Adibidez:

1. **Block Themes** skill-a aktibo duen block tema bat erabiltzen ari zaitzu.
2. Klasikoa tema (classic theme) gai aldatu duzu.
3. Lehen mensegunean, **Classic Themes** skill-a automatikoki laden dira, eta **Block Themes** skill-a ez dago erabilera.

## Tema-larpenak Skill-ekoa Erabilizten

Tema-larpenak skill bat erabilira, gai-eragilearen (chat interface) lehen mensegunean zer egin nahi duzu esaltzea saja. Asistentia da automatikoki eskerazko skill-aren gizarteak referentzia egiten du.

### Eguneko Promentak (Example Prompts)

**Block Themes-erik:**
> "Background imagen bat eta testu sentratu bat emateko hero section bat block patterns erabiliz sortu."

**Classic Themes-erik:**
> "Child theme batekin sidebar-aren widget area bat gehitu."

**Kadence Blocks-erik:**
> "Kadence Testimonials blocka erabiliz testimonials section bat sortu."

**Kadence Theme-erik:**
> "Header layout-a eta navigazio menuku estailoa eskaintzea."

Asistentia da tema eta plugin-ek onartutako kodak gizarteko emate du, zehatzatu duzu aktibo tema eta plugin-ekaren arabera.

:::note
Tema-larpenak skill-ek automatikoki erabilera dago Superdav AI Agent v1.10.0 eta geroagoan. Ez aurreratutako konfiguratzea edo eskaintzea behar da.
:::
