---
title: RunCloud Integratie
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integratie

## Overzicht
RunCloud is een cloudgebaseerd serverbeheersplatform waarmee u eenvoudig webapplicaties kunt implementeren en beheren op uw eigen cloudservers. Deze integratie maakt automatische domeinsynchronisatie en SSL‑certificaatbeheer mogelijk tussen Ultimate Multisite en RunCloud.

## Functies
- Automatische domeinsynchronisatie
- SSL‑certificaatbeheer
- Domeinverwijdering wanneer mappings worden verwijderd

## Vereisten
De volgende constanten moeten worden gedefinieerd in uw `wp-config.php` bestand:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Installatie‑instructies

### 1. Verkrijg uw RunCloud API‑gegevens

1. Log in op uw RunCloud‑dashboard
2. Ga naar “User Profile” (klik op uw profielfoto in de rechterbovenhoek)
3. Selecteer “API” in het menu
4. Klik op “Generate API Key” als u er nog geen heeft
5. Kopieer uw API Key en API Secret

### 2. Verkrijg uw Server‑ en App‑ID’s

1. In uw RunCloud‑dashboard, ga naar “Servers”
2. Selecteer de server waarop uw WordPress multisite is gehost
3. De Server ID is zichtbaar in de URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ga naar “Web Applications” en selecteer uw WordPress‑toepassing
5. De App ID is zichtbaar in de URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Voeg constanten toe aan wp-config.php

Add the following constants to your `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Schakel de integratie in

1. In uw WordPress‑beheer, ga naar Ultimate Multisite > Settings
2. Navigeer naar het tabblad “Domain Mapping”
3. Scroll naar beneden naar “Host Integrations”
4. Schakel de RunCloud‑integratie in
5. Klik op “Save Changes”

## Hoe het werkt

Wanneer een domein wordt toegewezen in Ultimate Multisite:

1. De integratie verzendt een verzoek naar RunCloud’s API om het domein aan uw toepassing toe te voegen
2. Als het domein succesvol is toegevoegd, zal de integratie ook SSL‑certificaten opnieuw implementeren
3. Wanneer een domeinmapping wordt verwijderd, zal de integratie het domein uit RunCloud verwijderen

Voor subdomeininstallaties zal de integratie automatisch de creatie van subdomeinen in RunCloud afhandelen wanneer nieuwe sites aan uw netwerk worden toegevoegd.

## Probleemoplossing

### API‑verbindingproblemen
- Controleer of uw API‑gegevens correct zijn
- Controleer of uw server‑ en app‑ID’s correct zijn
- Zorg ervoor dat uw RunCloud‑account de noodzakelijke machtigingen heeft

### SSL‑certificaatproblemen
- RunCloud kan enige tijd nodig hebben om SSL‑certificaten uit te geven
- Controleer of uw domeinen correct verwijzen naar het IP‑adres van uw server
- Controleer de RunCloud SSL‑instellingen voor uw toepassing

### Domein niet toegevoegd
- Controleer de logs van Ultimate Multisite op foutmeldingen
- Controleer of het domein nog niet aan RunCloud is toegevoegd
- Zorg ervoor dat uw RunCloud‑plan meerdere domeinen ondersteunt
