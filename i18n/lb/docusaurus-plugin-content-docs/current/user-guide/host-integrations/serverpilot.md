---
title: ServerPilot Integration
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration

## Überblick {#overview}
ServerPilot isch en Cloud-Service, wo WordPress und anderi PHP-Websites uf Server bi DigitalOcean, Amazon, Google oder irgendeinem andere Serveranbieter hostet. D'Integration ermöglicht automatische Domain-Synchronisation und SSL-Zertifikat-Verwaltung zwüsche Ultimate Multisite und ServerPilot.

## Features {#features}
- Automatische Domain-Synchronisation
- SSL-Zertifikat-Verwaltung mit Let's Encrypt
- Automatische SSL-Erneuerung

## Anforderungen {#requirements}
D'folgende Konstante müesse in din `wp-config.php` Datei definiert sii:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Einrichtungsanleitig {#setup-instructions}

### 1. Hol dir dini ServerPilot API-Credentials {#1-get-your-serverpilot-api-credentials}

1. Log dich i dim ServerPilot Dashboard ii
2. Gang zu "Account" > "API"
3. Erstell en neui API-Key, falls du no kei hesch
4. Kopier din Client ID und de API-Key

### 2. Hol dir dini App ID {#2-get-your-app-id}

1. Im ServerPilot Dashboard gang zu "Apps"
2. Wähl d'App us, wo dini WordPress Multisite hostet isch
3. D'App ID isch i de URL sichtbar: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Füeg Konstante zu wp-config.php hinzu {#3-add-constants-to-wp-configphp}

Füeg die folgendi Konstante in dini `wp-config.php` Datei ii:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktiviere d'Integration {#4-enable-the-integration}

1. Im WordPress Admin gang zu Ultimate Multisite > Settings
2. Navigier zur Register "Domain Mapping" (Domain-Zuordnung)
3. Scroll nach unten bis zu "Host Integrations" (Host-Integrationen)
4. Aktiviere d'ServerPilot Integration
5. Klick uf "Save Changes" (Änderige speichern)

## Wie funktioniert das? {#how-it-works}

### Domain-Synchronisation {#domain-syncing}

Wenn en Domain in Ultimate Multisite abgebunde wird:

1. D'Integration holt d'aktuell Liste vun de domänenen vum ServerPilot.
2. Et füegt d'neui domäne zur Liste bi (mit ere www-Version, falls nötig).
3. Et sendet d'aktualiséiert Liste an ServerPilot über d'API.
4. ServerPilot aktualiseiert d'domänenliste fir dini Applikation.

### SSL Zertifikat Management {#ssl-certificate-management}

Nachdem d'domänen gesynct gstellt sinn:

1. D'integration aktivert automatisch AutoSSL fir dini Applikation.
2. ServerPilot verwaltet d'Zertifikat-Ussendig und -installatioun mit Let's Encrypt.
3. ServerPilot verwaltet au d'automatisch erneuerting vum SSL-Zertifikaten.

## SSL Zertifikat Verifikatioun {#ssl-certificate-verification}

D'integration isch so konfiguriert, dass sie d'Anzahl vun de Versuech fir d'SSL-Zertifikat-Verifikatioun fir ServerPilot erhöht, well et chönnt Zit bruche fir ServerPilot d'SSL-Zertifikat usz'gäbe und z'installiere. Standardmässig probiert et bis zu 5 Mal, aber das cha mit Filters aapasst werde.

## Problembehebig (Troubleshooting) {#troubleshooting}

### API Verbindigssprobleme {#api-connection-issues}
- Überprüef, ob dini Client ID und d'API Key richtig sinn.
- Prüef, ob dini App ID richtig isch.
- Stell sicher, dass din ServerPilot Account d'nötige Berechtigunge het.

### SSL Zertifikatsprobleme {#ssl-certificate-issues}
- ServerPilot verlangt, dass domänen gültigi DNS-Einträge händ, wo uf din Server zeige, bevor SSL-Zertifikat usgäh werde chönne werre.
- Wenn SSL-Zertifikat nöd usgäh werde, überprüef, ob dini domänen richtig uf d'IP-Adrässe vun dim Server zeige.
- Es chönnt Zit bruche fir ServerPilot d'SSL-Zertifikat usz'gäbe und z'installiere (normalerwiis 5-15 Minute).

### Domäne nöd hinzugefügt {#domain-not-added}
- Überprüef d'Ultimate Multisite Logs uf irgendwelchi Fehlermeldige.
- Stell sicher, dass d'domäne nöd scho zu ServerPilot hinzugefügt isch.
- Sorg dafür, dass din ServerPilot Plan d'Anzahl vun de domänen unterstützt, wo du hinzufüegsch.

### Domäne entferne {#domain-removal}

- Aktuell bietet d'ServerPilot API kei Möglichkeit, einzelni Domänen z'entferne.
- Wenn e Domänemapping in Ultimate Multisite entfernt wird, aktualisiert d'Integration d'Domänelliste in ServerPilot, indem sie die entfernti Domäne usschliesst.
