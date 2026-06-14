---
title: RunCloud samstarf
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Samningur

## Översikt
RunCloud er ský-basert staflinnar fyrir serverstjórnun sem leysir þér á einfaldan hátt að dekompila og stjórna webapplikasjonum þínum á eigin ský-serverum. Þessi samning fer með sjálfsviðandi domænsmyndun og stjórnun SSL-sertifika milli Ultimate Multisite og RunCloud.

## Stöðvar
- Sjálfsviðandi domænsmyndun
- Stjórnun SSL-sertifika
- Fjármagnarið þegar mappingar eru fjarlægðar

## Kreftingar
Fylgja eftir að þessum konstantum verða í `wp-config.php` skrifstafinn:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Stöðvarferli

### 1. Fá RunCloud API-skilmarkökum þínum

1. Logga inn í RunCloud dashboard þinn
2. Gangi yfir til "User Profile" (klikka á myndina þinni uppstafnari í hópinn upphaflega)
3. Veldu "API" frá menulinum
4. Klikka á "Generate API Key" ef þú hefur ekki enn eitthvað
5. Kopla API-skilmarkök og API-heimild

### 2. Fá Server- og App-íðir þínar

1. Í RunCloud dashboard þínum, gangi yfir til "Servers"
2. Veldu server sem heldur WordPress multisite þitt
3. Server ID er sýnt í URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gangi yfir til "Web Applications" og veldu WordPress applikationina þína
5. App ID er sýnt í URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Búa að konstantum í wp-config.php

Búa að eftirfarandi konstanter í skrifstafinn `wp-config.php` þínum:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Skynja samninginn

(Þessi hluti er ekki fullkomlega skrifað í upprunalefni, en þetta er staðsetning fyrir að útbúa innferðina.)

1. Í WordPress adminnið þitt, ferstur í Ultimate Multisite > Settings
2. Navigera til "Domain Mapping" tabinn
3. Skoli niður til "Host Integrations"
4. Ákveða að aktíva RunCloud integrationn
5. Klikka á "Save Changes"

## Hvernig þetta virkar

Þegar domén er mappa í Ultimate Multisite:

1. Integrationin sendir skynjun til API-s RunCloudar til að bæta doménni við appilinn þinn
2. Ef doménn er laukið á með góðum, mun integrationin einnig uppfærja SSL sertifíki og deplaust aftur
3. Þegar domén mapping er fjarlægð, mun integrationin fjarlægja doméninn frá RunCloud

Vinnandi fyrir subdomain installationir, mun integrationin sjálf halda áfram með sköpunum subdomainna í RunCloud þegar nýr staðar eru að bæta við netið þitt.

## Feilfellingar

### Vætlendur við API tengingu
- Staða að þínum API kerfi er rétt
- Skenni að þín server og app ID's eru rétt
- Tryggðu þér að RunCloud reikningurinn þinn hafi nauðsynlegum réttunum

### Vætlendur við SSL sertifíki
- RunCloud getur þurfa nokkinn tíma til að útbreyta SSL sertifíkum
- Staða að þínum doménum eru rétt leiðandi til IP-adresse serverar þín
- Skenni RunCloud SSL settin fyrir appilinn þinn

### Domén ekki bætt við
- Skenni Ultimate Multisite logs fyrir nánastilka villum
- Tryggðu þér að doménn sé ekki eingildum bætt við RunCloud
- Staða að RunCloud planinn þinn stuðlar til fleiri domena
