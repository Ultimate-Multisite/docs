---
title: Ändringslogg för Mätbaserade Planer
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans Ändringslogg

Version 1.1.0 - Släppt den 2026-05-05
- Nytt: AI-token-fakturering för multisite-underplatser — spåra och fakturera användning av AI-tokens över kundsajter med konfigurerbara priser per token
- Nytt: Connector-hårdvarukontrollen byggdes om med dynamisk gränsupptäckt och write-through, vilket säkerställer realtidsnoggrannhet över alla connectors
- Fix: Uppgradering av databelltabeller är nu korrekt anpassade till BerlinDB-schemadefinitionerna, vilket förhindrar uppgraderingsfel vid nya installationer
- Fix: Callback-funktioner för databasuppgraderingar konverterade till rätt format, vilket löser tysta uppgraderingsfel
- Fix: Fraktionella värden accepteras nu i fältet för AI Usage Overage Markup
- Fix: Löste fatala fel och problem med dubbelinitialisering vid plugin-laddning
- Förbättrat: Lägger till check-env npm script så att utvecklingsmiljöer konfigurerar sig själva vid första körningen

### 1.0.3
* Uppdaterad till Plugin Update Checker v5
* Tillagda moderna WordPress-plugin-headers
* Förbättrad kompatibilitet med senaste WordPress-versionerna
* Förbättrad prestanda för användningsspårning

### 1.0.2
* Buggfixar och prestandaförbättringar
* Förbättrad rapportering av användning

### 1.0.0
* Initial utgivning
* Kärnfunktionalitet för metrad fakturering
* Användningsspårning och beräkning av överförbrukning
* Automatisk fakturagenerering
