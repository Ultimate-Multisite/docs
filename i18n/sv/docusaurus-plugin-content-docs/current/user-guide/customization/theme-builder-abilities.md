---
title: Temabuilder-förmågor
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold and Activate Block Themes

Superdav AI Agent v1.12.0 introducerar två kraftfulla funktioner som låter dig generera och driftsätta anpassade blockteman direkt från chattgränssnittet.

## Översikt

Funktionerna **scaffold-block-theme** och **activate-theme** gör det möjligt för agenter att:
- Generera kompletta, produktionsredo blockteman baserat på dina specifikationer
- Automatiskt aktivera teman på din webbplats utan manuell inblandning
- Skapa sammanhängande visuella identiteter genom vägledda designbeslut

## Scaffold Block Theme

Funktionen **scaffold-block-theme** genererar ett nytt WordPress blocktema med en komplett temastruktur, inklusive:

- `theme.json`-konfiguration med design-tokens
- Blockmallfiler för vanliga layouter
- Anpassade blockstilar och variationer
- Temameta-data och supportdeklarationer

### Hur du anropar den

I ditt chattmeddelande med Superdav AI Agent kan du begära teman­generering:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agenten kommer att:
1. Samla in dina designpreferenser genom konversationen
2. Generera den kompletta temastrukturen
3. Skapa alla nödvändiga temafilerna
4. Förbereda temat för aktivering

### Förväntat resultat

När funktionen exekveras framgångsrikt ser du:

- Bekräftelse på att temat har skaffolderats
- Temats namn och plats
- En sammanfattning av de tillämpade design-tokens (färger, typografi, avstånd)
- Status: Redo för aktivering

Exempel på resultat:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme

Funktionen **activate-theme** byter din webbplats till ett nyligen skaffolderat eller befintligt blocktema.

### Hur du anropar den

Efter att ha skaffolderat ett tema kan du aktivera det direkt:

```
"Activate the Modern Agency theme"
```

Eller aktivera vilket befintligt tema som helst:

```
"Switch to the Twentytwentyfour theme"
```

### Förväntat resultat

När aktiveringen lyckas:

- Bekräftelse på det aktiva temat
- Namnet på det tidigare temat (för referens)
- Webbplats-URL där temat nu är live
- Eventuella tematiska inställningsanteckningar

Exempel på resultat:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Arbetsflöde: Scaffold och Aktivera

Ett typiskt arbetsflöde kombinerar båda funktionerna:

1. **Begär teman­generering**: "Create a block theme for my SaaS landing page"
2. **Agenten skaffolderar temat**: Genererar filer och design-tokens
3. **Granska och förfina**: Diskutera designändringar vid behov
4. **Aktivera**: "Activate the theme now"
5. **Verifiera**: Besök din webbplats för att bekräfta att den nya designen är live

## Design Tokens och Anpassning

Skaffolderade teman använder WordPress design-tokens (via `theme.json`) för:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

Dessa tokens är centraliserade i `theme.json`, vilket gör det enkelt att justera hela ditt designsystem från en enda fil.

## Begränsningar och anteckningar

- Teman skaffolderas i `/wp-content/themes/` och måste följa WordPress namngivningskonventioner
- Aktivering kräver lämpliga behörigheter på din WordPress-webbplats
- Anpassad PHP-kod i teman är minimal; använd plugins för komplex funktionalitet
- Blockteman fungerar bäst med WordPress 5.9 och senare

## Felsökning

**Temat dyker inte upp efter scaffolding**
- Kontrollera att temakatalogen existerar och har korrekta behörigheter
- Kontrollera att `theme.json` är giltig JSON
- Se till att temats namn inte krockar med befintliga teman

**Aktivering misslyckas**
- Bekräfta att du har administratörsbehörigheter
- Kontrollera att temakatalogen är läsbar för WordPress
- Granska WordPress felloggar för detaljer

**Design-tokens tillämpas inte**
- Kontrollera att `theme.json`-syntaxen är korrekt
- Rensa alla caching-plugins
- Kontrollera att din WordPress-version stöder de tokens du använder

## Nästa steg

Efter att du har aktiverat ditt tema kan du:
- Använda **Design System Aesthetics skill** för att förfina typografi, färger och avstånd
- Anpassa individuella blockstilar via WordPress block-editor
- Lägga till anpassad CSS i temat `style.css`-fil
- Skapa anpassade blockmallar för specifika sidtyper
