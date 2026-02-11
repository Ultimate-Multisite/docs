---
title: Kontrollpanel-Integration verbessern
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## Overview
Enhance ist ein modernes Control Panel, das leistungsstarke Hosting-Automatisierung und Verwaltungsfunktionen bietet. Diese Integration ermöglicht die automatische Synchronisierung von Domains und die Verwaltung von SSL-Zertifikaten zwischen Ultimate Multisite und Enhance Control Panel.

**Related Discussion:** Siehe [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) für Community-Tipps und weitere Informationen.

## Features
- Automatische Domain-Synchronisierung, wenn Domains in Ultimate Multisite zugeordnet werden
- Automatische Bereitstellung von SSL-Zertifikaten über LetsEncrypt, wenn DNS aufgelöst wird
- Unterstützung von Subdomains für Netzwerke, die im Subdomain-Modus laufen
- Domain-Entfernung, wenn Zuordnungen gelöscht werden
- Verbindungsprüfung zur Überprüfung der API-Anmeldeinformationen

## Requirements

### System Requirements
- Enhance Control Panel installiert und zugänglich
- WordPress Multisite-Installation, die auf einem Enhance-Server gehostet oder mit diesem verbunden ist
- Apache-Webserver (Enhance unterstützt derzeit Apache-Konfigurationen; LiteSpeed Enterprise ist zu reduzierten Kosten verfügbar)

### API Access
Sie müssen Administratorzugriff auf das Enhance Control Panel haben, um API-Token zu erstellen.

## Getting Your API Credentials

### 1. Create an API Token

1. Melden Sie sich als Administrator in Ihrem Enhance Control Panel an
2. Klicken Sie im Navigationsmenü auf **Settings**
3. Navigieren Sie zu **Access Tokens**
4. Klicken Sie auf **Create Token**
5. Geben Sie dem Token einen beschreibenden Namen (z. B. „Ultimate Multisite Integration“)
6. Weisen Sie die Rolle **System Administrator** zu
7. Für das Ablaufdatum:
   - Leer lassen, wenn der Token nie ablaufen soll
   - Oder legen Sie ein bestimmtes Ablaufdatum aus Sicherheitsgründen fest
8. Klicken Sie auf **Create**

Nach der Erstellung werden Ihr **Access Token** und Ihre **Organization ID** angezeigt. **Speichern Sie diese sofort**, da der Token nur einmal angezeigt wird.

### 2. Get Your Organization ID

Die Organization ID wird auf der Seite Access Tokens in einem blauen Informationsfeld mit der Beschriftung „Org ID: {your_id}“ angezeigt.

Die Organization ID ist eine UUID im Format: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Sie können die Organization ID eines Kunden auch finden, indem Sie:
1. Gehen Sie zur Seite **Customers**
2. Klicken Sie auf **Manage customer** für den betreffenden Kunden
3. Schauen Sie sich die URL an – die Organization ID sind die alphanumerischen Zeichen nach `/customers/`

### 3. Get Your Server ID

Um Ihre Server ID zu finden (erforderlich für Domain-Operationen):
1. Navigieren Sie im Enhance Control Panel zu **Servers**
2. Klicken Sie auf den Server, auf dem Ihre WordPress-Installation läuft
3. Die Server ID (UUID-Format) ist in der URL oder in den Serverdetails sichtbar
4. Alternativ können Sie die API verwenden, um Server aufzulisten:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Die Server ID folgt dem UUID-Format: `00000000-0000-0000-0000-000000000000`

### 4. Get Your API URL

Ihre API-URL ist Ihre Enhance Control Panel-URL mit angehängtem `/api/`:

```
https://your-enhance-panel.com/api/
```

**Wichtig:** Der Pfad `/api/` ist erforderlich. Häufige Fehler sind:
- Nur die Domain ohne `/api/` verwenden
- HTTP anstelle von HTTPS verwenden (HTTPS ist aus Sicherheitsgründen erforderlich)

## Configuration

### Required Constants

Fügen Sie die folgenden Konstanten zu Ihrer `wp-config.php`-Datei hinzu:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Setup via Integration Wizard

1. Gehen Sie in Ihrem WordPress-Admin zu **Ultimate Multisite** > **Settings**
2. Navigieren Sie zum Tab **Integrations**
3. Finden Sie **Enhance Control Panel Integration** und klicken Sie auf **Configuration**
4. Der Assistent führt Sie durch die Einrichtung:
   - **Schritt 1:** Einführung und Funktionsübersicht
   - **Schritt 2:** Geben Sie Ihre API-Anmeldeinformationen ein (Token, API-URL, Server ID)
   - **Schritt 3:** Testen Sie die Verbindung
   - **Schritt 4:** Überprüfen und aktivieren

Sie können wählen:
- Lassen Sie den Assistenten die Konstanten automatisch in Ihre `wp-config.php`-Datei einfügen
- Kopieren Sie die Konstantendefinitionen und fügen Sie sie manuell hinzu

