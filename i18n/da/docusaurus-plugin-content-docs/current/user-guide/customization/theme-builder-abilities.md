---
title: Tema-byggerfunktioner
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Temaopbyggerens evner: Scaffold og aktiver bloktemaer

Superdav AI Agent v1.12.0 introducerer to kraftfulde funktioner, der lader dig generere og udrulle skræddersyede bloktemaer direkte fra chatgrænsefladen.

## Oversigt {#overview}

Evnerne **scaffold-block-theme** og **activate-theme** gør det muligt for agenter at:
- Generere komplette, produktionsklare bloktemaer baseret på dine specifikationer
- Automatisk aktivere temaer på din side uden manuel indgriben
- Skabe sammenhængende visuelle identiteter gennem vejledte designbeslutninger

## Scaffold Bloktema {#scaffold-block-theme}

Evnen **scaffold-block-theme** genererer et nyt WordPress bloktema med en komplet tema-struktur, herunder:

- `theme.json` konfiguration med design tokens
- Bloktemplatefiler til almindelige layouts
- Skræddersyede blokstile og variationer
- Tema metadata og supportdeklarationer

### Sådan kalder du den på {#how-to-invoke}

I din chat med Superdav AI Agent kan du anmode om temaopbygning:

```
"Opret et bloktema kaldet 'Modern Agency' med en blå og hvid farveskema,
sans-serif typografi og et professionelt layout"
```

Agenten vil:
1. Indsamle dine designpræferencer gennem samtalen
2. Generere den komplette tema-struktur
3. Oprette alle nødvendige temafiler
4. Forberede temaet til aktivering

### Forventet output {#expected-output}

Når evnen kører succesfuldt, vil du se:

- Bekræftelse på, at temaet er scaffoldet
- Temaets navn og placering
- Et resumé af de anvendte design tokens (farver, typografi, afstand)
- Status klar til aktivering

Eksempel på output:
```
✓ Tema "Modern Agency" scaffoldet succesfuldt
  Placering: /wp-content/themes/modern-agency/
  Farver: Primær #0066CC, Sekundær #FFFFFF
  Typografi: Inter (sans-serif)
  Status: Klar til aktivering
```

## Aktiver Tema {#activate-theme}

Evnen til at aktivere temaet skifter din side til et nyt opbygget eller eksisterende bloktema.

### Sådan aktiverer du det {#how-to-invoke-1}

Efter du har opbygget et tema, kan du aktivere det med det samme:

```
"Aktiver Modern Agency-temaet"
```

Eller aktiver ethvert eksisterende tema:

```
"Skift til Twentytwentyfour-temaet"
```

### Forventet output {#expected-output-1}

Når aktiveringen lykkes:

- Bekræftelse af det aktive tema
- Navnet på det forrige tema (til reference)
- Websiden, hvor temaet nu er live
- Eventuelle tema-specifikke opsætningsnoter

Eksempel på output:
```
✓ Tema aktiveret succesfuldt
  Aktivt tema: Modern Agency
  Forrige tema: Twentytwentyfour
  Live på: https://yoursite.com
  Bemærk: Tjek din forside for at bekræfte layoutet
```

## Arbejdsgang: Opbyg og Aktiver {#workflow-scaffold-and-activate}

En typisk arbejdsgang kombinerer begge evner:

1. **Anmod om tema-generering**: "Opret et bloktema til min SaaS landingsside"
2. **Agenten opbygger temaet**: Genererer filer og design tokens
3. **Gennemse og finjuster**: Diskuter designændringer, hvis nødvendigt
4. **Aktiver**: "Aktiver temaet nu"
5. **Verificer**: Besøg din side for at bekræfte, at det nye design er live

## Design Tokens og Tilpasning {#design-tokens-and-customization}

Opbyggede temaer bruger WordPress design tokens (via `theme.json`) til:

- **Farver**: Primær, sekundær, accent, neutral palet
- **Typografi**: Skrifttyper, størrelser, vægte, linjehøjder
- **Afstand**: Padding, margin, gap skalaer
- **Borders**: Radius- og bredde tokens
- **Skygger**: Elevation niveauer

Disse tokens er centraliseret i `theme.json`, hvilket gør det nemt at justere hele dit designsystem fra én fil.

## Begrænsninger og noter {#limitations-and-notes}

Temaer skal oprettes i `/wp-content/themes/` og skal følge WordPress' navngivningskonventioner
Aktivering kræver de rette rettigheder på din WordPress-side
Tilpasset PHP-kode i temaer er minimal; brug plugins til kompleks funktionalitet
Bloktemaer fungerer bedst med WordPress 5.9 og nyere

## Fejlfinding {#troubleshooting}

**Tema vises ikke efter oprettelse (scaffolding)**
- Tjek, at temadirektoriet eksisterer og har de korrekte rettigheder
- Kontroller, at `theme.json` er gyldig JSON
- Sør for, at temaets navn ikke kolliderer med eksisterende temaer

**Aktivering fejler**
- Bekræft, at du har administratorrettigheder
- Tjek, at temadirektoriet er læsbart af WordPress
- Gennemgå WordPress fejllogs for detaljer

**Design tokens påvirker ikke**
- Verificer, at syntaksen i `theme.json` er korrekt
- Ryd eventuelle caching plugins
- Kontroller, om din WordPress-version understøtter de tokens, du bruger

## Næste skridt {#next-steps}

Efter at have aktiveret dit tema kan du:
- Bruge **Design System Aesthetics skill** til at finjustere typografi, farver og afstanden mellem elementerne
- Tilpasse individuelle blokstile via WordPress block editor
- Tilføje egne CSS i temats `style.css` fil
- Oprette brugerdefinerede bloktempler til specifikke sidetyper
