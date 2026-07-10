---
title: සංවර්ධක ලේඛන
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# සංවර්ධක ලේඛන {#developer-documentation}

මෙම මාර්ගෝපදේශය Ultimate Multisite සමඟ ඒකාබද්ධ කිරීමට, එය විස්තාරණය කිරීමට, හෝ එයට අතිරේක ප්ලගින සංවර්ධනය කිරීමට සංවර්ධකයන්ට අවශ්‍ය සියල්ල සපයයි. Ultimate Multisite, WordPress Multisite ජාලයක් වෙබ් අඩවිය-සේවාවක් ලෙස (WaaS) වේදිකාවක් බවට පරිවර්තනය කරයි.

## ලබා ගත හැකි දේ {#whats-available}

- **[REST API](./rest-api/overview)** — API යතුරු සත්‍යාපනය සමඟ සියලුම අයිතම සඳහා (පාරිභෝගිකයන්, අඩවි, සාමාජිකත්ව, ගෙවීම්, නිෂ්පාදන, වසම්) සම්පූර්ණ CRUD මෙහෙයුම්
- **[Hooks යොමු සටහන](./hooks/guide)** — ජීවන චක්‍ර සිදුවීම් සහ අභිරුචිකරණය සඳහා action hooks 200+ සහ filter hooks 280+
- **[ඒකාබද්ධ කිරීමේ මාර්ගෝපදේශය](./integration-guide/)** — CRM ඒකාබද්ධ කිරීම, විශ්ලේෂණ, අභිරුචි ගෙවීම් ද්වාර, සහ webhooks සඳහා උදාහරණ
- **[කේත උදාහරණ](./code-examples/)** — ගතික මිලකරණය, අඩවි සැපයීම, අභිරුචි සීමා, සහ බහු-ද්වාර සැකසීම සඳහා උසස් රටා
- **[අතිරේක සංවර්ධනය](./addon-development/getting-started)** — අතිරේක ප්ලගින තැනීම සඳහා ව්‍යුහගත රාමුව

## අවශ්‍යතා {#requirements}

- WordPress Multisite ස්ථාපනය
- PHP 7.4 හෝ ඊට වැඩි
- Ultimate Multisite ප්ලගිනය සක්‍රිය කර තිබීම

## Composer / Bedrock ස්ථාපනය {#composer--bedrock-installation}

Ultimate Multisite, `ultimate-multisite/ultimate-multisite` ලෙස [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) හි ලබා ගත හැක. මෙය [Bedrock](https://roots.io/bedrock/) පදනම් වූ WordPress සැකසුම් සහ අනෙකුත් Composer මඟින් කළමනාකරණය වන පරිසර සඳහා නිර්දේශිත ස්ථාපන ක්‍රමයයි.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note නැවත නම් කළ පැකේජය (v2.6.1+)
Composer පැකේජය v2.6.1 හි `devstone/ultimate-multisite` වෙතින් `ultimate-multisite/ultimate-multisite` ලෙස නැවත නම් කරන ලදී. ඔබේ `composer.json` පැරණි vendor නමට යොමු කරන්නේ නම්, require ඇතුළත් කිරීම යාවත්කාලීන කර `composer update` ධාවනය කරන්න.
:::

ස්ථාපනයෙන් පසු, ජාල පරිපාලකයෙන් ප්ලගිනය ජාලය පුරා සක්‍රිය කරන්න:

```bash
wp plugin activate ultimate-multisite --network
```

නැතහොත්, ඔබ Bedrock හි autoloader හරහා ප්ලගිනය must-use ප්ලගිනයක් ලෙස පූරණය කරන්නේ නම්, සක්‍රිය කිරීමේ ආරක්ෂකය මඟ හැරීමට `wp_ultimo_skip_network_active_check` filter භාවිතා කරන්න:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## ඉක්මන් ආරම්භය {#quick-start}

### REST API භාවිතා කරන්න {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### සිදුවීම්වලට Hook කරන්න {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### අතිරේකයක් සාදන්න {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

විස්තරාත්මක ලේඛන සහ උදාහරණ සඳහා එක් එක් කොටස බලන්න.
