---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ਇਹ ਕੰਮ ਕਰਦਾ ਹੈ ਜਦੋਂ ਡੋਮੇਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼失败 ਹੁੰਦੀ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ਉਹ ਭੁਗਤਾਨ ਜਿਸ ਕਾਰਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਹੋਈ। |
| $registration_data | `array&lt;string,mixed&gt;` | ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੈਟਾਡੇਟਾ, ਜਿਸ ਵਿੱਚ status=failed ਅਤੇ error_message ਸ਼ਾਮਲ ਹੈ। |
| $error_message | `string` | ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਰਨ ਵਾਲੇ (registrar) ਵੱਲੋਂ ਮਨੁੱਖ ਲਈ ਪੜ੍ਹਨਯੋਗ ਗਲਤੀ ਸੁਨੇਹਾ। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ਵਿੱਚ ਲਾਈਨ 1250 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
