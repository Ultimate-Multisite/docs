---
title: Käyttöperusteisten tilausten muutosloki
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Mittaroitujen pakettien muutosloki {#metered-plans-changelog}

Versio 1.1.0 - Julkaistu 2026-05-05
- Uutta: AI-tokenien laskutus monisivuston alasivustoille — seuraa ja laskuta AI-tokenien käyttöä asiakassivustoilla määritettävillä tokenikohtaisilla hinnoilla
- Uutta: Yhdistimien pakotus rakennettu uudelleen dynaamisella rajojen tunnistuksella ja läpikirjoituksella, mikä varmistaa reaaliaikaisen tarkkuuden kaikissa yhdistimissä
- Korjaus: Tietokantataulujen päivitykset on nyt kohdistettu oikein BerlinDB-skeemamäärityksiin, mikä estää päivitysvirheet uusissa asennuksissa
- Korjaus: Tietokantapäivitysten takaisinkutsut muunnettu oikeaan muotoon, mikä ratkaisee hiljaiset päivitysvirheet
- Korjaus: Murtolukuarvot hyväksytään nyt AI Usage Overage Markup -syöttökentässä
- Korjaus: Ratkaistu fataalit virheet ja kaksoisalustuksen ongelmat lisäosan latauksessa
- Parannettu: Lisätty check-env npm -skripti, jotta kehittäjäympäristöt määrittävät itsensä automaattisesti ensimmäisellä suorituskerralla

### 1.0.3 {#103}
* Päivitetty Plugin Update Checker v5:een
* Lisätty modernit WordPress-lisäosan otsakkeet
* Parannettu yhteensopivuutta uusimpien WordPress-versioiden kanssa
* Parannettu käytön seurannan suorituskykyä

### 1.0.2 {#102}
* Virheenkorjauksia ja suorituskykyparannuksia
* Parannettu käyttöraportointia

### 1.0.0 {#100}
* Ensimmäinen julkaisu
* Mittaroidun laskutuksen ydintoiminnallisuus
* Käytön seuranta ja ylityksen laskenta
* Automaattinen laskujen luonti
