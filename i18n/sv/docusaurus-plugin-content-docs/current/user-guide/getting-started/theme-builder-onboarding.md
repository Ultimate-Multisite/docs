---
title: Temabuildarens onboarding-flöde
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 introducerar ett guidade **Theme Builder onboarding flow** som hjälper dig att skapa ett anpassat blocktema under din initiala uppsättning. Detta ersätter det äldre Site Builder-läget med ett mer flexibelt, agentassisterat tillvägagångssätt.

## Vad är Theme Builder Onboarding Flow?

Theme Builder onboarding flow är en interaktiv uppsättningswizard som:

- Leder dig genom designbeslut (färger, typografi, layout)
- Fångar upp dina visuella identitetspreferenser för webbplatsen
- Genererar ett anpassat blocktema som är skräddarsytt för dina behov
- Aktiverar temat automatiskt när processen är klar

Flödet drivs av **Setup Assistant agent**, som ställer förtydligande frågor och bygger ditt tema stegvis.

## Starta Theme Builder Onboarding

### Första gångens uppsättning

När du först startar Superdav AI Agent på en ny WordPress-installation ser du:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Välj **"Build a custom theme"** för att komma in i Theme Builder onboarding flow.

### Manuell aktivering

Du kan också starta Theme Builder onboarding när som helst genom att begära:

```
"Start the Theme Builder onboarding"
```

eller

```
"Help me create a custom theme"
```

## Onboarding-stegen

### Steg 1: Val av läge (Mode Selection)

Setup Assistant agent frågar om dina preferenser:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** rekommenderas för de flesta användare; agenten gör designrekommendationer baserat på din bransch och dina mål.

### Steg 2: Webbplatsbeskrivning (Site Specification)

Du kommer att få svara på frågor om din webbplats:

- **Site purpose**: E-handel, blogg, portfolio, SaaS, etc.
- **Target audience**: Vem är dina besökare?
- **Brand colors**: Primär och sekundär färg (eller "Jag är osäker")
- **Tone**: Professionell, kreativ, lekfull, minimalistisk, etc.

Denna information sparas i ditt **site_brief** minne, som agenterna refererar till i framtida sessioner.

### Steg 3: Designsystembeslut (Design System Decisions)

Agenten guidar dig genom urval av design tokens:

- **Typography**: Typsnittsfamilj (serif, sans-serif, monospace) och storlekskala
- **Color palette**: Primär, sekundär, accent- och neutrala färger
- **Spacing**: Kompakta, normala eller rymliga layouter
- **Motion**: Animationer och övergångar (om önskat)

### Steg 4: Temagenerering (Theme Generation)

Setup Assistant agent skapar ditt anpassade blocktema med:

- `theme.json` som innehåller alla dina design tokens
- Blockmallar för vanliga layouter (hemsida, blogg, kontakt)
- Anpassade blockstilar som matchar ditt designsystem
- Tema-metadata och WordPress-supportdeklarationer

### Steg 5: Aktivering och verifiering (Activation and Verification)

Temat aktiveras automatiskt, och du ser:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Du kan sedan besöka din webbplats för att verifiera att temat visas korrekt.

## Site Specification och site_brief Minne

Under onboarding fångar agenten din webbplats specifikation i en **site_brief** minneskategori. Detta inkluderar:

- Webbplatsens syfte och mål
- Målgrupp
- Varumärkesfärger och ton
- Designpreferenser
- Innehållsstruktur

### Varför site_brief spelar roll

I framtida sessioner refererar agenterna till ditt site_brief för att:

- Bibehålla designkonsistens vid ändringar
- Föreslå funktioner som stämmer överens med webbplatsens syfte
- Ge kontextmedvetna rekommendationer
- Undvika att upprepa uppsättningsfrågor

### Visa ditt site_brief

Du kan fråga agenten:

```
"Show me my site brief"
```

eller

```
"What do you know about my site?"
```

Agenten kommer att visa din sparade webbplatsbeskrivning.

## Anpassning efter onboarding

När Theme Builder onboarding är slutfört kan du:

### Använda Design System Aesthetics Skill

Begär designförfiningar:

```
"Refine the typography to be more modern"
```

eller

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** guidar dig genom riktade designuppdateringar.

### Redigera theme.json direkt

För avancerade användare, redigera `/wp-content/themes/[theme-name]/theme.json` för att justera:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Skapa anpassade blockmallar

Använd WordPress blockredigeraren för att skapa anpassade mallar för:

- Hemsidlaytouts
- Blogginläggssidor
- Produktsidor
- Kontaktformulär

## Jämförelse: Gammalt vs. Nytt Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Felsökning

**Onboarding-flödet slutfördes inte**
- Starta om flödet: "Start the Theme Builder onboarding"
- Kontrollera att din WordPress-installation är uppdaterad
- Verifiera att Setup Assistant agent är aktiverad

**Mitt site_brief används inte**
- Bekräfta att agenten har tillgång till minnet
- Be agenten att "recall my site brief"
- Kontrollera att minnet är aktiverat i dina inställningar

**Det genererade temat matchar inte mina preferenser**
- Använd Design System Aesthetics skill för att förfina det
- Be agenten att "regenerate the theme with [specific changes]"
- Redigera theme.json direkt för exakt kontroll

## Nästa steg

Efter att du har slutfört Theme Builder onboarding:

1. **Verifiera din webbplats**: Besök din webbplats för att se det nya temat
2. **Förfina designen**: Använd Design System Aesthetics skill för justeringar
3. **Lägg till innehåll**: Börja bygga webbplatsens innehåll
4. **Utforska förmågor**: Lär dig om andra agentförmågor som scaffold-block-theme och activate-theme
