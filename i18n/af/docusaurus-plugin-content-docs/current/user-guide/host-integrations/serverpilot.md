---
title: ServerPilot Integrasie
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integrasie {#serverpilot-integration}

## Oorsig {#overview}
ServerPilot is 'n cloud-diens vir die hosting van WordPress en ander PHP-webwerwe op bedieners by DigitalOcean, Amazon, Google, of enige ander bedienaarverskaffer. Hierdie integrasie maak outomatiese domein-sinkronisering en SSL-sertifikaatbestuur moontlik tussen Ultimate Multisite en ServerPilot.

## Eienskappe {#features}
- Outomatiese domein-sinkronisering
- SSL-sertifikaatbestuur met Let's Encrypt
- Outomatiese SSL-vernying

## Vereistes {#requirements}
Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Opstel Instruksies {#setup-instructions}

### 1. Kry jou ServerPilot API-gegevens {#1-get-your-serverpilot-api-credentials}

1. Log in op jou ServerPilot dashboard
2. Gaan na "Account" > "API"
3. Skep 'n nuwe API-sleutel as jy nog nie een het nie
4. Kopieer jou Client ID en API-sleutel

### 2. Kry jou App ID {#2-get-your-app-id}

1. In jou ServerPilot dashboard, gaan na "Apps"
2. Kies die toepassing waar jou WordPress multisite gehost word
3. Die App ID is sigbaar in die URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Voeg konstantes by wp-config.php {#3-add-constants-to-wp-configphp}

Voeg die volgende konstantes by jou `wp-config.php` lêer:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktiveer die Integrasie {#4-enable-the-integration}

1. In jou WordPress admin, gaan na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tabblad
3. Skrol af na "Host Integrations"
4. Aktiveer die ServerPilot integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk {#how-it-works}

### Domein-sinkronisering {#domain-syncing}

Wanneer 'n domein in Ultimate Multisite gemap word:

1. Die integrasie haal die huidige lys domeine van ServerPilot op
2. Dit voeg die nuwe domein by die lys by (sake van 'n www-weergawe indien van toepassing)
3. Dit stuur die opgedateerde lys na ServerPilot via die API
4. ServerPilot het die domeinlys vir jou toepassing opgedateer

### SSL-sertifikaatbestuur {#ssl-certificate-management}

Nadat domeine gesinkroniseer is:

1. Die integrasie aktiveer outomaties AutoSSL vir jou toepassing
2. ServerPilot hanteer die uitreiking en installering van die SSL-sertifikaat met Let's Encrypt
3. ServerPilot hanteer ook die outomatiese vernuwing van SSL-sertifikaat

## SSL-sertifikaatverifikasie {#ssl-certificate-verification}

Die integrasie is gekonfigureer om die aantal pogings vir SSL-sertifikaatverifikasie vir ServerPilot te verhoog, aangesien dit 'n ruk kan neem vir ServerPilot om SSL-sertifikaat uit te reik en te installeer. Standaard sal dit tot 5 keer probeer, maar dit kan aangepas word met behulp van filters.

## Probleemoplossing {#troubleshooting}

### API-Verbindingsprobleme {#api-connection-issues}
- Bevestig dat jou Client ID en API-sleutel korrek is
- Kontroleer of jou App ID korrek is
- Maak seker dat jou ServerPilot rekening die nodige toestemminge het

### SSL-sertifikaatprobleme {#ssl-certificate-issues}
- ServerPilot vereis dat domeine geldige DNS-rekords het wat na jou bedienaar wys voordat SSL-sertifikaat uitgereik kan word
- As SSL-sertifikaat nie uitgereik word nie, kontroleer of jou domeine korrek na jou bedienaar se IP-adres wys
- Dit kan 'n ruk neem vir ServerPilot om SSL-sertifikaat uit te reik en te installeer (gewoonlik 5-15 minute)

### Domein Nie Bygevoeg Nie {#domain-not-added}
- Kontroleer die Ultimate Multisite logs vir enige foutboodskappe
- Bevestig dat die domein nie reeds by ServerPilot bygevoeg is nie
- Maak seker dat jou ServerPilot plan die aantal domeine ondersteun wat jy byvoeg

### Domein Verwydering {#domain-removal}
- Tans bied die ServerPilot API nie 'n manier om individuele domeine te verwyder nie
- Wanneer 'n domein-mapping in Ultimate Multisite verwyder word, sal die integrasie die domeinlys in ServerPilot opdateer om die verwyderde domein uit te sluit
