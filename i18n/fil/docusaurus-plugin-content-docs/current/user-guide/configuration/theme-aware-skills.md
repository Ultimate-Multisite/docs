---
title: Mga Kasanayang Nakaaayon sa Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills

Ang Superdav AI Agent v1.10.0 ay naglalabas ng apat na bagong built-in skills na "theme-aware" (nakabatay sa tema) na awtomatikong umaangkop sa iyong kasalukuyang WordPress theme. Ang mga skills na ito ay nagbibigay ng espesyal na gabay at kakayahan na akma sa arkitektura at mga feature ng iyong tema.

## Ano ang Theme-Aware Skills? {#what-are-theme-aware-skills}

Ang theme-aware skills ay mga pre-configured na knowledge base at tool set na awtomatikong pinipili ng AI assistant batay sa WordPress theme na kasalukuyang ginagamit sa iyong site. Kapag nagpalit ka ng tema, awtomatikong nag-uupdate ang mga available na skills ng assistant — hindi na kailangan ng manual na pag-configure.

Kasama sa bawat skill ang:

- **Theme-specific documentation** — gabay sa paggamit at pag-customize ng tema
- **Block and pattern references** — mga available na blocks, patterns, at design options
- **Customization examples** — mga code snippet at configuration pattern para sa mga karaniwang gawain
- **Best practices** — mga rekomendasyon para sa arkitektura at workflow ng tema

## Available Theme-Aware Skills {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Para sa:** Mga tema na gumagamit ng block-based (Full Site Editing) architecture ng WordPress.

Nagbibigay ang Block Themes skill ng gabay sa:

- Paglikha at pag-e-edit ng templates gamit ang block editor
- Paggawa ng block patterns at reusable blocks
- Pag-customize ng global styles at theme.json settings
- Paggamit ng theme blocks at variations
- Pagbuo ng custom block patterns para sa iyong site

**Awtomatikong nag-a-activate kapag:** Ang iyong active theme ay isang block theme (sumusuporta sa feature na `block-templates`).

### Classic Themes {#classic-themes}

**Para sa:** Mga tradisyonal na WordPress themes na gumagamit ng PHP templates at classic editor.

Nagbibigay ang Classic Themes skill ng gabay sa:

- Paggawa ng mga PHP template files at hooks
- Pag-customize ng hitsura ng tema sa pamamagitan ng Customizer
- Paggamit ng widget areas at sidebars
- Pag-modify ng CSS at child theme development
- Pag-unawa sa theme hierarchy at template tags

**Awtomatikong nag-a-activate kapag:** Ang iyong active theme ay isang classic (non-block) theme.

### Kadence Blocks {#kadence-blocks}

**Para sa:** Mga site na gumagamit ng Kadence Blocks plugin para sa advanced block-based design.

Nagbibigay ang Kadence Blocks skill ng gabay sa:

- Paggamit ng advanced block library ng Kadence (Hero, Testimonials, Pricing, atbp.)
- Pag-configure ng Kadence block settings at responsive options
- Pagbuo ng custom layouts gamit ang grid at container blocks ng Kadence
- Pag-integrate ng Kadence blocks sa iyong tema
- Pag-leverage ng design system at presets ng Kadence

**Awtomatikong nag-a-activate kapag:** Ang Kadence Blocks plugin ay active sa iyong site.

### Kadence Theme {#kadence-theme}

**Para sa:** Mga site na gumagamit ng Kadence theme para sa block-based design at customization.

Nagbibigay ang Kadence Theme skill ng gabay sa:

- Pag-customize ng Kadence theme sa pamamagitan ng global styles at theme.json
- Paggamit ng built-in block patterns at templates ng Kadence
- Pag-configure ng Kadence theme settings at options
- Pagbuo ng custom designs gamit ang design system ng Kadence
- Pag-integrate ng Kadence sa mga popular na plugin at tools

**Awtomatikong nag-a-activate kapag:** Ang Kadence theme ang iyong active theme.

## Paano Pinipili ang Skills {#how-skills-are-selected}

Awtomatikong natutukoy ng assistant ang iyong active theme at mga installed na plugins sa bawat mensahe. Kung mayroong tumutugmang theme-aware skill na available, ito ay awtomatikong ilalagay sa context ng assistant. Hindi mo kailangang mano-manong i-enable o palitan ang mga skills.

### Multiple Skills {#multiple-skills}

Kung maraming skills ang naaangkop sa iyong site (halimbawa, kung pareho mong active ang Kadence Blocks at Kadence Theme), may access ang assistant sa lahat ng applicable skills at maaaring mag-reference ng gabay mula sa bawat isa.

### Switching Themes {#switching-themes}

Kapag nagpalit ka ng active theme, awtomatikong nag-uupdate ang mga available na skills ng assistant sa susunod na mensahe. Halimbawa:

1. Gumagamit ka ng block theme na may active na **Block Themes** skill.
2. Nagpalit ka sa isang classic theme.
3. Sa iyong susunod na mensahe, awtomatikong ilalagay ang **Classic Themes** skill, at hindi na available ang **Block Themes** skill.

## Paggamit ng Theme-Aware Skills {#using-theme-aware-skills}

Upang magamit ang isang theme-aware skill, ilarawan mo lang kung ano ang gusto mong gawin sa chat interface. Awtomatikong ire-reference ng assistant ang naaangkop na gabay ng skill.

### Example Prompts {#example-prompts}

**Para sa Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**Para sa Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**Para sa Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**Para sa Kadence Theme:**
> "Customize the header layout and navigation menu styling."

Magbibigay ang assistant ng theme-specific guidance at code examples na akma sa iyong active theme at plugins.

:::note
Ang theme-aware skills ay awtomatikong available sa Superdav AI Agent v1.10.0 at mas bago. Walang karagdagang setup o configuration ang kailangan.
:::
