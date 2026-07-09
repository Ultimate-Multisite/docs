---
title: توثيق المطورين
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# وثائق المطوّرين {#developer-documentation}

يوفّر هذا الدليل للمطوّرين كل ما يلزم للتكامل مع Ultimate Multisite أو توسيعه أو تطوير إضافات له. يحوّل Ultimate Multisite شبكة WordPress Multisite إلى منصة موقع كخدمة (WaaS).

## ما المتاح {#whats-available}

- **[REST API](./rest-api/overview)** — عمليات CRUD كاملة لجميع الكيانات (العملاء، المواقع، العضويات، المدفوعات، المنتجات، النطاقات) مع مصادقة بمفتاح API
- **[مرجع Hooks](./hooks/guide)** — أكثر من 200 خطاف إجراء وأكثر من 280 خطاف تصفية لأحداث دورة الحياة والتخصيص
- **[دليل التكامل](./integration-guide/)** — أمثلة للتكامل مع CRM، والتحليلات، وبوابات الدفع المخصصة، وwebhooks
- **[أمثلة التعليمات البرمجية](./code-examples/)** — أنماط متقدمة للتسعير الديناميكي، وتوفير المواقع، والقيود المخصصة، ومعالجة بوابات متعددة
- **[تطوير الإضافات](./addon-development/getting-started)** — إطار عمل منظّم لبناء إضافات

## المتطلبات {#requirements}

- تثبيت WordPress Multisite
- PHP 7.4 أو أعلى
- تفعيل إضافة Ultimate Multisite

## تثبيت Composer / Bedrock {#composer--bedrock-installation}

يتوفر Ultimate Multisite على [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) باسم `ultimate-multisite/ultimate-multisite`. هذه هي طريقة التثبيت الموصى بها لإعدادات WordPress المبنية على [Bedrock](https://roots.io/bedrock/) والبيئات الأخرى المُدارة عبر Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note تمت إعادة تسمية الحزمة (v2.6.1+)
تمت إعادة تسمية حزمة Composer من `devstone/ultimate-multisite` إلى `ultimate-multisite/ultimate-multisite` في v2.6.1. إذا كان ملف `composer.json` يشير إلى اسم المورّد القديم، فحدّث إدخال require وشغّل `composer update`.
:::

بعد التثبيت، فعّل الإضافة على مستوى الشبكة من Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

أو، إذا كنت تحمّل الإضافة كإضافة must-use عبر autoloader الخاص بـ Bedrock، فاستخدم مرشح `wp_ultimo_skip_network_active_check` لتجاوز حارس التفعيل:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## البدء السريع {#quick-start}

### استخدام REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### الربط بالأحداث {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### بناء إضافة {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

راجع كل قسم للاطلاع على وثائق وأمثلة مفصلة.
