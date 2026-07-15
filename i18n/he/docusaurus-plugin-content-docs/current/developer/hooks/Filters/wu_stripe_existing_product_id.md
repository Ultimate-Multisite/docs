---
id: wu_stripe_existing_product_id
title: מסנן - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# מסנן: wu_stripe_existing_product_id

מסנן את מזהה המוצר שצריך לבדוק. אם מזהה זה קיים, המנוי החדש ישתמש במוצר הזה.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $product_id | `string` | מזהה של מוצר Stripe לבדיקה. |
| $name | `string` | שם המוצר. |

### מקור {#source}

מוגדר ב-[inc/gateways/class-base-stripe-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) בשורה 2741
