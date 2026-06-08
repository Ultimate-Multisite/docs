---
title: GridPane Integrasie
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integrasie

## Oorsig
GridPane is 'n gespesialiseerde WordPress hosting beheerderspaneel wat gebou is vir ernstige WordPress-professionele. Hierdie integrasie maak outomatiese domein-sinkronisering en SSL-sertifika bestuur moontlik tussen Ultimate Multisite en GridPane.

## Eienskappe
- Outomatiese domein-sinkronisering
- SSL-sertifika bestuur
- Outomatiese konfigurasie van die SUNRISE konstante

## Vereistes
Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Opstel Instruksies

### 1. Kry Jou GridPane API-gegevens
1. Log in op jou GridPane dashboard
2. Gaan na "Settings" > "API"
3. Genereer 'n API-sleutel as jy nog nie een het nie
4. Kopieer jou API-sleutel

### 2. Kry Jou Server- en Webwerf-ID's
1. Gaan in jou GridPane dashboard na "Servers"
2. Kies die bediener waar jou WordPress multisite gehost word
3. Noteer die Server ID (sigbaar in die URL of op die bedienerbesonderhede bladsy)
4. Gaan na "Sites" en kies jou WordPress-webwerf
5. Noteer die Webwerf-ID (sigbaar in die URL of op die webwerfbesonderhede bladsy)

### 3. Voeg Konstantes by tot wp-config.php
Voeg die volgende konstantes by tot jou `wp-config.php` lêer:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktiveer die Integrasie
1. Gaan in jou WordPress-administrasie na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tab
3. Skrol af na "Host Integrations"
4. Aktiveer die GridPane integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk

Wanneer 'n domein in Ultimate Multisite gemap word:

1. Stuur die integrasie 'n versoek na GridPane se API om die domein by jou webwerf by te voeg
2. GridPane hanteer outomaties die voorsiening van SSL-sertifikaat
3. Wanneer 'n domein-mapping verwyder word, sal die integrasie die domein van GridPane verwyder

Die integrasie hanteer ook outomaties die SUNRISE konstante in jou wp-config.php lêer, wat nodig is vir korrekte domein-mapping.

## SUNRISE Konstante Bestuur

'n Unieke kenmerk van die GridPane integrasie is dat dit outomaties die SUNRISE konstante in wp-config.php terugdraai om konflikte met GridPane se eie domein-mapping stelsel te voorkom. Dit verseker dat beide stelsels kan saamwerk sonder probleme.

## Probleemoplossing

### API-Verbindingsprobleme
- Bevestig dat jou API-sleutel korrek is
- Kontroleer of jou bediener- en webwerf-ID's korrek is
- Maak seker dat jou GridPane rekening die nodige toestemminge het

### SSL-Sertifikaatprobleme
- GridPane mag 'n rukkie neem om SSL-sertifikaat uit te reik
- Bevestig dat jou domeine korrek na jou bediener se IP-adres wys
- Kontroleer die GridPane SSL-instellings vir jou webwerf

### Domein Nie Bygevoeg Nie
- Kontroleer die Ultimate Multisite logs vir enige foutboodskappe
- Bevestig dat die domein nie reeds by GridPane bygevoeg is nie
- Maak seker dat die DNS-rekords van jou domein korrek gekonfigureer is
