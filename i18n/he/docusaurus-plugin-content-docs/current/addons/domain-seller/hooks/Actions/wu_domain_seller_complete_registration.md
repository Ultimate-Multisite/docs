---
id: wu_domain_seller_complete_registration
title: פעולה - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

מופעל כאשר תשלום עובר למצב שצריך להפעיל רישום דומיין.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | אובייקט התשלום. |
| $old_status | `string` | סטטוס התשלום הקודם לפני המעבר. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[inc/class-domain-seller.php](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) בשורה 266
