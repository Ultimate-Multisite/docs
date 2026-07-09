---
title: Ændringslog for forbrugsafregnede planer
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans Changelog {#metered-plans-changelog}

Version 1.1.0 - Udgivet den 2026-05-05
- Nyt: AI-tokenfakturering for multisite-undersider — spor og fakturér AI-tokenforbrug på tværs af kunders sites med konfigurerbare satser pr. token
- Nyt: Connector-håndhævelse genopbygget med dynamisk grænseopdagelse og write-through, hvilket sikrer nøjagtighed i realtid på tværs af alle connectors
- Rettelse: Databasetabelopgraderinger er nu korrekt afstemt med BerlinDB-skemadefinitioner, hvilket forhindrer opgraderingsfejl ved nye installationer
- Rettelse: Databaseopgraderings-callbacks konverteret til det korrekte format, hvilket løser stille opgraderingsfejl
- Rettelse: Brøkværdier accepteres nu i inputfeltet AI Usage Overage Markup
- Rettelse: Løste fatale fejl og problemer med dobbelt initialisering ved indlæsning af plugin
- Forbedret: Tilføjede check-env npm-script, så udviklermiljøer selvkonfigurerer ved første kørsel

### 1.0.3 {#103}
* Opdateret til Plugin Update Checker v5
* Tilføjede moderne WordPress plugin-headers
* Forbedret kompatibilitet med nyeste WordPress-versioner
* Forbedret ydeevne for forbrugssporing

### 1.0.2 {#102}
* Fejlrettelser og ydeevneforbedringer
* Forbedret forbrugsrapportering

### 1.0.0 {#100}
* Første udgivelse
* Kernefunktionalitet til forbrugsbaseret fakturering
* Forbrugssporing og beregning af overforbrug
* Automatisk fakturagenerering
