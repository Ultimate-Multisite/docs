---
title: Genereer Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Genereren van Logo SVG

De **Genereren van Logo SVG**-mogelijkheid stelt Theme Builder in staat om aangepaste logo SVG's te creëren en direct in uw WordPress-site in te bedden, met automatische, namespace-veilige sanitatie.

## Overzicht

Deze mogelijkheid genereert schaalbare vectorgrafieken (SVG) logo's op basis van de merkrichting en de ontwerpvoorkeuren van uw site. De gegenereerde SVG's worden automatisch gesaneerd om te garanderen dat ze veilig zijn voor gebruik in WordPress, terwijl de visuele integriteit behouden blijft.

## Parameters

| Parameter | Type | Vereist | Beschrijving |
|-----------|------|---------|-------------|
| `site_name` | string | Ja | De naam van de site waarvoor het logo moet worden gegenereerd |
| `style` | string | Ja | De ontwerpstijl (bijv. "modern", "klassiek", "minimalistisch", "speels") |
| `colors` | array | Nee | Een array van hex-kleurcodes om in het logo te gebruiken (bijv. `["#678233", "#ffffff"]`) |
| `width` | number | Nee | De SVG-breedte in pixels (standaard: 200) |
| `height` | number | Nee | De SVG-hoogte in pixels (standaard: 200) |
| `include_text` | boolean | Nee | Of de sitenaam als tekst in het logo moet worden opgenomen (standaard: true) |

## Output Formaat

De mogelijkheid retourneert een SVG-string met de volgende structuur:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitatie Gedrag

De gegenereerde SVG's ondergaan automatische, namespace-veilige sanitatie om:

- **Onveilige attributen te verwijderen** — verwijdert event handlers, scripts en potentieel gevaarlijke attributen
- **Namespaces te behouden** — onderhoudt SVG namespaces (xmlns, xlink) voor correcte rendering
- **De structuur te valideren** — zorgt ervoor dat de SVG voldoet aan W3C-standaarden
- **Entiteiten te encoderen** — ontsluit speciale tekens in de tekstinhoud
- **Externe referenties te verwijderen** — verwijdert externe stylesheets en beeldreferenties

Dit zorgt ervoor dat de SVG veilig is om direct in WordPress in te bedden zonder dat er aanvullende sanitatie nodig is.

## Gebruiksvoorbeeld

**Prompt:**
```
Genereer een modern logo voor mijn tech startup genaamd "CloudSync" met blauwe en witte kleuren.
```

**Resultaat:**
De mogelijkheid creëert een SVG-logo dat:
- De sitenaam "CloudSync" bevat
- Het gespecificeerde blauw-witte kleurenpalet gebruikt
- Moderne ontwerpprincipes volgt
- Automatisch gesaneerd en klaar voor gebruik is

## Integratie met Theme Builder

Wanneer u de selectie van de ontwerprichting in Theme Builder gebruikt, dan:

1. Analyseert de mogelijkheid uw ontwerprichting en kleurenpalet
2. Genereert een aangepast SVG-logo dat overeenkomt met uw voorkeuren
3. Plaatst het logo automatisch in de header/branding-sectie van uw site
4. Slaat de SVG op als een aangepast logo in de WordPress media

## Best Practices

- **Geef duidelijke stijlvoorkeuren** — beschrijf de gewenste ontwerpstijl (modern, klassiek, speels, enz.)
- **Specificeer kleuren** — voeg uw merk-kleuren toe voor consistentie
- **Test de rendering** — controleer of het logo correct wordt weergegeven op verschillende schermgroottes
- **Verder aanpassen** — gebruik de logo-aanpassingshulpmiddelen van WordPress om de grootte en plaatsing aan te passen

## Beperkingen

- SVG-logo's worden gegenereerd als statische grafieken (niet geanimeerd)
- Complexe logo's met veel elementen kunnen handmatige verfijning vereisen
- Custom fonts worden niet ondersteund; tekst gebruikt systeemfonts
- Zeer grote of zeer kleine afmetingen kunnen de kwaliteit beïnvloeden

## Gerelateerde Mogelijkheden

- [Validate Palette Contrast](./validate-palette-contrast.md) — controleer het kleurcontrast voor toegankelijkheid
- [Create Menu](./create-menu.md) — creëer navigatiemenu's voor uw site
