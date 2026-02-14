---
id: wu_domain_has_correct_dns
title: فلتر - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# فلتر: wu_domain_has_correct_dns

يسمح لمطوري الإضافات بإضافة فحوصات جديدة لتحديد النتائج.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $result | `bool` | النتيجة الحالية. |
| $domain | `self` | مثيل النطاق الحالي. |
| $domains_and_ips | `array` | قائمة النطاقات وعناوين IP التي تم العثور عليها في البحث DNS. |

### منذ

- 2.0.4

### المصدر

تم تعريفه في [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) في السطر 455


## النتائج

إذا كان إعداد DNS صحيحًا أم لا.
