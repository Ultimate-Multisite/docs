---
title: Closte Integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration

## Überblick
Closte ist eine verwaltete WordPress-Hosting-Plattform, die auf der Google Cloud-Infrastruktur basiert. Diese Integration ermöglicht die automatische Domain-Synchronisierung und das SSL-Zertifikatsmanagement zwischen Ultimate Multisite und Closte.

## Funktionen
- Automatische Domain-Synchronisierung
- SSL-Zertifikatsmanagement
- Wildcard-Domain-Unterstützung
- Keine Konfiguration erforderlich, wenn auf Closte ausgeführt

## Voraussetzungen
Die folgende Konstante muss in Ihrer `wp-config.php`-Datei definiert sein, wenn Sie Closte verwenden:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Diese Konstante ist in der Regel bereits definiert, wenn Sie auf Closte gehostet werden.

## Installationsanweisungen

### 1. Überprüfen Sie Ihren Closte API Key
Wenn Sie auf Closte gehostet werden, sollte die Konstante `CLOSTE_CLIENT_API_KEY` bereits in Ihrer `wp-config.php`-Datei definiert sein. Sie können dies überprüfen, indem Sie Ihre `wp-config.php`-Datei prüfen.

### 2. Aktivieren Sie die Integration
1. In Ihrem WordPress-Admin gehen Sie zu Ultimate Multisite > Einstellungen
2. Navigieren Sie zum Tab „Domain Mapping“
3. Scrollen Sie nach unten zu „Host Integrations“
4. Aktivieren Sie die Closte-Integration
5. Klicken Sie auf „Save Changes“

## Wie es funktioniert
Wenn eine Domain in Ultimate Multisite zugeordnet wird:

1. Die Integration sendet eine Anfrage an die Closte-API, um die Domain zu Ihrer Anwendung hinzuzufügen
2. Closte verwaltet die Bereitstellung von SSL-Zertifikaten automatisch
3. Wenn eine Domain-Zuordnung entfernt wird, entfernt die Integration die Domain von Closte

Die Integration funktioniert auch mit der Einstellung für den DNS-Check-Intervall in Ultimate Multisite, sodass Sie konfigurieren können, wie häufig das System nach DNS-Propagation und SSL-Zertifikatsausstellung prüft.

## Domain-Record-Erstellung
Diese Integration stellt sicher, dass beim Erstellen oder Duplizieren einer Website ein Domain-Record automatisch erstellt wird. Dies ist besonders wichtig für die Closte-Integration, da die Erstellung des Domain-Records die Closte-API veranlasst, die Domain und das SSL-Zertifikat zu erstellen.

## Fehlerbehebung

### API-Verbindungsprobleme
- Stellen Sie sicher, dass Ihr Closte API Key korrekt ist
- Stellen Sie sicher, dass Ihr Closte-Konto die erforderlichen Berechtigungen hat

### SSL-Zertifikatsprobleme
- Closte kann einige Zeit benötigen, um SSL-Zertifikate auszustellen (in der Regel 5–10 Minuten)
- Stellen Sie sicher, dass Ihre Domains korrekt auf die IP-Adresse Ihres Closte-Servers zeigen
- Überprüfen Sie die DNS-Einträge Ihrer Domain, um sicherzustellen, dass sie korrekt konfiguriert sind

### Domain nicht hinzugefügt
- Überprüfen Sie die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Stellen Sie sicher, dass die Domain nicht bereits zu Closte hinzugefügt wurde
- Stellen Sie sicher, dass die DNS-Einträge Ihrer Domain korrekt konfiguriert sind

### DNS-Check-Intervall
- Wenn SSL-Zertifikate zu lange ausstellen, können Sie das DNS-Check-Intervall in den Domain Mapping-Einstellungen anpassen
- Das Standardintervall beträgt 300 Sekunden (5 Minuten), aber Sie können es auf 10 Sekunden reduzieren, um die Prüfung während des Testens zu beschleunigen
