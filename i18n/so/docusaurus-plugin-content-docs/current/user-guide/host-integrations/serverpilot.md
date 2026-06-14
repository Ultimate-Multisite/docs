---
title: Isdhexgalka ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Isku-dhaafinta ServerPilot

## Sharaxaad guud (Overview)
ServerPilot waa adeeg cloud ah oo loo isticmaalo in lagu hostigo WordPress iyo website kale oo PHP ah server-yada DigitalOcean, Amazon, Google, ama barnaamij kale oo server ah. Isku-dhaafinta (integration) kan wuxuu kuu oggolaanaya isku-dhaafka tooska ah ee domain-ka iyo maamulka shahaadada SSL-ka (SSL certificate management) inta u dhaxaysa Ultimate Multisite iyo ServerPilot.

## Wax-soo-dhismeedyada (Features)
- Isku-dhaafinta tooska ah ee domain-ka (Automatic domain syncing)
- Maamulka shahaadada SSL-ka iyadoo la isticmaalayo Let's Encrypt
- Dib u soo celinta tooska ah ee shahaadada SSL-ka (Automatic SSL renewal)

## Shuruudaha (Requirements)
Waxyaabahan waa inay siinayaan isbeddel (define) faylkaaga `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Tilmaamaha Dejinta (Setup Instructions)

### 1. Hel Shaxda API-gaaga ServerPilot

1. Tag dashboard-kaaga ServerPilot oo ku gasho "Account" > "API"
2. Samee key API cusub haddii aadan haysan mid hore
3. Nuqul ka qaado Client ID-gaaga iyo API Key-gaaga

### 2. Hel App ID-gaaga

1. Dashboard-kaaga ServerPilot, tag "Apps"
2. Dooro app-ka (app) halka WordPress multisite-kaagu ku yaallo
3. App ID-gu wuxuu muuqdaa URL-ka: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ku dar Constants-ka faylka wp-config.php

Ku dar constants-kan faylkaaga `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Fur Isku-dhaafka (Enable the Integration)

1. Admin-ka WordPress-kaaga, tag Ultimate Multisite > Settings
2. Tag tab-ka "Domain Mapping"
3. Hoos u soo saar "Host Integrations"
4. Fur isku-dhaafka ServerPilot
5. Click "Save Changes" (Wax ka badbaado isbeddellada)

## Sida ay U Shaqeeyaan (How It Works)

### Isku-dhaafinta Domain-ka (Domain Syncing)

Marka domain-ka la dhigo (mapped) Ultimate Multisite-ka:

1. Isku-dhaafku wuxuu soo qaadaa liiska domain-yada hadda jira ee ServerPilot.
2. Wuxuu dhorfayaa domain cusubka (waaana wuxuu ku darayaa nooc www haddii uu jiro) liiska (wixii la mid ah).
3. Wuxuu u dirayaa liiska la cusboonaysiiyay ServerPilot iyada oo isticmaalaya API-ga.
4. ServerPilot wuxuu cusboonaysiiyaa liiska domain-ka ee application-kaaga.

### Maareynta Sertiga SSL (SSL Certificate Management)

Marka domain-yadu la isku xiray:

1. Isku-dhaafku si toos ah u furayaa AutoSSL-ka application-kaaga.
2. ServerPilot wuxuu maareynayaa bixinta iyo dhisista sertiga SSL-ka iyada oo isticmaalaya Let's Encrypt.
3. ServerPilot wuxuu sidoo kale maareynayaa dib-u-soo-celinta (renewal) sertiga SSL-ka si toos ah.

## Xaqiijinta Sertiga SSL (SSL Certificate Verification)

Isku-dhaafku waxaa loo dejiyay inuu kordhiyo tirada isku dayga xaqiijinta sertiga SSL-ka ee ServerPilot, sababtoo ah waxay qaadan kartaa waqti in ServerPilot uu bixiyo oo uu dhisayo sertiga SSL-ka. Si aasaasi ah, wuxuu isku dayi doonaa ilaa 5 jeer, laakiin tani waxaa la hagaajin karaa iyadoo la isticmaalayo filters (fiiro).

## Xallinta Dhibaatooyinka (Troubleshooting)

### Dhibaatooyinka Xiriirka API-ga
- Hubi in Client ID-gaaga iyo API Key-gaagu ay sax yihiin.
- Hubi in App ID-gaagu uu sax yahay.
- Hubi in xisaabtaada ServerPilot ay leedahay fursadaha (permissions) ee loo baahan yahay.

### Dhibaatooyinka Sertiga SSL-ka
- ServerPilot wuxuu u baahan yahay in domain-yadu ay leeyihiin DNS records sax ah oo si toos ah ugu tilmaamaya server-kaaga ka hor inta aanu bixiyo sertiga SSL-ka.
- Haddii sertiga SSL-ku aysan la bixin, hubi in domain-yadaagu si sax ah ugu tilmaamaan IP address-ka server-kaaga.
- Waxaa laga yaabaa in ServerPilot waqti qaadanayo inuu bixiyo oo uu dhisayo sertiga SSL-ka (badankood 5 ilaa 15 daqiiqo).

### Domain-ka Aan La Darin
- Hubi logs-ka Ultimate Multisite-ka wax walba oo qalad ah.
- Hubi in domain-kaas aysan la darin ServerPilot hadda.
- Hubi in qorshaha (plan) ServerPilot-kaagu uu taageero tirada domain-yada aad ku darayso.

### Tutinta Domainka

- Hadda, ServerPilot API-ga maalin walba domain gaar ah ka saari lahayn.
- Marka aad ka saarto xiriirka domain-ka (domain mapping) Ultimate Multisite-ka, isku-dhafka (integration) wuxuu cusboonaysiin doona liiska domain-yada ServerPilot si uu u ka saaro domain-ka la saaray.
