---
title: Developer Documentation
sidebar_position: 1
---

# Developer Documentation

This guide provides developers with everything needed to integrate with, extend, or develop addons for Ultimate Multisite. Ultimate Multisite transforms a WordPress Multisite network into a Website-as-a-Service (WaaS) platform.

## What's Available

- **[REST API](./rest-api/overview)** — Complete CRUD operations for all entities (customers, sites, memberships, payments, products, domains) with API key authentication
- **[Hooks Reference](./hooks/guide)** — 200+ action hooks and 280+ filter hooks for lifecycle events and customization
- **[Integration Guide](./integration-guide/)** — Examples for CRM integration, analytics, custom gateways, and webhooks
- **[Code Examples](./code-examples/)** — Advanced patterns for dynamic pricing, site provisioning, custom limitations, and multi-gateway processing
- **[Addon Development](./addon-development/getting-started)** — Structured framework for building addon plugins

## Requirements

- WordPress Multisite installation
- PHP 7.4 or higher
- Ultimate Multisite plugin activated

## Quick Start

### Use the REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook into Events

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Build an Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

See each section for detailed documentation and examples.
