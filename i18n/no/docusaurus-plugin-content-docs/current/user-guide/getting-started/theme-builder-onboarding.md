---
title: Onboarding-flyt for Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Onboarding for Theme Builder

Superdav AI Agent v1.12.0 introduserer en veiledet **Theme Builder onboarding flow** som hjelper deg med å lage et tilpasset block theme under den første oppsettet. Dette erstatter det eldre Site Builder-moduset med en mer fleksibel, agent-assistert tilnærming.

## Hva er Theme Builder Onboarding Flow?

Theme Builder onboarding flow er en interaktiv oppsettveiviser som:

- Veileder deg gjennom designbeslutninger (farger, typografi, layout)
- Fanger opp nettstedets visuelle identitetspreferanser
- Genererer et tilpasset block theme skreddersydd for dine behov
- Aktiverer temaet automatisk når prosessen er fullført

Flowet drives av **Setup Assistant agent**, som stiller avklarende spørsmål og bygger temaet ditt inkrementelt.

## Starte Theme Builder Onboarding

### Første gangs oppsett

Når du starter Superdav AI Agent på en ny WordPress-installasjon, vil du se:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Velg **"Build a custom theme"** for å starte Theme Builder onboarding flow.

### Manuell aktivering

Du kan også starte Theme Builder onboarding når som helst ved å be om:

```
"Start the Theme Builder onboarding"
```

eller

```
"Help me create a custom theme"
```

## Onboarding-trinnene

### Trinn 1: Valg av modus

Setup Assistant agent spør om din preferanse:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** anbefales for de fleste brukere; agenten gir designanbefalinger basert på din bransje og dine mål.

### Trinn 2: Spesifikasjon av nettstedet

Du vil bli spurt om nettstedet ditt:

- **Site purpose**: E-handel, blogg, portefølje, SaaS, osv.
- **Target audience**: Hvem er besøkende?
- **Brand colors**: Primærfarger og sekundærfarger (eller "Jeg er usikker")
- **Tone**: Profesjonell, kreativ, lekende, minimalistisk, osv.

Denne informasjonen lagres i din **site_brief** hukommelse, som agentene refererer til i fremtidige økter.

### Trinn 3: Designsystembeslutninger

Agenten veileder deg gjennom valg av design-tokens:

- **Typography**: Skrifttypefamilie (serif, sans-serif, monospace) og størrelsesskala
- **Color palette**: Primærfarge, sekundærfarge, aksentfarge og nøytrale farger
- **Spacing**: Kompakte, normale eller luftige layouter
- **Motion**: Animasjoner og overganger (hvis ønskelig)

### Trinn 4: Tema-generering

Setup Assistant agent setter opp ditt tilpassede block theme med:

- `theme.json` som inneholder alle dine design-tokens
- Block templates for vanlige layouter (hjemmeside, blogg, kontakt)
- Tilpassede block-stiler som matcher ditt designsystem
- Tema-metadata og WordPress support-erklæringer

### Trinn 5: Aktivering og verifisering

Temaet aktiveres automatisk, og du vil se:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Du kan deretter besøke nettstedet ditt for å bekrefte at temaet vises korrekt.

## Site Specification og site_brief Hukommelse

Under onboarding fanger agenten nettstedspesifikasjonen din i en **site_brief** hukommelseskategori. Dette inkluderer:

- Formål og mål for nettstedet
- Målgruppe
- Merkevarefarger og tone
- Designpreferanser
- Innholdsstruktur

### Hvorfor site_brief betyr noe

I fremtidige økter refererer agentene til din site_brief for å:

- Opprettholde designkonsistens ved endringer
- Foreslå funksjoner som samsvarer med nettstedets formål
- Gi kontekstbevisste anbefalinger
- Unngå å gjenta oppsettspørsmål

### Se din site_brief

Du kan spørre agenten:

```
"Show me my site brief"
```

eller

```
"What do you know about my site?"
```

Agenten vil vise din lagrede nettstedspesifikasjon.

## Tilpasning etter onboarding

Etter at Theme Builder onboarding er fullført, kan du:

### Bruke Design System Aesthetics Skill

Be om designforbedringer:

```
"Refine the typography to be more modern"
```

eller

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** veileder deg gjennom målrettede designoppdateringer.

### Redigere theme.json direkte

For avanserte brukere, rediger `/wp-content/themes/[theme-name]/theme.json` for å justere:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Opprette tilpassede block templates

Bruk WordPress block editor til å lage tilpassede maler for:

- Hjemmeside-layouts
- Blogginnleggs-sider
- Produktsider
- Kontakt-skjemaer

## Sammenligning: Gammelt vs. Nytt Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Feilsøking

**Onboarding flow fullførte ikke**
- Start flowet på nytt: "Start the Theme Builder onboarding"
- Sjekk at WordPress-installasjonen din er oppdatert
- Verifiser at Setup Assistant agent er aktivert

**Min site_brief blir ikke brukt**
- Bekreft at agenten har tilgang til hukommelsen
- Be agenten om å "recall my site brief"
- Sjekk at hukommelsen er aktivert i innstillingene dine

**Det genererte temaet matcher ikke mine preferanser**
- Bruk Design System Aesthetics skill for å forbedre det
- Be agenten om å "regenerate the theme with [specific changes]"
- Rediger theme.json direkte for presis kontroll

## Neste skritt

Etter at Theme Builder onboarding er fullført:

1. **Verifiser nettstedet ditt**: Besøk nettstedet for å se det nye temaet
2. **Forbedre designet**: Bruk Design System Aesthetics skill for justeringer
3. **Legge til innhold**: Start med å bygge innholdet på nettstedet ditt
4. **Utforske funksjoner**: Lær om andre agent-funksjoner som scaffold-block-theme og activate-theme
