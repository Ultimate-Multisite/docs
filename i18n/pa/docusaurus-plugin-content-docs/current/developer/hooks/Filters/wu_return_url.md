---
id: wu_return_url
title: ਫਿਲਟਰ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

ਡਿਵੈਲਪਰਾਂ ਨੂੰ ਚੈੱਕਆਉਟ ਪ੍ਰੋਸੈਸਾਂ ਤੋਂ ਬਾਅਦ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਗੇਟਵੇ ਰਿਟਰਨ URL ਨੂੰ ਬਦਲਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ {#parameters}

| Name | Type | ਵਰਣਨ |
|------|------|-------------|
| $return_url | `string` | ਪ੍ਰੋਸੈਸ ਤੋਂ ਬਾਅਦ ਰੀਡਾਇਰੈਕਟ ਕਰਨ ਲਈ URL। |
| $gateway | `self` | ਗੇਟਵੇ ਦਾ ਇੰਸਟੈਂਸ। |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ਪੇਮੈਂਟ ਦਾ ਇੰਸਟੈਂਸ। |
| $cart | `\WP_Ultimo\Checkout\Cart` | ਮੌਜੂਦਾ Ultimate Multisite ਕਾਰਟ ਆਰਡਰ। |

### ਜਦੋਂ ਤੋਂ {#since}

- 2.0.20
### ਸਰੋਤ {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ਵਿੱਚ ਲਾਈਨ 683 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।


## ਵਾਪਸ ਕੀ ਕਰਦਾ ਹੈ {#returns}
