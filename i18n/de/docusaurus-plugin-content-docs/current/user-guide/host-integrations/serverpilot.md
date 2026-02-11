---
title: ServerPilot-Integration
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot-Integration

## Überblick
ServerPilot ist ein Cloud-Dienst zum Hosten von WordPress- und anderen PHP-Websites auf Servern bei DigitalOcean, Amazon, Google oder jedem anderen Serveranbieter. Diese Integration ermöglicht die automatische Domain-Synchronisierung und das SSL-Zertifikatsmanagement zwischen Ultimate Multisite und ServerPilot.

## Funktionen
- Automatische Domain-Synchronisierung
- SSL-Zertifikatsverwaltung mit Let's Encrypt
- Automatische SSL-Erneuerung

## Anforderungen
Die folgenden Konstanten müssen in Ihrer `wp-config.php`-Datei definiert sein:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Installationsanweisungen

### 1. Erhalten Sie Ihre ServerPilot-API-Anmeldeinformationen
1. Melden Sie sich bei Ihrem ServerPilot-Dashboard an
2. Gehen Sie zu „Account“ > „API“
3. Erstellen Sie einen neuen API-Schlüssel, falls Sie noch keinen haben
4. Kopieren Sie Ihre Client ID und Ihren API-Schlüssel

### 2. Erhalten Sie Ihre App-ID
1. In Ihrem ServerPilot-Dashboard gehen Sie zu „Apps“
2. Wählen Sie die App aus, in der Ihre WordPress-Multisite gehostet wird
3. Die App-ID ist in der URL sichtbar: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Fügen Sie Konstanten zu wp-config.php hinzu
```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktivieren Sie die Integration
1. In Ihrem WordPress-Admin gehen Sie zu Ultimate Multisite > Einstellungen
2. Navigieren Sie zum Tab „Domain Mapping“
3. Scrollen Sie nach unten zu „Host Integrations“
4. Aktivieren Sie die ServerPilot-Integration
5. Klicken Sie auf „Save Changes“

## Wie es funktioniert

### Domain-Synchronisierung
Wenn eine Domain in Ultimate Multisite zugeordnet wird:
1. Die Integration ruft die aktuelle Liste der Domains von ServerPilot ab
2. Sie fügt die neue Domain der Liste hinzu (zusammen mit einer www-Version, falls zutreffend)
3. Sie sendet die aktualisierte Liste an ServerPilot über die API
4. ServerPilot aktualisiert die Domain-Liste für Ihre Anwendung

### SSL-Zertifikatsverwaltung
Nach der Synchronisierung der Domains:
1. Die Integration aktiviert automatisch AutoSSL für Ihre Anwendung
2. ServerPilot übernimmt die Ausstellung und Installation des SSL-Zertifikats mit Let's Encrypt
3. ServerPilot übernimmt auch die automatische Erneuerung der SSL-Zertifikate

## SSL-Zertifikatsverifizierung
Die Integration ist so konfiguriert, dass die Anzahl der SSL-Zertifikatsverifizierungsversuche für ServerPilot erhöht wird, da es einige Zeit dauern kann, bis ServerPilot SSL-Zertifikate ausstellt und installiert. Standardmäßig wird bis zu 5 Mal versucht, aber dies kann mit Filtern angepasst werden.

## Fehlerbehebung

### API-Verbindungsprobleme
- Stellen Sie sicher, dass Ihre Client ID und Ihr API-Schlüssel korrekt sind
- Überprüfen Sie, ob Ihre App-ID korrekt ist
- Stellen Sie sicher, dass Ihr ServerPilot-Konto die erforderlichen Berechtigungen hat

### SSL-Zertifikatsprobleme
- ServerPilot erfordert, dass Domains gültige DNS-Einträge haben, die auf Ihren Server verweisen, bevor SSL-Zertifikate ausgestellt werden
- Wenn SSL-Zertifikate nicht ausgestellt werden, überprüfen Sie, ob Ihre Domains korrekt auf die IP-Adresse Ihres Servers verweisen
- Es kann einige Zeit dauern, bis ServerPilot SSL-Zertifikate ausstellt und installiert (normalerweise 5–15 Minuten)

### Domain nicht hinzugefügt
- Überprüfen Sie die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Stellen Sie sicher, dass die Domain nicht bereits zu ServerPilot hinzugefügt wurde
- Stellen Sie sicher, dass Ihr ServerPilot-Plan die Anzahl der hinzugefügten Domains unterstützt

### Domainentfernung
Derzeit bietet die ServerPilot-API keine Möglichkeit, einzelne Domains zu entfernen
 - Wenn eine Domainzuordnung in Ultimate Multisite entfernt wird, aktualisiert die Integration die Domain-Liste in ServerPilot, um die entfernte Domain auszuschließen
