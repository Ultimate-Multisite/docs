---
title: የገንቢ ሰነድ
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ለገንቢዎች መመሪያ

ይህ መመሪያ ገንቢዎች Ultimate Multisiteን እንዴት ማዋሃድ (integrate)፣ ማስፋት (extend) ወይም አድ-ኦን (addon) መገንባት እንደሚችሉ የሚያስፈልጋቸውን ሁሉንም ነገር ያቀርባል። Ultimate Multisite የWordPress Multisite networkን ወደ Website-as-a-Service (WaaS) መድረክ ይለውጠዋል።

## ምን ተገኝቷል {#whats-available}

- **[REST API](./rest-api/overview)** — ለሁሉም አካላት (ደንበኞች፣ ድረ-ገጾች፣ የአባልነት መብቶች፣ ክፍያዎች፣ ምርቶች፣ ዶሜኖች) ሙሉ የCRUD (Create, Read, Update, Delete) ስራዎች፣ ከAPI key authentication ጋር።
- **[Hooks Reference](./hooks/guide)** — ለየህይወት ዑደት ክስተቶች (lifecycle events) እና ለቅንብሮች 200+ የaction hooks እና 280+ የfilter hooks።
- **[Integration Guide](./integration-guide/)** — ለCRM integration፣ ለanalytics፣ ለcustom gateways እና ለwebhooks ምሳሌዎች።
- **[Code Examples](./code-examples/)** — ለdynamic pricing፣ site provisioning፣ custom limitations እና multi-gateway processing የላቀ አሰራር (advanced patterns)።
- **[Addon Development](./addon-development/getting-started)** — ለአድ-ኦን ፕልጊኖች ለመገንባት የተዋቀረ ፍሬምወርክ (structured framework)።

## የሚያስፈልጉ ነገሮች {#requirements}

- WordPress Multisite installation
- PHP 7.4 ወይም ከዚያ በላይ
- Ultimate Multisite plugin መብራት (activated)

## Composer / Bedrock Installation {#composer--bedrock-installation}

Ultimate Multisite በ[Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ላይ እንደ `ultimate-multisite/ultimate-multisite` ይገኛል። ይህ ለ[Bedrock](https://roots.io/bedrock/)-ተመሠረተ የWordPress setup እና ለሌሎች Composer-የተተዳደሩ አካባቢዎች (environments) የሚመከር የመጫኛ ዘዴ ነው።

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note የተለወጠው ፓኬጅ ስም (v2.6.1+)
የComposer package በv2.6.1 ላይ ከ`devstone/ultimate-multisite` ወደ `ultimate-multisite/ultimate-multisite` ተለውጧል። `composer.json`ዎ የድሮውን vendor name የሚያመለክት ከሆነ፣ የrequire entryን አዘምኑ እና `composer update` ይስሩ።
:::

ከመጫን በኋላ፣ ፕልጊኑን ከNetwork Admin ውስጥ በnetwork-activate መብራት አለብዎት፡

```bash
wp plugin activate ultimate-multisite --network
```

ወይም፣ ፕልጊኑን በBedrock's autoloader በmust-use plugin መልክ እየጫኑ ከሆነ፣ የactivation guardን ለማለፍ `wp_ultimo_skip_network_active_check` filterን ይጠቀሙ፡

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## በፍጥነት መጀመር (Quick Start) {#quick-start}

### REST APIን መጠቀም {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### በክስተቶች ላይ Hook ማድረግ {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // አዲስ የደንበኛ ምዝገባዎችን መመለስ (React to new customer signups)
});
```

### አድ-ኦን መገንባት {#build-an-addon}

```bash
# addon scaffold ከtemplate መፍጠር
bash create-addon.sh
```

ለዝርዝር ሰነድ እና ምሳሌዎች እያንዳንዱን ክፍል ይመልከቱ።
