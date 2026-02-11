---
title: Documentazione per sviluppatori
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Documentazione per sviluppatori

Questa guida fornisce agli sviluppatori tutto il necessario per integrare, estendere o sviluppare componenti aggiuntivi per Ultimate Multisite. Ultimate Multisite trasforma una rete WordPress Multisite in una piattaforma Website-as-a-Service (WaaS).

## Cosa è disponibile

- **[REST API](./rest-api/overview)** — Operazioni CRUD complete per tutte le entità (customers, sites, memberships, payments, products, domains) con autenticazione tramite chiave API
- **[Hooks Reference](./hooks/guide)** — oltre 200 hook di azione e oltre 280 hook di filtro per eventi di ciclo di vita e personalizzazione
- **[Integration Guide](./integration-guide/)** — Esempi per l'integrazione con CRM, analisi, gateway personalizzati e webhooks
- **[Code Examples](./code-examples/)** — Modelli avanzati per prezzi dinamici, provisioning di siti, limitazioni personalizzate e elaborazione multi-gateway
- **[Addon Development](./addon-development/getting-started)** — Framework strutturato per la creazione di plugin addon

## Requisiti

- Installazione di WordPress Multisite
- PHP 7.4 o superiore
- Plugin Ultimate Multisite attivato

## Avvio rapido

### Utilizzare l'API REST

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Collegarsi agli eventi

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Creare un Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consulta ogni sezione per la documentazione dettagliata ed esempi.
