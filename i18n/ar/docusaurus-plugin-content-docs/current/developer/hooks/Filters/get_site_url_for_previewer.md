---
id: get_site_url_for_previewer
title: فلتر - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# عامل تصفية: get_site_url_for_previewer

السماح لمطوري الإضافات بتصفية عنوان URL المستخدم في المعاينة

## المعاملات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $domain | `string` | المجال الافتراضي المستخدم حاليًا، مفيد للتلاعب |
| $domain_options | `array` | قائمة بجميع خيارات المجال المدخلة في إعدادات Ultimate Multisite → إعدادات الشبكة → خيارات المجال |

### منذ

- 1.7.2

### المصدر

معرّف في [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) في السطر 812

## يعيد

المجال الجديد الذي سيتم استخدامه
