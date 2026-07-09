---
id: wu_checkout_order_created
title: عمل - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

هغه وخت چلېږي کله چې د checkout فرمایش په بشپړ ډول جوړ شوی وي.

Addons کولای شي دا وکاروي څو د خپلواکو بلینګ دورو لرونکو محصولاتو لپاره ثانوي غړیتوبونه جوړ کړي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | د cart/فرمایش څیز. |
| $customer | `\WP_Ultimo\Models\Customer` | پیرودونکی. |
| $membership | `\WP_Ultimo\Models\Membership` | لومړنی غړیتوب. |
| $payment | `\WP_Ultimo\Models\Payment` | تادیه. |

### له نسخې راهیسې {#since}

- 2.5.0
### سرچینه {#source}

په [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) کې په 891 کرښه تعریف شوی.
