---
title: cPanel-Integration
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration

## Überblick
cPanel ist eines der beliebtesten Webhosting-Kontrollpanels, das von vielen Shared- und Dedicated-Hosting-Anbietern verwendet wird. Diese Integration ermöglicht die automatische Synchronisierung von Domains zwischen Ultimate Multisite und cPanel, sodass Sie Domain-Aliase und Subdomains automatisch zu Ihrem cPanel-Konto hinzufügen können.

## Funktionen
- Automatische Erstellung von Addon-Domains in cPanel
- Automatische Erstellung von Subdomains in cPanel (für Subdomain-Multisite-Installationen)
- Domain-Entfernung, wenn Zuordnungen gelöscht werden

## Anforderungen
Die folgenden Konstanten müssen in Ihrer `wp-config.php`-Datei definiert werden:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optional können Sie auch definieren:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Installationsanweisungen

### 1. Holen Sie sich Ihre cPanel-Anmeldeinformationen

1. Holen Sie sich Ihren cPanel-Benutzernamen und Ihr Passwort von Ihrem Hosting-Anbieter
2. Bestimmen Sie Ihren cPanel-Host (normalerweise `cpanel.yourdomain.com` oder `yourdomain.com:2083`)

### 2. Fügen Sie Konstanten zu wp-config.php hinzu

Fügen Sie die folgenden Konstanten zu Ihrer `wp-config.php`-Datei hinzu:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optional können Sie den Port und das Root-Verzeichnis anpassen:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Aktivieren Sie die Integration

1. Gehen Sie in Ihrem WordPress-Admin zu Ultimate Multisite > Einstellungen
2. Navigieren Sie zum Tab "Domain Mapping"
3. Scrollen Sie nach unten zu "Host Integrations"
4. Aktivieren Sie die cPanel-Integration
5. Klicken Sie auf "Save Changes"

## Wie es funktioniert

### Addon-Domains

Wenn eine Domain in Ultimate Multisite zugeordnet wird:

1. Die Integration sendet eine Anfrage an die cPanel-API, um die Domain als Addon-Domain hinzuzufügen
2. Die Domain wird so konfiguriert, dass sie auf Ihr Root-Verzeichnis zeigt
3. Wenn eine Domain-Zuordnung entfernt wird, entfernt die Integration die Addon-Domain von cPanel

### Subdomains

Für Subdomain-Multisite-Installationen, wenn eine neue Site erstellt wird:

1. Die Integration extrahiert den Subdomain-Teil aus der vollständigen Domain
2. Sie sendet eine Anfrage an die cPanel-API, um die Subdomain hinzuzufügen
3. Die Subdomain wird so konfiguriert, dass sie auf Ihr Root-Verzeichnis zeigt

## Wichtige Hinweise

- Die Integration verwendet cPanel's API2, um mit Ihrem cPanel-Konto zu kommunizieren
- Ihr cPanel-Konto muss die Berechtigungen haben, Addon-Domains und Subdomains hinzuzufügen
- Einige Hosting-Anbieter können die Anzahl der Addon-Domains oder Subdomains, die Sie erstellen können, begrenzen
- Die Integration kümmert sich nicht um die DNS-Konfiguration; Sie müssen Ihre Domains weiterhin auf die IP-Adresse Ihres Servers verweisen

## Fehlerbehebung

### API-Verbindungsprobleme

- Überprüfen Sie, ob Ihr cPanel-Benutzername und Passwort korrekt sind
- Überprüfen Sie, ob Ihr cPanel-Host korrekt und erreichbar ist
- Stellen Sie sicher, dass Ihr cPanel-Konto die erforderlichen Berechtigungen hat
- Versuchen Sie, die vollständige URL für den Host zu verwenden (z. B. `https://cpanel.yourdomain.com`)

### Domain nicht hinzugefügt

- Überprüfen Sie die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Überprüfen Sie, ob die Domain nicht bereits zu cPanel hinzugefügt wurde
- Stellen Sie sicher, dass Ihr cPanel-Konto sein Limit für Addon-Domains oder Subdomains nicht erreicht hat

### SSL-Zertifikatsprobleme

- Die Integration kümmert sich nicht um die Ausstellung von SSL-Zertifikaten
- Sie müssen die SSL/TLS-Tools oder die AutoSSL-Funktion von cPanel verwenden, um SSL-Zertifikate für Ihre Domains auszustellen
- Alternativ können Sie einen Dienst wie Let's Encrypt mit cPanel's AutoSSL verwenden
