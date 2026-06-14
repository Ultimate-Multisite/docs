---
title: Hostingerin moni-vuokrasopimus
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 lisää Hostingerin multi-tenancy -ominaisuuden, jolloin isännöidyt nimet voivat osallistua itsemääräiseen vuokralaisproviisioon olemassa olevan Hostinger domain-mapping -integraation rinnalla.

Käytä tätä ominaisuutta, kun vuokralaisnimet ja eristetty vuokralaisinfrastruktuuri hallitaan Hostinger hPanelin kautta.

## Asetushuomautukset

1. Konfiguroi perus-Hostinger-integraatio **Ultimate Multisite > Settings > Host Integrations** -osiossa.
2. Varmista, että Hostinger API-token pystyy hallitsemaan kohdattavaa nimeä tai alalohkoa.
3. Aktivoi Multi-Tenancy addon.
4. Konfiguroi vuokralaisen eristysstrategia ennen vuokralaisen julkaisemista.
5. Suorita siirtymän varmistusvirtausta ennen tuotantotrafikon lähettämistä vuokralaiselle.

Hostinger-ominaisuus käyttää yhteistä Hostinger-yhteyttä isäntäpuolisille operaatioille. DNS:n on silti osoitettava oikeaan Hostinger-tilaukseen, ja hPanelin tilikaasut soveltuvat edelleen.

## Ominaisuuteen liittyvät muutokset

- Itsemääräisiä vuokralaisia voidaan luoda isäntää tietoisia domain-operaatioilla.
- Samalla koneella olevat tietokantoyhteyden merkit normalisoidaan ennen vahvistusta.
- Hostingerin hallitsemat vuokralaiset tulisi käyttää hPanelissa näkyvää tietokannan isännän arvoa, ellei WordPressin ajonympäristö vaadi paikallista ylivoimaa.
- SSO-vierailut perustuvat siihen, että vuokralaisen nimi ratkaisee Hostingerissa isännöidyn vuokralaisen.

## Hostinger-vuokralaisien vianmääritys

- Jos vuokralaisen asennus epäonnistuu, varmista, että nimi on jo liitetty Hostinger-tilaukseen.
- Jos tietokannan vahvistus epäonnistuu, vertaa vuokralaisen DB-käyttäjää, tietokannan nimeä ja isäntän sitoutumista hPanelin kanssa.
- Jos **Visit (SSO)** epäonnistuu, varmista DNS:n ja SSL:n olevan aktiivisia vuokralaisen nimelle.
- Jos poisto jättää jälkeensä isännän resursseja, poista kaikki jäljellä olevat tietokannat, käyttäjät tai kansiot hPanelista varmistamisen jälkeen.
