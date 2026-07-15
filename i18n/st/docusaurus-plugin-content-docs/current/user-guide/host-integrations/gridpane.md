---
title: Ho Hlahlobo le Pane ea Grid
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration na GridPane

## Le Ntlha (Overview) {#overview}
GridPane ke ntlha, ke e panel ya control panel ya WordPress e ntsha e tlhagiso ya bohle ba WordPress. E ntsha e ka fana ka ho hlahloba ha domain syncing le management ya SSL certificate ho tshepa-tshepa tsotlhe ho a Ultimate Multisite le GridPane.

## Boitshwaro (Features) {#features}
- Domain syncing e ntsha
- Management ya SSL certificate
- Configuration e ntsha ya constant SUNRISE

## Boitshwaro (Requirements) {#requirements}
Boitshwaro tse di fetang di hlophiswe mo file ya `wp-config.php` ya hau:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Boitshwaro (Setup Instructions) {#setup-instructions}

### 1. Get Your GridPane API Credentials {#1-get-your-gridpane-api-credentials}

1. Tsamaela mo dashboard ya GridPane ya hau
2. Tsamaela ka "Settings" > "API"
3. Fetola API key ha o na le eona
4. Kopya API key ya hau

### 2. Get Your Server and Site IDs {#2-get-your-server-and-site-ids}

1. Mo dashboard ya GridPane ya hau, tsamaela ka "Servers"
2. Select server se se le WordPress multisite ya hau e ntsha
3. Tsamaela ID ya Server (e ntsha mo URL ya goba le mo page ya details ya server)
4. Tsamaela ka "Sites" le select site ya WordPress ya hau
5. Tsamaela ID ya Site (e ntsha mo URL ya goba le mo page ya details ya site)

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

Tsamaela boitshwaro tse di fetang mo file ya `wp-config.php` ya hau:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. Mo admin ya WordPress ya hau, tsamaela ka Ultimate Multisite > Settings
2. Tsamaela ka tab ya "Domain Mapping"
3. Tsamaela mo "Host Integrations"
4. Enable GridPane integration
5. Click "Save Changes" (Kopanya "Save Changes")

## E Ntsha E Ntsha (How It Works) {#how-it-works}

Pula domain e ntsha mo Ultimate Multisite:

1. Ho fana fa tšhono (integration) e fana ho fana ka sebo ea domain ea hau ka API ea GridPane
2. GridPane e fana ka ho ba leka (provisioning) tsa SSL certificate goanyane
3. Ha domain mapping a fetoa, ho fana ka ho laola domain ea hau ho ts'o tsa GridPane

Ho fana ka ho laola constant ea SUNRISE sa hau sa wp-config.php ka ho ba leka (automatically), seo e hlophisoang ho ba leka (required) ho feta hore mapping ea domain e ba leka ho ba leka ka bonnuma.

## Ho Ba Le Ka Constant ea SUNRISE {#sunrise-constant-management}

Moneho e kholo ea GridPane integration ke e fana ka ho fetola constant ea SUNRISE sa wp-config.php ka ho ba leka (reverts) go lula ho feta li-conflict le setso se se fana ka mapping ea domain ea hae. Sena se fana ka ho ba leka (ensures) hore setso se se fana se ka ba leka ka bonnuma ho ba leka ka bonnuma.

## Ho Ba Le Ka Ho Hlalosa (Troubleshooting) {#troubleshooting}

### Ho Ba Le Ka Ho Koneha le API (API Connection Issues) {#api-connection-issues}
- Re ke ka bona hore key ea hau ea API e ntle
- Re ke ka bona hore server ea hau le site IDs e ntle
- Re ke ka bona hore setso sa GridPane se fana le ts'o tsa ho ba leka (permissions)

### Ho Ba Le Ka Ho Hlalosa SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}
- GridPane e ka na le tsela e kholo ho laola SSL certificates
- Re ke ka bona hore domains ea hau e ntse a fana ka IP address ea server ea hau
- Re ke ka bona setso sa GridPane sa SSL sa site ea hau

### Domain E Ntse A Ba Le (Domain Not Added) {#domain-not-added}
- Re ke ka bona logs ea Ultimate Multisite ho ba leka (error messages)
- Re ke ka bona hore domain e ntse a ba leka ho ba leka ts'o tsa GridPane
- Re ke ka bona hore records ea DNS ea hau e fana ka bonnuma
