---
id: wu_domain_registration_failed
title: Акција - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Покреће се након што покушај регистрације домена не успе.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаћање које је покренуло регистрацију. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаподаци регистрације који укључују status=failed и error_message. |
| $error_message | `string` | Читљива порука о грешци од регистрара. |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) у реду 1250
