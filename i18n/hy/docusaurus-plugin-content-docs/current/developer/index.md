---
title: Մշակողի փաստաթղթեր
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Մշակողի փաստաթղթեր

Այս ուղեցույցը մշակողներին տրամադրում է այն ամենը, ինչ անհրաժեշտ է Ultimate Multisite-ի հետ ինտեգրվելու, այն ընդլայնելու կամ դրա համար հավելումներ մշակելու համար։ Ultimate Multisite-ը WordPress Multisite ցանցը վերածում է կայք՝ որպես ծառայություն (WaaS) հարթակի։

## Ինչ է հասանելի {#whats-available}

- **[REST API](./rest-api/overview)** — Ամբողջական CRUD գործողություններ բոլոր էությունների համար (հաճախորդներ, կայքեր, անդամակցություններ, վճարումներ, ապրանքներ, դոմեններ)՝ API բանալիով նույնականացմամբ
- **[Hooks-ի տեղեկատու](./hooks/guide)** — 200+ գործողության hook և 280+ filter hook կյանքի ցիկլի իրադարձությունների և հարմարեցման համար
- **[Ինտեգրման ուղեցույց](./integration-guide/)** — Օրինակներ CRM ինտեգրման, վերլուծության, անհատական gateway-ների և webhooks-ի համար
- **[Կոդի օրինակներ](./code-examples/)** — Ընդլայնված ձևանմուշներ դինամիկ գնագոյացման, կայքի տրամադրման, անհատական սահմանափակումների և բազմա-gateway մշակման համար
- **[Հավելման մշակում](./addon-development/getting-started)** — Կառուցվածքային շրջանակ հավելման plugin-ներ ստեղծելու համար

## Պահանջներ {#requirements}

- WordPress Multisite տեղադրում
- PHP 7.4 կամ ավելի բարձր
- Ultimate Multisite plugin-ը ակտիվացված է

## Composer / Bedrock տեղադրում {#composer--bedrock-installation}

Ultimate Multisite-ը հասանելի է [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)-ում որպես `ultimate-multisite/ultimate-multisite`։ Սա առաջարկվող տեղադրման մեթոդն է [Bedrock](https://roots.io/bedrock/)-ի վրա հիմնված WordPress կարգավորումների և Composer-ով կառավարվող այլ միջավայրերի համար։

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Վերանվանված փաթեթ (v2.6.1+)
Composer փաթեթը v2.6.1-ում վերանվանվել է `devstone/ultimate-multisite`-ից `ultimate-multisite/ultimate-multisite`։ Եթե ձեր `composer.json`-ը հղվում է հին մատակարարի անվանը, թարմացրեք require գրառումը և գործարկեք `composer update`։
:::

Տեղադրումից հետո ցանցային ակտիվացրեք plugin-ը Network Admin-ից՝

```bash
wp plugin activate ultimate-multisite --network
```

Կամ, եթե plugin-ը բեռնում եք որպես must-use plugin Bedrock-ի autoloader-ի միջոցով, օգտագործեք `wp_ultimo_skip_network_active_check` ֆիլտրը՝ ակտիվացման ստուգիչը շրջանցելու համար՝

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Արագ սկիզբ {#quick-start}

### Օգտագործեք REST API-ն {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Կապվեք իրադարձություններին {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Ստեղծեք հավելում {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Մանրամասն փաստաթղթերի և օրինակների համար տեսեք յուրաքանչյուր բաժինը։
