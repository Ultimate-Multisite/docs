---
title: Ubwumvikane bw'Integrasyon ya GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Ubushobozi n'Ubwumelera (GridPane Integration)

## Umuhaka (Overview)
GridPane ni control panel yakwumelera yisibonelo siza kwi-WordPress, yashaka abafundi bafana n'abantu bakwenzile WordPress. Ubushobozi (integration) uyu hunika ukuhambisana kwedomain (domain syncing) no ukuqoqa i-SSL certificate ngaphandle kokuba umuntu ahlale ekhulunywa phakathi kweUltimate Multisite no GridPane.

## Ibhizinisi (Features)
- Ukuhambisana kwedomain ngokuzenzakalayo (Automatic domain syncing)
- Ukuqoqa i-SSL certificate
- Ukuqoqa okuzenzakalayo kwi-constant yeSUNRISE

## Izixhobo (Requirements)
Izixhobo ezifushane zishishwe mu file wena `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Inamaqondiso (Setup Instructions)

### 1. Gufashe I-API Credentials ya GridPane

1. Faka umbonyane (log in) ku dashboard ya GridPane yawe
2. Duka "Settings" > "API"
3. Yenza i-API key uma usina ufumana
4. Copy i-API key yawe

### 2. Gufashe I-Server no Site IDs yawe

1. Mu dashboard ya GridPane yawe, duka "Servers"
2. Seleli umserver uyuho WordPress multisite yawe
3. Nika i-Server ID (uhohlobo mu URL cyangwa ku page ya server details)
4. Duka "Sites" kandi seleli site yawe ya WordPress
5. Nika i-Site ID (uhohlobo mu URL cyangwa ku page ya site details)

### 3. Gufashe I-Constants mu wp-config.php

Gufashe i-constants izi mu file wena `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Gufashe Ubushobozi (Enable the Integration)

1. Mu admin yawe ya WordPress, duka Ultimate Multisite > Settings
2. Duka i-tab "Domain Mapping"
3. Scrolla ku gice cyo "Host Integrations"
4. Fasha ubushobozi bwa GridPane (Enable the GridPane integration)
5. Clickya "Save Changes"

## Uburyo Bwo Gukora Icyo (How It Works)

Iyo domain ikorwa (mapped) mu Ultimate Multisite:

1. Icyemezo iryo gukoresha umusanzwe ku API ya GridPane kugira ngo yagize domain kuri site yawe.
2. GridPane igaragaza cyangwa ikorera gukoresha SSL certificate mu gihe cyose.
3. Iyo uburyo bwo gukoresha domain (domain mapping) bishobora guhindurwa, umusanzwe uzakoresha ngo utondoke domain kuri GridPane.

Umusanzwe uzakoresha umusanzwe SUNRISE mu file yawe ya wp-config.php, uyu mwe wari ushaka kugira ngo gukoreshwa neza ku gukoresha domain mapping.

## Uko Gusobanura Umusanzwe SUNRISE (SUNRISE Constant Management)

Icyiciro cy'umwihariko mu integration ya GridPane ni ko uzakoresha umusanzwe SUNRISE muri wp-config.php kugira ngo uza gukoreshwa neza, kandi ibyo bishobora guhindurwa byiza kugira ngo bitangire ubushobozi bw'domain mapping y'Grindpane. Ibi bifasha ko ibintu byose bigera neza mu gihe cyose.

## Gukoresha Uburyo Bwo Gutera Ihinduka (Troubleshooting)

### Icyiciro Cy'Ubwumvikane bwa API (API Connection Issues)
- Shobora gushyira umwanzuro ko API key yawe yari yiza.
- Shobora gushyira umwanzuro ko server yawe n'site IDs yawe zari zikoreshwa neza.
- Shobora gushyira umwanzuro ko aka compte yawe kuri GridPane yashobora uburyo bwo gukoresha (permissions) buhagarara.

### Icyiciro Cy'SSL Certificate (SSL Certificate Issues)
- GridPane yashobora guteka igihe kire cyane kugira ngo yigize SSL certificates.
- Shobora gushyira umwanzuro ko domain yawe yari yagize neza ku IP address ya server yawe.
- Shobora gushyira umwanzuro ku settings za SSL kuri site yawe muri GridPane.

### Domain Itabaye (Domain Not Added)
- Shobora gushyira umwanzuro mu Ultimate Multisite logs kugira ngo utere ibindi byo kubaho (error messages).
- Shobora gushyira umwanzuro ko domain yari yagize neza kuri GridPane.
- Shobora gushyira umwanzuro ko DNS records za domain yawe zari zikoreshwa neza.
