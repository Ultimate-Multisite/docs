---
title: Fampidirana GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Fandahana ao GridPane

## Famarahaba (Overview)
Ny GridPane dia fitaovana manokana ho an'ny fanaraha-maso ny WordPress izay natao ho an'ireo matihanina amin'ny WordPress. Ity fandrindrana ity dia ahafahana mifandray mivantana ny domain sy ny fitantanana ny SSL certificate eo amin'i Ultimate Multisite sy GridPane.

## Fahaizana (Features)
- Fametrahana domain ho azy (Automatic domain syncing)
- Fitantanam-bola SSL certificate (SSL certificate management)
- Fanamboarana automatique ny constant SUNRISE

## Fepetra Takiana (Requirements)
Ireo constant ireo dia tsy maintsy voatanisa ao amin'ny rakitra `wp-config.php` anareo:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Toromarika Fikarakarana (Setup Instructions)

### 1. Fahazoana ny API Credentials anareo avy amin'ny GridPane

1. Midira ao amin'ny dashboard anareo ao amin'ny GridPane
2. Mandehana any amin'ny "Settings" > "API"
3. Apetraka key API raha mbola tsy manana azy ianao
4. Arotsaho ny key API anareo

### 2. Fahazoana ny Server sy Site IDs anareo

1. Ao amin'ny dashboard anareo ao amin'ny GridPane, mandehana any amin'ny "Servers"
2. Safidio ilay server izay misy ny WordPress multisite anareo
3. Soraty ny Server ID (hita ao amin'ny URL na eo amin'ny pejy antsipiriany momba ny server)
4. Mandehana any amin'ny "Sites" ary safidio ny site WordPress anareo
5. Soraty ny Site ID (hita ao amin'ny URL na eo amin'ny pejy antsipiriany momba ny site)

### 3. Fampidirana ireo Constant ao amin'ny wp-config.php

Ampidiro ireto constant ireto ao anatin'ny rakitra `wp-config.php` anareo:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Fanondroana ny Fandefasana (Enable the Integration)

1. Ao amin'ny admin WordPress anareo, mandehana any amin'ny Ultimate Multisite > Settings
2. Mandehana any amin'ny "Domain Mapping" tab
3. Mandehana latsaka any amin'ny "Host Integrations"
4. Ampidiro ny fandefasana GridPane (Enable the GridPane integration)
5. Tsindrio ny "Save Changes"

## Ahoana no Asa (How It Works)

Rehefa misy domain iray mifandray ao amin'ny Ultimate Multisite:

1. Ny fampifandra (integration) dia manefa fangataho ho an'ny API an'i GridPane mba hanampiana ny domain ao amin'ny tranokalao.
2. Ny GridPane dia mitantana ho azy ny fanomezana sertifika SSL.
3. Rehefa esorina ny fametrahana mapping domain, dia esorina avy ao amin'ny GridPane ny domain noho ny fampifandrahana (integration).

Ny fampifandrahana (integration) koa dia mitantana ho azy ny constant SUNRISE ao anatin'ny rakitra `wp-config.php` anao, izay ilaina mba hiatrehana tsara ny fametrahana mapping domain.

## Fitantanana ny Constant SUNRISE

Ity dia fahaiza-manao manokana amin'ny fampifandrahana (integration) ao amin'ny GridPane fa mamerina ho azy ny constant SUNRISE ao anatin'ny `wp-config.php` mba hisorohana fifanolanana amin'ny rafitry ny fametrahana domain an'i GridPane mihitsy. Izany dia miantoka fa afaka miara-miasa tsara ireo rafitra roa ireo tsy misy olana.

## Fandresena Olana (Troubleshooting)

### Olana amin'ny Fifandraisana API
- Fantaro raha marina ny API key anao.
- Jereo raha marina ny server sy ny site IDs anao.
- Antsoy fa manana zo ilaina ao amin'ny kaontinao ao amin'ny GridPane ianao.

### Olana amin'ny Sertifika SSL
- Mety mila fotoana kely ny GridPane mba hanomezana sertifika SSL.
- Fantaro raha marina ny fampitsoana (pointing) ireo domain anao mankany amin'ny IP address an'ny server anao.
- Jereo ny fepetra SSL ao amin'ny GridPane ho an'ny site anao.

### Tsy Nampiana Domain
- Jereo ny logs an'ny Ultimate Multisite raha misy hafatra fahadisoana (error messages).
- Fantaro fa tsy voapetraka manokana ny domain ao amin'ny GridPane ianao.
- Antsoy fa efa voaomana tsara ireo DNS records an'ilay domain anao.
