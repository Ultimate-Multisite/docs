---
title: WP Engine-integrasjon
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine-integrasjon

## Oversikt
WP Engine er en premium administrert WordPress-hostingplattform som gir optimalisert ytelse, sikkerhet og skalerbarhet for WordPress-nettsteder. Denne integrasjonen muliggjør automatisk domenesynkronisering mellom Ultimate Multisite og WP Engine.

## Funksjoner
- Automatisk domenesynkronisering
- Støtte for underdomener i multisite-installasjoner
- Sømløs integrasjon med WP Engines eksisterende systemer

## Krav
Integrasjonen oppdager automatisk om du bruker WP Engine som host, og benytter den innebygde WP Engine API-en. Ingen ekstra konfigurasjon er nødvendig hvis WP Engine-pluginen er aktiv og riktig konfigurert.

Hvis du likevel trenger å konfigurere integrasjonen manuelt, kan du definere en av disse konstantene i `wp-config.php`-filen din:

```php
define('WPE_APIKEY', 'your_api_key'); // Foretrukket metode
// ELLER
define('WPE_API', 'your_api_key'); // Alternativ metode
```

## Oppsettsinstruksjoner

### 1. Verifiser WP Engine-pluginen

Hvis du bruker WP Engine som host, skal WP Engine-pluginen allerede være installert og aktivert. Kontroller at:

1. WP Engine-pluginen er aktiv
2. Filen `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` finnes

### 2. Aktiver integrasjonen

1. I WordPress-administrasjonspanelet, gå til Ultimate Multisite > Innstillinger
2. Naviger til fanen «Domenetilordning»
3. Bla ned til «Hostintegrasjoner»
4. Aktiver WP Engine-integrasjonen
5. Klikk «Lagre endringer»

## Hvordan det fungerer

### Domenesynkronisering

Når et domene tilordnes i Ultimate Multisite:

1. Integrasjonen bruker WP Engine API-en til å legge til domenet i WP Engine-installasjonen din
2. WP Engine håndterer domenekonfigurasjonen og utstedelse av SSL-sertifikat
3. Når en domenetilordning fjernes, vil integrasjonen fjerne domenet fra WP Engine

### Støtte for underdomener

For multisite-installasjoner med underdomener:

1. Integrasjonen legger til hvert underdomene i WP Engine når et nytt nettsted opprettes
2. WP Engine håndterer konfigurasjonen av underdomenet
3. Når et nettsted slettes, vil integrasjonen fjerne underdomenet fra WP Engine

## Viktig informasjon

### Wildcard-domener

For multisite-installasjoner med underdomener anbefales det å kontakte WP Engine-support for å be om en wildcard-domenekonfigurasjon. Dette gjør at alle underdomener fungerer automatisk uten at du må legge til hvert enkelt manuelt.

### SSL-sertifikater

WP Engine håndterer automatisk utstedelse og fornyelse av SSL-sertifikater for alle domener som legges til gjennom denne integrasjonen. Ingen ekstra konfigurasjon er nødvendig.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at WP Engine-pluginen er aktiv og riktig konfigurert
- Hvis du har definert API-nøkkelen manuelt, sjekk at den er korrekt
- Kontakt WP Engine-support hvis du har problemer med API-en

### Domenet ble ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i WP Engine
- Forsikre deg om at WP Engine-abonnementet ditt støtter antallet domener du prøver å legge til

### Problemer med underdomener
- Hvis underdomener ikke fungerer, kontakt WP Engine-support for å be om en wildcard-domenekonfigurasjon
- Kontroller at DNS-innstillingene dine er riktig konfigurert for hoveddomenet og underdomenene
