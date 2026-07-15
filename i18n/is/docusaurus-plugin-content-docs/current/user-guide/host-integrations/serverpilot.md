---
title: Samþætting ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Samning við ServerPilot

## Áhersla {#overview}
ServerPilot er skýservice fyrir hostingu WordPress og övrra PHP vefsíða á serverum DigitalOcean, Amazon, Google eða övrum serverhugtökum. Þessi samning fer með sjálfsviðandi samningu domænum og stjórnun SSL-tækni milli Ultimate Multisite og ServerPilot.

## Stöðvar {#features}
- Sjálfsviðandi samningur domána
- Stjórnun SSL-tækni með Let's Encrypt
- Sjálfsviðandi uppfærslu SSL-tækni

## Kreftingar {#requirements}
Fylgja þessum konstantum verða í `wp-config.php` skjalinu:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Stöðvarferli {#setup-instructions}

### 1. Fá ServerPilot API-skilmarkökum þínum {#1-get-your-serverpilot-api-credentials}

1. Logga inn í ServerPilot dashboard þinn
2. Gangi yfir "Account" > "API" (Stjórn/Notkun > API)
3. Skapa nýtt API-skilmarkök ef þú hefur ekki enn eitthvað
4. Kopla Client ID og API Key þína

### 2. Fá App ID þinn {#2-get-your-app-id}

1. Í ServerPilot dashboard þínum, gangi yfir "Apps" (Átkomandi/Aplikasi)
2. Vel app-ann sem þar WordPress multisite þitt er hostað
3. App ID er sýnt í URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Búa konstanturinn í wp-config.php {#3-add-constants-to-wp-configphp}

Búa eftirfarandi konstanturinn í skjalinu `wp-config.php` þínum:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Skynja samninguna {#4-enable-the-integration}

1. Í WordPress admin þínum, gangi yfir Ultimate Multisite > Settings (Stöðvar/Samningur > Innstillingar)
2. Gangi yfir tabinn "Domain Mapping" (Domæn-samningur)
3. Skolia niður til "Host Integrations" (Host-samningar)
4. Skynja ServerPilot samninguna
5. Klikka á "Save Changes" (Sjálfsviðandi breytingar)

## Hvernig það virkar {#how-it-works}

### Samningur domána {#domain-syncing}

Þegar domæn er samning við Ultimate Multisite:

1. Inngangur tengingin hentar upplýsingum um domænir frá ServerPilot
2. Það bætir nýri domén í lista (í sama tíma og www-versjun ef það er nauðsynlegt)
3. Það sendir uppfærð lista til ServerPilot með API
4. ServerPilot uppfærður doménlista fyrir viðmiðinguna þína

### Stjórnun SSL-tækja {#ssl-certificate-management}
Eftir að domænir séu synkdu:

1. Inngangur aktivar sjálf AutoSSL fyrir viðmiðinguna þína
2. ServerPilot skiptir í upphafnuna og installeringu SSL-tækja með Let's Encrypt
3. ServerPilot skiptir einnig í sjálfskilningum SSL-tækja

## Verfið SSL-tækja {#ssl-certificate-verification}
Inngangur er sett upp til að auka fjölda verfi SSL-tækja fyrir ServerPilot, þar sem það getur taka nokkrar tíma fyrir ServerPilot til að gera og installera SSL-tækja. Í almennu vinnslu reynir það upp til 5 áfengis, en þetta getur breytist með skiptum.

## Feilanaskynning {#troubleshooting}
### Vanda í API tengingu {#api-connection-issues}
- Staðfesti að Client ID og API Key þín séu réttar
- Skenni hvort App ID þinn sé réttur
- Sækja til þess að ServerPilot reikningurinn þinn hafi nauðsynlegur réttindi

### Vanda í SSL-tækjum {#ssl-certificate-issues}
- ServerPilot krefst að domænir séu með rétta DNS-skrá sem stigur til serverar þinni áður en það gera SSL-tækja
- Ef SSL-tækjar eru ekki gera, skenni hvort domænir þín stigja rétt til IP-heiti serverar þín
- Þetta getur taka nokkrar tíma fyrir ServerPilot til að gera og installera SSL-tækja (almennt 5-15 mínútur)

### Domén er ekki bætt við {#domain-not-added}
- Skenni Ultimate Multisite logs fyrir nánastilka villum
- Staðfesti hvort doménin sé ekki þegar bætt við ServerPilot
- Sækja til þess að planinn þinn í ServerPilot stuðlar að fjölda domána sem þú bætir við

### Fjarlagning domæns {#domain-removal}
- Notkun ServerPilot API er ekki til að fjarlaga sérstaklega domænar.
- Þegar þú fjarlægðir domæna mappa í Ultimate Multisite, uppfærast tengingin með listanum á domænum í ServerPilot svo að fjarlægðin domæns sé úr lista.