## Additional WordPress Configuration

Basierend auf Community-Feedback ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) müssen Sie möglicherweise diese zusätzlichen Einstellungen konfigurieren:

### .htaccess Configuration

Wenn Sie Probleme mit der Domainzuordnung haben:
1. Löschen Sie die ursprüngliche Enhance `.htaccess`-Datei
2. Ersetzen Sie sie durch die Standard-WordPress-Multisite-`.htaccess`-Datei

### Cookie Constants

Fügen Sie diese Konstanten zu `wp-config.php` hinzu, um eine ordnungsgemäße Cookie-Verwaltung über zugeordnete Domains hinweg sicherzustellen:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## How It Works

### When a Domain is Mapped

1. Ein Benutzer ordnet einer Domain in Ultimate Multisite eine benutzerdefinierte Domain zu (oder eine neue Site wird im Subdomain-Modus erstellt)
2. Die Integration sendet eine POST-Anfrage an die Enhance-API: `/servers/{server_id}/domains`
3. Enhance fügt die Domain Ihrer Serverkonfiguration hinzu
4. Sobald DNS auf Ihren Server zeigt, stellt Enhance automatisch ein SSL-Zertifikat über LetsEncrypt bereit
5. Die Domain wird mit HTTPS aktiv

### When a Domain is Removed

1. Eine Domainzuordnung wird in Ultimate Multisite gelöscht
2. Die Integration fragt Enhance nach der ID der Domain ab
3. Eine DELETE-Anfrage wird an `/servers/{server_id}/domains/{domain_id}` gesendet
4. Enhance entfernt die Domain aus Ihrer Serverkonfiguration

### DNS and SSL Checking

Ultimate Multisite enthält integrierte DNS- und SSL-Überprüfung:
- Sie können das Prüfintervall in **Domain Mapping Settings** konfigurieren (Standard: 300 Sekunden/5 Minuten)
- Das System überprüft die DNS-Propagation, bevor eine Domain als aktiv markiert wird
- Die Gültigkeit des SSL-Zertifikats wird automatisch überprüft
- Enhance verwaltet die SSL-Bereitstellung automatisch, sodass keine manuelle SSL-Konfiguration erforderlich ist

## Verifying Setup

### Test the Connection

1. Verwenden Sie im Integration-Assistenten den Schritt **Test Connection**
2. Das Plugin versucht, die Domains auf Ihrem Server aufzulisten
3. Eine Erfolgsmeldung bestätigt:
   - API-Anmeldeinformationen sind korrekt
   - API-URL ist zugänglich
   - Server ID ist gültig
   - Berechtigungen sind korrekt gesetzt

### After Mapping a Domain

1. Ordnen Sie eine Testdomain in Ultimate Multisite zu
2. Überprüfen Sie die Ultimate Multisite-Protokolle (**Ultimate Multisite** > **Logs** > **integration-enhance**) 
3. Überprüfen Sie im Enhance Control Panel, ob die Domain hinzugefügt wurde:
   - Gehen Sie zu **Servers** > **Your Server** > **Domains**
   - Die neue Domain sollte in der Liste erscheinen
4. Sobald DNS propagiert, überprüfen Sie, ob SSL automatisch bereitgestellt wurde

## Troubleshooting

### API Connection Issues

**Fehler: „Failed to connect to Enhance API“**
- Überprüfen Sie, ob `WU_ENHANCE_API_URL` `/api/` am Ende enthält
- Stellen Sie sicher, dass Sie HTTPS und nicht HTTP verwenden
- Prüfen Sie, ob das Enhance-Panel von Ihrem WordPress-Server aus zugänglich ist
- Stellen Sie sicher, dass keine Firewallregeln die Verbindung blockieren

**Fehler: „Enhance API Token not found“**
- Stellen Sie sicher, dass `WU_ENHANCE_API_TOKEN` in `wp-config.php` definiert ist
- Überprüfen Sie, ob der Token nicht gelöscht oder abgelaufen ist
- Prüfen Sie auf Tippfehler im Tokenwert

**Fehler: „Server ID is not configured“**
- Stellen Sie sicher, dass `WU_ENHANCE_SERVER_ID` in `wp-config.php` definiert ist
- Stellen Sie sicher, dass die Server ID ein gültiges UUID-Format ist
- Bestätigen Sie, dass der Server in Ihrem Enhance-Panel existiert

### Domain Not Added

**Überprüfen Sie die Protokolle:**
1. Gehen Sie zu **Ultimate Multisite** > **Logs**
2. Filtern Sie nach **integration-enhance**
3. Suchen Sie nach Fehlermeldungen, die das Problem anzeigen

**Häufige Ursachen:**
- Ungültiges Domainnamenformat
- Domain existiert bereits in Enhance
- Unzureichende API-Berechtigungen (stellen Sie sicher, dass der Token die Rolle System Administrator hat)
- Server ID stimmt nicht mit dem tatsächlichen Server in Enhance überein

