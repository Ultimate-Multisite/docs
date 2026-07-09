---
id: wu_checkout_order_created
title: کردار - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

دوای ئەوەی داواکاریی checkout بە تەواوی کۆکراوە، کار دەکات.

Addonـەکان دەتوانن ئەمە بەکاربهێنن بۆ دروستکردنی membershipـی لاوەکی بۆ بەرهەمەکان کە خولی پارەدانە سەربەخۆیان هەیە.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | ئۆبژێکتی cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | کڕیارەکە. |
| $membership | `\WP_Ultimo\Models\Membership` | membershipـی سەرەکی. |
| $payment | `\WP_Ultimo\Models\Payment` | پارەدانەکە. |

### Since

- 2.5.0
### Source

پێناسەکراوە لە [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) لە هێڵی 891
