---
title: Developer Documentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developer Documentation

ಈ ಮಾರ್ಗದರ್ಶಿ Ultimate Multisite ಗೆ ಜೊತೆ ಸಂಯೋಜಿಸಲು, ವಿಸ್ತರಿಸಲು ಅಥವಾ addons ಅಭಿವೃದ್ಧಿಪಡಿಸಲು developers ಗೆ ಬೇಕಾದ ಎಲ್ಲವನ್ನೂ ಒದಗಿಸುತ್ತದೆ. Ultimate Multisite ಒಂದು WordPress Multisite ನೆಟ್‌ವರ್ಕ್ ಅನ್ನು Website-as-a-Service (WaaS) ವೇದಿಕೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.

## What's Available {#whats-available}

- **[REST API](./rest-api/overview)** — ಎಲ್ಲಾ ಘಟಕಗಳಿಗೆ (ग्राहಕರು, সাইಟ್‌ಗಳು, ಸದಸ್ಯತ್ವಗಳು, ಪಾವತಿಗಳು, ಉತ್ಪನ್ನಗಳು, ಡೊಮೇನ್‌ಗಳು) ಸಂಪೂರ್ಣ CRUD ಕಾರ್ಯಾಚರಣೆಗಳು (API key authentication ಜೊತೆ)
- **[Hooks Reference](./hooks/guide)** — ಜೀವನಚಕ್ರ ಘಟನೆಗಳು ಮತ್ತು ಕಸ್ಟಮೈಸೇಶನ್‌ಗಾಗಿ 200+ action hooks ಮತ್ತು 280+ filter hooks
- **[Integration Guide](./integration-guide/)** — CRM ಸಂಯೋಜನೆ, analtytics, ಕಸ್ಟಮ್ ಗೇಟ್‌ವೇಗಳು ಮತ್ತು webhooks ಗಾಗಿ ಉದಾಹರಣೆಗಳು
- **[Code Examples](./code-examples/)** — dynamic pricing, site provisioning, custom limitations ಮತ್ತು multi-gateway processing ಗಾಗಿ ಸುಧಾರಿತ ಮಾದರಿಗಳು
- **[Addon Development](./addon-development/getting-started)** — addon plugins ನಿರ್ಮಿಸಲು ರಚನಾತ್ಮಕ ಚೌಕಟ್ಟು

## Requirements {#requirements}

- WordPress Multisite installation
- PHP 7.4 or higher
- Ultimate Multisite plugin activated

## Composer / Bedrock Installation {#composer--bedrock-installation}

Ultimate Multisite ಅನ್ನು [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ನಲ್ಲಿ `ultimate-multisite/ultimate-multisite` ಆಗಿ ಲಭ್ಯವಿದೆ. Bedrock-ಆಧಾರಿತ WordPress ಸೆಟಪ್‌ಗಳು ಮತ್ತು ಇತರ Composer-ನಿರ್ವಹಿಸಿದ ಪರಿಸರಗಳಿಗೆ ಇದು ಶಿಫಾರಸು ಮಾಡಿದ ಅಳವಡಿಕೆ ವಿಧಾನವಾಗಿದೆ.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer package ಅನ್ನು v2.6.1 ರಲ್ಲಿ `devstone/ultimate-multisite` ನಿಂದ `ultimate-multisite/ultimate-multisite` ಗೆ ಮರುನಾಮಕರಣ ಮಾಡಲಾಗಿದೆ. ನಿಮ್ಮ `composer.json` ಹಳೆಯ vendor ಹೆಸರನ್ನು ಉಲ್ಲೇಖಿಸಿದರೆ, require entry ಅನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಿ ಮತ್ತು `composer update` ಅನ್ನು ರನ್ ಮಾಡಿ.
:::

ಅಳವಡಿಕೆ ಮಾಡಿದ ನಂತರ, ನೆಟ್‌ವರ್ಕ್ ಅಡ್ಮಿನ್‌ನಿಂದ ಪ್ಲಗ್ಇನ್ ಅನ್ನು network-activate ಮಾಡಿ:

```bash
wp plugin activate ultimate-multisite --network
```

ಅಥವಾ, ನೀವು Bedrock ನ autoloader ಮೂಲಕ must-use plugin ಆಗಿ ಪ್ಲಗ್ಇನ್ ಅನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದ್ದರೆ, activation guard ಅನ್ನು ಬೈಪಾಸ್ ಮಾಡಲು `wp_ultimo_skip_network_active_check` filter ಅನ್ನು ಬಳಸಿ:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Quick Start {#quick-start}

### Use the REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook into Events {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Build an Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

ವಿವರವಾದ documentation ಮತ್ತು ಉದಾಹರಣೆಗಳಿಗಾಗಿ ಪ್ರತಿಯೊಂದು ವಿಭಾಗವನ್ನು ನೋಡಿ.
