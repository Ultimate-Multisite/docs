---
title: డెవలపర్ డాక్యుమెంటేషన్
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# డెవలపర్ డాక్యుమెంటేషన్

Ultimate Multisite తో ఇంటిగ్రేట్ చేయడానికి, ఎక్స్‌టెండ్ చేయడానికి లేదా అడాన్‌లను డెవలప్ చేయడానికి అవసరమైన అన్ని విషయాలను ఈ గైడ్ డెవలపర్‌లకు అందిస్తుంది. Ultimate Multisite అనేది ఒక WordPress Multisite నెట్‌వర్క్‌ను Website-as-a-Service (WaaS) ప్లాట్‌ఫామ్‌గా మారుస్తుంది.

## అందుబాటులో ఉన్నవి {#whats-available}

- **[REST API](./rest-api/overview)** — అన్ని ఎంటిటీల (కస్టమర్‌లు, సైట్‌లు, మెంబర్‌షిప్‌లు, పేమెంట్లు, ఉత్పత్తులు, డొమైన్‌లు) కోసం పూర్తి CRUD ఆపరేషన్లు, API కీ అథెంటికేషన్‌తో.
- **[Hooks Reference](./hooks/guide)** — లైఫ్‌సైకిల్ ఈవెంట్‌లు మరియు కస్టమైజేషన్ కోసం 200+ యాక్షన్ హుక్స్ మరియు 280+ ఫిల్టర్ హుక్స్.
- **[Integration Guide](./integration-guide/)** — CRM ఇంటిగ్రేషన్, అనలిటిక్స్, కస్టమ్ గేట్‌వేలు మరియు వెబ్‌హుక్స్ కోసం ఉదాహరణలు.
- **[Code Examples](./code-examples/)** — డైనమిక్ ధర నిర్ణయం (dynamic pricing), సైట్ ప్రొవిజనింగ్, కస్టమ్ పరిమితులు మరియు మల్టీ-గేట్‌వే ప్రాసెసింగ్ కోసం అధునాతన ప్యాటర్న్‌లు.
- **[Addon Development](./addon-development/getting-started)** — అడాన్ ప్లగిన్‌లను నిర్మించడానికి ఒక నిర్మాణాత్మక ఫ్రేమ్‌వర్క్.

## అవసరాలు {#requirements}

- WordPress Multisite ఇన్‌స్టాలేషన్
- PHP 7.4 లేదా అంతకంటే ఎక్కువ
- Ultimate Multisite ప్లగిన్ యాక్టివేట్ చేయబడి ఉండాలి

## Composer / Bedrock ఇన్‌స్టాలేషన్ {#composer--bedrock-installation}

Ultimate Multisite అనేది [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) లో `ultimate-multisite/ultimate-multisite` గా అందుబాటులో ఉంది. [Bedrock](https://roots.io/bedrock/)-ఆధారిత WordPress సెటప్‌లు మరియు ఇతర Composer-నిర్వహణ వాతావరణాలకు ఇది సిఫార్సు చేయబడిన ఇన్‌స్టాలేషన్ పద్ధతి.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer ప్యాకేజీని v2.6.1 లో `devstone/ultimate-multisite` నుండి `ultimate-multisite/ultimate-multisite` గా పేరు మార్చారు. మీ `composer.json` పాత వెండర్ పేరును సూచిస్తే, రిక్వైర్ ఎంట్రీని అప్‌డేట్ చేసి `composer update` ను రన్ చేయండి.
:::

ఇన్‌స్టాల్ చేసిన తర్వాత, నెట్‌వర్క్ అడ్మిన్ నుండి ప్లగిన్‌ను యాక్టివేట్ చేయండి:

```bash
wp plugin activate ultimate-multisite --network
```

లేదా, మీరు Bedrock యొక్క ఆటోలోడర్‌ ద్వారా ప్లగిన్‌ను తప్పనిసరిగా ఉపయోగించాల్సిన ప్లగిన్‌గా లోడ్ చేస్తుంటే, యాక్టివేషన్ గార్డ్‌ను బైపాస్ చేయడానికి `wp_ultimo_skip_network_active_check` ఫిల్టర్‌ను ఉపయోగించండి:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## త్వరిత ప్రారంభం (Quick Start) {#quick-start}

### REST API ఉపయోగించడం {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ఈవెంట్‌లలో హుక్ చేయడం {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // కొత్త కస్టమర్ సైన్అప్‌లకు ప్రతిస్పందించండి
});
```

### అడాన్ నిర్మించడం {#build-an-addon}

```bash
# టెంప్లేట్ నుండి అడాన్ స్కాఫోల్డ్‌ను రూపొందించండి
bash create-addon.sh
```

వివరణాత్మక డాక్యుమెంటేషన్ మరియు ఉదాహరణల కోసం ప్రతి విభాగాన్ని చూడండి.
