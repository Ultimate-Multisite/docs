---
title: Hostinger (hPanel) Integrazioa
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integrazioa

## Deskuntzua

Hostinger da web hosting provider bat da, eta hPanel irizkitzeko modern control panel bat du. Ultimate Multisite Hostinger integrazioak Ultimate Multisite eta Hostinger-ren hPanel-aren arteko domainio horren automatikoki sinkronizatzeko gaitasun handia ematen du, zehatz egiten duen domain mapping-ek eta subdomain-ek direktori WordPress admin-etik direla eskaintzen du.

## Aeraguntzak

- hPanel-an addon domain-ek automatikoki sortzea
- hPanel-an subdomain-ek automatikoki sortzea (subdomain multisite instalazioak dira)
- Mapping-ek borratzen dituztenean domainioa borratzea
- hPanel-ren domain management API-arekin erlazionatuta integrazioa

## Aurrekontzak

Hostinger integrazioa erabiltzeko, da beharra:

1. Hostinger kontua bat hPanel-eko espezialitate eta zehatzera
2. Hostinger-ren API token bat
3. Irekizunaren `wp-config.php` filean definidatutako konstante hauek:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ondorekin, hauek definizatu ditzakezu:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API-aren default endpointa
```

## Aurrekontu Erdatzeko Instrucciones

### 1. Hostinger API Token-ek Sortuatu

1. Hostinger kontuan erabiliz eta hPanel-era erabili
2. **Account Settings** → **API Tokens** funtziara aurkitu
3. **Create New Token** (Token berria sortu) klik egin
4. Token-ei emate izanez deskribapena duzu (adibidez, "Ultimate Multisite")
5. Necesitarteko hasierak ematatu:
   - Domain management (Domainioa eskaintzea)
   - Subdomain management (Subdomain-ek eskaintzea)
6. Sortutako tokena kopiatu eta seguruan saldatu

### 2. Aurrekontu ID-ak Aurkitu

1. hPanel-an, **Account Settings** → **Account Information** funtziara joandu
2. Aurrekontu ID-ak hori lapenaren da ezarri du
3. Horra kopiatu eta lekuan saldatu, lehen urtsuaren bitartean

### 3. wp-config.php-ean Konstante-ek Zahartu

Hauko konstante hauek irekizunaren `wp-config.php` filean gehitu:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Hoztingar-ren kontu erabiltzen duen API endpoint batekin erabiltzen ari zete, hori aldatu dezakezu:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integrazioa aktibatu

1. WordPress administrazioan, **Ultimate Multisite > Settings** (Konfigurazioak) funtziara jarraitu.
2. **Domain Mapping** (Domeinak mapatu) tabera jarraitu.
3. **Host Integrations** (Hoztingar integrazioak) dauden partean irekitu.
4. **Hostinger (hPanel)** integrazioa aktibatu duzu.
5. **Save Changes** (Aldakileak saldatu) klik egin.

## Ondo jakinarazteko erantzuna

### Addon Domains (Addon Domeinak)

Ultimate Multisite-an domain bat mapatzen duenean:

1. Integrazioa Hostinger-ren API-rari eska bat bidaltzen du domaina addon domain gisa hobetzeko
2. Domainak zure root direktorioan jarraitu duen bitartean konfiguratzen da
3. Domain mapping bat abazten denean, integrazioak hPanel-etik addon domaina otomatikoki abazten du

### Subdomains (Subdomainak)

Subdomain multisite instalazioetan, leku berri bat sortzen duenean:

1. Integrazioak domainaren guztiaren subdomain partea erakitzen du
2. Hostinger-ren API-rari eska bat bidaltzen du subdomaina hobetzeko
3. Subdomainak zure root direktorioan jarraitu duen bitartean konfiguratzen da

## Nota importanteak

- Integrazioak zure kontuarekin harreman dituzten bitartean Hostinger-ren REST API-a erabiltzen du
- Zure API tokenak domain eta subdomain management (eskaintzeko) beharrezko autorizazioak ditu
- Integrazioak DNS konfiguratzea ez du; domainak horrela jarraitu beharko dute zure Hostinger kontuaren bitartean
- API eska hauek HTTPS-ean seguragarri bidaltzen dira
- Zure API tokena seguru jarri eta ez badago publikoan ematu

## Problema irudineteko erantzunak

### API Connection Issues (API Harreman Problemaak)

- Ezin er API tokena zuzena da eta ez hasi duela
- Ezin kontrolatu da Account ID-ak zuzena diren
- Segura egin behar da API token-ek domain management-er bitarteko beharrezko permietua ditu
- Segura egin behar da Hostinger account-ek aktibo diren eta ondo dagoen

### Domain ez hasiturik

- Ultimate Multisite logs-ek erantzun edo error testu bat izan daitezkeen irudi duzu
- Ezin kontrolatu da domainak Hostinger account-ekin ez hasiturik
- Segura egin behar da Hostinger account-ek addon domains-er limitara ez hasi duen
- Ezuratu da domainak Hostinger nameserver-ek zuzen daiteke

### SSL Zertifikat eragiketa problemaak

- Integrazioa SSL sertifikatuak emateko jarduera ez du
- Hostinger normalmenti AutoSSL-ek garbiaren SSL sertifikatuak ematen du
- SSL sertifikatuak direktu hPanelan **SSL/TLS**-aren ondorioz eskaintzen daiteke
- Alternatiboa, Hostinger's AutoSSL funtzioa erabiliz Let's Encrypt-ak erabiliz

## Udalak

Hostinger integrazioarekin laguntza gehiago behar duzu, honetan referatu egin dezakezu:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
