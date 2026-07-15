---
title: டெவலப்பர் ஆவணங்கள்
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# டெவலப்பர் ஆவணங்கள்

Ultimate Multisite உடன் ஒருங்கிணைக்கவும், நீட்டிக்கவும் அல்லது அதற்கான Addons-களை உருவாக்கவும் தேவையான அனைத்தையும் இந்த வழிகாட்டி டெவலப்பர்களுக்கு வழங்குகிறது. Ultimate Multisite என்பது ஒரு WordPress Multisite network-ஐ Website-as-a-Service (WaaS) தளமாக மாற்றி அமைக்கிறது.

## என்னென்ன உள்ளன {#whats-available}

- **[REST API](./rest-api/overview)** — API key authentication மூலம் அனைத்து என்டிட்டிகளுக்கும் (customers, sites, memberships, payments, products, domains) முழுமையான CRUD செயல்பாடுகள் (Create, Read, Update, Delete) கிடைக்கும்.
- **[Hooks Reference](./hooks/guide)** — வாழ்க்கைச் சுழற்சி நிகழ்வுகள் (lifecycle events) மற்றும் தனிப்பயனாக்கத்திற்காக 200+ action hooks மற்றும் 280+ filter hooks.
- **[Integration Guide](./integration-guide/)** — CRM ஒருங்கிணைப்பு, பகுப்பாய்வு (analytics), தனிப்பயன் நுழைவாயில்கள் (custom gateways) மற்றும் webhooks ஆகியவற்றிற்கான எடுத்துக்காட்டுகள்.
- **[Code Examples](./code-examples/)** — dynamic pricing, site provisioning, custom limitations மற்றும் multi-gateway processing ஆகியவற்றிற்கான மேம்பட்ட வடிவங்கள் (advanced patterns).
- **[Addon Development](./addon-development/getting-started)** — Addon plugins-களை உருவாக்குவதற்கான கட்டமைக்கப்பட்ட framework.

## தேவைகள் {#requirements}

- WordPress Multisite நிறுவல்
- PHP 7.4 அல்லது அதற்கு மேல்
- Ultimate Multisite plugin செயல்படுத்தப்பட்டிருக்க வேண்டும்

## Composer / Bedrock நிறுவல் {#composer--bedrock-installation}

Ultimate Multisite ஆனது [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) என்ற இடத்தில் `ultimate-multisite/ultimate-multisite` என்ற பெயரில் கிடைக்கிறது. [Bedrock](https://roots.io/bedrock/)-அடிப்படையிலான WordPress அமைப்புகள் மற்றும் பிற Composer-ஆல் நிர்வகிக்கப்படும் சூழல்களுக்கு இதுவே பரிந்துரைக்கப்பட்ட நிறுவல் முறையாகும்.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer package ஆனது v2.6.1 இல் `devstone/ultimate-multisite` இலிருந்து `ultimate-multisite/ultimate-multisite` என்று பெயர் மாற்றப்பட்டுள்ளது. உங்கள் `composer.json` பழைய vendor பெயரை குறிப்பிட்டால், require உள்ளீட்டைப் புதுப்பித்து `composer update` என்பதை இயக்கவும்.
:::

நிறுவிய பிறகு, Network Admin இலிருந்து plugin-ஐ network-activate செய்ய வேண்டும்:

```bash
wp plugin activate ultimate-multisite --network
```

அல்லது, நீங்கள் Bedrock-ன் autoloader மூலம் must-use plugin ஆக plugin-ஐ ஏற்றினால், activation guard-ஐ கடந்து செல்ல `wp_ultimo_skip_network_active_check` filter-ஐப் பயன்படுத்தவும்:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## விரைவான தொடக்கம் {#quick-start}

### REST API பயன்படுத்துதல் {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### நிகழ்வுகளில் Hook செய்தல் {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // புதிய வாடிக்கையாளர் பதிவு செய்வதை கவனித்தல்
});
```

### ஒரு Addon-ஐ உருவாக்குதல் {#build-an-addon}

```bash
# டெம்ப்ளேட்டிலிருந்து addon scaffold-ஐ உருவாக்கவும்
bash create-addon.sh
```

விரிவான ஆவணங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு ஒவ்வொரு பிரிவையும் பார்க்கவும்.
