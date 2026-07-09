---
id: wu_domain_renewal_completed
title: Дејство - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Се активира откако доменот е успешно обновен.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаќањето што го активираше обновувањето. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаподатоци за обновување (domain_name, years, customer_id, итн.). |
| $result | `array&lt;string,mixed&gt;` | Сурова низа со резултат вратена од регистраторот, вклучувајќи го новиот expiry_date. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) на линија 594
