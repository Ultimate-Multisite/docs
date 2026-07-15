---
title: Uburyo bwo kwibanda ku Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Urugerer Ubwumva W'Umuhanga (Theme Builder Onboarding Flow)

Superdav AI Agent v1.12.0 yitangira **uwo muhanga w'ubwumva (Theme Builder onboarding flow)** uho muvugwa kandi ubufasha ukugira umuhere w'ubushobozi bwawe bwiza, uho gukora theme ya custom cyane mu gihe cyo gutangira. Iyo igihe cyo mbere, iyo ubanze Site Builder mode (mode y'ubwumva) n'uwo mu buryo ufite ubwoba kandi wibone ubufasha bw'agent.

## Uburyo bwo muhanga w'ubwumva (Theme Builder Onboarding Flow) ni iki? {#what-is-the-theme-builder-onboarding-flow}

Uwo muhanga w'ubwumva ni umuganda w'ubwumva (setup wizard) witeguye ukugira ibi:

- Guhagarara ku buryo uburyo bwa gukora (amashanyarazi, uburyo bw'ubwumva, uburyo bwo gutera indwara)
- Gukoresha ubwoba bwa site yawe mu buryo bwo kubona ibyo wifuza
- Gutangira theme ya custom itandukanye na ibyo wifuza
- Guhagarara theme yayo gusa iyo ufunguye

Uwo muhanga uho muvugwa n'ubushobozi bwa **Setup Assistant agent**, uwo mufasha gufata ibyo ushaka kandi uburyo bwo gutera theme yawe mu gihe cyo gutera.

## Gutangira Umuhanga w'ubwumva (Starting the Theme Builder Onboarding) {#starting-the-theme-builder-onboarding}

### Gukora Icyo Cy'Urugero (First-Run Setup) {#first-run-setup}

Iyo ubanze Superdav AI Agent ku mpamvu ya WordPress yashya, uza kubona iki:

```
Mwaramutse mu Superdav AI Agent!

Ubwishaka gukora iki?
1. Gukora theme ya custom (Theme Builder)
2. Gutera theme yakoreshejwe
3. Guhagarara ibyo ku gihe cyacu
```

Wumva **"Gukora theme ya custom"** kugira ngo uingire mu muhanga w'ubwumva.

### Gukora Icyo Cy'Urugero (Manual Activation) {#manual-activation}

Ushobora kandi gutangira muhanga w'ubwumva mu gihe cyose ukusaba:

```
"Start the Theme Builder onboarding"
```

cyangwa

```
"Help me create a custom theme"
```

## Icyiciro Cy'Umuhanga (The Onboarding Steps) {#the-onboarding-steps}

### Icyiciro 1: Ubwoba bwo Gukora (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent yandikira ku buryo uhoza gukora theme yawe:

```
Ushaka gukora theme yawe mu buryo bwo?
- Uburyo bwo guhagarara (Ndiyo ntabona ibyo kandi ntabona ubwoba)
- Gukora cyangwa gutera (Ndiyo ntabona uburyo bwo kubona ibyo kandi wibone uburyo bwo gukora)
```

**Uburyo bwo guhagarara (Guided mode)** ni umuntu ushobora gukoresha cyane; agent yandikira amashanyarazi ku buryo bw'ubushobozi bwawe n'ibyo uhoza.

### Icyiciro 2: Ubwoba bwo Site (Site Specification) {#step-2-site-specification}

Ushobora kubazwa ibi kuri site yawe:

- **Uburyo y'isondwa**: E-commerce, blog, portfolio, SaaS, n'ibindi.
- **Umuntu w'ubwujobozi (Target audience)**: Abantu bafite uburyo bwo gukoresha umwezi?
- **Amakuru y'ubwoko (Brand colors)**: Amakuru y'ingenzi n'amakuru y'ibindi (cyangwa "Ntabwo ntabona").
- **Uburyo bw'ingingo (Tone)**: Ubutabera, ubutabera, ubutabera mu buryo bwa kumenya, n'ibindi.

Iyi makuru yose irimo mu **site_brief** memory yawe, kandi abantu b'ubwujobozi (agents) bafite inama ku gihe cy'ibindi.

### Icyemezo cy'Uburyo bw'ingingo (Step 3: Design System Decisions) {#step-3-design-system-decisions}

Igihe cyo gukora ibyemezo by'uburyo bw'ingingo, umuntu w'ubwujobozi yugence ku gihe cyo gutanga design tokens:

- **Typography**: Uburyo bwo kumenya (serif, sans-serif, monospace) n'umwihariko wo mu gukoresha.
- **Color palette**: Amakuru y'ingenzi, amakuru y'ibindi, amakuru y'ubwoko, kandi amakuru y'ubwujobozi (neutral colors).
- **Spacing**: Uburyo bwo gutanga ubwoko bw'ingingo (compact, normal, cyangwa spacious layouts).
- **Motion**: Icyemezo cy'ibikorwa by'umwihariko n'ibikorwa by'uburyo (if desired).

### Gutanga Uburyo bw'ingingo (Step 4: Theme Generation) {#step-4-theme-generation}

Umuntu w'ubwujobozi w'Umuvugizi (Setup Assistant agent) yugence uburyo bwo gukora theme yawe ya custom ku gihe cyo gutanga ibi bikurikira:

- `theme.json` ikoresheje design tokens yose zawe
- Block templates mu buryo bw'ibintu by'ubwoko (homepage, blog, contact)
- Styles za block zikoresheje design system yawe
- Metadata ya theme n'ibyo uburyo bwo gukoresha WordPress

### Gutangira no Gushyira mu bikorwa (Step 5: Activation and Verification) {#step-5-activation-and-verification}

Theme igaragara cyangwa ikoreshwa mu gihe cyo gutanga, kandi uza kumenya iki:

```
✓ Theme yawe ya custom yari itangiraho!
  Izina ry'theme: [Site Name Yawe] Theme
  Amakuru: [Primary] / [Secondary]
  Uburyo bwo kumenya (Typography): [Font Family]

  Yera site yawe kugira ngo umenye uburyo bw'ingingo run cyiza.
```

Icyose, uza kumenya site yawe kugira ngo yari itangiraho neza mu gukoresha.

## Icyemezo cy'Uburyo bwo Gukora Site n'site_brief Memory {#site-specification-and-sitebrief-memory}

Mu gihe cyo gutanga ibyo (onboarding), umuntu w'ubwujobozi yugence uburyo bw'isondwa yawe mu category ya **site_brief** memory. Iyi makuru zikoresha:

- Uburyo bwo gukora site n'ibyo ukeneye
- Umuntu w'ubwujobozi (Target audience)
- Amakuru y'ingenzi, amakuru y'ibindi, uburyo bw'ingingo
- Icyemezo cy'uburyo bw'ingingo
- Uburyo bwo gutanga ibintu

### Uburyo bwo gukoresha site_brief Memory {#why-sitebrief-matters}

Mu gihe cyo gukora ibi bikurikira, abantu bafite inama ku gihe cyo gukoresha **site_brief** memory kugira ngo:

Gukoresha uburyo bwo gukoresha site yawe_brief

Wowe mushobora kugira umwujiza (agent) ubu:

```
"Show me my site brief"
```

cyangwa

```
"What do you know about my site?"
```

Umwujiza uzakubwira ibyo wariwe yagize mu gukoresha.

## Gukoresha Icyiza Nyuma Y'uko Ugiye Gutangira (Onboarding) {#viewing-your-sitebrief}

Nyuma yo gukemura uburyo bwo gutangira Theme Builder, uza kuba:

### Gukoresha Ubushobozi bwo Design System Aesthetics Skill {#customizing-after-onboarding}

Gukoresha ibyo:

```
"Refine the typography to be more modern"
```

cyangwa

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** izakubwira uko uza gukora uburyo bwo guhindura design mu buryo bwiza.

### Gukoresha theme.json Gutera {#use-the-design-system-aesthetics-skill}

Abantu bashobora bakoresha ibyo: Edit `/wp-content/themes/[theme-name]/theme.json` kugira ngo wihindure:

- Color tokens (ibyo bishobora gukoreshwa mu guhindura uburyo bwo gukoresha amakuru y'ubwoko)
- Typography scales (uko ubushobozi bw'umwuka bwa cyerekeza)
- Spacing values (amabwiriza y'umutekano hagati)
- Border and shadow definitions (ibyo bikorera umukoresha n'umutekano mu gukoresha)

### Gukora Custom Block Templates {#edit-themejson-directly}

Gukoresha block editor ya WordPress kugira ngo wukore templates zikoreshwa ku:

- Homepage layouts (Uburyo bwo gukoresha homepage)
- Blog post pages (Icyongereza cy'amajwi)
- Product pages (Icyongereza cy'ibintu bikoreshwa mu dukoresha)
- Contact forms (Amabwiriza y'ubwumvikane)

## Uburyo bwo Gukumbura: Mu gihe cy'Uburyo Bwo Gutangira (Onboarding) {#create-custom-block-templates}

| Icyiciro | Site Builder (Icyerekeza) | Theme Builder (Urururu) |
|---|---|---|
| Uburyo bwo gutangira | Form y'ubwujiza (Wizard-based form) | Guhabwa n'umwujiza (Agent-guided conversation) |
| Gukora theme | Templates zikoreshwa cyane | Scaffolding cy'ingenzi (Custom scaffolding) |
| Design tokens | Gutera mu buryo bwo gukoresha | Guhagararirwa mu site_brief |
| Uburyo bwo guhindura | Icyerekeza cyangwa cyiza | Gukoreshwa cyane |
| Uburyo bwo gutera mu gihe cy'ubwoko | Nta gukumburwa | Gutagize mu site_brief |

## Guhagararira Icyiciro (Troubleshooting) {#comparison-old-vs-new-onboarding}

**Uburyo bwo gutangira ntabyo yisigye**
- Gukoresha cyane: "Start the Theme Builder onboarding"
- Gushobora gukoresha ibi: Gushobora kumenya ko WordPress yawe iri mu gihe cy'ubwujiza (up to date)
- Gutera ngo umwujiza w'Ubufasha bwo gutangira (Setup Assistant agent) yari yisigye

**Site_brief ya ntabonye**
- Gukoresha ko umuntu (agent) yashobora kugera ku memory (ikumenyi)
- Muvuga ku umuntu: "Recall my site brief" (Gukoresha ibyerekeye uburyo w'ubwoko bwa site ryawe)
- Gushaka kumenya ko memory iri mu gihe cyacu (settings)

**Uburyo bw'umuri (theme) bwawe bwa ntashobora gukorwa**
- Gukoresha ubushobozi bwo Design System Aesthetics kugira ngo ubyerekeze
- Muvuga ku umuntu: "Regenerate the theme with [specific changes]" (Gusubiza uburyo bw'umuri n'ibyo wifuza)
- Gukora ubutumwa bwa theme.json mu buryo bwawe kugira ngo ubone neza

## Icyemezo cy'Umuco (Next Steps) {#troubleshooting}

Nyuma yisobanura gukoresha Theme Builder:

1. **Gushaka umwihariko w'ubwoko bwa site ryawe**: Gukora uburyo bwa site ryawe kugira ngo ubone uburyo bw'umuri bwa mbere
2. **Gusubiza uburyo (Refine the design)**: Gukoresha ubushobozi bwo Design System Aesthetics kugira ngo utangire gukora ibyo wifuza
3. **Kugira amakuru**: Tangira gukora amakuru y'ubwoko bwa site ryawe

4. **Gusobanura ubushobozi**: Gushaka kumenya ibindi byo umuntu (agent) nk'ibyo: scaffold-block-theme n'activate-theme
