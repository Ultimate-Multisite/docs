---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order

מאפשר למפתחים להפעיל hooks נוספים.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $checkout | `\Checkout` | מופע אובייקט הצ'קאוט. |
| $cart | `\Cart` | מופע עגלת הקניות של הצ'קאוט. |

### מאז

- 2.0.9
### מקור

מוגדר ב-[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) בשורה 1013
