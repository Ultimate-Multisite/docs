---
title: Cloudflare-integrasjon
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare-integrasjon

## Oversikt
Cloudflare er et ledende innholdsleveringsnettverk (CDN) og en sikkerhetsleverandør som bidrar til å beskytte og akselerere nettsteder. Denne integrasjonen muliggjør automatisk domenehåndtering mellom Ultimate Multisite og Cloudflare, spesielt for multisite-installasjoner med underdomener.

## Funksjoner
- Automatisk oppretting av underdomener i Cloudflare
- Støtte for proxied underdomener
- Håndtering av DNS-oppføringer
- Forbedret visning av DNS-oppføringer i Ultimate Multisite-administrasjonen

## Krav
Følgende konstanter må være definert i `wp-config.php`-filen din:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Oppsettsinstruksjoner

### 1. Hent Cloudflare API-nøkkelen din

1. Logg inn på Cloudflare-dashboardet ditt
2. Gå til "Min profil" (klikk på e-postadressen din øverst til høyre)
3. Velg "API Tokens" fra menyen
4. Opprett et nytt API-token med følgende tillatelser:
   - Zone.Zone: Les
   - Zone.DNS: Rediger
5. Kopier API-tokenet ditt

### 2. Hent Zone ID-en din

1. I Cloudflare-dashboardet ditt velger du domenet du vil bruke
2. Zone ID er synlig i "Oversikt"-fanen, i høyre sidefelt under "API"
3. Kopier Zone ID-en

### 3. Legg til konstanter i wp-config.php

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktiver integrasjonen

1. I WordPress-administrasjonen din går du til Ultimate Multisite > Innstillinger
2. Naviger til fanen "Domenekartlegging"
3. Rull ned til "Vertsintegrasjoner"
4. Aktiver Cloudflare-integrasjonen
5. Klikk på "Lagre endringer"

## Slik fungerer det

### Håndtering av underdomener

Når et nytt nettsted opprettes i en multisite-installasjon med underdomener:

1. Integrasjonen sender en forespørsel til Cloudflare sin API for å legge til en CNAME-oppføring for underdomenet
2. Underdomenet konfigureres som standard til å være proxied gjennom Cloudflare (dette kan endres med filtre)
3. Når et nettsted slettes, vil integrasjonen fjerne underdomenet fra Cloudflare

### Visning av DNS-oppføringer

Integrasjonen forbedrer visningen av DNS-oppføringer i Ultimate Multisite-administrasjonen ved å:

1. Hente DNS-oppføringer direkte fra Cloudflare
2. Vise om oppføringer er proxied eller ikke
3. Vise tilleggsinformasjon om DNS-oppføringene

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (tidligere kalt "Cloudflare for SaaS") er en Cloudflare-funksjon som lar kundene dine bruke sine egne domener med SSL på multisite-nettverket ditt. Det er den anbefalte tilnærmingen for multisite-installasjoner med domenekartlegging som bruker Cloudflare, fordi Cloudflare håndterer utstedelse og fornyelse av SSL-sertifikater for hvert egendefinerte domene automatisk.

### Hvordan det skiller seg fra standard Cloudflare-integrasjon

| | Standardintegrasjon | Cloudflare Custom Hostnames |
|---|---|---|
| **Formål** | Oppretter DNS-oppføringer automatisk for underdomener | Aktiverer egendefinerte (kartlagte) domener med Cloudflare-administrert SSL |
| **Best for** | Multisite med underdomener | Multisite med domenekartlegging |
| **SSL** | Håndteres separat | Administreres automatisk av Cloudflare |

### Sette opp Cloudflare Custom Hostnames

1. I Cloudflare-dashboardet ditt åpner du sonen for hoveddomenet ditt.
2. Gå til **SSL/TLS > Custom Hostnames**.
3. Legg til en fallback-origin som peker til serverens IP eller vertsnavn.
4. For hvert kundedomene som er kartlagt i Ultimate Multisite, legg til en Custom Hostname-oppføring i Cloudflare. Du kan automatisere dette trinnet ved å bruke Cloudflare API.
5. Cloudflare utsteder og fornyer TLS-sertifikater for hvert egendefinerte vertsnavn automatisk når kundens DNS peker mot nettverket ditt.

For fullstendig API-referanse, se [Cloudflare Custom Hostnames-dokumentasjonen](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologioppdatering
Fra og med Ultimate Multisite v2.6.1 omtales denne funksjonen som **Cloudflare Custom Hostnames** i alle plugin-innstillinger og etiketter. Tidligere versjoner brukte navnet "Cloudflare for SaaS", som er det underliggende Cloudflare-produktnavnet.
:::

## Viktige merknader

Fra og med Cloudflare sine nylige oppdateringer er wildcard-proxying nå tilgjengelig for alle kunder. Dette betyr at standard Cloudflare DNS-integrasjonen er mindre kritisk for multisite-installasjoner med underdomener enn den pleide å være, siden du ganske enkelt kan sette opp en wildcard DNS-oppføring i Cloudflare.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at API-tokenet ditt er riktig og har de nødvendige tillatelsene
- Sjekk at Zone ID-en din er riktig
- Sørg for at Cloudflare-kontoen din har de nødvendige tillatelsene

### Underdomene ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at underdomenet ikke allerede er lagt til i Cloudflare
- Sørg for at Cloudflare-planen din støtter antallet DNS-oppføringer du oppretter

### Proxying-problemer
- Hvis du ikke vil at underdomener skal være proxied, kan du bruke `wu_cloudflare_should_proxy`-filteret
- Noen funksjoner fungerer kanskje ikke riktig når de er proxied (f.eks. visse WordPress-administrasjonsfunksjoner)
- Vurder å bruke Cloudflare sine Page Rules for å omgå hurtigbufferen for administrasjonssider
