---
id: wu_checkout_order_created
title: ਕਾਰਵਾਈ - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

ਜਦੋਂ చెక్అవుਟ ਆਰਡਰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤਿਆਰ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇਹ ਐਕਸ਼ਨ ਚੱਲਦਾ ਹੈ।

ਐਡਆਨਜ਼ ਇਸਦੀ ਵਰਤੋਂ ਕਰਕੇ ਉਹਨਾਂ ਉਤਪਾਦਾਂ ਲਈ ਸੈਕੰਡਰੀ ਮੈਂਬਰਸ਼ਿਪ ਬਣਾ ਸਕਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਦੇ ਬਿਲਿੰਗ ਸਾਈਕਲ ਵੱਖਰੇ ਹੋਣ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | ਕਾਰਟ/ਆਰਡਰ ਆਬਜੈਕਟ। |
| $customer | `\WP_Ultimo\Models\Customer` | ਗਾਹਕ (Customer)। |
| $membership | `\WP_Ultimo\Models\Membership` | ਮੁੱਖ ਮੈਂਬਰਸ਼ਿਪ। |
| $payment | `\WP_Ultimo\Models\Payment` | ਭੁਗਤਾਨ (Payment)। |

### Since

- 2.5.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
