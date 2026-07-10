---
title: Paalala sa Pag-alis ng Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Pag-alis ng Site Builder Mode {#site-builder-mode-removal-notice}

**Inalis na ang Site Builder mode sa Superdav AI Agent v1.12.0.** Kung gumagamit ka ng Site Builder mode, kailangan mong lumipat sa **Setup Assistant agent** para sa paggawa ng theme at pag-set up ng site.

## Ano ang Nangyari? {#what-happened}

### Site Builder Mode (Luma) {#site-builder-mode-legacy}

Ang Site Builder mode ay isang interface na parang wizard (gabay) para sa:

- Paglikha ng mga site mula sa mga template
- Pag-configure ng mga basic settings
- Pagpili ng isang theme
- Pag-set up ng paunang content

### Ano ang Pumalit Dito? {#what-replaced-it}

Ang **Setup Assistant agent** na ngayon ang humahawak sa lahat ng functionality ng Site Builder, na may:

- Mas flexible, agent-guided setup
- Mas magagandang pagpipilian sa theme customization
- Integrasyon sa Theme Builder onboarding
- Persistent site_brief memory para sa mga susunod na session

## Kung Gumagamit Ka ng Site Builder Mode {#if-you-were-using-site-builder-mode}

### Ligtas ang Iyong mga Site {#your-sites-are-safe}

- Ang mga existing sites na ginawa gamit ang Site Builder mode ay patuloy na gumagana
- Walang pagkawala ng data o pagkaantala sa site
- Maaari mo pa ring i-manage ang iyong mga site nang normal

### Lumipat sa Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Para sa pag-set up ng bagong site o pagbabago ng theme, gamitin ang Setup Assistant agent:

```
"Help me set up a new site"
```

o

```
"Start the Theme Builder onboarding"
```

Ang Setup Assistant agent ay nagbibigay ng parehong functionality ngunit mas flexible.

## Paghahambing: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (Inalis) | Setup Assistant (Bago) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Predefined templates | Custom generation |
| Customization | Limited options | Full design system |
| Site brief | Not stored | Persistent memory |
| Future sessions | Repeat setup | Use stored site_brief |
| Flexibility | Fixed workflow | Adaptive conversation |

## Paglipat sa Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Para sa mga Bagong Site {#for-new-sites}

Sa halip na gumamit ng Site Builder mode:

1. Mag-request: "Help me set up a new site"
2. Gagabayan ka ng Setup Assistant agent sa:
   - Layunin at mga goals ng site
   - Target audience
   - Brand identity
   - Theme generation
   - Paunang configuration

### Para sa mga Existing Sites {#for-existing-sites}

Kung mayroon kang existing site na galing sa Site Builder mode:

1. Maaari mo itong ipagpatuloy na gamitin nang walang pagbabago
2. Para i-update ang theme, mag-request: "Redesign my site"
3. Tutulungan ka ng Setup Assistant agent na gumawa ng bagong theme
4. Mananatiling hindi nagbabago ang data ng iyong site

### Para sa Pagbabago ng Theme {#for-theme-changes}

Sa halip na pagpili ng theme sa Site Builder mode:

1. Mag-request: "Change my theme"
2. Ang Setup Assistant agent ay:
   - Magtatanong tungkol sa iyong design preferences
   - Magge-generate ng custom theme
   - I-a-activate ito sa iyong site

## Mga Pangunahing Pagkakaiba {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Choose a template
2. Select a theme
3. Configure basic settings
4. Done
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## Mga Benepisyo ng Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Mas Flexible {#more-flexible}

- Ilarawan ang iyong site sa natural na wika
- Makakuha ng custom recommendations
- Umaangkop sa iyong specific na pangangailangan

### Mas Maganda ang Customization {#better-customization}

- Custom theme generation
- Design system decisions
- Persistent design tokens

### Persistent Memory {#persistent-memory}

- Naka-store ang iyong site_brief
- Naiintindihan ng mga future agents ang iyong site
- Hindi na kailangang ulitin ang setup information

### Integrated Workflow {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Lahat ay nagtutulungan nang walang aberya

## Troubleshooting {#troubleshooting}

### Hindi Ko Makita ang Site Builder mode {#i-cant-find-site-builder-mode}

Inalis na ang Site Builder mode. Gamitin ang Setup Assistant agent sa halip:

```
"Help me set up a new site"
```

### Gusto Kong Gumawa Ulit ng Site mula sa Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Maaari mo itong gawin ulit gamit ang Setup Assistant agent:

1. Mag-request: "Help me set up a new site"
2. Ilarawan ang layunin at design ng iyong orihinal na site
3. Magge-generate ang agent ng katulad na theme
4. Ma-i-store ang iyong site_brief para sa future reference

### Hindi Gumagana ang Aking Existing Site Builder Site {#my-existing-site-builder-site-isnt-working}

Ang mga existing sites na ginawa gamit ang Site Builder mode ay patuloy na gumagana. Kung nakakaranas ka ng problema:

1. I-check na active pa rin ang iyong theme
2. I-verify na enabled ang iyong mga plugins
3. I-check ang WordPress error logs
4. Makipag-ugnayan sa support kung nagpapatuloy ang problema

### Pwede Ko Pa Bang Gamitin ang Lumang Site Builder Templates Ko? {#can-i-still-use-my-old-site-builder-templates}

Wala nang available na Site Builder templates. Gayunpaman:

- Ang iyong mga existing sites ay patuloy na gumagana
- Maaari kang gumawa ulit ng katulad na sites gamit ang Setup Assistant agent
- Nagbibigay ang Setup Assistant agent ng mas maraming customization options

## Mga Susunod na Hakbang {#next-steps}

1. **Para sa mga bagong site**: Gamitin ang Setup Assistant agent
2. **Para sa mga existing sites**: Ipagpatuloy ang paggamit nang walang pagbabago
3. **Para sa pagbabago ng theme**: Mag-request ng tulong mula sa Setup Assistant agent
4. **Para sa pagpapaganda ng design**: Gamitin ang Design System Aesthetics skill

## Kaugnay na Topics {#related-topics}

- **Theme Builder Onboarding**: Guided setup para sa custom themes
- **Setup Assistant Agent**: Agent-guided site setup
- **Site Specification Skill**: Tukuyin ang mga layunin at audience ng iyong site
- **Design System Aesthetics Skill**: Pagpino sa visual identity ng iyong site
