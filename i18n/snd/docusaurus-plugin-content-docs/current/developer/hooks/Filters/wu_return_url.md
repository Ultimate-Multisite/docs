---
id: wu_return_url
title: فلٽر - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# فلٽر: wu_return_url

ترقي ڪندڙن کي checkout عملن کان پوءِ استعمال ٿيندڙ gateway return URL تبديل ڪرڻ جي اجازت ڏيو.

## پيرا ميٽرز {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $return_url | `string` | عمل کان پوءِ موڙڻ لاءِ URL. |
| $gateway | `self` | gateway جو نمونو. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ادائيگي جو نمونو. |
| $cart | `\WP_Ultimo\Checkout\Cart` | موجوده Ultimate Multisite cart آرڊر. |

### کان وٺي {#since}

- 2.0.20
### ذريعو {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ۾ ليڪ 683 تي بيان ڪيل


## واپسيون {#returns}
