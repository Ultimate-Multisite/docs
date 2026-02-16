---
title: Closte-integrasjon
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte-integrasjon

## Oversikt
Closte er en administrert WordPress-hostingplattform bygget på Google Cloud-infrastruktur. Denne integrasjonen gjør det mulig å automatisk synkronisere domener og håndtere SSL-sertifikater mellom Ultimate Multisite og Closte.

## Funksjoner
- Automatisk domenesynkronisering
- Håndtering av SSL-sertifikater
- Støtte for wildcard-domener
- Ingen konfigurasjon nødvendig hvis du kjører på Closte

## Krav
Følgende konstant må være definert i `wp-config.php`-filen din hvis du bruker Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Denne konstanten er vanligvis allerede definert hvis du hoster på Closte.

## Oppsettsinstruksjoner

### 1. Bekreft Closte API-nøkkelen din

Hvis du hoster på Closte, skal `CLOSTE_CLIENT_API_KEY`-konstanten allerede være definert i `wp-config.php`-filen din. Du kan bekrefte dette ved å sjekke `wp-config.php`-filen din.

### 2. Aktiver integrasjonen

1. I WordPress-administrasjonspanelet går du til Ultimate Multisite > Settings
2. Gå til fanen "Domain Mapping"
3. Rull ned til "Host Integrations"
4. Aktiver Closte-integrasjonen
5. Klikk på "Save Changes"

## Hvordan det fungerer

Når et domene blir tilknyttet i Ultimate Multisite:

1. Integrasjonen sender en forespørsel til Clostes API for å legge til domenet i applikasjonen din
2. Closte håndterer automatisk utstedelse av SSL-sertifikater
3. Når en domenetilknytning fjernes, vil integrasjonen fjerne domenet fra Closte

Integrasjonen fungerer også sammen med DNS-sjekkintervallinnstillingen i Ultimate Multisite, slik at du kan konfigurere hvor ofte systemet sjekker for DNS-propagering og utstedelse av SSL-sertifikater.

## Oppretting av domeneoppføringer

Denne integrasjonen sørger for at en domeneoppføring opprettes automatisk når et nettsted opprettes eller dupliseres. Dette er spesielt viktig for Closte-integrasjonen, ettersom opprettelsen av domeneoppføringen utløser Closte API til å opprette domenet og SSL-sertifikatet.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at Closte API-nøkkelen din er riktig
- Sørg for at Closte-kontoen din har de nødvendige tillatelsene

### Problemer med SSL-sertifikater
- Closte kan bruke litt tid på å utstede SSL-sertifikater (vanligvis 5–10 minutter)
- Kontroller at domenene dine peker riktig mot Closte-serverens IP-adresse
- Sjekk DNS-oppføringene for domenet ditt for å sikre at de er riktig konfigurert

### Domene ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i Closte
- Sørg for at domenets DNS-oppføringer er riktig konfigurert

### DNS-sjekkintervall
- Hvis det tar for lang tid å utstede SSL-sertifikater, kan du justere DNS-sjekkintervallet i Domain Mapping-innstillingene
- Standardintervallet er 300 sekunder (5 minutter), men du kan sette det så lavt som 10 sekunder for raskere sjekking under testing
