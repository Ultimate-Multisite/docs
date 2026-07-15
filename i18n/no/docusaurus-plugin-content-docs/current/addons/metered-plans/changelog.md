---
title: Endringslogg for metriske planer
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Endringslogg for metriske planer

Versjon 1.1.0 - Utgitt 2026-05-05
- Nytt: Fakturering av AI-tokens for undernettsteder i multisite — spor og fakturer bruk av AI-tokens på tvers av kundesteder med konfigurerbare priser per token
- Nytt: Konnektorhåndhevelse er ombygget med dynamisk oppdagelse av grenser og write-through, noe som sikrer sanntidsnøyaktighet på tvers av alle konnektorer
- Feilretting: Oppgradering av databaltabeller er nå korrekt justert med BerlinDB-skjemaer, noe som forhindrer oppgraderingsfeil ved nye installasjoner
- Feilretting: Databaseregistreringer (callbacks) for oppgradering er konvertert til riktig format, og løser stille oppgraderingsfeil
- Feilretting: Brøkverdier aksepteres nå i feltet for AI Usage Overage Markup
- Feilretting: Løste fatale feil og problemer med dobbel initialisering ved plugin-lasting
- Forbedret: Lagt til `check-env` npm-skript, slik at utviklingsmiljøer konfigurerer seg selv ved første kjøring

### 1.0.3 {#103}
* Oppdatert til Plugin Update Checker v5
* Lagt til moderne WordPress-plugin-headers
* Forbedret kompatibilitet med de nyeste WordPress-versjonene
* Forbedret ytelsen for brukssporing

### 1.0.2 {#102}
* Feilrettinger og ytelsesforbedringer
* Forbedret rapportering av bruk

### 1.0.0 {#100}
* Første utgivelse
* Kjernfunksjonalitet for metrisk fakturering
* Sporing av bruk og beregning av overforbruk
* Automatisk faktura­generering
