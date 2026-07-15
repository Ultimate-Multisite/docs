---
id: wu_domain_renewal_completed
title: Дія - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Викликається після успішного поновлення домену.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платіж, який спричинив поновлення. |
| $renewal_data | `array<string,mixed>` | Метадані поновлення (назва домену, роки, customer_id тощо). |
| $result | `array<string,mixed>` | Сирий масив результатів, повернений реєстратором, що включає нову expiry_date. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено у [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) на рядку 594
