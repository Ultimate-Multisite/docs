---
title: ServerPilot-integrasjon
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot-integrasjon

## Oversikt
ServerPilot er en skytjeneste for å hoste WordPress og andre PHP-nettsteder på servere hos DigitalOcean, Amazon, Google eller andre serverleverandører. Denne integrasjonen gjør det mulig å automatisk synkronisere domener og administrere SSL-sertifikater mellom Ultimate Multisite og ServerPilot.

## Funksjoner
- Automatisk domenesynkronisering
- Administrasjon av SSL-sertifikater med Let's Encrypt
- Automatisk fornyelse av SSL-sertifikater

## Krav
Følgende konstanter må defineres i `wp-config.php`-filen din:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Oppsettsinstruksjoner

### 1. Hent API-legitimasjonen din fra ServerPilot

1. Logg inn på ServerPilot-dashboardet ditt
2. Gå til «Account» > «API»
3. Opprett en ny API-nøkkel hvis du ikke allerede har en
4. Kopier Client ID og API Key

### 2. Hent App ID-en din

1. I ServerPilot-dashboardet går du til «Apps»
2. Velg appen der WordPress multisite er hostet
3. App ID-en er synlig i URL-en: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Legg til konstantene i wp-config.php

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktiver integrasjonen

1. I WordPress-admin går du til Ultimate Multisite > Settings
2. Naviger til fanen «Domain Mapping»
3. Rull ned til «Host Integrations»
4. Aktiver ServerPilot-integrasjonen
5. Klikk «Save Changes»

## Slik fungerer det

### Domenesynkronisering

Når et domene blir koblet i Ultimate Multisite:

1. Integrasjonen henter den gjeldende listen over domener fra ServerPilot
2. Den legger til det nye domenet i listen (sammen med en www-versjon hvis aktuelt)
3. Den sender den oppdaterte listen til ServerPilot via API-et
4. ServerPilot oppdaterer domenelisten for applikasjonen din

### Administrasjon av SSL-sertifikater

Etter at domenene er synkronisert:

1. Integrasjonen aktiverer automatisk AutoSSL for applikasjonen din
2. ServerPilot håndterer utstedelse og installasjon av SSL-sertifikater ved hjelp av Let's Encrypt
3. ServerPilot håndterer også automatisk fornyelse av SSL-sertifikater

## Verifisering av SSL-sertifikater

Integrasjonen er konfigurert til å øke antall verifiseringsforsøk for SSL-sertifikater hos ServerPilot, ettersom det kan ta litt tid før ServerPilot utsteder og installerer SSL-sertifikater. Som standard prøver den opptil 5 ganger, men dette kan justeres ved hjelp av filtre.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at Client ID og API Key er korrekte
- Sjekk at App ID-en er riktig
- Forsikre deg om at ServerPilot-kontoen din har de nødvendige tillatelsene

### Problemer med SSL-sertifikater
- ServerPilot krever at domener har gyldige DNS-oppføringer som peker til serveren din før SSL-sertifikater kan utstedes
- Hvis SSL-sertifikater ikke blir utstedt, sjekk at domenene dine peker korrekt til serverens IP-adresse
- Det kan ta litt tid før ServerPilot utsteder og installerer SSL-sertifikater (vanligvis 5–15 minutter)

### Domenet blir ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i ServerPilot
- Forsikre deg om at ServerPilot-abonnementet ditt støtter antall domener du prøver å legge til

### Fjerning av domener
- For øyeblikket tilbyr ikke ServerPilot-API-et en måte å fjerne enkeltdomener på
- Når en domenemapping fjernes i Ultimate Multisite, vil integrasjonen oppdatere domenelisten i ServerPilot for å utelate det fjernede domenet
