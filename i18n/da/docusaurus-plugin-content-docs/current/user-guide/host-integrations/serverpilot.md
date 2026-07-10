---
title: ServerPilot integration
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration {#serverpilot-integration}

## Oversigt {#overview}
ServerPilot er en cloud-service til hosting af WordPress og andre PHP-websteder på servere hos DigitalOcean, Amazon, Google eller enhver anden serverudbyder. Denne integration muliggør automatisk domænesynkronisering og styring af SSL-certifikater mellem Ultimate Multisite og ServerPilot.

## Funktioner {#features}
- Automatisk domænesynkronisering
- Styring af SSL-certifikater med Let's Encrypt
- Automatisk fornyelse af SSL

## Krav {#requirements}
Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'din_client_id');
define('WU_SERVER_PILOT_API_KEY', 'din_api_key');
define('WU_SERVER_PILOT_APP_ID', 'din_app_id');
```

## Opsætning {#setup-instructions}

### 1. Få dine ServerPilot API-oplysninger {#1-get-your-serverpilot-api-credentials}

1. Log ind på dit ServerPilot dashboard
2. Gå til "Account" > "API"
3. Opret en ny API-nøgle, hvis du ikke allerede har en
4. Kopier din Client ID og API Key

### 2. Få din App ID {#2-get-your-app-id}

1. I dit ServerPilot dashboard gå til "Apps"
2. Vælg appen, hvor dit WordPress multisite er hostet
3. App ID'et ses i URL'en: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Tilføj konstanter til wp-config.php {#3-add-constants-to-wp-configphp}

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'din_client_id');
define('WU_SERVER_PILOT_API_KEY', 'din_api_key');
define('WU_SERVER_PILOT_APP_ID', 'din_app_id');
```

### 4. Aktiver integrationen {#4-enable-the-integration}

1. I dit WordPress admin, gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping" (Domænemapping)
3. Scroll ned til "Host Integrations" (Hosterintegrationer)
4. Aktiver ServerPilot-integrationen
5. Klik på "Save Changes" (Gem ændringer)

## Hvordan det virker {#how-it-works}

### Domænesynkronisering {#domain-syncing}

Når et domæne er kortlagt i Ultimate Multisite:

Integrationen henter den aktuelle liste over domæner fra ServerPilot
2. Den tilføjer det nye domæne til listen (med en www-version, hvis relevant)
3. Den sender den opdaterede liste til ServerPilot via API
4. ServerPilot opdaterer domænelisten for din applikation

### SSL Certifikatstyring {#ssl-certificate-management}

Efter at domæner er synkroniseret:

1. Integrationen aktiverer automatisk AutoSSL for din applikation
2. ServerPilot håndterer udstedelse og installation af SSL-certifikater ved hjælp af Let's Encrypt
3. ServerPilot håndterer også automatisk fornyelse af SSL-certifikater

## SSL Certifikatverifikation {#ssl-certificate-verification}

Integrationen er konfigureret til at øge antallet af forsøg på SSL-certifikatverifikation for ServerPilot, da det kan tage tid for ServerPilot at udstede og installere SSL-certifikater. Som standard vil den prøve op til 5 gange, men dette kan justeres ved hjælp af filtre.

## Fejlfinding {#troubleshooting}

### Problemer med API-forbindelse {#api-connection-issues}
- Tjek, at dit Client ID og API Key er korrekte
- Kontroller, om dit App ID er korrekt
- Sørg for, at din ServerPilot konto har de nødvendige rettigheder

### SSL Certifikatproblemer {#ssl-certificate-issues}
- ServerPilot kræver, at domænerne har gyldige DNS-opslag, der peger på din server, før SSL-certifikater udstedes
- Hvis SSL-certifikater ikke udstedes, tjek, at dine domæner korrekt peger på din servers IP-adresse
- Det kan tage lidt tid for ServerPilot at udstede og installere SSL-certifikater (typisk 5-15 minutter)

### Domæne tilføjet {#domain-not-added}
- Tjek Ultimate Multisite logs efter eventuelle fejlmeddelelser
- Bekræft, at domænet ikke allerede er tilføjet til ServerPilot
- Sørg for, at din ServerPilot plan understøtter antallet af domæner, du tilføjer

### Fjernelse af domæne {#domain-removal}
- I øjeblikket giver ServerPilot API'en ikke mulighed for at fjerne individuelle domæner.
- Når en domænemapping fjernes i Ultimate Multisite, vil integrationen opdatere listen over domæner i ServerPilot til at udelukke den fjernede domæne.
