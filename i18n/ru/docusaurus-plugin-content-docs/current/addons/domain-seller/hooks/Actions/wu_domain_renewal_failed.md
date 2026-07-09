---
id: wu_domain_renewal_failed
title: Действие - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Выполняется после неудачной попытки продления домена.

## Параметры {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платеж, который инициировал продление. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаданные продления (domain_name, years и т. д.). |
| $error_message | `string` | Ошибку, понятную человеку, полученную от регистратора. |

### Начиная с {#since}

- 2.0.0
### Источник {#source}

Определено в [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) в строке 630
