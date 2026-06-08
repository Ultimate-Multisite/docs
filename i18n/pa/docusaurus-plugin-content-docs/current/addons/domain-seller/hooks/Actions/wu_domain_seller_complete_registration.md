---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

ਇਹ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਭੁਗਤਾਨ (payment) ਕਿਸੇ ਅਜਿਹੀ ਸਥਿਤੀ (status) ਵਿੱਚ ਬਦਲਦਾ ਹੈ ਜਿਸ ਨਾਲ ਡੋਮੇਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ਭੁਗਤਾਨ ਦਾ object। |
| $old_status | `string` | ਬਦਲਾਅ ਤੋਂ ਪਹਿਲਾਂ ਦਾ ਪੁਰਾਣਾ ਭੁਗਤਾਨ ਸਥਿਤੀ। |

### ਕਦੋਂ ਤੋਂ

- 2.0.0
### ਸਰੋਤ

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) ਵਿੱਚ ਲਾਈਨ 266 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।
