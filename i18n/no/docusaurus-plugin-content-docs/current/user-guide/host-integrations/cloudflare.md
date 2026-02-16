---
title: Cloudflare-integrasjon
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare-integrasjon

## Oversikt
Cloudflare er en ledende leverandør av innholdsleveringsnettverk (CDN) og sikkerhetstjenester som beskytter og akselererer nettsteder. Denne integrasjonen gjør det mulig å automatisk administrere domener mellom Ultimate Multisite og Cloudflare, spesielt for multisite-installasjoner med underdomener.

## Funksjoner
- Automatisk oppretting av underdomener i Cloudflare
- Støtte for underdomener via proxy
- Administrasjon av DNS-poster
- Forbedret visning av DNS-poster i Ultimate Multisite-administrasjonspanelet

## Krav
Følgende konstanter må defineres i `wp-config.php`-filen din:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Oppsettsinstruksjoner

### 1. Hent Cloudflare API-nøkkelen din

1. Logg inn på Cloudflare-dashboardet ditt
2. Gå til «Min profil» (klikk på e-postadressen din øverst til høyre)
3. Velg «API Tokens» fra menyen
4. Opprett et nytt API-token med følgende tillatelser:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopier API-tokenet ditt

### 2. Hent Zone ID-en din

1. I Cloudflare-dashboardet velger du domenet du vil bruke
2. Zone ID-en er synlig i «Overview»-fanen, i høyre sidefelt under «API»
3. Kopier Zone ID-en

### 3. Legg til konstanter i wp-config.php

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktiver integrasjonen

1. I WordPress-administrasjonspanelet går du til Ultimate Multisite > Settings
2. Naviger til «Domain Mapping»-fanen
3. Rull ned til «Host Integrations»
4. Aktiver Cloudflare-integrasjonen
5. Klikk «Save Changes»

## Slik fungerer det

### Administrasjon av underdomener

Når et nytt nettsted opprettes i en multisite-installasjon med underdomener:

1. Integrasjonen sender en forespørsel til Cloudflares API for å legge til en CNAME-post for underdomenet
2. Underdomenet konfigureres som standard til å gå via Cloudflare-proxy (dette kan endres med filtre)
3. Når et nettsted slettes, fjerner integrasjonen underdomenet fra Cloudflare

### Visning av DNS-poster

Integrasjonen forbedrer visningen av DNS-poster i Ultimate Multisite-administrasjonspanelet ved å:

1. Hente DNS-poster direkte fra Cloudflare
2. Vise om poster går via proxy eller ikke
3. Vise tilleggsinformasjon om DNS-postene

## Viktige merknader

Etter Cloudflares nylige oppdateringer er wildcard-proxying nå tilgjengelig for alle kunder. Dette betyr at Cloudflare-integrasjonen er mindre kritisk for multisite-installasjoner med underdomener enn tidligere, siden du enkelt kan sette opp en wildcard DNS-post i Cloudflare.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at API-tokenet ditt er korrekt og har de nødvendige tillatelsene
- Sjekk at Zone ID-en din er korrekt
- Sørg for at Cloudflare-kontoen din har de nødvendige tillatelsene

### Underdomene blir ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at underdomenet ikke allerede er lagt til i Cloudflare
- Sørg for at Cloudflare-abonnementet ditt støtter antallet DNS-poster du oppretter

### Problemer med proxy
- Hvis du ikke vil at underdomener skal gå via proxy, kan du bruke filteret `wu_cloudflare_should_proxy`
- Noen funksjoner fungerer kanskje ikke riktig via proxy (f.eks. visse WordPress-administrasjonsfunksjoner)
- Vurder å bruke Cloudflares Page Rules for å omgå hurtigbufferen for administrasjonssider
