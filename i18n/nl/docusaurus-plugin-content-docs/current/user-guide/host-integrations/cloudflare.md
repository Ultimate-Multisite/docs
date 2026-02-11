---
title: Cloudflare-integratie
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare Integratie

## Overzicht
Cloudflare is een toonaangevend content delivery network (CDN) en beveiligingsprovider die helpt bij het beschermen en versnellen van websites. Deze integratie maakt automatisch domeinbeheer mogelijk tussen Ultimate Multisite en Cloudflare, met name voor subdomein-multisite-installaties.

## Functies
- Automatische subdomeincreatie in Cloudflare
- Ondersteuning voor proxied subdomeinen
- DNS-recordbeheer
- Verbeterde weergave van DNS-records in de Ultimate Multisite admin

## Vereisten
De volgende constanten moeten gedefinieerd zijn in uw `wp-config.php` bestand:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Installatie-instructies

### 1. Verkrijg uw Cloudflare API Key

1. Log in op uw Cloudflare dashboard
2. Ga naar "My Profile" (klik op uw e-mailadres in de rechterbovenhoek)
3. Selecteer "API Tokens" in het menu
4. Maak een nieuwe API-token met de volgende permissies:
   - Zone.Zone: Lezen
   - Zone.DNS: Bewerken
5. Kopieer uw API-token

### 2. Verkrijg uw Zone ID

1. In uw Cloudflare dashboard, selecteer het domein dat u wilt gebruiken
2. De Zone ID is zichtbaar in het tabblad "Overview", in de rechterzijbalk onder "API"
3. Kopieer de Zone ID

### 3. Voeg constanten toe aan wp-config.php

Voeg de volgende constanten toe aan uw `wp-config.php` bestand:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Schakel de integratie in

1. In uw WordPress admin, ga naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad "Domain Mapping"
3. Scroll naar beneden naar "Host Integrations"
4. Schakel de Cloudflare integratie in
5. Klik op "Save Changes"

## Hoe het werkt

### Subdomeinbeheer

Wanneer een nieuwe site wordt aangemaakt in een subdomein-multisite-installatie:

1. De integratie stuurt een verzoek naar de Cloudflare API om een CNAME-record toe te voegen voor het subdomein
2. Het subdomein wordt standaard geproxied via Cloudflare (dit kan worden gewijzigd met filters)
3. Wanneer een site wordt verwijderd, zal de integratie het subdomein uit Cloudflare verwijderen

### DNS-recordweergave

De integratie verbetert de DNS-recordweergave in de Ultimate Multisite admin door:

1. DNS-records rechtstreeks ophalen van Cloudflare
2. Weergeven of records geproxied zijn of niet
3. Extra informatie tonen over de DNS-records

## Belangrijke opmerkingen

Vanaf de recente updates van Cloudflare is wildcard proxying nu beschikbaar voor alle klanten. Dit betekent dat de Cloudflare integratie minder cruciaal is voor subdomein-multisite-installaties dan voorheen, omdat u eenvoudig een wildcard DNS-record kunt instellen in Cloudflare.

## Probleemoplossing

### API-verbindingproblemen
- Controleer of uw API-token correct is en de nodige permissies heeft
- Controleer of uw Zone ID correct is
- Zorg ervoor dat uw Cloudflare account de nodige permissies heeft

### Subdomein niet toegevoegd
- Controleer de Ultimate Multisite logs op foutmeldingen
- Controleer of het subdomein nog niet aan Cloudflare is toegevoegd
- Zorg ervoor dat uw Cloudflare plan het aantal DNS-records ondersteunt dat u aanmaakt

### Proxyproblemen
- Als u niet wilt dat subdomeinen geproxied worden, kunt u de `wu_cloudflare_should_proxy` filter gebruiken
- Sommige functies werken mogelijk niet correct wanneer ze geproxied zijn (bijv. bepaalde WordPress admin functies)
- Overweeg het gebruik van Cloudflare's Page Rules om de cache voor admin pagina's te omzeilen
