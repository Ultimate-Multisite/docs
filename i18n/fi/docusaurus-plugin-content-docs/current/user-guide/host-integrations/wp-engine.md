---
title: WP Engine -integraatio
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integrointi {#wp-engine-integration}

## Yleiskatsaus {#overview}
WP Engine on premium hallittu WordPress -palvelu tarjoaa optimoidun suorituskyvyn, turvallisuuden ja skaalautuvuuden WordPress-sivustoille. Tämä integrointi mahdollistaa automaattisen verkkotunnusten synkronoinnin Ultimate Multisite -järjestelmän ja WP Engine -palvelimen välillä.

## Ominaisuudet {#features}
- Automaattinen verkkotunnusten synkronointi
- Alavalikkojen (subdomain) tuki multisite-asennuksille
- Saumaton integrointi WP Engine -järjestelmien kanssa

## Vaatimukset {#requirements}
Integrointi havaitsee automaattisesti, jos hoitat sivustoja WP Engineillä, ja käyttää sisäänrakennettua WP Engine API:a. Lisäkonfiguraatiota ei tarvita, jos WP Engine plugin on aktiivinen ja oikein konfiguroitu.

Jos sinun täytyy konfiguroida integrointi manuaalisesti, voit määrittää jonkin näistä vakioista (`constant`) tiedostossa `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Suositeltu tapa
// TAI
define('WPE_API', 'your_api_key'); // Vaihtoehtoinen tapa
```

## Asetusohjeet {#setup-instructions}

### 1. Tarkista WP Engine -plugin {#1-verify-wp-engine-plugin}
Jos hoitat sivustoja WP Engineillä, WP Engine -plugin on jo asennettava ja aktivoitava. Varmista seuraavat asiat:

1. WP Engine plugin on aktiivinen
2. Tiedosto `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` on olemassa

### 2. Aktivoi integrointi {#2-enable-the-integration}
1. WordPress -adminissa siirry Ultimate Multisite > Settings (Asetukset)
2. Siirry "Domain Mapping" (Verkkotunnusten kartoitus) -välilehdelle
3. Vieritä alas kohtaan "Host Integrations" (Isännöintintegraatiot)
4. Aktivoi WP Engine -integraation
5. Napsauta "Save Changes" (Tallenna muutokset)

## Miten se toimii {#how-it-works}

### Verkkotunnusten synkronointi {#domain-syncing}
Kun verkkotunnus kartoitetaan Ultimate Multisite -järjestelmässä:

1. Integrointi käyttää WP Engine API:a lisätäkseen verkkotunnuksen WP Engine -asennukseesi
2. WP Engine hoitaa verkkotunnuksen konfiguroinnin ja SSL-sertifikaatin myöntämisen
3. Kun verkkotunnuskartoitusta poistetaan, integrointi poistaa verkkotunnuksen WP Engineistä

### Alavalikkojen tuki {#subdomain-support}

Alalohakuiset alalohakuiset asennuksille alalohakuiset alalohakuiset

1. Integrointi lisää jokaisen aladomeenin WP Engine -järjestelmään uuden sivuston luomisen yhteydessä.
2. WP Engine hoitaa aladomeenien konfiguroinnin.
3. Kun sivusto poistetaan, integrointi poistaa aladomeenin WP Engine:stä.

## Tärkeät huomiot {#important-notes}

### Wildcard-domainit {#wildcard-domains}

Alalohakuisissa alalohakuisissa asennuksissa suositellaan ottamaan yhteyttä WP Engine -tukeen pyytääkseen wildcard-domainin konfiguraatiota. Tämä mahdollistaa kaikkien aladomeenien toimimisen automaattisesti ilman, että tarvitsee lisätä niitä erikseen.

### SSL-sertifikaatit {#ssl-certificates}

WP Engine hoitaa automaattisesti SSL-sertifikaattien myöntämisen ja uusimisen kaikille tällä integroinnilla lisättynille domaineille. Lisäkonfiguraatiota ei tarvita.

## Ongelmanratkaisu {#troubleshooting}

### API-yhteyden ongelmat {#api-connection-issues}
- Tarkista, että WP Engine -lisäosa on aktiivinen ja oikein konfiguroitu.
- Jos olet määritellyt API-avaimen manuaalisesti, tarkista, että se on oikein.
- Ota yhteyttä WP Engine -tukeen, jos sinulla on ongelmia API:n kanssa.

### Domenia ei lisätty {#domain-not-added}
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi.
- Varmista, että domeeni ei ole jo lisätty WP Engine:lle.
- Varmista, että WP Engine -tilaasi tukee lisäämiesi domainien määrää.

### Aladomeen ongelmat {#subdomain-issues}
- Jos aladomeen eivät toimi, ota yhteyttä WP Engine -tukeen pyytääkseen wildcard-domainin konfiguraatiota.
- Varmista, että DNS-asetuksesi on oikein konfiguroitu päädomeenia ja aladomeeneja varten.
