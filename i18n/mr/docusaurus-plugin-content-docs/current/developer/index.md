---
title: विकसक दस्तऐवजीकरण
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developer Documentation {#developer-documentation}

हा गाईड (guide) Ultimate Multisite साठी addons इंटिग्रेट करण्यासाठी, विस्तारित करण्यासाठी किंवा विकसित करण्यासाठी आवश्यक असलेली सर्व माहिती डेव्हलपर्सना देतो. Ultimate Multisite हे WordPress Multisite नेटवर्कला Website-as-a-Service (WaaS) प्लॅटफॉर्ममध्ये रूपांतरित करते.

## काय उपलब्ध आहे (What's Available) {#whats-available}

- **[REST API](./rest-api/overview)** — सर्व घटकांसाठी (customers, sites, memberships, payments, products, domains) संपूर्ण CRUD ऑपरेशन्स (Create, Read, Update, Delete) API key authentication सह उपलब्ध आहेत.
- **[Hooks Reference](./hooks/guide)** — जीवनचक्र घटना (lifecycle events) आणि कस्टमायझेशनसाठी २००+ action hooks आणि २८०+ filter hooks.
- **[Integration Guide](./integration-guide/)** — CRM इंटिग्रेशन, ॲनालिटिक्स, कस्टम गेटवे आणि वेबहुक्ससाठी उदाहरणे.
- **[Code Examples](./code-examples/)** — डायनॅमिक प्राइसिंग, साइट प्रोव्हिजनिंग, कस्टम मर्यादा (custom limitations) आणि मल्टी-गेटवे प्रोसेसिंगसाठी प्रगत पॅटर्न.
- **[Addon Development](./addon-development/getting-started)** — addon प्लगइन्स तयार करण्यासाठी संरचित फ्रेमवर्क.

## आवश्यकता (Requirements) {#requirements}

- WordPress Multisite इंस्टॉलेशन
- PHP 7.4 किंवा त्याहून अधिक
- Ultimate Multisite प्लगइन ॲक्टिव्हेट केलेले असावे

## Composer / Bedrock इंस्टॉलेशन {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) वर `ultimate-multisite/ultimate-multisite` या नावाने उपलब्ध आहे. [Bedrock](https://roots.io/bedrock/)-आधारित WordPress सेटअप्स आणि इतर Composer-managed वातावरणासाठी ही शिफारस केलेली इंस्टॉलेशन पद्धत आहे.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer पॅकेज v2.6.1 मध्ये `devstone/ultimate-multisite` चे नाव बदलून `ultimate-multisite/ultimate-multisite` केले गेले आहे. जर तुमच्या `composer.json` मध्ये जुने vendor नाव संदर्भित असेल, तर require एंट्री अपडेट करा आणि `composer update` चालवा.
:::

इंस्टॉलेशननंतर, नेटवर्क ॲडमिनमधून प्लगइन नेटवर्क-ॲक्टिव्हेट करा:

```bash
wp plugin activate ultimate-multisite --network
```

किंवा, जर तुम्ही Bedrock च्या autoloader द्वारे प्लगइन must-use प्लगइन म्हणून लोड करत असाल, तर ॲक्टिव्हेशन गार्ड बायपास करण्यासाठी `wp_ultimo_skip_network_active_check` filter वापरा:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## त्वरित सुरुवात (Quick Start) {#quick-start}

### REST API चा वापर करा {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### इव्हेंट्समध्ये हुक करा (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // नवीन ग्राहक साइनअपवर प्रतिक्रिया द्या
});
```

### एक Addon तयार करा {#build-an-addon}

```bash
# टेम्पलेटमधून addon scaffold तयार करा
bash create-addon.sh
```

अधिक तपशीलवार माहिती आणि उदाहरणांसाठी प्रत्येक विभागाकडे पाहा.
