---
title: Mga Pagbabago
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Released on 2026-05-20

### New

- **Generate Logo SVG ability** — Kaya na ngayon ng Theme Builder na gumawa at mag-embed ng custom logo SVG na ligtas sa namespace (namespace-safe sanitisation).
- **Photo upload in discovery interview** — Ang Theme Builder discovery interview ay may kasama na ngayon ng hakbang sa pag-upload ng litrato para sa mas mayamang konteksto ng disenyo.
- **Validate Palette Contrast ability** — Maaari nang suriin ang mga pares ng kulay para sa pag-ayon sa WCAG bago ito ilapat sa isang tema.
- **Hospitality menus** — Kaya na ngayon ng Theme Builder na gumawa ng structured na mga pahina ng menu ng pagkain at inumin para sa mga negosyo sa hospitality.
- **Desktop and mobile preview rendering** — Maaari nang i-preview ang iyong disenyo sa mga device na desktop at mobile habang nagse-select ng direksyon ng disenyo.
- **Navigation label parameter** — Ang kakayahan na Gumawa ng Menu (Create Menu) ay sumusuporta na ngayon sa isang hiwalay na `navigation_label` na naiiba sa pamagat ng pahina.
- **Tier 1 tool availability** — Ang sd-ai-agent/site-scrape ay isa nang Tier 1 tool na available by default sa Theme Builder.

### Fixed

- **AI Client cache** — Ngayon ay sinusuportahan na ito ng transients para sa pagpapanatili ng data sa pagitan ng mga request, na pumipigil sa pagkawala ng data sa mga mahabang gawain ng agent.
- **Plugin row action links** — Inayos at binago ang pangalan para sa kalinawan.

## 1.10.0 — Released on 2026-05-05

### New

- **Tavily internet search** — Nagdagdag ng Tavily bilang isang search provider para sa mas mayamang resulta ng paghahanap sa internet, kasama ang Brave Search.
- **Theme-aware built-in skills** — Kasama na ngayon sa plugin ang mga gabay ng skill para sa Block Themes, Classic Themes, Kadence Blocks, at Kadence Theme.
- **Site builder contact form ability** — Maaari nang magdagdag ng contact form sa anumang pahina nang direkta mula sa chat interface.

### Improved

- **WooCommerce integration refactored** — Gumagamit na ngayon ng native WooCommerce APIs para sa mas mahusay na pagiging maaasahan at compatibility.
- **Provider list refreshes automatically** — Kapag may plugin na na-activate o na-deactivate.

### Fixed

- **navigate-to ability** — Inayos ang infinite reload loop sa ilang admin pages.
- **list-posts ability** — Tama nang inaayos ang mga pangalan ng kategorya at tag sa mga slug.
- **WP-CLI commands** — Ibinabalik ang mga nawawalang namespace aliases pagkatapos ng isang naunang refactor.
- **Event automation** — Maayos na hinahawakan ang mga site kung saan hindi pa nalilikha ang mga automation table.
- **memory-save ability** — Gumagamit na ngayon ng tamang namespace prefix sa system instruction builder.
- **Scalar tool results** — Tama nang binabalot bago ibalik sa AI.
- **Usage statistics** — Tama nang hinahawakan ang legacy ability key format sa pag-upgrade mula sa mas lumang bersyon.
