---
title: Cloudways-integration
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways-integration

## Översikt
Cloudways är en hanterad molnvärdplattform som låter dig driftsätta WordPress-sajter på olika molnleverantörer som DigitalOcean, AWS, Google Cloud med flera. Den här integrationen möjliggör automatisk domänsynkronisering och hantering av SSL-certifikat mellan Ultimate Multisite och Cloudways.

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

Du kan även valfritt definiera:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Installationsanvisningar

### 1. Hämta dina Cloudways API-uppgifter

1. Logga in på din Cloudways-panel
2. Gå till "Account" > "API Keys"
3. Skapa en API-nyckel om du inte redan har en
4. Kopiera din e-postadress och API-nyckel

### 2. Hämta ditt server- och applikations-ID

1. I din Cloudways-panel, gå till "Servers"
2. Välj den server där din WordPress multisite är installerad
3. Server-ID:t syns i URL:en: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gå till "Applications" och välj din WordPress-applikation
5. App-ID:t syns i URL:en: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Om du har ytterligare domäner som alltid ska inkluderas:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera Cloudways-integrationen
5. Klicka på "Save Changes"

## Så fungerar det

### Domänsynkronisering

När en domän mappas i Ultimate Multisite:

1. Integrationen hämtar alla aktuellt mappade domäner
2. Den lägger till den nya domänen i listan (tillsammans med en www-version om tillämpligt)
3. Den skickar den kompletta listan till Cloudways via API:et
4. Cloudways uppdaterar domänaliasen för din applikation

Observera: Cloudways API kräver att hela listan med domäner skickas varje gång, inte bara att enskilda domäner läggs till eller tas bort.

### Hantering av SSL-certifikat

Efter att domäner har synkroniserats:

1. Integrationen kontrollerar vilka domäner som har giltiga DNS-poster som pekar mot din server
2. Den skickar en begäran till Cloudways om att installera Let's Encrypt SSL-certifikat för dessa domäner
3. Cloudways hanterar utfärdande och installation av SSL-certifikaten

## Extra domäner

Konstanten `WU_CLOUDWAYS_EXTRA_DOMAINS` låter dig ange ytterligare domäner som alltid ska inkluderas vid synkronisering med Cloudways. Detta är användbart för:

- Domäner som inte hanteras av Ultimate Multisite
- Wildcard-domäner (t.ex. `*.example.com`)
- Utvecklings- eller stagingdomäner

## Felsökning

### Problem med API-anslutning
- Kontrollera att din e-postadress och API-nyckel är korrekta
- Kontrollera att ditt server- och applikations-ID är korrekta
- Säkerställ att ditt Cloudways-konto har nödvändiga behörigheter

### Problem med SSL-certifikat
- Cloudways kräver att domäner har giltiga DNS-poster som pekar mot din server innan SSL-certifikat kan utfärdas
- Integrationen validerar DNS-poster innan den begär SSL-certifikat
- Om SSL-certifikat inte utfärdas, kontrollera att dina domäner pekar korrekt mot din servers IP-adress

### Domän läggs inte till
- Kontrollera Ultimate Multisite-loggarna för eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i Cloudways
- Säkerställ att din Cloudways-plan stöder det antal domäner du försöker lägga till
