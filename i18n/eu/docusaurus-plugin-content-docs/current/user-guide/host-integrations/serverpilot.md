---
title: ServerPilot Integrazioa
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integrazioa

## Deskuntzura {#overview}
ServerPilot da cloud serwisu bat da WordPress eta beste PHP websteileak hostatzeko DigitalOcean, Amazon, Google edo beste server provedore batzuken serveretan. Horrek Ultimate Multisite eta ServerPilot-aren arteko domainio automatikoinarekin sinxetzea eta SSL sertifikatua administrazioa gogoratzen du.

## Aeraguntzak {#features}
- Domainio automatiko sinxetzea
- Let's Encryptarekin SSL sertifikatua administrazioa
- SSL automatikoinaren berriztapena

## Aurerekinak {#requirements}
Hau daitezkeen konstante hauek `wp-config.php` filean definitu behar dira:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Aurreratutako Instrucciones {#setup-instructions}

### 1. Aapeli ServerPilot API identifikazioak {#1-get-your-serverpilot-api-credentials}

1. ServerPilot dashboard-era logiatu duzu
2. "Account" > "API"-ra jarraitu
3. Baizik ez dutenean API key berria sortu duzu
4. Client ID eta API Key-n kopiatu duzu

### 2. Aapeli App ID identifikazioa {#2-get-your-app-id}

1. ServerPilot dashboard-era, "Apps"-era jarraitu
2. WordPress multisiteak hostatutako app-a irudiu
3. App ID-k URL-an erabil da: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Konstante hauek wp-config.php-le gehitu {#3-add-constants-to-wp-configphp}

Hau daitezkeen konstante hauek `wp-config.php` filean gehituu:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Integrazioa aktiboa egin {#4-enable-the-integration}

1. WordPress admin-an, Ultimate Multisite > Settings-era jarraitu
2. "Domain Mapping" tab-era jarraitu
3. "Host Integrations"-era jarraitu
4. ServerPilot integrazioa aktiboa egin
5. "Save Changes"-era klik egin

## Ondo jakinarazten {#how-it-works}

### Domainio sinxetzea {#domain-syncing}

Ultimate Multisitean domainio bat mapatuenean:

1. Integrazioa dauremen listaren aktualeko listaren ServerPilot-etik gabe hartzen du.
2. Lehen daurera listara (eskerre iragatik www bertsio ere, eskerre) leizten du.
3. Aktualizatutako listaren API-n ServerPilot-ekartzean bidali du.
4. ServerPilot-ekartzea aaplikazioa dauremen listaren aktualizatu du.

### SSL Barkabetzeko Eskaintza (SSL Certificate Management) {#ssl-certificate-management}

Daureak sinkronatuta jakin ondoren:

1. Integrazioa aaplikazioa daurera AutoSSL aktiboa ematen du.
2. ServerPilot-ekartzea Let's Encrypt erabiliz SSL barkabetzea eta instalazioa jartzen du.
3. ServerPilot-ekartzea SSL barkabetzearen auto-renu (renewal) ere jartzen du.

## SSL Barkabetzeko Bertsioa Kontrollatzeko (SSL Certificate Verification) {#ssl-certificate-verification}

Integrazioa ServerPilot-ekartzeareng SSL barkabetze proposamenduen jarduera handiagoa konfiguratuta dago, gaur egun ServerPilot-ekartzea SSL barkabetzeak emate eta instalatzeko aukera duen ahazko itzune izan daiteke. Default-ean 5 eskaera proposatzen du, baina hau filtreak erabiliz aukeratu daiteke.

## Problema Erregitzen (Troubleshooting) {#troubleshooting}

### API Konektibide Problemaak {#api-connection-issues}
- Client ID eta API Key-ak jartzen du.
- App ID-k jartzen du.
- ServerPilot-ekartzearen kontua beharrezko beren hasierak ditu.

### SSL Barkabetze Problemaak {#ssl-certificate-issues}
- SSL barkabetzeak emate baino lehen, daureak serverra apuntatzen duen DNS recordak jakin du behar da.
- SSL barkabetzeak ematen ez dutenean, daureak serverren IP adresa zehatz egiten duen jakin du.
- ServerPilot-ekartzea SSL barkabetzeak emate eta instalatzeko ahazko itzune izan daiteke (normalmenti 5-15 min).

### Daura Ez Haspertu Joera (Domain Not Added) {#domain-not-added}
- Ultimate Multisite log-eak erantzun edo error mezu bat jakin du.
- Daura ez dagoenean ServerPilot-ekartzean leizten du.
- ServerPilot-ekartzearen planak daureak leitzten duen daurera suportatzen du eta joera hasterakoa jartzen du.

### Domenaren eliminazioa {#domain-removal}
- Aktualenean, ServerPilot API-ak espezifiko domen bat hartzeko modu ez du.
- Ultimate Multisite-an domen maping bat abikatu (remove) den bitartean, integrazioak ServerPilot-ko domen listaren update egiten du, abikatu den domenari aldatzen du.
