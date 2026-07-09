---
title: Cloudways-integration
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways-integration

## Översikt
Cloudways är en hanterad molnhostingplattform som låter dig distribuera WordPress-webbplatser hos olika molnleverantörer som DigitalOcean, AWS, Google Cloud med flera. Den här integrationen möjliggör automatisk domänsynkronisering och hantering av SSL-certifikat mellan Ultimate Multisite och Cloudways.

## Funktioner
- Automatisk domänsynkronisering
- Hantering av SSL-certifikat
- Stöd för extra domäner
- DNS-validering för SSL-certifikat

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Valfritt kan du också definiera:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Installationsanvisningar

### 1. Hämta dina Cloudways API-uppgifter

1. Logga in på din Cloudways Dashboard
2. Gå till "Account" > "API-nycklar"
3. Generera en API-nyckel om du inte redan har en
4. Kopiera din e-postadress och API-nyckel

### 2. Hämta dina server- och applikations-ID:n

1. I din Cloudways Dashboard, gå till "Servrar"
2. Välj servern där din WordPress multisite finns
3. Server-ID:t syns i URL:en: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gå till "Applikationer" och välj din WordPress-applikation
5. App-ID:t syns i URL:en: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Om du har ytterligare **externa** domäner (utanför ditt multisite-nätverk) som alltid ska hållas kvar på Cloudways aliaslista:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Inkludera inte ditt eget nätverks wildcard
Lägg **inte** till `*.your-network.com` (eller något subdomänmönster för ditt eget nätverk) i
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Se [Viktigt — fallgrop med wildcard-SSL](#important--wildcard-ssl-pitfall)
nedan för varför detta förhindrar att SSL-certifikat per kund utfärdas.
:::

### 4. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Inställningar
2. Navigera till fliken "Domänmappning"
3. Rulla ned till "Värdintegrationer"
4. Aktivera Cloudways-integrationen
5. Klicka på "Spara ändringar"

## Så fungerar det

### Domänsynkronisering

När en domän mappas i Ultimate Multisite:

1. Integrationen hämtar alla för närvarande mappade domäner
2. Den lägger till den nya domänen i listan (tillsammans med en www-version om tillämpligt)
3. Den skickar den kompletta listan till Cloudways via API:et
4. Cloudways uppdaterar domänaliasen för din applikation

Obs: Cloudways API kräver att den kompletta listan över domäner skickas varje gång, inte bara att enskilda domäner läggs till eller tas bort.

### Hantering av SSL-certifikat

Efter att domäner har synkroniserats:

1. Integrationen kontrollerar vilka domäner som har giltiga DNS-poster som pekar mot din server
2. Den skickar en begäran till Cloudways om att installera Let's Encrypt SSL-certifikat för dessa domäner
3. Cloudways hanterar utfärdandet och installationen av SSL-certifikaten

Integrationen begär alltid **standard**-certifikat (icke-wildcard) från Let's Encrypt från
Cloudways. Om ett wildcard-mönster anges i `WU_CLOUDWAYS_EXTRA_DOMAINS` tas den inledande
`*.` bort före SSL-begäran — själva wildcardet installeras aldrig av den här
integrationen. För att använda ett wildcard-certifikat på Cloudways måste du installera det
manuellt, men att göra det blockerar utfärdande av Let's Encrypt per domän för mappade anpassade domäner
(se fallgropen nedan).

## Extra domäner

Konstanten `WU_CLOUDWAYS_EXTRA_DOMAINS` låter dig ange ytterligare **externa**
domäner som alltid ska hållas kvar på Cloudways-applikationens aliaslista. Använd den för:

- Externa domäner som inte hanteras av Ultimate Multisite (t.ex. en separat marknadsföringswebbplats som delar samma Cloudways-applikation)
- Parkerade domäner eller staging-domäner som du vill behålla på applikationens aliaslista

Använd **inte** den här konstanten för ditt eget nätverks subdomän-wildcard
(t.ex. `*.your-network.com`). Se fallgropen med wildcard-SSL nedan.

## Viktigt — fallgrop med wildcard-SSL

Ett vanligt misstag när man följer Cloudways standardkonfiguration är att lägga till ett wildcard som
`*.your-network.com` i `WU_CLOUDWAYS_EXTRA_DOMAINS`, eller att manuellt installera ett Cloudways
wildcard-SSL-certifikat för detta wildcard.

**Om du gör detta kommer Cloudways att vägra utfärda Let's Encrypt-certifikat för de
anpassade domäner per kund som Ultimate Multisite mappar.** Cloudways ersätter det aktiva
SSL-certifikatet på applikationen varje gång, och ett befintligt wildcard-certifikat på
applikationen blockerar det utfärdande av Let's Encrypt per domän som integrationen är beroende av.

### Rekommenderad Cloudways SSL-konfiguration för ett Ultimate Multisite-nätverk

1. I Cloudways-applikationens flik **SSL-certifikat**, installera ett **standard
   Let's Encrypt-certifikat** som endast omfattar `your-network.com` och `www.your-network.com`
   — **inte** ett wildcard.
2. Lägg **inte** `*.your-network.com` (eller något subdomänmönster för ditt eget nätverk) i
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reservera den konstanten endast för **externa** domäner.
3. Skapa subdomän-wildcardet per kund endast på **DNS**-nivå (en `A`-post för
   `*.your-network.com` som pekar mot din Cloudways-server-IP) så att underwebbplatser löses upp. SSL
   för enskilda mappade anpassade domäner utfärdas sedan automatiskt av integrationen
   via Let's Encrypt.

Om dina kunders anpassade domäner har fastnat utan SSL, kontrollera Cloudways SSL-fliken. Om ett
wildcard-certifikat är aktivt där, ta bort det, utfärda ett standard Let's Encrypt-certifikat
på nytt endast för huvudnätverksdomänen och ta bort eventuella wildcard-poster från
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Utlös sedan en domänmappning igen (eller vänta på nästa)
så börjar integrationen utfärda certifikat per domän igen.

## Felsökning

### Problem med API-anslutning
- Kontrollera att din e-postadress och API key är korrekta
- Kontrollera att dina server- och applikations-ID:n är korrekta
- Säkerställ att ditt Cloudways-konto har de nödvändiga behörigheterna

### Problem med SSL-certifikat
- Cloudways kräver att domäner har giltiga DNS-poster som pekar på din server innan SSL-certifikat utfärdas
- Integrationen validerar DNS-poster innan SSL-certifikat begärs
- Om SSL-certifikat inte utfärdas, kontrollera att dina domäner pekar korrekt på din servers IP-adress
- **Anpassade domäner per kund har fastnat utan SSL?** Kontrollera Cloudways-applikationens SSL Certificate-flik. Om ett wildcard-certifikat (manuellt installerat, eller som täcker `*.your-network.com`) är aktivt, kommer Cloudways inte att utfärda Let's Encrypt-certifikat för individuellt mappade anpassade domäner. Ersätt det med ett standard Let's Encrypt-certifikat som endast täcker huvudnätverksdomänen (`your-network.com`, `www.your-network.com`) och ta bort eventuella wildcard-poster från `WU_CLOUDWAYS_EXTRA_DOMAINS`. Utlös sedan en domänmappning igen (eller vänta på nästa) så kommer integrationen att begära certifikat per domän.

### Domän har inte lagts till
- Kontrollera Ultimate Multisite-loggarna efter eventuella felmeddelanden
- Kontrollera att domänen inte redan har lagts till i Cloudways
- Säkerställ att din Cloudways-plan stöder antalet domäner du lägger till
