---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integratioun {#runcloud-integration}

## Überblick {#overview}
RunCloud isch e Cloud-basé Server-Management-Plattform, wo dir es eifach mach, Web-Applikatione uf dine eigete Cloud-Server z'deploye und z'manage. Dä Integratioun ermöglicht automatische Domain-Sync und SSL-Zertifikat-Management zwüsche Ultimate Multisite und RunCloud.

## Features {#features}
- Automatisch Domain-Sync
- SSL-Zertifikat-Management
- Domain-Entfernig, wenn Mappings gelöscht wärde

## Aaforderige {#requirements}
D'folgende Konstante müesse in din `wp-config.php` Datei definiert sii:

```php
define('WU_RUNCLOUD_API_KEY', 'din_api_key');
define('WU_RUNCLOUD_API_SECRET', 'din_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'din_server_id');
define('WU_RUNCLOUD_APP_ID', 'din_app_id');
```

## Iistellige {#setup-instructions}

### 1. Hol dini RunCloud API-Aaforderige {#1-get-your-runcloud-api-credentials}

1. Log dich i din RunCloud Dashboard ii
2. Gang zu "User Profile" (klick uf dis Profilbild in de obere rechts Ecke)
3. Wähl "API" us em Menü
4. Klick uf "Generate API Key", falls du no kei hesch
5. Kopier dini API Key und API Secret

### 2. Hol dini Server- und App-IDs {#2-get-your-server-and-app-ids}

1. Im RunCloud Dashboard gang zu "Servers"
2. Wähl de Server, wo din WordPress Multisite gehostet isch
3. D'Server ID isch sichtbar in de URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gang zu "Web Applications" und wähl dini WordPress-Applikation
5. D'App ID isch sichtbar in de URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Füeg Konstante zu wp-config.php bi {#3-add-constants-to-wp-configphp}

Füeg d'folgende Konstante i dini `wp-config.php` Datei ii:

```php
define('WU_RUNCLOUD_API_KEY', 'din_api_key');
define('WU_RUNCLOUD_API_SECRET', 'din_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'din_server_id');
define('WU_RUNCLOUD_APP_ID', 'din_app_id');
```

### 4. D'Integratioun aktiviere {#4-enable-the-integration}

1. In de WordPress admin, gaats na Ultimate Multisite > Settings
2. Navigeer naar het tab "Domain Mapping"
3. Scroll naar beneden tot je bij "Host Integrations" bent
4. Schakel de RunCloud integratie in
5. Klik op "Save Changes"

## Wie funktioniert dat? {#how-it-works}

Wanneer een domein wordt gemapt in Ultimate Multisite:

1. Stuurt de integratie een verzoek naar de API van RunCloud om het domein toe te voegen aan je applicatie
2. Als het domein succesvol is toegevoegd, zal de integratie ook SSL-certificaten opnieuw implementeren (redeploy)
3. Wanneer een domeinmapping wordt verwijderd, verwijdert de integratie het domein uit RunCloud

Voor subdomeininstallaties zal de integratie automatisch de creatie van subdomeinen in RunCloud afhandelen wanneer nieuwe sites worden toegevoegd aan je netwerk.

## Probleemoplossing {#troubleshooting}

### API Connectieproblemen {#api-connection-issues}
- Controle of je API-gegevens correct zijn
- Controle of je server- en app-ID's kloppen
- Zorg ervoor dat je RunCloud-account de benodigde rechten heeft

### SSL Certificaatproblemen {#ssl-certificate-issues}
- RunCloud kan wat tijd nodig hebben om SSL-certificaten uit te geven
- Controle of je domeinen correct wijzen naar het IP-adres van je server
- Controleer de RunCloud SSL-instellingen voor je applicatie

### Domein Niet Toegevoegd {#domain-not-added}
- Controleer de Ultimate Multisite logs op foutmeldingen
- Controleer of het domein niet al is toegevoegd aan RunCloud
- Zorg ervoor dat je RunCloud-plan meerdere domeinen ondersteunt
