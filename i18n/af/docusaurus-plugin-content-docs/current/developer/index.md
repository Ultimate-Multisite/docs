---
title: Ontwikkelaar Dokumentasie
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Ontwikkelaar Dokumentasie

Hierdie gids verskaf ontwikkelaars alles wat nodig is om te integreer met, uit te brei, of uitbreidings te ontwikkel vir Ultimate Multisite. Ultimate Multisite transformeer 'n WordPress Multisite-netwerk in 'n Website-as-a-Service (WaaS) platform.

## Wat beskikbaar is

- **[REST API](./rest-api/overview)** — Volledige CRUD-operasies vir alle entiteite (klante, werke, lidmaatskappe, betalings, produkte, domeine) met API-sleutelverifikasie
- **[Hooks Reference](./hooks/guide)** — 200+ aksie-hooks en 280+ filter-hooks vir lewenscyclusgebeure en aanpassing
- **[Integration Guide](./integration-guide/)** — Voorbeelde vir CRM-integrasie, analise, aangepaste gateways, en webhooks
- **[Code Examples](./code-examples/)** — Gevorderde patrone vir dinamiese prysstelling, werkevoorbereiding, aangepaste beperkings, en multi-gateway verwerking
- **[Addon Development](./addon-development/getting-started)** — Gestruktureerde raamwerk vir die bou van addon-plugins

## Vereistes

- WordPress Multisite installasie
- PHP 7.4 of hoër
- Ultimate Multisite plugin geaktiveer

## Vinnige Begin

### Gebruik die REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hou in gebeurtenisse

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Bou 'n Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Kyk na elke afdeling vir gedetailleerde dokumentasie en voorbeelde.
