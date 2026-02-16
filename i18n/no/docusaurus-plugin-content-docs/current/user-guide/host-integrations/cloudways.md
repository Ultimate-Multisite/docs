---
title: Cloudways-integrasjon
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways-integrasjon

## Oversikt
Cloudways er en administrert skyvertplattform som lar deg distribuere WordPress-nettsteder på ulike skyleverandører som DigitalOcean, AWS, Google Cloud og flere. Denne integrasjonen gjør det mulig å automatisk synkronisere domener og administrere SSL-sertifikater mellom Ultimate Multisite og Cloudways.

## Funksjoner
- Automatisk domenesynkronisering
- Administrasjon av SSL-sertifikater
- Støtte for ekstra domener
- DNS-validering for SSL-sertifikater

## Krav
Følgende konstanter må defineres i `wp-config.php`-filen din:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Du kan også valgfritt definere:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Oppsettinstruksjoner

### 1. Hent Cloudways API-legitimasjonen din

1. Logg inn på Cloudways-dashboardet ditt
2. Gå til «Account» > «API Keys»
3. Generer en API-nøkkel hvis du ikke allerede har en
4. Kopier e-postadressen og API-nøkkelen din

### 2. Hent server- og applikasjons-ID-ene dine

1. I Cloudways-dashboardet, gå til «Servers»
2. Velg serveren der WordPress-multisite er hostet
3. Server-ID-en er synlig i URL-en: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gå til «Applications» og velg WordPress-applikasjonen din
5. App-ID-en er synlig i URL-en: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Legg til konstanter i wp-config.php

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Hvis du har ekstra domener som alltid skal inkluderes:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Aktiver integrasjonen

1. I WordPress-admin, gå til Ultimate Multisite > Settings
2. Naviger til fanen «Domain Mapping»
3. Rull ned til «Host Integrations»
4. Aktiver Cloudways-integrasjonen
5. Klikk «Save Changes»

## Hvordan det fungerer

### Domenesynkronisering

Når et domene kobles i Ultimate Multisite:

1. Integrasjonen henter alle nåværende koblede domener
2. Den legger til det nye domenet i listen (sammen med en www-versjon hvis aktuelt)
3. Den sender den komplette listen til Cloudways via API-et
4. Cloudways oppdaterer domenealiasene for applikasjonen din

Merk: Cloudways API krever at den komplette listen over domener sendes hver gang, ikke bare å legge til eller fjerne enkeltdomener.

### Administrasjon av SSL-sertifikater

Etter at domener er synkronisert:

1. Integrasjonen sjekker hvilke domener som har gyldige DNS-poster som peker til serveren din
2. Den sender en forespørsel til Cloudways om å installere Let's Encrypt SSL-sertifikater for disse domenene
3. Cloudways håndterer utstedelse og installasjon av SSL-sertifikatene

## Ekstra domener

Konstanten `WU_CLOUDWAYS_EXTRA_DOMAINS` lar deg spesifisere ekstra domener som alltid skal inkluderes ved synkronisering med Cloudways. Dette er nyttig for:

- Domener som ikke administreres av Ultimate Multisite
- Wildcard-domener (f.eks. `*.example.com`)
- Utviklings- eller staging-domener

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at e-postadressen og API-nøkkelen er korrekte
- Sjekk at server- og applikasjons-ID-ene er riktige
- Forsikre deg om at Cloudways-kontoen din har de nødvendige tillatelsene

### Problemer med SSL-sertifikater
- Cloudways krever at domener har gyldige DNS-poster som peker til serveren din før SSL-sertifikater utstedes
- Integrasjonen validerer DNS-poster før den ber om SSL-sertifikater
- Hvis SSL-sertifikater ikke blir utstedt, sjekk at domenene dine peker riktig til serverens IP-adresse

### Domene ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i Cloudways
- Forsikre deg om at Cloudways-abonnementet ditt støtter antall domener du prøver å legge til
