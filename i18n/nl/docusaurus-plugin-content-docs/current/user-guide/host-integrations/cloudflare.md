---
title: Cloudflare-integratie
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare-integratie {#cloudflare-integration}

## Overzicht {#overview}
Cloudflare is een toonaangevend contentdeliverynetwerk (CDN) en beveiligingsprovider die helpt websites te beschermen en te versnellen. Deze integratie maakt automatisch domeinbeheer mogelijk tussen Ultimate Multisite en Cloudflare, met name voor subdomein-multisite-installaties.

## Functies {#features}
- Automatische aanmaak van subdomeinen in Cloudflare
- Ondersteuning voor geproxiede subdomeinen
- Beheer van DNS-records
- Verbeterde weergave van DNS-records in de Ultimate Multisite admin

## Vereisten {#requirements}
De volgende constanten moeten worden gedefinieerd in je `wp-config.php`-bestand:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Installatie-instructies {#setup-instructions}

### 1. Verkrijg je Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. Log in op je Cloudflare Dashboard
2. Ga naar "Mijn profiel" (klik op je e-mail in de rechterbovenhoek)
3. Selecteer "API-tokens" in het menu
4. Maak een nieuw API-token aan met de volgende rechten:
   - Zone.Zone: Lezen
   - Zone.DNS: Bewerken
5. Kopieer je API-token

### 2. Verkrijg je Zone ID {#2-get-your-zone-id}

1. Selecteer in je Cloudflare Dashboard het domein dat je wilt gebruiken
2. De Zone ID is zichtbaar op het tabblad "Overzicht", in de rechterzijbalk onder "API"
3. Kopieer de Zone ID

### 3. Voeg constanten toe aan wp-config.php {#3-add-constants-to-wp-configphp}

Voeg de volgende constanten toe aan je `wp-config.php`-bestand:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Schakel de integratie in {#4-enable-the-integration}

1. Ga in je WordPress admin naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad "Domeinkoppeling"
3. Scrol omlaag naar "Hostintegraties"
4. Schakel de Cloudflare-integratie in
5. Klik op "Wijzigingen opslaan"

## Hoe het werkt {#how-it-works}

### Subdomeinbeheer {#subdomain-management}

Wanneer een nieuwe site wordt aangemaakt in een subdomein-multisite-installatie:

1. De integratie stuurt een verzoek naar de API van Cloudflare om een CNAME-record voor het subdomein toe te voegen
2. Het subdomein wordt standaard geconfigureerd om via Cloudflare te worden geproxied (dit kan met filters worden gewijzigd)
3. Wanneer een site wordt verwijderd, verwijdert de integratie het subdomein uit Cloudflare

### Weergave van DNS-records {#dns-record-display}

De integratie verbetert de weergave van DNS-records in de Ultimate Multisite admin door:

1. DNS-records rechtstreeks uit Cloudflare op te halen
2. Weer te geven of records geproxied zijn of niet
3. Aanvullende informatie over de DNS-records te tonen

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (voorheen "Cloudflare for SaaS" genoemd) is een Cloudflare-functie waarmee je klanten hun eigen domeinen met SSL op je multisite-netwerk kunnen gebruiken. Dit is de aanbevolen aanpak voor domeingekoppelde multisite-installaties die Cloudflare gebruiken, omdat Cloudflare de uitgifte en verlenging van SSL-certificaten voor elk aangepast domein automatisch beheert.

### Waarin dit verschilt van de standaard Cloudflare-integratie {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standaardintegratie | Cloudflare Custom Hostnames |
|---|---|---|
| **Doel** | Maakt automatisch DNS-records voor subdomeinen aan | Maakt aangepaste (gekoppelde) domeinen mogelijk met door Cloudflare beheerde SSL |
| **Het meest geschikt voor** | Subdomein-multisite | Domeingekoppelde multisite |
| **SSL** | Afzonderlijk afgehandeld | Automatisch beheerd door Cloudflare |

### Cloudflare Custom Hostnames instellen {#setting-up-cloudflare-custom-hostnames}

1. Open in je Cloudflare Dashboard de zone voor je hoofddomein.
2. Ga naar **SSL/TLS > Custom Hostnames**.
3. Voeg een fallback origin toe die verwijst naar het IP-adres of de hostnaam van je server.
4. Voeg voor elk klantdomein dat in Ultimate Multisite is gekoppeld een Custom Hostname-vermelding toe in Cloudflare. Je kunt deze stap automatiseren met de Cloudflare API.
5. Cloudflare geeft automatisch TLS-certificaten uit en verlengt deze voor elke aangepaste hostnaam zodra de DNS van de klant naar je netwerk verwijst.

Zie voor de volledige API-referentie de [documentatie van Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologie-update
Vanaf Ultimate Multisite v2.6.1 wordt deze functie in alle plugin-instellingen en labels aangeduid als **Cloudflare Custom Hostnames**. Eerdere versies gebruikten de naam "Cloudflare for SaaS", wat de naam is van het onderliggende Cloudflare-product.
:::

## Belangrijke opmerkingen {#important-notes}

Sinds de recente updates van Cloudflare is wildcard-proxying nu beschikbaar voor alle klanten. Dit betekent dat de standaard Cloudflare DNS-integratie minder essentieel is voor subdomein-multisite-installaties dan vroeger, omdat je eenvoudig een wildcard-DNS-record in Cloudflare kunt instellen.

## Probleemoplossing {#troubleshooting}

### Problemen met de API-verbinding {#api-connection-issues}
- Controleer of je API-token correct is en de benodigde rechten heeft
- Controleer of je Zone ID correct is
- Zorg ervoor dat je Cloudflare Account de benodigde rechten heeft

### Subdomein niet toegevoegd {#subdomain-not-added}
- Controleer de Ultimate Multisite logs op foutmeldingen
- Controleer of het subdomein niet al aan Cloudflare is toegevoegd
- Zorg ervoor dat je Cloudflare plan het aantal DNS-records ondersteunt dat je aanmaakt

### Proxyproblemen {#proxying-issues}
- Als je niet wilt dat subdomeinen worden geproxied, kun je het `wu_cloudflare_should_proxy`-filter gebruiken
- Sommige functies werken mogelijk niet correct wanneer ze geproxied zijn (bijv. bepaalde WordPress admin-functies)
- Overweeg Cloudflare's Page Rules te gebruiken om de cache voor admin-pagina's te omzeilen
