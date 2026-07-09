---
title: RunCloud integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration {#runcloud-integration}

## Oversigt {#overview}
RunCloud er en cloud-baseret platform til serverstyring, som gør det nemt at udrulle og administrere webapplikationer på dine egne cloud-servere. Denne integration muliggør automatisk domænesynkronisering og styring af SSL-certifikater mellem Ultimate Multisite og RunCloud.

## Funktioner {#features}
- Automatisk domænesynkronisering
- Styring af SSL-certifikater
- Fjernelse af domæne, når mappninger slettes

## Krav {#requirements}
Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_RUNCLOUD_API_KEY', 'din_api_nøgle');
define('WU_RUNCLOUD_API_SECRET', 'din_api_hemmelighed');
define('WU_RUNCLOUD_SERVER_ID', 'din_server_id');
define('WU_RUNCLOUD_APP_ID', 'din_app_id');
```

## Opsætning {#setup-instructions}

### 1. Få dine RunCloud API-oplysninger {#1-get-your-runcloud-api-credentials}

1. Log ind på dit RunCloud dashboard
2. Gå til "User Profile" (klik på din profilbillede i øverste højre hjørne)
3. Vælg "API" fra menuen
4. Klik på "Generate API Key", hvis du ikke allerede har en
5. Kopier din API Key og API Secret

### 2. Få dine Server- og App-ID'er {#2-get-your-server-and-app-ids}

1. I dit RunCloud dashboard, gå til "Servers"
2. Vælg serveren, hvor dit WordPress multisite er hostet
3. Server ID'et ses i URL'en: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gå til "Web Applications" og vælg din WordPress-applikation
5. App ID'et ses i URL'en: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Tilføj konstanter til wp-config.php {#3-add-constants-to-wp-configphp}

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_RUNCLOUD_API_KEY', 'din_api_nøgle');
define('WU_RUNCLOUD_API_SECRET', 'din_api_hemmelighed');
define('WU_RUNCLOUD_SERVER_ID', 'din_server_id');
define('WU_RUNCLOUD_APP_ID', 'din_app_id');
```

### 4. Aktiver integrationen {#4-enable-the-integration}

1. I dit i din WordPress admin, gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping" (Domænemapping)
3. Scroll ned til "Host Integrations" (Hostintegrationer)
4. Aktiver RunCloud integrationen
5. Klik på "Save Changes" (Gem ændringer)

## Hvordan det virker {#how-it-works}

Når et domæne mappes i Ultimate Multisite:

1. Integrationen sender en anmodning til RunClouds API for at tilføje domænet til din applikation
2. Hvis domænet tilføjes succesfuldt, vil integrationen også genudrulje SSL-certifikaterne
3. Når en domænemapping fjernes, vil integrationen fjerne domænet fra RunCloud

For subdomain installationer vil integrationen automatisk håndtere oprettelsen af subdomæner i RunCloud, når nye sider tilføjes til dit netværk.

## Fejlfinding {#troubleshooting}

### Problemer med API-forbindelse {#api-connection-issues}
- Tjek, at dine API-credentials er korrekte
- Kontroller, at dine server- og app-ID'er er korrekte
- Sørg for, at din RunCloud konto har de nødvendige rettigheder

### Problemer med SSL-certifikater {#ssl-certificate-issues}
- RunCloud kan tage lidt tid at udstede SSL-certifikater
- Bekræft, at dine domæner korrekt peger på din servers IP-adresse
- Tjek RunClouds SSL-indstillinger for din applikation

### Domæne er ikke tilføjet {#domain-not-added}
- Tjek Ultimate Multisites logs efter eventuelle fejlmeddelelser
- Bekræft, at domænet ikke allerede er tilføjet til RunCloud
- Sørg for, at dit RunCloud-abonnement understøtter flere domæner
