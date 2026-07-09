---
title: Til að fjarlægja Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Tilkynning um fjarlagning Site Builder Mode {#site-builder-mode-removal-notice}

**Site Builder mode hefur verið fjarlagt í Superdav AI Agent v1.12.0.** Ef þú varðir að nota Site Builder mode, þurftu að skila yfir á **Setup Assistant agent** fyrir þróun þema og uppsetning staðar.

## Hvað hefur verið að? {#what-happened}

### Site Builder Mode (Gamli) {#site-builder-mode-legacy}

Site Builder mode var leiðarleiðar greiningarferliinn sem var notaður til:

- Sköpun staðar frá mallum
- Innstillingar grunnþátta
- Val á þema
- Uppsetning fyrri innihalds

### Hvað hefur vakið það? {#what-replaced-it}

**Setup Assistant agent** tekur nú í hagsmuna allra Site Builder greininga með:

- Flekkarfari, greiningarleiðar uppsetningu
- Betri valkostir til að þema breyta
- Samstarf við Theme Builder innleganir
- Varðveitt minni `site_brief` fyrir framtíðar sessjónir

## Ef þú varðir að nota Site Builder Mode {#if-you-were-using-site-builder-mode}

### Staðir þín eru trygg {#your-sites-are-safe}

- Til staðar staðir sköpt með Site Builder mode verða enn að virka
- Engin tap af upplýsingum eða viðbrögð á staðinum
- Þú getur haldið yfir staðir þín sem viðeigandi

### Skila yfir á Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Til nýr uppsetninga staðar eða breytinga í þemum, nota Setup Assistant agent:

```
"Help me set up a new site"
```

eða

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent býður fram sama möguleika með fleiri flegur.

## Samanburður: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Eiknum | Site Builder (Fjarlagður) | Setup Assistant (Nýr) |
|---------|----------------------|----------------------|
| Uppsetningarmetód | Leiðarleiðar form | Greiningar samtal |
| Val á þema | Fyrirbestíllum mallum | Handlögi sköpun |
| Breyti | Flegur valkostir | Full design system |
| Site brief | Ekki var varðveitt | Varðveitt minni |
| Framtíðar sessjónir | Upprepeat uppsetningu | Nota varðveitt site_brief |
| Flekkarfari | Fasta grein | Tilvísandi samtal |

## Skila yfir á Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Til nýr staðir {#for-new-sites}

Í stað þess að nota Site Builder mode:

1. Skynjun: "Help me set up a new site" (Hjálpa mér við að sett upp nýtt síti)
2. Setup Assistant agent mun leiða þig í gegnum:
   - Síðuform og markmið síðar
   - Lífandi miðlun (Target audience)
   - Brand identity (Brand skilningur)
   - Theme generation (Sköpun á theme)
   - Initial configuration (Byrjunskilning)

### Á fyrirfram tilstaða síti (For Existing Sites) {#for-existing-sites}

Ef þú hefur núverandi síti sem var sett upp með Site Builder mode:

1. Þú getur haldið þessu í gang eins og það er
2. Til að uppfærja theme-ann, skynjun: "Redesign my site" (Upphæfa mitt síti)
3. Setup Assistant agent mun hjálpa þér við að skapa nýtt theme
4. Data á sítið þitt er óbreytt

### Á breytingar í theme-inum (For Theme Changes) {#for-theme-changes}

Í stað valsins af theme-um í Site Builder mode:

1. Skynjun: "Change my theme" (Breyta mitt theme)
2. Setup Assistant agent mun:
   - Spyr um designforðunir þín
   - Skapa sérstaka theme
   - Aktiva theme-ann á sítið þínu

## Mikilvægar skilningarskilpur (Key Differences) {#key-differences}

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

## Áttekjur fyrir Setup Assistant Agent (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Fleiri möguleikar (More Flexible) {#more-flexible}

- Skrifa um sítið þitt á natúrulegum tungumáli
- Fá sérstaka tillaga
- Tilbyrða til þess sem þú þarft

### Betri tilbygging (Better Customization) {#better-customization}

- Sköpun sérstaka themes
- Ákvörðir um design system
- Varðvísir um design token

### Varðveitt minni (Persistent Memory) {#persistent-memory}

- Þín `site_brief` er varðveitt
- Framtíðar agentir skilja síti þitt
- Engin þörf til að uppreyna sett upp upplýsingum aftur

### Samþættur ferli (Integrated Workflow) {#integrated-workflow}

- Onboarding theme builders
- Design System Aesthetics skill
- Fögn til Visibility controls
- All work together seamlessly

## Áttekjur fyrir ákveðna vafinn (Troubleshooting) {#troubleshooting}

### Ég finn ekki Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode hefur verið fjutt. Notaðu Setup Assistant agent í stað þess:

"Hjálpa mér á að sett upp nýtt svið"

### Vilja ég byggja upp sitet nýtt frá Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Þú getur byggja upp það með hjálp í viðbót (Setup Assistant) agentnum:

1. **Skiljanleiki**: "Hjálpa mér á að sett upp nýtt svið"
2. **Skjalda**: Skjaldi um tilgang og hönnun fyrri sitets þitt
3. **Agenturinn** mun gera lítið eins og það er í því sem var fyrr eftir
4. Þin `site_brief` (sitets skýrslu) verður fanga fyrir framanlegt

### Sitet mitt með Site Builder virkar ekki {#my-existing-site-builder-site-isnt-working}

Sitir sem eru sköptar með Site Builder mode virka áfram. Ef þú upplifir vanda:

1. **Skennu** að þema þitt sé enn aktivt
2. **Staðfesti** að þín pluginir séu aktiva
3. **Skennu** WordPress villugylf (error logs)
4. **Vinsandi** við stuðninginn ef vandamálin varðast stöðugt

### Get ég enn notaja gamla Site Builder temaplakka? {#can-i-still-use-my-old-site-builder-templates}

Site Builder temaplakkar eru ekki lengur til að nota. Hins vegar:

- Þínir núverandi sitir virka áfram
- Þú getur byggja upp lítið eins og það er í þeim með Setup Assistant agentnum
- Setup Assistant agenturinn býður upp á meiri möguleika fyrir þjónustu (customization)

## Næstu skref {#next-steps}

1. **Fyrir ný sitin**: Nota Setup Assistant agentann
2. **Fyrir núverandi sitin**: Vitið fram og nota þau eins og þeir eru
3. **Fyrir breytingar á temum**: Skilja hjálp frá Setup Assistant agentnum
4. **Fyrir að finna hönnun í betri tilvísun**: Nota Design System Aesthetics skilyrðinguna (skill)

## Tengdum efni {#related-topics}

- **Theme Builder Onboarding**: Leiðbeitt sett upp fyrir sérsniðna temaplakkar
- **Setup Assistant Agent**: Sett upp sitet með leiðbeiningu frá agenti
- **Site Specification Skill**: Skjaldi á lögum og hámarka sitets þíns og aðilfelli
- **Design System Aesthetics Skill**: Finna hönnun sitets þíns í betri tilvísun
