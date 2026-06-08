---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

يقوم هذا المرشح بتحديد تأخير البحث عن النطاق (domain search debounce delay) بالمللي ثانية.

لتقليل استدعاءات واجهة برمجة التطبيقات (API calls) في حال كانت الاتصالات بطيئة، قم بزيادة هذه القيمة.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | تأخير إزالة الارتداد (debounce delay) بالمللي ثانية. القيمة الافتراضية هي 500. |

### Since

- 2.1.0
### Source

مُعرّف في [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) في السطر 854
