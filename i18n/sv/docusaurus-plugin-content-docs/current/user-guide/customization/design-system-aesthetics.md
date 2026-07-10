---
title: Design System Estetik Färdighet
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Design System Aesthetics-förmågan {#design-system-aesthetics-skill}

**Design System Aesthetics-förmågan** är ett vägledd tillvägagångssätt för att förfina din webbplats visuella identitet. Den hjälper dig att fatta konsekventa beslut om typografi, färg, avstånd och rörelsetokens som definierar ditt designsystem.

## Vad är Design System Aesthetics? {#what-is-design-system-aesthetics}

Design System Aesthetics är en strukturerad förmåga som täcker:

- **Typografi**: Typsnittsfamiljer, storlekar, vikter och radhöjder
- **Färg**: Primära, sekundära, accent- och neutrala paletter
- **Avstånd (Spacing)**: Padding, marginaler och gap-skalor
- **Gränser (Borders)**: Radie- och breddetokens
- **Skuggor (Shadows)**: Höjd- och djup-tokens
- **Rörelse (Motion)**: Animationer och övergångar

Dessa beslut sparas i din temas `theme.json`-fil, vilket skapar ett sammanhängande visuellt system.

## Varför använda Design System Aesthetics? {#why-use-design-system-aesthetics}

### Konsistens {#consistency}

Ett designsystem säkerställer att:

- All text använder samma typografiska skala
- Färger används konsekvent över hela din webbplats
- Avståndet följer ett förutsägbart mönster
- Animationerna känns enhetliga

### Effektivitet {#efficiency}

Istället för att fatta designbeslut sida för sida, gör du följande:

- Definierar tokens en gång
- Tillämpar dem överallt
- Uppdaterar globalt genom att ändra ett enda värde

### Flexibilitet {#flexibility}

Du kan:

- Justera hela ditt designsystem snabbt
- Experimentera med olika estetiker
- Bibehålla varumärkeskonsistens samtidigt som du utvecklas

## Aktivering av Design System Aesthetics-förmågan {#triggering-the-design-system-aesthetics-skill}

### Manuell aktivering {#manual-activation}

Du kan starta förmågan när som helst:

```
"Help me refine my design system"
```

eller

```
"Let's improve my site's aesthetics"
```

eller

```
"Guide me through design system decisions"
```

### Automatiska förslag {#automatic-suggestions}

Agenten kan föreslå att du använder förmågan när du:

- Frågar om designändringar
- Begär en "modern" eller "professionell" omarbetning
- Vill förbättra den visuella konsistensen
- Förbereder dig för att lansera din webbplats

## Processen för Design System Aesthetics {#the-design-system-aesthetics-process}

### Steg 1: Typografi {#step-1-typography}

Agenten frågar om dina typsnittsförordanden:

```
What's your preferred typography style?
- Serif (traditionell, elegant)
- Sans-serif (modern, rent)
- Monospace (tekniskt, kodfokuserat)

For your heading font:
- Do you want a distinct heading font, or use the same as body text?
- Preference: bold, elegant, playful, minimal?

For your body font:
- Readability is key. Do you prefer:
  - Larger, more spacious text
  - Compact, efficient text
  - Standard sizing
```

Agenten definierar sedan:

- **Heading font**: Primärt typsnitt för rubriker och titlar
- **Body font**: Typsnitt för stycken och brödtext
- **Monospace font**: Typsnitt för kod och tekniskt innehåll
- **Size scale**: Fördefinierade storlekar (smal, bas, stor, XL, etc.)
- **Weight scale**: Typsnittsvikter (regular, medium, bold, etc.)
- **Line height**: Avståndet mellan raderna för läsbarhet

### Steg 2: Färgpalett {#step-2-color-palette}

```
Let's define your color palette.

Primary color (your brand color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Secondary color (supporting color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Accent color (highlights and CTAs):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Neutral palette (grays for text, borders, backgrounds):
- Light: [color]
- Medium: [color]
- Dark: [color]
```

Agenten skapar en komplett palett som inkluderar:

- Primär, sekundär och accentfärger
- Neutrala gråtoner (ljus, medium, mörk)
- Semantiska färger (framgång, varning, fel)
- Hover- och aktiva tillstånd

### Steg 3: Avstånd (Spacing) {#step-3-spacing}

```
How much breathing room do you want?

Spacing scale preference:
- Compact (tight, efficient layouts)
- Normal (balanced spacing)
- Spacious (generous whitespace)

This affects:
- Padding inside buttons and cards
- Margins between sections
- Gap between grid items
```

Agenten definierar avståndstokens:

- Base unit (vanligtvis 4px eller 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Specifika värden för padding, margin, gap

### Steg 4: Gränser och Skuggor {#step-4-borders-and-shadows}

```
Visual depth and definition:

Border radius preference:
- Sharp (no rounding)
- Subtle (small radius)
- Rounded (medium radius)
- Very rounded (large radius)

Shadow depth:
- Flat (no shadows)
- Subtle (light shadows)
- Pronounced (strong shadows)
```

Agenten skapar:

- Border radius tokens (för knappar, kort, inmatningsfält)
- Shadow tokens för höjdnivåer
- Border width tokens

### Steg 5: Rörelse och Animation {#step-5-motion-and-animation}

```
How should your site feel when interactive?

Animation preference:
- Minimal (no animations)
- Subtle (gentle transitions)
- Playful (noticeable animations)

Specific animations:
- Page transitions: fade, slide, or none?
- Button hover: scale, color change, or both?
- Loading states: spinner, skeleton, or progress bar?
```

Agenten definierar:

- Transition durations (snabbt, normalt, långsamt)
- Easing functions (ease-in, ease-out, ease-in-out)
- Animation keyframes för vanliga interaktioner

## Tillämpning av Design System Aesthetics {#applying-design-system-aesthetics}

### Automatisk tillämpning {#automatic-application}

När du slutför förmågan:

1. Uppdaterar din temas `theme.json` med alla tokens
2. Tillämpar designsystemet på ditt aktiva tema
3. Regenererar blockstilar för att matcha det nya systemet
4. Aktiverar det uppdaterade temat

### Manuell tillämpning {#manual-application}

Du kan också redigera `theme.json` direkt:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Visa ditt Design System {#viewing-your-design-system}

### Fråga agenten {#ask-the-agent}

```
"Show me my design system"
```

eller

```
"What are my current design tokens?"
```

Agenten kommer att visa din typografi, färger, avstånd och andra tokens.

### Visa theme.json {#view-themejson}

Öppna `/wp-content/themes/[theme-name]/theme.json` i en textredigerare för att se de råa token-definitionerna.

## Uppdatering av ditt Design System {#updating-your-design-system}

### Snabba uppdateringar {#quick-updates}

Be agenten om specifika ändringar:

```
"Make the primary color darker"
```

eller

```
"Increase the spacing scale by 20%"
```

eller

```
"Change the heading font to a serif"
```

### Fullständig omarbetning {#full-redesign}

Kör Design System Aesthetics-förmågan igen:

```
"Let's redesign my entire design system"
```

Detta vägleder dig igenom alla beslut, och börjar med dina nuvarande värden.

### Partiella uppdateringar {#partial-updates}

Uppdatera specifika aspekter:

```
"Just update the color palette, keep everything else"
```

## Bästa praxis för Design System {#design-system-best-practices}

### Konsistens {#consistency-1}

- Använd samma tokens överallt
- Skapa inte engångsfärger eller storlekar
- Hänvisa till tokens istället för att hårdkoda värden

### Namngivning {#naming}

Använd tydliga, semantiska namn:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalbarhet {#scalability}

Designa ditt system för att skalas:

- Använd relativa enheter (rem, em) istället för pixlar
- Skapa skalor (xs, sm, md, lg, xl) istället för godtyckliga värden
- Planera för framtida tillägg

### Dokumentation {#documentation}

Dokumentera ditt designsystem:

- Varför du valde specifika färger
- När du ska använda varje token
- Undantag och kantfall

## Vanliga Design System Mönster {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}
- Sans-serif typografi (Inter, Helvetica)
- Begränsad färgpalett (2-3 färger)
- Generöst avstånd
- Subtila skuggor
- Mjuka, snabba animationer

### Varmt och Vänligt {#warm-and-friendly}
- Blandning av serif och sans-serif
- Varm färgpalett (orange, varma gråtoner)
- Avrundade hörn
- Mjuka skuggor
- Lekfulla animationer

### Professionellt Corporate {#professional-corporate}
- Rent sans-serif (Roboto, Open Sans)
- Neutral palett med accentfärg
- Strukturerat avstånd
- Minimala skuggor
- Subtila övergångar

### Kreativt och Djärvt {#creative-and-bold}
- Distinkt typografi
- Djärv färgpalett
- Varierat avstånd
- Starka skuggor
- Märkbara animationer

## Felsökning {#troubleshooting}

**Mina designsystemändringar visas inte**
- Rensa din webbläsartjänst (cache)
- Återuppbygg din webbplats om du använder en statisk generator
- Kontrollera att `theme.json` är giltig JSON
- Verifiera att temat är aktivt

**Färgerna ser olika ut på olika sidor**
- Kontrollera efter konflikter i CSS från plugins
- Verifiera att alla sidor använder samma tema
- Rensa eventuella caching-plugins

**Jag vill återgå till ett tidigare designsystem**
- Fråga agenten: "Show me my design system history"
- Redigera manuellt `theme.json` till tidigare värden
- Kör förmågan igen med andra val

## Nästa steg {#next-steps}

Efter att du har definierat ditt designsystem:

1. **Granska din webbplats**: Besök din webbplats för att se den nya designen
2. **Förfina ytterligare**: Gör justeringar genom att använda förmågan igen
3. **Skapa mallar**: Bygg anpassade blockmallar med hjälp av dina designtokens
4. **Dokumentera**: Dela ditt designsystem med teammedlemmar
