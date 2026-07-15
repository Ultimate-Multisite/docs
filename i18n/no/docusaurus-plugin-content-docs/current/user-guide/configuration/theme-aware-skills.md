---
title: Tema-bevisste ferdigheter
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-spesifikke ferdigheter

Superdav AI Agent v1.10.0 leveres med fire nye tema-spesifikke innebygde ferdigheter som automatisk tilpasser seg det aktive WordPress-temaet ditt. Disse ferdighetene gir spesialisert veiledning og funksjonalitet tilpasset temaets arkitektur og funksjoner.

## Hva er tema-spesifikke ferdigheter? {#what-are-theme-aware-skills}

Tema-spesifikke ferdigheter er forhåndsdefinerte kunnskapsbaser og verktøysett som AI-assistenten automatisk velger basert på WordPress-temaet som for øyeblikket er aktivt på nettstedet ditt. Når du bytter tema, oppdateres assistentens tilgjengelige ferdigheter automatisk – ingen manuell konfigurasjon er nødvendig.

Hver ferdighet inkluderer:

- **Tema-spesifikk dokumentasjon** — veiledning for bruk og tilpasning av temaet
- **Blokk- og mønsterreferanser** — tilgjengelige blokker, mønstre og designalternativer
- **Eksempler på tilpasning** — kodeutdrag og konfigurasjonsmønstre for vanlige oppgaver
- **Beste praksis** — anbefalinger for temaets arkitektur og arbeidsflyt

## Tilgjengelige tema-spesifikke ferdigheter {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Gjelder for:** Temaer som bruker WordPress' blokkbaserte (Full Site Editing) arkitektur.

Block Themes-ferdigheten gir veiledning om:

- Oppretting og redigering av maler ved hjelp av blokkredigereren
- Arbeid med blokkmønstre og gjenbrukbare blokker
- Tilpasning av globale stiler og `theme.json`-innstillinger
- Bruk av tema-blokker og variasjoner
- Bygging av egendefinerte blokkmønstre for nettstedet ditt

**Aktiveres automatisk når:** Ditt aktive tema er et blokk-tema (støtter funksjonen `block-templates`).

### Classic Themes {#classic-themes}

**Gjelder for:** Tradisjonelle WordPress-temaer som bruker PHP-maler og den klassiske redigereren.

Classic Themes-ferdigheten gir veiledning om:

- Arbeid med PHP-malfiler og hooks
- Tilpasning av temaets utseende via Customizer
- Bruk av widget-områder og sidefelt
- Endring av CSS og utvikling av barnetemaer (child theme)
- Forståelse av tema-hierarki og malmerker (template tags)

**Aktiveres automatisk når:** Ditt aktive tema er et klassisk (ikke-blokk) tema.

### Kadence Blocks {#kadence-blocks}

**Gjelder for:** Nettsteder som bruker Kadence Blocks-plugin for avansert blokkbasert design.

Kadence Blocks-ferdigheten gir veiledning om:

- Bruk av Kadence's avanserte blokklibrary (Hero, Testimonials, Pricing, osv.)
- Konfigurering av Kadence blokkinnstillinger og responsive alternativer
- Bygging av egendefinerte layouter med Kadence's grid- og containerblokker
- Integrering av Kadence blokker med temaet ditt
- Utnyttelse av Kadence's designsystem og presets

**Aktiveres automatisk når:** Kadence Blocks-plugin er aktivt på nettstedet ditt.

### Kadence Theme {#kadence-theme}

**Gjelder for:** Nettsteder som bruker Kadence-temaet for blokkbasert design og tilpasning.

Kadence Theme-ferdigheten gir veiledning om:

- Tilpasning av Kadence-temaet via globale stiler og `theme.json`
- Bruk av Kadence's innebygde blokkmønstre og maler
- Konfigurering av Kadence tema-innstillinger og alternativer
- Bygging av egendefinerte design med Kadence's designsystem
- Integrering av Kadence med populære plugins og verktøy

**Aktiveres automatisk når:** Kadence-temaet er ditt aktive tema.

## Hvordan ferdigheter velges {#how-skills-are-selected}

Assistenten oppdager automatisk ditt aktive tema og installerte plugins for hver melding. Hvis en matchende tema-spesifikk ferdighet er tilgjengelig, lastes den automatisk inn i assistentens kontekst. Du trenger ikke å manuelt aktivere eller bytte ferdigheter.

### Flere ferdigheter {#multiple-skills}

Hvis flere ferdigheter gjelder for nettstedet ditt (for eksempel hvis du har både Kadence Blocks og Kadence Theme aktivt), har assistenten tilgang til alle relevante ferdigheter og kan referere til veiledning fra hver av dem.

### Bytting av temaer {#switching-themes}

Når du endrer ditt aktive tema, oppdateres assistentens tilgjengelige ferdigheter automatisk ved neste melding. For eksempel:

1. Du bruker et blokk-tema med **Block Themes**-ferdigheten aktiv.
2. Du bytter til et klassisk tema.
3. Ved din neste melding lastes **Classic Themes**-ferdigheten automatisk inn, og **Block Themes**-ferdigheten er ikke lenger tilgjengelig.

## Bruk av tema-spesifikke ferdigheter {#using-theme-aware-skills}

For å utnytte en tema-spesifikk ferdighet, beskriv ganske enkelt hva du ønsker å gjøre i chat-grensesnittet. Assistenten vil automatisk referere til den passende ferdighetens veiledning.

### Eksempel på prompts {#example-prompts}

**For Block Themes:**
> "Lag en hero-seksjon med et bakgrunnsbilde og sentrert tekst ved hjelp av blokkmønstre."

**For Classic Themes:**
> "Legg til et egendefinert widget-område i sidefeltet ved hjelp av et barnetema."

**For Kadence Blocks:**
> "Bygg en testimonials-seksjon ved hjelp av Kadence Testimonials-blokken."

**For Kadence Theme:**
> "Tilpass header-layouten og styling av navigasjonsmenyen."

Assistenten vil gi tema-spesifikk veiledning og kodeeksempler tilpasset ditt aktive tema og plugins.

:::note
Tema-spesifikke ferdigheter er automatisk tilgjengelige i Superdav AI Agent v1.10.0 og nyere. Ingen ekstra oppsett eller konfigurasjon er nødvendig.
:::
