---
title: Tema-bevidste færdigheder
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-bevidste færdigheder

Superdav AI Agent v1.10.0 leveres med fire nye tema-bevidste indbyggede færdigheder, der automatisk tilpasser sig dit aktive WordPress-tema. Disse færdigheder giver specialiseret vejledning og funktionalitet skræddersyet til dit themes arkitektur og funktioner.

## Hvad er tema-bevidste færdigheder? {#what-are-theme-aware-skills}

Tema-bevidste færdigheder er forudkonfigurerede videnbaser og værktøjsæt, som AI-assistenten automatisk vælger baseret på det WordPress-tema, der i øjeblikket er aktivt på din side. Når du skifter tema, opdateres assistentens tilgængelige færdigheder automatisk – ingen manuel konfiguration er nødvendig.

Hver færdighed inkluderer:

- **Tema-specifik dokumentation** — vejledning i brug af og tilpasning af temaet
- **Block- og mønsterhenvisninger** — tilgængelige blokke, mønstre og designmuligheder
- **Tilpasningsforslag** — kodeudsnit og konfigurationsmønstre for almindelige opgaver
- **Bedste praksis** — anbefalinger til temaets arkitektur og workflow

## Tilgængelige tema-bevidste færdigheder {#available-theme-aware-skills}

### Bloktemaer {#block-themes}

**Gælder for:** Temaer, der bruger WordPress blokbaseret (Full Site Editing) arkitektur.

Bloktema-færdigheden giver vejledning i:

- Oprettelse og redigering af templates ved hjælp af blokredigereren
- Arbejde med blokmønstre og genanvendelige blokke
- Tilpasning af globale styles og theme.json indstillinger
- Brug af tema-blokke og variationer
- Opbygning af egne blokmønstre til din side

**Automatisk aktiveret, når:** Dit aktive tema er et bloktema (understøtter `block-templates` funktion).

### Klassiske temaer {#classic-themes}

**Gælder for:** Traditionelle WordPress-temaer, der bruger PHP-templates og det klassiske editor.

Klassiske Temaer færdigheden giver vejledning i:

Arbejde med PHP template filer og hooks
Tilpasning af temaets udseende via Customizeren
Brug af widget områder og sidebars
Ændring af CSS og udvikling af child themes
Forståelse af temahierarki og template tags

**Automatisk aktiveret når:** Dit aktive tema er et klassisk (ikke-block) tema.

### Kadence Blocks {#kadence-blocks}

**Gælder for:** Sider, der bruger Kadence Blocks plugin til avanceret block-baseret design.

Kadence Blocks færdighed giver vejledning i:

- Brug af Kadences avancerede blokbibliotek (Hero, Testimonials, Pricing osv.)
- Konfiguration af Kadence blokindstillinger og responsive muligheder
- Opbygning af brugerdefinerede layouts med Kadencens grid- og containerblokke
- Integration af Kadence blocks med dit tema
- Udnyttelse af Kadencens designsystem og præsettings

**Automatisk aktiveret når:** Kadence Blocks plugin er aktiv på din side.

### Kadence Theme {#kadence-theme}

**Gælder for:** Sider, der bruger Kadence tema til block-baseret design og tilpasning.

Kadence Theme færdighed giver vejledning i:

- Tilpasning af Kadence temaet via globale styles og theme.json
- Brug af Kadencens indbyggede blokmønstre og templates
- Konfiguration af Kadence temaindstillinger og muligheder
- Opbygning af brugerdefinerede designs med Kadencens designsystem
- Integration af Kadence med populære plugins og værktøjer

**Automatisk aktiveret når:** Kadence tema er dit aktive tema.

## Hvordan færdigheder vælges {#how-skills-are-selected}

Assistenten opdager automatisk dit aktive tema og de installerede plugins i hver besked. Hvis en matchende tema-bevidst færdighed er tilgængelig, indlæses den automatisk i assistentens kontekst. Du behøver ikke manuelt aktivere eller skifte færdigheder.

### Flere færdigheder {#multiple-skills}

Hvis flere færdigheder gælder for din side (for eksempel, hvis du har både Kadence Blocks og Kadence Theme aktive), får assistenten adgang til alle relevante færdigheder og kan henvise til vejledninger fra hver af dem.

### Skift mellem temaer {#switching-themes}

Når du skifter dit aktive tema, opdateres assistentens tilgængelige færdigheder automatisk i den næste besked. For eksempel:

1. Du bruger et bloktema med **Block Themes**-færdigheden aktiv.
2. Du skifter til et klassisk tema.
3. I din næste besked indlæses **Classic Themes**-færdigheden automatisk, og **Block Themes**-færdigheden er ikke længere tilgængelig.

## Brug af tema-bevidste færdigheder {#using-theme-aware-skills}

For at udnytte en tema-bevidst færdighed skal du blot beskrive, hvad du vil gøre i chatgrænsefladen. Assistenten vil automatisk henvise til vejledningen fra den passende færdighed.

### Eksempler på prompts {#example-prompts}

**Til Block Themes:**
> "Opret en hero-sektion med baggrundsbillede og centreret tekst ved hjælp af blokmønstre."

**Til Klassiske temaer:**
> "Tilføj et custom widget område til sidebaren ved hjælp af et child theme."

**Til Kadence Blocks:**
> "Byg en testimonials sektion ved hjælp af Kadence Testimonials-blokken."

**Til Kadence Theme:**
> "Tilpas header-layoutet og styling for navigationsmenuen."

Assistenten vil give tema-specifik vejledning og kodeeksempler, der er skræddersyet til dit aktive tema og plugins.

:::note
Tema-bevidste færdigheder er automatisk tilgængelige i Superdav AI Agent v1.10.0 og senere. Der kræves ingen yderligere opsætning eller konfiguration.
:::
