---
id: wu_domain_renewal_failed
title: Действие - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Изпълнява се, когато опит за преновяване на домейн се провали.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плащането, което е инициирало преновяването. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаданни за преновяване (domain_name, years и т.н.). |
| $error_message | `string` | Лесночитащо съобщение за грешка от регистратора. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефинирано в [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) на линия 630
