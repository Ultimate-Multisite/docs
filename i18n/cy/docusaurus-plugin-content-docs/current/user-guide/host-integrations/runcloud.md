---
title: Ymddygiad RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Ymddian RunCloud

## Oglwyddictod {#overview}
RunCloud yw ffurfwr rheoli serverau ar-lein sy'n sylw'r eich bod yn llwybr i ddefnyddio a rheoli cyfathregau web ar gyfer eich serverau ar-lein. Mae’r ychwaneg hwn yn sylw'r syniad domain (domain syncing) a rheoli certysyddion SSL rhwng Ultimate Multisite a RunCloud yn awtomatig.

## Eithafau {#features}
- Syniad domain awtomatig
- Rheoli certysyddion SSL
- Ailta domain pan cael ei ddifynnu

## Cynlluniau {#requirements}
Rhaid i'r cyfaintau canlynol fod wedi'u cyflwyno yn eich fihweb `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Cynlluniau Rheoli {#setup-instructions}

### 1. Derbyn eich Cyfaintau API RunCloud {#1-get-your-runcloud-api-credentials}

1. Logi i'r dashboard eich RunCloud
2. Ymddangos i "User Profile" (clisi ar eich piktfeyr yn y cyfeiriad uchel o'r chwarae)
3. Dechrau ar "API" o'r menu
4. Clisi ar "Generate API Key" os nad oes gennych chi un yma
5. Copi eich API Key a API Secret

### 2. Derbyn eich IDs Server a App {#2-get-your-server-and-app-ids}

1. Yn eich dashboard RunCloud, mynd i "Servers"
2. Dechrau ar y server lle mae eich WordPress multisite wedi'i gweithredu
3. Mae'r ID Server yn agor yn yr URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Mynd i "Web Applications" a dechrau ar eich app WordPress
5. Mae'r App ID yn agor yn yr URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ymddangos Cyfaintau i wp-config.php {#3-add-constants-to-wp-configphp}

Ymddangos y canlynol cyfaintau i'r fihweb `wp-config.php` eich:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Gofal y Chfathrebu {#4-enable-the-integration}



1. Yn eich admin WordPress, mynd i Ultimate Multisite > Settings
2. Myndwch i' tab "Domain Mapping" (Mapiadau Domen)
3. Scrolli i lawr i "Host Integrations" (Ymddysuno Host)
4. Gynnalwch y integration RunCloud
5. Clic ar "Save Changes" (Safwch newidiadau)

## Sut mae hyn yn gweithio {#how-it-works}

Pan mae d domen wedi'i mapi mewn Ultimate Multisite:

1. Mae'r integration yn anfon gyfle i API RunCloud i dros y domen i'ch application
2. Os oes y domen wedi'i addo'n llwyddiannus, bydd y integration hefyd yn redoloi (redeploy) cyfyrdd SSLau
3. Pan cael ei ddifynnu (remove) mapi domen, bydd y integration yn dod â'r domen o RunCloud

Ar gyfer ychwanegiadau subdomain, bydd y integration yn gwneud y cyfathrebu (creation) subdomains mewn RunCloud yn awtomatig pan cael sitiau newydd i'ch rheini.

## Cynllunio Problemyngau (Troubleshooting) {#troubleshooting}

### Pัญหาau gyda Chysyllti API {#api-connection-issues}
- Gwylio bod eich credentials API'n cywir
- Cysylltu i sicr ydy eich server a IDs app yn wir
- Sicru bod eich cyfrif RunCloud wedi'i gynnwys y permisiwnau sydd ei angen

### Pัญหาau gyda Cyfyrdd SSL {#ssl-certificate-issues}
- Gallai RunCloud fod yn cymryd amser i ddefnyddio cyfyrdd SSLau
- Gwylio bod eich domenau yn cyfeirio'n iawn i'r adres IP'r server
- Cysylltu â'r setau SSL o RunCloud ar gyfer eich application

### Domen Nid wedi cael ei Addo {#domain-not-added}
- Gwylio'r logau Ultimate Multisite am unrhyw mesg eror
- Sicru bod y domen nid wedi cael ei addo i RunCloud eto
- Sicru bod eich plan RunCloud yn cefnogi domenau amlwr
