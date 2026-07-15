---
title: Closte-integraatio
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integrointi

## Yleiskatsaus {#overview}
Closte on hallittu WordPress-hostausalusta, joka on rakennettu Google Cloud -infrastruktuurille. Tämä integrointi mahdollistaa automaattisen verkkotunnusten synkronoinnin ja SSL-sertifikaattien hallinnan Ultimate Multisiten ja Closten välillä.

## Ominaisuudet {#features}
- Automaattinen verkkotunnusten synkronointi
- SSL-sertifikaattien hallinta
- Wildcard-verkkotunnusten tuki
- Ei tarvitse konfigurointia, jos käytät Closteia

## Vaatimukset {#requirements}
Järjestelmässä on määritettävä seuraava vakio `wp-config.php`-tiedostoon, jos käytät Closteia:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Tämä vakio on yleensä jo määritetty, jos hostaat palvelinta Closteella.

## Asetusohjeet {#setup-instructions}

### 1. Tarkista Closte-API-avaimesi {#1-verify-your-closte-api-key}
Jos hostaat Closteella, `CLOSTE_CLIENT_API_KEY`-vakio on jo määritettävä `wp-config.php`-tiedostosi. Voit tarkistaa tämän tarkistamalla `wp-config.php`-tiedostoasi.

### 2. Aktivoi integrointi {#2-enable-the-integration}
1. WordPressin hallintapaneelissa siirry Ultimate Multisite > Asetukset (Settings).
2. Siirry "Domain Mapping" -välilehdelle.
3. Vieritä alas kohtaan "Host Integrations".
4. Aktivoi Closte-integraatio.
5. Napsauta "Save Changes" (Tallenna muutokset).

## Miten se toimii {#how-it-works}

Kun verkkotunnus on mappattu Ultimate Multisiteen:

1. Integrointi lähettää pyynnön Closten API:lle lisätäkseen verkkotunnuksen sovellukseesi.
2. Closte hoitaa SSL-sertifikaattien tarjoamisen automaattisesti.
3. Kun verkkotunnusmappaus poistetaan, integrointi poistaa verkkotunnuksen Closten järjestelmästä.

Integraatio toimii myös Ultimate Multisiten DNS-tarkistusväliluvun asetusten kanssa, jolloin voit määrittää, kuinka usein järjestelmä tarkistaa DNS-levityksen ja SSL-sertifikaattien myöntämisen.

Verkkotunnuksen rekisterin luominen

Tämä integrointi varmistaa, että kun sivustoa luodaan tai duplikoituu, verkkotunnusrekisteri luodaan automaattisesti. Tämä on erityisen tärkeää Closte-integraation kannalta, sillä verkkotunnusrekisterin luominen laukaisee Closte API:n luomaan verkkotunnuksen ja SSL-sertifikaatin.

## Ongelmanratkaisu {#domain-record-creation}

### API-yhteyden ongelmat {#troubleshooting}
- Tarkista, että Closte API-avaimesi on oikein
- Varmista, että Closte-tililläsi on tarvittavat oikeudet

### SSL-sertifikaattien ongelmat {#api-connection-issues}
- Closteen voi kestää jonkin aikaa SSL-sertifikaattien myöntämiseen (yleensä 5–10 minuuttia)
- Varmista, että verkkotunnuksesi osoittavat oikein Closte-palvelimen IP-osoitteeseen
- Tarkista DNS-rekisterit verkkotunnuksesi kohdalla varmistaaksesi niiden olevan oikein konfiguroitu

### Verkkotunnusta ei lisätty {#ssl-certificate-issues}
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi
- Varmista, että verkkotunnus ei ole jo lisätty Closteen
- Varmista, että verkkotunnuksesi DNS-rekisterit on konfiguroitu oikein

### DNS-tarkistusaika {#domain-not-added}
- Jos SSL-sertifikaattien myöntämiseen kuluu liikaa aikaa, voit säätää DNS-tarkistusaikaa Domain Mapping -asetuksissa
- Oletusarvo on 300 sekuntia (5 minuuttia), mutta voit asettaa sen mahdollisimman matalaksi 10 sekuntiin nopeampaa tarkistusta testauksessa varten
