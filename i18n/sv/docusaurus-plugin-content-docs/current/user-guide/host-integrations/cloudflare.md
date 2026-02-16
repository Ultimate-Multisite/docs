---
title: Cloudflare-integrering
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare-integrering

## Översikt
Cloudflare är ett ledande nätverk för innehållsleverans (CDN) och säkerhetsleverantör som hjälper till att skydda och snabba upp webbplatser. Den här integreringen möjliggör automatisk domänhantering mellan Ultimate Multisite och Cloudflare, särskilt för multisite-installationer med subdomäner.

## Funktioner
- Automatiskt skapande av subdomäner i Cloudflare
- Stöd för proxyade subdomäner
- Hantering av DNS-poster
- Förbättrad visning av DNS-poster i Ultimate Multisite-admin

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Installationsinstruktioner

### 1. Hämta din Cloudflare API-nyckel

1. Logga in på din Cloudflare-panel
2. Gå till "My Profile" (klicka på din e-post i övre högra hörnet)
3. Välj "API Tokens" från menyn
4. Skapa en ny API-token med följande behörigheter:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopiera din API-token

### 2. Hämta ditt Zone ID

1. I din Cloudflare-panel, välj den domän du vill använda
2. Zone ID visas i fliken "Overview", i högra sidofältet under "API"
3. Kopiera Zone ID

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktivera integreringen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera Cloudflare-integreringen
5. Klicka på "Save Changes"

## Hur det fungerar

### Subdomänhantering

När en ny webbplats skapas i en multisite-installation med subdomäner:

1. Integreringen skickar en förfrågan till Cloudflares API för att lägga till en CNAME-post för subdomänen
2. Subdomänen konfigureras som standard för att proxyköras genom Cloudflare (detta kan ändras med filter)
3. När en webbplats tas bort kommer integreringen att ta bort subdomänen från Cloudflare

### Visning av DNS-poster

Integreringen förbättrar visningen av DNS-poster i Ultimate Multisite-admin genom att:

1. Hämta DNS-poster direkt från Cloudflare
2. Visa om poster är proxyade eller inte
3. Visa ytterligare information om DNS-posterna

## Viktigt att veta

Sedan Cloudflares senaste uppdateringar är wildcard-proxying nu tillgängligt för alla kunder. Detta innebär att Cloudflare-integreringen är mindre kritisk för multisite-installationer med subdomäner än den brukade vara, eftersom du helt enkelt kan sätta upp en wildcard DNS-post i Cloudflare.

## Felsökning

### Problem med API-anslutning
- Kontrollera att din API-token är korrekt och har nödvändiga behörigheter
- Kontrollera att ditt Zone ID är korrekt
- Säkerställ att ditt Cloudflare-konto har nödvändiga behörigheter

### Subdomän läggs inte till
- Kontrollera Ultimate Multisite-loggarna för eventuella felmeddelanden
- Verifiera att subdomänen inte redan är tillagd i Cloudflare
- Säkerställ att din Cloudflare-plan stöder antalet DNS-poster du skapar

### Proxyproblem
- Om du inte vill att subdomäner ska proxyköras kan du använda filtret `wu_cloudflare_should_proxy`
- Vissa funktioner kanske inte fungerar korrekt när de proxykörs (t.ex. vissa WordPress-adminfunktioner)
- Överväg att använda Cloudflares Page Rules för att kringgå cachen för adminsidor
