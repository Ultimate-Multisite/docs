---
id: wu_return_url
title: فلتەر - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# پاڵێوەر: wu_return_url {#filter-wureturnurl}

ڕێگە بە گەشەپێدەران دەدات URLی گەڕانەوەی دەروازەکە بگۆڕن کە دوای پرۆسەکانی پارەدان بەکاردێت.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $return_url | `string` | ئەو URL ـەی کە دوای پرۆسەکە بۆی ئاڕاستە دەکرێتەوە. |
| $gateway | `self` | نموونەی دەروازەکە. |
| $payment | `\WP_Ultimo\Models\Payment` | نموونەی پارەدانی Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | داواکاری سەبەتی ئێستای Ultimate Multisite. |

### لە وەشانی {#since}

- 2.0.20
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) لە هێڵی 683


## دەگەڕێنێتەوە {#returns}
