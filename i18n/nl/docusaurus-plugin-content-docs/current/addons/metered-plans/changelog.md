---
title: Wijzigingslogboek voor plannen met verbruiksmeting
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Changelog voor Metered Plans

Versie 1.1.0 - Uitgebracht op 2026-05-05
- Nieuw: AI-tokenfacturering voor multisite-subsites — houd AI-tokengebruik bij en factureer dit over klantensites heen met configureerbare tarieven per token
- Nieuw: Connectorhandhaving opnieuw opgebouwd met dynamische limietdetectie en write-through, wat realtime nauwkeurigheid over alle connectors waarborgt
- Oplossing: Databasetabel-upgrades zijn nu correct afgestemd op BerlinDB-schemadefinities, waardoor upgradefouten bij nieuwe installaties worden voorkomen
- Oplossing: Database-upgradecallbacks geconverteerd naar de juiste indeling, waardoor stille upgradefouten worden opgelost
- Oplossing: Fractionele waarden worden nu geaccepteerd in het invoerveld AI Usage Overage Markup
- Oplossing: Fatale fouten en problemen met dubbele initialisatie bij het laden van de plugin opgelost
- Verbeterd: check-env npm-script toegevoegd zodat ontwikkelaarsomgevingen zichzelf configureren bij de eerste uitvoering

### 1.0.3 {#103}
* Bijgewerkt naar Plugin Update Checker v5
* Moderne WordPress-pluginheaders toegevoegd
* Compatibiliteit met de nieuwste WordPress-versies verbeterd
* Prestaties van gebruikstracking verbeterd

### 1.0.2 {#102}
* Bugfixes en prestatieverbeteringen
* Gebruiksrapportage verbeterd

### 1.0.0 {#100}
* Eerste release
* Kernfunctionaliteit voor metered facturering
* Gebruikstracking en berekening van overschrijdingen
* Automatische factuurgeneratie
