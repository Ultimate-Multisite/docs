---
title: Cloudflare-integration
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare-integration

## Översikt
Cloudflare är ett ledande nätverk för innehållsleverans (CDN) och en säkerhetsleverantör som hjälper till att skydda och snabba upp webbplatser. Denna integration möjliggör automatisk domänhantering mellan Ultimate Multisite och Cloudflare, särskilt för subdomänbaserade multisite-installationer.

## Funktioner
- Automatisk skapande av subdomäner i Cloudflare
- Stöd för proxade subdomäner
- Hantering av DNS-poster
- Förbättrad visning av DNS-poster i Ultimate Multisite-admin

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Installationsanvisningar

### 1. Hämta din Cloudflare API-nyckel

1. Logga in på din Cloudflare Dashboard
2. Gå till "Min profil" (klicka på din e-postadress i det övre högra hörnet)
3. Välj "API Tokens" från menyn
4. Skapa en ny API-token med följande behörigheter:
   - Zone.Zone: Läs
   - Zone.DNS: Redigera
5. Kopiera din API-token

### 2. Hämta ditt Zone ID

1. I din Cloudflare Dashboard, välj den domän du vill använda
2. Zone ID är synligt på fliken "Översikt", i den högra sidopanelen under "API"
3. Kopiera Zone ID

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Inställningar
2. Navigera till fliken "Domänmappning"
3. Rulla ned till "Värdintegrationer"
4. Aktivera Cloudflare-integrationen
5. Klicka på "Spara ändringar"

## Så fungerar det

### Hantering av subdomäner

När en ny webbplats skapas i en subdomänbaserad multisite-installation:

1. Integrationen skickar en begäran till Cloudflares API för att lägga till en CNAME-post för subdomänen
2. Subdomänen konfigureras som standard för att proxas via Cloudflare (detta kan ändras med filter)
3. När en webbplats tas bort kommer integrationen att ta bort subdomänen från Cloudflare

### Visning av DNS-poster

Integrationen förbättrar visningen av DNS-poster i Ultimate Multisite-admin genom att:

1. Hämta DNS-poster direkt från Cloudflare
2. Visa om poster är proxade eller inte
3. Visa ytterligare information om DNS-posterna

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (tidigare kallat "Cloudflare for SaaS") är en Cloudflare-funktion som gör det möjligt för dina kunder att använda sina egna domäner med SSL på ditt multisite-nätverk. Det är den rekommenderade metoden för domänmappade multisite-installationer som använder Cloudflare, eftersom Cloudflare hanterar utfärdande och förnyelse av SSL-certifikat för varje anpassad domän automatiskt.

### Hur det skiljer sig från standardintegrationen med Cloudflare

| | Standardintegration | Cloudflare Custom Hostnames |
|---|---|---|
| **Syfte** | Skapar DNS-poster automatiskt för subdomäner | Möjliggör anpassade (mappade) domäner med Cloudflare-hanterad SSL |
| **Bäst för** | Subdomänbaserad multisite | Domänmappad multisite |
| **SSL** | Hanteras separat | Hanteras automatiskt av Cloudflare |

### Konfigurera Cloudflare Custom Hostnames

1. I din Cloudflare Dashboard, öppna zonen för din huvuddomän.
2. Gå till **SSL/TLS > Custom Hostnames**.
3. Lägg till en reserv-origin som pekar på din servers IP-adress eller värdnamn.
4. För varje kunddomän som mappas i Ultimate Multisite, lägg till en Custom Hostname-post i Cloudflare. Du kan automatisera detta steg med Cloudflare API.
5. Cloudflare utfärdar och förnyar TLS-certifikat för varje anpassat värdnamn automatiskt när kundens DNS pekar mot ditt nätverk.

För fullständig API-referens, se [Cloudflare Custom Hostnames-dokumentationen](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologiuppdatering
Från och med Ultimate Multisite v2.6.1 kallas denna funktion **Cloudflare Custom Hostnames** i alla plugininställningar och etiketter. Tidigare versioner använde namnet "Cloudflare for SaaS", vilket är namnet på den underliggande Cloudflare-produkten.
:::

## Viktiga anteckningar

Från och med Cloudflares senaste uppdateringar är wildcard-proxying nu tillgängligt för alla kunder. Det innebär att standardintegrationen för Cloudflare DNS är mindre avgörande för subdomänbaserade multisite-installationer än den tidigare var, eftersom du helt enkelt kan konfigurera en wildcard-DNS-post i Cloudflare.

## Felsökning

### Problem med API-anslutning
- Kontrollera att din API-token är korrekt och har de nödvändiga behörigheterna
- Kontrollera att ditt Zone ID är korrekt
- Säkerställ att ditt Cloudflare-konto har de nödvändiga behörigheterna

### Subdomän inte tillagd
- Kontrollera Ultimate Multisite-loggarna efter eventuella felmeddelanden
- Kontrollera att subdomänen inte redan har lagts till i Cloudflare
- Säkerställ att din Cloudflare-plan stöder antalet DNS-poster du skapar

### Proxying-problem
- Om du inte vill att subdomäner ska proxas kan du använda filtret `wu_cloudflare_should_proxy`
- Vissa funktioner kanske inte fungerar korrekt när de proxas (t.ex. vissa WordPress-adminfunktioner)
- Överväg att använda Cloudflares Page Rules för att kringgå cache för adminsidor
