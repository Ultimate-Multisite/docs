---
title: Ändringslogg
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Versionshistorik

## 1.16.0 — Släppt den 2026-05-20

### Nytt

- **Möjlighet att generera SVG-logotyper** — Theme Builder kan nu generera och bädda in anpassade SVG-logotyper med namnutrymmesäker sanering.
- **Uppladdning av foto i upptäcktsintervjun** — Theme Builder:s upptäcktsintervju inkluderar nu ett steg för uppladdning av foto, vilket ger en rikare designkontext.
- **Validering av färgkontrast** — Kontrollera färgkombinationer för WCAG-efterlevnad innan de tillämpas på ett tema.
- **Hotellmenyer** — Theme Builder kan nu generera strukturerade menyer för mat och dryck för hotellverksamheter.
- **Förhandsgranskning för skrivbord och mobil** — Förhandsgranska din design på både skrivbords- och mobila enheter under valet av designriktning.
- **Parameter för navigeringsetikett** — Möjligheten att skapa menyer stöder nu en distinkt `navigation_label` som är separat från sidtiteln.
- **Tillgänglighet av verktyg Nivå 1** — sd-ai-agent/site-scrape är nu ett verktyg Nivå 1 som är tillgängligt som standard i Theme Builder.

### Fixat

- **AI-klientcache** — nu backad av transients för att bibehålla data mellan förfrågningar, vilket förhindrar dataförlust vid långvariga agentuppgifter.
- **Länkar för åtgärder i plugin-raden** — korrigerad och omdöpt för tydlighet.

## 1.10.0 — Släppt den 2026-05-05

### Nytt

- **Tavily internet search** — lägg till Tavily som en sökmotor för rikare internetresultat, utöver Brave Search.
- **Inbyggda, temabevästa färdigheter** — Block Themes, Classic Themes, Kadence Blocks och Kadence Theme-guideverktyg levereras nu med pluginet.
- **Möjlighet att skapa kontaktformulär i webbplatsbyggaren** — lägg till ett kontaktformulär på vilken sida som helst direkt från chattgränssnittet.

### Förbättrat

- **WooCommerce-integration omstrukturerad** — använder nu native WooCommerce API:er för bättre tillförlitlighet och kompatibilitet.
- **Lista över leverantörer uppdateras automatiskt** — när ett plugin aktiveras eller inaktiveras.

### Fixat

- **navigate-to-möjlighet** — fixade oändlig omladdningsloop på vissa administrationssidor.
- **list-posts-möjlighet** — löser nu korrekt kategorier och taggar till slugs.
- **WP-CLI-kommandon** — återställde saknade namnutrymmesalias efter en tidigare omstrukturering.
- **Händelseautomatisering** — hanterar smidigt webbplatser där automatiseringstabeller ännu inte har skapats.
- **memory-save-möjlighet** — använder nu det korrekta namnutrymmesprefixet i systeminstruktionsbyggaren.
- **Scalar-verktygsresultat** — kapslas nu korrekt in innan de returneras till AI:n.
- **Användningsstatistik** — hanterar nu korrekt det äldre formatet för förmåge-nycklar vid uppgradering från äldre versioner.
