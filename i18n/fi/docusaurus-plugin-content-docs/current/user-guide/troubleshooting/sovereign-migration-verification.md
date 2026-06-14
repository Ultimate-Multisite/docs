---
title: Suvereenisen siirron varmistus
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Suvereenin siirron vahvistus

Ultimate Multisite: Multi-Tenancy 1.2.0 sisältää WP-CLI -vahvistuskomennot suvereenien vuokralaissiirroille. Käytä niitä, jos vuokralaisen siirto, SSO-vierailu tai erillinen asennus ei käyttäyty lainkaan odotetusti.

## Suoritettavat komennot

Suorita vahvistus verkossa olevasta WordPress-asennuksesta:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Käytä vuokralaisen ID:tä siirrettävälle vuokralaiselle. Ensimmäinen komento tarkistaa, ettei vuokralainen enää riipu vanhentuneesta verkko-puolen tiedoista. Toinen komento varmistaa, että suvereeniset push-työt voidaan käsitellä ja tyhjentää (drain).

## Yleisiä virheitä

### Tietokantojen antávat eivät täsmää isäntään

Jos vahvistus raportoi antamisen tai kirjoittajan käyttäjän virheistä, tarkista konfiguroitu tietokantaisäntä. `localhost`, `127.0.0.1` ja konttialustan palvelimen nimi ovat eri MySQL-antávainisäntöjä. Päivitä vuokralaisen isännän sitoutumista tai tietokantojen antamisia ja suorita vahvistus uudelleen.

### Bedrock- tai paikalliset asennukset eivät pysty yhdistämään

Bedrock- ja paikallisessa soketissa olevat asennukset saattavat raportoida tietokantaa `localhost`-näenä, vaikka ajon aikana yhteys muodostuu normalisoituneella osoitteella. Versio 1.2.0 normalisoi samalla koneella olevat isäntömerkit, mutta räätälöity isäntäylimääräykset voivat silti ristiriidassa tietokantojen antamisten kanssa.

### Asynkroninen push-juova ei tyhjennä (drain)

Jos `verify-sovereign-push` ei pääty loppuun, tarkista Action Scheduleria tai konfiguroitua asynkronista suorittajaa (async runner). Tyhjennä epäonnistuneet työt vain sen jälkeen, kun olet varmistanut niiden olevan turvallisesti uudelleenyrityksen tai hylkäämisen arvoinen.

### Vuokralaisen käyttäjämäärä on väärä

Siirron pitäisi varata käyttäjiä suvereeniselle vuokralaiselle. Jos odotettu asennuskäyttäjä puuttuu, suorita käyttäjäproviisioraportointivaihe uudelleen ennen SSO:n uudelleenyritystä.

### SSO-vierailu hylätään

Tietämättömän istuntokäyttöisen lehdistäautentoinnin (stateless tenant autologin) vaaditaan, että lehen domeni, alkuperäinen PIN-koodi (origin pin), tokenin tarkoitus, nonce ja voimassaoloaika täsmää. Varmista, että lehen URL on oikein ja yritetään kirjautua heti SSO-vierailun luomisen jälkeen.

## Milloin yrittää uudelleen

Yritä vahvistusta jokaisen infrastruktuurimuutoksen jälkeen. Älä vaihda tuotantoliikennettä, poista lähdedataa tai poista siirtymiskelpoiset tunnukset ennen kuin kaikki vahvistustarkistukset ovat läpäisty.
