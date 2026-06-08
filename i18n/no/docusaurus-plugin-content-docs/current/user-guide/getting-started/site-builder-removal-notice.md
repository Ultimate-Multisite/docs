---
title: Melding om fjerning av Site Builder-modus
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Fjerning av Site Builder-modus

**Site Builder-modus er fjernet i Superdav AI Agent v1.12.0.** Hvis du brukte Site Builder-modus, bør du migrere til **Setup Assistant agent** for temaopprettelse og oppsett av nettstedet.

## Hva skjedde?

### Site Builder Mode (Gammelt)

Site Builder-modus var et grensesnitt basert på veiledninger (wizard) for:

- Oppretting av nettsteder fra maler
- Konfigurering av grunnleggende innstillinger
- Valg av et tema
- Oppsett av innledende innhold

### Hva erstattet det?

**Setup Assistant agent** håndterer nå all Site Builder-funksjonalitet med:

- Mer fleksibelt, agent-veiledet oppsett
- Bedre tema-tilpasningsalternativer
- Integrasjon med Theme Builder onboarding
- Vedvarende `site_brief`-minne for fremtidige økter

## Hvis du brukte Site Builder-modus

### Nettstedene dine er trygge

- Eksisterende nettsteder opprettet med Site Builder-modus fortsetter å fungere
- Ingen tap av data eller nettstedforstyrrelser
- Du kan fortsette å administrere nettstedene dine som normalt

### Migrer til Setup Assistant Agent

For nytt oppsett av nettsted eller temaendringer, bruk Setup Assistant agent:

```
"Help me set up a new site"
```

eller

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent gir samme funksjonalitet, men med mer fleksibilitet.

## Sammenligning: Site Builder vs. Setup Assistant

| Funksjon | Site Builder (Fjernet) | Setup Assistant (Ny) |
|---------|----------------------|----------------------|
| Oppsettmåte | Wizard-skjema | Agent-samtale |
| Tema-valg | Forhåndsdefinerte maler | Tilpasset generering |
| Tilpasning | Begrensede alternativer | Fullt designsystem |
| Site brief | Ikke lagret | Vedvarende minne |
| Fremtidige økter | Gjenta oppsett | Bruk lagret site_brief |
| Fleksibilitet | Fast arbeidsflyt | Adaptiv samtale |

## Migrering til Setup Assistant Agent

### For nye nettsteder

I stedet for å bruke Site Builder-modus:

1. Be om: "Help me set up a new site"
2. Setup Assistant agent vil veilede deg gjennom:
   - Formålet og målene med nettstedet
   - Målgruppen
   - Merkevareidentiteten
   - Tema-generering
   - Innledende konfigurasjon

### For eksisterende nettsteder

Hvis du har et eksisterende nettsted fra Site Builder-modus:

1. Du kan fortsette å bruke det slik det er
2. For å oppdatere temaet, be om: "Redesign my site"
3. Setup Assistant agent vil hjelpe deg med å lage et nytt tema
4. Nettsteddataene dine forblir uendret

### For temaendringer

I stedet for tema-valget i Site Builder-modus:

1. Be om: "Change my theme"
2. Setup Assistant agent vil:
   - Spørre om dine designpreferanser
   - Generere et tilpasset tema
   - Aktivere det på nettstedet ditt

## Viktige forskjeller

### Site Builder Mode

```
1. Velg en mal
2. Velg et tema
3. Konfigurer grunnleggende innstillinger
4. Ferdig
```

### Setup Assistant Agent

```
1. Beskriv formålet med nettstedet ditt
2. Definer målgruppen din
3. Velg designpreferanser
4. Agent genererer tilpasset tema
5. Agent aktiverer temaet
6. Site brief lagres for fremtidige økter
```

## Fordeler med Setup Assistant Agent

### Mer fleksibelt

- Beskriv nettstedet ditt i naturlig språk
- Få tilpassede anbefalinger
- Tilpasse seg dine spesifikke behov

### Bedre tilpasning

- Generering av tilpassede temaer
- Designsystem-beslutninger
- Vedvarende design-tokens

### Vedvarende minne

- Din `site_brief` lagres
- Fremtidige agenter forstår nettstedet ditt
- Ingen behov for å gjenta oppsettinformasjon

### Integrert arbeidsflyt

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Alt sammen fungerer sømløst

## Feilsøking

### Jeg finner ikke Site Builder-modus

Site Builder-modus er fjernet. Bruk Setup Assistant agent i stedet:

```
"Help me set up a new site"
```

### Jeg vil gjenskape et nettsted fra Site Builder

Du kan gjenskape det med Setup Assistant agent:

1. Be om: "Help me set up a new site"
2. Beskriv formålet og designet til det opprinnelige nettstedet ditt
3. Agenten vil generere et lignende tema
4. Din `site_brief` vil bli lagret for fremtidig referanse

### Mitt eksisterende Site Builder-nettsted fungerer ikke

Eksisterende nettsteder opprettet med Site Builder-modus fortsetter å fungere. Hvis du opplever problemer:

1. Sjekk at temaet ditt fortsatt er aktivt
2. Verifiser at pluginene dine er aktivert
3. Sjekk WordPress feillogger
4. Kontakt support hvis problemene vedvarer

### Kan jeg fortsatt bruke mine gamle Site Builder-maler?

Site Builder-maler er ikke lenger tilgjengelige. Men:

- Dine eksisterende nettsteder fortsetter å fungere
- Du kan gjenskape lignende nettsteder med Setup Assistant agent
- Setup Assistant agent gir flere tilpasningsalternativer

## Neste skritt

1. **For nye nettsteder**: Bruk Setup Assistant agent
2. **For eksisterende nettsteder**: Fortsett å bruke dem som de er
3. **For temaendringer**: Be om hjelp fra Setup Assistant agent
4. **For designforbedring**: Bruk Design System Aesthetics skill

## Relaterte emner

- **Theme Builder Onboarding**: Veiledet oppsett for tilpassede temaer
- **Setup Assistant Agent**: Agent-veiledet oppsett av nettsted
- **Site Specification Skill**: Definer nettstedets mål og målgruppe
- **Design System Aesthetics Skill**: Forbedre nettstedets visuelle identitet
