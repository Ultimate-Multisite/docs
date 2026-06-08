---
title: Mga Pagbag-o sa Feature/Pagpahiwatig
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Gipagawas niadtong 2026-05-20

### New

- **Pagmugna og Logo SVG ability** — Ang Theme Builder makamugna na ug mag-embed og custom logo SVGs nga luwas sa namespace sanitisation
- **Photo upload in discovery interview** — Ang Theme Builder discovery interview karon adunay lakang sa pag-upload og litrato para mas lawom ang design context
- **Validate Palette Contrast ability** — pagsusi sa mga pares sa kolor alang sa WCAG compliance sa dili pa kini i-apply sa usa ka theme
- **Hospitality menus** — Ang Theme Builder makamugna na ug structured nga food and beverage menu pages alang sa mga negosyo sa hospitality
- **Desktop and mobile preview rendering** — pagpa-preview sa imong design sa desktop ug mobile devices samtang nagpili og design direction
- **Navigation label parameter** — Ang Create Menu ability karon suporta ang usa ka lahi nga `navigation_label` nga dili pareho sa page title
- **Tier 1 tool availability** — Ang sd-ai-agent/site-scrape karon usa na ka Tier 1 tool nga available by default sa Theme Builder

### Fixed

- **AI Client cache** — karon gi-back up kini sa transients alang sa cross-request persistence, nga makapugong sa pagkawala sa data sa mga agent tasks nga dugay kaayo ang pagpadagan
- **Plugin row action links** — gitul-id ug giusab ang ngalan aron mas klaro

## 1.10.0 — Gipagawas niadtong 2026-05-05

### New

- **Tavily internet search** — pagdugang og Tavily isip usa ka search provider alang sa mas lawom nga resulta sa internet side sa Brave Search
- **Theme-aware built-in skills** — Ang Block Themes, Classic Themes, Kadence Blocks, ug Kadence Theme skill guides karon naglakip na sa plugin
- **Site builder contact form ability** — pagdugang og contact form sa bisan unsang page direkta gikan sa chat interface

### Improved

- **WooCommerce integration refactored** — karon naggamit kini sa native WooCommerce APIs alang sa mas maayo nga reliability ug compatibility
- **Provider list refreshes automatically** — kung adunay plugin nga i-activate o i-deactivate

### Fixed

- **navigate-to ability** — gitul-id ang infinite reload loop sa pipila ka admin pages
- **list-posts ability** — karon husto na kini pagresolba sa category ug tag names ngadto sa slugs
- **WP-CLI commands** — gibalik ang nawala nga namespace aliases human sa usa ka miaging refactor
- **Event automation** — maayo pa gihapon ang pagdumala sa mga site diin wala pa mahimo ang automation tables
- **memory-save ability** — karon naggamit kini sa husto nga namespace prefix sa system instruction builder
- **Scalar tool results** — karon husto na kini gi-wrap sa dili pa ihatag pabalik sa AI
- **Usage statistics** — karon husto na kini pagdumala sa legacy ability key format kung mag-upgrade gikan sa mas daan nga mga bersyon
