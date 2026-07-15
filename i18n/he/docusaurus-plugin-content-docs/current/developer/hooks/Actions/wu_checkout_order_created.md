---
id: wu_checkout_order_created
title: פעולה - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

מופעל לאחר שסדר ההזמנה (checkout) הושלם לחלוטין.

תוספים יכולים להשתמש בזה כדי ליצור מנויים משניים (secondary memberships) עבור מוצרים עם מחזורי חיוב עצמאיים.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | אובייקט העגלה/ההזמנה. |
| $customer | `\WP_Ultimo\Models\Customer` | הלקוח. |
| $membership | `\WP_Ultimo\Models\Membership` | המנוי הראשי. |
| $payment | `\WP_Ultimo\Models\Payment` | התשלום. |

### מאז {#since}

- 2.5.0
### מקור {#source}

מוגדר ב[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) בשורה 891
