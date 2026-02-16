---
title: Muunganiko wa ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Kuunganisha ServerPilot

## Muhtasari
ServerPilot ni huduma ya wingu kwa kuhost tovuti za WordPress na tovuti nyingine za PHP kwenye seva za DigitalOcean, Amazon, Google, au mtoa huduma mwingine yeyote wa seva. Uunganishaji huu unawezesha usawazishaji wa moja kwa moja wa domain na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na ServerPilot.

## Vipengele
- Usawazishaji wa moja kwa moja wa domain
- Usimamizi wa cheti cha SSL na Let's Encrypt
- Uhuishaji wa moja kwa moja wa SSL

## Mahitaji
Constant zifuatazo lazima zifafanuliwe katika faili yako ya `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Maelekezo ya Usanidi

### 1. Pata Taarifa Zako za API za ServerPilot

1. Ingia kwenye dashibodi yako ya ServerPilot
2. Nenda "Account" > "API"
3. Unda API key mpya ikiwa huna tayari
4. Nakili Client ID yako na API Key

### 2. Pata App ID Yako

1. Katika dashibodi yako ya ServerPilot, nenda "Apps"
2. Chagua app ambapo multisite yako ya WordPress inahostishwa
3. App ID inaonekana kwenye URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ongeza Constant kwenye wp-config.php

Ongeza constant zifuatazo kwenye faili yako ya `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Wezesha Uunganishaji

1. Katika admin yako ya WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye tab ya "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Wezesha uunganishaji wa ServerPilot
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

### Usawazishaji wa Domain

Domain inapounganishwa katika Ultimate Multisite:

1. Uunganishaji unapata orodha ya sasa ya domain kutoka ServerPilot
2. Unaongeza domain mpya kwenye orodha (pamoja na toleo la www ikiwa inafaa)
3. Unatuma orodha iliyosasishwa kwa ServerPilot kupitia API
4. ServerPilot inasasisha orodha ya domain kwa programu yako

### Usimamizi wa Cheti cha SSL

Baada ya domain kusawazishwa:

1. Uunganishaji unawezesha AutoSSL kwa moja kwa moja kwa programu yako
2. ServerPilot inashughulikia utoaji na usakinishaji wa cheti cha SSL kwa kutumia Let's Encrypt
3. ServerPilot pia inashughulikia uhuishaji wa moja kwa moja wa vyeti vya SSL

## Uthibitishaji wa Cheti cha SSL

Uunganishaji umesanidiwa kuongeza idadi ya majaribio ya uthibitishaji wa cheti cha SSL kwa ServerPilot, kwani inaweza kuchukua muda kwa ServerPilot kutoa na kusakinisha vyeti vya SSL. Kwa chaguo-msingi, itajaribu hadi mara 5, lakini hii inaweza kurekebishwa kwa kutumia filter.

## Kutatua Matatizo

### Matatizo ya Muunganisho wa API
- Hakikisha kuwa Client ID yako na API Key ni sahihi
- Angalia kuwa App ID yako ni sahihi
- Hakikisha kuwa akaunti yako ya ServerPilot ina ruhusa zinazohitajika

### Matatizo ya Cheti cha SSL
- ServerPilot inahitaji domain ziwe na rekodi sahihi za DNS zinazoelekeza kwenye seva yako kabla ya kutoa vyeti vya SSL
- Ikiwa vyeti vya SSL havitolei, angalia kuwa domain zako zinaelekeza vizuri kwenye anwani ya IP ya seva yako
- Inaweza kuchukua muda kwa ServerPilot kutoa na kusakinisha vyeti vya SSL (kawaida dakika 5-15)

### Domain Haijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa kosa
- Hakikisha kuwa domain haijawahi kuongezwa kwenye ServerPilot
- Hakikisha kuwa mpango wako wa ServerPilot unasaidia idadi ya domain unazozongeza

### Kuondoa Domain
- Kwa sasa, API ya ServerPilot haitoi njia ya kuondoa domain moja moja
- Uunganishaji wa domain unapoondolewa katika Ultimate Multisite, uunganishaji utasasisha orodha ya domain katika ServerPilot ili kuondoa domain iliyoondolewa
