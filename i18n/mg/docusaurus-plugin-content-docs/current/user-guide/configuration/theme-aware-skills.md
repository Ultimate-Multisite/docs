---
title: Fahaizana mifanaraka amin'ny loha-baovao
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Fahaizana Miankina amin'ny Loha (Theme-Aware Skills)

Ny Superdav AI Agent v1.10.0 dia mitondra fahaizana vaovao efatra izay miankina amin'ny loha (theme-aware skills) ary mampifanaraka ho azy ho an'ny WordPress theme iainao aho. Ireo fahaizana ireo dia manome torolalala sy fahaiza-manao manokana mifototra amin'ny firafitry ny theme sy ny fahaizany.

## Inona no Fahaizana Miankina amin'ny Loha (Theme-Aware Skills)? {#what-are-theme-aware-skills}

Ny fahaizana miankina amin'ny loha dia ireo fototra fahalalana sy sety fitaovana izay safidin'ny AI assistant ho azy araka ny theme WordPress izay miasa ankehitriny eo amin'ny tranonkalanao. Rehefa manova loha ianao, dia miova ho azy avy hatrany ny fahaizana azo ampiasain'ny asistantina — tsy mila fanamboarana manokana mihitsy.

Ny fahaizana tsirairay dia ahitana:

- **Fampahalalana momba ny theme** — torolalala amin'ny fampiasana sy fanovana ilay theme
- **Fanondroana Block sy Pattern** — ireo block, pattern ary safidy famolavolana azo ampiasaina
- **Ohatra amin'ny Fanovana (Customization examples)** — code snippets sy modely fametrahana ho an'ny asa mahazatra
- **Fomba fiasa tsara indrindra (Best practices)** — torohevitra momba ny firafitry ny theme sy ny fomba fiasany

## Fahaizana Miankina amin'ny Loha Azo Ampianarina {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Misy anjara:** Ireo theme izay mampiasa ny firafitry ny block (Full Site Editing) ao amin'ny WordPress.

Ny fahaizana Block Themes dia manome torolalala momba:

- Famoronana sy fanovana templates (modely) amin'ny alalan'ny block editor
- Fandraisana anjara amin'ny block patterns sy ireo blocks azo ampiasaina indray
- Fanovana ny style iainana sy ny sety ao amin'ny theme.json
- Fampiasana ireo theme blocks sy ny fomba hafa (variations)
- Famoronana block patterns manokana ho an'ny tranonkalanao

**Miasa azy ho azy rehefa:** Ny theme miasa ankehitriny dia block theme (mampanantena ny feature `block-templates`).

### Classic Themes {#classic-themes}

**Misy anjara:** Ireo theme WordPress nentim-paharazarana izay mampiasa PHP templates sy ny classic editor.

Ny fahaizana Classic Themes dia manome torolalala momba:

Fampiasa amin'ny rafitra PHP template sy hooks
Fanovana ny endriny an'ny thème amin'ny alalan'ny Customizer
Fampiasana widget areas sy sidebars
Fanovana CSS sy fampivelarana child theme
Fahafantarana ny firafitry ny thème sy ny template tags

**Manao azy ho voa-tsipika rehefa:** Ny thème anananao dia classic (tsy block) theme.

### Kadence Blocks {#kadence-blocks}

**Misy fiantraikany amin'ny:** Ireo tranonkala mampiasa ny plugin Kadence Blocks ho an'ny famolavolana mifototra amin'ny block avo lenta.

Ny fahaiza-manao Kadence Blocks dia manome toromarika momba:

- Fampiasana ny boky block avo lenta an'i Kadence (Hero, Testimonials, Pricing, sns.)
- Fametrahana ny fepetra sy safidy responsive an'ny Kadence blocks
- Fanamboarana famolavolana manokana amin'ny alalan'ny grid sy container blocks an'i Kadence
- Fampifandraisana ireo Kadence blocks amin'ny thème anao
- Fampiasana ny design system sy ny presets an'i Kadence

