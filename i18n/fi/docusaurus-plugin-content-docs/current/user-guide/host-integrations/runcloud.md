---
title: RunCloud-integraatio
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud -Integraatio

## Yleiskatsaus
RunCloud on pilvipohjainen palvelinhallintalaitteisto, joka mahdollistaa verkkosovellusten helpon käyttöönoton ja hallinnan omilla pilvipalvelimillasi. Tämä integraatio mahdollistaa automaattisen domeen synkronoinnin ja SSL-sertifikaattien hallinnan Ultimate Multisiten ja RunCloud välillä.

## Ominaisuudet
- Automaattinen domeen synkronointi
- SSL-sertifikaattien hallinta
- Domeenin poisto, kun mappaukset poistetaan

## Vaatimukset
Seuraavat vakioiden on määritettävä tiedostoosi `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Asetusohjeet

### 1. Hae RunCloud API-tunnisteesi

1. Kirjaudu sisään RunCloud-hallintapaneeliin.
2. Mene "User Profile" (klikkaa profiilikuvaa oikeassa yläkulmassa).
3. Valitse valikosta "API".
4. Klikkaa "Generate API Keyä", jos sinulla ei ole jo sitä.
5. Kopioi API-tunniste ja API-salaisuus.

### 2. Hae palvelin- ja sovellus-IDsi

1. RunCloud-hallintapaneelissa mene "Servers" (Palvelimet) -osioon.
2. Valitse palvelin, johon WordPress multisite on asennettu.
3. Palvelin-ID näkyy URL-osoitteessa: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Mene "Web Applications" (Verkkosovellukset) -osioon ja valitse WordPress-sovellus.
5. Sovellus-ID näkyy URL-osoitteessa: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Lisää vakioita wp-config.php:ään

Lisää seuraavat vakioiden määritelmät tiedostoosi `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktivoi integraatio

1. WordPressin hallivasi (admin) siirry Ultimate Multisite > Settings -Asetukset
2. Siirry "Domain Mapping" -välilehdelle
3. Vieritä alas kohtaan "Host Integrations"
4. Aktivoi RunCloud-integraatio
5. Napsauta "Save Changes" (Tallenna muutokset)

## Miten se toimii

Kun domeeni mappataan Ultimate Multisiteissa:

1. Integraatio lähettää pyynnön RunCloudin API:lle lisätäkseen domeenin sovellukseesi
2. Jos domeeni lisätään onnistuneesti, integraatio päivittää myös SSL-sertifikaatit uudelleen
3. Kun domeenimappaus poistetaan, integraatio poistaa domeenin RunCloudista

Subdomäärien asennusten kohdalla integraatio hoitaa automaattisesti subdomeinien luomisen RunCloudissa, kun uusia sivustoja lisätään verkkoosi.

## Ongelmanratkaisu

### API-yhteyden ongelmat
- Tarkista, ovatko API-tiedot oikein
- Varmista, että palvelimen ja sovelluksen ID:t ovat oikein
- Varmista, että RunCloud-tililläsi on tarvittavat oikeudet

### SSL-sertifikaatin ongelmat
- RunCloud saattaa kestää jonkin aikaa SSL-sertifikaattien myöntämiseen
- Tarkista, että domeenisi osoittavat oikein palvelimesi IP-osoitteeseen
- Tarkista RunCloudin SSL-asetukset sovellukselle

### Domeenia ei lisätty
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi
- Varmista, että domeeni ei ole jo lisätty RunCloudiin
- Varmista, että RunCloud-tilaasi tukee useita domeeneja
