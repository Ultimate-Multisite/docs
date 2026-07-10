---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ਇਹ ਕਦੋਂ ਟ੍ਰਿਗਰ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਡੋਮੇਨ ਨੂੰ ਨਵਾਂ ਕਰਵਾਉਣ (renewal) ਦੀ ਕੋਸ਼ਿਸ਼ ਅਸਫਲ ਹੋ ਜਾਂਦੀ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ (Parameters) {#parameters}

| ਨਾਮ (Name) | ਕਿਸਮ (Type) | ਵਰਣਨ (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ਉਹ ਭੁਗਤਾਨ ਜਿਸ ਕਾਰਨ ਨਵਾਂ ਕਰਵਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਹੋਈ। |
| $renewal_data | `array&lt;string,mixed&gt;` | ਨਵਾਂ ਕਰਵਾਉਣ ਨਾਲ ਸੰਬੰਧਿਤ ਮੈਟਾਡੇਟਾ (ਜਿਵੇਂ ਕਿ domain_name, years, ਆਦਿ)। |
| $error_message | `string` | ਰਜਿਸਟਰਾਰ ਵੱਲੋਂ ਆਇਆ ਮਨੁੱਖ ਲਈ ਪੜ੍ਹਨਯੋਗ ਗਲਤੀ ਸੁਨੇਹਾ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.0.0
### ਸਰੋਤ (Source) {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ਵਿੱਚ ਲਾਈਨ 630 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
