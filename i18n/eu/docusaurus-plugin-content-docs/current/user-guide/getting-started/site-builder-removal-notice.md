---
title: Site Builder Moduaren Eraboligunea Iraitzia
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Moduaren Ezabatzea Batzagarria

**Site Builder modua daude Superdav AI Agent v1.12.0-an arautzen.** Site Builder modua erabiltzen duten dela, tema dezazteko eta site bat argiatzeko **Setup Assistant agent**-era migraatu behar duzu.

## Zer Ekin Arriskatzen? {#what-happened}

### Site Builder Modua (Legacy) {#site-builder-mode-legacy}

Site Builder modua daue:

- Template-ek batzuk siteak emateko
- Lehen eskaintzak konfiguratzeko
- Tema bat aukeratzeko
- Lehen kontuentu bat argiatzeko

### Zer Aurre egin? {#what-replaced-it}

**Setup Assistant agent**-ek arau guztia Site Builder funtzioak eskaintzen du:

- Modu handiagoa, agent-ek gurekin egindako eskaintzak
- Tema dezazteko moduan mehatzeko aukera$
- Theme Builder-rekin integrazioa
- Irrendeko sesioetara ireki sitie $site_brief memory

## Site Builder Modua Erbigoan Zuzenean {#if-you-were-using-site-builder-mode}

### Siteak Segura dira {#your-sites-are-safe}

- Siteak Site Builder modua erabiliz ezarritak jarraitzen du
- Data dezazte edo sitea disturbitzeko problema ez daude
- Siteak normalmentu jartzen jarraitu dezake

### Setup Assistant Agent-era Migraatu {#migrate-to-setup-assistant-agent}

Sitea berria argiatzeko edo tema aldatzeko, Setup Assistant agenta erabiliz:

```
"Help me set up a new site"
```

nondra

```
"Start the Theme Builder onboarding"
```

Setup Assistant agentak irrendeko funtzioak eskaintzen du, baina moduan handiagoa.

## Ezkutzea: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Karakteristika | Site Builder (Erbigoan) | Setup Assistant (Beria) |
|---------|----------------------|----------------------|
| Argipena | Wizard form | Agent conversation |
| Tema aukera | Template-ek ezarritutakoak | Erregitu generazioa |
| Modu handiagoa | Aukera murrieta | Sistema dezazteko guztia |
| Site brief | Ez dago ireki | Irrendeko memorya |
| Sesioetara irrendeko | Argipena berria | Stored site_brief erabiliz |
| Moduan handiagoa | Workflow ezarrituta | Batzagarri adaptoa conversation |

## Setup Assistant Agent-era Migraatu {#migrating-to-setup-assistant-agent}

### Siteak Berriak {#for-new-sites}

(Eskerrik asko, aipatzen da)

Site Builder modua erin:

1. "Ezin duta leku berri webgaitoa" (Help me set up a new site)
2. Le Setup Assistant agent-ek irrau daiteko:
   - Webgaitaren aurrera eta objetivoak
   - Target publikoak
   - Brandaren identitatea
   - Theme generazioa
   - Aurrerako konfiguratzea

### Iragatik Siteak (For Existing Sites) {#for-existing-sites}

Iragatik Site Builder modua eratu du:

1. Berri ere erabiltu dezakezu
2. Themea update egin nahi du? "Webgaitoa redizain" (Redesign my site) esan du.
3. Le Setup Assistant agent-ek theme berria emandareko lagundu.
4. Webgaitaren datuak ez aldatzen da.

### Theme Aldaketa (For Theme Changes) {#for-theme-changes}

Site Builder moduan themea iragatik:

1. "Me themea aldatu" (Change my theme) esan du.
2. Le Setup Assistant agent-ek:
   - Design preferentziak ezagutzeko gautela
   - Custom theme bat emandareko
   - Webgaitaren itxarretan aktibatu

## Gaurren Aurreko Errakundeak (Key Differences) {#key-differences}

### Site Builder Modua {#site-builder-mode}

```
1. Templatea aukeratu du
2. Themea iragatik
3. Baserako konfiguratzea
4. Lan gertu du
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Webgaitaren aurrera eta objetivoak hitzlaraz endikatu du
2. Target publikoak definitu du
3. Design preferentziak aukeratu du
4. Agent-ek custom theme bat emandareke
5. Agent-ek themea aktibatu du
6. Iragatik datua iragatik ezarritako sesioetan bitarteko ematuta dago
```

## Setup Assistant Agentaren Errakundeak (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Gehiago Flexibilia (More Flexible) {#more-flexible}

- Webgaitaren hitzlaraz endikatu du
- Custom rekomendazioak hartu du
- Itxarretako beharrezko espezifikazioetara adapto da

### Hobitzak Eragiten (Better Customization) {#better-customization}

- Custom theme generazioa
- Design system erabakiak
- Persistente design tokens

### Memoria Persistente (Persistent Memory) {#persistent-memory}

- Webgaitaren `site_brief` iragatik ezarritako da
- Iragatik agent-ek webgaitaren erantzunak jartzen du
- Aurrerako konfiguratzeko informazioa iragatik ez du beharrezkoa

### Fluxu Integratua (Integrated Workflow) {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Visibility controls erabilera
- Hau guztiek ezberdinetan bat egiten dute

## Iragatik Errakundeak (Troubleshooting) {#troubleshooting}

### Site Builder Modua ez aurkitzen dutena {#i-cant-find-site-builder-mode}

Site Builder modua arau daiteke. Le Setup Assistant agenta erabili:

"Ekin dut leku daitea leku webgune berri"

### Site Builder-tik situa bat lortu nahi du {#i-want-to-recreate-a-site-from-site-builder}

Site Builder-tik situa berri ere erabiliziek:

1. Alegia: "Ekin dut leku daitea leku webgune berri"
2. Itzultu sitiat eta diseinaren espezifikazioa adierazki ditu
3. Agenteak tema bat jartuzten du
4. Aapena `site_brief` daitea zukua eginduz

### Situa dagoen Site Builder-tik ez dut {#my-existing-site-builder-site-isnt-working}

Site Builder moduarekin ezarritutako sitiat ez dute jarraitzen jakin. Problema bat erabiliziek:

1. Tema bat aktibo dagoela ikustu
2. Pluginak aktiboa dela jartu
3. WordPress error logs-ek ikustu
4. Problema bat jarraituz dutenean suporta berriko

### Zure Site Builder-tik joanariak erabiltzen dezake? {#can-i-still-use-my-old-site-builder-templates}

Site Builder-tik joanariak ez daiteke erabiliziek. Hau beti dagoen:

- Zure sitiat dagoen jakin
- Setup Assistant agentearekin jartuzten sitiat jartuzten du
- Setup Assistant agenteak gehiago aukerak ematen du

## Irudiak (Next Steps) {#next-steps}

1. **Situa berriak**: Setup Assistant agenta erabiliz
2. **Situa dagoen jakin**: Hau beti dagoen bezala erabiltu
3. **Tema aldatzeko**: Setup Assistant agenteari laguntza eskatzen du
4. **Diseinu hobetzeko**: Design System Aesthetics skill-a erabiliz

## Errelakoki Errelakoki (Related Topics) {#related-topics}

- **Theme Builder Onboarding**: Tema zuzen bat jartuzten leku bat
- **Setup Assistant Agent**: Agentearekin jartuzten sitiat jartuzten leku bat
- **Site Specification Skill**: Zure sitiatako aurretxeko eta audientziaren objektuak definitu
- **Design System Aesthetics Skill**: Zure sitiatako visua identidad hobetzeko
