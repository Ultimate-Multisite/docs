---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

جب چیک آؤٹ کا آرڈر مکمل طور پر تیار ہو جاتا ہے، تب یہ چلتا ہے۔

Addons اس کا استعمال ان مصنوعات کے لیے ثانوی ممبرشپ بنانے کے لیے کر سکتے ہیں جن کے بلنگ سائیکل الگ ہوتے ہیں۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | کارٹ/آرڈر کا آبجیکٹ۔ |
| $customer | `\WP_Ultimo\Models\Customer` | کسٹمر۔ |
| $membership | `\WP_Ultimo\Models\Membership` | بنیادی ممبرشپ۔ |
| $payment | `\WP_Ultimo\Models\Payment` | ادائیگی (Payment)۔ |

### Since {#since}

- 2.5.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
