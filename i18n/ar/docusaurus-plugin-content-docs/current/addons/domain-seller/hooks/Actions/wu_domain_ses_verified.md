---
id: wu_domain_ses_verified
title: إجراء - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

يتم تشغيل هذا الإجراء عندما يؤكد SES أن النطاق (domain) قد تم التحقق منه باستخدام DKIM.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | كائن النطاق. |

### منذ {#since}

- 2.2.0
### المصدر {#source}

مُعرّف في [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) في السطر 480
