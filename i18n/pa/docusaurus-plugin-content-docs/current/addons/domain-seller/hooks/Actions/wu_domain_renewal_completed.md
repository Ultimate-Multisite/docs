---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

ਇਹ ਐਕਸ਼ਨ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਕਿਸੇ ਡੋਮੇਨ ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਨਵਾਂ (renew) ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ਉਹ ਭੁਗਤਾਨ ਜਿਸ ਕਾਰਨ ਨਵਾਂ ਕਰਵਾਇਆ ਗਿਆ। |
| $renewal_data | `array&lt;string,mixed&gt;` | ਨਵਾਂ ਕਰਨ ਦਾ ਮੈਟਾਡੇਟਾ (ਜਿਵੇਂ ਕਿ domain_name, years, customer_id, ਆਦਿ)। |
| $result | `array&lt;string,mixed&gt;` | ਰਜਿਸਟਰਾਰ ਦੁਆਰਾ ਵਾਪਸ ਕੀਤਾ ਗਿਆ ਕੱਚਾ ਨਤੀਜਾ ਐਰੇ, ਜਿਸ ਵਿੱਚ ਨਵੀਂ `expiry_date` ਸ਼ਾਮਲ ਹੈ। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ਵਿੱਚ ਲਾਈਨ 594 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।
