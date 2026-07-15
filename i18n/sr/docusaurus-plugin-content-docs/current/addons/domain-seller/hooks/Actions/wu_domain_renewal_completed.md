---
id: wu_domain_renewal_completed
title: Радња - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Акција: wu_domain_renewal_completed

Покреће се након што је домен успешно обновљен.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаћање које је покренуло обнову. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаподаци обнове (domain_name, years, customer_id, итд.). |
| $result | `array&lt;string,mixed&gt;` | Сирови низ резултата који је вратио регистар, укључујући нови expiry_date. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) у реду 594
