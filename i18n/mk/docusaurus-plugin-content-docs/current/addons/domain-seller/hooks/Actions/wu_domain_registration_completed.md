---
id: wu_domain_registration_completed
title: Акција - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Се активира откако доменот е успешно регистриран.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаќањето што ја активираше регистрацијата. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаподатоци за регистрацијата (domain_name, provider_id, years, expiry_date итн.). |
| $result | `array&lt;string,mixed&gt;` | Сурова низа со резултат вратена од регистраторот. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) на линија 1204