**Manao azy ho voa-tsipika rehefa:** Misy ny plugin Kadence Blocks eo amin'ny tranonkalanao.

### Kadence Theme {#kadence-theme}

**Misy fiantraikany amin'ny:** Ireo tranonkala mampiasa ny thème Kadence ho an'ny famolavolana mifototra amin'ny block sy ny fanovana.

Ny fahaiza-manao Kadence Theme dia manome toromarika momba:

- Fanovana ny thème Kadence amin'ny alalan'ny global styles sy ny theme.json
- Fampiasana ireo design patterns sy templates anan'i Kadence
- Fametrahana ny fepetra sy safidy an'ny thème Kadence
- Fanamboarana famolavolana manokana amin'ny alalan'ny design system an'i Kadence
- Fampifandraisana ny Kadence amin'ny plugin sy tool malaza

**Manao azy ho voa-tsipika rehefa:** Ny thème Kadence no tena thème anananao.

## Ahoana no safidy ireo fahaiza-manao (Skills) {#how-skills-are-selected}

Ny assistant dia mahafantatra ho automatique ny thème anananao sy ny plugin rehetra eo amin'ny tranonkalanao isaky ny hafatra. Raha misy fahaiza-manao mifandraika amin'ny thème azo atao, dia asiana ao anatin'ny context an'ilay assistant ho voa-tsipika izy avy hatrany. Tsy mila manokana ianao mba hampandehanana na hanova ireo fahaiza-manao (skills).

### Fahaiza-manao maro {#multiple-skills}

Raha misy fahaizana maromaro mifandraika amin'ny tranokalao anao (ohatra, raha manana Kadence Blocks sy Kadence Theme ianao), dia afaka miditra ao anatin'ireo fahaizana rehetra azo ampiasaina ary afaka manondro toromarika avy amin'izy ireo.

### Fanovana Tema {#switching-themes}

Rehefa manova ny tema iainao, dia miova ho azy ny fahaizana azo ampiasana an'ny assistant amin'ny hafatra manaraka. Ohatra:

1. Mampiasa theme misy blocks ianao ary mampiasa ny fahaizana **Block Themes** ianao.
2. Miova any amin'ny tema klasik ianao.
3. Amin'ny hafatra manaraka, dia ho voaondrana ho azo ampiasaina avy hatrany ny fahaizana **Classic Themes**, ary tsy ho azo ampiasaina intsony ny fahaizana **Block Themes**.

## Fampiasana Fahaizana Mifandray amin'ny Tema (Theme-Aware Skills) {#using-theme-aware-skills}

Mba hampiasana fahaizana mifandray amin'ny tema, dia soraty tsotra izay tianao hatao ao anatin'ny interface iresahanao. Ny assistant dia hanondro ny toromarika mifanaraka amin'io fahaizana io ho azy.

### Ohatra Fandikana (Example Prompts) {#example-prompts}

**Ho an'ny Block Themes:**
> "Atao section hero misy sary fototra sy lahatsoratra eo afovoany amin'ny alalan'ny block patterns."

**Ho an'ny Classic Themes:**
> "Ampiana faritra widget manokana ao amin'ny sidebar amin'ny alalan'ny child theme."

**Ho an'ny Kadence Blocks:**
> "Atao section testimoniary (testimonials) mampiasa ny Kadence Testimonials block."

**Ho an'ny Kadence Theme:**
> "Fanovana ny endrika header sy ny fomba famolavolana ny navigation menu."

Ny assistant dia hanome toromarika manokana amin'ny tema sy ohatra code izay natao ho an'ny tema sy plugins iainao.

:::note
Misy fahaizana mifandray amin'ny tema azo ampiasaina ao amin'ny Superdav AI Agent v1.10.0 sy aorian'izany. Tsy mila fanamboarana na fametrahana hafa izany.
:::
