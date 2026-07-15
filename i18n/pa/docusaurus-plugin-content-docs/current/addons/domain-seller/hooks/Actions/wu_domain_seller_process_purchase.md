---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

ਇਹ ਟ੍ਰਿਗਰ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਚੈੱਕਆਉਟ ਪੂਰਾ ਹੋਣ ਤੋਂ ਬਾਅਦ ਡੋਮੇਨ ਖਰੀਦ ਦਾ ਪ੍ਰੋਸੈਸ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੁੰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ਭੁਗਤਾਨ ਆਬਜੈਕਟ। |
| $checkout_data | `array<string,mixed>` | ਸਾਈਨਅੱਪ ਫਾਰਮ ਤੋਂ ਪੂਰਾ ਚੈੱਕਆਉਟ ਡਾਟਾ। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ਵਿੱਚ ਲਾਈਨ 246 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
