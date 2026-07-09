---
id: wu_domain_ses_verified
title: פעולה - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

מופעל כאשר SES מאשר שדומיין מסוים עבר אימות DKIM.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | אובייקט הדומיין. |

### מאז {#since}

- 2.2.0
### מקור {#source}

מוגדר ב[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) בשורה 480
