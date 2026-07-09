---
id: wu_domain_renewal_failed
title: Акција - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Се активира откако обид за обновување домен ќе не успее.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаќањето што го активираше обновувањето. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаподатоци за обновување (domain_name, years, итн.). |
| $error_message | `string` | Читлива за корисник порака за грешка од регистраторот. |

### Од

- 2.0.0
### Извор

Дефинирано во [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) на линија 630
