---
title: RunCloud-integrasjon
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud-integrasjon

## Oversikt
RunCloud er en skybasert plattform for serveradministrasjon som lar deg enkelt distribuere og administrere webapplikasjoner på dine egne skyservere. Denne integrasjonen gjør det mulig å automatisk synkronisere domener og håndtere SSL-sertifikater mellom Ultimate Multisite og RunCloud.

## Funksjoner
- Automatisk domenesynkronisering
- Håndtering av SSL-sertifikater
- Fjerning av domener når tilordninger slettes

## Krav
Følgende konstanter må defineres i `wp-config.php`-filen din:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Oppsettinstruksjoner

### 1. Hent API-legitimasjonen din fra RunCloud

1. Logg inn på RunCloud-dashbordet ditt
2. Gå til «Brukerprofil» (klikk på profilbildet ditt øverst i høyre hjørne)
3. Velg «API» fra menyen
4. Klikk på «Generate API Key» hvis du ikke allerede har en
5. Kopier API-nøkkelen og API-hemmeligheten din

### 2. Hent server- og app-ID-ene dine

1. I RunCloud-dashbordet ditt, gå til «Servers»
2. Velg serveren der WordPress-multisite er installert
3. Server-ID-en er synlig i URL-en: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gå til «Web Applications» og velg WordPress-applikasjonen din
5. App-ID-en er synlig i URL-en: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Legg til konstanter i wp-config.php

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktiver integrasjonen

1. I WordPress-administrasjonen din, gå til Ultimate Multisite > Settings
2. Naviger til fanen «Domain Mapping»
3. Bla ned til «Host Integrations»
4. Aktiver RunCloud-integrasjonen
5. Klikk på «Save Changes»

## Hvordan det fungerer

Når et domene tilordnes i Ultimate Multisite:

1. Integrasjonen sender en forespørsel til RunClouds API for å legge til domenet i applikasjonen din
2. Hvis domenet blir lagt til, vil integrasjonen også redistribuere SSL-sertifikater
3. Når en domenetilordning fjernes, vil integrasjonen fjerne domenet fra RunCloud

For underdomene-installasjoner vil integrasjonen automatisk håndtere opprettelsen av underdomener i RunCloud når nye nettsteder legges til nettverket ditt.

## Feilsøking

### API-tilkoblingsproblemer
- Kontroller at API-legitimasjonen din er korrekt
- Sjekk at server- og app-ID-ene dine er riktige
- Forsikre deg om at RunCloud-kontoen din har de nødvendige tillatelsene

### SSL-sertifikatproblemer
- RunCloud kan bruke noe tid på å utstede SSL-sertifikater
- Kontroller at domenene dine peker riktig til serverens IP-adresse
- Sjekk SSL-innstillingene i RunCloud for applikasjonen din

### Domene ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i RunCloud
- Forsikre deg om at RunCloud-planen din støtter flere domener
