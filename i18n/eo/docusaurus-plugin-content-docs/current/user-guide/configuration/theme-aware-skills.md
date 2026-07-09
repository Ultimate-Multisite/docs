---
title: Temo-sensaj abilibidoj
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Temo-Aware Skills {#theme-aware-skills}

Superdav AI Agent v1.10.0 lanzas kvar novaj temo-aware built-in skills kiuj otomatikman adaptas al temo de WordPress aktiva de vi. Ti estas estas specialigita gvidado kaj kapablitaj, molditaj al la arkitekturo kaj funkcio de via temo.

## Kion estas Temo-Aware Skills? {#what-are-theme-aware-skills}

Temo-aware skills estas prekonfiguritaj sciobazoj kaj instrumentsetoj, kiujn la AI asistanto selektas otomatikman bazitante sur la WordPress temo aktiva sur via sitio. Kiam vi ŝanĝas temojn, la disponiblaj skills de la asistanto aktualigas otomatikman — sen manua konfigurita bezono.

Chakla skill inkluzas:

- **Tem-specifa dokumentado** — gvidado pri uzado kaj personaligo de la temo
- **Block kaj pattern referencoj** — disponiblaj blocks, patternoj kaj dezajno opcioj
- **Personaligaj ekzemploj** — kodo fragmentoj kaj konfiguraj patternoj por komuna taskoj
- **Mezaj praktiko** — rekomendoj pri la arkitekturo kaj flujo de la temo

## Disponiblaj Temo-Aware Skills {#available-theme-aware-skills}

### Block Temoj {#block-themes}

**Aplikas al:** Temoj kiuj uzas la block-based (Full Site Editing) arkitekturon de WordPress.

La skill Block Themes donas gvidado pri:

- Kreado kaj edito de templatej uzante la block editora
- Laborado kun block patternoj kaj reusablaj blocks
- Personaligo de globalaj stiloj kaj `theme.json` setoj
- Uzado de temo blocks kaj variaĵoj
- Konstruado de personalaj block patternoj por via sitio

**Aktiva otomatikman kiam:** Via aktiva temo estas block tema (subtenas la `block-templates` funkcion).

### Klasaj Temoj {#classic-themes}

**Aplikas al:** Tradicia WordPress temoj kiuj uzas PHP templateojn kaj la klasikan editoron.

La skill Classic Themes donas gvidado pri:

Laborado kun PHP template files kaj hooks
Personaligi temon aparancon per la Customizer
Uzi widget areas kaj sidebars
Modifigi CSS kaj child theme developiĝo
Kompreni temon hierarhion kaj template tags

**Automate aktivaĝas kiam:** Via aktiva tema estas klasika (ne-bloka) tema.

### Kadence Blocks {#kadence-blocks}

**Aplikas al:** Sitoj, kiuj uzas la plugin Kadence Blocks por avangada blok-bazita dezajno.

La skilo Kadence Blocks donas gvidon pri:

- Uzi Kadence's avangadan blok-bibliotecon (Hero, Testimonialoj, Precoj, etc.)
- Konfigurigi Kadence block ŝanĝon kaj responsivajn opciojn
- Konstrui personalajn layoutojn kun Kadence's grid kaj container blokoj
- Integri Kadence blokojn kun via temo
- Uzi Kadence's dezajnan sistemon kaj presetojn

**Automate aktivaĝas kiam:** La plugin Kadence Blocks estas aktiva sur via sitaĉo.

### Kadence Tema {#kadence-theme}

**Aplikas al:** Sitoj, kiuj uzas la Kadence temon por blok-bazita dezajno kaj personaligo.

La skilo Kadence Theme donas gvidon pri:

- Personaligi la Kadence temon per globalaj stiloj kaj theme.json
- Uzi Kadence's integritajn blokpatronojn kaj templatejn
- Konfigurigi Kadence temon ŝanĝon kaj opciojn
- Konstrui personalajn dezajnon kun Kadence's dezajna sistemo
- Integri Kadence kun popularaj pluginoj kaj instrumentoj

**Automate aktivaĝas kiam:** La Kadence tema estas via aktiva tema.

## Kiel Skiloj Selektaĝas {#how-skills-are-selected}

La asistanto automaite detektas via aktivan temon kaj instalitajn pluginojn sur ĉiu mesaĝo. Se korespondanta tem-konscia skilo estas dispona, ĝi estas aŭtomate cargita en la konteksto de la asistanto. Vi ne bezonas manuale aktivi aŭ ŝanĝi skilojn.

### Multaj Skiloj {#multiple-skills}

Se pluraj abilite aluz al vaša sit (per esempio, se aveți active atât Kadence Blocks, cât și Kadence Theme), asistanto aksesas ĉiuj aplikablajn abilitojn kaj povas referi la gvidon de ĉiu el ili.

### Migri Temojn {#switching-themes}

Kiam vi ŝanĝas vian aktivan temon, la disponiblaj abilitecoj de la asistanto aŭtomate ĝisdatigas en la suivante mesaĝo. Per esempio:

1. Vi uzas temon-bloku (block theme) kun la abiliteco **Block Themes** aktiva.
2. Vi ŝanĝas al klasika tema.
3. En vian sekvenca mesaĝo, la abiliteco **Classic Themes** estas aŭtomate cargita, kaj la abiliteco **Block Themes** ne estas pli disponabla.

## Uzo de Temo-Konsciaj Abilitaj {#using-theme-aware-skills}

Por uzui temo-konscian abilitecon, simple deskribi, kion vi volas fari en la chataj interfacoj. La asistanto aŭtomate referos la ĝustan gvidon de la apropriata abiliteco.

### Ekzemplaj Promtajktoj {#example-prompts}

**Por Block Themes:**
> "Krei hero-sektion kun arka imago kaj centratita teksto uzante blokpatron."

**Por Klasikaj Temoj:**
> "Adu personalan widget-areon al la flanka bareto uzante child theme."

**Por Kadence Blocks:**
> "Krei sekcion de testoj uzante la Kadence Testimonials block."

**Por Kadence Theme:**
> "Personalizi la layout de la ĉedro kaj la stilon de la navigaj menuj."

La asistanto donos temo-specian gvidon kaj kodajn ekzemplojn, prilaboritajn al vian aktivan temon kaj pluginojn.

:::note
Temo-konsciaj abilitecoj estas aŭtomate disponiblaj en Superdav AI Agent v1.10.0 kaj pli mal da. Ne serĉas plia montro aŭ konfiguracio.
:::
