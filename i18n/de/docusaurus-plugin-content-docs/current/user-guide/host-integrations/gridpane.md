---
title: GridPane-Integration
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Überblick
GridPane ist ein spezialisiertes WordPress-Hosting-Kontrollpanel, das für ernsthafte WordPress-Profis entwickelt wurde. Diese Integration ermöglicht die automatische Domain-Synchronisierung und das SSL-Zertifikatsmanagement zwischen Ultimate Multisite und GridPane.

## Funktionen
- Automatische Domain-Synchronisierung
- SSL-Zertifikatsmanagement
- Automatische Konfiguration der SUNRISE-Konstante

## Anforderungen
Die folgenden Konstanten müssen in Ihrer `wp-config.php`-Datei definiert sein:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Installationsanweisungen

### 1. Holen Sie sich Ihre GridPane API-Zugangsdaten

1. Melden Sie sich bei Ihrem GridPane-Dashboard an
2. Gehen Sie zu "Settings" > "API"
3. Generieren Sie einen API-Schlüssel, falls Sie noch keinen haben
4. Kopieren Sie Ihren API-Schlüssel

### 2. Holen Sie sich Ihre Server- und Site-IDs

1. In Ihrem GridPane-Dashboard gehen Sie zu "Servers"
2. Wählen Sie den Server aus, auf dem Ihre WordPress-Multisite gehostet wird
3. Notieren Sie sich die Server-ID (sichtbar in der URL oder auf der Server-Detailseite)
4. Gehen Sie zu "Sites" und wählen Sie Ihre WordPress-Site aus
5. Notieren Sie sich die Site-ID (sichtbar in der URL oder auf der Site-Detailseite)

### 3. Fügen Sie Konstanten zu wp-config.php hinzu

Fügen Sie die folgenden Konstanten zu Ihrer `wp-config.php`-Datei hinzu:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktivieren Sie die Integration

1. In Ihrem WordPress-Admin gehen Sie zu Ultimate Multisite > Settings
2. Navigieren Sie zum Tab "Domain Mapping"
3. Scrollen Sie nach unten zu "Host Integrations"
4. Aktivieren Sie die GridPane-Integration
5. Klicken Sie auf "Save Changes"

## Wie es funktioniert

Wenn eine Domain in Ultimate Multisite gemappt wird:

1. Die Integration sendet eine Anfrage an die GridPane-API, um die Domain zu Ihrer Site hinzuzufügen
2. GridPane kümmert sich automatisch um die Bereitstellung von SSL-Zertifikaten
3. Wenn ein Domain-Mapping entfernt wird, entfernt die Integration die Domain von GridPane

Die Integration verwaltet außerdem die SUNRISE-Konstante in Ihrer wp-config.php-Datei automatisch, die für die korrekte Funktionsweise des Domain-Mappings erforderlich ist.

## SUNRISE-Konstantenverwaltung

Ein einzigartiges Merkmal der GridPane-Integration ist, dass sie die SUNRISE-Konstante in wp-config.php automatisch zurücksetzt, um Konflikte mit dem eigenen Domain-Mapping-System von GridPane zu verhindern. Dies stellt sicher, dass beide Systeme zusammenarbeiten können, ohne Probleme.

## Fehlerbehebung

### API-Verbindungsprobleme
- Überprüfen Sie, ob Ihr API-Schlüssel korrekt ist
- Überprüfen Sie, ob Ihre Server- und Site-IDs korrekt sind
- Stellen Sie sicher, dass Ihr GridPane-Konto die erforderlichen Berechtigungen hat

### SSL-Zertifikatsprobleme
- GridPane kann einige Zeit benötigen, um SSL-Zertifikate auszustellen
- Überprüfen Sie, ob Ihre Domains korrekt auf die IP-Adresse Ihres Servers zeigen
- Überprüfen Sie die GridPane-SSL-Einstellungen für Ihre Site

### Domain nicht hinzugefügt
- Überprüfen Sie die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Überprüfen Sie, ob die Domain nicht bereits zu GridPane hinzugefügt wurde
- Stellen Sie sicher, dass die DNS-Einträge Ihrer Domain korrekt konfiguriert sind
