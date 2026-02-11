---
title: GridPane Integratie
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integratie

## Overzicht
GridPane is een gespecialiseerd WordPress-hosting controlepaneel ontworpen voor serieuze WordPress-professionals. Deze integratie maakt automatische domeinsynchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en GridPane.

## Functies
- Automatische domeinsynchronisatie
- SSL-certificaatbeheer
- Automatische configuratie van de SUNRISE constant

## Vereisten
De volgende constanten moeten gedefinieerd zijn in uw `wp-config.php` bestand:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Installatie-instructies

### 1. Verkrijg uw GridPane API-gegevens

1. Log in op uw GridPane-dashboard  
2. Ga naar "Settings" > "API"  
3. Genereer een API-sleutel als u er nog geen heeft  
4. Kopieer uw API-sleutel  

### 2. Verkrijg uw Server- en Site-ID's

1. In uw GridPane-dashboard, ga naar "Servers"  
2. Selecteer de server waarop uw WordPress multisite gehost wordt  
3. Noteer de Server ID (zichtbaar in de URL of op de serverdetailspagina)  
4. Ga naar "Sites" en selecteer uw WordPress-site  
5. Noteer de Site ID (zichtbaar in de URL of op de site detailspagina)  

### 3. Voeg constanten toe aan wp-config.php

Voeg de volgende constanten toe aan uw `wp-config.php` bestand:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Schakel de integratie in

1. In uw WordPress-beheer, ga naar Ultimate Multisite > Settings  
2. Navigeer naar het tabblad "Domain Mapping"  
3. Scroll naar beneden naar "Host Integrations"  
4. Schakel de GridPane-integratie in  
5. Klik op "Save Changes"

## Hoe het werkt

Wanneer een domein wordt gekoppeld in Ultimate Multisite:

1. De integratie stuurt een verzoek naar GridPane's API om het domein aan uw site toe te voegen  
2. GridPane verwerkt automatisch de provisioning van SSL-certificaten  
3. Wanneer een domeinbinding wordt verwijderd, zal de integratie het domein van GridPane verwijderen  

De integratie verwerkt ook automatisch de SUNRISE constant in uw wp-config.php bestand, die vereist is voor correcte werking van domeinbinding.

## SUNRISE Constant Beheer

Een unieke functie van de GridPane-integratie is dat het automatisch de SUNRISE constant in wp-config.php terugdraait om conflicten met het eigen domeinbinding-systeem van GridPane te voorkomen. Dit zorgt ervoor dat beide systemen samen kunnen werken zonder problemen.

## Probleemoplossing

### API-verbindingproblemen
- Controleer of uw API-sleutel correct is  
- Controleer of uw server- en site-ID's correct zijn  
- Zorg ervoor dat uw GridPane-account de nodige permissies heeft  

### SSL-certificaatproblemen
- GridPane kan enige tijd nodig hebben om SSL-certificaten uit te geven  
- Controleer of uw domeinen correct verwijzen naar het IP-adres van uw server  
- Controleer de GridPane SSL-instellingen voor uw site  

### Domein niet toegevoegd
- Controleer de Ultimate Multisite-logs op foutmeldingen  
- Controleer of het domein nog niet aan GridPane is toegevoegd  
- Zorg ervoor dat de DNS-records van uw domein correct zijn geconfigureerd
