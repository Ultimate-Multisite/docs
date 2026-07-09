---
title: Maak Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menu Aanmaken {#create-menu}

De functionaliteit **Menu Aanmaken** creëert WordPress navigatiemenu's en ondersteunt verschillende navigatielabels die gescheiden zijn van de paginatitels.

## Overzicht {#overview}

Deze functionaliteit breidt de standaard menu-aanmaakfunctionaliteit uit met de mogelijkheid om een `navigation_label` parameter op te geven. Hiermee kunt u menu's aanmaken waarbij het label dat in de navigatie wordt weergegeven verschilt van de paginatitel. Dit biedt meer flexibiliteit in de structuur van de site en de gebruikerservaring.

## Parameters {#parameters}

| Parameter | Type | Vereist | Beschrijving |
|-----------|------|---------|-------------|
| `name` | string | Ja | Naam van het menu, bijv. `Hoofdnavigatie` |
| `location` | string | Nee | Thema locatie waaraan dit menu moet worden toegewezen, bijv. `primary` |
| `navigation_label` | string | Nee | Label om in de navigatie weer te geven (verschilt van de paginatitel) |

## Retourwaarde {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigatielabel versus Paginatitel {#navigation-label-vs-page-title}

De `navigation_label` parameter stelt u in staat om de interne menunaam te scheiden van het label dat aan de gebruikers wordt getoond:

- **`name`** — De interne menu-identifier die door WordPress wordt gebruikt (bijv. "Primary Navigation")
- **`navigation_label`** — Het label dat aan de sitebezoekers in de navigatie wordt getoond (bijv. "Main Menu")

Dit is handig wanneer:
- Uw interne naamgevingsconventie verschilt van de labels die zichtbaar zijn voor gebruikers
- U kortere labels in de navigatie wilt dan in het admin-paneel
- U ondersteuning nodig heeft voor meerdere talen met verschillende lengtes van labels
- U menu's bouwt voor specifieke regio's of gebruikersgroepen

## Gebruiksvoorbeelden {#usage-examples}

### Voorbeeld 1: Simpel Menu met Navigatielabel {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Maak een primaire navigatie-menu aan met de naam "Main Navigation" en het navigatielabel "Menu".
```

**Resultaat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Voorbeeld 2: Menu voor Specifieke Thema Locatie {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Maak een footer menu aan met de naam "Footer Links", het navigatielabel "Quick Links" en wijs het toe aan de footer locatie.
```

**Resultaat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integratie met Theme Builder {#integration-with-theme-builder}

Wanneer u Theme Builder gebruikt, detecteert de Create Menu functionaliteit:

1. Detecteert automatisch beschikbare thema menu locaties
2. Maakt menu's aan met geschikte navigatielabels voor uw ontwerp
3. Wijst menu's toe aan de juiste thema locaties
4. Ondersteunt het toevoegen van menu-items na de creatie

## Gerelateerde Functionaliteiten {#related-abilities}

- **`add_menu_item`** — Voeg items toe aan een bestaand menu
- **`update_menu`** — Hernoem een menu of wijs het toe aan een andere thema locatie
- **`delete_menu`** — Verwijder een menu van uw site

## Best Practices {#best-practices}

- **Gebruik duidelijke navigatielabels** — houd de labels beknopt en beschrijvend voor de gebruiker
- **Pas thema locaties aan** — wijs menu's toe aan de juiste thema locatie voor correcte weergave
- **Plan de menu structuur** — beslis over de hiërarchie van uw menu voordat u items aanmaakt
- **Test responsiviteit** — controleer of de menu's correct worden weergegeven op mobiele apparaten
- **Localiseer labels** — gebruik verschillende navigatielabels voor verschillende taalversies

## Beperkingen {#limitations}

- Navigatielabels zijn uitsluitend voor weergave; de interne `name` wordt nog steeds gebruikt voor de identificatie door WordPress
- Themaondersteuning varieert; niet alle thema's ondersteunen alle menu locaties
- Menu-items moeten apart worden toegevoegd nadat het menu is aangemaakt
- Het wijzigen van een navigatielabel vereist het bijwerken van het menu

## Gerelateerde Functionaliteiten {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — maak logo's voor de header van uw site aan
- [Validate Palette Contrast](./validate-palette-contrast.md) — zorg voor toegankelijke kleurenschema's
