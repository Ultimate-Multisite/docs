---
title: RunCloud Integrasie
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integrasie

## Oorsig
RunCloud is 'n cloud-gebaseerde bedienerbestuurplatform wat jou toelaat om webtoepassings maklik op jou eie cloud-bedenere te implementeer en te bestuur. Hierdie integrasie maak outomatiese domein-sinkronisering en SSL-sertifikaatbestuur moontlik tussen Ultimate Multisite en RunCloud.

## Eienskappe
- Outomatiese domein-sinkronisering
- SSL-sertifikaatbestuur
- Verwydering van domeine wanneer kaarte verwyder word

## Vereistes
Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Opstel Instruksies

### 1. Kry Jou RunCloud API-wagwoord
1. Log in op jou RunCloud dashboard
2. Gaan na "User Profile" (klik op jou profielfoto in die boonste regterhoek)
3. Kies "API" uit die spyskaart
4. Klik op "Generate API Key" as jy nog nie een het nie
5. Kopieer jou API Key en API Secret

### 2. Kry Jou Bedieners- en App-ID's
1. In jou RunCloud dashboard, gaan na "Servers"
2. Kies die bediener waar jou WordPress multisite gehost word
3. Die Server ID is sigbaar in die URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gaan na "Web Applications" en kies jou WordPress-toepassing
5. Die App ID is sigbaar in die URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Voeg Konstantes by tot wp-config.php
Voeg die volgende konstantes by tot jou `wp-config.php` lêer:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktiveer die Integrasie
1. In jou WordPress-administrasie, gaan na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tab
3. Skrol na "Host Integrations"
4. Aktiveer die RunCloud-integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk

Wanneer 'n domein in Ultimate Multisite gekarteer word:

1. Stuur die integrasie 'n versoek na RunCloud se API om die domein by jou toepassing by te voeg.
2. As die domein suksesvol bygevoeg word, sal die integrasie ook SSL-sertifikaatdeplooiing herstel.
3. Wanneer 'n domeinkarte verwyder word, sal die integrasie die domein van RunCloud verwyder.

Vir subdomein-installasies sal die integrasie outomaties die skep van subdomeine in RunCloud hanteer wanneer nuwe webwerwe by jou netwerk bygevoeg word.

## Probleemoplossing

### API-Verbindingsprobleme
- Bevestig dat jou API-wagwoorde korrek is
- Kontroleer of jou bedieners- en app-ID's korrek is
- Verseker dat jou RunCloud-rekening die nodige toestemminge het

### SSL-Sertifikaatprobleme
- RunCloud mag 'n rukkie neem om SSL-sertifikaat te skep
- Bevestig dat jou domeine korrek na jou bediener se IP-adres wys
- Kontroleer die RunCloud SSL-instellings vir jou toepassing

### Domein Nie Bygevoeg Nie
- Kontroleer die Ultimate Multisite logs vir enige foutboodskappe
- Bevestig dat die domein nie reeds by RunCloud bygevoeg is nie
- Verseker dat jou RunCloud-plan ondersteuning vir meerdere domeine bied
