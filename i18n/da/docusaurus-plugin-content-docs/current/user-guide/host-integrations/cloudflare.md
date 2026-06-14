---
title: Cloudflare integration
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Oversigt
Cloudflare er en førende content delivery network (CDN) og sikkerhedsudbyder, der hjælper med at beskytte og fremskynde websites. Denne integration muliggør automatisk domæneadministration mellem Ultimate Multisite og Cloudflare, især for subdomain multisite installationer.

## Funktioner
- Automatisk oprettelse af subdomæner i Cloudflare
- Understøttelse af proxede subdomæner
- DNS-recordstyring
- Forbedret visning af DNS-records i Ultimate Multisite admin

## Krav
Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_CLOUDFLARE_API_KEY', 'din_api_nøgle');
define('WU_CLOUDFLARE_ZONE_ID', 'din_zone_id');
```

## Opsætning

### 1. Få din Cloudflare API-nøgle

1. Log ind på dit Cloudflare dashboard
2. Gå til "My Profile" (klik på din e-mail i øverste højre hjørne)
3. Vælg "API Tokens" fra menuen
4. Opret en ny API-token med følgende tilladelser:
   - Zone.Zone: Læsning (Read)
   - Zone.DNS: Redigering (Edit)
5. Kopier din API-token

### 2. Få din Zone ID

1. I dit Cloudflare dashboard vælg domænet, du vil bruge
2. Zone ID'et er synligt i fanen "Overview", i højre sidefelt under "API"
3. Kopier Zone ID'et

### 3. Tilføj konstanter til wp-config.php

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_CLOUDFLARE_API_KEY', 'din_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'din_zone_id');
```

### 4. Aktiver integrationen

1. I din WordPress admin, gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping"
3. Scroll ned til "Host Integrations"
4. Aktiver Cloudflare-integrationen
5. Klik på "Save Changes" (Gem ændringer)

## Hvordan det virker

### Subdomæneadministration

Når en ny side oprettes i en subdomain multisite installation:

1. Integrationen sender en anmodning til Cloudflares API for at tilføje en CNAME-indgang for underdomænet
2. Underdomænet er konfigureret til som standard til at blive proxied gennem Cloudflare (dette kan ændres med filtre)
3. Når en side slettes, vil integrationen fjerne underdomænet fra Cloudflare

### DNS-indgangsvisning

Integrationen forbedrer visningen af DNS-indgange i Ultimate Multisite admin ved at:

1. Hente DNS-indgange direkte fra Cloudflare
2. Vise om indgangene er proxied eller ej
3. Vise yderligere information om DNS-indgangene

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (tidligere kaldet "Cloudflare for SaaS") er en funktion i Cloudflare, der giver dine kunder mulighed for at bruge deres egne domæner med SSL på dit multisite-netværk. Det anbefalede tilgang for multisite-installationer, der er kortlagt til domæner og bruger Cloudflare, fordi Cloudflare automatisk administrerer udstedelse og fornyelse af SSL-certifikatet for hver custom domæne.

### Hvordan det adskiller sig fra standard Cloudflare integration

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Formål** | Automatisk opretter DNS-indgange for underdomæner | Muliggør custom (kortlagte) domæner med Cloudflare-styret SSL |
| **Bedst til** | Multisite baseret på underdomæner | Multisite kortlagt til domæner |
| **SSL** | Håndteres separat | Administreres automatisk af Cloudflare |

### Opsætning af Cloudflare Custom Hostnames

1. I dit i din Cloudflare dashboard, å åbne zonen for din hoveddomæne.
2. Gå til **SSL/TLS > Custom Hostnames**.
3. Tilføj en fallback origin, der peger på din servers IP eller hostname.
4. For hver kundedomenet, der er kortlagt i Ultimate Multisite, skal du tilføje en Custom Hostname-indgang i Cloudflare. Du kan automatisere dette trin ved hjælp af Cloudflare API'en.
5. Cloudflare udsteder og genfornyer TLS-certifikaterne for hver custom hostname automatisk, når kundens DNS peger på dit netværk.

For fuld API-reference ses [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologiopdatering
Fra Ultimate Multisite v2.6.1 kaldes denne funktion nu **Cloudflare Custom Hostnames** i alle plugin-indstillinger og labels. Tidligere versioner brugte navnet "Cloudflare for SaaS", som er det underliggende Cloudflare produktnavn.
:::

## Vigtige bemærkninger

Fra Cloudflares seneste opdateringer er wildcard proxying nu tilgængeligt for alle kunder. Det betyder, at den standard Cloudflare DNS-integration er mindre kritisk for subdomain multisite installationer end før, da du blot kan opsætte en wildcard DNS-record i Cloudflare.

## Fejlfinding

### Problemer med API-forbindelse
- Tjek, at dit API token er korrekt og har de nødvendige tilladelser.
- Kontroller, at din Zone ID er korrekt.
- Sørg for, at din Cloudflare konto har de nødvendige rettigheder.

### Subdomæne ikke tilføjet
- Tjek Ultimate Multisite logs efter eventuelle fejlmeddelelser.
- Bekræft, at subdomænet ikke allerede er tilføjet til Cloudflare.
- Sørg for, at din Cloudflare plan understøtter antallet af DNS-records, du opretter.

### Proxy-problemer
- Hvis du ikke ønsker, at underdomæner skal blive proxied, kan du bruge filteret `wu_cloudflare_should_proxy`.
- Nogle funktioner vil muligvis ikke virke korrekt, når de er proxied (f.eks. visse WordPress admin-funktioner).
- Overvej at bruge Cloudflares Page Rules til at omgå cachen for admin-sider.
