---
title: GridPane-integrasjon
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane-integrasjon

## Oversikt
GridPane er et spesialisert kontrollpanel for WordPress-hosting, bygget for profesjonelle WordPress-utviklere. Denne integrasjonen gjør det mulig å automatisk synkronisere domener og administrere SSL-sertifikater mellom Ultimate Multisite og GridPane.

## Funksjoner
- Automatisk domenesynkronisering
- Administrasjon av SSL-sertifikater
- Automatisk konfigurasjon av SUNRISE-konstanten

## Krav
Følgende konstanter må defineres i `wp-config.php`-filen din:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Oppsettinstruksjoner

### 1. Hent API-legitimasjonen din fra GridPane

1. Logg inn på GridPane-dashboardet ditt
2. Gå til «Settings» > «API»
3. Generer en API-nøkkel hvis du ikke allerede har en
4. Kopier API-nøkkelen din

### 2. Hent server- og nettsted-ID-ene dine

1. I GridPane-dashboardet ditt, gå til «Servers»
2. Velg serveren der WordPress multisite er installert
3. Noter deg server-ID-en (synlig i URL-en eller på serverdetaljsiden)
4. Gå til «Sites» og velg WordPress-nettstedet ditt
5. Noter deg nettsted-ID-en (synlig i URL-en eller på nettsteddetaljsiden)

### 3. Legg til konstanter i wp-config.php

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktiver integrasjonen

1. I WordPress-administrasjonen din, gå til Ultimate Multisite > Settings
2. Naviger til fanen «Domain Mapping»
3. Rull ned til «Host Integrations»
4. Aktiver GridPane-integrasjonen
5. Klikk «Save Changes»

## Slik fungerer det

Når et domene kobles til i Ultimate Multisite:

1. Integrasjonen sender en forespørsel til GridPane sitt API for å legge til domenet på nettstedet ditt
2. GridPane håndterer automatisk utstedelse av SSL-sertifikater
3. Når en domenekobling fjernes, vil integrasjonen fjerne domenet fra GridPane

Integrasjonen håndterer også automatisk SUNRISE-konstanten i wp-config.php-filen din, som er nødvendig for at domenekobling skal fungere riktig.

## Håndtering av SUNRISE-konstanten

En unik funksjon ved GridPane-integrasjonen er at den automatisk tilbakestiller SUNRISE-konstanten i wp-config.php for å unngå konflikter med GridPane sitt eget domenekoblingssystem. Dette sikrer at begge systemene kan fungere sammen uten problemer.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at API-nøkkelen din er riktig
- Sjekk at server- og nettsted-ID-ene dine er korrekte
- Forsikre deg om at GridPane-kontoen din har de nødvendige tillatelsene

### Problemer med SSL-sertifikater
- GridPane kan bruke noe tid på å utstede SSL-sertifikater
- Kontroller at domenene dine peker riktig til serverens IP-adresse
- Sjekk SSL-innstillingene i GridPane for nettstedet ditt

### Domene blir ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i GridPane
- Forsikre deg om at domenets DNS-oppføringer er riktig konfigurert
