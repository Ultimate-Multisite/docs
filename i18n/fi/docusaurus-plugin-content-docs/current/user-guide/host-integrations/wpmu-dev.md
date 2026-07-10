---
title: WPMU DEV -integraatio
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integraatio {#wpmu-dev-integration}

## Yleiskatsaus {#overview}
WPMU DEV on kattava WordPress-alusta, joka tarjoaa isännöintiä, plugin-lisäosia ja palveluita WordPress-sivustoille. Tämä integraatio mahdollistaa automaattisen verkkotunnusten synkronoinnin ja SSL-sertifikaattien hallinnan Ultimate Multisiten ja WPMU DEV -isännöinnin välillä.

## Ominaisuudet {#features}
- Automaattinen verkkotunnusten synkronointi
- SSL-sertifikaattien hallinta
- Laajennetut SSL-sertifikaatin varmistustyöt

## Vaatimukset {#requirements}
Integraatio havaitsee automaattisesti, jos isännöit WordPress:llä WPMU DEV:ssä, ja käyttää sisäänrakennettua APIä. Ei tarvita lisäkonfiguraatiota, jos isännöit WPMU DEV:ssä.

Integraatio tarkistaa `WPMUDEV_HOSTING_SITE_ID` -vakion olemassaolon, joka määritellään automaattisesti, kun isännöit WPMU DEV:ssä.

## Asetusohjeet {#setup-instructions}

### 1. Vahvista WPMU DEV -isännöinti {#1-verify-wpmu-dev-hosting}
Jos isännöit WordPress:llä WPMU DEV:ssä, tarvittavat vakiot on jo määritettävä. Tarkista seuraavat asiat:

1. `WPMUDEV_HOSTING_SITE_ID` -vakio on määritetty ympäristössäsi
2. Sinulla on aktiivinen WPMU DEV -jäsenyys API- pääsyn kanssa

### 2. Aktivoi integraatio {#2-enable-the-integration}
1. WordPress-hallintapaneelissa siirry Ultimate Multisite > Asetukset (Settings)
2. Siirry "Domain Mapping" -välilehdelle
3. Selaa alas kohtaan "Host Integrations"
4. Aktivoi WPMU DEV -integraatio
5. Napsauta "Save Changes"

## Miten se toimii {#how-it-works}

### Verkkotunnusten synkronointi {#domain-syncing}
Kun verkkotunnus on mappattu Ultimate Multisiteen:

1. Integraatio käyttää WPMU DEV APIä lisätäkseen verkkotunnuksen isännöintitilillesi
2. Se lisää myös automaattisesti verkkotunnuksen www-versio
3. WPMU DEV hoitaa verkkotunnuksen konfiguroinnin ja SSL-sertifikaatin myöntämisen

### SSL-sertifikaattien hallinta {#ssl-certificate-management}

Integraatio on konfiguroitu lisää SSL-sertifikaattien vahvistustapahtumien määrää WPMU DEV -isännöinnille, koska SSL-sertifikaatteja voi kestää jonkin aikaa myöntää ja asentaa. Oletuksena se yrittää aina 10 kertaa SSL-sertifikaatin vahvistusta, verrattuna standardiin 5 yritykseen.

## Tärkeät huomiot {#important-notes}

### Alueen poisto {#domain-removal}
Tällä hetkellä WPMU DEV API:llä ei ole tapa poistaa alueita. Kun aluekarttaa poistetaan Ultimate Multisite -järjestelmässä, se pysyy WPMU DEV -isännöintitililläsi. Sinun on tarvittaessa poistettava se manuaalisesti WPMU DEV -isännön hallintapaneelista.

### API-tunnistautuminen {#api-authentication}
Integraatio käyttää WPMU DEV API-avacciaa, joka on tallennettu WordPress-tietokantaasi `wpmudev_apikey`-asetuksena. Tämä asetettu automaattisesti, kun yhdistät sivustosi WPMU DEV:ään.

## Ongelmanratkaisu {#troubleshooting}

### API-yhteyden ongelmat {#api-connection-issues}
- Varmista, että sivustosi on oikein kytketty WPMU DEV:hen
- Tarkista, että `wpmudev_apikey`-asetus on asetettu WordPress-tietokantaasi
- Varmista, että WPMU DEV -jäsenyytesi on aktiivinen

### SSL-sertifikaatin ongelmat {#ssl-certificate-issues}
- WPMU DEV voi ottaa jonkin aikaa SSL-sertifikaattien myöntämiseen (yleensä 5–15 minuuttia)
- Integraatio on konfiguroitu tarkistamaan SSL-sertifikaatteja aina 10 kertaan asti
- Jos SSL-sertifikaatteja ei ole vielä myönnetty useiden yritysten jälkeen, ota yhteyttä WPMU DEV -tukeen

### Alueen ei lisätty {#domain-not-added}
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi
- Varmista, että alue ei ole jo lisätty WPMU DEV:ään
- Varmista, että WPMU DEV -isännöintasuunnitelmasi tukee lisäämiäsi alueiden määrää
