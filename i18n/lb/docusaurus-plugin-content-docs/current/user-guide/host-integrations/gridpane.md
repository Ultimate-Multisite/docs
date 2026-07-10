---
title: GridPane Integratioun
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration {#gridpane-integration}

## Überblick {#overview}
GridPane isch en spezialisierti WordPress Hosting Control Panel, wo für ernsti WordPress Profis gmacht isch. D'Integration ermöglicht automatische Domain-Sync und SSL Certificate Management zwüsche Ultimate Multisite und GridPane.

## Features {#features}
- Automatische Domain-Sync
- SSL Certificate Management
- Automatische Konfiguration vo de SUNRISE constant

## Anforderungen {#requirements}
D'folgende constants müend in din `wp-config.php` Datei definiert sii:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Setup-Aawiesige {#setup-instructions}

### 1. Hol dir dini GridPane API Credentials {#1-get-your-gridpane-api-credentials}

1. Log dich i dim GridPane Dashboard ii
2. Gang zu "Settings" > "API"
3. Generier en API key, falls du no kei hesch
4. Kopier din API key

### 2. Hol dir dini Server- und Site-IDs {#2-get-your-server-and-site-ids}

1. Im GridPane Dashboard gang zu "Servers"
2. Wähl de Server us, wo dini WordPress Multisite gehostet isch
3. Notier d'Server ID (sichtbar in de URL oder uf de Server-Details-Siite)
4. Gang zu "Sites" und wähl dini WordPress Site us
5. Notier d'Site ID (sichtbar in de URL oder uf de Site-Details-Siite)

### 3. Füeg Constants zu wp-config.php hinzu {#3-add-constants-to-wp-configphp}

Füeg die folgende constants i dini `wp-config.php` Datei ii:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktiviere d'Integration {#4-enable-the-integration}

1. Im WordPress Admin gang zu Ultimate Multisite > Settings
2. Navigier zur Register "Domain Mapping"
3. Scroll nach unten bis zu "Host Integrations"
4. Aktiviere d'GridPane Integration
5. Klick uf "Save Changes"

## Wie funktioniert das? {#how-it-works}

Wenn en Domain in Ultimate Multisite abgebunde wird:

1. D'Integration sendt en afoerfrëdig an GridPane API, um d'domaine zu Ihrer Site hinzuezfüegen.
2. GridPane handlet automatisch d'Provisionierung vun de SSL-Zertifikats.
3. Wann e Domain Mapping entfernt gëtt, entfernt d'Integration d'Domain usser dem GridPane.

D'Integration handlet au automatisch mit der SUNRISE constant in Ihrer wp-config.php Datei, déi für korrektes Domain Mapping néideglech ass.

## SUNRISE Constant Management {#sunrise-constant-management}

E einzigartige Merkmal vun der GridPane Integration ass, datt si d'SUNRISE constant in wp-config.php automatisch zruggsetzt, um Konfliktar mat dem eigene Domain Mapping System vun GridPane z'verhinderen. Dat stellt sicher, datt beid System ohni Problem mitenand schaffet.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Überprüchen, ob Ihr API key korrekt ass
- Prüfen, ob Ihr Server- und Site IDs korrekt sinn
- Sorge dafür, dass Ihr GridPane Account d'néidegliche Berechtigungen hunn

### SSL Certificate Issues {#ssl-certificate-issues}
- GridPane kannet Zit brauchen, um SSL-Zertifikats uszstuwwellen
- Überprüfen, ob Dir Domainen korrekt uf d'IP-Adress vun Ihrem Server hiwiisen
- Prüfen Sie d'GridPane SSL-Einstellungen für Ihre Site

### Domain Not Added {#domain-not-added}
- Überprüfen Sie d'Ultimate Multisite Logs uf irgendwelch Fehlermeldungen
- Bestätigen Sie, dass d'Domain net scho zu GridPane hinzugefügt ass
- Sorge dafür, dass d'DNS-Records vun Ihrer Domain korrekt konfiguriert sinn
