---
title: GridPane-integration
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane-integration

## Översikt
GridPane är en specialiserad kontrollpanel för WordPress-hosting, byggd för seriösa WordPress-proffs. Den här integrationen möjliggör automatisk domänsynkronisering och SSL-certifikathantering mellan Ultimate Multisite och GridPane.

## Funktioner
- Automatisk domänsynkronisering
- SSL-certifikathantering
- Automatisk konfiguration av SUNRISE-konstanten

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Installationsinstruktioner

### 1. Hämta dina GridPane API-uppgifter

1. Logga in på din GridPane-dashboard
2. Gå till "Settings" > "API"
3. Skapa en API-nyckel om du inte redan har en
4. Kopiera din API-nyckel

### 2. Hämta dina server- och webbplats-ID:n

1. I din GridPane-dashboard, gå till "Servers"
2. Välj den server där din WordPress multisite finns
3. Notera Server-ID:t (syns i URL:en eller på serverns detaljsida)
4. Gå till "Sites" och välj din WordPress-webbplats
5. Notera Webbplats-ID:t (syns i URL:en eller på webbplatsens detaljsida)

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera GridPane-integrationen
5. Klicka på "Save Changes"

## Hur det fungerar

När en domän mappas i Ultimate Multisite:

1. Integrationen skickar en förfrågan till GridPanes API för att lägga till domänen på din webbplats
2. GridPane hanterar automatiskt SSL-certifikatutfärdande
3. När en domänmappning tas bort, tar integrationen bort domänen från GridPane

Integrationen hanterar också automatiskt SUNRISE-konstanten i din wp-config.php-fil, vilket krävs för att domänmappning ska fungera korrekt.

## Hantering av SUNRISE-konstanten

En unik funktion i GridPane-integrationen är att den automatiskt återställer SUNRISE-konstanten i wp-config.php för att förhindra konflikter med GridPanes eget domänmappningssystem. Detta säkerställer att båda systemen kan fungera tillsammans utan problem.

## Felsökning

### Problem med API-anslutning
- Kontrollera att din API-nyckel är korrekt
- Verifiera att dina server- och webbplats-ID:n är korrekta
- Säkerställ att ditt GridPane-konto har nödvändiga behörigheter

### Problem med SSL-certifikat
- GridPane kan behöva lite tid för att utfärda SSL-certifikat
- Kontrollera att dina domäner pekar korrekt mot din servers IP-adress
- Granska SSL-inställningarna för din webbplats i GridPane

### Domän läggs inte till
- Kontrollera Ultimate Multisite-loggarna efter eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i GridPane
- Säkerställ att domänens DNS-poster är korrekt konfigurerade
