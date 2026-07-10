---
id: wu_checkout_order_created
title: عمل - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

چيڪ آئوٽ آرڊر مڪمل طور گڏ ٿيڻ کان پوءِ هلندو آهي.

Addons هن کي آزاد بلنگ چڪرن وارن پروڊڪٽس لاءِ ثانوي رڪنيتون ٺاهڻ لاءِ استعمال ڪري سگهن ٿا.

## پيرا ميٽرز {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | ڪارٽ/آرڊر آبجيڪٽ. |
| $customer | `\WP_Ultimo\Models\Customer` | گراهڪ. |
| $membership | `\WP_Ultimo\Models\Membership` | بنيادي رڪنيت. |
| $payment | `\WP_Ultimo\Models\Payment` | ادائگي. |

### کان وٺي {#since}

- 2.5.0
### ذريعو {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ۾ لائن 891 تي بيان ٿيل آهي
