---
title: Documentació per a desenvolupadors
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentació per a desenvolupadors

Aquesta guia proporciona als desenvolupadors tot el que necessiten per integrar-se, estendre o desenvolupar addons per Ultimate Multisite. Ultimate Multisite transforma una xarxa WordPress Multisite en una plataforma Website-as-a-Service (WaaS).

## Què hi ha disponible {#whats-available}

- **[REST API](./rest-api/overview)** — Operacions CRUD completes per a totes les entitats (clients, sites, membres, pagaments, productes, domínis) amb autenticació per clau API
- **[Hooks Reference](./hooks/guide)** — Més de 200 hooks d'acció i més de 280 hooks de filtre per a esdeveniments del cicle de vida i personalització
- **[Integration Guide](./integration-guide/)** — Exemples per a l'integració amb CRM, analítics, passarelles personalitzades i webhooks
- **[Code Examples](./code-examples/)** — Patrons avançats per a preus dinàmics, aprovisionament de sites, limitacions personalitzades i processament multi-passarela
- **[Addon Development](./addon-development/getting-started)** — Marco estructurat per construir plugins d'addons

## Requisits {#requirements}

- Instal·lació de WordPress Multisite
- PHP 7.4 o més recent
- Plugin Ultimate Multisite activat

## Instal·lació amb Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite està disponible a [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) com a `ultimate-multisite/ultimate-multisite`. Aquest és el mètode d'instal·lació recomanat per a configuracions WordPress basades en [Bedrock](https://roots.io/bedrock/) i altres entorns gestionats per Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
El paquet Composer es va renomar de `devstone/ultimate-multisite` a `ultimate-multisite/ultimate-multisite` en la versió v2.6.1. Si el vostre `composer.json` refereix el nom del venedor antic, actualitzeu l'entrada `require` i executeu `composer update`.
:::

Després de l'instal·lació, activeu el plugin a nivell de xarxa (Network Admin):

```bash
wp plugin activate ultimate-multisite --network
```

O, si estem carregant el plugin com a plugin imprescindible (must-use) mitjançant l'autocarregador de Bedrock, utilitzeu el filtre `wp_ultimo_skip_network_active_check` per saltar la protecció d'activació:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Com començar ràpidament {#quick-start}

### Utilitzar la REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Connectar-se a esdeveniments (Hooks) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reaccionar a les noves inscripcions de clients
});
```

Consulti cada secció per a documentació i exemples detallats.
