---
id: wu_domain_transfer_completed
title: إجراء - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# الإجراء: wu_domain_transfer_completed

يتم تشغيله بعد اكتمال نقل النطاق.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | كائن النطاق. |
| $transfer_data | `array` | بيانات اكتمال النقل. |

### منذ {#since}

- 2.1.0
### المصدر {#source}

مُعرّف في [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) في السطر 690
