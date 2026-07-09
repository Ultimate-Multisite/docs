---
title: विकासकर्ता दस्तावेजीकरण
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# विकासकर्ता दस्तावेज

यो मार्गदर्शिकाले विकासकर्ताहरूलाई Ultimate Multisite सँग एकीकृत गर्न, विस्तार गर्न, वा त्यसका लागि एडअनहरू विकास गर्न आवश्यक सबै कुरा प्रदान गर्छ। Ultimate Multisite ले WordPress Multisite नेटवर्कलाई Website-as-a-Service (WaaS) प्लेटफर्ममा रूपान्तरण गर्छ।

## के उपलब्ध छ

- **[REST API](./rest-api/overview)** — API key प्रमाणीकरणसहित सबै निकायहरू (ग्राहकहरू, साइटहरू, सदस्यताहरू, भुक्तानीहरू, उत्पादनहरू, डोमेनहरू) का लागि पूर्ण CRUD सञ्चालनहरू
- **[Hooks सन्दर्भ](./hooks/guide)** — जीवनचक्र घटनाहरू र अनुकूलनका लागि २००+ action hooks र २८०+ filter hooks
- **[एकीकरण मार्गदर्शिका](./integration-guide/)** — CRM एकीकरण, विश्लेषण, अनुकूल गेटवेहरू, र webhooks का लागि उदाहरणहरू
- **[कोड उदाहरणहरू](./code-examples/)** — गतिशील मूल्य निर्धारण, साइट प्रावधान, अनुकूल सीमाहरू, र बहु-गेटवे प्रशोधनका लागि उन्नत ढाँचाहरू
- **[एडअन विकास](./addon-development/getting-started)** — एडअन प्लगइनहरू बनाउनका लागि संरचित फ्रेमवर्क

## आवश्यकताहरू

- WordPress Multisite स्थापना
- PHP 7.4 वा सोभन्दा माथि
- Ultimate Multisite प्लगइन सक्रिय गरिएको

## Composer / Bedrock स्थापना

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) मा `ultimate-multisite/ultimate-multisite` को रूपमा उपलब्ध छ। यो [Bedrock](https://roots.io/bedrock/)-आधारित WordPress सेटअपहरू र अन्य Composer-व्यवस्थित वातावरणहरूका लागि सिफारिस गरिएको स्थापना विधि हो।

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note प्याकेजको नाम परिवर्तन गरिएको (v2.6.1+)
Composer प्याकेजलाई v2.6.1 मा `devstone/ultimate-multisite` बाट `ultimate-multisite/ultimate-multisite` मा नाम परिवर्तन गरिएको थियो। यदि तपाईंको `composer.json` ले पुरानो vendor नाम सन्दर्भ गर्छ भने, require प्रविष्टि अद्यावधिक गर्नुहोस् र `composer update` चलाउनुहोस्।
:::

स्थापनापछि, Network Admin बाट प्लगइनलाई नेटवर्क-सक्रिय गर्नुहोस्:

```bash
wp plugin activate ultimate-multisite --network
```

वा, यदि तपाईं Bedrock को autoloader मार्फत प्लगइनलाई must-use प्लगइनको रूपमा लोड गर्दै हुनुहुन्छ भने, सक्रियता guard लाई bypass गर्न `wp_ultimo_skip_network_active_check` filter प्रयोग गर्नुहोस्:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## छिटो सुरु गर्नुहोस्

### REST API प्रयोग गर्नुहोस्

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### घटनाहरूमा Hook गर्नुहोस्

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### एडअन बनाउनुहोस्

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

विस्तृत दस्तावेज र उदाहरणहरूका लागि प्रत्येक खण्ड हेर्नुहोस्।
