---
title: Entwicklerdokumentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Entwicklerdokumentation

Dieser Leitfaden bietet Entwicklern alles, was benötigt wird, um Ultimate Multisite zu integrieren, zu erweitern oder Add-ons dafür zu entwickeln. Ultimate Multisite verwandelt ein WordPress Multisite-Netzwerk in eine Website-as-a-Service (WaaS)-Plattform.

## Was verfügbar ist

- **[REST API](./rest-api/overview)** — Vollständige CRUD-Operationen für alle Entitäten (Kunden, Websites, Mitgliedschaften, Zahlungen, Produkte, Domains) mit API-Schlüssel-Authentifizierung
- **[Hooks-Referenz](./hooks/guide)** — Über 200 Action Hooks und über 280 Filter Hooks für Lebenszyklusereignisse und Anpassung
- **[Integrationsleitfaden](./integration-guide/)** — Beispiele für CRM-Integration, Analytics, benutzerdefinierte Gateways und Webhooks
- **[Codebeispiele](./code-examples/)** — Erweiterte Muster für dynamische Preisgestaltung, Website-Bereitstellung, benutzerdefinierte Einschränkungen und Multi-Gateway-Verarbeitung
- **[Add-on-Entwicklung](./addon-development/getting-started)** — Strukturiertes Framework zum Erstellen von Add-on-Plugins

## Anforderungen

- WordPress Multisite-Installation
- PHP 7.4 oder höher
- Ultimate Multisite-Plugin aktiviert

## Composer- / Bedrock-Installation

Ultimate Multisite ist auf [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) als `ultimate-multisite/ultimate-multisite` verfügbar. Dies ist die empfohlene Installationsmethode für [Bedrock](https://roots.io/bedrock/)-basierte WordPress-Setups und andere von Composer verwaltete Umgebungen.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Umbenanntes Paket (v2.6.1+)
Das Composer-Paket wurde in v2.6.1 von `devstone/ultimate-multisite` zu `ultimate-multisite/ultimate-multisite` umbenannt. Wenn deine `composer.json` auf den alten Vendor-Namen verweist, aktualisiere den require-Eintrag und führe `composer update` aus.
:::

Aktiviere das Plugin nach der Installation netzwerkweit im Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Oder, wenn du das Plugin über den Autoloader von Bedrock als Must-use plugin lädst, verwende den `wp_ultimo_skip_network_active_check`-Filter, um die Aktivierungsprüfung zu umgehen:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Schnellstart

### Die REST API verwenden

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### In Ereignisse einklinken

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Ein Add-on erstellen

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Sieh dir jeden Abschnitt für ausführliche Dokumentation und Beispiele an.
