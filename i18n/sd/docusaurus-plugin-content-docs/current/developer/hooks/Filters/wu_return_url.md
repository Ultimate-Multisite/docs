---
id: wu_return_url
title: فلٽر - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

ڊولپرز کي اجازت ڏئي ٿو ته checkout عملن کان پوءِ استعمال ٿيندڙ گيٽ وي واپسي URL تبديل ڪن.

## پيرا ميٽر {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | عمل کان پوءِ ريڊائريڪٽ ڪرڻ لاءِ URL. |
| $gateway | `self` | گيٽ وي instance. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ادائيگي instance. |
| $cart | `\WP_Ultimo\Checkout\Cart` | موجوده Ultimate Multisite ڪارٽ آرڊر. |

### کان وٺي {#since}

- 2.0.20
### ذريعو {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ۾ لائن 683 تي بيان ٿيل


## واپسيون {#returns}
