---
id: wu_checkout_order_created
title: אַקציע - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

לויפֿט נאָך דעם ווי די checkout באַשטעלונג איז גאָר צונויפֿגעשטעלט.

Addons קענען דאָס נוצן צו שאַפֿן צווייטיקע memberships פֿאַר products מיט אומאָפּהענגיקע רעכענונג־ציקלען.

## פּאַראַמעטערס {#parameters}

| Name | Type | באַשרײַבונג |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | דער cart/order אָביעקט. |
| $customer | `\WP_Ultimo\Models\Customer` | דער קונה. |
| $membership | `\WP_Ultimo\Models\Membership` | די הויפּט־membership. |
| $payment | `\WP_Ultimo\Models\Payment` | די צאָלונג. |

### זינט {#since}

- 2.5.0
### מקור {#source}

דעפֿינירט אין [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) אין שורה 891
