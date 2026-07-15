---
title: Paunawa sa Pag-alis ng Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Paunawa Tungkol sa Pag-alis ng Site Builder Mode

**Inalis na ang Site Builder mode sa Superdav AI Agent v1.12.0.** Kung gumagamit ka pa ng Site Builder mode, dapat kang lumipat na sa **Setup Assistant agent** para sa paggawa ng theme at pag-set up ng site.

## Ano ang Nangyari? {#what-happened}

### Site Builder Mode (Luma) {#site-builder-mode-legacy}

Ang Site Builder mode ay isang interface na parang wizard para sa mga sumusunod:

- Paggawa ng sites mula sa mga template
- Pag-configure ng mga basic settings
- Pagpili ng theme
- Pag-set up ng unang content

### Ano ang Pumalit Dito? {#what-replaced-it}

Ang **Setup Assistant agent** na ngayon ang humahawak sa lahat ng functionality ng Site Builder mode gamit ang:

- Mas flexible at agent-guided setup
- Mas magagandang opsyon para i-customize ang theme
- Integrasyon sa Theme Builder onboarding
- Persistent site_brief memory para sa mga susunod na sesyon

## Kung Gumagamit Ka Pa ng Site Builder Mode {#if-you-were-using-site-builder-mode}

### Ang Iyong Mga Site ay Ligtas {#your-sites-are-safe}

- Ang mga existing sites na ginawa gamit ang Site Builder mode ay patuloy na gumagana pa rin
- Walang pagkawala ng data o aberya sa site
- Maaari mo pa ring pamahalaan nang normal ang iyong mga site

### Lumipat sa Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Para sa bagong setup ng site o pagbabago ng theme, gamitin ang Setup Assistant agent:

```
"Help me set up a new site"
```

o

```
"Start the Theme Builder onboarding"
```

Ang Setup Assistant agent ay nagbibigay ng parehong functionality pero mas flexible.

## Paghahambing: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Katangian | Site Builder (Tinanggal) | Setup Assistant (Bago) |
|---|---|---|
| Paraan ng Setup | Wizard form | Usapan kasama ang Agent |
| Pagpili ng Theme | Predefined templates | Custom generation |
| Pag-customize | Limitadong opsyon | Buong design system |
| Site brief | Hindi na iniimbak | Permanenteng memorya |
| Mga susunod na sesyon | Ulitin ang setup | Gamitin ang naka-save na site_brief |
| Flexibility | Fixed workflow | Adaptive conversation |

## Paglipat sa Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Para sa mga Bagong Site {#for-new-sites}

Sa halip na gumamit ng Site Builder mode:

1. Request: "Tulungan mo akong mag-set up ng bagong site"
2. Ang Setup Assistant agent ay gagabay sa iyo sa mga sumusunod:
   - Layunin at mga mithiin ng site
   - Target audience (mga tao na gusto mong abutin)
   - Brand identity (pagkakakilanlan ng brand)
   - Pag-generate ng Theme
   - Paunang konfigurasyon

### Para sa mga Kasalukuyang Site {#for-existing-sites}

Kung mayroon kang existing site mula sa Site Builder mode:

1. Maaari mo itong gamitin nang tuloy-tuloy kung anong meron pa.
2. Para mag-update ng theme, humiling ka ng: "Redesign my site" (Baguhin ang disenyo ng aking site).
3. Tutulungan ka ng Setup Assistant agent na gumawa ng bagong theme.
4. Mananatiling hindi nagbabago ang data ng iyong site.

### Para sa Pagbabago ng Theme {#for-theme-changes}

Sa halip na pagpili ng theme sa Site Builder mode:

1. Humiling ka ng: "Change my theme" (Baguhin ang aking theme).
2. Ang Setup Assistant agent ay gagawin ang mga sumusunod:
   - Magtatanong tungkol sa iyong mga kagustuhan sa disenyo.
   - Gagawa ng custom theme.
   - Ipa-activate ito sa iyong site.

