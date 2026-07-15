---
title: Hostinger (hPanel) -integraatio
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integrointi

## Yleiskatsaus {#overview}

Hostinger on suosittu verkkopalveluntarjoaja, jolla on moderni hallintapaneeli nimeltään hPanel. Ultimate Multisite Hostinger -integraatio mahdollistaa automaattisen domeenisi synkronoinnin Ultimate Multisiten ja Hostingerin hPanel välillä, jonka avulla voit hallita domeenin mappauksia ja alavalikoita suoraan WordPress-adminisi kautta.

## Ominaisuudet {#features}

- Automatiivinen lisädomeenin luominen hPanelissa
- Automatiivinen alavalikon luominen hPanelissa (alavalikkomut multisite -asennuksille)
- Domeenin poisto, kun mappaukset poistetaan
- Sujuva integraatio hPanelin domeeninhallintaportaaliin

## Vaatimukset {#requirements}

Hostinger-integraation käyttämiseksi sinun tarvitsee:

1. Hostinger-tilin, jolla on pääsy hPaneliin
2. API-tokenin Hostingerilta
3. Seuraavat vakioiden määritteleminen tiedostoosi `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Valinnaisuutena voit myös määritellä:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Oletus-API-päätepiste
```

## Asetusohjeet {#setup-instructions}

### 1. Luo Hostinger API-tokenisi {#1-generate-your-hostinger-api-token}

1. Kirjaudu sisään Hostinger-tilillesi ja pääset hPanelin kautta
2. Siirry kohtaan **Account Settings** → **API Tokens**
3. Napsauta **Create New Token** (Luo uusi token)
4. Anna tokenille kuvailevan nimen (esim. "Ultimate Multisite")
5. Valitse tarvittavat käyttöoikeudet:
   - Domain management (Domeenin hallinta)
   - Subdomain management (Alavalikon hallinta)
6. Kopioi luotu token ja tallenna se turvallisesti

### 2. Etsi Tilin IDsi {#2-find-your-account-id}

1. hPanelissa siirry kohtaan **Account Settings** → **Account Information**
2. Tili-IDsi näkyy tällä sivulla
3. Kopioi ja tallenna tämä ID seuraavaa vaihetta varten

### 3. Lisää vakioita wp-config.php:ään {#3-add-constants-to-wp-configphp}

Lisää seuraavat vakioiden määritelmät tiedostoon `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Jos Hostinger-tilisi käyttää eri API-päätepistettä, voit muokata sitä:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivoi integraatio {#4-enable-the-integration}

1. WordPressin hallintapaneelissa (admin) siirry kohtaan **Ultimate Multisite > Settings**
2. Siirry välilehdelle **Domain Mapping**
3. Vieritä alas kohtaan **Host Integrations**
4. Aktivoi **Hostinger (hPanel)** -integraatio
5. Napsauta **Save Changes**

## Miten se toimii {#how-it-works}

### Lisäalueet (Addon Domains) {#addon-domains}

Kun mappaat aluetta Ultimate Multisite-ohjelmassa:

1. Integraatio lähettää pyynnön Hostingerin API:lle lisätäkseen alueen lisäalueeksi
2. Alue on konfiguroitu osoittamaan juurihakemistoosi (root directory)
3. Kun aluetta ei enää ole mappattu, integraatio poistaa sen automaattisesti hPanelista

### Alavaluet (Subdomains) {#subdomains}

Alavalue-multisiteasennuksissa uuden sivuston luomisen yhteydessä:

1. Integraatio poimii alavalueen osan koko domeenista
2. Se lähettää pyynnön Hostingerin API:lle lisätäkseen alavalueen
3. Alavalue on konfiguroitu osoittamaan juurihakemistoosi (root directory)

## Tärkeät huomiot {#important-notes}

- Integraatio käyttää Hostingerin REST API:a yhteydenottoon tilillesi
- Sinulla on oltava tarvittavat oikeudet domeenin ja alavalueiden hallintaan API-tokenisi
- Integraatio ei hoita DNS-konfiguraatiota; alueet on jo osoitettava Hostinger-tilillesi
- API-pyynnöt tehdään turvallisesti HTTPS:n kautta
- Pidä API-tokenisi turvassa ja älä koskaan jaa sitä julkisesti

## Ongelmanratkaisu {#troubleshooting}

### API-yhteydenottoputket {#api-connection-issues}

Varmista, että API-tokenisi on oikein ja se ei ole vanhentunut
Tarkista, että tili-IDsi on oikein
Varmista, että API-tokenillasi on tarvittavat oikeudet verkkotunnusten hallintaan
Varmista, että Hostinger-tili on aktiivinen ja hyvässä kunnossa

### Verkkotunnusta ei lisätty {#domain-not-added}

Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi
Varmista, että verkkotunnus ei ole jo lisätty Hostinger-tilillesi
Varmista, että Hostinger-tilillä ei ole saavuttanut rajoitustaan lisäverkkotunnuksille
Varmista, että verkkotunnus on osoitettu oikein Hostingerin nameservereihin

### SSL-sertifikaatin ongelmat {#ssl-certificate-issues}

Integraatio ei käsittele SSL-sertifikaattien myöntämistä
Hostinger tarjoaa tyypillisesti ilmaisia SSL-sertifikaatteja AutoSSL:n avulla
Voit hallita SSL-sertifikaatteja suoraan hPanelissa **SSL/TLS** -osiossa
Vaihtoehtoisesti käytä Let's Encryptin AutoSSL-ominaisuutta Hostingerin kanssa

## Tuki {#support}

Lisätukeen Hostinger-integraatioon voit katsoa seuraaviin:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
