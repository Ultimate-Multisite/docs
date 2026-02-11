---
title: Ontwikkelaarshandleiding
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Ontwikkelaarsdocumentatie

Deze gids biedt ontwikkelaars alles wat nodig is om te integreren met, uit te breiden of addons te ontwikkelen voor Ultimate Multisite. Ultimate Multisite zet een WordPress Multisite-netwerk om in een Website-as-a-Service (WaaS)-platform.

## Beschikbaar

- **[REST API](./rest-api/overview)** — Volledige CRUD-operaties voor alle entiteiten (klanten, sites, lidmaatschappen, betalingen, producten, domeinen) met API-sleutel authenticatie
- **[Hooks Reference](./hooks/guide)** — 200+ actie-hooks en 280+ filter-hooks voor levenscyclusgebeurtenissen en aanpassing
- **[Integration Guide](./integration-guide/)** — Voorbeelden voor CRM-integratie, analytics, aangepaste gateways en webhooks
- **[Code Examples](./code-examples/)** — Geavanceerde patronen voor dynamische prijsstelling, site provisioning, aangepaste beperkingen en multi-gateway verwerking
- **[Addon Development](./addon-development/getting-started)** — Gestructureerd framework voor het bouwen van addon-plugins

## Vereisten

- WordPress Multisite installatie
- PHP 7.4 of hoger
- Ultimate Multisite plugin geactiveerd

## Snelstart

### Gebruik de REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook in gebeurtenissen

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Maak een Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Bekijk elke sectie voor gedetailleerde documentatie en voorbeelden.
