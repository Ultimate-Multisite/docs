---
title: GridPane Integrazioa
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integrazioa

## Deskuntzua {#overview}
GridPane da WordPress profesionalak eta espezializatutako hosting kontrol panel bat da. Horrek Ultimate Multisite eta GridPane-ko artean domaineraren automatikoko sinkronizazioa eta SSL sertifikataren administrazioa gailatzen du.

## Aerokiak {#features}
- Domaineraren automatikoko sinkronizazioa
- SSL sertifikataren administrazioa
- SUNRISE constantaren automatikoko konfigurazioa

## Aurtegiturak {#requirements}
Hau daitezkeen konstantzak `wp-config.php` datu-testu-faian zehaztea:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Aurtegitura Instrukiak {#setup-instructions}

### 1. Hondarako GridPane API identifikazioak hartu {#1-get-your-gridpane-api-credentials}

1. Hau daiteko GridPane dashboard-era eratu
2. "Settings" > "API"-ra jarraitu
3. API key bat ez dutenean generatu (ez dutenean)
4. API key-n behartu

### 2. Server eta Site identifikazioak hartu {#2-get-your-server-and-site-ids}

1. Hau daiteko GridPane dashboard-era, "Servers"-ra jarraitu
2. WordPress multisite-a ospikatu duen servera aukeratu duzu
3. Server ID-aren notizdu (URL edo server datu-testu-datu-testu-dahoni-daurean erakusten da)
4. "Sites"-ra jarraitu eta WordPress site-a aukeratu duzu
5. Site ID-aren notizdu (URL edo site datu-testu-datu-testu-dahoni-daurean erakusten da)

### 3. Konstantzak wp-config.php-le gehitu {#3-add-constants-to-wp-configphp}

Hau daitezkeen konstantzak `wp-config.php` datu-testu-faian gehitu:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Integrazioa aktiboa egin {#4-enable-the-integration}

1. Hau daiteko WordPress admin-aren, Ultimate Multisite > Settings-ra jarraitu
2. "Domain Mapping" tabera jarraitu
3. "Host Integrations"-ra jarraitu
4. GridPane integrazioa aktiboa egin
5. "Save Changes"-ra klikatu

## Ondo jakin dauden {#how-it-works}

Ultimate Multisite-an domaineraren mapatuta duenean:

1. Integrazioa eskatzen du GridPane-ren API-ra, duen dominiak irudiari ezartzeko.
2. GridPane-ek SSL bideratzea (certificate) automatikoki jartzen du.
3. Domina irudizketa (domain mapping) abazten denean, integrazioa dominia GridPane-n irudiari aldatzen du.

Integrazioak zure wp-config.php datu-testuaren SUNRISE constanta ere automatikoki jartzen du, eta hori domina irudizketa (domain mapping) bereziko daiteko beharrezkoa da.

## SUNRISE Constantaren Eskaintzea {#sunrise-constant-management}

GridPane integrazioaren bat zehatza da, wp-config.php-n dagoen SUNRISE constanta automatikoki aldatzen du, eta horrek GridPane-ren domina irudizketa sistemaarekin ez aurrekoak (conflicts) prevenitzera dela. Horrek erabilgarri dauden artean beste sistema batzuk bereziko problema edo ez duena jakin nahi du.

## Problema Erregitzenak (Troubleshooting) {#troubleshooting}

### API Konektibide Problema hauek {#api-connection-issues}
- API key-a barne dagoela jartzen du.
- Server eta site ID-ak barne dagoela jartzen du.
- GridPane kontua da beharrezko berrietan (permissions) dutela seguruatu du.

### SSL Bideratzea Problema hauek {#ssl-certificate-issues}
- GridPane-ek SSL certificate bat emandute albizki dauka.
- Dominiak server-ren IP adeudura barne dagoela jartzen du.
- Zure site-aren GridPane SSL aukerak (settings) kontrolatu du.

### Domina Ez Irudiziketa Datu {#domain-not-added}
- Ultimate Multisite log-ak error mezu bat edo problema bat dagoela ikustu du.
- Domina aldatuta ez dagoela jartzen du.
- Zure domina DNS record-ek barne dagoela seguruatu du.
