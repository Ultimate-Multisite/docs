---
title: Ujumuishaji wa Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Muunganisho wa Cloudways

## Muhtasari
Cloudways ni jukwaa la hosting ya wingu linalosimamiwa ambalo linakuwezesha kusanidi tovuti za WordPress kwenye watoa huduma mbalimbali wa wingu kama DigitalOcean, AWS, Google Cloud, na zaidi. Muunganisho huu unawezesha usawazishaji wa kikoa kiotomatiki na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na Cloudways.

## Vipengele
- Usawazishaji wa kikoa kiotomatiki
- Usimamizi wa cheti cha SSL
- Msaada kwa vikoa vya ziada
- Uthibitishaji wa DNS kwa vyeti vya SSL

## Mahitaji
Vidhibiti vifuatavyo lazima vifafanuliwe kwenye faili yako ya `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kwa hiari, unaweza pia kufafanua:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Maelekezo ya Usanidi

### 1. Pata Vitambulisho Vyako vya API vya Cloudways

1. Ingia kwenye dashibodi yako ya Cloudways
2. Nenda "Account" > "API Keys"
3. Tengeneza ufunguo wa API ikiwa huna tayari
4. Nakili barua pepe yako na ufunguo wa API

### 2. Pata Vitambulisho vya Seva na Programu Yako

1. Kwenye dashibodi yako ya Cloudways, nenda "Servers"
2. Chagua seva ambapo tovuti yako ya WordPress multisite inapokelezwa
3. Kitambulisho cha Seva kinaonekana kwenye URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Nenda "Applications" na uchague programu yako ya WordPress
5. Kitambulisho cha Programu kinaonekana kwenye URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ongeza Vidhibiti kwenye wp-config.php

Ongeza vidhibiti vifuatavyo kwenye faili yako ya `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ikiwa una vikoa vya ziada ambavyo vinapaswa kujumuishwa kila wakati:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Washa Muunganisho

1. Kwenye eneo la msimamizi wa WordPress, nenda Ultimate Multisite > Settings
2. Nenda kichupo cha "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Washa muunganisho wa Cloudways
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

### Usawazishaji wa Kikoa

Kikoa kinapounganishwa kwenye Ultimate Multisite:

1. Muunganisho unapata vikoa vyote vilivyounganishwa kwa sasa
2. Unaongeza kikoa kipya kwenye orodha (pamoja na toleo la www ikiwa inafaa)
3. Unatuma orodha kamili kwa Cloudways kupitia API
4. Cloudways inasasisha majina mbadala ya kikoa kwa programu yako

Kumbuka: API ya Cloudways inahitaji kutuma orodha kamili ya vikoa kila wakati, si kuongeza au kuondoa vikoa vya kibinafsi tu.

### Usimamizi wa Cheti cha SSL

Baada ya vikoa kusawazishwa:

1. Muunganisho unakagua vikoa vipi vina rekodi halali za DNS zinazoelekeza kwenye seva yako
2. Unatuma ombi kwa Cloudways kusanikisha vyeti vya SSL vya Let's Encrypt kwa vikoa hivyo
3. Cloudways inashughulikia utoaji na usakinishaji wa cheti cha SSL

## Vikoa vya Ziada

Kidhibiti cha `WU_CLOUDWAYS_EXTRA_DOMAINS` kinakuwezesha kubainisha vikoa vya ziada ambavyo vinapaswa kujumuishwa kila wakati unaposawazisha na Cloudways. Hii ni muhimu kwa:

- Vikoa ambavyo havisimamiiwi na Ultimate Multisite
- Vikoa vya wildcard (k.m., `*.example.com`)
- Vikoa vya maendeleo au majaribio

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Hakikisha kwamba barua pepe yako na ufunguo wa API ni sahihi
- Kagua kwamba vitambulisho vya seva na programu yako ni sahihi
- Hakikisha kwamba akaunti yako ya Cloudways ina ruhusa zinazohitajika

### Matatizo ya Cheti cha SSL
- Cloudways inahitaji vikoa viwe na rekodi halali za DNS zinazoelekeza kwenye seva yako kabla ya kutoa vyeti vya SSL
- Muunganisho unathibitisha rekodi za DNS kabla ya kuomba vyeti vya SSL
- Ikiwa vyeti vya SSL havitolei, kagua kwamba vikoa vyako vinaelekeza vizuri kwenye anwani ya IP ya seva yako

### Kikoa Hakijaongezwa
- Kagua kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Hakikisha kwamba kikoa hakijaongezwa tayari kwenye Cloudways
- Hakikisha kwamba mpango wako wa Cloudways unasaidia idadi ya vikoa unavyoongeza
