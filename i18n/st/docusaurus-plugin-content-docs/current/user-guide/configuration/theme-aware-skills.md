---
title: Moea e leboha la ho fana ka tsela
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Kahlotse le Litlho la Morero {#theme-aware-skills}

Superdav AI Agent v1.10.0 e tšupa litlho tse fofa tse fapaneng tsa theme-aware tse di fetang, tse di fetang ka ho ba le le lele le lefetso le le fetang ka theme ea WordPress e e le e le fetang. Litlho tse di fetang di leka le lefetso le le fetang la theme ea hau le litlhoko tsa hae.

## Litlho tse Di Fetang ke Insapa? {#what-are-theme-aware-skills}

Litlho tse di fetang ke basebetsi ba tšepo le setso sa litlhoko tse di fofa tse di fetang, tse di fetang ka ho ba le le lefetso le le fetang la theme ea WordPress e e le e le fetang. Ho feta theme, litlho tse di fetang tsa insapa di fetang ka ho ba le le lefetso le le fetang — haholo-holo ha ho hlokomela ho fana ka ho setso.

Setso se se fetang se fana ka:

- **Dokumenta ea theme** — litlhoko tsa ho sebelisa le ho fetola theme
- **Litlhoko le tšepo tsa block le pattern** — blocks, patterns, le litšepo tse fetang
- **Dits'a fetola (Customization examples)** — dits'a code le litlhoko tsa ho setso tsa litšepo tsa bohloko
- **Mehlompho ea ho sebelisa (Best practices)** — litlhoko tsa ho ba le lefetso le le fetang la theme le workflow

## Litlho tse Di Fetang tse Fetang {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Di fana ka:** Themes tse sebelisang architecture ea block-based (Full Site Editing) ea WordPress.

Litlho la Block Themes leka le lefetso le le fetang tsa:

- Ho fetola le ho fetola templates ho ba le ho setse haholo ho editor ea block
- Ho ba le lefetso le le fetang le blocks le patterns tse fofa
- Ho fetola litlhoko tsa global styles le settings tsa theme.json
- Ho sebelisa theme blocks le variations
- Ho ba le lefetso le le fetang la block patterns tsa hau ho site

**Di fetang ka:** Theme ea hau e e le block theme (e fetola `block-templates` feature).

### Classic Themes {#classic-themes}

**Di fana ka:** Themes tse traditional tsa WordPress tse sebelisang PHP templates le classic editor.

Litlho la Classic Themes leka le lefetso le le fetang tsa:

Go leba le hoetsoalo la PHP template files le hooks

Ho fetola ka PHP template files le hooks

Ho fetola le tlhahlobo la theme ka Customizer

Ho fetola litlhaho la theme ka widget areas le sidebars

Ho fetola CSS le development ya child theme

Ho tseba haholo la hierarchy ya theme le template tags

**Ho fana ka hoetsoalo:** Theme e e fana ka classic (non-block) e.

### Kadence Blocks {#kadence-blocks}

**Ho fana ka:** Sites e tloyang le Kadence Blocks plugin ho fetola design le blocks e fetang.

Skill ya Kadence Blocks e fana le litlhahlobo la:

- Ho u sebelisa advanced block library ya Kadence (Hero, Testimonials, Pricing, le ba bang).
- Ho setela settings le opshoni ea responsive ea Kadence blocks.
- Ho dira layouts e fetang ka grid le container blocks ea Kadence.
- Ho baola Kadence blocks le theme ea hau.
- Ho sebelisa design system le presets ea Kadence.

**Ho fana ka hoetsoalo:** Kadence Blocks plugin e fana ka site ea hau.

### Kadence Theme {#kadence-theme}

**Ho fana ka:** Sites e tloyang le Kadence theme ho fetola design le customization e fetang blocks.

Skill ya Kadence Theme e fana le litlhahlobo la:

- Ho fetola Kadence theme ka global styles le theme.json.
- Ho u sebelisa built-in block patterns le templates ea Kadence.
- Ho setela settings le opshoni ea Kadence theme.
- Ho dira designs e fetang ka design system ea Kadence.
- Ho baola Kadence le plugins le tools e fana ka ho sebelisoa haholo.

**Ho fana ka hoetsoalo:** Kadence theme e e fana ka site ea hau.

## Ke baetsi Skills (Skills) {#how-skills-are-selected}

Assistant o fetola automatically theme e e fana ea hau le plugins e fetang ka melao ea message ea hau. Ha ho na skill e fetang eo, e fetang e fetang ka context ea assistant automatically. Ha u tlameha ho sebelisa ho fetola le ho baetsi skills manually.

### Multiple Skills {#multiple-skills}

Ha ho, ha! Ha! Ha! Ha! Ha! Ha! Ha! Ha! Ha! Ha! Ha!

Ha le fa motho e ka fihla ka sefane (mopua) mo site ea hau (ha o). Ho na le litšepetso tse fapaneng tse ka tloha le hau (sehlopha, re ka re ka Kadence Blocks le Kadence Theme ho ba le ho ba le), boitshwaro bo ka sefane bo ka ba le le litšepetso hloekileng tsa sehlopha sehle.

### Ho Seba Leho (Switching Themes) {#switching-themes}

Ha o fetola theme ea hau e fapaneng, litšepetso tse ka ba le ho ba le le hau haholo (assistant's available skills) li fetola go tloha mo meseberong a tloha. Ho na le sehlopha sa sefane (for example):

1. O u sebelisa theme ea block (block theme) le litšepetso tsa **Block Themes** tse ba le ho ba le.
2. O fetola e le theme ea classic.
3. Mo meseberong a tloha, litšepetso tsa **Classic Themes** li tla tsamaisa go ba le ho ba le, le litšepetso tsa **Block Themes** ha li tla ba le ho ba le fa.

## Ho U Seba Le Litšepetso Tse Ba Leho (Using Theme-Aware Skills) {#using-theme-aware-skills}

Ho u sebelisa litšepetso tse ba le ho ba le le hau, o ka hlokomela ho bua hore na le sehlopha sa chat (chat interface). Boitshwaro bo ka tsamaisa ho fana ka ho ba le lelitšepetso tsa sehlopha sehlopha sehle.

### Mehlompho a Ho Buya (Example Prompts) {#example-prompts}

**Ho Ba Leho (For Block Themes):**
> "Hlola hero section le thaba ea sika (background image) le lipa le tšoa (centered text) ho u sebelisa block patterns."

**Ho Ba Leho (For Classic Themes):**
> "Lula widget area e fapaneng mo sidebar ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le ho u ba le
