---
title: Hostinger (hPanel) integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## Oversigt {#overview}

Hostinger er en populær webhostingudbyder med et moderne kontrolpanel kaldet hPanel. Ultimate Multisite Hostinger integration gør automatisk domæne synkronisering mellem Ultimate Multisite og Hostingers hPanel muligt, så du automatisk kan administrere domænemappinger og underdomæner direkte fra dit WordPress admin.

## Funktioner {#features}

- Automatisk oprettelse af addon domæner i hPanel
- Automatisk oprettelse af underdomæner i hPanel (til multisite installationer med underdomæner)
- Fjernelse af domæne, når mappinger slettes
- Problemfri integration med hPanels domæne management API

## Krav {#requirements}

For at bruge Hostinger integration skal du have:

1. En Hostinger konto med adgang til hPanel
2. Et API token fra Hostinger
3. Følgende konstanter defineret i din `wp-config.php` fil:

```php
define('WU_HOSTINGER_API_TOKEN', 'din_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'din_hostinger_account_id');
```

Valgfrit kan du også definere:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Standard API-endpoint
```

## Opsætning {#setup-instructions}

### 1. Generer dit Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Log ind på din Hostinger konto og få adgang til hPanel
2. Gå til **Account Settings** → **API Tokens**
3. Klik på **Create New Token** (Opret nyt token)
4. Giv dit token et beskrivende navn (f.eks. "Ultimate Multisite")
5. Vælg de nødvendige tilladelser:
   - Domain management (Domænestyring)
   - Subdomain management (Underdomænenstyring)
6. Kopier det genererede token og gem det sikkert

### 2. Find din Account ID {#2-find-your-account-id}

1. I hPanel, gå til **Account Settings** → **Account Information**
2. Din Account ID vises på denne side
3. Kopier og gem denne ID til næste trin

### 3. Tilføj konstanter til wp-config.php {#3-add-constants-to-wp-configphp}

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_HOSTINGER_API_TOKEN', 'din din hostinger api token');
define('WU_HOSTINGER_ACCOUNT_ID', 'din din hostinger konto id');
```

Hvis din Hostinger-konto bruger et andet API-endepunkt, kan du tilpasse det:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktiver integrationen {#4-enable-the-integration}

1. I dit WordPress adminområde gå til **Ultimate Multisite > Settings**
2. Gå til fanen **Domain Mapping** (Domænemapping)
3. Scroll ned til **Host Integrations** (Host Integrationer)
4. Aktiver integrationen **Hostinger (hPanel)**
5. Klik på **Save Changes** (Gem ændringer)

## Hvordan det virker {#how-it-works}

### Addon Domæner {#addon-domains}

Når du mapper en domæne i Ultimate Multisite:

1. Sender integrationen en anmodning til Hostingers API for at tilføje domænet som et addon-domæne
2. Domænet er konfigureret til at pege på din roottid (root directory)
3. Når en domænemapping fjernes, fjerner integrationen automatisk det addon-domæne fra hPanel

### Underdomæner {#subdomains}

For multisite installationer med underdomæner, når en ny side oprettes:

1. Integrationen udtrækker underdomænen fra den fulde domæne
2. Den sender en anmodning til Hostingers API for at tilføje underdomænet
3. Underdomænet er konfigureret til at pege på din roottid (root directory)

## Vigtige bemærkninger {#important-notes}

- Integrationen bruger Hostingers REST API til at kommunikere med din konto
- Dit API token skal have de nødvendige rettigheder til domæne- og underdomæneadministration
- Integrationen håndterer ikke DNS-konfiguration; domæner skal allerede være peget mod din Hostinger-konto
- API-anmodninger foretages sikkert via HTTPS
- Hold dit API token sikkert og del det aldrig offentligt

## Fejlfinding {#troubleshooting}

### Problemer med API-forbindelse {#api-connection-issues}

### Verificering {#domain-not-added}

*   Tjek, at dit API-token er korrekt og ikke udløbet.
*   Kontroller, at din Account ID er korrekt.
*   Sørg for, at dit API-token har de nødvendige tilladelser til domæneadministration.
*   Bekræft, at din Hostinger konto er aktiv og i god stand.

### Domæne ikke tilføjet {#ssl-certificate-issues}

*   Tjek Ultimate Multisite logs efter eventuelle fejlmeddelelser.
*   Verificer, at domænet ikke allerede er tilføjet til din Hostinger konto.
*   Sørg for, at din Hostinger konto ikke har nået sin grænse for addon-domæner.
*   Bekræft, at domænet korrekt peger på dine Hostinger nameservere.

### Problemer med SSL-certifikater {#support}

*   Integrationen håndterer ikke udstedelse af SSL-certifikater.
*   Hostinger tilbyder typisk gratis SSL-certifikater via AutoSSL.
*   Du kan administrere SSL-certifikater direkte i hPanel under **SSL/TLS**.
*   Alternativt kan du bruge Let's Encrypt med Hostinger's AutoSSL-funktion.

## Support

For yderligere hjælp til integrationen med Hostinger henviser vi til:

*   [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
*   [Ultimate Multisite Documentation](/)
*   [Ultimate Multisite Support](https://ultimatemultisite.com/support)
