---
id: wu_make_primary_domain_redirect_url
title: مرشح - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

تصفية عنوان URL لإعادة التوجيه بعد تعيين نطاق كـ رئيسي.

يتيح للمطورين تخصيص وجهة إعادة التوجيه للمستخدمين بعد تعيين نطاق كـ رئيسي بنجاح. بشكل افتراضي، يتم إعادة التوجيه إلى عنوان URL الحالي على الموقع الرئيسي، أو إلى عنوان URL المسؤول للموقع الجاري تعديله.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $redirect_url | `string` | عنوان URL الافتراضي لإعادة التوجيه. إما عنوان URL الحالي (إذا كان الموقع الرئيسي) أو عنوان URL المسؤول للموقع الحالي. |
| $current_site | `int` | معرف الموقع الذي يتم تعيين نطاقه كـ رئيسي. |
| $domain | `\Domain` | كائن النطاق الذي تم تعيينه كـ رئيسي. |
| $old_primary_domains | `array` | مصفوفة من معرفات النطاقات التي كانت رئيسية سابقًا. |

### منذ

- 2.0.0

### المصدر

تم تعريفه في [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) في السطر 639

## الإرجاع

عنوان URL المُعاد توجيهه بعد التصفية.
