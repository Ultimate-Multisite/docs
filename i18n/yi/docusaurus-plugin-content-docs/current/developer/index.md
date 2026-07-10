---
title: דעוועלאָפּער־דאָקומענטאַציע
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# דאָקומענטאַציע פֿאַר דעוועלאָפּערס {#developer-documentation}

דער וועגווײַזער גיט דעוועלאָפּערס אַלץ וואָס מען דאַרף כּדי זיך צו אינטעגרירן מיט, אויסברייטערן, אָדער אַנטוויקלען צוגאָבן פֿאַר Ultimate Multisite. Ultimate Multisite פֿאַרוואַנדלט אַ WordPress Multisite נעטוואָרק אין אַ וועבזײַט-ווי-אַ-דינסט (WaaS) פּלאַטפֿאָרמע.

## וואָס איז בנימצא {#whats-available}

- **[REST API](./rest-api/overview)** — פולשטענדיקע CRUD אָפּעראַציעס פֿאַר אַלע איינהייטן (קונים, וועבזײַטן, מיטגלידערשאַפֿטן, צאָלונגען, פּראָדוקטן, דאָמיינס) מיט API שליסל־אָטענטיפֿיקאַציע
- **[רעפֿערענץ פֿון hooks](./hooks/guide)** — 200+ action hooks און 280+ filter hooks פֿאַר לעבנסציקלוס־געשעענישן און צופּאַסונג
- **[אינטעגראַציע־וועגווייזער](./integration-guide/)** — בײַשפּילן פֿאַר CRM אינטעגראַציע, אַנאַליטיקס, אייגענע גייטווייז, און webhooks
- **[קאָד־בײַשפּילן](./code-examples/)** — אַוואַנסירטע מוסטערן פֿאַר דינאַמישע פּרײַזן, וועבזײַט־פּראָוויזשאַנינג, אייגענע באַגרענעצונגען, און מאַלטי־גייטוויי־פּראָצעסירונג
- **[אַנטוויקלונג פֿון צוגאָבן](./addon-development/getting-started)** — סטרוקטורירטער framework פֿאַר בויען צוגאָב־פּלוגינס

## פֿאָדערונגען {#requirements}

- WordPress Multisite אינסטאַלאַציע
- PHP 7.4 אָדער העכער
- Ultimate Multisite פּלוגין אַקטיווירט

## Composer / Bedrock אינסטאַלאַציע {#composer--bedrock-installation}

Ultimate Multisite איז בנימצא אויף [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ווי `ultimate-multisite/ultimate-multisite`. דאָס איז דער רעקאָמענדירטער אינסטאַלאַציע־אופֿן פֿאַר [Bedrock](https://roots.io/bedrock/)-באַזירטע WordPress סעטאַפּס און אַנדערע Composer-פֿאַרוואַלטעטע סביבות.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note איבערגערופֿענער פּעקל (v2.6.1+)
דער Composer פּעקל איז איבערגערופֿן געוואָרן פֿון `devstone/ultimate-multisite` צו `ultimate-multisite/ultimate-multisite` אין v2.6.1. אויב אײַער `composer.json` באַציט זיך אויף דעם אַלטן vendor נאָמען, דערהײַנטיקט דעם require איינטראָג און לויפֿט `composer update`.
:::

נאָך דער אינסטאַלאַציע, אַקטיווירט דעם פּלוגין נעטוואָרק־ברייט פֿון דעם נעטוואָרק־אַדמין:

```bash
wp plugin activate ultimate-multisite --network
```

אָדער, אויב איר לאָדט דעם פּלוגין ווי אַ מוז־ניצן פּלוגין דורך Bedrock'ס autoloader, ניצט דעם `wp_ultimo_skip_network_active_check` filter כּדי איבערצוגיין דעם אַקטיוואַציע־שוץ:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## שנעלער אָנהייב {#quick-start}

### ניצט דעם REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### פֿאַרבינדט זיך אין געשעענישן {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### בויט אַ צוגאָב {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

זעט יעדן אָפּטייל פֿאַר דעטאַלירטע דאָקומענטאַציע און בײַשפּילן.
