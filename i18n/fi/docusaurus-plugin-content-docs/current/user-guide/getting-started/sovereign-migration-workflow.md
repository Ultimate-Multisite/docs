---
title: Suvereenisen siirto-työnkulku
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Suvereenisen siirtojen työnkulku

Ultimate Multisite: Multi-Tenancy 1.2.0 lisää siirtovahvistusportteja standardisivuston siirtämiseen suvereenisiin vuokralaisinfrastruktuureihin.

## Ennen kuin aloitat

Varmista, että sinulla on:

- Nykyinen varmuuskopio lähdesivustosta.
- Multi-Tenancy -lisäosa aktiivinen.
- Kohdevuokralaisen tietokanta, tiedostonjuuristo ja verkkotunnus valmiina.
- Tietokantojen isäntäliittymä, joka vastaa kohdeympäristöä.
- Mahdollisuus suorittaa WP-CLI -komentoja verkkoon.

## Suositeltu työnkulku

1. Valmista kohdevuokralaisen tietokanta ja tiedostonjuuristo.
2. Rekisteröi tai päivitä vuokralaisen eristysasetukset (tenant isolation settings).
3. Suorita vuokralaisen siirto (tenant migration).
4. Tarjoa tai vahvista vuokralaisen käyttäjät.
5. Tyhjennä asynkroniset siirtotyöt (async migration jobs).
6. Suorita suvereenisen siirtovahvistus (sovereign migration verification).
7. Käy vuokralaisella SSO:lla sisään.
8. Vaihda DNS-asetuksia tai reititystä vasta vahvistuksen jälkeen.

## Vahvistusportit

Vahvistustyönkulku tarkistaa siirron useista näkökulmista:

- Vuokralaisen schema on olemassa ja sitä voi kirjoittaa vuokralaisen tietokantojen kirjoittajalla (database writer).
- Konfiguroitu tietokantaisäntä on kelvollisia pääausuja.
- Vuokralaisen käyttäjät ovat läsnä ja vastaavat odotettua suvereenisen asennuskäyttäjämäärää.
- Asynkroninen työjen pudotusputki (async push queue) voidaan tyhjentää onnistuneesti.
- Vanhat verkko-puolen tietopolut eivät ole enää tarpeen suvereeniselle vuokralaiselle.

Käytä vahvistusvirheitä ennen lanseerausta estävinä esteinä. Korjaa ilmoitettu tietokanta-, käyttäjä-, pudotusputki- tai reititysongelma, ja suorita vahvistus uudelleen ennen kuin altistat vuokralaisen asiakkaille.

## Ensimmäinen tuotantoyritys

Vahvistuksen jälkeen käytä **Visit (SSO)** -toimintoa sivuston hallintapaneelista ensimmäiseen ylläpitäjän käyntiin. Tämä vahvistaa vuokralaisen reitityksen, SSO-tokenien käsittelyn, alkuperän kiinnittämisen (origin pinning) ja vuokralaisen puolen käyttäjien tarjoamisen yhdessä hallitussa askeleessa.
