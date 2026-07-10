---
title: Urugero rw'Urugero rwo Gusubiza Uburyo bwo Gutegura Icyemezo
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Urugero ku Gukoresha Site Builder Mode {#site-builder-mode-removal-notice}

**Site Builder mode yashyemo mu Superdav AI Agent v1.12.0.** Iyo wari uri gukoresha Site Builder mode, ugomba kwihagarira **Setup Assistant agent** kugira ngo utandire theme n'uburyo bwo gutangira site.

## Urugero ni iki cyari? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Site Builder mode yari uburyo bwo gukoresha umwujaji (wizard-based interface) ku bijyanye n'ibintu byo:

- Gukora sites ku template
- Gutangira ibindi by'ubwujgwa (basic settings)
- Gukoresha theme
- Gutangira ubushobozi bwo gukoresha (initial content)

### Iki cyari cyagize iki? {#what-replaced-it}

**Setup Assistant agent** uyu munsi ugira uburyo bwo gukora Site Builder mode mu gihe cyose, kandi yashobora:

- Gukora ibindi by'ubwujgwa byiza kandi bikorera umugambi (agent-guided setup)
- Gutera ubushobozi bwo gukoresha theme mu buryo bwiza
- Gukoresha uburyo bwo gutandira Theme Builder onboarding
- Kugira memory ya site_brief itandukanye ku gihe cy'ubwujgwa (persistent site_brief memory) kugira ngo yoroshye ibindi by'umwihariko mu gihe cy'ibindi.

## Iyo Wari Ugiye Gukoresha Site Builder Mode {#if-you-were-using-site-builder-mode}

### Sites Yawe Zishobora Gutera {#your-sites-are-safe}

- Sites zishobora gukoreshwa ku Site Builder mode zishobora gukoreshwa mu gihe cyose
- Nta gukoresha ibindi (data loss) cyangwa guhindura ubushobozi bwo site
- Ushobora gukoresha sites yawe nk'uko wari uri mu gihe cyose

### Gukoresha Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Kugira ngo utangire site yashya cyangwa ugiye gutera theme, gukoresha Setup Assistant agent:

```
"Help me set up a new site"
```

cyangwa

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent igira uburyo bwo gukora ibindi by'umwihariko mu gihe cyose, kandi yashobora gutera ubushobozi.

## Urugero: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Icyemezo | Site Builder (Yagize) | Setup Assistant (Shya) |
|---------|----------------------|----------------------|
| Uburyo bwo gutangira | Wizard form | Guha umwujaji (Agent conversation) |
| Gukoresha theme | Template zishobora gukoreshwa mu mategeko | Gutera uburyo bwo gukora (Custom generation) |
| Ubushobozi bwo gukoresha | Icyemezo cyiza cyangwa cyari cyizera | Uburyo bw'ubwujgwa (Full design system) |
| Site brief | Nta gukoreshwa mu gihe cyose | Memory itandukanye (Persistent memory) |
| Gihe cy'ibindi | Gukora buri gihe | Gutangira gukoresha site_brief yashoboraga gukoreshwa |
| Ubwujgwa | Uburyo bwo gukora mu gihe cyose | Guhindura umugambi (Adaptive conversation) |

## Gutera ku Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Ku Sites Zishya {#for-new-sites}

Badutose u gukoresha Site Builder mode:

1. Umukono: "Niyibwireye site yashobora"
2. Agent ya Setup Assistant izakugurira ku buryo bishobora:
   - Uburyo bw'ubwujobozi n'ibyo ukeneye (Site purpose and goals)
   - Abantu wumukono (Target audience)
   - Ubwoko bw'ubwoko (Brand identity)
   - Gutera umwe mu theme (Theme generation)
   - Uburyo bwo gukoresha (Initial configuration)

### Ku bw'ibyo bishobora (For Existing Sites) {#for-existing-sites}

Niba ukeneye site yakiriye ku Site Builder mode:

1. Ufite uburyo bwo gukoresha uko ukeneye
2. Kumenya umwe mu theme, ntiwumukono: "Redesign my site"
3. Agent ya Setup Assistant izakugira umuhombo w'ubwoko bukwirwa
4. Uburyo bw'ubwujobozi bwo site bishobora bikoreshwa nk'uko bishobora

### Ku bw'ibyo bishobora (For Theme Changes) {#for-theme-changes}

Ndi umwe mu theme ku Site Builder mode:

1. Umukono: "Change my theme"
2. Agent ya Setup Assistant izakora iki:
   - Kugukoresha ibyo ukeneye mu gukoresha ubwoko
   - Gutera umwe mu theme w'ubwoko (Generate a custom theme)
   - Gukoresha ku site yawe

## Icyemezo cy'ibintu (Key Differences) {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Kugera uburyo bwo gukora (Choose a template)
2. Gutera umwe mu theme (Select a theme)
3. Gukoresha ibyo bikoresho by'ubwujobozi (Configure basic settings)
4. Umuntu yashoboye (Done)
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Gukoresha uburyo bwo gukora mu site yawe (Describe your site's purpose)
2. Gutera abantu wumukono (Define your target audience)
3. Kugera ibyo ukeneye mu bwoko (Choose design preferences)
4. Agent yigira umuhombo w'ubwoko bukwirwa (Agent generates custom theme)
5. Agent ikoresha umwe mu theme (Agent activates theme)
6. Uburyo bwo gukora byitwa ku gihe cy'ibindi (Site brief stored for future sessions)
```

## Icyemezo cy'ibintu (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Ubwujobozi bwiza (More Flexible) {#more-flexible}

- Kugera site yawe mu rwego rwa kumenya (Describe your site in natural language)
- Gutera uburyo bwo gukoresha byiza (Get custom recommendations)
- Gukora ibyo ukeneye cyane (Adapt to your specific needs)

### Uburyo bwo gukoresha bwiza (Better Customization) {#better-customization}

- Gutera umwe mu theme w'ubwoko (Custom theme generation)
- Icyemezo cy'uburyo bwo gukora (Design system decisions)
- Icyemezo cy'ibyo bikoresho by'ubwujobozi byitwa ku gihe (Persistent design tokens)

### Ubwujobozi bwihariye (Persistent Memory) {#persistent-memory}

- Uburyo bwo gukora (Your site_brief is stored)
- Agent zikumenya site yawe mu gihe cy'ibindi (Future agents understand your site)
- Nta ngaruka kumenya ibyo ukeneye ku gihe cy'ubwujobozi (No need to repeat setup information)

### Uburyo bwo gukora bwihariye (Integrated Workflow) {#integrated-workflow}

- Gutera umwe mu theme w'ubwoko (Theme Builder onboarding)
- Ubwoko bw'uburyo bwo gukoresha byiza (Design System Aesthetics skill)
- Icyemezo cyo gukoresha ibyo ukeneye (Ability Visibility controls)
- Bese bose bikora neza mu gihe cy'ibindi (All work together seamlessly)

## Gukoresha ibintu by'ubwujobozi (Troubleshooting) {#troubleshooting}

### Nta site ya Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode yagizeye. Usa Setup Assistant agent:

"Nshibujwe kugira uburyo mushya"

### Nshaka kubaka umuryo w'umuryo w'umuryo ku gukoresha Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Ushobora kubaka umuryo w'umuryo n'ubwujumbura bwo Setup Assistant agent:

1. **Gukoresha**: "Nshibujwe kugira uburyo mushya"
2. **Gusobanura** uburyo bw'umuryo wako mu gice n'ubwujumbura bwa umuryo wako w'urishyi
3. Ubutumwa butangira umuryo w'umuryo wako (theme)
4. Umwezi wa site_brief uhoza kubikoresha mu gihe cy'ibindi byo

### Umuryo wako w'Site Builder uyu munsi n'ubwujumbura bwawe n'ubwo bishobora gukora {#my-existing-site-builder-site-isnt-working}

Umuryo w'umuryo wako w'Site Builder uyu munsi n'ubwo bishobora gukoresha. He uzi umusaruro:

1. **Gushyira umwujaji** ko umuryo wako (theme) uyu munsi
2. **Kugera** ko plugins zawe zishobora gukoreshwa
3. **Gusobanura** error logs ya WordPress
4. **Kubwira** ku mwanya niba ibyo bishobora kwibuka

### Nshobora gukoresha templates za Site Builder za mbere? {#can-i-still-use-my-old-site-builder-templates}

Templates za Site Builder zishobora guhindurwa. Ariko:

- Umuryo wako uyu munsi n'ubwo bishobora gukoreshwa
- Uzi umuryo w'umuryo wako n'ibindi byo bishobora gukora n'Setup Assistant agent
- Setup Assistant agent yifashisha uburyo bwo gukora ibyo byo mu buryo bwiza

## Icyo gishobora kwiga {#next-steps}

1. **Kuva umuryo w'umuryo mushya**: Gukoresha Setup Assistant agent
2. **Kugira umuryo wako w'umuryo w'umuryo**: Kugabanya gukoresha uko uyu munsi n'ubwo bishobora gukoreshwa
3. **Guhindura umuryo (theme)**: Gushyira umwujaji ko Setup Assistant agent
4. **Gusobanura ubwujumbura bw'umuryo**: Gukoresha Design System Aesthetics skill

## Inzego zikurikira {#related-topics}

- **Onboarding ya Theme Builder**: Uburyo bwo gukora umuryo w'umuryo wako (theme) mu buryo bukurikirana
- **Setup Assistant Agent**: Gukora umuryo w'umuryo wako mu buryo uhoza agent
- **Site Specification Skill**: Kugena ibyo ukeneye mu site n'abantu bashobora gukoresha
- **Design System Aesthetics Skill**: Guhindura ubwujumbura bwo umuryo wako (visual identity)
