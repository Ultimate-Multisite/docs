---
title: ServerPilot-integration
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot-integration

## Översikt
ServerPilot är en molntjänst för att hosta WordPress och andra PHP-webbplatser på servrar hos DigitalOcean, Amazon, Google eller någon annan serverleverantör. Den här integrationen möjliggör automatisk domänsynkronisering och hantering av SSL-certifikat mellan Ultimate Multisite och ServerPilot.

## Funktioner
- Automatisk domänsynkronisering
- Hantering av SSL-certifikat med Let's Encrypt
- Automatisk förnyelse av SSL-certifikat

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Installationsinstruktioner

### 1. Hämta dina ServerPilot API-uppgifter

1. Logga in på din ServerPilot-dashboard
2. Gå till "Account" > "API"
3. Skapa en ny API-nyckel om du inte redan har en
4. Kopiera ditt Client ID och din API Key

### 2. Hämta ditt App ID

1. I din ServerPilot-dashboard, gå till "Apps"
2. Välj den app där din WordPress multisite är hostad
3. App ID syns i URL:en: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera ServerPilot-integrationen
5. Klicka på "Save Changes"

## Så fungerar det

### Domänsynkronisering

När en domän mappas i Ultimate Multisite:

1. Integrationen hämtar den aktuella listan över domäner från ServerPilot
2. Den lägger till den nya domänen i listan (tillsammans med en www-version om tillämpligt)
3. Den skickar den uppdaterade listan till ServerPilot via API:et
4. ServerPilot uppdaterar domänlistan för din applikation

### Hantering av SSL-certifikat

Efter att domäner har synkroniserats:

1. Integrationen aktiverar automatiskt AutoSSL för din applikation
2. ServerPilot hanterar utfärdandet och installationen av SSL-certifikat med Let's Encrypt
3. ServerPilot hanterar också automatisk förnyelse av SSL-certifikat

## Verifiering av SSL-certifikat

Integrationen är konfigurerad för att öka antalet verifieringsförsök för SSL-certifikat hos ServerPilot, eftersom det kan ta tid innan ServerPilot utfärdar och installerar SSL-certifikat. Som standard görs upp till 5 försök, men detta kan justeras med filter.

## Felsökning

### Problem med API-anslutning
- Kontrollera att ditt Client ID och din API Key är korrekta
- Kontrollera att ditt App ID är korrekt
- Säkerställ att ditt ServerPilot-konto har nödvändiga behörigheter

### Problem med SSL-certifikat
- ServerPilot kräver att domäner har giltiga DNS-poster som pekar mot din server innan SSL-certifikat kan utfärdas
- Om SSL-certifikat inte utfärdas, kontrollera att dina domäner pekar korrekt mot din servers IP-adress
- Det kan ta tid för ServerPilot att utfärda och installera SSL-certifikat (vanligtvis 5-15 minuter)

### Domän läggs inte till
- Kontrollera loggarna i Ultimate Multisite för eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i ServerPilot
- Säkerställ att ditt ServerPilot-abonnemang stöder antalet domäner du försöker lägga till

### Borttagning av domän
- För närvarande erbjuder ServerPilots API inte något sätt att ta bort enskilda domäner
- När en domänmappning tas bort i Ultimate Multisite uppdaterar integrationen domänlistan i ServerPilot för att utesluta den borttagna domänen
