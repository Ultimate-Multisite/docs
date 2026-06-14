---
title: Fampidirana RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Fandrenana RunCloud

## Famaritana (Overview)
RunCloud dia sehat ho fita-pitatra (cloud-based server management platform) izay ahafahanao manome sy mitantana ireo web applications amin'ny server anao manokana mora. Ity fandrindrana ity dia mamela ny fametrahana automatique ny domain sy ny fitantanana SSL certificate eo anelanelan'i Ultimate Multisite sy RunCloud.

## Fahaizana (Features)
- Fametrahana automatic ny domain
- Fitantanam-baovao SSL certificate
- Fandavana ny domain rehefa esorina ny mapping

## Fepetra Takiana (Requirements)
Ireo constants manaraka dia tokony ho fantatra ao amin'ny rakitra `wp-config.php` anao:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Toromarika Fampidirana (Setup Instructions)

### 1. Fahazoana ny API Credentials anao avy amin'ny RunCloud

1. Midira ao amin'ny dashboard an'ny RunCloud anao
2. Mandehana any amin'ny "User Profile" (tsindrio eo amin'ny sary an-tranonao eo amin'ny zoro ambony)
3. Safidio ny "API" avy amin'ny menu
4. Tsindrio ny "Generate API Key" raha mbola tsy manana azy ianao
5. Apetraho ny API Key sy ny API Secret anao

### 2. Fahazoana ny Server ID sy App ID anao

1. Ao amin'ny dashboard an'ny RunCloud, mandehana any amin'ny "Servers"
2. Safidio ilay server izay misy WordPress multisite anao
3. Ny Server ID dia hita ao amin'ny URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Mandehana any amin'ny "Web Applications" ary safidio ny application WordPress anao
5. Ny App ID dia hita ao amin'ny URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Fampidirana ireo Constants ao amin'ny wp-config.php

Ampidiro ireto constants manaraka ao anaty rakitra `wp-config.php` anao:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Fanondroana ny Fandrindrana (Enable the Integration)

1. Ao amin'ny WordPress admin anao, mandehin'ny Ultimate Multisite > Settings
2. Mandehin'ny "Domain Mapping" tab
3. Mandehin'ny "Host Integrations" dia mijery any ambany
4. Ampirisihina ny integration RunCloud
5. Kiky ny "Save Changes"

## Ahoana no fiasany

Rehefa misy domain voafidy (mapped) ao amin'ny Ultimate Multisite:

1. Ny integration dia mandefa fangatahana iray ho an'ny API an'i RunCloud mba hanampiana ilay domain ao amin'ny application anao
2. Raha toa ka nahomby ny fanampiana ilay domain, dia hanao fametrahana indray (redeploy) ny sertifika SSL koa ny integration
3. Rehefa esorina ny fandrefesana domain mapping, dia esorina ao amin'ny RunCloud ny domaino ny integration

Ho an'ny fametrahana subdomain, ny integration dia hanao azy ho azy amin'ny famoronana subdomain ao amin'ny RunCloud rehefa misy toerana vaovao (new sites) azo ampiana ao amin'ny tambajotra anao.

## Fandresena olana (Troubleshooting)

### Olana momba ny API Connection
- Fantaro fa marina ny fampahalalana API anao
- Jereo raha marina ny server sy ny app IDs anao
- Antsoy fa manana alalana ilaina amin'ny kaontinao ao RunCloud ianao

### Olana momba ny SSL Certificate
- Mety mila fotoana kely ny RunCloud mba hanomezana sertifika SSL
- Fantaro raha marina ny fampitsoana (pointing) ireo domain anao mankany amin'ny IP address an'ny server anao
- Jereo ny fandrindrana SSL ao amin'ny RunCloud ho an'ny application anao

### Tsy voafidy ny Domain
- Jereo ny logs an'ny Ultimate Multisite raha misy hafatra fahadisoana (error messages)
- Fantaro fa tsy voafidy (already added) ao amin'ny RunCloud ilay domain
- Antsoy fa manohana domain maro (multiple domains) ny plan anao ao RunCloud
