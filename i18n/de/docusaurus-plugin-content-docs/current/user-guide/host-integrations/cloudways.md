---
title: Cloudways-Integration
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways-Integration

## Überblick
Cloudways ist eine verwaltete Cloud-Hosting-Plattform, die es Ihnen ermöglicht, WordPress-Websites auf verschiedenen Cloud-Anbietern wie DigitalOcean, AWS, Google Cloud und mehr bereitzustellen. Diese Integration ermöglicht die automatische Synchronisierung von Domains und die Verwaltung von SSL-Zertifikaten zwischen Ultimate Multisite und Cloudways.

## Funktionen
- Automatische Domain-Synchronisierung
- SSL-Zertifikatsverwaltung
- Unterstützung für zusätzliche Domains
- DNS-Validierung für SSL-Zertifikate

## Voraussetzungen
Die folgenden Konstanten müssen in Ihrer `wp-config.php`-Datei definiert werden:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optional können Sie auch definieren:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Installationsanweisungen

### 1. Erhalten Sie Ihre Cloudways-API-Anmeldeinformationen

1. Melden Sie sich bei Ihrem Cloudways-Dashboard an
2. Gehen Sie zu "Account" > "API Keys"
3. Erstellen Sie einen API-Schlüssel, falls Sie noch keinen haben
4. Kopieren Sie Ihre E-Mail und Ihren API-Schlüssel

### 2. Erhalten Sie Ihre Server- und Anwendungs-IDs

1. In Ihrem Cloudways-Dashboard gehen Sie zu "Servers"
2. Wählen Sie den Server aus, auf dem Ihre WordPress-Multisite gehostet wird
3. Die Server-ID ist in der URL sichtbar: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gehen Sie zu "Applications" und wählen Sie Ihre WordPress-Anwendung aus
5. Die App-ID ist in der URL sichtbar: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Fügen Sie Konstanten zu wp-config.php hinzu

Fügen Sie die folgenden Konstanten zu Ihrer `wp-config.php`-Datei hinzu:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Wenn Sie zusätzliche Domains haben, die immer einbezogen werden sollen:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Aktivieren Sie die Integration

1. In Ihrem WordPress-Admin gehen Sie zu Ultimate Multisite > Settings
2. Navigieren Sie zum Tab "Domain Mapping"
3. Scrollen Sie nach unten zu "Host Integrations"
4. Aktivieren Sie die Cloudways-Integration
5. Klicken Sie auf "Save Changes"

## Wie es funktioniert

### Domain-Synchronisierung

Wenn eine Domain in Ultimate Multisite zugeordnet wird:

1. Die Integration ruft alle derzeit zugeordneten Domains ab
2. Sie fügt die neue Domain der Liste hinzu (zusammen mit einer www-Version, falls zutreffend)
3. Sie sendet die vollständige Liste an Cloudways über die API
4. Cloudways aktualisiert die Domain-Aliase für Ihre Anwendung

Hinweis: Die Cloudways-API erfordert das Senden der vollständigen Domainliste jedes Mal, nicht nur das Hinzufügen oder Entfernen einzelner Domains.

### SSL-Zertifikatsverwaltung

Nach der Synchronisierung der Domains:

1. Die Integration prüft, welche Domains gültige DNS-Einträge haben, die auf Ihren Server verweisen
2. Sie sendet eine Anfrage an Cloudways, um Let's Encrypt SSL-Zertifikate für diese Domains zu installieren
3. Cloudways übernimmt die Ausstellung und Installation des SSL-Zertifikats

## Zusätzliche Domains

Die Konstante `WU_CLOUDWAYS_EXTRA_DOMAINS` ermöglicht es Ihnen, zusätzliche Domains anzugeben, die bei der Synchronisierung mit Cloudways immer einbezogen werden sollen. Das ist nützlich für:

- Domains, die nicht von Ultimate Multisite verwaltet werden
- Wildcard-Domains (z. B. `*.example.com`)
- Entwicklungs- oder Staging-Domains

## Fehlerbehebung

### API-Verbindungsprobleme

- Überprüfen Sie, ob Ihre E-Mail und Ihr API-Schlüssel korrekt sind
- Überprüfen Sie, ob Ihre Server- und Anwendungs-IDs korrekt sind
- Stellen Sie sicher, dass Ihr Cloudways-Konto die erforderlichen Berechtigungen hat

### SSL-Zertifikatsprobleme

- Cloudways erfordert, dass Domains gültige DNS-Einträge haben, die auf Ihren Server verweisen, bevor SSL-Zertifikate ausgestellt werden
- Die Integration überprüft DNS-Einträge, bevor SSL-Zertifikate angefordert werden
- Wenn SSL-Zertifikate nicht ausgestellt werden, überprüfen Sie, ob Ihre Domains korrekt auf die IP-Adresse Ihres Servers verweisen

### Domain nicht hinzugefügt

- Überprüfen Sie die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Stellen Sie sicher, dass die Domain nicht bereits zu Cloudways hinzugefügt wurde
- Stellen Sie sicher, dass Ihr Cloudways-Plan die Anzahl der hinzugefügten Domains unterstützt
