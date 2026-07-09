---
title: Mogelijkheden van de Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Mogelijkheden: Skelet Opzetten en Activeren van Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 introduceert twee krachtige mogelijkheden waarmee u aangepaste block themes kunt genereren en inzetten, rechtstreeks vanuit de chatinterface.

## Overzicht {#overview}

De mogelijkheden **scaffold-block-theme** en **activate-theme** stellen agents in staat om:
- Volledige, productieklare block themes te genereren op basis van uw specificaties
- Themes automatisch op uw site te activeren zonder handmatige ingreep
- Cohesieve visuele identiteiten te creëren door begeleide ontwerpkwesties

## Block Theme Skelet Opzetten (Scaffold) {#scaffold-block-theme}

De mogelijkheid **scaffold-block-theme** genereert een nieuw WordPress block theme met een complete thema-structuur, inclusief:

- `theme.json` configuratie met design tokens
- Block template bestanden voor veelvoorkomende lay-outs
- Aangepaste block stijlen en variaties
- Thema metadata en ondersteuningsverklaringen

### Hoe te gebruiken {#how-to-invoke}

In uw chat met Superdav AI Agent kunt u het genereren van een thema aanvragen:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

De agent zal:
1. Uw ontwerppreferenties verzamelen via het gesprek
2. De complete thema-structuur genereren
3. Alle benodigde thema-bestanden aanmaken
4. Het thema voor activatie klaarmaken

### Verwachte output {#expected-output}

Wanneer de mogelijkheid succesvol wordt uitgevoerd, ziet u:

- Bevestiging dat het thema is opgeskelet (scaffolded)
- De naam en locatie van het thema
- Een overzicht van de toegepaste design tokens (kleuren, typografie, spatiëring)
- Status: Klaar om te activeren

Voorbeeldoutput:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Thema Activeren {#activate-theme}

De mogelijkheid **activate-theme** schakelt uw site over naar een nieuw opgeskelet of bestaand block theme.

### Hoe te gebruiken {#how-to-invoke-1}

Nadat u een thema heeft opgeskelet, kunt u dit direct activeren:

```
"Activate the Modern Agency theme"
```

Of activeer elk bestaand thema:

```
"Switch to the Twentytwentyfour theme"
```

### Verwachte output {#expected-output-1}

Wanneer de activatie slaagt:

- Bevestiging van het actieve thema
- Naam van het vorige thema (ter referentie)
- Site-URL waar het thema nu live staat
- Eventuele thema-specifieke instellingen

Voorbeeldoutput:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Skelet Opzetten en Activeren {#workflow-scaffold-and-activate}

Een typische workflow combineert beide mogelijkheden:

1. **Aanvraag thema generatie**: "Create a block theme for my SaaS landing page"
2. **Agent zet het thema op**: Genereert bestanden en design tokens
3. **Beoordelen en verfijnen**: Bespreek ontwerpaanpassingen indien nodig
4. **Activeren**: "Activate the theme now"
5. **Verifiëren**: Bezoek uw site om te bevestigen dat het nieuwe ontwerp live is

## Design Tokens en Personalisatie {#design-tokens-and-customization}

Opgeskelette thema's gebruiken WordPress design tokens (via `theme.json`) voor:

- **Kleuren**: Primaire, secundaire, accent, neutrale paletten
- **Typografie**: Lettertypen, groottes, gewichten, regelafstanden
- **Spatiëring**: Padding, marge, gap schalen
- **Grenzen**: Radius- en breedte tokens
- **Schaduwen**: Elevatie-niveaus

Deze tokens zijn gecentraliseerd in `theme.json`, waardoor het eenvoudig is om uw gehele designsysteem aan te passen vanuit één bestand.

## Beperkingen en Opmerkingen {#limitations-and-notes}

- Themes worden opgeskelet in `/wp-content/themes/` en moeten voldoen aan de WordPress naamgevingsconventies
- Activatie vereist de juiste rechten op uw WordPress site
- Custom PHP code in thema's is minimaal; gebruik plugins voor complexe functionaliteit
- Block themes werken het beste met WordPress 5.9 en later

## Probleemoplossing {#troubleshooting}

**Thema verschijnt niet na het opzetten**
- Controleer of de thema-map bestaat en de juiste rechten heeft
- Controleer of `theme.json` geldig JSON is
- Zorg ervoor dat de thema naam niet conflicteert met bestaande thema's

**Activatie mislukt**
- Bevestig dat u administratorrechten heeft
- Controleer of de thema-map leesbaar is voor WordPress
- Bekijk de WordPress foutlogs voor details

**Design tokens worden niet toegepast**
- Controleer of de `theme.json` syntax correct is
- Wis eventuele caching plugins
- Controleer of uw WordPress versie de tokens die u gebruikt ondersteunt

## Volgende Stappen {#next-steps}

Nadat u uw thema heeft geactiveerd, kunt u:
- De **Design System Aesthetics skill** gebruiken om typografie, kleuren en spatiëring te verfijnen
- Individuele block stijlen aanpassen via de WordPress block editor
- Custom CSS toevoegen in het `style.css` bestand van het thema
- Custom block templates aanmaken voor specifieke paginatypes
