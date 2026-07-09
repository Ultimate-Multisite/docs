---
id: wu_return_url
title: فلټر - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# چاڼګر: wu_return_url

پرمخ‌وړونکو ته اجازه ورکوي چې د پېر بشپړولو له بهیرونو وروسته کارېدونکی د دروازې د راستنېدو URL بدل کړي.

## پارامترونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $return_url | `string` | هغه URL چې له بهیر وروسته ورته لېږدول کېږي. |
| $gateway | `self` | د دروازې نمونه. |
| $payment | `\WP_Ultimo\Models\Payment` | د Ultimate Multisite د تادیې نمونه. |
| $cart | `\WP_Ultimo\Checkout\Cart` | د Ultimate Multisite اوسنی د کراچۍ امر. |

### له نسخې راهیسې

- 2.0.20
### سرچینه

په [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) کې په 683 کرښه کې تعریف شوی


## راګرځېدنې
