---
id: wu_domain_renewal_failed
title: Радња - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Покреће се након што покушај обнове домена не успе.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаћање које је покренуло обнову. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаподаци обнове (domain_name, године итд.). |
| $error_message | `string` | Људима читљива порука о грешци од регистрара. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) у реду 630
