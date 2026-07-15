---
title: Shigarwar GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Shigar da GridPane

## Nazari {#overview}
GridPane wani tsarin tsaro ne na musamman don masu sana'ar WordPress. Wannan haɗin yana ba shi damar daidaita domain ko SSL certificate management tsakanin Ultimate Multisite da GridPane cikin sauƙi.

## Sifofi {#features}
- Daidaitawa ta domain (Automatic domain syncing)
- Gudanar da SSL certificate management
- Shigar da tsarin SUNRISE constant a zahiri

## Buƙatun {#requirements}
Wannan ƙa'idoji dole ne su bayyana a cikin fayil ɗin `wp-config.php` ɗinka:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Shawara ta Shiga Yanayi (Setup Instructions) {#setup-instructions}

### 1. Samu Bayan Aiki na GridPane API {#1-get-your-gridpane-api-credentials}

1. Shiga cikin dashboard ɗinka na GridPane
2. Ka je "Settings" > "API"
3. Ka samar da API key idan ba ka samu ba
4. Ka kura API key ɗinka

### 2. Samu ID na Server da Site ɗinka {#2-get-your-server-and-site-ids}

1. A dashboard ɗin GridPane, ka je "Servers"
2. Zaɓi server ɗin inda kake ajiye WordPress multisite ɗinka
3. Ka nuna Server ID (wanda zai bayyana a URL ko a shafin bayanan server)
4. Ka je "Sites" kuma zaɓi site ɗinka na WordPress
5. Ka nuna Site ID (wanda zai bayyana a URL ko a shafin bayanan site)

### 3. Tambaya Constants zuwa wp-config.php {#3-add-constants-to-wp-configphp}

Ka ƙara wa `wp-config.php` ɗinka wa constant ɗin da suka biyo:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Shigar Yanayi (Enable the Integration) {#4-enable-the-integration}

1. A admin panel ɗinka na WordPress, ka je Ultimate Multisite > Settings
2. Ka tafiya zuwa tab ɗin "Domain Mapping"
3. Ka tura ƙasa zuwa "Host Integrations"
4. Ka shigar da GridPane integration
5. Ka danna "Save Changes"

## Yadda Zai Aiki (How It Works) {#how-it-works}

Idan aka yi mapping ga domain a Ultimate Multisite:

1. Haɗin gani yana aiko wajen aiko ga API na GridPane don ƙara domain ɗin ku zuwa shafin ku.
2. GridPane tana gudanar da samar da sertifikat SSL (SSL certificate provisioning) ta kansa.
3. Lokacin da ake cire haɗa domain, wannan haɗin gani zai cire domain ɗin daga GridPane.

Wannan haɗin gani kuma yana gudanar da SUNRISE constant a cikin fayil ɗin ku na wp-config.php ta kansa, wanda ya kasance dole don aiki mai kyau ga haɗa domain.

## Gudanar da SUNRISE Constant {#sunrise-constant-management}

Wata hanya ta musamman ta haɗin gani na GridPane ita ce tana sake cika (reverts) SUNRISE constant a cikin wp-config.php don hana rikici da tsarin haɗa domain na GridPane kansa. Wannan yana tabbatar da cewa dukkan tsarin za su iya aiki tare ba tare da matsala ba.

## Magance Matala (Troubleshooting) {#troubleshooting}

### Matalan Haɗin API {#api-connection-issues}
- Ka tabbata cewa API key ɗinka ya dace.
- Bincika ko ID na server ɗinka da shafin ku sun dace.
- Ka tabbatar cewa asusunka na GridPane yana da iyakoki (permissions) da ake bukata.

### Matalan Sertifikat SSL {#ssl-certificate-issues}
- GridPane na iya buƙatar lokaci don samar da sertifikat SSL.
- Bincika ko domain ɗinku suna nuna sahihi ga IP address na server ɗinka.
- Ka bincika tsarin SSL na GridPane don shafin ku.

### Ba a Haɗa Domain {#domain-not-added}
- Bincika log ɗin Ultimate Multisite don wata saƙon matali (error messages).
- Ka tabbatar cewa domain ɗinku ba ya ƙara a cikin GridPane ba.
- Ka tabbatar cewa bayanan DNS na domain ɗinka sun tsara da kyau.