## Mga Pangunahing Pagkakaiba {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Pumili ng template
2. Piliin ang theme
3. I-configure ang mga basic settings
4. Tapos na
```

### Setup Assistant Agent {#setup-assistant-agent}

1. Ilarawan ang layunin ng iyong site
2. Tukuyin ang iyong target audience
3. Pumili ng mga kagustuhan sa disenyo
4. Ang Agent ay gumagawa ng custom theme
5. Ang Agent ay nag-aactivate ng theme
6. Ang site brief ay iniimbak para sa mga susunod na sesyon

## Mga Benepisyo ng Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Mas Flexible {#more-flexible}

- Ilarawan ang iyong site gamit ang natural na wika
- Kumuha ng mga custom na rekomendasyon
- Umangkop sa iyong mga partikular na pangangailangan

### Mas Magandang Customization {#better-customization}

- Paglikha ng custom theme
- Mga desisyon tungkol sa design system
- Permanenteng design tokens

### Persistent Memory (Permanenteng Alaala) {#persistent-memory}

- Ang iyong site_brief ay iniimbak
- Ang mga susunod na agent ay maiintindihan ang iyong site
- Hindi na kailangang ulitin ang impormasyon ng setup

### Integrated Workflow (Pinagsamang Daloy ng Trabaho) {#integrated-workflow}

- Onboarding para sa Theme Builder
- Kakayahan sa Design System Aesthetics skill
- Kakayahang kontrolin ang Visibility controls
- Lahat ay gumagana nang walang abala

Inalis na ang Site Builder mode. Gamitin na ang Setup Assistant agent:

```
"Help me set up a new site"
```

### Gusto kong gumawa ulit ng site mula sa Site Builder {#troubleshooting}

Maaari mo itong gawin gamit ang Setup Assistant agent:

1. Request: "Help me set up a new site" (Tulungan mo akong mag-set up ng bagong site)
2. Ilarawan ang layunin at disenyo ng iyong orihinal na site
3. Ang agent ay gagawa ng katulad na theme
4. Ang iyong `site_brief` ay itatago para sa susunod na paggamit

### Hindi gumagana ang aking kasalukuyang Site Builder site {#i-cant-find-site-builder-mode}

Ang mga existing sites na ginawa gamit ang Site Builder mode ay patuloy na gumagana. Kung nakakaranas ka ng problema:

1. Siguraduhin na aktibo pa rin ang iyong theme
2. I-verify kung naka-enable ang iyong mga plugins
3. Tingnan ang WordPress error logs
4. Makipag-ugnayan sa suporta kung may patuloy na problema

Hindi na available ang Site Builder templates. Gayunpaman:

- Ang iyong mga kasalukuyang site ay patuloy na gumagana
- Maaari kang gumawa ng katulad na mga site gamit ang Setup Assistant agent
- Nagbibigay ang Setup Assistant agent ng mas maraming opsyon para sa pag-customize

## Mga Susunod na Hakbang {#i-want-to-recreate-a-site-from-site-builder}

1. **Para sa mga bagong site**: Gamitin ang Setup Assistant agent
2. **Para sa mga umiiral na site**: Ipagpatuloy itong gamitin nang walang pagbabago
3. **Para sa pagpapalit ng theme**: Humingi ng tulong mula sa Setup Assistant agent
4. **Para sa pagpino ng disenyo**: Gamitin ang Design System Aesthetics skill

## Mga Kaugnay na Paksa {#my-existing-site-builder-site-isnt-working}

- **Theme Builder Onboarding**: Gabay na setup para sa mga custom theme
- **Setup Assistant Agent**: Site setup na ginagabayan ng agent
- **Site Specification Skill**: Tukuyin ang mga layunin at audience ng iyong site
- **Design System Aesthetics Skill**: Ayusin ang biswal na pagkakakilanlan ng iyong site
