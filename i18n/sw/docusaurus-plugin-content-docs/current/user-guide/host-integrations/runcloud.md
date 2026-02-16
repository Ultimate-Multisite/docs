---
title: Ushirikiano wa RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Uunganishaji wa RunCloud

## Muhtasari
RunCloud ni jukwaa la usimamizi wa seva linalofanya kazi kwenye wingu ambalo linakuwezesha kupeleka na kusimamia programu za wavuti kwenye seva zako za wingu kwa urahisi. Uunganishaji huu unawezesha usawazishaji wa kiotomatiki wa vikoa na usimamizi wa vyeti vya SSL kati ya Ultimate Multisite na RunCloud.

## Vipengele
- Usawazishaji wa vikoa kiotomatiki
- Usimamizi wa vyeti vya SSL
- Kuondoa vikoa wakati ramani zinafutwa

## Mahitaji
Constants zifuatazo lazima zifafanuliwe katika faili yako ya `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Maelekezo ya Usanidi

### 1. Pata Vitambulisho Vyako vya API ya RunCloud

1. Ingia kwenye dashboard yako ya RunCloud
2. Nenda "User Profile" (bofya picha yako ya wasifu kwenye kona ya juu kulia)
3. Chagua "API" kutoka kwenye menyu
4. Bofya "Generate API Key" ikiwa bado huna moja
5. Nakili API Key yako na API Secret yako

### 2. Pata Vitambulisho Vya Seva na Programu Yako

1. Kwenye dashboard yako ya RunCloud, nenda "Servers"
2. Chagua seva ambapo tovuti yako ya WordPress multisite imehifadhiwa
3. Server ID inaonekana kwenye URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Nenda "Web Applications" na uchague programu yako ya WordPress
5. App ID inaonekana kwenye URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ongeza Constants kwenye wp-config.php

Ongeza constants zifuatazo kwenye faili yako ya `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Wezesha Uunganishaji

1. Kwenye eneo la admin ya WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogea chini hadi "Host Integrations"
4. Wezesha uunganishaji wa RunCloud
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

Kikoa kinapowekwa ramani katika Ultimate Multisite:

1. Uunganishaji unatuma ombi kwa API ya RunCloud kuongeza kikoa kwenye programu yako
2. Ikiwa kikoa kimeongezwa kwa mafanikio, uunganishaji pia utasambaza upya vyeti vya SSL
3. Ramani ya kikoa inapoondolewa, uunganishaji utaondoa kikoa kutoka RunCloud

Kwa usanidi wa subdomain, uunganishaji utashughulikia kiotomatiki uundaji wa subdomain katika RunCloud wakati tovuti mpya zinapoongezwa kwenye mtandao wako.

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Hakikisha kuwa vitambulisho vyako vya API ni sahihi
- Angalia kuwa vitambulisho vya seva na programu yako ni sahihi
- Hakikisha kuwa akaunti yako ya RunCloud ina ruhusa zinazohitajika

### Matatizo ya Vyeti vya SSL
- RunCloud inaweza kuchukua muda kutoa vyeti vya SSL
- Hakikisha kuwa vikoa vyako vinaelekeza vizuri kwenye anwani ya IP ya seva yako
- Angalia mipangilio ya SSL ya RunCloud kwa programu yako

### Kikoa Hakijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Hakikisha kuwa kikoa hakijaongezwa tayari kwenye RunCloud
- Hakikisha kuwa mpango wako wa RunCloud unasaidia vikoa vingi
