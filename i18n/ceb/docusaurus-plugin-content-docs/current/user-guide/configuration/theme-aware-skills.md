---
title: Kahanas nga Nagahibalo sa Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills {#theme-aware-skills}

Ang Superdav AI Agent v1.10.0 nagpadala na og upat ka bag-ong theme-aware built-in skills nga awtomatikong mag-adjust sa imong active WordPress theme. Kini nga mga skills naghatag og espesyal nga giya ug abilidad nga gipahigayon para sa architecture ug features sa imong theme.

## Unsa Man ang Theme-Aware Skills? {#what-are-theme-aware-skills}

Ang theme-aware skills kay mga pre-configured knowledge bases ug tool sets nga awtomatikong gipili sa AI assistant base sa WordPress theme nga aktibo karon sa imong site. Kung mag-switch ka og themes, ang available skills sa assistant awtomatikong mo-update — walay kinahanglan nga manual configuration.

Ang matag skill naglakip og:

- **Theme-specific documentation** — giya kung unsaon paggamit ug pag-customize sa theme
- **Block and pattern references** — mga block, pattern, ug design options nga available
- **Customization examples** — mga code snippets ug configuration patterns para sa kasagaran nga mga trabaho
- **Best practices** — mga rekomendasyon alang sa architecture ug workflow sa theme

## Available Theme-Aware Skills {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Nag-apply sa:** Mga theme nga naggamit sa WordPress block-based (Full Site Editing) architecture.

Ang Block Themes skill naghatag og giya bahin sa:

- Paghimo ug pag-edit og templates gamit ang block editor
- Paggamit sa mga block patterns ug reusable blocks
- Pag-customize sa global styles ug theme.json settings
- Paggamit og theme blocks ug variations
- Paghimo og custom block patterns para sa imong site

**Awtomatikong na-activate kung:** Ang imong active theme kay usa ka block theme (nagsuporta sa `block-templates` feature).

### Classic Themes {#classic-themes}

**Nag-apply sa:** Mga traditional WordPress themes nga naggamit og PHP templates ug ang classic editor.

Ang Classic Themes skill naghatag og giya bahin sa:

Pagtrabaho sa PHP template files ug hooks
Pagsulod sa hitsura sa theme pinaagi sa Customizer
Paggamit sa widget areas ug sidebars
Pag-modify sa CSS ug child theme development
Pagsabot sa theme hierarchy ug template tags

**Awtomatikong mag-activate kung:** Ang imong active theme kay classic (non-block) nga theme.

### Kadence Blocks {#kadence-blocks}

**Para sa:** Mga site nga naggamit sa Kadence Blocks plugin para sa advanced block-based design.

Ang skill sa Kadence Blocks naghatag og giya bahin sa:

- Paggamit sa advanced block library sa Kadence (Hero, Testimonials, Pricing, etc.)
- Pag-configure sa Kadence block settings ug responsive options
- Paghimo og custom layouts gamit ang grid ug container blocks sa Kadence
- Integrasyon sa Kadence blocks uban sa imong theme
- Paggamit sa design system ug presets sa Kadence

**Awtomatikong mag-activate kung:** Ang Kadence Blocks plugin aktibo na sa imong site.

### Kadence Theme {#kadence-theme}

**Para sa:** Mga site nga naggamit sa Kadence theme para sa block-based design ug customization.

Ang skill sa Kadence Theme naghatag og giya bahin sa:

- Pag-customize sa Kadence theme pinaagi sa global styles ug theme.json
- Paggamit sa built-in block patterns ug templates sa Kadence
- Pag-configure sa Kadence theme settings ug options
- Paghimo og custom designs gamit ang design system sa Kadence
- Integrasyon sa Kadence uban sa mga popular nga plugins ug tools

**Awtomatikong mag-activate kung:** Ang Kadence theme mao ang imong active theme.

## Unsaon Pagsulod sa Skills {#how-skills-are-selected}

Ang assistant awtomatikong makadiskubre sa imong active theme ug mga installed plugin sa matag mensahe. Kung naa'y matching skill nga aware sa theme, kini awtomatikong i-load sa context sa assistant. Dili nimo kinahanglan manual nga i-enable o i-switch ang skills.

### Multiple Skills {#multiple-skills}

Kung daghan ang mga skill nga magamit sa imong site (pananglitan, kung naa kay Kadence Blocks ug Kadence Theme active), ang assistant adunay access sa tanang applicable skills ug mahimong magrefer og giya gikan sa matag usa.

### Pag-switch sa Themes {#switching-themes}

Kung usbon nimo ang theme nga active, awtomatikong mo-update ang mga available skills sa assistant sa sunod nga mensahe. Pananglitan:

1. Naggamit ka og block theme nga adunay **Block Themes** skill nga aktibo.
2. Usbon nimo kini ngadto sa classic theme.
3. Sa imong sunod nga mensahe, ang **Classic Themes** skill awtomatikong mag-load, ug ang **Block Themes** skill dili na magamit.

## Paggamit sa Theme-Aware Skills {#using-theme-aware-skills}

Aron magamit ang usa ka theme-aware skill, basta i-describe lang nimo kung unsa ang gusto nimong buhaton sa chat interface. Awtomatikong magrefer ang assistant sa giya sa angay nga skill.

### Mga Pananglitan sa Prompts {#example-prompts}

**Para sa Block Themes:**
> "Pagbuhat og hero section nga adunay background image ug centered text gamit ang block patterns."

**Para sa Classic Themes:**
> "Magdugang og custom widget area sa sidebar gamit ang child theme."

**Para sa Kadence Blocks:**
> "Pagbuhat og testimonials section gamit ang Kadence Testimonials block."

**Para sa Kadence Theme:**
> "I-customize ang layout sa header ug styling sa navigation menu."

Ang assistant maghatag og giya ug mga code example nga espesipiko sa theme ug plugins nga imong active.

:::note
Ang theme-aware skills awtomatikong available sa Superdav AI Agent v1.10.0 ug mas bag-o pa ni. Walay dugang setup o configuration ang gikinahanglan.
:::
