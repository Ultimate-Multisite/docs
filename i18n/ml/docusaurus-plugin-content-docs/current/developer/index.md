---
title: വികസിത്തாளர் രേഖകൾ
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ഡെവലപ്പർ ഡോക്യുമെന്റേഷൻ {#developer-documentation}

Ultimate Multisite-മായി സംയോജിപ്പിക്കാനും, വികസിപ്പിക്കാനും, അല്ലെങ്കിൽ അതിനുള്ള ആഡ്-ഓണുകൾ നിർമ്മിക്കാനും ആവശ്യമായ എല്ലാ കാര്യങ്ങളും ഈ ഗൈഡ് ഡെവലപ്പർമാർക്ക് നൽകുന്നു. Ultimate Multisite ഒരു WordPress Multisite network-നെ ഒരു Website-as-a-Service (WaaS) പ്ലാറ്റ്‌ഫോമായി മാറ്റുന്നു.

## ലഭ്യമായവ (What's Available) {#whats-available}

- **[REST API](./rest-api/overview)** — എല്ലാ എൻ്റിറ്റികൾക്കുമുള്ള (ഉദാഹരണത്തിന്: ഉപഭോക്താക്കൾ, സൈറ്റുകൾ, അംഗത്വങ്ങൾ, പേയ്‌മെന്റുകൾ, ഉൽപ്പന്നങ്ങൾ, ഡൊമെയ്‌നുകൾ) പൂർണ്ണമായ CRUD ഓപ്പറേഷനുകൾ API key authentication സഹിതം.
- **[Hooks Reference](./hooks/guide)** — ലൈഫ്‌സൈക്കിൾ ഇവൻ്റുകൾക്കും കസ്റ്റമൈസേഷനുമുള്ള 200-ൽ അധികം action hooks-ഉം 280-ൽ അധികം filter hooks-ഉം.
- **[Integration Guide](./integration-guide/)** — CRM സംയോജനം, അനലിറ്റിക്സ്, കസ്റ്റം ഗേറ്റ്‌വേകൾ, വെബ്ഹൂക്കുകൾ എന്നിവയ്ക്കുള്ള ഉദാഹരണങ്ങൾ.
- **[Code Examples](./code-examples/)** — ഡൈനാമിക് പ്രൈസിംഗ്, സൈറ്റ് പ്രൊവിഷനിംഗ്, കസ്റ്റം ലിമിറ്റേഷനുകൾ, മൾട്ടി-ഗേറ്റ്‌വേ പ്രോസസ്സിംഗ് എന്നിവയ്ക്കുള്ള അഡ്വാൻസ്ഡ് പാറ്റേണുകൾ.
- **[Addon Development](./addon-development/getting-started)** — ആഡ്-ഓൺ പ്ലഗിനുകൾ നിർമ്മിക്കാനുള്ള ഘടനാപരമായ ഫ്രെയിംവർക്ക്.

## ആവശ്യകതകൾ (Requirements) {#requirements}

- WordPress Multisite ഇൻസ്റ്റാളേഷൻ
- PHP 7.4 അല്ലെങ്കിൽ അതിലും ഉയർന്നത്
- Ultimate Multisite plugin സജീവമാക്കണം

## Composer / Bedrock ഇൻസ്റ്റാളേഷൻ {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)-ൽ `ultimate-multisite/ultimate-multisite` എന്ന പേരിൽ ലഭ്യമാണ്. [Bedrock](https://roots.io/bedrock/)-ആക്കിയ WordPress സെറ്റപ്പുകൾക്കും മറ്റ് Composer-മാനേജ് ചെയ്ത എൻവയോൺമെൻ്റുകൾക്കുമായി ഇത് ശുപാർശ ചെയ്യുന്ന ഇൻസ്റ്റാളേഷൻ രീതിയാണ്.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note പേര് മാറ്റിയ package (v2.6.1+)
v2.6.1-ൽ Composer package `devstone/ultimate-multisite` എന്നതിൽ നിന്ന് `ultimate-multisite/ultimate-multisite` എന്ന് പേര് മാറ്റി. നിങ്ങളുടെ `composer.json` പഴയ vendor name-നെ റഫർ ചെയ്യുന്നുണ്ടെങ്കിൽ, require എൻട്രി അപ്ഡേറ്റ് ചെയ്യുകയും `composer update` പ്രവർത്തിപ്പിക്കുകയും ചെയ്യുക.
:::

ഇൻസ്റ്റാൾ ചെയ്ത ശേഷം, Network Admin-ൽ നിന്ന് plugin network-activate ചെയ്യുക:

```bash
wp plugin activate ultimate-multisite --network
```

അല്ലെങ്കിൽ, Bedrock-ൻ്റെ autoloader വഴി must-use plugin ആയി നിങ്ങൾ plugin ലോഡ് ചെയ്യുകയാണെങ്കിൽ, activation guard മറികടക്കാൻ `wp_ultimo_skip_network_active_check` filter ഉപയോഗിക്കുക:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## പെട്ടെന്നുള്ള തുടക്കം (Quick Start) {#quick-start}

### REST API ഉപയോഗിക്കുക {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ഇവൻ്റുകളുമായി ബന്ധിപ്പിക്കുക (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // പുതിയ ഉപഭോക്താക്കളുടെ സൈൻഅപ്പുകൾക്ക് പ്രതികരിക്കുക
});
```

### ഒരു Addon നിർമ്മിക്കുക {#build-an-addon}

```bash
# ടെംപ്ലേറ്റിൽ നിന്ന് addon scaffold സൃഷ്ടിക്കുക
bash create-addon.sh
```

കൂടുതൽ വിശദമായ ഡോക്യുമെന്റേഷനും ഉദാഹരണങ്ങൾക്കുമായി ഓരോ വിഭാഗവും കാണുക.
