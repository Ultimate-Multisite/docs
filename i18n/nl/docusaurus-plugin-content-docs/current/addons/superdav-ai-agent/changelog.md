---
title: Wijzigingslogboek
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Uitgebracht op 2026-05-20

### Nieuw

- **Logo SVG genereren** — Theme Builder kan nu aangepaste logo SVG's genereren en inbedden met namespace-veilige sanitatie.
- **Foto uploaden in discovery interview** — Het discovery interview van Theme Builder bevat nu een stap voor het uploaden van foto's, wat zorgt voor een rijker ontwerpprestatie.
- **Palette Contrast valideren** — Controleer kleurparen op WCAG-naleving voordat u ze toepast op een thema.
- **Gastvrijheidsmenu's** — Theme Builder kan nu gestructureerde menu's voor voedsel en drank genereren voor horecazakelijke bedrijven.
- **Desktop- en mobiele preview rendering** — Bekijk uw ontwerp op desktop- en mobiele apparaten tijdens de selectie van de ontwerktraining.
- **Navigatie label parameter** — De functie 'Menu aanmaken' ondersteunt nu een afzonderlijk `navigation_label` dat verschilt van de paginatitel.
- **Tier 1 tool beschikbaarheid** — sd-ai-agent/site-scrape is nu een Tier 1 tool die standaard beschikbaar is in Theme Builder.

### Verpouwd

- **AI Client cache** — Nu ondersteund door transients voor cross-request persistentie, waardoor gegevensverlies wordt voorkomen bij langlopende agenttaken.
- **Plugin rij actie links** — Verbeterd en hernoemd voor meer duidelijkheid.

## 1.10.0 — Uitgebracht op 2026-05-05

### Nieuw

- **Tavily internet search** — Voeg Tavily toe als zoekprovider voor rijkere internetzoekresultaten naast Brave Search.
- **Theme-aware ingebouwde skills** — Block Themes, Classic Themes, Kadence Blocks en Kadence Theme skill guides worden nu meegeleverd met de plugin.
- **Site builder contact form functionaliteit** — Voeg een contactformulier toe aan elke pagina rechtstreeks vanuit de chatinterface.

### Verbeterd

- **WooCommerce integratie refactored** — Gebruikt nu native WooCommerce APIs voor betere betrouwbaarheid en compatibiliteit.
- **Providerlijst vernieuwt automatisch** — Wanneer een plugin wordt geactiveerd of gedeactiveerd.

### Verpouwd

- **navigate-to functionaliteit** — Verholpen oneindige herlaadlus op sommige admin-pagina's.
- **list-posts functionaliteit** — Lost nu correct categorie- en tagnamen op naar slugs.
- **WP-CLI commando's** — Herstelde ontbrekende namespace-aliasen na een eerdere refactor.
- **Event automation** — Behandelt sites die nog geen automatiseringstabellen hebben, nu soepel.
- **memory-save functionaliteit** — Gebruikt nu het juiste namespace-prefix in de system instruction builder.
- **Scalar tool resultaten** — Worden nu correct ingepakt voordat ze aan de AI worden geretourneerd.
- **Usage statistics** — Behandelt nu correct het legacy ability key formaat bij upgrade van oudere versies.
