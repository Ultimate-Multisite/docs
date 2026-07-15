---
title: Documentazione per sviluppatori
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentazione per sviluppatori

Questa guida fornisce agli sviluppatori tutto il necessario per integrarsi con Ultimate Multisite, estenderlo o sviluppare addon per Ultimate Multisite. Ultimate Multisite trasforma una rete WordPress Multisite in una piattaforma Website-as-a-Service (WaaS).

## Cosa è disponibile {#whats-available}

- **[REST API](./rest-api/overview)** — Operazioni CRUD complete per tutte le entità (clienti, siti, membership, pagamenti, prodotti, domini) con autenticazione tramite API key
- **[Riferimento Hooks](./hooks/guide)** — Oltre 200 action hooks e oltre 280 filter hooks per eventi del ciclo di vita e personalizzazione
- **[Guida all'integrazione](./integration-guide/)** — Esempi per integrazione CRM, analytics, gateway personalizzati e webhooks
- **[Esempi di codice](./code-examples/)** — Pattern avanzati per prezzi dinamici, provisioning dei siti, limitazioni personalizzate ed elaborazione multi-gateway
- **[Sviluppo di Addon](./addon-development/getting-started)** — Framework strutturato per creare plugin addon

## Requisiti {#requirements}

- Installazione WordPress Multisite
- PHP 7.4 o superiore
- Plugin Ultimate Multisite attivato

## Installazione Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite è disponibile su [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) come `ultimate-multisite/ultimate-multisite`. Questo è il metodo di installazione consigliato per configurazioni WordPress basate su [Bedrock](https://roots.io/bedrock/) e altri ambienti gestiti con Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pacchetto rinominato (v2.6.1+)
Il pacchetto Composer è stato rinominato da `devstone/ultimate-multisite` a `ultimate-multisite/ultimate-multisite` nella v2.6.1. Se il tuo `composer.json` fa riferimento al vecchio nome del vendor, aggiorna la voce require ed esegui `composer update`.
:::

Dopo l'installazione, attiva il plugin a livello di rete dal Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Oppure, se stai caricando il plugin come must-use plugin tramite l'autoloader di Bedrock, usa il filtro `wp_ultimo_skip_network_active_check` per bypassare il controllo di attivazione:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Avvio rapido {#quick-start}

### Usa la REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Collegati agli eventi {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Crea un Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consulta ogni sezione per documentazione dettagliata ed esempi.
