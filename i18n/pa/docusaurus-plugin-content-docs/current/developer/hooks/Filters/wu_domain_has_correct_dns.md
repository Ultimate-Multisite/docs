---
id: wu_domain_has_correct_dns
title: ਫਿਲਟਰ - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਜ਼ ਨੂੰ ਨਵੇਂ ਚੈੱਕ (checks) ਜੋੜਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਨਤੀਜੇ (results) ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਜਾ ਸਕੇ।

## ਪੈਰਾਮੀਟਰਜ਼ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | ਮੌਜੂਦਾ ਨਤੀਜਾ। |
| $domain | `self` | ਮੌਜੂਦਾ ਡੋਮੇਨ ਦਾ ਇੰਸਟੈਂਸ। |
| $domains_and_ips | `array` | DNS ਲੁੱਕਅਪ 'ਤੇ ਮਿਲੇ ਡੋਮੇਨਾਂ ਅਤੇ IPs ਦੀ ਸੂਚੀ। |

### ਕਦੋਂ ਤੋਂ (Since)

- 2.0.4
### ਸਰੋਤ (Source)

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455


## ਵਾਪਸ ਕੀ ਕਰਦਾ ਹੈ (Returns)
ਕਿ DNS ਸਹੀ ਤਰ੍ਹਾਂ ਸੈੱਟਅੱਪ ਹੈ ਜਾਂ ਨਹੀਂ।
