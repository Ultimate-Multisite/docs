---
title: ServerPilot-integraatio
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integraatio

## Yleiskatsaus
ServerPilot on pilvipalvelu, joka tarjoaa WordPress- ja muiden PHP-sivustojen hostaamisen palvelimilla DigitalOceanilta, Amazonilta, Googleilta tai muilta palveluntarjoajilta. Tämä integraatio mahdollistaa automaattisen verkkotunnusten synkronoinnin ja SSL-sertifikaattien hallinnan Ultimate Multisiten ja ServerPilot välillä.

## Ominaisuudet
- Automaattinen verkkotunnusten synkronointi
- Let's Encryptin avulla SSL-sertifikaattien hallinta
- Automaattinen SSL-sertifikaatin uusiminen

## Vaatimukset
Seuraavat vakioiden on määritettävä tiedostoosi `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Asetusohjeet

### 1. Hae ServerPilot API-tunnisteesi

1. Kirjaudu sisään ServerPilot-hallintapaneeliin
2. Mene kohtaan "Account" > "API" (Tili > API)
3. Luo uusi API-avain, jos sinulla ei ole jo yhtä
4. Kopioi Client ID ja API-avain

### 2. Hae App-ID:si

1. ServerPilot-hallintapaneelissa mene kohtaan "Apps" (Sovellukset)
2. Valitse sovellus, johon WordPress multisite on hostattu
3. App-ID näkyy URL-osoitteessa: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Lisää vakioita wp-config.php:ään

Lisää seuraavat vakioiden tiedot tiedostoon `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktivoi integraatio

1. WordPress-hallintapaneelissa mene Ultimate Multisite > Settings (Asetukset)
2. Siirry välilehdelle "Domain Mapping" (Verkkotunnusten kartoitus)
3. Selaa alas kohtaan "Host Integrations" (Palvelinintegraatiot)
4. Aktivoi ServerPilot-integraatio
5. Napsauta "Save Changes" (Tallenna muutokset)

## Miten se toimii

### Verkkotunnusten synkronointi

Kun verkkotunnus on kartoitettu Ultimate Multisite -järjestelmässä:

1. Integrointi hakeeetut nykyisen domeenien listan ServerPilotista
2. Se lisää uuden domeenin listalle (sekä www-versio, jos sovellettavissa)
3. Se lähettää päivitetyn listan ServerPilotti kautta API:n avulla
4. ServerPilot päivittää domeenilistan sovellukselle

### SSL-sertifikaattien hallinta

Domeenit synkronoiduttua:

1. Integrointi aktivoi automaattisesti AutoSSL:n sovelluksellesi
2. ServerPilot hoitaa SSL-sertifikaattien myöntämisen ja asennuksen Let's Encryptin avulla
3. ServerPilot hoitaa myös SSL-sertifikaattien automaattisen uudelleenkäsittelyn

## SSL-sertifikaattien varmistus

Integrointi on konfiguroitu lisäämään SSL-sertifikaattien varmistustapahtumien määrää ServerPilotille, koska ServerPilotin tarvitsee saattaa kestää jonkin aikaa sertifikaattien myöntämiseen ja asennukseen. Oletuksena se yrittää enintään 5 kertaa, mutta tätä voidaan muokata suodattimilla.

## Ongelmanratkaisu

### API-yhteyden ongelmat
- Tarkista, ovatko Client ID ja API Key oikein
- Tarkista, onko App ID oikein
- Varmista, että ServerPilot-tililläsi on tarvittavat oikeudet

### SSL-sertifikaattien ongelmat
- ServerPilot vaatii, että domeeneilla on voimassa olevat DNS-rekisterit, jotka osoittavat palvelimeesi ennen SSL-sertifikaattien myöntämistä
- Jos SSL-sertifikaatteja ei myönnetä, tarkista, että domeenisi osoittavat oikein palvelimesi IP-osoitteeseen
- ServerPilotin on saatettava jonkin aikaa sertifikaattien myöntämiseen ja asennukseen (yleensä 5–15 minuuttia)

### Domeenia ei lisätty
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi
- Varmista, että domeeni ei ole jo lisätty ServerPilotiin
- Varmista, että ServerPilot-tilaasi tukee lisäämiäsi domeenien määrää

### Domeen poisto

* Tällä hetkellä ServerPilot API:lla ei ole tapa poistaa yksittäisiä domeeneja.
* Kun domeenin kartta poistetaan Ultimate Multisite -järjestelmässä, integraatio päivittää ServerPilotin domeenilistan pois poistetun domeenin kanssa.
