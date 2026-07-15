---
id: wu_checkout_order_created
title: عمل - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

checkout آرڊر مڪمل طور تي تيار ٿيڻ کان پوءِ هلندو آهي.

Addons هن کي آزاد billing cycles وارن پراڊڪٽس لاءِ ثانوي memberships ٺاهڻ لاءِ استعمال ڪري سگهن ٿا.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | cart/order آبجيڪٽ. |
| $customer | `\WP_Ultimo\Models\Customer` | customer. |
| $membership | `\WP_Ultimo\Models\Membership` | بنيادي membership. |
| $payment | `\WP_Ultimo\Models\Payment` | payment. |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ۾ لائن 891 تي تعريف ٿيل آهي.
