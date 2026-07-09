---
id: wu_domain_registration_failed
title: Акција - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Акција: wu_domain_registration_failed

Се активира откако обидот за регистрација на домен ќе не успее.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаќањето што ја активираше регистрацијата. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаподатоци за регистрацијата, вклучувајќи status=failed и error_message. |
| $error_message | `string` | Читлива за човек порака за грешка од регистраторот. |

### Од

- 2.0.0
### Извор

Дефинирано во [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) на линија 1250
