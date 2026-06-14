---
title: GridPane-integraatio
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integrointi

## Yleiskatsaus
GridPane on erikoistun WordPress-isännöintäohjelmisto, joka on rakennettu vakaville WordPress-ammattilaisille. Tämä integrointi mahdollistaa automaattisen verkkotunnusten synkronoinnin ja SSL-sertifikaattien hallinnan Ultimate Multisiten ja GridPane välillä.

## Ominaisuudet
- Automaattinen verkkotunnusten synkronointi
- SSL-sertifikaattien hallinta
- SUNRISE-vakiot automaattinen konfigurointi

## Vaatimukset
Seuraavat vakiot on määritettävä tiedostoosi `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Asetusohjeet

### 1. Hae GridPane-API-tunnisteesi

1. Kirjaudu sisään GridPane-hallintapaneeliin
2. Mene kohtaan "Settings" > "API" (Asetukset > API)
3. Luo API-avain, jos sinulla ei ole vielä yhtä
4. Kopioi API-avainesi

### 2. Hae palvelimen ja sivuston ID:t

1. GridPane-hallintapaneelissa mene kohtaan "Servers" (Palvelimet)
2. Valitse palvelin, johon WordPress multisite on sijoitettu
3. Huomaa Server ID:n (näkyy URL-osoitteessa tai palvelimen tiedoissa)
4. Mene kohtaan "Sites" (Sivustot) ja valitse WordPress-sivustosi
5. Huomaa Site ID:n (näkyy URL-osoitteessa tai sivuston tiedoissa)

### 3. Lisää vakiot wp-config.php:ään

Lisää seuraavat vakiot tiedostoosi `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktivoi integrointi

1. WordPress-hallintapaneelissa mene Ultimate Multisite > Settings (Asetukset)
2. Siirry välilehdelle "Domain Mapping" (Verkkotunnusten kartoitus)
3. Vieritä alas kohtaan "Host Integrations" (Isännöintäintegraatiot)
4. Aktivoi GridPane-integraatio
5. Napsauta "Save Changes" (Tallenna muutokset)

## Miten se toimii

Kun verkkotunnus kartoitetaan Ultimate Multisite -järjestelmässä:

1. Integraatio lähettää pyynnön GridPane-API:lle lisätäkseen verkkotunnuksen sivustollesi.
2. GridPane hoitaa automaattisesti SSL-sertifikaatin tarjoamisen.
3. Kun verkkotunnuksen kartoitus poistetaan, integraatio poistaa verkkotunnuksen GridPanesta.

Integraatio hoitaa myös automaattisesti SUNRISE-vakion `wp-config.php`-tiedostossa, joka on välttämätön verkkotunnusten kartoitukseen oikein toimimiseksi.

## SUNRISE-vakion hallinta

GridPane-integraation ainutlaatuinen ominaisuus on se, että se palauttaa automaattisesti `wp-config.php`-tiedoston SUNRISE-vakion sen estämiseksi konflikteja GridPane-omalla verkkotunnusten kartoitussysteemillä. Tämä varmistaa, että molemmat järjestelmät voivat toimia yhdessä ilman ongelmia.

## Ongelmanratkaisu

### API-yhteyden ongelmat
- Tarkista, onko API-avaimesi oikein
- Tarkista, ovatko palvelimen ja sivuston ID:t oikein
- Varmista, että GridPane-tililläsi on tarvittavat oikeudet

### SSL-sertifikaatin ongelmat
- GridPane saattaa kestää jonkin aikaa SSL-sertifikaattien myöntämiseen
- Tarkista, että verkkotunnuksesi osoittavat oikein palvelimesi IP-osoitteeseen
- Tarkista sivustosi asetukset GridPane-SSL:ssä

### Verkkotunnuksen ei lisätty
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi
- Varmista, että verkkotunnus ei ole jo lisätty GridPanean
- Varmista, että verkkotunnuksesi DNS-rekisterit on konfiguroitu oikein
