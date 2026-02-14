---
title: وثائق المطور
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# وثائق المطور

هذا الدليل يوفر للمطورين كل ما يلزم للتكامل مع، توسيع، أو تطوير إضافات لـ Ultimate Multisite. Ultimate Multisite يحول شبكة WordPress Multisite إلى منصة Website-as-a-Service (WaaS).

## ما المتاح

- **[واجهة برمجة التطبيقات REST](./rest-api/overview)** — عمليات CRUD كاملة لجميع الكيانات (العملاء، المواقع، العضويات، المدفوعات، المنتجات، النطاقات) مع مصادقة مفتاح API
- **[مرجع الهوكات](./hooks/guide)** — أكثر من 200 هوك إجراء و280 هوك فلتر لأحداث دورة الحياة والتخصيص
- **[دليل التكامل](./integration-guide/)** — أمثلة على تكامل CRM، التحليلات، البوابات المخصصة، والويب هوكس
- **[أمثلة الكود](./code-examples/)** — أنماط متقدمة للتسعير الديناميكي، توفير المواقع، القيود المخصصة، ومعالجة متعدد البوابات
- **[تطوير الإضافات](./addon-development/getting-started)** — إطار منظم لبناء إضافات

## المتطلبات

- تثبيت WordPress Multisite
- PHP 7.4 أو أعلى
- تم تفعيل إضافة Ultimate Multisite

## البدء السريع

### استخدم واجهة برمجة التطبيقات REST

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### التفاعل مع الأحداث

```php
add_action('wu_customer_post_create', function($customer) {
    // رد على تسجيلات العملاء الجدد
});
```

### بناء إضافة

```bash
# إنشاء هيكل إضافة من القالب
bash create-addon.sh
```

راجع كل قسم للحصول على وثائق مفصلة وأمثلة.
