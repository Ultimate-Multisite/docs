---
title: RunCloud-integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud-integrering

## Översikt
RunCloud är en molnbaserad serverhanteringsplattform som gör det enkelt att driftsätta och hantera webbapplikationer på dina egna molnservrar. Den här integreringen möjliggör automatisk domänsynkronisering och SSL-certifikathantering mellan Ultimate Multisite och RunCloud.

## Funktioner
- Automatisk domänsynkronisering
- SSL-certifikathantering
- Borttagning av domäner när mappningar tas bort

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Installationsinstruktioner

### 1. Hämta dina RunCloud API-uppgifter

1. Logga in på din RunCloud-panel
2. Gå till "User Profile" (klicka på din profilbild i det övre högra hörnet)
3. Välj "API" från menyn
4. Klicka på "Generate API Key" om du inte redan har en
5. Kopiera din API Key och API Secret

### 2. Hämta dina server- och app-ID:n

1. I din RunCloud-panel, gå till "Servers"
2. Välj servern där din WordPress multisite finns
3. Server-ID:t syns i URL:en: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gå till "Web Applications" och välj din WordPress-applikation
5. App-ID:t syns i URL:en: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktivera integreringen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera RunCloud-integreringen
5. Klicka på "Save Changes"

## Så fungerar det

När en domän mappas i Ultimate Multisite:

1. Integreringen skickar en förfrågan till RunClouds API för att lägga till domänen i din applikation
2. Om domänen läggs till framgångsrikt kommer integreringen också att omdistribuera SSL-certifikat
3. När en domänmappning tas bort kommer integreringen att ta bort domänen från RunCloud

För subdomäninstallationer hanterar integreringen automatiskt skapandet av subdomäner i RunCloud när nya webbplatser läggs till i ditt nätverk.

## Felsökning

### Problem med API-anslutning
- Kontrollera att dina API-uppgifter är korrekta
- Kontrollera att dina server- och app-ID:n är korrekta
- Se till att ditt RunCloud-konto har nödvändiga behörigheter

### Problem med SSL-certifikat
- RunCloud kan behöva lite tid för att utfärda SSL-certifikat
- Kontrollera att dina domäner pekar korrekt mot din servers IP-adress
- Kontrollera SSL-inställningarna för din applikation i RunCloud

### Domän läggs inte till
- Kontrollera Ultimate Multisite-loggarna efter eventuella felmeddelanden
- Kontrollera att domänen inte redan är tillagd i RunCloud
- Se till att din RunCloud-plan stöder flera domäner
