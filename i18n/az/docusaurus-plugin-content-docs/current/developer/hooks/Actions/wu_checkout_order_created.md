---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Checkout sifarişi tam qurulduqdan sonra işə düşür.

Addonlar bunu, müstəqil hesablanma dövrləri olan məhsullar üçün ikincil üyəliklər yaratmaq məqsədilə istifadə edə bilərlər.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Səbət/sifariş obyekti. |
| $customer | `\WP_Ultimo\Models\Customer` | Müştəri. |
| $membership | `\WP_Ultimo\Models\Membership` | Əsas üyəlik. |
| $payment | `\WP_Ultimo\Models\Payment` | Ödəniş. |

### Since

- 2.5.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
