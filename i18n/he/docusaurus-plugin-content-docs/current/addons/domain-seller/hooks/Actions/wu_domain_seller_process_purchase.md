---
id: wu_domain_seller_process_purchase
title: פעולה - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

מופעל כאשר מעבדים רכישת דומיין לאחר השלמת תהליך התשלום.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | אובייקט התשלום. |
| $checkout_data | `array<string,mixed>` | נתוני ה-checkout המלאים מתוך טופס ההרשמה. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[inc/class-domain-seller.php](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) בשורה 246
