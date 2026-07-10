---
title: cPanel-integratie
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integratie {#cpanel-integration}

## Overzicht {#overview}
cPanel is een van de meest populaire webhosting‑controlpanelen die door veel gedeelde en dedicated hostingproviders worden gebruikt. Deze integratie maakt automatische domeinsynchronisatie tussen Ultimate Multisite en cPanel mogelijk, waardoor je domein‑aliasen en subdomeinen automatisch aan je cPanel‑account kunt toevoegen.

## Functies {#features}
- Automatische addon‑domeincreatie in cPanel
- Automatische subdomeincreatie in cPanel (voor subdomein‑multisite‑installaties)
- Domeinverwijdering wanneer mappings worden verwijderd

## Vereisten {#requirements}
De volgende constanten moeten in je `wp-config.php`‑bestand worden gedefinieerd:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optioneel kun je ook definiëren:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Installatie-instructies {#setup-instructions}

### 1. Verkrijg je cPanel‑referenties {#1-get-your-cpanel-credentials}

1. Verkrijg je cPanel‑gebruikersnaam en wachtwoord van je hostingprovider
2. Bepaal je cPanel‑host (meestal `cpanel.yourdomain.com` of `yourdomain.com:2083`)

### 2. Voeg constanten toe aan wp-config.php {#2-add-constants-to-wp-configphp}

Voeg de volgende constanten toe aan je `wp-config.php`‑bestand:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optioneel kun je de poort en de root‑directory aanpassen:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Schakel de integratie in {#3-enable-the-integration}

1. Ga in je WordPress‑admin naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad "Domain Mapping"
3. Scroll naar beneden naar "Host Integrations"
4. Schakel de cPanel‑integratie in
5. Klik op "Save Changes"

## Hoe het werkt {#how-it-works}

### Addon‑domeinen {#addon-domains}

Wanneer een domein wordt gemapt in Ultimate Multisite:

1. De integratie stuurt een verzoek naar de API van cPanel om het domein als addon‑domein toe te voegen
2. Het domein wordt geconfigureerd om naar je root‑directory te wijzen
3. Wanneer een domeinmapping wordt verwijderd, zal de integratie het addon‑domein uit cPanel verwijderen

### Subdomeinen {#subdomains}

Voor subdomein‑multisite‑installaties, wanneer een nieuwe site wordt aangemaakt:

1. De integratie haalt het subdomein‑deel uit het volledige domein
2. Het stuurt een verzoek naar de API van cPanel om het subdomein toe te voegen
3. Het subdomein wordt geconfigureerd om naar je root‑directory te wijzen

## Belangrijke opmerkingen {#important-notes}

- De integratie gebruikt cPanel's API2 om te communiceren met je cPanel‑account
- Je cPanel‑account moet de rechten hebben om addon‑domeinen en subdomeinen toe te voegen
- Sommige hostingproviders kunnen het aantal addon‑domeinen of subdomeinen dat je kunt aanmaken beperken
- De integratie behandelt geen DNS‑configuratie; je moet nog steeds je domeinen laten wijzen naar het IP‑adres van je server

## Problemen oplossen {#troubleshooting}

### Problemen met API‑verbinding {#api-connection-issues}
- Controleer of je cPanel‑gebruikersnaam en wachtwoord correct zijn
- Controleer of je cPanel‑host correct en bereikbaar is
- Zorg ervoor dat je cPanel‑account de benodigde rechten heeft
- Probeer de volledige URL voor de host te gebruiken (bijv. `https://cpanel.yourdomain.com`)

### Domein niet toegevoegd {#domain-not-added}
- Controleer de logs van Ultimate Multisite op foutmeldingen
- Controleer of het domein nog niet aan cPanel is toegevoegd
- Zorg ervoor dat je cPanel‑account zijn limiet voor addon‑domeinen of subdomeinen niet heeft bereikt

### SSL‑certificaatproblemen {#ssl-certificate-issues}
- De integratie behandelt geen uitgifte van SSL‑certificaten
- Je moet cPanel's SSL/TLS‑hulpmiddelen of de AutoSSL‑functie gebruiken om SSL‑certificaten voor je domeinen uit te geven
- Je kunt ook een dienst zoals Let's Encrypt met cPanel's AutoSSL gebruiken
