---
title: डेवलपर डॉक्यूमेंटेशन
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# डेवलपर डॉक्यूमेंटेशन {#developer-documentation}

यह गाइड डेवलपर्स को Ultimate Multisite के साथ इंटीग्रेट करने, इसे एक्सटेंड करने, या इसके लिए ऐडऑन विकसित करने के लिए ज़रूरी सब कुछ प्रदान करती है। Ultimate Multisite एक WordPress Multisite नेटवर्क को Website-as-a-Service (WaaS) प्लेटफॉर्म में बदल देता है।

## क्या उपलब्ध है {#whats-available}

- **[REST API](./rest-api/overview)** — API key authentication के साथ सभी एंटिटीज़ (ग्राहकों, साइटों, मेंबरशिप, भुगतानों, उत्पादों, डोमेन) के लिए पूर्ण CRUD ऑपरेशन।
- **[Hooks Reference](./hooks/guide)** — लाइफसाइकिल इवेंट्स और कस्टमाइज़ेशन के लिए 200+ एक्शन हुक्स और 280+ फ़िल्टर हुक्स।
- **[Integration Guide](./integration-guide/)** — CRM इंटीग्रेशन, एनालिटिक्स, कस्टम गेटवे और वेबहुक्स के उदाहरण।
- **[Code Examples](./code-examples/)** — डायनामिक प्राइसिंग, साइट प्रोविजनिंग, कस्टम लिमिटेशन्स और मल्टी-गेटवे प्रोसेसिंग के लिए एडवांस पैटर्न।
- **[Addon Development](./addon-development/getting-started)** — ऐडऑन प्लगइन्स बनाने के लिए एक संरचित फ्रेमवर्क।

## आवश्यकताएँ {#requirements}

- WordPress Multisite इंस्टॉलेशन
- PHP 7.4 या इससे उच्च
- Ultimate Multisite प्लगइन सक्रिय होना चाहिए

## Composer / Bedrock इंस्टॉलेशन {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) पर `ultimate-multisite/ultimate-multisite` के रूप में उपलब्ध है। यह [Bedrock](https://roots.io/bedrock/)-आधारित WordPress सेटअप और अन्य Composer-managed वातावरणों के लिए अनुशंसित इंस्टॉलेशन तरीका है।

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer पैकेज को v2.6.1 में `devstone/ultimate-multisite` से `ultimate-multisite/ultimate-multisite` में रीनेम किया गया था। यदि आपकी `composer.json` पुरानी वेंडर का नाम संदर्भित करती है, तो require एंट्री को अपडेट करें और `composer update` चलाएँ।
:::

इंस्टॉलेशन के बाद, नेटवर्क एडमिन से प्लगइन को नेटवर्क-एक्टिवेट करें:

```bash
wp plugin activate ultimate-multisite --network
```

या, यदि आप Bedrock के autoloader के माध्यम से प्लगइन को must-use प्लगइन के रूप में लोड कर रहे हैं, तो एक्टिवेशन गार्ड को बायपास करने के लिए `wp_ultimo_skip_network_active_check` फ़िल्टर का उपयोग करें:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## त्वरित शुरुआत {#quick-start}

### REST API का उपयोग करें {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### इवेंट्स में हुक करें {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### एक ऐडऑन बनाएँ {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

विस्तृत डॉक्यूमेंटेशन और उदाहरणों के लिए प्रत्येक सेक्शन देखें।
