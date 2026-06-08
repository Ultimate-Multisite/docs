---
title: Documentație pentru Dezvoltatori
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentație pentru Dezvoltatori

Acest ghid oferă dezvoltatorilor tot ce este necesar pentru a se integra, extinde sau a dezvolta add-on-uri pentru Ultimate Multisite. Ultimate Multisite transformă o rețea WordPress Multisite într-o platformă Website-as-a-Service (WaaS).

## Ce este disponibil

- **[REST API](./rest-api/overview)** — Operații CRUD complete pentru toate entitățile (clienți, site-uri, membrici, plăți, produse, domenii) cu autentificare prin cheie API
- **[Hooks Reference](./hooks/guide)** — Peste 200 de hook-uri de acțiune (action hooks) și peste 280 de hook-uri de filtrare (filter hooks) pentru evenimentele de ciclu de viață și personalizare
- **[Integration Guide](./integration-guide/)** — Exemple pentru integrarea cu CRM, analitica, gateway-uri personalizate și webhooks
- **[Code Examples](./code-examples/)** — Modele avansate pentru prețuri dinamice, alocarea site-urilor (site provisioning), limitări personalizate și procesarea multi-gateway
- **[Addon Development](./addon-development/getting-started)** — Cadru structurat pentru crearea de plugin-uri add-on

## Cerințe

- Instalare WordPress Multisite
- PHP 7.4 sau mai mare
- Plugin-ul Ultimate Multisite activat

## Instalare cu Composer / Bedrock

Ultimate Multisite este disponibil pe [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) sub numele `ultimate-multisite/ultimate-multisite`. Aceasta este metoda de instalare recomandată pentru setările WordPress bazate pe [Bedrock](https://roots.io/bedrock/) și pentru alte medii gestionate de Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pachetul redenumit (v2.6.1+)
Pachetul Composer a fost redenumit din `devstone/ultimate-multisite` în `ultimate-multisite/ultimate-multisite` în versiunea v2.6.1. Dacă `composer.json`-ul tău face referire la numele vechi al furnizorului (vendor), actualizează intrarea `require` și rulează `composer update`.
:::

După instalare, activează plugin-ul la nivel de rețea (network-activate) din Adminul de Rețea:

```bash
wp plugin activate ultimate-multisite --network
```

Sau, dacă încarci plugin-ul ca un plugin obligatoriu (must-use) prin autoloader-ul Bedrock, folosește filtrul `wp_ultimo_skip_network_active_check` pentru a ocoli protecția de activare:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Pornire rapidă

### Utilizarea REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook-uirea în Evenimente

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Crearea unui Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Vezi fiecare secțiune pentru documentație detaliată și exemple.
