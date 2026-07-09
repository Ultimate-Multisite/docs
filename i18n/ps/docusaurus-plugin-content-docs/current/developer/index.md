---
title: د پراختیاکوونکي مستندات
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# د پراختیاکوونکي اسناد

دا لارښود پراختیاکوونکو ته هر هغه څه برابروي چې له Ultimate Multisite سره د یوځای کولو، غځولو، یا د هغې لپاره د اضافو جوړولو لپاره اړین دي. Ultimate Multisite د WordPress Multisite شبکه په د وېبپاڼې-د-خدمت-په-توګه (WaaS) پلاتفورم بدلوي.

## څه شتون لري

- **[REST API](./rest-api/overview)** — د ټولو موجودیتونو (پېرودونکي، وېبپاڼې، غړیتوبونه، تادیات، محصولات، ډومېنونه) لپاره بشپړ CRUD عملیات د API کیلي تصدیق سره
- **[د Hooks ماخذ](./hooks/guide)** — د ژوندپړاو پېښو او دودیز کولو لپاره ۲۰۰+ د عمل hooks او ۲۸۰+ د filter hooks
- **[د یوځای کولو لارښود](./integration-guide/)** — د CRM یوځای کولو، شننو، دودیزو دروازو، او webhooks لپاره بېلګې
- **[د کوډ بېلګې](./code-examples/)** — د خوځنده بیې ټاکلو، د وېبپاڼې چمتو کولو، دودیزو محدودیتونو، او څو-دروازې پروسس کولو لپاره پرمختللې بڼې
- **[د اضافې پراختیا](./addon-development/getting-started)** — د اضافي لګونونو جوړولو لپاره جوړښتي چوکاټ

## اړتیاوې

- د WordPress Multisite نصب
- PHP 7.4 یا تر دې لوړ
- Ultimate Multisite لګون فعال شوی

## Composer / Bedrock نصب

Ultimate Multisite په [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) کې د `ultimate-multisite/ultimate-multisite` په توګه شتون لري. دا د [Bedrock](https://roots.io/bedrock/)-پر بنسټ WordPress جوړښتونو او نورو Composer-مدیریت شوو چاپېریالونو لپاره سپارښتل شوې د نصب طریقه ده.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note د بسته نوم بدل شو (v2.6.1+)
د Composer بسته په v2.6.1 کې له `devstone/ultimate-multisite` څخه `ultimate-multisite/ultimate-multisite` ته ونومول شوه. که ستاسو `composer.json` زوړ پلورونکي نوم ته اشاره کوي، د require ننوتنه تازه کړئ او `composer update` وچلوئ.
:::

له نصب وروسته، لګون له Network Admin څخه د شبکې په کچه فعال کړئ:

```bash
wp plugin activate ultimate-multisite --network
```

یا، که تاسو لګون د Bedrock د autoloader له لارې د must-use لګون په توګه پورته کوئ، د فعالولو ساتونکي د تېرېدو لپاره `wp_ultimo_skip_network_active_check` filter وکاروئ:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## چټک پیل

### REST API وکاروئ

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### له پېښو سره Hook کړئ

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### یوه اضافه جوړه کړئ

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

د تفصیلي اسنادو او بېلګو لپاره هره برخه وګورئ.
