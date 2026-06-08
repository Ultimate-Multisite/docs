---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## Überblick

Hostinger ist ein beliebter Webhosting-Anbieter mit einem modernen Control Panel namens hPanel. Die Ultimate Multisite Hostinger Integration ermöglicht die automatische Synchronisierung von Domains zwischen Ultimate Multisite und Hostingers hPanel. Dadurch können Sie Domain-Mappings und Subdomains direkt aus Ihrem WordPress-Admin verwalten.

## Funktionen

- Automatische Erstellung von Addon Domains in hPanel
- Automatische Erstellung von Subdomains in hPanel (für Subdomain-Multisite-Installationen)
- Entfernung von Domains, wenn die Mappings gelöscht werden
- Nahtlose Integration mit der Domain-Management-API von hPanel

## Voraussetzungen

Um die Hostinger Integration zu nutzen, benötigen Sie:

1. Ein Hostinger-Konto mit hPanel-Zugriff
2. Ein API-Token von Hostinger
3. Die folgenden Konstanten, die in Ihrer `wp-config.php` Datei definiert sind:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Optional können Sie auch definieren:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Einrichtungsanweisungen

### 1. Generieren Sie Ihr Hostinger API Token

1. Melden Sie sich bei Ihrem Hostinger-Konto an und rufen Sie hPanel auf.
2. Navigieren Sie zu **Account Settings** → **API Tokens**.
3. Klicken Sie auf **Create New Token**.
4. Geben Sie Ihrem Token einen beschreibenden Namen (z. B. "Ultimate Multisite").
5. Wählen Sie die notwendigen Berechtigungen aus:
   - Domain management
   - Subdomain management
6. Kopieren Sie das generierte Token und speichern Sie es sicher.

### 2. Finden Sie Ihre Account ID

1. Gehen Sie in hPanel zu **Account Settings** → **Account Information**.
2. Ihre Account ID wird auf dieser Seite angezeigt.
3. Kopieren und speichern Sie diese ID für den nächsten Schritt.

### 3. Konstanten zu wp-config.php hinzufügen

Fügen Sie die folgenden Konstanten zu Ihrer `wp-config.php` Datei hinzu:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Wenn Ihr Hostinger-Konto einen anderen API-Endpunkt verwendet, können Sie diesen anpassen:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Die Integration aktivieren

1. Gehen Sie in Ihrem WordPress-Admin zu **Ultimate Multisite > Settings**.
2. Navigieren Sie zum Tab **Domain Mapping**.
3. Scrollen Sie zu **Host Integrations**.
4. Aktivieren Sie die Integration **Hostinger (hPanel)**.
5. Klicken Sie auf **Save Changes**.

## Funktionsweise

### Addon Domains

Wenn Sie eine Domain in Ultimate Multisite mappen:

1. Sendet die Integration eine Anfrage an die Hostinger API, um die Domain als Addon Domain hinzuzufügen.
2. Die Domain wird so konfiguriert, dass sie auf Ihr Stammverzeichnis zeigt.
3. Wird ein Domain Mapping entfernt, entfernt die Integration automatisch die Addon Domain aus hPanel.

### Subdomains

Bei Subdomain-Multisite-Installationen wird, wenn eine neue Website erstellt wird:

1. Extrahiert die Integration den Subdomain-Teil aus der vollständigen Domain.
2. Sie sendet eine Anfrage an die Hostinger API, um die Subdomain hinzuzufügen.
3. Die Subdomain wird so konfiguriert, dass sie auf Ihr Stammverzeichnis zeigt.

## Wichtige Hinweise

- Die Integration nutzt die REST API von Hostinger, um mit Ihrem Konto zu kommunizieren.
- Ihr API-Token muss über die notwendigen Berechtigungen für das Domain- und Subdomain-Management verfügen.
- Die Integration kümmert sich nicht um die DNS-Konfiguration; die Domains müssen bereits auf Ihr Hostinger-Konto zeigen.
- API-Anfragen erfolgen sicher über HTTPS.
- Bewahren Sie Ihr API-Token sicher auf und geben Sie es niemals öffentlich weiter.

## Fehlerbehebung

### API-Verbindungsfehler

- Überprüfen Sie, ob Ihr API-Token korrekt ist und nicht abgelaufen ist.
- Stellen Sie sicher, dass Ihre Account ID korrekt ist.
- Vergewissern Sie sich, dass Ihr API-Token über die notwendigen Berechtigungen für das Domain-Management verfügt.
- Überprüfen Sie, ob Ihr Hostinger-Konto aktiv und in Ordnung ist.

### Domain wird nicht hinzugefügt

- Überprüfen Sie die Ultimate Multisite Logs auf Fehlermeldungen.
- Vergewissern Sie sich, dass die Domain nicht bereits zu Ihrem Hostinger-Konto hinzugefügt ist.
- Stellen Sie sicher, dass Ihr Hostinger-Konto nicht sein Limit für Addon Domains erreicht hat.
- Bestätigen Sie, dass die Domain korrekt auf Ihre Hostinger Nameserver zeigt.

### SSL-Zertifikat-Probleme

- Die Integration kümmert sich nicht um die Ausstellung von SSL-Zertifikaten.
- Hostinger stellt in der Regel kostenlose SSL-Zertifikate über AutoSSL bereit.
- Sie können SSL-Zertifikate direkt in hPanel unter **SSL/TLS** verwalten.
- Alternativ können Sie Let's Encrypt mit Hostingers AutoSSL-Funktion nutzen.

## Support

Für weitere Hilfe zur Hostinger Integration besuchen Sie bitte:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
