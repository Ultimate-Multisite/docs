---
title: Onboarding-flow for Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 introducerer en vejledende **Theme Builder onboarding flow**, som hjælper dig med at oprette et custom block theme under din indledende opsætning. Dette erstatter den gamle Site Builder mode med en mere fleksibel, agentassisteret tilgang.

## Hvad er Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow er en interaktiv opsætningswizard, der:

- Guider dig gennem designbeslutninger (farver, typografi, layout)
- Indsamler dine sites visuelle identitetspræferencer
- Genererer et custom block theme skræddersyet til dine behov
- Aktiverer temaet automatisk, når det er færdigt

Flowet drives af **Setup Assistant agent**, som stiller opklarende spørgsmål og bygger dit tema trin for trin.

## Start med Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Første Kørsel Opsætning (First-Run Setup) {#first-run-setup}

Når du først starter Superdav AI Agent på en ny WordPress installation, vil du se:

```
Velkommen til Superdav AI Agent!

Hvad vil du gerne gøre?
1. Byg et custom tema (Theme Builder)
2. Brug et eksisterende tema
3. Spring opsætningen over for nu
```

Vælg **"Build a custom theme"** for at komme ind i Theme Builder onboarding flow.

### Manuel Aktivering {#manual-activation}

Du kan også starte Theme Builder onboarding når som helst ved at anmode om:

```
"Start the Theme Builder onboarding"
```

eller

```
"Help me create a custom theme"
```

## Onboarding Trinene {#the-onboarding-steps}

### Trin 1: Modevalg (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent spørger om din præference:

```
Hvordan vil du bygge dit tema?
- Vejledt (Jeg stiller spørgsmål og bygger det for dig)
- Praktisk (Jeg viser dig mulighederne, og du beslutter)
```

**Vejledt mode** anbefales til de fleste brugere; agenten giver designanbefalinger baseret på din branche og dine mål.

### Trin 2: Sitespecifikation (Site Specification) {#step-2-site-specification}

Du vil blive spurgt om dit site:

- **Hjemmesidens formål**: E-handel, blog, portfolio, SaaS osv.
- **Målgruppe**: Hvem er dine besøgende?
- **Brandfarver**: Primære og sekundære farver (eller "jeg ved det ikke")
- **Tone**: Professionel, kreativ, legende, minimalistisk osv.

Denne information gemmes i din **site_brief** hukommelse, som agenterne refererer til i fremtidige sessioner.

### Trin 3: Designsystembeslutninger {#step-3-design-system-decisions}

Agenten guider dig igennem valget af design tokens:

- **Typografi**: Skrifttypefamilie (serif, sans-serif, monospace) og størrelsesstørrelse
- **Farvepalet**: Primære, sekundære, accent- og neutrale farver
- **Afstand**: Kompakt, normal eller rummelige layouts
- **Bevægelse**: Animationer og overgange (hvis ønsket)

### Trin 4: Tema-generering {#step-4-theme-generation}

Setup Assistant agenten opretter dit custom block theme med:

- `theme.json` indeholdende alle dine design tokens
- Block-skabeloner til almindelige layouts (forside, blog, kontakt)
- Custom block styles der matcher dit designsystem
- Tema metadata og WordPress support erklæringer

### Trin 5: Aktivering og Verifikation {#step-5-activation-and-verification}

Temaet aktiveres automatisk, og du vil se:

```
✓ Dit custom tema er nu live!
  Tema navn: [Dit Hjemmesidens Navn] Theme
  Farver: [Primær] / [Sekundær]
  Typografi: [Skrifttypefamilie]

  Besøg din side for at se det nye design.
```

Du kan derefter besøge din side for at bekræfte, at temaet vises korrekt.

## Websidespecifikation og site_brief Hukommelse {#site-specification-and-sitebrief-memory}

Under onboarding indsamler agenten specifikationen af din side i en **site_brief** hukommelseskategori. Dette inkluderer:

- Websidens formål og mål
- Målgruppe
- Brandfarver og tone
- Designpræferencer
- Indholdsstruktur

### Hvorfor site_brief betyder noget {#why-sitebrief-matters}

I fremtidige sessioner refererer agenterne til din site_brief for at:

### Vedligehold designkonsistens ved ændringer {#viewing-your-sitebrief}
### Foreslå funktioner i overensstemmelse med dit sites formål {#customizing-after-onboarding}
### Give kontekstbaserede anbefalinger {#use-the-design-system-aesthetics-skill}
### Undgå at gentage opsætningsspørgsmål {#edit-themejson-directly}

### Se din site_brief {#create-custom-block-templates}

Du kan spørge agenten:

```
"Show me my site brief"
```

eller

```
"What do you know about my site?"
```

Agenten vil vise din gemte sitespecifikation.

## Tilpasning efter onboarding {#comparison-old-vs-new-onboarding}

Når Theme Builder-onboardingen er færdig, kan du:

### Brug Design System Aesthetics skillen {#troubleshooting}

Bed om designforbedringer:

```
"Refine the typography to be more modern"
```

eller

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skillen** guider dig gennem målrettede designopdateringer.

### Rediger theme.json direkte {#next-steps}

For avancerede brugere kan du redigere `/wp-content/themes/[theme-name]/theme.json` for at justere:

- Color tokens (farveværdier)
- Typography scales (typografiske skalaer)
- Spacing values (afstands- og mellemrumsværdier)
- Border and shadow definitions (grænse- og skyggedefinitioner)

### Opret custom block templates

Brug WordPress blokredigereren til at oprette custom templates til:

- Hjemmeside layouts
- Blogindlægs sider
- Produktsider
- Kontaktformularer

## Sammenligning: Gammelt vs. nyt onboarding

| Funktion | Site Builder (Gammel) | Theme Builder (Ny) |
|---------|----------------------|-------------------|
| Opsætning | Wizard-baseret formular | Agent-vejledt samtale |
| Tema generering | Begrænsede skabeloner | Custom scaffolding |
| Design tokens | Manuel indtastning | Vejledte beslutninger |
| Fleksibilitet | Faste muligheder | Tilpasningsdygtig |
| Fremtidige opdateringer | Ikke refereret | Gemt i site_brief |

## Fejlfinding

**Onboarding-flowet er ikke færdigt**
- Start flowet igen: "Start Theme Builder onboarding"
- Tjek, at din WordPress-installation er opdateret
- Bekræft, at Setup Assistant agenten er aktiveret

**Min site_brief bliver ikke brugt**
- Bekræft, at agenten har adgang til hukommelsen (memory)
- Bed agenten om at "genkalde mit site brief"
- Tjek, at hukommelse er aktiveret i dine indstillinger

**Den genererede tema matcher ikke mine præferencer**
- Brug Design System Aesthetics skill til at finjustere den
- Bed agenten om at "generere tema med [specifikke ændringer]"
- Rediger theme.json direkte for præcis kontrol

## Næste skridt

Efter du har gennemført onboarding for Theme Builder:

1. **Bekræft dit site**: Besøg dit site for at se det nye tema
2. **Finjuster designet**: Brug Design System Aesthetics skill til justeringer
3. **Tilføj indhold**: Start med at bygge indhold til dit site
4. **Udforsk evnerne**: Lær om andre agent-evner som scaffold-block-theme og activate-theme
