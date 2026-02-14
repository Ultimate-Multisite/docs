---
id: wu_limits_is_fluent_form_above_limit
title: فلتر - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# عامل التصفية: wu_limits_is_fluent_form_above_limit

يفحص ما إذا كان نوع النموذج المعطى مسموحًا به في هذه الخطة، ويسمح لمطوري الإضافات بتصفية قيمة الإرجاع

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $value | `bool` | إذا كان نوع النموذج فوق الحد أم لا |
| $form_type | `string` | نوع النموذج الجاري فحصه |
| $form_count | `int` | عدد النماذج الحالي |
| $quota | `int` | الحصة المسموح بها |

### منذ

- 1.0.0

### المصدر

- معرف في [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) في السطر 56
- معرف في [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) في السطر 89
