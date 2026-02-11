---
title: ServerPilot Integratie
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integratie

## Overzicht
ServerPilot is een cloudservice voor het hosten van WordPress en andere PHP-websites op servers bij DigitalOcean, Amazon, Google of een andere serverprovider. Deze integratie maakt automatische domeinsynchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en ServerPilot.

## Functies
- Automatische domeinsynchronisatie
- SSL-certificaatbeheer met Let's Encrypt
- Automatische SSL-vernieuwing

## Vereisten
De volgende constanten moeten gedefinieerd zijn in uw `wp-config.php`-bestand:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Installatie-instructies

### 1. Verkrijg uw ServerPilot API-gegevens

1. Log in op uw ServerPilot-dashboard
2. Ga naar "Account" > "API"
3. Maak een nieuwe API-sleutel aan als u er nog geen heeft
4. Kopieer uw Client ID en API Key

### 2. Verkrijg uw App ID

1. Ga in uw ServerPilot-dashboard naar "Apps"
2. Selecteer de app waar uw WordPress multisite gehost wordt
3. Het App ID is zichtbaar in de URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Voeg constanten toe aan wp-config.php

Voeg de volgende constanten toe aan uw `wp-config.php`-bestand:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Schakel de integratie in

1. Ga in uw WordPress-beheer naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad "Domain Mapping"
3. Scroll naar beneden naar "Host Integrations"
4. Schakel de ServerPilot-integratie in
5. Klik op "Save Changes"

## Hoe het werkt

### Domeinsynchronisatie

Wanneer een domein wordt gekoppeld in Ultimate Multisite:

1. De integratie haalt de huidige lijst met domeinen op uit ServerPilot
2. Het voegt het nieuwe domein toe aan de lijst (inclusief een www-versie indien van toepassing)
3. Het stuurt de bijgewerkte lijst naar ServerPilot via de API
4. ServerPilot werkt de domeinlijst voor uw applicatie bij

### SSL-certificaatbeheer

Na het synchroniseren van domeinen:

1. De integratie schakelt automatisch AutoSSL in voor uw applicatie
2. ServerPilot verzorgt de uitgifte en installatie van het SSL-certificaat met Let's Encrypt
3. ServerPilot verzorgt ook de automatische vernieuwing van SSL-certificaten

## SSL-certificaatverificatie

De integratie is geconfigureerd om het aantal pogingen voor SSL-certificaatverificatie voor ServerPilot te verhogen, aangezien het enige tijd kan duren voordat ServerPilot SSL-certificaten uitgeeft en installeert. Standaard probeert het tot 5 keer, maar dit kan worden aangepast met filters.

## Probleemoplossing

### API-verbindingproblemen
- Controleer of uw Client ID en API Key correct zijn
- Controleer of uw App ID correct is
- Zorg ervoor dat uw ServerPilot-account de benodigde permissies heeft

### SSL-certificaatproblemen
- ServerPilot vereist dat domeinen geldige DNS-records hebben die naar uw server wijzen voordat SSL-certificaten worden uitgegeven
- Als SSL-certificaten niet worden uitgegeven, controleer dan of uw domeinen correct wijzen naar het IP-adres van uw server
- Het kan enige tijd duren voordat ServerPilot SSL-certificaten uitgeeft en installeert (meestal 5-15 minuten)

### Domein niet toegevoegd
- Controleer de Ultimate Multisite-logs op eventuele foutmeldingen
- Controleer of het domein nog niet aan ServerPilot is toegevoegd
- Zorg ervoor dat uw ServerPilot-plan het aantal domeinen ondersteunt dat u toevoegt

### Domeinverwijdering
- Momenteel biedt de ServerPilot-API geen manier om individuele domeinen te verwijderen
- Wanneer een domeinmapping wordt verwijderd in Ultimate Multisite, zal de integratie de domeinlijst in ServerPilot bijwerken om het verwijderde domein uit te sluiten
