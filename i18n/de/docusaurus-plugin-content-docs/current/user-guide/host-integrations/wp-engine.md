---
title: WP Engine Integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## Überblick
WP Engine ist eine Premium-Plattform für verwaltetes WordPress-Hosting, die optimierte Leistung, Sicherheit und Skalierbarkeit für WordPress-Websites bietet. Diese Integration ermöglicht die automatische Domain-Synchronisierung zwischen Ultimate Multisite und WP Engine.

## Funktionen
- Automatische Domain-Synchronisierung
- Subdomain-Unterstützung für Multisite-Installationen
- Nahtlose Integration mit den bestehenden Systemen von WP Engine

## Anforderungen
Die Integration erkennt automatisch, ob Sie auf WP Engine gehostet werden, und verwendet die integrierte WP Engine API. Keine zusätzliche Konfiguration ist erforderlich, wenn das WP Engine-Plugin aktiv und korrekt konfiguriert ist.

Falls Sie die Integration jedoch manuell konfigurieren müssen, können Sie eine dieser Konstanten in Ihrer `wp-config.php`-Datei definieren:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Installationsanweisungen

### 1. WP Engine-Plugin überprüfen
Wenn Sie auf WP Engine gehostet werden, sollte das WP Engine-Plugin bereits installiert und aktiviert sein. Vergewissern Sie sich, dass:
1. Das WP Engine-Plugin ist aktiv
2. Die Datei `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existiert

### 2. Integration aktivieren
1. In Ihrem WordPress-Admin gehen Sie zu Ultimate Multisite > Einstellungen
2. Navigieren Sie zum Tab „Domain Mapping“
3. Scrollen Sie nach unten zu „Host Integrations“
4. Aktivieren Sie die WP Engine-Integration
5. Klicken Sie auf „Save Changes“

## Wie es funktioniert

### Domain-Synchronisierung
Wenn eine Domain in Ultimate Multisite zugeordnet wird:
1. Die Integration verwendet die WP Engine API, um die Domain Ihrer WP Engine-Installation hinzuzufügen
2. WP Engine kümmert sich um die Domainkonfiguration und die Ausstellung des SSL-Zertifikats
3. Wenn eine Domainzuordnung entfernt wird, entfernt die Integration die Domain von WP Engine

### Subdomain-Unterstützung
Für Subdomain-Multisite-Installationen:
1. Die Integration fügt jeder Subdomain bei der Erstellung einer neuen Site WP Engine hinzu
2. WP Engine kümmert sich um die Subdomainkonfiguration
3. Wenn eine Site gelöscht wird, entfernt die Integration die Subdomain von WP Engine

## Wichtige Hinweise

### Wildcard-Domains
Für Subdomain-Multisite-Installationen wird empfohlen, den WP Engine-Support zu kontaktieren, um eine Wildcard-Domain-Konfiguration anzufordern. Dadurch können alle Subdomains automatisch funktionieren, ohne dass jede einzeln hinzugefügt werden muss.

### SSL-Zertifikate
WP Engine kümmert sich automatisch um die Ausstellung und Erneuerung von SSL-Zertifikaten für alle über diese Integration hinzugefügten Domains. Keine zusätzliche Konfiguration ist erforderlich.

## Fehlerbehebung

### API-Verbindungsprobleme
- Vergewissern Sie sich, dass das WP Engine-Plugin aktiv und korrekt konfiguriert ist
- Wenn Sie den API-Schlüssel manuell definiert haben, überprüfen Sie, ob er korrekt ist
- Kontaktieren Sie den WP Engine-Support, wenn Sie Probleme mit der API haben

### Domain nicht hinzugefügt
- Überprüfen Sie die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Vergewissern Sie sich, dass die Domain nicht bereits zu WP Engine hinzugefügt wurde
- Stellen Sie sicher, dass Ihr WP Engine-Plan die Anzahl der hinzugefügten Domains unterstützt

### Subdomain-Probleme
- Wenn Subdomains nicht funktionieren, kontaktieren Sie den WP Engine-Support, um eine Wildcard-Domain-Konfiguration anzufordern
- Vergewissern Sie sich, dass Ihre DNS-Einstellungen für die Hauptdomain und Subdomains korrekt konfiguriert sind
