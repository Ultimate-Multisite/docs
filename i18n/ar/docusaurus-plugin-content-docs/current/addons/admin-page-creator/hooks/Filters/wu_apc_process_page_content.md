---
id: wu_apc_process_page_content
title: فلتر - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

السماح للمطورين بالتلاعب بالمحتوى النهائي

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $content | `string` | المحتوى بعد الاستبدالات. |
| $content_before_processing | `string` | المحتوى قبل المعالجة. |
| $to_replace | `array` | مصفوفة تحتوي على الحقول المحجوزة. |
| $placeholder_count | `int` | عدد الحقول المحجوزة الموجودة. |

### منذ

- 1.4.0

### المصدر

مُعرّف في [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) في السطر 46

## الإرجاع

المحتوى بعد التعديل.
