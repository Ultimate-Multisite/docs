---
id: wu_checkout_order_created
title: ھەرىكەت - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# مەشغۇلات: wu_checkout_order_created

checkout زاكازى تولۇق قۇراشتۇرۇلغاندىن كېيىن ئىجرا بولىدۇ.

قوشۇمچىلار مۇستەقىل ھېسابات قىلىش دەۋرى بار مەھسۇلاتلار ئۈچۈن ئىككىنچى دەرىجىلىك ئەزالىقلارنى قۇرۇشتا بۇنى ئىشلىتەلەيدۇ.

## پارامېتىرلار

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | سېۋەت/زاكاز ئوبيېكتى. |
| $customer | `\WP_Ultimo\Models\Customer` | خېرىدار. |
| $membership | `\WP_Ultimo\Models\Membership` | ئاساسىي ئەزالىق. |
| $payment | `\WP_Ultimo\Models\Payment` | چىقىم. |

### باشلاپ

- 2.5.0
### مەنبە

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ھۆججىتىنىڭ 891-قۇرىدا ئېنىقلانغان.
