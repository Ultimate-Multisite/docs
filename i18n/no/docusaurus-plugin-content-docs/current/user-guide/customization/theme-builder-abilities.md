---
title: Mulighet for tema-bygging
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Funksjoner: Scaffold og Aktivere Block Themes

Superdav AI Agent v1.12.0 introduserer to kraftige funksjoner som lar deg generere og implementere tilpassede block themes direkte fra chat-grensesnittet.

## Oversikt {#overview}

Funksjonene **scaffold-block-theme** og **activate-theme** gjør at agenten kan:
- Generere komplette, produksjonsklare block themes basert på dine spesifikasjoner
- Automatisk aktivere themes på nettstedet ditt uten manuell inngripen
- Skape en sammenhengende visuell identitet gjennom veiledede designbeslutninger

## Scaffold Block Theme {#scaffold-block-theme}

Funksjonen **scaffold-block-theme** genererer et nytt WordPress block theme med en komplett theme-struktur, inkludert:

- `theme.json`-konfigurasjon med design tokens
- Block template-filer for vanlige layouter
- Tilpassede block-stiler og variasjoner
- Theme metadata og støtteerklæringer

### Hvordan kalle funksjonen {#how-to-invoke}

I chatten din med Superdav AI Agent kan du be om generering av et theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agenten vil:
1. Samle inn dine designpreferanser gjennom samtale
2. Generere den komplette theme-strukturen
3. Opprette alle nødvendige theme-filer
4. Forberede theme for aktivering

### Forventet utdata {#expected-output}

Når funksjonen utføres vellykket, vil du se:

- Bekreftelse på at theme er scaffoldet
- Theme-navnet og plasseringen
- Et sammendrag av de anvendte design tokens (farger, typografi, avstand)
- Status: Klar til aktivering

Eksempel på utdata:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Aktivere Theme {#activate-theme}

Funksjonen **activate-theme** bytter nettstedet ditt til et nylig scaffoldet eller eksisterende block theme.

### Hvordan kalle funksjonen {#how-to-invoke-1}

Etter at du har scaffoldet et theme, kan du aktivere det umiddelbart:

```
"Activate the Modern Agency theme"
```

Eller aktivere et hvilket som helst eksisterende theme:

```
"Switch to the Twentytwentyfour theme"
```

### Forventet utdata {#expected-output-1}

Når aktiveringen lykkes:

- Bekreftelse på det aktive theme
- Navnet på det forrige theme (for referanse)
- Nettsted-URL-en der theme nå er live
- Eventuelle merknader om oppsett spesifikt for theme

Eksempel på utdata:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Arbeidsflyt: Scaffold og Aktivere {#workflow-scaffold-and-activate}

En typisk arbeidsflyt kombinerer begge funksjonene:

1. **Be om theme-generering**: "Create a block theme for my SaaS landing page"
2. **Agent scaffolder theme**: Genererer filer og design tokens
3. **Gjennomgang og forbedring**: Diskuter designendringer ved behov
4. **Aktivere**: "Activate the theme now"
5. **Verifisere**: Besøk nettstedet ditt for å bekrefte at det nye designet er live

## Design Tokens og Tilpasning {#design-tokens-and-customization}

Scaffoldede themes bruker WordPress design tokens (via `theme.json`) for:

- **Farger**: Primær, sekundær, aksent, nøytral palett
- **Typografi**: Skrifttyper, størrelser, vekter, linjehøyder
- **Avstand**: Padding, margin, gap-skalaer
- **Bokser**: Radius- og bredde-tokens
- **Skygger**: Elevasjonsnivåer

Disse tokens er sentralisert i `theme.json`, noe som gjør det enkelt å justere hele designsystemet ditt fra én fil.

## Begrensninger og merknader {#limitations-and-notes}

- Themes scaffoldes i `/wp-content/themes/` og må følge WordPress navnekonvensjoner
- Aktivering krever passende tillatelser på WordPress-nettstedet ditt
- Tilpasset PHP-kode i themes er minimal; bruk plugins for kompleks funksjonalitet
- Block themes fungerer best med WordPress 5.9 og nyere

## Feilsøking {#troubleshooting}

**Theme vises ikke etter scaffolding**
- Verifiser at theme-mappen eksisterer og har riktige tillatelser
- Sjekk at `theme.json` er gyldig JSON
- Forsikre deg om at theme-navnet ikke kolliderer med eksisterende themes

**Aktivering feiler**
- Bekreft at du har administratorrettigheter
- Sjekk at theme-mappen er lesbar for WordPress
- Gå gjennom WordPress feillogger for detaljer

**Design tokens blir ikke anvendt**
- Verifiser at `theme.json`-syntaksen er korrekt
- Tøm eventuelle caching plugins
- Sjekk at WordPress-versjonen din støtter tokens du bruker

## Neste steg {#next-steps}

Etter at du har aktivert theme, kan du:
- Bruke **Design System Aesthetics skill** for å forbedre typografi, farger og avstand
- Tilpasse individuelle block-stiler gjennom WordPress block editor
- Legge til tilpasset CSS i themeets `style.css`-fil
- Opprette tilpassede block templates for spesifikke typesider
