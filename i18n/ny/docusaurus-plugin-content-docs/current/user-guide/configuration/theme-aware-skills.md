---
title: Kufunso kwa Mwayi
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skills Zikondi ndi Theme

Superdav AI Agent v1.10.0 imapereka m’malo obwino (built-in skills) osatuwo omwe amagwirizana ndi theme yanu ya WordPress yomwe ikulimbikira. M’malo owi zimapereka chithandizo ndi ulemu wosonyeza zomwe zikuyenera kwambiri kwa mwayi wanu wamene (theme's architecture) ndi zinthu zina za theme yanu.

## Kodi Skills Zikuti Zikuti Zikulimbikira Theme?

Skills zomwe zikulimbikira theme ndi knowledge bases ndi sets za tools zomwe AI assistant imapereka m’malo osatuwo omwe amagwirizana ndi theme ya WordPress yomwe ikulimbikira kwa site yanu. Pamene mukuweretsa themes, skills zomwe zikuyenera kuwoneka zimaperekedwa m’malo — samakukonza m’malo.

Kukonse skill imapereka:

- **Documentation ya theme** — chithandizo kwa kuyendetsa ndi kupanga (customize) theme
- **References za Block ndi pattern** — blocks zomwe zikuyenera, patterns, ndi zinthu zina za design
- **Examples za customization** — code snippets ndi mwayi wopanga kuti mwayi wosonyeza kwambiri (common tasks)

- **Best practices** — zikukonzekera za architecture ya theme ndi njira yopangira (workflow)

## Skills Zomwe Zikuyenera Kuti Zikulimbikira Theme

### Block Themes

**Zikuyenera kwa:** Themes zomwe zimapereka mwayi wosonyeza kwambiri (Full Site Editing) ya WordPress.

Skill ya Block Themes imapereka chithandizo pa:

- Kupanga ndi kupanga templates monga momwe mukuwunika block editor
- Kugwiritsa ntchira block patterns ndi blocks zomwe zikugwiritsidwa ntchito kwambiri (reusable)
- Kupanga styles za global ndi settings za theme.json
- Kugwiritsa ntchira theme blocks ndi variations
- Kupanga block patterns monga momwe mukuwunika kwa site yanu

**Zikuyenera kuwoneka m’malo:** Theme yanu ikuti ndi block theme (imayenera feature ya `block-templates`).

### Classic Themes

**Zikuyenera kwa:** Themes za WordPress zomwe zikugwiritsa ntchira PHP templates ndi classic editor.

Skill ya Classic Themes imapereka chithandizo pa:

Kukonera ndi PHP template files ndi hooks
Kugwiritsa ntchito PHP template files ndi hooks
Kupanga mpaka monga theme monga momwe mungapeze m'Customizer
Kugwiritsa ntchito widget areas ndi sidebars
Kupanga CSS ndi development ya child theme
Kuyamba kuona hierarchy ya theme ndi template tags

**Kuyamba kukhala kwawo:** Theme yanu yomwe yomwe ikulimbikira ndi classic (non-block) imene.

### Kadence Blocks

**Kukonera kwa:** Sites zomwe zimapereka kadence Blocks plugin kuti monga design omwe ndi blocks.

Skill ya Kadence Blocks imapereka mwayi wopereka ku:

- Kugwiritsa ntchito library yopambana ya Kadence (Hero, Testimonials, Pricing, osati).
- Kukhazikitsa settings za kadence block ndi options za responsive.
- Kupanga layouts omwe ndi blocks za grid ndi container za Kadence.
- Kugwiritsa ntchito kadence blocks ndi theme yanu.
- Kugwiritsa ntchito design system ndi presets za Kadence.

**Kuyamba kukhala kwawo:** Kadence Blocks plugin imene pa site yanu.

### Kadence Theme

**Kukonera kwa:** Sites zomwe zimapereka kadence theme kuti monga design omwe ndi blocks ndi kupambana.

Skill ya Kadence Theme imapereka mwayi wopereka ku:

- Kupambana kadence theme monga global styles ndi theme.json.
- Kugwiritsa ntchito built-in block patterns ndi templates za Kadence.
- Kukhazikitsa settings ndi options za kadence theme.
- Kupanga designs omwe ndi design system ya Kadence.
- Kugwiritsa ntchito Kadence ndi plugins ndi tools zomwe zikuyenera kwambiri.

**Kuyamba kukhala kwawo:** Kadence theme imene yomwe ikulimbikira.

## Kodi Skills Zimapereka Bwera bwanji?

Assistant imapereka mwayi wopambana kuti theme yanu yomwe ikulimbikira ndi plugins zomwe zikuperekedwa pa monga monga. Ngati kuli skill lomwe limapereka ku momwe mungapeze, imapereka m'context ya assistant kwawo monga momwe mungapeze. Musamukonzekera kuti mufotokozere kapena mukhazikitsa skills.

### Multiple Skills

Mifano ya ujali wote unaowatenda kwenye tovuti yako (kwa mfano, ikiwa una Kadence Blocks na Kadence Theme zote zimefunguliwa), msaidizi ana uwezo wa kutumia ujuzi wote unaofaa na anaweza kurejelea mwongozo kutoka kila moja.

### Kubadilisha Themes

Unapobadilisha theme unayotumia, ujuzi unaowezeshwa kwa msaidizi unabadilika kiotomatiki kwenye ujumbe wa pili. Kwa mfano:

1. Unatumia theme ya blocks na ujuzi wa **Block Themes** umeichaguliwa.
2. Unabadilisha kwenda theme ya zamani (classic theme).
3. Kwenye ujumbe wako ujao, ujuzi wa **Classic Themes** utalipakiwa kiotomatiki, na ujuzi wa **Block Themes** haujakubali tena.

## Kutumia Ujuzi Unaohusu Theme (Theme-Aware Skills)

Ili kutumia ujuzi unaohusu theme, rahisi tu ueleze unataka kufanya nini kwenye chat interface. Msaidizi atarejelea mwongozo wa ujuzi unaofaa kiotomatiki.

### Mifano ya Maombi (Example Prompts)

**Kwa Block Themes:**
> "Tengeneza sehemu ya hero yenye picha ya nyuma na maandishi yaliyowekwa katikati kwa kutumia block patterns."

**Kwa Classic Themes:**
> "Ongeza eneo la widget la kibinafsi kwenye sidebar kwa kutumia child theme."

**Kwa Kadence Blocks:**
> "Jenga sehemu ya testimonials (maoni) kwa kutumia Kadence Testimonials block."

**Kwa Kadence Theme:**
> "Badilisha muundo wa header na mtindo wa menyu ya navigation."

Msaidizi atatoa mwongozo unaohusu theme na mifano ya code iliyofanywa kwa kuzingatia theme na plugins unazotumia.

:::note
Ujuzi unaohusu theme unaipatikana kiotomatiki katika Superdav AI Agent v1.10.0 na baadaye. Hakuna haja ya kuweka mipangilio au kufanya marekebisho yoyote.
:::
