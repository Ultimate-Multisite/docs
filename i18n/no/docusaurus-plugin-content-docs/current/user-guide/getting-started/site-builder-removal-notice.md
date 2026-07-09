---
title: Melding om fjerning av Site Builder-modus
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Fjerning av Site Builder-modus {#site-builder-mode-removal-notice}

**Site Builder-modus er fjernet i Superdav AI Agent v1.12.0.** Hvis du brukte Site Builder-modus, bør du migrere til **Setup Assistant agent** for temaopprettelse og oppsett av nettstedet.

## Hva skjedde? {#what-happened}

### Site Builder Mode (Gammelt) {#site-builder-mode-legacy}

Site Builder-modus var et grensesnitt basert på veiledninger (wizard) for:

- Oppretting av nettsteder fra maler
- Konfigurering av grunnleggende innstillinger
- Valg av et tema
- Oppsett av innledende innhold

### Hva erstattet det? {#what-replaced-it}

**Setup Assistant agent** håndterer nå all Site Builder-funksjonalitet med:

- Mer fleksibelt, agent-veiledet oppsett
- Bedre tema-tilpasningsalternativer
- Integrasjon med Theme Builder onboarding
- Vedvarende `site_brief`-minne for fremtidige økter

## Hvis du brukte Site Builder-modus {#if-you-were-using-site-builder-mode}

### Nettstedene dine er trygge {#your-sites-are-safe}

- Eksisterende nettsteder opprettet med Site Builder-modus fortsetter å fungere
- Ingen tap av data eller nettstedforstyrrelser
- Du kan fortsette å administrere nettstedene dine som normalt

### Migrer til Setup Assistant Agent {#migrate-to-setup-assistant-agent}

For nytt oppsett av nettsted eller temaendringer, bruk Setup Assistant agent:

```
"Help me set up a new site"
```

eller

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent gir samme funksjonalitet, men med mer fleksibilitet.

## Sammenligning: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funksjon | Site Builder (Fjernet) | Setup Assistant (Ny) |
|---------|----------------------|----------------------|
| Oppsettmåte | Wizard-skjema | Agent-samtale |
| Tema-valg | Forhåndsdefinerte maler | Tilpasset generering |
| Tilpasning | Begrensede alternativer | Fullt designsystem |
| Site brief | Ikke lagret | Vedvarende minne |
| Fremtidige økter | Gjenta oppsett | Bruk lagret site_brief |
| Fleksibilitet | Fast arbeidsflyt | Adaptiv samtale |

## Migrering til Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### For nye nettsteder {#for-new-sites}

I stedet for å bruke Site Builder-modus:

1. Be om: "Help me set up a new site"
2. Setup Assistant agent vil veilede deg gjennom:
   - Formålet og målene med nettstedet
   - Målgruppen
   - Merkevareidentiteten
   - Tema-generering
   - Innledende konfigurasjon

### For eksisterende nettsteder {#for-existing-sites}

Hvis du har et eksisterende nettsted fra Site Builder-modus:

1. Du kan fortsette å bruke det slik det er
2. For å oppdatere temaet, be om: "Redesign my site"
3. Setup Assistant agent vil hjelpe deg med å lage et nytt tema
4. Nettsteddataene dine forblir uendret

### For temaendringer {#for-theme-changes}

I stedet for tema-valget i Site Builder-modus:

1. Be om: "Change my theme"
2. Setup Assistant agent vil:
   - Spørre om dine designpreferanser
   - Generere et tilpasset tema
   - Aktivere det på nettstedet ditt

## Viktige forskjeller {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Velg en mal
2. Velg et tema
3. Konfigurer grunnleggende innstillinger
4. Ferdig
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Beskriv formålet med nettstedet ditt
2. Definer målgruppen din
3. Velg designpreferanser
4. Agent genererer tilpasset tema
5. Agent aktiverer temaet
6. Site brief lagres for fremtidige økter
```

## Fordeler med Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Mer fleksibelt {#more-flexible}

- Beskriv nettstedet ditt i naturlig språk
- Få tilpassede anbefalinger
- Tilpasse seg dine spesifikke behov

### Bedre tilpasning {#better-customization}

- Generering av tilpassede temaer
- Designsystem-beslutninger
- Vedvarende design-tokens

### Vedvarende minne {#persistent-memory}

- Din `site_brief` lagres
- Fremtidige agenter forstår nettstedet ditt
- Ingen behov for å gjenta oppsettinformasjon

### Integrert arbeidsflyt {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Alt sammen fungerer sømløst

## Feilsøking {#troubleshooting}

### Jeg finner ikke Site Builder-modus {#i-cant-find-site-builder-mode}

Site Builder-modus er fjernet. Bruk Setup Assistant agent i stedet:

```
"Help me set up a new site"
```

### Jeg vil gjenskape et nettsted fra Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Du kan gjenskape det med Setup Assistant agent:

1. Be om: "Help me set up a new site"
2. Beskriv formålet og designet til det opprinnelige nettstedet ditt
3. Agenten vil generere et lignende tema
4. Din `site_brief` vil bli lagret for fremtidig referanse

### Mitt eksisterende Site Builder-nettsted fungerer ikke {#my-existing-site-builder-site-isnt-working}

Eksisterende nettsteder opprettet med Site Builder-modus fortsetter å fungere. Hvis du opplever problemer:

1. Sjekk at temaet ditt fortsatt er aktivt
2. Verifiser at pluginene dine er aktivert
3. Sjekk WordPress feillogger
4. Kontakt support hvis problemene vedvarer

### Kan jeg fortsatt bruke mine gamle Site Builder-maler? {#can-i-still-use-my-old-site-builder-templates}

Site Builder-maler er ikke lenger tilgjengelige. Men:

- Dine eksisterende nettsteder fortsetter å fungere
- Du kan gjenskape lignende nettsteder med Setup Assistant agent
- Setup Assistant agent gir flere tilpasningsalternativer

## Neste skritt {#next-steps}

1. **For nye nettsteder**: Bruk Setup Assistant agent
2. **For eksisterende nettsteder**: Fortsett å bruke dem som de er
3. **For temaendringer**: Be om hjelp fra Setup Assistant agent
4. **For designforbedring**: Bruk Design System Aesthetics skill

## Relaterte emner {#related-topics}

- **Theme Builder Onboarding**: Veiledet oppsett for tilpassede temaer
- **Setup Assistant Agent**: Agent-veiledet oppsett av nettsted
- **Site Specification Skill**: Definer nettstedets mål og målgruppe
- **Design System Aesthetics Skill**: Forbedre nettstedets visuelle identitet
