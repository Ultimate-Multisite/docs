---
title: Paagi sa Pag-alis sa Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Pahibalo sa Pag-alis sa Site Builder Mode {#site-builder-mode-removal-notice}

**Gipahimuslan na ang Site Builder mode sa Superdav AI Agent v1.12.0.** Kung nagamit ninyo ang Site Builder mode, kinahanglan ninyong mag-migrate ngadto sa **Setup Assistant agent** para sa paghimo og theme ug pag-set up sa site.

## Unsa ang Nahitabo? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Ang Site Builder mode usa ka interface nga base sa wizard para sa:

- Paghimo og mga site gikan sa templates
- Pagsulod sa basic settings
- Pagpili og theme
- Pag-set up sa initial content

### Unsa ang Nagpuli Niini? {#what-replaced-it}

Ang **Setup Assistant agent** karon maoy magtrabaho sa tanang functionality sa Site Builder uban ang:

- Mas flexible, gi-guide sa agent nga setup
- Mas nindot nga mga option para sa theme customization
- Integrasyon sa Theme Builder onboarding
- Persistent site_brief memory para sa umaabot nga mga session

## Kung Nagamit Ninyo ang Site Builder Mode {#if-you-were-using-site-builder-mode}

### Ang Inyong Mga Site Luwas {#your-sites-are-safe}

- Ang mga existing sites nga gihimo gamit ang Site Builder mode nagpadayon sa pagtrabaho
- Walay pagkawala og data o pagka-disrupt sa site
- Mahimo ninyong ipadayon ang normal nga pag-manage sa inyong mga site

### Migrate ngadto sa Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Para sa bag-ong setup sa site o mga kausaban sa theme, gamita ang Setup Assistant agent:

```
"Help me set up a new site"
```

o

```
"Start the Theme Builder onboarding"
```

Ang Setup Assistant agent naghatag sa parehas nga functionality apan mas flexible.

## Pagkompara: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (Gipahimuslan) | Setup Assistant (Bago) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Predefined templates | Custom generation |
| Customization | Limited options | Full design system |
| Site brief | Wala i-store | Persistent memorya |
| Future sessions | Pag-usab sa setup | Paggamit sa stored site_brief |
| Flexibility | Fixed workflow | Adaptive conversation |

## Migrasyon ngadto sa Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Para sa Bag-ong Mga Site {#for-new-sites}

Imbis nga gamiton ang Site Builder mode:

1. Hangyo: "Tabangi ko mag-set up og bag-ong site"
2. Ang Setup Assistant agent maggiya nimo pinaagi sa:
   - Tumong ug mga tumong sa site (Site purpose and goals)
   - Target audience
   - Brand identity
   - Theme generation
   - Initial configuration

### Para sa Nagigikan nga Sites {#for-existing-sites}

Kung naa kay existing site gikan sa Site Builder mode:

1. Mahimo nimo ipadayon ang paggamit niini sama na lang.
2. Aron mag-update sa theme, pangayo: "Redesign akong site"
3. Ang Setup Assistant agent motabang kanimo sa paghimo og bag-ong theme.
4. Ang data sa imong site nagpabilin nga walay kausaban.

### Para sa mga Pagbag-o sa Theme {#for-theme-changes}

Imbis sa pagpili sa theme sa Site Builder mode:

1. Pangayo: "Change akong theme"
2. Ang Setup Assistant agent magbuhat niini:
   - Magpangutana bahin sa imong design preferences
   - Mogenerate og custom theme
   - I-activate kini sa imong site

## Mga Lahi nga Kalainan (Key Differences) {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Pilia ang template
2. Pili og theme
3. I-configure ang basic settings
4. Tapos na
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Ihulagway ang tumong sa imong site
2. Idemine ang imong target audience
3. Pilia ang design preferences
4. Ang Agent mogenerate og custom theme
5. Ang Agent mag-activate sa theme
6. Ang site brief i-store para sa umaabot nga mga sesyon
```

## Mga Benepisyo sa Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Mas Flexible {#more-flexible}

- Ihulagway imong site gamit ang natural language
- Makakuha og custom recommendations
- Mag-adapt sa imong espesipikong panginahanglan

### Mas Maayo nga Customization {#better-customization}

- Paghimo og custom theme
- Mga desisyon bahin sa design system
- Persistent design tokens

### Persistent Memory {#persistent-memory}

- Ang imong site_brief i-store
- Ang mga umaabot nga agents makasabot sa imong site
- Walay kinahanglan nga mag-repeat sa impormasyon sa setup

### Integrated Workflow {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Ang tanan nagtrabaho nga magkadugtong (seamless)

## Mga Problema ug Solusyon (Troubleshooting) {#troubleshooting}

### Dili nako makit ang Site Builder mode {#i-cant-find-site-builder-mode}

Ang Site Builder mode gipahimo na. Gamita ang Setup Assistant agent imbis niini:

"Tabangi ko mag-set up og bag-ong site"

### Gusto nako i-recreate ang usa ka site gikan sa Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Mahimo nimo kini i-recreate gamit ang Setup Assistant agent:

1. Request: "Tabangi ko mag-set up og bag-ong site"
2. Ilarawan ang katuyoan ug disenyo sa imong orihinal nga site
3. Ang agent maghimo og usa ka magkalahi nga theme
4. Ang imong site_brief ma-save para sa umaabot

### Wala na motrabaho akong Site Builder site {#my-existing-site-builder-site-isnt-working}

Ang mga site nga gihimo gamit ang Site Builder mode nagpadayon sa pagtrabaho. Kung naa kay problema:

1. Siguraduhon nga aktibo pa ang imong theme
2. I-verify kung ang imong mga plugin anaa pa
3. Suriin ang WordPress error logs
4. Kontaka ang suporta kung magpabilin ang problema

### Pwede pa ba nako gamiton ang akong daan nga Site Builder templates? {#can-i-still-use-my-old-site-builder-templates}

Wala na kini available. Bisan pa niana:

- Ang imong mga existing site nagpadayon sa pagtrabaho
- Mahimo nimong i-recreate ang mga susama nga sites gamit ang Setup Assistant agent
- Ang Setup Assistant agent naghatag og mas daghang opsyon sa customization

## Sunod nga mga Lakang {#next-steps}

1. **Para sa bag-ong sites**: Gamita ang Setup Assistant agent
2. **Para sa existing sites**: Padayon sa paggamit niini sama na lang
3. **Para sa mga kausaban sa theme**: Pangayo og tabang gikan sa Setup Assistant agent
4. **Para sa pagpaayo sa disenyo**: Gamita ang Design System Aesthetics skill

## Mga May Kalabotan nga Topics {#related-topics}

- **Theme Builder Onboarding**: Giya nga setup para sa custom themes
- **Setup Assistant Agent**: Site setup nga gi-guide sa agent
- **Site Specification Skill**: Ilarawan ang mga tumong ug audience sa imong site
- **Design System Aesthetics Skill**: Paayo ang biswal nga pagkakakilanlan sa imong site
