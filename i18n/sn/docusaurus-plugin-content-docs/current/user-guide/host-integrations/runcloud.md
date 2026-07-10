---
title: Kugadzirwa neRunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration {#runcloud-integration}

## Oraphorera (Overview) {#overview}
RunCloud ndiri platformer ya usimamizi wa seva inayotegemea wingu ambayo inakuruhusu kuweka na kusimamia kwa urahisi programu za web kwenye seva zako za wingu. Hii integration inaruhusu usawazishaji wa domain kiotomatiki na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na RunCloud.

## Vifaa (Features) {#features}
- Usawazishaji wa domain kiotomatiki
- Usimamizi wa cheti cha SSL
- Kuondoa domain wakati mappings yameondolewa

## Mahitaji (Requirements) {#requirements}
Vifaa hivi viwili lazima vianike kwenye faili lako la `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Maelekezo ya Kuweka (Setup Instructions) {#setup-instructions}

### 1. Pata Vitambulisho vya API vya RunCloud {#1-get-your-runcloud-api-credentials}

1. Ingia kwenye dashboard yako ya RunCloud
2. Nenda kwenye "User Profile" (bofya picha yako ya wasifu kona ya juu kulia)
3. Chagua "API" kutoka kwenye menyu
4. Bonya "Generate API Key" ikiwa hujaiwe tayari
5. Nakili API Key na API Secret zako

### 2. Pata Maalum ya Server na App Yako {#2-get-your-server-and-app-ids}

1. Katika dashboard yako ya RunCloud, nenda kwenye "Servers" (Seva)
2. Chagua seva ambapo WordPress multisite yako inahifadhiwa
3. Server ID inaonekana kwenye URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Nenda kwenye "Web Applications" na chagua programu yako ya WordPress
5. App ID inaonekana kwenye URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ongeza Constants kwenye wp-config.php {#3-add-constants-to-wp-configphp}

Ongeza constants hizi kwenye faili lako la `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Washa Integration (Enable the Integration) {#4-enable-the-integration}

1. Muenda ku admin ya WordPress, uenda ku Ultimate Multisite > Settings
2. Uenda ku tab ye "Domain Mapping" (Kupanga Domain)
3. Uenda kune chini ku "Host Integrations" (Mavuno ekuramba)
4. Onge RunCloud integration (kugadzirisa/kuweza kutumika)
5. Click "Save Changes" (Chinjisa Mutaura)

## Ino Inengei Kufanya Nini? (How It Works) {#how-it-works}

Kana domain inengei kupangwa mu Ultimate Multisite:

1. Integration inengei kuita request kune API ya RunCloud kuti ite domain iye ku application yako
2. Kana domain ikapangwa zvakanaka, integration inengei kutora SSL certificateswo (certificates dzakare-load)
3. Kana kupangwa kwemdomain kunoteka, integration inengei kudera domain iye ku RunCloud

Kune installation ya subdomains, integration inengei kuteerera automatically kuratidza subdomains mu RunCloud kana kuna sites dzinogadzirwa ku network yako.

## Kuti Usarure (Troubleshooting) {#troubleshooting}

### Matambudziko Ekutanga ne API Connection {#api-connection-issues}
- Onge chineona kuti credentials dzako dziri ndiri dzakakodzera
- Onge chineona kuti server yako uye app IDs dzinogadzirwa
- Onge chineona kuti RunCloud account yako inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in
