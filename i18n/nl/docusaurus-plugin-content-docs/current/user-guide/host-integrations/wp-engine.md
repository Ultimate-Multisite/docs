---
title: WP Engine Integratie
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## Overzicht
WP Engine is een premium beheerde WordPress-hostingplatform dat geoptimaliseerde prestaties, beveiliging en schaalbaarheid biedt voor WordPress-sites. Deze integratie maakt automatische domeinsynchronisatie mogelijk tussen Ultimate Multisite en WP Engine.

## Functies
- Automatische domeinsynchronisatie
- Ondersteuning voor subdomeinen bij multisite-installaties
- Naadloze integratie met de bestaande systemen van WP Engine

## Vereisten
De integratie detecteert automatisch of je host op WP Engine en gebruikt de ingebouwde WP Engine API. Er is geen extra configuratie vereist als de WP Engine-plugin actief en correct geconfigureerd is.

Echter, als je de integratie handmatig wilt configureren, kun je een van deze constanten definiëren in je `wp-config.php` bestand:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Installatie-instructies

### 1. Controleer WP Engine Plugin
Als je host op WP Engine, moet de WP Engine-plugin al geïnstalleerd en geactiveerd zijn. Controleer het volgende:
1. De WP Engine-plugin is actief
2. Het bestand `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` bestaat

### 2. Schakel de integratie in
1. Ga in je WordPress-beheer naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad 'Domain Mapping'
3. Scroll naar beneden naar 'Host Integrations'
4. Schakel de WP Engine-integratie in
5. Klik op 'Save Changes'

## Hoe het werkt

### Domein synchronisatie
Wanneer een domein wordt gekoppeld in Ultimate Multisite:
1. De integratie gebruikt de WP Engine API om het domein toe te voegen aan je WP Engine-installatie
2. WP Engine beheert de domeinconfiguratie en het uitgeven van SSL-certificaten
3. Wanneer een domeinmapping wordt verwijderd, zal de integratie het domein verwijderen uit WP Engine

### Subdomeinondersteuning
Voor subdomein-multisite-installaties:
1. De integratie voegt elk subdomein toe aan WP Engine wanneer een nieuwe site wordt aangemaakt
2. WP Engine beheert de subdomeinconfiguratie
3. Wanneer een site wordt verwijderd, zal de integratie het subdomein verwijderen uit WP Engine

## Belangrijke opmerkingen

### Wildcard-domeinen
Voor subdomein-multisite-installaties wordt aanbevolen contact op te nemen met WP Engine support om een wildcard-domeinconfiguratie aan te vragen. Dit maakt het mogelijk dat alle subdomeinen automatisch werken zonder dat je elk afzonderlijk hoeft toe te voegen.

### SSL-certificaten
WP Engine beheert automatisch het uitgeven en vernieuwen van SSL-certificaten voor alle domeinen die via deze integratie zijn toegevoegd. Er is geen extra configuratie vereist.

## Problemen oplossen

### API-verbindingproblemen
- Controleer of de WP Engine-plugin actief en correct geconfigureerd is
- Als je de API-sleutel handmatig hebt gedefinieerd, controleer dan of deze correct is
- Neem contact op met WP Engine support als je problemen hebt met de API

### Domein niet toegevoegd
- Controleer de Ultimate Multisite-logs op foutmeldingen
- Controleer of het domein nog niet aan WP Engine is toegevoegd
- Zorg ervoor dat je WP Engine-plan het aantal domeinen ondersteunt dat je toevoegt

### Subdomeinproblemen
- Als subdomeinen niet werken, neem contact op met WP Engine support om een wildcard-domeinconfiguratie aan te vragen
- Controleer of je DNS-instellingen correct zijn geconfigureerd voor het hoofd‑domein en subdomeinen
