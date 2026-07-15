---
title: GridPane integration
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Oversigt {#overview}
GridPane er et specialiseret WordPress hosting kontrolpanel bygget til seriøse WordPress-professionelle. Denne integration muliggør automatisk domænesynkronisering og SSL-certifikatstyring mellem Ultimate Multisite og GridPane.

## Funktioner {#features}
- Automatisk domænesynkronisering
- Styring af SSL-certifikater
- Automatisk konfiguration af SUNRISE konstant

## Krav {#requirements}
Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'din_api_nøgle');
define('WU_GRIDPANE_SERVER_ID', 'dit_server_id');
define('WU_GRIDPANE_APP_ID', 'dit_site_id');
```

## Opsætning {#setup-instructions}

### 1. Få dine GridPane API-oplysninger {#1-get-your-gridpane-api-credentials}

1. Log ind på dit GridPane dashboard
2. Gå til "Settings" > "API"
3. Generer en API-nøgle, hvis du ikke allerede har en
4. Kopier din API-nøgle

### 2. Få dine Server- og Site-ID'er {#2-get-your-server-and-site-ids}

1. I dit GridPane dashboard gå til "Servers"
2. Vælg serveren, hvor dit WordPress multisite er hostet
3. Bemærk Server ID (synlig i URL'en eller på serverdetaljesiden)
4. Gå til "Sites" og vælg din WordPress-side
5. Bemærk Site ID (synlig i URL'en eller på sidens detaljeside)

### 3. Tilføj konstanter til wp-config.php {#3-add-constants-to-wp-configphp}

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'din_api_nøgle');
define('WU_GRIDPANE_SERVER_ID', 'dit_server_id');
define('WU_GRIDPANE_APP_ID', 'dit_site_id');
```

### 4. Aktiver integrationen {#4-enable-the-integration}

1. I dit WordPress admin-område gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping"
3. Scroll ned til "Host Integrations"
4. Aktiver GridPane-integrationen
5. Klik på "Save Changes" (Gem ændringer)

## Hvordan det virker {#how-it-works}

Når et domæne er kortlagt i Ultimate Multisite:

1. Integrationen sender en anmodning til GridPane's API for at tilføje domænet til din side
2. GridPane håndterer automatisk udstedelse af SSL-certifikaterne
3. Når en domænemapping fjernes, vil integrationen fjerne domænet fra GridPane

Integrationen håndterer også automatisk SUNRISE-konstanten i din wp-config.php fil, som er nødvendig for, at domænemappingen virker korrekt.

## Håndtering af SUNRISE-konstanten {#sunrise-constant-management}

Et unikt træk ved GridPane integrationen er, at den automatisk vender SUNRISE-konstanten i wp-config.php tilbage for at forhindre konflikter med Googles egen domænemappingssystem. Dette sikrer, at begge systemer kan arbejde sammen uden problemer.

## Fejlfinding {#troubleshooting}

### Problemer med API-forbindelse {#api-connection-issues}
- Tjek, at din API key er korrekt
- Kontroller, at dine server- og sites IDs er korrekte
- Sør for, at dit GridPane-konti har de nødvendige rettigheder

### Problemer med SSL-certifikater {#ssl-certificate-issues}
- GridPane kan tage lidt tid om at udstede SSL-certifikaterne
- Bekræft, at dine domæner korrekt peger på din servers IP-adresse
- Tjek GridPane's SSL-indstillinger for din side

### Domæne tilføjet ikke {#domain-not-added}
- Tjek Ultimate Multisite logs efter eventuelle fejlmeddelelser
- Bekræft, at domænet ikke allerede er tilføjet til GridPane
- Sør for, at dine domænets DNS-oplysninger er korrekt konfigureret
