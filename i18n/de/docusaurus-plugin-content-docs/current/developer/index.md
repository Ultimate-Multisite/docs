---
title: Entwicklerdokumentation
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Entwicklerdokumentation

Dieser Leitfaden bietet Entwicklern alles, was sie benötigen, um mit Ultimate Multisite zu integrieren, es zu erweitern oder Addons dafür zu entwickeln. Ultimate Multisite verwandelt ein WordPress Multisite-Netzwerk in eine Website-as-a-Service (WaaS)-Plattform.

## Was verfügbar ist

- **[REST API](./rest-api/overview)** — Vollständige CRUD-Operationen für alle Entitäten (Kunden, Sites, Mitgliedschaften, Zahlungen, Produkte, Domains) mit API-Schlüssel-Authentifizierung
- **[Hooks Reference](./hooks/guide)** — 200+ Aktions-Hooks und 280+ Filter-Hooks für Lebenszyklusereignisse und Anpassungen
- **[Integration Guide](./integration-guide/)** — Beispiele für CRM-Integration, Analysen, benutzerdefinierte Gateways und Webhooks
- **[Code Examples](./code-examples/)** — Fortgeschrittene Muster für dynamische Preisgestaltung, Site-Bereitstellung, benutzerdefinierte Einschränkungen und Multi-Gateway-Verarbeitung
- **[Addon Development](./addon-development/getting-started)** — Strukturierter Rahmen für die Entwicklung von Addon-Plugins

## Anforderungen

- WordPress Multisite-Installation
- PHP 7.4 oder höher
- Ultimate Multisite-Plugin aktiviert

## Schnellstart

### Verwenden Sie die REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### In Events einhaken

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon erstellen

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Siehe jeden Abschnitt für detaillierte Dokumentation und Beispiele.
