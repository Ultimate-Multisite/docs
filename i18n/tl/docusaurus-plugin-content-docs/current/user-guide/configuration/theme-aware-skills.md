---
title: Kakayahang May Alam sa Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Mga Kasanayang Nakabatay sa Tema

Ang Superdav AI Agent v1.10.0 ay may apat na bagong built-in na kasanayan na nakabatay sa tema (theme-aware) na awtomatikong umaangkop sa iyong aktibong WordPress theme. Ang mga kasanayang ito ay nagbibigay ng espesyal na gabay at kakayahan na naka-customize para sa arkitektura at mga feature ng iyong tema.

## Ano ang Theme-Aware Skills?

Ang theme-aware skills ay mga pre-configured na knowledge base at set ng tool na awtomatikong pinipili ng AI assistant batay sa WordPress theme na kasalukuyang aktibo sa iyong site. Kapag lumipat ka ng tema, awtomatiko ring nag-a-update ang mga kasanayang magagamit ng assistant — walang manual na pag-configure ang kailangan.

Ang bawat skill ay may kasama:

- **Theme-specific documentation** — gabay sa paggamit at pag-customize ng tema
- **Block and pattern references** — mga block, pattern, at opsyon sa disenyo na magagamit
- **Customization examples** — mga code snippet at configuration patterns para sa mga karaniwang gawain
- **Best practices** — mga rekomendasyon para sa arkitektura at workflow ng tema

## Mga Magagamit na Theme-Aware Skills

### Block Themes

**Para sa:** Mga temang gumagamit ng WordPress block-based (Full Site Editing) architecture.

Ang skill na Block Themes ay nagbibigay ng gabay tungkol sa:

- Paglikha at pag-edit ng mga template gamit ang block editor
- Paggamit ng block patterns at reusable blocks
- Pag-customize ng global styles at theme.json settings
- Paggamit ng theme blocks at variations
- Pagbuo ng custom block patterns para sa iyong site

**Awtomatikong aktibo kapag:** Ang iyong aktibong tema ay isang block theme (sumusuporta sa feature na `block-templates`).

### Classic Themes

**Para sa:** Mga tradisyonal na WordPress themes na gumagamit ng PHP templates at ang classic editor.

Ang skill na Classic Themes ay nagbibigay ng gabay tungkol sa:

Pag-work sa PHP template files at hooks
Pag-customize ng itsura ng theme gamit ang Customizer
Paggamit ng widget areas at sidebars
Pagbabago ng CSS at paggawa ng child theme
Pag-unawa sa theme hierarchy at template tags

**Awtomatikong nag-aactivate kapag:** Ang iyong active theme ay isang classic (non-block) theme.

### Kadence Blocks

**Para sa:** Mga site na gumagamit ng Kadence Blocks plugin para sa advanced block-based design.

Ang skill na Kadence Blocks ay nagbibigay ng gabay tungkol sa:

- Paggamit ng advanced block library ng Kadence (Hero, Testimonials, Pricing, atbp.)
- Pag-configure ng mga setting ng Kadence block at responsive options
- Paggawa ng custom layouts gamit ang grid at container blocks ng Kadence
- Integrasyon ng Kadence blocks sa iyong theme
- Paggamit ng design system at presets ng Kadence

**Awtomatikong nag-aactivate kapag:** Ang Kadence Blocks plugin ay aktibo sa iyong site.

### Kadence Theme

**Para sa:** Mga site na gumagamit ng Kadence theme para sa block-based design at customization.

Ang skill na Kadence Theme ay nagbibigay ng gabay tungkol sa:

- Pag-customize ng Kadence theme gamit ang global styles at theme.json
- Paggamit ng mga built-in block patterns at templates ng Kadence
- Pag-configure ng mga setting at options ng Kadence theme
- Paggawa ng custom designs gamit ang design system ng Kadence
- Integrasyon ng Kadence sa mga sikat na plugin at tools

**Awtomatikong nag-aactivate kapag:** Ang Kadence theme ang iyong active theme.

## Paano Pinipili ang Skills

Awtomatikong natutukoy ng assistant ang iyong active theme at mga naka-install na plugin sa bawat mensahe. Kung mayroong matching skill na sensitibo sa theme, awtomatiko itong ilalagay sa context ng assistant. Hindi mo kailangang manu-manong i-enable o palitan ang mga skills.

### Multiple Skills

Kung maraming kasanayan ang naaangkop sa iyong site (halimbawa, kung mayroon kang Kadence Blocks at Kadence Theme na aktibo), may access ang assistant sa lahat ng mga kasanayang maaari at maaaring magbanggit ng gabay mula sa bawat isa.

### Pagpapalit ng Theme

Kapag binago mo ang active theme mo, awtomatikong mag-a-update ang mga available skills ng assistant sa susunod na mensahe. Halimbawa:

1. Gumagamit ka ng block theme na may aktibong **Block Themes** skill.
2. Lumipat ka sa isang classic theme.
3. Sa iyong susunod na mensahe, awtomatikong maglo-load ang **Classic Themes** skill, at hindi na magagamit ang **Block Themes** skill.

## Paggamit ng Theme-Aware Skills

Para magamit ang isang theme-aware skill, ilarawan lang kung ano ang gusto mong gawin sa chat interface. Awtomatikong bibigyang-refer ng assistant ang tamang gabay ng skill na iyon.

### Mga Halimbawa ng Prompt

**Para sa Block Themes:**
> "Gumawa ng hero section na may background image at centered text gamit ang block patterns."

**Para sa Classic Themes:**
> "Magdagdag ng custom widget area sa sidebar gamit ang child theme."

**Para sa Kadence Blocks:**
> "Bumuo ng testimonials section gamit ang Kadence Testimonials block."

**Para sa Kadence Theme:**
> "I-customize ang layout ng header at styling ng navigation menu."

Magbibigay ang assistant ng gabay at mga halimbawa ng code na partikular sa theme at plugins na kasalukuyang ginagamit mo.

:::note
Ang mga theme-aware skills ay awtomatikong available sa Superdav AI Agent v1.10.0 at mas bago nito. Walang karagdagang setup o configuration ang kailangan.
:::
