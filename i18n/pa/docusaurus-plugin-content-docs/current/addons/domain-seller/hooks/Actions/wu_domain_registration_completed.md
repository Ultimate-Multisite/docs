---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ਇਹ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਡੋਮੇਨ ਸਫਲਤਾਪੂਰਵਕ ਰਜਿਸਟਰ ਹੋ ਜਾਂਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| ਨਾਮ (Name) | ਕਿਸਮ (Type) | ਵਰਣਨ (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ਉਹ ਭੁਗਤਾਨ ਜਿਸ ਕਾਰਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਹੋਈ। |
| $registration_data | `array<string,mixed>` | ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦਾ ਮੈਟਾਡੇਟਾ (ਜਿਵੇਂ ਕਿ domain_name, provider_id, ਸਾਲ, expiry_date, ਆਦਿ)। |
| $result | `array<string,mixed>` | ਰਜਿਸਟਰਾਰ ਦੁਆਰਾ ਵਾਪਸ ਕੀਤਾ ਗਿਆ ਕੱਚਾ ਨਤੀਜਾ ਐਰੇ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.0.0
### ਸਰੋਤ (Source) {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ਵਿੱਚ ਲਾਈਨ 1204 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।