### SSL Certificate Issues

**SSL nicht bereitgestellt:**
- Überprüfen Sie, ob DNS auf die IP-Adresse Ihres Servers zeigt
- Prüfen Sie, ob die Domain korrekt aufgelöst wird: `nslookup yourdomain.com`
- Enhance benötigt, dass DNS aufgelöst wird, bevor es SSL bereitstellen kann
- Die SSL-Bereitstellung dauert in der Regel 5–10 Minuten nach der DNS-Propagation
- Prüfen Sie die Enhance Control Panel-Protokolle auf SSL-spezifische Fehler

**Manuelle SSL-Fehlerbehebung in Enhance:**
1. Gehen Sie zu **Servers** > **Your Server** > **Domains**
2. Finden Sie Ihre Domain und prüfen Sie ihren SSL-Status
3. Sie können die SSL-Bereitstellung manuell auslösen, falls erforderlich

### DNS Check Interval

Wenn Domains oder SSL-Zertifikate zu lange brauchen, um aktiviert zu werden:
1. Gehen Sie zu **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Finden Sie die Einstellung **DNS Check Interval**
3. Passen Sie von den Standard 300 Sekunden auf einen niedrigeren Wert an (Minimum: 10 Sekunden)
4. **Hinweis:** Kürzere Intervalle bedeuten häufigere Prüfungen, aber höhere Serverlast

### Authentication Errors

**HTTP 401/403 Fehler:**
- Erzeugen Sie Ihren API-Token in Enhance neu
- Stellen Sie sicher, dass der Token die Rolle **System Administrator** hat
- Prüfen Sie, ob der Token nicht abgelaufen ist
- Stellen Sie sicher, dass Sie die korrekte Organization ID verwenden (obwohl sie in der URL normalerweise nicht erforderlich ist)

### Log Analysis

Aktivieren Sie detailliertes Logging:

```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Dann überprüfen Sie die Protokolle unter:
- Ultimate Multisite-Protokolle: **Ultimate Multisite** > **Logs**
- WordPress-Debug-Log: `wp-content/debug.log`
- Enhance-Panel-Protokolle: Verfügbar in der Admin-Oberfläche von Enhance

## API Reference

### Authentication

Alle API-Anfragen verwenden die Bearer-Token-Authentifizierung:

```bash
Authorization: Bearer YOUR_TOKEN_HERE
```

### Common Endpoints Used

**List Servers:**

```bash
GET /servers
```

**List Domains on a Server:**

```bash
GET /servers/{server_id}/domains
```

**Add a Domain:**

```bash
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**

```bash
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Documentation

Vollständige API-Dokumentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices

### Security

- **Nie API-Token in die Versionskontrolle einchecken**
- Speichern Sie Token in `wp-config.php`, die von Git ausgeschlossen werden sollte
- Verwenden Sie Token mit entsprechenden Berechtigungen (System Administrator für vollständige Integration)
- Legen Sie Ablaufdaten für Produktionsumgebungen fest
- Rotieren Sie Token regelmäßig

### Performance

- Verwenden Sie das Standard-DNS-Prüfintervall (300 Sekunden), um übermäßige API-Aufrufe zu vermeiden
- Überwachen Sie die Enhance-Serverressourcen bei groß angelegten Domain-Operationen
- Erwägen Sie das gestaffelte Hinzufügen von Domains, wenn viele Domains gleichzeitig zugeordnet werden

### Monitoring

- Überprüfen Sie regelmäßig die Ultimate Multisite-Protokolle auf Integrationsfehler
- Richten Sie eine Überwachung für fehlgeschlagene Domainhinzufügungen ein
- Überprüfen Sie, ob SSL-Zertifikate korrekt bereitgestellt werden
- Behalten Sie die Enhance-Serverkapazität und Domainlimits im Auge

## Additional Resources

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** See wiki page "How to Configure Domain Mapping v2"

## Support

Wenn Sie Probleme haben:
1. Überprüfen Sie den Abschnitt Fehlerbehebung oben
2. Überprüfen Sie die Ultimate Multisite-Protokolle
3. Konsultieren Sie die [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktieren Sie Enhance Support für panel-spezifische Probleme
5. Erstellen Sie eine neue Diskussion mit detaillierten Fehlermeldungen für die Community-Hilfe

## Notes

- Diese Integration behandelt nur Domain-Aliase; Enhance verwaltet SSL automatisch
- Die Integration unterstützt sowohl benutzerdefinierte Domainzuordnungen als auch subdomain-basierte Sites
- Die automatische Erstellung von www-Subdomains kann in den Domain Mapping-Einstellungen konfiguriert werden
- Enhance unterstützt derzeit Apache-Konfigurationen (LiteSpeed Enterprise verfügbar)
- Die Entfernung einer Domain aus Ultimate Multisite entfernt die Domain aus Enhance, löscht jedoch möglicherweise nicht sofort die zugehörigen SSL-Zertifikate
