---
title: WP Engine Integratioun
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## Überblick
WP Engine isch e Premium Managed WordPress Hosting Plattform, wo optimierti Performance, Sicherheit und Skalierbarkeit für WordPress-Sites bietet. D'Integration ermöglicht automatisch Domain-Synchronisation zwüsche Ultimate Multisite und WP Engine.

## Features
- Automatisch Domain-Synchronisation
- Subdomain-Unterstützig für Multisite-Installations
- Nahtlosi Integration mit de bestehende System vo WP Engine

## Requirements
D'Integration erkennt automatisch, ob Sie uf WP Engine hostet sind, und brucht d'eingebauti WP Engine API. Es bruucht kei zusätzlechi Konfigurationsarbeit, wenn s'WP Engine Plugin aktiv und richtig konfiguriert isch.

Allerdings, wenn Sie d'Integration manuell konfiguriere müend, chönne Sie eine vo dene Konstante i Ihrer `wp-config.php` Datei definierä:

```php
define('WPE_APIKEY', 'your_api_key'); // Bevorzugti Methode
// ODER
define('WPE_API', 'your_api_key'); // Alternativi Methode
```

## Setup Instructions

### 1. WP Engine Plugin überprüefe

Wenn Sie uf WP Engine hostet sind, söll s'WP Engine Plugin scho installiert und aktiviert si. Überprüefed bitte:

1. S'WP Engine Plugin isch aktiv
2. D'Datei `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existiert

### 2. Integration aktiviere

1. Im WordPress Admin, gaht zu Ultimate Multisite > Settings
2. Navigiered zur Register "Domain Mapping" (Domain-Zuordnung)
3. Scrollid uf "Host Integrations" (Host-Integrationen)
4. Aktiviered d'WP Engine Integration
5. Klicked uf "Save Changes" (Änderige speichern)

## Wie es funktioniert

### Domain-Synchronisation

Wenn e Domain in Ultimate Multisite abgmapped wird:

1. D'Integration bruucht d'WP Engine API, um d'Domain zu Ihrer WP Engine Installation hinzuzfüege
2. WP Engine übernimmt d'Domain-Konfiguration und d'Ausstellig vom SSL-Zertifikat
3. Wenn e Domain-Mapping entfernt wird, wird d'Integration d'Domain vo WP Engine entfernä

Für Multisite-Installationen mit Subdomains:

1. D'Integration füegt jede Subdomain zu WP Engine hinzu, wenn e neui Site erstellt wird.
2. WP Engine verwaltet d'Subdomain-Konfiguration.
3. Wenn e Site gelöscht wird, entfernt d'Integration d'Subdomain vo WP Engine.

## Wichtigi Notize

### Wildcard Domains

Für Multisite-Installationen mit Subdomains empfiehlt sich, de Support vo WP Engine z'kontaktiere und e Wildcard Domain-Konfiguration aazfordere. Das ermöglicht allne Subdomains automatisch z'funktione, ohni dass mer jede einzeln hinzufüge müesse.

### SSL-Zertifikat

WP Engine verwaltet automatisch d'Ausstellig und Erneuerung vo SSL-Zertifikaten für alli Domains, wo über die Integration hinzugefügt werdet. Es brucht kei zusätzle Konfiguration.

## Fehlerbehebung

### API-Verbindigssprobleme
- Überprüef, ob de WP Engine plugin aktiv isch und richtig konfiguriert isch.
- Wenn Sie d'API-Schlüssel manuell definiert händ, überprüef, ob die korrekt sind.
- Kontaktier de WP Engine Support, wenn Sie Problem mit de API händ.

### Domain nöd hinzugefügt
- Überprüef d'Ultimate Multisite Logs uf Fehlermeldige.
- Verifiziere, dass d'Domain nöd scho zu WP Engine hinzugefügt isch.
- Stell sicher, dass Ihr WP Engine Plan d'Anzahl vo Domains unterstützt, wo Sie hinzufüegt.

### Subdomain-Probleme
- Wenn d'Subdomains nöd funktioniere, kontaktier de WP Engine Support und fordere e Wildcard Domain-Konfiguration a.
- Verifiziere, dass dini DNS-Iistellige für d'Hauptdomain und d'Subdomains korrekt konfiguriert sind.
